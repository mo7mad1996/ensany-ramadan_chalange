<template>
  <section aria-label="donation form for campaign" class="pb-sm">
    <Container>
      <div class="lg:w-[466px] xl:w-[466px] md:w-[343px] w-[100%]">
        <Form v-slot="{ meta }" @submit="onSubmit">
          <div class="flex gap-x-2">
            <img
              src="../../../assets/images/campaign/dolar.svg"
              width="22"
              alt="..."
            />
            <h1 class="font-semibold text-2xl">
              {{ $t("global.donation_amount") }}
            </h1>
          </div>

          <!-- available amounts to select  -->
          <div
            class="amounts flex xl:flex-row lg:flex-row md:flex-row flex-col gap-0 mt-5"
          >
            <div class="flex gap-x-3 items-center">
              <span
                v-for="(item, index) in avilableAmounts"
                :key="index"
                class="py-[5px] px-[10px] rounded-[5px] cursor-pointer"
                :class="{ 'bg-[#e8fde8]': donationData.amount == item }"
                @click="selectAmount(item)"
              >
                <bdi>{{ item }} {{ selectedCurrencyLabel }}</bdi>
              </span>
            </div>

            <div
              @click="showCustomInput"
              class="custom_donation cursor-pointer py-[5px] px-[15px] rounded-[5px] hover:bg-[#e8fde8]"
            >
              <span>{{ $t("global.custom") }}</span>
            </div>
          </div>

          <!-- custom amount input -->
          <div>
            <div class="relative mt-5" v-if="customInput">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img
                  src="../../../assets/images/campaign/custom-amount.svg"
                  alt=""
                />
              </div>

              <Field
                name="custom_amount"
                rules="required|englishNumbersOnly"
                type="text"
                id="custom_amount"
                v-model.number="donationData.amount"
                :placeholder="$t('global.custom_amount')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
            <ErrorMessage
              name="custom_amount"
              class="pt-2 text-red-500 text-sm"
              as="span"
            />
          </div>

          <!-- Donation Type -->
          <div class="donation_type pt-5 pb-5">
            <h5 class="font-semibold text-lg">
              {{ $t("global.donation_type") }}
            </h5>

            <v-radio-group
              v-model="donationType"
              id="radio-group-9-messages"
              class="mt-2 checkbox"
              inline
            >
              <!-- monthly -->
              <v-radio
                value="monthly"
                disabled
                id="input-12"
                name="radio-group-9"
                color="primary"
                class="me-[2rem]"
                :ripple="false"
              >
                <template v-slot:label>
                  <label for="input-12">{{ $t("global.monthly") }}</label>
                </template>
              </v-radio>

              <!-- weekly -->
              <v-radio
                value="weekly"
                disabled
                name="radio-group-10"
                id="input-13"
                color="primary"
                :ripple="false"
                class="me-[2rem]"
              >
                <template v-slot:label>
                  <label for="input-13">{{ $t("global.weekly") }}</label>
                </template>
              </v-radio>

              <!-- dialy -->
              <v-radio
                value="dialy"
                disabled
                name="radio-group-11"
                id="input-14"
                color="primary"
                :ripple="false"
                class="me-[2rem]"
              >
                <template v-slot:label>
                  <label for="input-14">{{ $t("global.dialy") }}</label>
                </template>
              </v-radio>

              <!-- onetime -->
              <v-radio
                value="onetime"
                color="primary"
                name="radio-group-12"
                id="input-15"
                :ripple="false"
              >
                <template v-slot:label>
                  <label for="input-15">{{ $t("global.onetime") }}</label>
                </template>
              </v-radio>
            </v-radio-group>
          </div>

          <!-- personal info -->
          <div class="personal-info pt-5">
            <div class="flex gap-x-2 items-center">
              <img
                src="../../../assets/images/campaign/personal-info.svg"
                width="22"
                alt="..."
              />
              <h1 class="font-semibold text-2xl">
                {{ $t("global.personal_info") }}
              </h1>
            </div>

            <!-- name -->
            <div>
              <div class="relative mt-5">
                <div
                  class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                >
                  <img src="../../../assets/images/contact/name.svg" alt="" />
                </div>

                <Field
                  name="name"
                  rules="required"
                  v-model="donationData.name"
                  type="text"
                  id="name"
                  :placeholder="$t('global.name')"
                  class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                />
              </div>

              <ErrorMessage name="name" class="text-sm text-red-500 mt-2" />
            </div>

            <!-- name hidden checkbox -->
            <v-checkbox
              v-model="isHidden"
              class="checkbox"
              color="primary"
              id="checkbox-16"
              :ripple="false"
            >
              <template v-slot:label>
                <label for="checkbox-16" class="text-sm">{{
                  $t("global.name_hidden")
                }}</label>
              </template>
            </v-checkbox>

            <!-- email -->
            <div>
              <div class="relative">
                <div
                  class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                >
                  <img src="../../../assets/images/contact/email.svg" alt="" />
                </div>

                <Field
                  name="email"
                  type="email"
                  v-model="donationData.email"
                  rules="required|email"
                  id="email"
                  :placeholder="$t('global.email')"
                  class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                />
              </div>

              <ErrorMessage name="email" class="text-sm text-red-500 mt-2" />
            </div>

            <!-- phone -->
            <div>
              <div class="relative mt-5">
                <div
                  class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                >
                  <img src="../../../assets/images/contact/phone.svg" alt="" />
                </div>

                <Field
                  name="phone"
                  rules="required"
                  v-model="donationData.mobile"
                  type="text"
                  id="phone"
                  :placeholder="$t('global.phone')"
                  class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                />
              </div>

              <ErrorMessage name="phone" class="text-sm text-red-500 mt-2" />
            </div>
          </div>

          <!-- make donation to someone you love -->
          <div class="make_donation">
            <v-checkbox
              v-model="gift"
              class="checkbox pt-3 pb-2"
              id="checkbox-19"
              color="primary"
              :ripple="false"
            >
              <template v-slot:label>
                <p class="text-2xl">{{ $t("global.make_donation") }}</p>
              </template>
            </v-checkbox>

            <Transition>
              <div class="form" v-if="gift">
                <!-- someone name -->
                <div>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                    >
                      <img
                        src="../../../assets/images/contact/name.svg"
                        alt=""
                      />
                    </div>

                    <Field
                      name="some_name"
                      rules="required"
                      v-model="donationData.love_name"
                      type="text"
                      id="some_name"
                      :placeholder="$t('global.some_name')"
                      class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />
                  </div>

                  <ErrorMessage
                    name="some_name"
                    class="text-sm text-red-500 mt-2"
                  />
                </div>

                <!--someone email -->
                <div>
                  <div class="relative mt-5">
                    <div
                      class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                    >
                      <img
                        src="../../../assets/images/contact/email.svg"
                        alt=""
                      />
                    </div>

                    <Field
                      name="some_email"
                      type="email"
                      v-model="donationData.love_email"
                      rules="required|email"
                      id="some_email"
                      :placeholder="$t('global.gift_email')"
                      class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />
                  </div>

                  <ErrorMessage
                    name="some_email"
                    class="text-sm text-red-500 mt-2"
                  />
                </div>

                <!--someone phone -->
                <div>
                  <div class="relative mt-5">
                    <div
                      class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                    >
                      <img
                        src="../../../assets/images/contact/phone.svg"
                        alt=""
                      />
                    </div>

                    <Field
                      name="some_phone"
                      rules="required"
                      v-model="donationData.love_mobile"
                      type="text"
                      id="some_phone"
                      :placeholder="$t('global.some_number')"
                      class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />
                  </div>

                  <ErrorMessage
                    name="some_phone"
                    class="text-sm text-red-500 mt-2"
                  />
                </div>

                <!-- comments -->
                <div class="comments pt-5">
                  <div class="flex gap-x-2">
                    <img
                      src="../../../assets/images/campaign/comment.svg"
                      width="22"
                      alt="..."
                    />
                    <h1 class="font-semibold text-2xl">
                      {{ $t("global.love_comment") }}
                    </h1>
                  </div>

                  <!-- comment -->
                  <div class="relative mt-5">
                    <div
                      class="absolute ltr:right-0 rtl:left-0 top-3 flex items-center ltr:pr-3 rtl:pl-3"
                    >
                      <img
                        src="../../../assets/images/campaign/edit.svg"
                        alt=""
                      />
                    </div>

                    <Field
                      as="textarea"
                      type="text"
                      rules="required"
                      name="love_comment"
                      v-model="donationData.love_comment"
                      id="text-eria"
                      :placeholder="$t('global.love_comment')"
                      class="block w-full px-4 pb-md pt-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    />

                    <ErrorMessage
                      name="love_comment"
                      class="text-sm text-red-500 mt-2"
                    />
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- confirm donation -->

          <v-btn
            :disabled="isLoading"
            :loading="isLoading"
            :ripple="false"
            type="submit"
            class="text-capitalize rounded-lg w-full mt-2"
            variant="flat"
            size="large"
            color="primary"
          >
            {{ $t("global.donate_now") }}
            (<bdi>
              {{ donationData.amount }}
              {{ selectedCurrencyLabel }} </bdi
            >)
          </v-btn>
        </Form>

        <!-- payment advantages -->
        <div class="mt-3 flex justify-between items-center">
          <div class="flex gap-x-2 items-center">
            <img src="../../../assets/images/campaign/icon2.svg" alt="" />
            <span class="text-sm leading-20 text-[#12121299]">{{
              $t("global.secure_payment")
            }}</span>
          </div>

          <div class="flex gap-x-2 items-center">
            <img src="../../../assets/images/campaign/icon3.svg" alt="" />
            <span class="text-sm leading-20 text-[#12121299]">{{
              $t("global.transparent")
            }}</span>
          </div>

          <div class="flex gap-x-2 items-center">
            <img src="../../../assets/images/campaign/icon1.svg" alt="" />
            <span class="text-sm leading-20 text-[#12121299]">{{
              $t("global.charity")
            }}</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ErrorMessage, Field, Form } from "vee-validate";
