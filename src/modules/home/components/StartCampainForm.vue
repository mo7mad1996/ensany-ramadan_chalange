<template>
  <div class="star_campain_form w-full flex justify-center pt-sm pb-sm">
    <div
      class="card xl:w-[795px] lg:w-[795px] md:w-[96%] w-[96%] rounded-xl shadow-md p-sm bg-white"
    >
      <Form
        @submit="submit"
        v-slot="{ validate }"
        :initial-values="props.initData"
      >
        <!--campain name -->
        <div>
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("home.name") }}</label>

            <div class="lang-switch flex items-center border-b">
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchName"
                :class="{ 'bg-[#28A745] text-white': nameSwitch == 'en' }"
              >
                {{ $t("home.english") }}
              </div>
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchName"
                :class="{ 'bg-[#28A745] text-white': nameSwitch == 'ar' }"
              >
                العربيه
              </div>
            </div>
          </div>

          <div class="inputs">
            <div class="relative" v-show="nameSwitch === 'ar'">
              <div
                class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <nuxt-img
                  loading="lazy"
                  src="/campaign/edit.svg"
                  alt="ramadanchallenges image"
                />
              </div>

              <Field
                type="text"
                name="name:ar"
                rules="required"
                :placeholder="$t('home.name_ar')"
                class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
              <ErrorMessage name="name:ar" />
            </div>

            <div class="relative" v-show="nameSwitch === 'en'">
              <div
                class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <nuxt-img
                  loading="lazy"
                  src="/campaign/edit.svg"
                  alt="ramadanchallenges image"
                />
              </div>

              <Field
                type="text"
                name="name:en"
                rules="required"
                :placeholder="$t('home.name_en')"
                class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
              <ErrorMessage name="name:en" />
            </div>
          </div>
        </div>

        <!-- campain short_desc -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("home.short_desc") }}</label>

            <div class="lang-switch flex items-center border-b">
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchShort_desc"
                :class="{ 'bg-[#28A745] text-white': short_descSwitch == 'en' }"
              >
                {{ $t("home.english") }}
              </div>
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchShort_desc"
                :class="{ 'bg-[#28A745] text-white': short_descSwitch == 'ar' }"
              >
                العربيه
              </div>
            </div>
          </div>

          <div class="inputs">
            <div class="relative" v-show="short_descSwitch === 'ar'">
              <div
                class="absolute ltr:right-0 rtl:left-0 flex items-center pt-3 ltr:pr-3 rtl:pl-3"
              >
                <nuxt-img
                  loading="lazy"
                  src="/campaign/edit.svg"
                  alt="ramadanchallenges image"
                />
              </div>

              <Field
                as="textarea"
                type="text"
                name="short_desc:ar"
                rules="required"
                :placeholder="$t('home.short_desc_ar')"
                class="block w-full ltr:pl-5 rtl:pr-5 pt-3 pb-lg outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
              <ErrorMessage name="short_desc:ar" />
            </div>

            <div class="relative" v-show="short_descSwitch === 'en'">
              <div
                class="absolute ltr:right-0 rtl:left-0 flex items-center pt-3 ltr:pr-3 rtl:pl-3"
              >
                <nuxt-img
                  loading="lazy"
                  src="/campaign/edit.svg"
                  alt="ramadanchallenges image"
                />
              </div>

              <Field
                as="textarea"
                type="text"
                name="short_desc:en"
                rules="required"
                :placeholder="$t('home.short_desc_en')"
                class="block w-full ltr:pl-5 rtl:pr-5 pt-3 pb-lg outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />

              <ErrorMessage name="short_desc:en" />
            </div>
          </div>
        </div>

        <!-- campain content -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("home.content") }}</label>

            <div class="lang-switch flex items-center border-b">
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchContent"
                :class="{ 'bg-[#28A745] text-white': contentSwitch == 'en' }"
              >
                {{ $t("home.english") }}
              </div>
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchContent"
                :class="{ 'bg-[#28A745] text-white': contentSwitch == 'ar' }"
              >
                العربيه
              </div>
            </div>
          </div>

          <div class="inputs">
            <div class="relative" v-show="contentSwitch === 'ar'">
              <div
                class="absolute ltr:right-0 rtl:left-0 flex items-center pt-3 ltr:pr-3 rtl:pl-3"
              >
                <nuxt-img
                  loading="lazy"
                  src="/campaign/edit.svg"
                  alt="ramadanchallenges image"
                />
              </div>

              <Field
                as="textarea"
                type="text"
                name="content:ar"
                rules="required"
                :placeholder="$t('home.content_ar')"
                class="block w-full ltr:pl-5 rtl:pr-5 pt-3 pb-lg outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
              <ErrorMessage name="content:ar" />
            </div>

            <div class="relative" v-show="contentSwitch === 'en'">
              <div
                class="absolute ltr:right-0 rtl:left-0 flex items-center pt-3 ltr:pr-3 rtl:pl-3"
              >
                <nuxt-img
                  loading="lazy"
                  src="/campaign/edit.svg"
                  alt="ramadanchallenges image"
                />
              </div>

              <Field
                as="textarea"
                type="text"
                name="content:en"
                rules="required"
                :placeholder="$t('home.content_en')"
                class="block w-full ltr:pl-5 rtl:pr-5 pt-3 pb-lg outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
              <ErrorMessage name="content:en" />
            </div>
          </div>
        </div>

        <!-- dates -->
        <div
          class="dates mt-5 flex items-center gap-3 xl:flex-row lg:flex-row md-flex-row flex-col"
        >
          <div class="w-full">
            <div class="title mb-3">
              <span class="text-2xl">{{ $t("home.start_date") }}</span>
            </div>

            <div class="date-picker">
              <Datepicker
                v-model="today"
                class="custom-datepicker"
                date-picker
                :enable-time-picker="true"
              />
            </div>
          </div>

          <div class="w-full">
            <div class="title mb-3">
              <span class="text-2xl"> {{ $t("home.end_date") }} </span>
            </div>

            <Datepicker
              v-model="endDate"
              class="custom-datepicker"
              placeholder="MM/DD/YY"
              date-picker
              :enable-time-picker="true"
            />
          </div>

          <div class="w-full">
            <div class="title mb-3">
              <span class="text-2xl"> {{ $t("home.avilable_days") }} </span>
            </div>

            <div class="relative w-full">
              <div
                class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <nuxt-img
                  loading="lazy"
                  src="/campaign/days.svg"
                  alt="ramadanchallenges image"
                />
              </div>

              <Field
                type="text"
                name="total_days"
                rules="required"
                v-model="availableDays"
                :placeholder="$t('home.avilable_days')"
                class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
              <ErrorMessage name="total_days" />
            </div>
          </div>
        </div>

        <!-- upload image and video url -->
        <div class="grid gap-3 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div class="upload_image mt-5">
            <div class="title flex items-center gap-x-2 mb-3">
              <nuxt-img
                loading="lazy"
                src="/campaign/image.svg"
                alt="ramadanchallenges image"
              />
              <span class="text-2xl">{{ $t("home.upload_image") }}</span>
            </div>

            <div
              class="flex items-center border border-gray-300 rounded-md shadow-sm w-full"
            >
              <label
                for="file-upload"
                class="px-4 py-3 bg-[#E9ECEF] text-black text-sm font-semibold ltr:rounded-l-md rtl:rounded-r-md cursor-pointer hover:bg-[#b8bbbd]"
              >
                {{ $t("home.choose_file") }}
              </label>

              <Field
                type="file"
                id="file-upload"
                class="sr-only"
                @change="handleFileChange"
                accept="image/*"
                name="image"
              />

              <span
                class="flex-1 px-3 text-gray-700 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ selectedFileName || $t("home.no_file") }}
              </span>
            </div>
            <ErrorMessage name="image" />
          </div>

          <!-- video url -->
          <div class="upload_image mt-5">
            <div class="title flex items-center gap-x-2 mb-3">
              <nuxt-img
                loading="lazy"
                src="/video.svg"
                alt="ramadanchallenges image"
              />
              <span class="text-2xl">{{ $t("home.video_url") }}</span>
            </div>

            <Field
              type="text"
              name="video_url"
              :placeholder="$t('home.video_url')"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
            <ErrorMessage name="video_url" />
          </div>
        </div>

        <div
          class="group grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4 mt-5"
        >
          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <nuxt-img
                loading="lazy"
                src="/campaign/amount.svg"
                alt="ramadanchallenges image"
              />
              <span class="text-2xl"> {{ $t("home.amount") }}</span>
            </div>

            <Field
              type="text"
              name="price_target"
              rules="required"
              :placeholder="$t('home.amount_placeholder')"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
            <ErrorMessage name="price_target" />
          </div>

          <!-- <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <nuxt-img loading="lazy" src="/campaign/currncy.svg" alt="ramadanchallenges image" />
              <span class="text-2xl"> {{ $t("home.currency") }}</span>
            </div>

            <Field
              as="select"
              name="curncy"
              rules="required"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            >
              <option selected disabled value="">
                {{ $t("home.curncy_placeholder") }}
              </option>
              <option value="1">5,000</option>
              <option value="2">5,000</option>
              <option value="3">5,000</option>
            </Field>
          </div> -->

          <!-- currencies -->
          <div v-if="false">
            <div class="title flex items-center gap-x-2 mb-3">
              <nuxt-img
                loading="lazy"
                src="/campaign/status.svg"
                alt="ramadanchallenges image"
              />
              <span class="text-2xl"> {{ $t("home.currency") }}</span>
            </div>

            <Field
              as="select"
              name="currency_id"
              rules="required"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            >
              <option selected disabled value="">
                {{ $t("home.currency_placeholder") }}
              </option>

              <option v-for="c in currencies" :key="c.id" :value="c.id">
                {{ c.currency_name }}
              </option>
            </Field>
            <ErrorMessage name="currency_id" />
          </div>
        </div>

        <div
          class="group grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 mt-5"
        >
          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <nuxt-img
                loading="lazy"
                src="/campaign/status.svg"
                alt="ramadanchallenges image"
              />
              <span class="text-2xl"> {{ $t("home.category") }}</span>
            </div>

            <Field
              as="select"
              name="category_id"
              rules="required"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            >
              <option selected disabled value="">
                {{ $t("home.category_placeholder") }}
              </option>

              <option v-for="c in categories" :key="c.id" :value="c.id">
                {{ c.name }}
              </option>
            </Field>
            <ErrorMessage name="category_id" />
          </div>

          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <nuxt-img
                loading="lazy"
                src="/campaign/status.svg"
                alt="ramadanchallenges image"
              />
              <span class="text-2xl"> {{ $t("home.status") }}</span>
            </div>

            <Field
              as="select"
              name="status"
              rules="required"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            >
              <option selected disabled value="">
                {{ $t("home.status_placeholder") }}
              </option>

              <option v-for="s in state" :key="s" :value="s">
                {{ $t("home." + s) }}
              </option>
            </Field>
            <ErrorMessage name="status" />
          </div>
        </div>

        <!-- confirm campaign -->
        <v-btn
          type="submit"
          class="text-capitalize rounded-lg w-100 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          @click="validate"
          :loading="loading"
        >
          {{
            props.initData
              ? $t("home.edit_campaign")
              : $t("home.launch_campaign")
          }}
        </v-btn>
      </Form>
    </div>
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import { ErrorMessage, Field, Form } from "vee-validate";
import { api } from "~/helpers/axios";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";
import { useStartCampaign } from "../typescript/start-campaign";

