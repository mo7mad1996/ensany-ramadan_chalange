<template>
  <div class="dashboard">
    <div class="flex items-center justify-between">
      <h1 class="lg:flex xl:flex md:hidden hidden text-3xl font-bold">
        {{ $t("donor.donation_cart") }}
      </h1>
      <v-btn
        class="text-capitalize rounded-lg"
        variant="flat"
        size="default"
        color="primary"
        :disabled="!checkIsAmountFilledOut"
        @click="openDialog"
      >
        {{ $t("donor.confirm_donation") }}
      </v-btn>
    </div>

    <!-- توزيع المبالغ -->
    <div class="grid grid-cols-3 gap-8 mt-6 justify-between">
      <div class="col-span-1">
        <span class="custom-label text-sm">{{
          $t("donor.custom_amount")
        }}</span>
        <v-text-field
          v-model="customAmount"
          variant="outlined"
          density="compact"
          type="number"
          :id="'customAmount'"
          :key="'customAmount'"
          hide-details
          prepend-inner-icon="mdi-cash"
          :placeholder="`${selectedCurrencyLabel} 0`"
          class="custom-amount-input rounded-lg outline-none border-none focus:outline-none focus:border-none"
          :disabled="distributionOption === 'manual'"
        ></v-text-field>
      </div>

      <!-- Distribution Options -->
      <div class="col-span-2 self-end">
        <v-radio-group
          :id="'distribution'"
          :key="'distribution'"
          v-model="distributionOption"
          inline
        >
          <v-radio
            :id="'automatic'"
            :key="'automatic'"
            :label="$t('donor.distribute_amount_equally')"
            color="primary"
            :name="'payment_type'"
            value="automatic"
            class="automatic"
          ></v-radio>
          <v-radio
            :name="'payment_type'"
            :id="'manual'"
            :key="'manual'"
            :label="$t('donor.customize_per_campaign')"
            color="primary"
            value="manual"
            class="manual"
          ></v-radio>
        </v-radio-group>
      </div>
    </div>

    <!-- table -->
    <div class="content mt-sm">
      <span v-if="!donorCart">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </span>
      <v-card flat>
        <v-data-table
          v-if="donorCart"
          id="datatable"
          name="datatable"
          :key="'datatable'"
          class="border rounded-lg"
          :items="donorCart?.data"
          :headers="headers"
          item-value="datatable"
          :page="currentPage || 1"
          :server-items-length="totalItemsOnCart"
          :loading="status != 'success'"
          @update:page="currentPage = $event"
          @update:items-per-page="itemsPerPage = $event"
        >
          <!-- Image & Name -->
          <template v-slot:item.name="{ item }">
            <div class="flex items-center gap-2 space-x-2">
              <v-avatar size="40">
                <img loading="lazy" 
                  :src="item?.image"
                  alt="Campaign Image"
                  class="rounded-lg"
                />
              </v-avatar>

              <span>{{ item.name }}</span>
            </div>
          </template>

          <!-- Amount Input -->
          <template v-slot:item.amount="{ item }">
            <v-text-field
              v-model="item.amount"
              :id="'input-' + (item?.id || 'default')"
              :key="'input-' + (item?.id || 'default')"
              :type="'number'"
              variant="outlined"
              density="compact"
              :placeholder="`${selectedCurrencyLabel} 0`"
              class="w-100 rounded-lg outline-none border-none focus:border-primary focus:ring focus:ring-opacity-25"
              :disabled="distributionOption === 'automatic'"
            ></v-text-field>
          </template>
          <!-- Action Column -->
          <template v-slot:item.action="{ item }">
            <div
              class="flex items-center gap-2 cursor-pointer text-red-500"
              @click="removeItem(item.id)"
            >
              <v-icon size="20">mdi-close-circle</v-icon>
              <span>{{ $t("donor.remove") }}</span>
            </div>
          </template>

          <!-- Bold Total Amount -->
          <template v-slot:item.total_amount="{ item }">
            <span class="font-bold text-green-600">
              ${{ parseFloat(item.total_amount).toLocaleString() }}
            </span>
          </template>

          <!-- Created At -->
          <template v-slot:item.created_at="{ item }">
            {{ formattedDate(item.created_at) }}
          </template>
        </v-data-table>
      </v-card>
    </div>

    <!-- Dialog -->
    <dialog
      class="dialog m-auto rounded-[10px] h-50 min-w-[500px]"
      ref="donate"
    >
      <div class="close-icon p-3 w-full flex justify-end">
        <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
      </div>
      <div class="p-4">
        <div class="flex justify-center items-center flex-col w-full">
          <img loading="lazy" 
            src="../../../assets/images/donor/customdialog.png"
            alt="custom"
          />
          <h1 class="font-bold text-xl">{{ $t("donor.how_to_donate") }}</h1>
          <v-radio-group
            :key="'pay_type'"
            :id="'pay_type'"
            v-model="pay_type"
            row
          >
            <v-radio
              :id="'pay_full'"
              name="payment_type"
              :key="'pay_full'"
              :label="$t('donor.pay_full')"
              color="primary"
              value="full"
              class="pay_full"
            ></v-radio>
            <v-radio
              :id="'daily'"
              name="payment_type"
              :key="'daily'"
              :label="$t('donor.daily_payment')"
              color="primary"
              value="daily"
              class="daily_payment"
            ></v-radio>
          </v-radio-group>
          <div class="flex items-center justify-between gap-6 mt-5">
            <v-btn
              class="text-capitalize rounded-lg"
              @click="closeDialog"
              variant="flat"
              size="default"
              color="green-lighten-5"
            >
              {{ $t("donor.cancel") }}
            </v-btn>
            <v-btn
              class="text-capitalize rounded-lg"
              :loading="isLoading"
              :disabled="isLoading"
              @click="submitDonation"
              variant="flat"
              size="default"
              color="primary"
            >
              {{ $t("donor.save") }}
            </v-btn>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { api } from "~/helpers/axios";
