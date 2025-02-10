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
        :disabled="checkIsAmountFilledOut"
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
      <v-card :flat="true">
        <v-data-table
          v-if="status == 'success'"
          :id="'datatable'"
          :name="'datatable'"
          :key="'datatable'"
          class="border rounded-lg"
          :items="donorCart?.data"
          :headers="headers"
          item-value="id"
          :page="currentPage"
          :server-items-length="totalItemsOnCart"
          :loading="status === 'pending'"
          @update:page="currentPage = $event"
          @update:items-per-page="itemsPerPage = $event"
        >
          <!-- Image & Name -->
          <template v-slot:item.name="{ item }">
            <div class="flex items-center gap-2 space-x-2">
              <v-avatar size="40">
                <img
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
              :type="'text'"
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
          <img
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

const { locale } = useI18n();
const { siteName } = useGlobalVar();
const { donorCart, status, currentPage, refresh } = useDonerCart();
const totalItemsOnCart = ref(0);
definePageMeta({
  layout: "donor",
  middleware: "require-auth",
});

const { token, user } = useAuth();
const { headers } = useDonationCartPage();
const isLoading = ref(false);
const checkIsAmountFilledOut = ref(true);
const customAmount = ref("");
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
    if (distributionOption.value === "manual") {
      const allAmountsFilled = newAmounts.every(
        (amount) => amount !== undefined && amount !== null && amount !== ""
      );

      checkIsAmountFilledOut.value = allAmountsFilled;

      if (allAmountsFilled) {
        calculateCustomTotal();
      }
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
  customAmount.value = total.toFixed(2);
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
    await api.post("doner/campaigns/create", data);
    closeDialog();
    isLoading.value = false;
    Swal.fire({
      icon: "success",
      title: "Good job!",
      text: "Donation submitted successfully!",
      timer: 2000,
      showConfirmButton: false,
    });
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

// onMounted(() => {
//   currenciesData.value = localStorage.getItem("selectedCurrency")
//     ? localStorage.getItem("selectedCurrency")
//     : "";
// });

watch([locale], (newLocale) => {
  const siteTitle = siteName(newLocale.value);
  useSeoMeta({
    title: siteTitle.value,
    ogTitle: siteTitle.value,
  });
});
</script>
