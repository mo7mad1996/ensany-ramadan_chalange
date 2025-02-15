<template>
  <section aria-label="login page" class="pt-sm pb-sm">
    <vContainer>
      <div
        class="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between items-start lg:gap-xl xl:gap-xl md:gap-md gap-sm"
      >
        <div class="w-full">
          <Form @submit="onSubmit">
            <div class="flex gap-x-2">
              <img
                loading="lazy"
                src="~/assets/images/campaign/dolar.svg"
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
                  v-for="(item, index) in availableAmounts"
                  :key="index"
                  class="py-[5px] px-[10px] rounded-[5px] cursor-pointer"
                  :class="{
                    'bg-[#e8fde8]': donationData.amount == item && !customInput,
                  }"
                  @click="selectAmount(item)"
                >
                  <bdi>{{ item }} {{ selectedCurrencyLabel }}</bdi>
                </span>
              </div>

              <div
                @click="showCustomInput"
                :class="{ 'bg-[#e8fde8]': customInput }"
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
                    loading="lazy"
                    src="~/assets/images/campaign/custom-amount.svg"
                    alt="ramadanchallenges image"
                  />
                </div>

                <Field
                  name="custom_amount"
                  rules="required|englishNumbersOnly|min:0"
                  :validate-on-input="true"
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
                <!-- 
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
                 -->

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

            <v-window v-model="window">
              <v-window-item>
                <!-- personal info -->
                <div class="personal-info pt-5">
                  <div class="flex gap-x-2 items-center">
                    <img
                      loading="lazy"
                      src="~/assets/images/campaign/personal-info.svg"
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
                        <img
                          loading="lazy"
                          src="~/assets/images/contact/name.svg"
                          alt="ramadanchallenges image"
                        />
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

                    <ErrorMessage
                      name="name"
                      class="text-sm text-red-500 mt-2"
                    />
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
                        <img
                          loading="lazy"
                          src="~/assets/images/contact/email.svg"
                          alt="ramadanchallenges image"
                        />
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

                    <ErrorMessage
                      name="email"
                      class="text-sm text-red-500 mt-2"
                    />
                  </div>

                  <!-- phone -->
                  <div>
                    <div class="relative mt-5">
                      <div
                        class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                      >
                        <img
                          loading="lazy"
                          src="~/assets/images/contact/phone.svg"
                          alt="ramadanchallenges image"
                        />
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

                    <ErrorMessage
                      name="phone"
                      class="text-sm text-red-500 mt-2"
                    />
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
                              loading="lazy"
                              src="~/assets/images/contact/name.svg"
                              alt="ramadanchallenges image"
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
                              loading="lazy"
                              src="~/assets/images/contact/email.svg"
                              alt="ramadanchallenges image"
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
                              loading="lazy"
                              src="~/assets/images/contact/phone.svg"
                              alt="ramadanchallenges image"
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
                            loading="lazy"
                            src="~/assets/images/campaign/comment.svg"
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
                              loading="lazy"
                              src="~/assets/images/campaign/edit.svg"
                              alt="ramadanchallenges image"
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
                  :ripple="false"
                  class="text-capitalize rounded-lg w-full mt-2"
                  variant="flat"
                  size="large"
                  color="primary"
                  @click="window = 1"
                >
                  {{ $t("home.next") }}
                </v-btn>

                <!-- payment advantages -->
                <div class="mt-3 flex justify-between items-center">
                  <div class="flex gap-x-2 items-center">
                    <img
                      loading="lazy"
                      src="~/assets/images/campaign/icon2.svg"
                      alt="ramadanchallenges image"
                    />
                    <span class="text-sm leading-20 text-[#12121299]">{{
                      $t("global.secure_payment")
                    }}</span>
                  </div>

                  <div class="flex gap-x-2 items-center">
                    <img
                      loading="lazy"
                      src="~/assets/images/campaign/icon3.svg"
                      alt="ramadanchallenges image"
                    />
                    <span class="text-sm leading-20 text-[#12121299]">{{
                      $t("global.transparent")
                    }}</span>
                  </div>

                  <div class="flex gap-x-2 items-center">
                    <img
                      loading="lazy"
                      src="~/assets/images/campaign/icon1.svg"
                      alt="ramadanchallenges image"
                    />
                    <span class="text-sm leading-20 text-[#12121299]">{{
                      $t("global.charity")
                    }}</span>
                  </div>
                </div>
              </v-window-item>

              <v-window-item>
                <v-row>
                  <v-spacer class="ltr:hidden" />
                  <v-col cols="auto">
                    <v-btn
                      icon="mdi-arrow-left"
                      size="small"
                      class="m-2"
                      @click="window = 0"
                    />
                    <!-- variant="outlined" -->
                  </v-col>
                </v-row>
                <v-table density="compact" height="500px">
                  <thead>
                    <tr class="text-center text-bold">
                      <th>{{ t("donor.campaign_name") }}</th>
                      <th></th>
                      <th>{{ $t("donation_amount") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="campaign in campaigns" :key="campaign.id">
                      <td>{{ campaign.name }}</td>
                      <td>
                        <v-switch
                          color="primary"
                          v-model="selectedCampaigns"
                          :value="campaign.id"
                        />
                      </td>
                      <td>
                        {{
                          selectedCampaigns.indexOf(campaign.id) > -1
                            ? (
                                donationData.amount / selectedCampaigns.length
                              ).toFixed(2)
                            : "0.00"
                        }}
                        {{ selectedCurrencyLabel }}
                      </td>
                    </tr>
                  </tbody>
                  <div
                    class="loader mx-auto"
                    ref="loadingRef"
                    v-show="!isFinish"
                  />
                </v-table>
                <v-btn
                  class="text-capitalize rounded-lg block w-full my-4"
                  :loading="isLoading"
                  :disabled="isLoading"
                  variant="flat"
                  size="default"
                  color="primary"
                >
                  {{ $t("donor.save") }}
                </v-btn>
              </v-window-item>
            </v-window>
          </Form>
        </div>
        <div class="image">
          <img
            loading="lazy"
            src="~/assets/images/donate/donate.webp"
            class="w-full rounded-lg"
            alt="ramadanchallenges image"
          />
        </div>
      </div>
    </vContainer>
  </section>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";

import { useDonation } from "~/modules/campaigns/services/donation";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";
import { storeToRefs } from "pinia";
import { api } from "~/helpers/axios";
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("home.page_donate_all");

const route = useRoute();
const currencyStore = useCurrencyStore();
const { makeDonation, isLoading, error } = useDonation();
const { selectedCurrency, selectedCurrencyLabel } = storeToRefs(currencyStore);
const { locale, t } = useI18n();

const window = ref(0);
const availableAmounts = [5, 10, 50];
const donationType = ref<string>("onetime");
const gift = ref<boolean>(false);
const isHidden = ref<boolean>(false);
const customInput = ref<boolean>(false);
const page = ref(0);
const isFinish = ref(false);

const loadingRef = ref(null);
let observer: any = null;

const campaigns: any = ref([]);
const selectedCampaigns: any = ref([]);

const donationData = reactive<any>({
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

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) getCampaigns();
  });
});

