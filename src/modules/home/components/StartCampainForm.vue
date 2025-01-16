<template>
  <div class="star_campain_form w-full flex justify-center pt-sm pb-sm">
    <div
      class="card xl:w-[795px] lg:w-[795px] md:w-[96%] w-[96%] rounded-xl shadow-md p-sm bg-white"
    >
      <Form @sbmit="startCmpaign">
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
                <img src="../../../assets/images/campaign/edit.svg" alt="" />
              </div>

              <Field
                type="text"
                name="name_ar"
                rules="required"
                :placeholder="$t('home.name_ar')"
                class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <div class="relative" v-show="nameSwitch === 'en'">
              <div
                class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <img src="../../../assets/images/campaign/edit.svg" alt="" />
              </div>

              <Field
                type="text"
                name="name_en"
                rules="required"
                :placeholder="$t('home.name_en')"
                class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
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
                <img src="../../../assets/images/campaign/edit.svg" alt="" />
              </div>

              <Field
                as="textarea"
                type="text"
                name="content_ar"
                rules="required"
                :placeholder="$t('home.content_ar')"
                class="block w-full ltr:pl-5 rtl:pr-5 pt-3 pb-lg outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <div class="relative" v-show="contentSwitch === 'en'">
              <div
                class="absolute ltr:right-0 rtl:left-0 flex items-center pt-3 ltr:pr-3 rtl:pl-3"
              >
                <img src="../../../assets/images/campaign/edit.svg" alt="" />
              </div>

              <Field
                as="textarea"
                type="text"
                name="content_en"
                rules="required"
                :placeholder="$t('home.content_en')"
                class="block w-full ltr:pl-5 rtl:pr-5 pt-3 pb-lg outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
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
              date-picker
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
                <img src="../../../assets/images/campaign/days.svg" alt="" />
              </div>

              <Field
                type="text"
                name="days"
                rules="required"
                v-model="availableDays"
                :placeholder="$t('home.avilable_days')"
                class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </div>

        <!-- upload image and video url -->
        <div class="grid gap-3 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div class="upload_image mt-5">
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/campaign/image.svg" alt="" />
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

              <input
                id="file-upload"
                type="file"
                class="sr-only"
                @change="handleFileChange"
              />

              <span
                class="flex-1 px-3 text-gray-700 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ selectedFileName || $t("home.no_file") }}
              </span>
            </div>
          </div>

          <!-- video url -->
          <div class="upload_image mt-5">
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/video.svg" alt="" />
              <span class="text-2xl">{{ $t("home.video_url") }}</span>
            </div>

            <Field
              type="text"
              name="url"
              rules="required"
              :placeholder="$t('home.video_url')"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>
        </div>

        <div
          class="group grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 mt-5"
        >
          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/campaign/amount.svg" alt="" />
              <span class="text-2xl"> {{ $t("home.amount") }}</span>
            </div>

            <Field
              type="text"
              name="amount"
              rules="required"
              :placeholder="$t('home.amount_placeholder')"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>

          <!-- <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/campaign/currncy.svg" alt="" />
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

          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/campaign/status.svg" alt="" />
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
              <option value="1">{{ $t("home.active") }}</option>
              <option value="2">{{ $t("home.deactive") }}</option>
            </Field>
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
        >
          {{ $t("home.launch_campaign") }}</v-btn
        >
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useStartCampaign } from "../typescript/start-campaign";

const {
  today,
  endDate,
  availableDays,
  nameSwitch,
  contentSwitch,
  selectedFileName,
  switchName,
  switchContent,
  handleFileChange,
  startCmpaign,
  formattedDate,
  handleDateUpdate,
} = useStartCampaign();
</script>
