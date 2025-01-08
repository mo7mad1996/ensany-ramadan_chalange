<template>
  <section aria-label="donation form for campaign" class="pb-sm">
    <Container>
      <div class="lg:w-[466px] xl:w-[466px] md:w-[343px] w-[100%]">
        <form action="">
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
                src="../../../assets/images/campaign/custom-amount.svg"
                alt=""
              />
            </div>

            <input
              type="text"
              id="custom-input"
              v-model="customAmount"
              :placeholder="$t('global.custom_amount')"
              class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>

          <!-- Donation Type -->
          <div class="donation_type pt-5 pb-5">
            <h5 class="font-semibold text-lg">
              {{ $t("global.donation_type") }}
            </h5>

            <v-radio-group v-model="donationType" class="mt-2 checkbox" inline>
              <!-- monthly -->
              <v-radio
                value="monthly"
                color="primary"
                class="me-[2rem]"
                :ripple="false"
              >
                <template v-slot:label>
                  <span>{{ $t("global.monthly") }}</span>
                </template>
              </v-radio>

              <!-- weekly -->
              <v-radio
                value="weekly"
                color="primary"
                :ripple="false"
                class="me-[2rem]"
              >
                <template v-slot:label>
                  <span>{{ $t("global.weekly") }}</span>
                </template>
              </v-radio>

              <!-- dialy -->
              <v-radio
                value="dialy"
                color="primary"
                :ripple="false"
                class="me-[2rem]"
              >
                <template v-slot:label>
                  <span>{{ $t("global.dialy") }}</span>
                </template>
              </v-radio>

              <!-- onetime -->
              <v-radio value="onetime" color="primary" :ripple="false">
                <template v-slot:label>
                  <span>{{ $t("global.onetime") }}</span>
                </template>
              </v-radio>
            </v-radio-group>
          </div>

          <!-- choose payment method -->
          <div class="payment_methods">
            <div class="flex gap-x-2">
              <img
                src="../../../assets/images/campaign/payment-method.svg"
                width="22"
                alt="..."
              />
              <h1 class="font-semibold text-2xl">
                {{ $t("global.payment_method") }}
              </h1>
            </div>

            <v-radio-group v-model="paymentMethod" class="mt-4 checkbox" inline>
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
                      src="../../../assets/images/campaign/master-card.svg"
                      alt="..."
                    />
                    <span>Master Card or</span>
                    <img
                      src="../../../assets/images/campaign/visa.svg"
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
                      src="../../../assets/images/campaign/paypal.svg"
                      alt="..."
                    />

                    <span>Pypal</span>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>

            <!-- stripe form -->
            <!-- <div id="payment-form" class="mb-5">
            <label for="card-number-element">{{
              $t("global.card_number")
            }}</label>
            <div
              id="card-number-element"
              class="block mb-4 mt-1 w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            ></div>

            <div class="flex items-center justify-between gap-x-4">
              <div class="w-full">
                <label for="card-number-element">{{
                  $t("global.expires")
                }}</label>
                <div
                  id="card-expiry-element"
                  class="block w-full mt-1 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                ></div>
              </div>

              <div class="w-full">
                <label for="card-number-element">{{
                  $t("global.security_code")
                }}</label>
                <div
                  id="card-cvc-element"
                  class="block w-full mt-1 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                ></div>
              </div>
            </div>
          </div> -->
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
            <div class="relative mt-5">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img src="../../../assets/images/contact/name.svg" alt="" />
              </div>

              <input
                type="text"
                id="custom-input"
                :placeholder="$t('global.name')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <!-- email -->
            <div class="relative mt-5">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img src="../../../assets/images/contact/email.svg" alt="" />
              </div>

              <input
                type="email"
                id="custom-input"
                :placeholder="$t('global.email')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <!-- phone -->
            <div class="relative mt-5">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img src="../../../assets/images/contact/phone.svg" alt="" />
              </div>

              <input
                type="text"
                id="custom-input"
                :placeholder="$t('global.phone')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
          </div>

          <!-- make donation to someone you love -->
          <div class="make_donation">
            <v-checkbox
              v-model="gift"
              class="checkbox pt-3 pb-2"
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
                <div class="relative">
                  <div
                    class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                  >
                    <img src="../../../assets/images/contact/name.svg" alt="" />
                  </div>

                  <input
                    type="text"
                    id="custom-input"
                    :placeholder="$t('global.some_name')"
                    class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                  />
                </div>

                <!--someone email -->
                <div class="relative mt-5">
                  <div
                    class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                  >
                    <img
                      src="../../../assets/images/contact/email.svg"
                      alt=""
                    />
                  </div>

                  <input
                    type="email"
                    id="custom-input"
                    :placeholder="$t('global.gift_email')"
                    class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                  />
                </div>

                <!--someone phone -->
                <div class="relative mt-5">
                  <div
                    class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                  >
                    <img
                      src="../../../assets/images/contact/phone.svg"
                      alt=""
                    />
                  </div>

                  <input
                    type="text"
                    id="custom-input"
                    :placeholder="$t('global.some_number')"
                    class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                  />
                </div>
              </div>
            </Transition>
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
                {{ $t("global.add_comment") }}
              </h1>
            </div>

            <!-- comment -->
            <div class="relative mt-5">
              <div
                class="absolute ltr:right-0 rtl:left-0 top-3 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <img src="../../../assets/images/campaign/edit.svg" alt="" />
              </div>

              <textarea
                type="text"
                id="custom-input"
                :placeholder="$t('global.comment')"
                class="block w-full px-4 pb-md pt-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
          </div>

          <!-- confirm donation -->
          <v-btn
            class="text-capitalize rounded-lg w-100 mt-5"
            :ripple="false"
            variant="flat"
            size="large"
            color="primary"
            >{{ $t("global.donate_now") }} - ${{ amout }}</v-btn
          >
        </form>

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
import Container from "~/global/Container.vue";
// import setupStripe from "../typescript/stripe";

const avilableAmounts = ref<number[]>([25, 50, 100, 250]);
const customAmount = ref<number | null>(null);
const donationType = ref<string>("onetime");
const paymentMethod = ref<string>("visa");
const amout = ref<number>(25);
const gift = ref<boolean>(true);
const selectAmount = (item: number): void => {
  amout.value = item;
};

const makeDonation = (): void => {
  gift.value = !gift.value;
};

// onMounted(() => {
//   setupStripe();
// });
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
