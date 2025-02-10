<template>
  <div class="profile-settings pt-sm">
    <h2 class="text-xl font-bold">
      {{ $t("donor.account_details") }}
    </h2>

    <div class="update-form mt-5">
      <Form
        @submit="onSubmit"
        v-slot="{ validate }"
        :initial-values="defaultValues"
      >
        <!-- image -->
        <div class="mt-5">
          <label for="">{{ $t("home.upload_image") }}</label>

          <div class="mb-5">
            <img
              :src="preview"
              class="rounded-full aspect-square object-cover w-24 mx-auto shadow-2xl"
            />
          </div>
          <div class="upload_image col-span-2">
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
                name="photo"
              />

              <span
                class="flex-1 px-3 text-gray-700 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ selectedFileName || $t("home.no_file") }}
              </span>
            </div>
            <ErrorMessage name="photo" />
          </div>
        </div>

        <!-- first name -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("dashboard.first_name") }}</label>
          </div>

          <div class="mt-4">
            <div class="relative">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img src="../../../assets/images/contact/phone.svg" alt="" />
              </div>

              <Field
                type="text"
                name="first_name"
                rules="required"
                id="first_name"
                :placeholder="$t('dashboard.first_name')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <ErrorMessage name="first_name" />
          </div>
        </div>

        <!-- last name -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("dashboard.last_name") }}</label>
          </div>

          <div class="mt-4">
            <div class="relative">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img src="../../../assets/images/contact/phone.svg" alt="" />
              </div>

              <Field
                type="text"
                name="last_name"
                rules="required"
                id="last_name"
                :placeholder="$t('dashboard.last_name')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <ErrorMessage name="last_name" />
          </div>
        </div>

        <!-- email -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("dashboard.email") }}</label>
          </div>

          <div class="mt-4">
            <div class="relative">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img src="../../../assets/images/contact/email.svg" alt="" />
              </div>

              <Field
                type="email"
                name="email"
                rules="required|email"
                id="updated_email"
                :placeholder="$t('dashboard.update_email')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <ErrorMessage name="email" />
          </div>
        </div>

        <!-- phone number -->
        <div class="mt-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("dashboard.mobile") }}</label>
          </div>

          <div class="mt-4">
            <div class="relative">
              <div
                class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
              >
                <img src="../../../assets/images/contact/phone.svg" alt="" />
              </div>

              <Field
                type="text"
                name="mobile"
                rules="required"
                id="updated_phone"
                :placeholder="$t('dashboard.update_phone')"
                class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              />
            </div>

            <ErrorMessage name="mobile" />
          </div>
        </div>

        <!--  country -->
        <div class="my-5">
          <div class="lable_switch flex justify-between items-center mb-3">
            <label for="">{{ $t("dashboard.country") }}</label>
          </div>

          <Field
            as="select"
            name="country_id"
            rules="required"
            class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          >
            <option selected disabled value="">
              {{ $t("dashboard.country") }}
            </option>

            <option v-for="c in countries" :key="c.id" :value="c.id">
              {{ c.name }}
            </option>
          </Field>
          <ErrorMessage name="country_id" />
        </div>

        <!-- submit Btns -->
        <div
          class="buttons mt-4 grid gap-x-2 grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <v-btn
            :ripple="false"
            type="submit"
            class="text-capitalize rounded-lg mt-2"
            variant="flat"
            size="large"
            color="primary"
            :loading="personalForm.loading"
            @click="validate"
          >
            {{ $t("donor.update_account") }}
          </v-btn>

          <v-btn
            :ripple="false"
            class="text-capitalize rounded-lg mt-2"
            variant="outlined"
            size="large"
            color="primary"
          >
            {{ $t("donor.discard_changes") }}
          </v-btn>
        </div>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";
import Swal from "sweetalert2";
import { useProfile } from "~/modules/auth/services/profile";
const { t } = useI18n();

// data
const { user } = useAuth();
const { update } = useProfile();
const countries = ref([]);
const personalForm = reactive({ loading: false });
const preview = ref(user.value.photo);
const selectedFileName = ref(null);

const defaultValues = computed(() => {
  // {a: 1}  =>  {"a:ar" : 1}
  const payload = {
    ...user.value,
    country_id: user.value.country.id,
  };

  delete payload.photo;

  return payload;
});

const getCountries = async () => {
  api.get("/countries").then((res) => {
    countries.value = res.data.result.data;
  });
};

const handleFileChange = (event) => {
  const input = event.target;
  const file = input.files ? input.files[0] : null;
  selectedFileName.value = file ? file.name : "";

  // preview image
  preview.value = URL.createObjectURL(file);
};

const onSubmit = async (payload) => {
  try {
    personalForm.loading = true;
    const res = await update(payload, []);

    Swal.fire({
      icon: "success",
      title: t("dashboard.save"),
      confirmButtonText: t("home.ok"),
    });
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: err.response?.data?.message || err.message,
      html: Object.values(err.response?.data?.result?.errors)
        .flat()
        .map((e) => `<li class="text-start">${e}</li>`)
        .join(" "),
      icon: "error",
      confirmButtonText: t("home.ok"),
    });
  } finally {
    personalForm.loading = false;
  }
};

onMounted(() => {
  getCountries();
});
</script>

<style scoped>
[role="alert"] {
  @apply text-sm text-red-500;
}
</style>
