<template>
  <div class="privacy-settings pt-sm">
    <h2 class="text-xl font-bold">{{ $t("donor.privacy_title") }}</h2>
    <p class="text-sm text-[#969696]">
      {{ $t("donor.privacy_desc") }}
    </p>

    <!-- <div class="header pt-sm">
      <div class="flex justify-between items-center">
        <h3 class="text-xl">{{ $t("donor.resent_login") }}</h3>
        <span class="underline text-primary text-sm cursor-pointer">{{
          $t("donor.tirminate_sessions")
        }}</span>
      </div>
      <p class="text-sm text-[#969696] pt-2">
        {{ $t("donor.resent_desc") }}
      </p>
    </div> -->

    <!-- change password section -->
    <div class="change-password pt-sm">
      <h2 class="text-xl">{{ $t("donor.change_password") }}</h2>
      <p class="text-sm text-[#969696] pt-2">
        {{ $t("donor.change_desc") }}
      </p>

      <Form @submit="onSubmit2">
        <div class="w-50">
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
                :placeholder="$t('donor.currant_password')"
                autocomplete="current-password"
                class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                required
              />
            </div>

            <ErrorMessage
              class="text-sm text-red-500"
              name="current-password"
            />
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
                :placeholder="$t('donor.new_password')"
                autocomplete="new-password"
                class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                required
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
                :placeholder="$t('donor.confirm_password')"
                autocomplete="resete-password"
                class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                required
              />
            </div>

            <ErrorMessage class="text-sm text-red-500" name="resete-confirm" />
          </div>
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
          >
            {{ $t("donor.update_password") }}
          </v-btn>
        </div>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
const showCurrentPassword = () => {
  show3.value = !show3.value;
};

const showPassword = () => {
  show1.value = !show1.value;
};

const showConfPassword = () => {
  show2.value = !show2.value;
};

const onSubmit2 = () => {
  console.log("form submitted");
};
</script>