import Container from "~/global/Container.vue";
import { useDonation } from "../services/donation";
import { useCurrencyStore } from "../store/currancy";

const route = useRoute();
const avilableAmounts = [25, 50, 100, 250];
const donationType = ref<string>("onetime");
const gift = ref<boolean>(false);
const isHidden = ref<boolean>(false);
const customInput = ref<boolean>(false);
const { makeDonation, isLoading, error } = useDonation();
const currencyStore = useCurrencyStore();
const { selectedCurrency, selectedCurrencyLabel } = storeToRefs(currencyStore);

const donationData = ref<any>({
  name: "",
  email: "",
  mobile: "",
  love_donation: "",
  love_name: "",
  love_email: "",
  love_mobile: "",
  love_comment: "",
  amount: 50,
  ongoing_charity: "no",
  charity_amount: 0,
  currency_id: "",
  campaign_id: "",
});

const selectAmount = (item: number): void => {
  donationData.value.amount = item;
};

const showCustomInput = (): void => {
  customInput.value = !customInput.value;
};

const onSubmit = () => {
  if (
    donationType.value === "monthly" ||
    donationType.value === "weekly" ||
    donationType.value === "dialy"
  ) {
    donationData.value.ongoing_charity = "yes";
    donationData.value.charity_amount = donationData.value.amount;
  } else {
    donationData.value.ongoing_charity = "no";
  }

  if (gift.value) {
    donationData.value.love_donation = "yes";
  } else {
    donationData.value.love_donation = "no";
  }

  donationData.value.campaign_id = route.params.id;

  donationData.value.currency_id = selectedCurrency.value;

  makeDonation(donationData.value);
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