watch(loadingRef, () => {
  if (loadingRef.value) observer.observe(loadingRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const selectAmount = (item: number): void => {
  donationData.amount = item;
  customInput.value = false;
};

const showCustomInput = (): void => {
  customInput.value = !customInput.value;
};

const getPayload = () => {
  if (
    donationType.value === "monthly" ||
    donationType.value === "weekly" ||
    donationType.value === "dialy"
  ) {
    donationData.ongoing_charity = "yes";
    donationData.charity_amount = donationData.amount;
  } else {
    donationData.ongoing_charity = "no";
  }

  if (gift.value) {
    donationData.love_donation = "yes";
  } else {
    donationData.love_donation = "no";
  }

  donationData.campaign_id = route.params.id;

  donationData.currency_id = selectedCurrency.value;

  return { ...donationData, selectedCampaigns: selectedCampaigns.value };
};

const onSubmit = () => {
  const payload = getPayload();
  console.log(getPayload);
};

watch(locale, () => {
  isFinish.value = false;
  campaigns.value = [];
  page.value = 0;
});

const getCampaigns = async () => {
  try {
    page.value += 1;
    const res = await api.get("/campaigns", { params: { page: page.value } });
    const { data: result } = res.data.result;
    campaigns.value = [...campaigns.value, ...result];
    if (result.length < 15) isFinish.value = true;
  } catch (err) {
    console.error(err);
  }
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

[dir="rtl"] .v-row,
[dir="rtl"] .v-table,
[dir="rtl"] .v-container {
  direction: rtl;
}
</style>
