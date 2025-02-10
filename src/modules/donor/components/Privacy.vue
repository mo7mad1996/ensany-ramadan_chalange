<template>
  <div class="privacy-settings pt-sm">
    <!-- change password section -->
    <div class="change-password pt-sm">
      <h2 class="text-xl">{{ $t("dashboard.change_password") }}</h2>
      <p class="text-sm text-[#969696] pt-2">
        {{ $t("dashboard.change_desc") }}
      </p>

      <form @submit.prevent="onSubmit2">
        <!-- current password input -->
        <div>
          <div class="relative mt-4">
            <div
              class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
              @click="showCurrentPassword"
            >
              <v-icon v-if="show3" size="small">mdi-eye-outline</v-icon>
              <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
            </div>

            <Field
              :type="show3 ? 'text' : 'password'"
              name="current-password"
              rules="required|min:6"
              id="current-password"
              :placeholder="$t('dashboard.currant_password')"
              autocomplete="current-password"
              class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              required
              v-model="passwordForm.current_password"
            />
          </div>

          <ErrorMessage class="text-sm text-red-500" name="current-password" />
        </div>

        <!-- password input -->
        <div>
          <div class="relative mt-4">
            <div
              class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
              @click="showPassword"
            >
              <v-icon v-if="show1" size="small">mdi-eye-outline</v-icon>
              <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
            </div>

            <Field
              :type="show1 ? 'text' : 'password'"
              name="resete-password"
              rules="required|min:6"
              id="resete-password"
              :placeholder="$t('dashboard.new_password')"
              autocomplete="new-password"
              class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              required
              v-model="passwordForm.password"
            />
          </div>

          <ErrorMessage class="text-sm text-red-500" name="resete-password" />
        </div>

        <!-- confirm password  -->
        <div>
          <div class="relative mt-4">
            <div
              class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
              @click="showConfPassword"
            >
              <v-icon v-if="show2" size="small">mdi-eye-outline</v-icon>
              <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
            </div>

            <Field
              :type="show2 ? 'text' : 'password'"
              name="resete-confirm"
              rules="required|confirmed:@resete-password"
              id="resete-confirm"
              :placeholder="$t('dashboard.confirm_password')"
              autocomplete="resete-password"
              class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              required
              v-model="passwordForm.password_confirmation"
            />
          </div>

          <ErrorMessage class="text-sm text-red-500" name="resete-confirm" />
        </div>

        <!-- Submit Button -->
        <div class="w-full flex justify-end mt-4">
          <v-btn
            :ripple="false"
            type="submit"
            class="text-capitalize rounded-lg xl:w-1/4 lg:w-1/4 md:w-full w-full mt-2"
            variant="flat"
            size="large"
            color="primary"
            :loading="passwordForm.loading"
          >
            {{ $t("dashboard.update_password") }}
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import Swal from "sweetalert2";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useProfile } from "~/modules/auth/services/profile";

const { update, changePassword } = useProfile();
const { t } = useI18n();
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);

const passwordForm = reactive({
  current_password: "",
  password: "",
  password_confirmation: "",
  loading: false,
});

const showCurrentPassword = () => {
  show3.value = !show3.value;
};

const showPassword = () => {
  show1.value = !show1.value;
};

const showConfPassword = () => {
  show2.value = !show2.value;
};
const onSubmit2 = async () => {
  try {
    passwordForm.loading = true;
    const res = await changePassword(passwordForm);

    Swal.fire({
      icon: "success",
      confirmButtonText: t("home.ok"),

      text: t("auth.password_success"),
    });
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      confirmButtonText: t("home.ok"),

      title: err.response?.data?.message || err.message,
      html: Object.values(err.response?.data?.result?.errors)
        .flat()
        .map((e) => `<li class="text-start">${e}</li>`)
        .join(" "),
    });
  } finally {
    passwordForm.loading = false;
  }
};
</script>
