<template>
  <section aria-label="donation form for campaign" class="">
    <Container>
      <div class="w-[100%]">
        <div class="flex gap-x-2">
          <img
            loading="lazy"
            src="../assets/images/campaign/dolar.svg"
            width="22"
            alt="..."
          />
          <h1 class="font-semibold text-2xl">
            {{ $t("global.donation_amount") }}
          </h1>
        </div>

        <!-- avilable amounts to select  -->
        <div class="amounts flex gap-x-3 items-center mt-5">
          <span
            v-for="(item, index) in avilableAmounts"
            :key="index"
            class="py-[5px] px-[15px] rounded-[5px] cursor-pointer"
            :class="{ 'bg-[#e8fde8]': amout == item }"
            @click="selectAmount(item)"
            >${{ item }}</span
          >
        </div>

        <!-- custom amount input -->
        <div class="relative mt-5">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <img
              loading="lazy"
              src="../assets/images/campaign/custom-amount.svg"
              alt=""
            />
          </div>

          <input
            type="text"
            id="quick1"
            v-model="customAmount"
            :placeholder="$t('global.custom_amount')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <!-- isMonthly checkbox -->

        <v-checkbox
          v-model="isMonthly"
          :label="$t('global.monthly_dontion')"
          color="primary"
          class="checkbox"
        ></v-checkbox>

        <!-- choose payment method -->
        <div class="payment_methods">
          <div class="flex gap-x-2">
            <img
              loading="lazy"
              src="../assets/images/campaign/payment-method.svg"
              width="22"
              alt="..."
            />
            <h1 class="font-semibold text-2xl">
              {{ $t("global.payment_method") }}
            </h1>
          </div>

          <v-radio-group v-model="paymentMethod" class="mt-5 checkbox" inline>
            <!-- visa & master card checkbox -->
            <v-radio
              value="visa"
              color="primary"
              class="me-[3rem]"
              :ripple="false"
            >
              <template v-slot:label>
                <div
                  class="flex gap-x-1 items-center p-2"
                  :class="{
                    'bg-primary-light rounded-md': paymentMethod == 'visa',
                  }"
                >
                  <img
                    loading="lazy"
                    src="../assets/images/campaign/master-card.svg"
                    alt="..."
                  />
                  <span>Master Card or</span>
                  <img
                    loading="lazy"
                    src="../assets/images/campaign/visa.svg"
                    alt="..."
                  />
                  <span>Visa</span>
                </div>
              </template>
            </v-radio>

            <!-- paybal checkbox -->
            <v-radio value="paypal" color="primary" :ripple="false">
              <template v-slot:label>
                <div
                  class="flex gap-x-1 items-center p-2"
                  :class="{
                    'bg-primary-light rounded-md': paymentMethod == 'paypal',
                  }"
                >
                  <img
                    loading="lazy"
                    src="../assets/images/campaign/paypal.svg"
                    alt="..."
                  />

                  <span>Pypal</span>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </div>

        <!-- personal info -->
        <div class="personal-info">
          <div class="flex gap-x-2 items-center">
            <img
              loading="lazy"
              src="../assets/images/campaign/personal-info.svg"
              width="22"
              alt="..."
            />
            <h1 class="font-semibold text-2xl">
              {{ $t("global.personal_info") }}
            </h1>
          </div>

          <form action="">
            <!-- name -->
            <div class="relative mt-5">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img
                  loading="lazy"
                  src="../assets/images/contact/name.svg"
                  alt=""
                />
              </div>

              <input
                type="text"
                id="quick4"
                :placeholder="$t('global.name')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <!-- email -->
            <div class="relative mt-5">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img
                  loading="lazy"
                  src="../assets/images/contact/email.svg"
                  alt=""
                />
              </div>

              <input
                type="email"
                id="quick3"
                :placeholder="$t('global.email')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <!-- phone -->
            <div class="relative mt-5">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img
                  loading="lazy"
                  src="../assets/images/contact/phone.svg"
                  alt=""
                />
              </div>

              <input
                type="text"
                id="quick2"
                :placeholder="$t('global.phone')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <!-- comment -->
            <div class="relative mt-5">
              <div
                class="absolute ltr:right-0 rtl:left-0 top-3 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <img
                  loading="lazy"
                  src="../assets/images/campaign/edit.svg"
                  alt=""
                />
              </div>

              <textarea
                type="text"
                id="quick5"
                :placeholder="$t('global.comment')"
                class="block w-full px-4 pb-md pt-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
          </form>
        </div>

        <!-- confirm donation -->
        <v-btn
          class="text-capitalize rounded-lg w-100 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >{{ $t("global.donate_now") }}</v-btn
        >

        <!-- payment advantages -->
        <div class="mt-3 flex justify-between items-center">
          <div class="flex gap-x-2 items-center">
            <img
              loading="lazy"
              src="../assets/images/campaign/icon2.svg"
              alt=""
            />
            <span class="text-sm leading-20 text-[#12121299]">{{
              $t("global.secure_payment")
            }}</span>
          </div>

          <div class="flex gap-x-2 items-center">
            <img
              loading="lazy"
              src="../assets/images/campaign/icon3.svg"
              alt=""
            />
            <span class="text-sm leading-20 text-[#12121299]">{{
              $t("global.transparent")
            }}</span>
          </div>

          <div class="flex gap-x-2 items-center">
            <img
              loading="lazy"
              src="../assets/images/campaign/icon1.svg"
              alt=""
            />
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
import Container from "~/global/Container.vue";

const avilableAmounts = ref<number[]>([25, 50, 100, 250]);
const customAmount = ref<number | null>(null);
const isMonthly = ref<boolean>(true);
const paymentMethod = ref<string>("visa");
const amout = ref<number>(25);
const selectAmount = (item: number): void => {
  amout.value = item;
};
</script>