const currencyStore = useCurrencyStore();

const { t } = useI18n();
const date = ref(new Date());
const { selectedCurrency } = storeToRefs(currencyStore);
const state = ["published", "paused"];

const props = defineProps(["initData"]);
const loading = ref(false);
const categories = ref([]);
const currencies = ref([]);

const formatDate = (date) => {
  return new Date(date).toISOString().replace("T", " ").split(".")[0];
};

const getCategories = async () => {
  api.get("/categories").then((res) => {
    categories.value = res.data.result.data;
  });
};
const getCurrencies = async () => {
  api.get("/currencies").then((res) => {
    currencies.value = res.data.result;
  });
};

const submit = async (values) => {
  try {
    loading.value = true;
    const payload = {
      ...values,
      start_at: formatDate(today.value),
      end_at: formatDate(endDate.value),
      currency_id: selectedCurrency.value,
    };

    const res = await (props.initData
      ? updateCmpaign(props.initData.id, payload)
      : startCmpaign(payload));

    Swal.fire({
      title: res.data?.message,
      icon: "success",
      customClass: {
        confirmButton: "my-custom-btn",
      },
      confirmButtonText: t("home.ok"),
    });
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: err.response?.data?.message || err.message,
      html: Object.values(err.response?.data?.errors)
        .flat()
        .map((e) => `<li class="text-start">${e}</li>`)
        .join(" "),

      icon: "error",
      customClass: {
        confirmButton: "my-custom-btn",
      },
      confirmButtonText: t("home.ok"),
    });
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (props.initData) {
    today.value = new Date(props.initData.start_at);
    endDate.value = new Date(props.initData.end_at);
  }

  getCategories();
  // getCurrencies();
});

const {
  today,
  endDate,
  availableDays,
  nameSwitch,
  contentSwitch,
  short_descSwitch,
  selectedFileName,
  switchName,
  switchContent,
  switchShort_desc,
  handleFileChange,
  startCmpaign,
  updateCmpaign,
  formattedDate,
  handleDateUpdate,
} = useStartCampaign();
</script>

<style scoped>
[role="alert"] {
  @apply text-red-600 text-sm;
}
</style>
