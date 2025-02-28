<template>
  <section aria-label="login page" class="pt-sm pb-sm">
    <vContainer>
      <div
        class="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between items-start lg:gap-xl xl:gap-xl md:gap-md gap-sm"
      >
        <div class="w-full">
          <Form @submit="onSubmit" v-slot="{ validate }">
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

                <!-- daily -->
                <v-radio
                  value="daily"
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
                  value="one_time"
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
                        :validate-on-input="true"
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
                        :validate-on-input="true"
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
                        rules="required|phone"
                        v-model="donationData.mobile"
                        :validate-on-input="true"
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
                            :validate-on-input="true"
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
                            :validate-on-input="true"
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
                            :validate-on-input="true"
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
                            :validate-on-input="true"
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
                  @click="checkIsValid(validate)"
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
                <v-row class="d-flex justify-between">
                  <v-col class="d-flex justify-start">
                    <v-btn
                      :icon="icon"
                      size="small"
                      class="m-2"
                      @click="window = 0"
                    />
                  </v-col>
                  <v-col class="d-flex justify-end">
                    <v-dialog max-width="500">
                      <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                          v-bind="activatorProps"
                          :text="$t('global.click_here_before_donating')"
                          variant="flat"
                        ></v-btn>
                      </template>

                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-card-text>
                            {{ $t("global.info-text") }}
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              :text="$t('global.close')"
                              @click="isActive.value = false"
                            ></v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>

                    <v-btn
                      icon="mdi-arrow-left"
                      size="small"
                      class="m-2"
                      @click="window = 0"
                    />
                  </v-col>
                </v-row>

                <v-table
                  density="compact"
                  height="500px"
                  fixed-header
                  class="border rounded"
                >
                  <thead>
                    <tr class="text-center text-bold">
                      <th>{{ $t("donor.campaign_name") }}</th>
                      <th></th>
                      <th>{{ $t("home.donation_amount") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="campaign in campaigns"
                      :key="campaign.id"
                      class="hover:bg-lime-100"
                    >
                      <td>
                        <nuxt-link
                          :to="{
                            name: 'view-campaign',
                            params: { id: campaign.id },
                          }"
                          target="_blank"
                          class="hover:underline"
                        >
                          {{ campaign.name }}
                        </nuxt-link>
                      </td>
                      <td>
                        <v-switch
                          color="primary"
                          v-model="selectedCampaigns"
                          :value="campaign.id"
                        />
                      </td>
                      <td>
                        ({{
                          selectedCampaigns.indexOf(campaign.id) > -1
                            ? (
                                donationData.amount / selectedCampaigns.length
                              ).toFixed(2)
                            : "0.00"
                        }})
                        {{ selectedCurrencyLabel }}
                      </td>
                    </tr>
                  </tbody>
                </v-table>

                <div>
                  <h3 class="py-4 text-bold">{{ $t("home.gateway") }}</h3>
                  <Field
                    as="div"
                    name="gateway"
                    id="gateway"
                    class="flex gap-2 max-w-[450px] mx-auto"
                  >
                    <label
                      v-for="g in gateways"
                      :key="g.value"
                      :for="g.value"
                      class="item"
                      :title="g.value"
                    >
                      <img
                        :src="g.img"
                        :alt="g.value"
                        class="h-24 aspect-square"
                      />

                      <v-icon icon="mdi-check-circle-outline" />
                      <input
                        type="radio"
                        name="gateway"
                        v-model="donationData.gateway"
                        :value="g.value"
                        :id="g.value"
                        class="hidden"
                      />
                    </label>
                  </Field>
                </div>

                <!-- submit -->
                <v-btn
                  class="text-capitalize rounded-lg block w-full my-4"
                  :loading="isLoading"
                  :disabled="isLoading"
                  variant="flat"
                  size="default"
                  color="primary"
                  @click="checkIsValid(validate)"
                  type="submit"
                >
                  {{ $t("home.donate") }} (
                  {{ donationData.amount.toFixed(2) }}
                  {{ selectedCurrencyLabel }}
                  )
                </v-btn>
              </v-window-item>
            </v-window>
          </Form>
        </div>
        <div class="image">
          <img
            loading="lazy"
            src="~/assets/images/donate/donate.jpeg"
            class="w-full rounded-lg"
            alt="ramadanchallenges image"
          />
        </div>
      </div>
    </vContainer>
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import { ErrorMessage, Field, Form, defineRule } from "vee-validate";
// @ts-nocheck
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";
// @ts-ignore
import { storeToRefs } from "pinia";
import { useGlobalVar } from "~/helpers/global-var";
import { useAllCampaigns } from "../services/all-campaigns";

// assets
import img2c2p from "~/assets/images/donate/2c2p.png";
import curlec from "~/assets/images/donate/curlec.png";

const gateways = [
  { img: img2c2p, value: "2c2p" },
  { img: curlec, value: "curlec" },
];

const { siteName } = useGlobalVar();
siteName("home.page_donate_all");

const currencyStore = useCurrencyStore();
const { selectedCurrency, selectedCurrencyLabel } = storeToRefs(currencyStore);

const window = ref(0);
const availableAmounts = [5, 10, 50, 100];
const donationType = ref<string>("one_time");
const gift = ref<boolean>(false);
const isHidden = ref<boolean>(false);
const customInput = ref<boolean>(false);
const icon = ref<string>("mdi-arrow-left");

const {
  data: campaigns,
  loading: isLoading,
  submitAllCampaigns,
} = useAllCampaigns();

const selectedCampaigns = computed({
  // getter
  get() {
    if (!campaigns) return [];
    return campaigns.value
      .filter((c: any) => !c.selected)
      .map((c: any) => c.id);
  },

  set(newValue: [string]) {
    if (!campaigns) return;

    campaigns.value = campaigns.value.map((c: any) => ({
      ...c,
      selected: !newValue.includes(c.id),
    }));
  },
});

const donationData = reactive<any>({
  name: "",
  email: "",
  mobile: "",
  love_donation: "no",
  love_name: "",
  love_email: "",
  love_mobile: "",
  love_comment: "",
  amount: 50,
  ongoing_charity: "no",
  charity_amount: 0,
  currency_id: "",
  campaign_id: "",
  gateway: "curlec",
});

const { t } = useI18n();

defineRule("phone", (value: string) => {
  const phoneRegex = /^\+?[\d\s().-]{7,}$/;

  return phoneRegex.test(value) || t("auth.validation.phone");
});
const selectAmount = (item: number): void => {
  donationData.amount = item;
  customInput.value = false;
};

const showCustomInput = (): void => {
  customInput.value = !customInput.value;
};

const getPayload = () => {
  const amount = donationData.amount / selectedCampaigns.value.length;
  return {
    ...donationData,
    total_amount: donationData.amount,
    pay_type: donationType.value,
    campaign: selectedCampaigns.value.map((a: string) => ({ id: a, amount })),
    currency_id: selectedCurrency.value,
  };
};

const checkIsValid = async (validate: any) => {
  const { valid } = await validate();

  if (!valid) {
    window.value = 0;
  } else {
    window.value = 1;
  }
};
const onSubmit = () => {
  const payload = getPayload();
  submitAllCampaigns(payload);
};
</script>

<style scoped lang="scss">
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

.item {
  @apply flex-1 grid place-content-center rounded-md cursor-pointer relative;

  .v-icon {
    @apply hidden absolute text-green-600  top-1/2 left-1/2 bg-white rounded-full;
    transform: translate(-50%, -50%);
    font-size: 2em;
  }

  &:has(input:checked) {
    @apply border border-2 border-green-400;

    .v-icon {
      @apply flex;
    }
  }
}
</style>
