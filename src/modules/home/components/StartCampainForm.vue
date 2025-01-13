<template>
  <div class="star_campain_form w-full flex justify-center pt-sm pb-sm">
    <div
      class="card xl:w-[795px] lg:w-[795px] md:w-[96%] w-[96%] rounded-xl shadow-md p-sm bg-white"
    >
      <Form @sbmit="startCmpaign">
        <!--campain name -->
        <div>
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">الاسم</label>

            <div class="lang-switch flex items-center border-b">
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchName"
                :class="{ 'bg-[#28A745] text-white': nameSwitch == 'en' }"
              >
                الانجليزيه
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
                placeholder="اسم الحمله بالعربي"
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
                placeholder="اسم الحمله بالانجليزيه"
                class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </div>

        <!--campain goal  -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">الهدف</label>

            <div class="lang-switch flex items-center border-b">
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchGoal"
                :class="{ 'bg-[#28A745] text-white': goalSwitch == 'en' }"
              >
                الانجليزيه
              </div>
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchGoal"
                :class="{ 'bg-[#28A745] text-white': goalSwitch == 'ar' }"
              >
                العربيه
              </div>
            </div>
          </div>

          <div class="inputs">
            <div class="relative" v-show="goalSwitch === 'ar'">
              <div
                class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <img src="../../../assets/images/campaign/edit.svg" alt="" />
              </div>

              <Field
                type="text"
                name="goal_ar"
                rules="required"
                placeholder="اكتب هدف الحمله بالعربيه"
                class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <div class="relative" v-show="goalSwitch === 'en'">
              <div
                class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
              >
                <img src="../../../assets/images/campaign/edit.svg" alt="" />
              </div>

              <Field
                type="text"
                name="goal_en"
                rules="required"
                placeholder="اكتب هدف الحمله بالانجليزيه"
                class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </div>

        <!-- campain content -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">المحتوى</label>

            <div class="lang-switch flex items-center border-b">
              <div
                class="px-3 py-1 cursor-pointer"
                @click="switchContent"
                :class="{ 'bg-[#28A745] text-white': contentSwitch == 'en' }"
              >
                الانجليزيه
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
                placeholder="اكتب هدف الحمله بالعربيه"
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
                placeholder="اكتب هدف الحمله بالانجليزيه"
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
              <span class="text-2xl"> تاريخ البدء</span>
            </div>

            <Field
              type="date"
              name="start_date"
              rules="required"
              placeholder="اكتب هدف الحمله بالعربيه"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>

          <div class="w-full">
            <div class="title mb-3">
              <span class="text-2xl"> تاريخ الانتهاء </span>
            </div>

            <Field
              type="date"
              name="end_date"
              rules="required"
              placeholder="اكتب هدف الحمله بالعربيه"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>

          <div class="w-full">
            <div class="title mb-3">
              <span class="text-2xl"> الأيام المتاحة </span>
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
                placeholder="الايام المتاحه"
                class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </div>

        <!-- upload image -->
        <div class="upload_image mt-5">
          <div class="title flex items-center gap-x-2 mb-3">
            <img src="../../../assets/images/campaign/image.svg" alt="" />
            <span class="text-2xl">تحميل صورة</span>
          </div>

          <div
            class="flex items-center border border-gray-300 rounded-md shadow-sm xl:w-[400px] lg:w-[400px] md:w-full w-full"
          >
            <label
              for="file-upload"
              class="px-4 py-3 bg-[#E9ECEF] text-black text-sm font-semibold ltr:rounded-l-md rtl:rounded-r-md cursor-pointer hover:bg-[#b8bbbd]"
            >
              اختار ملف
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
              {{ selectedFileName || "لا يوجد ملف مختار" }}
            </span>
          </div>
        </div>

        <!-- upload video -->
        <div class="upload_image mt-5">
          <div class="title flex items-center gap-x-2 mb-3">
            <img src="../../../assets/images/campaign/image.svg" alt="" />
            <span class="text-2xl"> رابط فيديو</span>
          </div>

          <Field
            type="text"
            name="url"
            rules="required"
            placeholder="رابط فديو"
            class="block xl:w-[400px] lg:w-[400px] md:w-full w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <div
          class="group grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 mt-5"
        >
          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/campaign/amount.svg" alt="" />
              <span class="text-2xl"> المبلغ</span>
            </div>

            <Field
              type="text"
              name="amount"
              rules="required"
              placeholder="أدخل المبلغ الذي تهدف إلى جمعه (مثل، 5,000)"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>

          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/campaign/currncy.svg" alt="" />
              <span class="text-2xl"> العملة</span>
            </div>

            <Field
              as="select"
              name="curncy"
              rules="required"
              placeholder="اكتب هدف الحمله بالعربيه"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            >
              <option selected disabled value="">(مثل، 5,000 دولار)</option>
              <option value="1">5,000</option>
              <option value="2">5,000</option>
              <option value="3">5,000</option>
            </Field>
          </div>

          <div>
            <div class="title flex items-center gap-x-2 mb-3">
              <img src="../../../assets/images/campaign/status.svg" alt="" />
              <span class="text-2xl"> الحالة</span>
            </div>

            <Field
              as="select"
              name="status"
              rules="required"
              placeholder="اكتب هدف الحمله بالعربيه"
              class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            >
              <option selected disabled value="">(مثل, نشط)</option>
              <option value="1">نشط</option>
              <option value="2">نشط</option>
              <option value="3">نشط</option>
            </Field>
          </div>
        </div>

        <!-- confirm donation -->
        <v-btn
          type="submit"
          class="text-capitalize rounded-lg w-100 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >إطلاق الحملة</v-btn
        >
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";

const nameSwitch = ref("ar");
const goalSwitch = ref("ar");
const contentSwitch = ref("ar");
const selectedFileName = ref("");
const selected = ref("");

const switchName = () => {
  nameSwitch.value = nameSwitch.value === "ar" ? "en" : "ar";
};

const switchGoal = () => {
  goalSwitch.value = goalSwitch.value === "ar" ? "en" : "ar";
};

const switchContent = () => {
  contentSwitch.value = contentSwitch.value === "ar" ? "en" : "ar";
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  selectedFileName.value = file ? file.name : "";
};

const startCmpaign = (values) => {
  console.log("form submitted", values);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