import { useGlobalVar } from "~/helpers/global-var";
import { useAuth } from "~/modules/auth/services/auth";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";
import { useDonerCart } from "../services/donation-cart";
import { useDonationCartPage } from "../typescript/donation-cart";
const currencyStore = useCurrencyStore();
const { selectedCurrencyLabel } = storeToRefs(currencyStore);

const { siteName } = useGlobalVar();
siteName("donor.page_title_donor_donations_cart");

const { t } = useI18n();
const { locale } = useI18n();
const { donorCart, status, currentPage, refresh } = useDonerCart();
const totalItemsOnCart = ref(0);
definePageMeta({
  layout: "donor",
  middleware: "require-auth",
});

const { token, user } = useAuth();
const { headers } = useDonationCartPage();
const isLoading = ref(false);

const checkIsAmountFilledOut = ref(false);
const customAmount = ref(0);
const distributionOption = ref("automatic");
const donate = ref("");
const pay_type = ref("full");
const currenciesData = ref("");

watch(
  status,
  (newStatus) => {
    if (newStatus === "success") {
      totalItemsOnCart.value = donorCart?.data?.length || 0;
    } else {
      totalItemsOnCart.value = 0;
    }
  },
  { immediate: true }
);

// Watch for changes in customAmount when "equal" option is selected
watch(distributionOption, (newOption) => {
  if (newOption === "automatic" && customAmount.value) {
    distributeAmountEqually();
  }
});

// Watch for changes in customAmount when "equal" option is selected
watch(customAmount, (newAmount) => {
  if (distributionOption.value === "automatic") {
    distributeAmountEqually();
  }
});

watch(
  () => donorCart.value?.data?.map((item) => item.amount),
  (newAmounts) => {
    const allAmountsValid = newAmounts.every(
      (amount) => !isNaN(amount) && amount > 0
    );
    checkIsAmountFilledOut.value = allAmountsValid;
    if (allAmountsValid) {
      calculateCustomTotal();
    }
  },
  { deep: true }
);

const distributeAmountEqually = () => {
  const campaignsCount = donorCart?.value?.data?.length;
  if (campaignsCount > 0 && customAmount?.value) {
    const equalAmount = (
      parseFloat(customAmount.value) / campaignsCount
    ).toFixed(2);
    donorCart?.value?.data?.forEach((item) => {
      item.amount = equalAmount;
    });
  }
};

const removeItem = async (id) => {
  try {
    const res = await api.post(`/doner/cart/remove/${id}`);
    Swal.fire({
      icon: "success",
      text: `${res.data?.message}`,
      timer: 2000,
      showConfirmButton: false,
    });
    await refresh();
  } catch (err) {
    Swal.fire({
      icon: "error",
      text: err.response?.data?.message || err.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
};

const calculateCustomTotal = () => {
  const total = donorCart.value.data.reduce((sum, item) => {
    return sum + (parseFloat(item.amount) || 0);
  }, 0);
  customAmount.value = total.toFixed(0);
};

const submitDonation = async () => {
  const data = {
    total_amount: customAmount.value,
    amount_split_type:
      distributionOption.value === "manual" ? "manual" : "automatic",
    pay_type: pay_type.value === "full" ? "full" : "daily",
    currency_id: currenciesData.value,
    campaign: donorCart.value.data.map((item) => ({
      id: item.campaign?.id,
      amount: parseFloat(item.amount),
    })),
  };

  try {
    isLoading.value = true;
    const response = await api.post("doner/campaigns/create", data);
    closeDialog();
    isLoading.value = false;

    if (response?.data?.result?.url != "") {
      Swal.fire({
        icon: "success",
        title: "",
        text: t("donor.cart_saved_redirect_after_5_sec"),
        timer: 6000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        window.location.href = response?.data?.result?.url;
      }, 5000);
    } else {
      console.error("URL not found!");
    }

    await refresh();
  } catch (error) {
    isLoading.value = false;
    console.error("Error submitting donation:", error);
  }
};

const openDialog = () => {
  donate.value.showModal();
};

const closeDialog = () => {
  donate.value.close();
};

onMounted(() => {
  currenciesData.value = localStorage.getItem("selectedCurrency")
    ? localStorage.getItem("selectedCurrency")
    : "";
  //console.log(currenciesData.value);
});
</script>
