<template>
  <div class="login_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("auth.signup") }}
    </h2>

    <Form @submit="onSubmit">
      <!-- name input -->
      <div>
        <div class="relative">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <img src="../../../assets/images/contact/name.svg" alt="" />
          </div>

          <Field
            type="text"
            name="register-name"
            rules="required"
            v-model="fullName"
            id="custom-input1"
            :placeholder="$t('auth.name')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <ErrorMessage class="text-sm text-red-500" name="register-name" />
      </div>

      <!-- email input -->
      <div>
        <div class="relative mt-4">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <img src="../../../assets/images/contact/email.svg" alt="" />
          </div>

          <Field
            type="email"
            name="register-email"
            rules="required|email"
            v-model="newUser.email"
            id="custom-input2"
            :placeholder="$t('auth.email')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <ErrorMessage class="text-sm text-red-500" name="register-email" />
      </div>

      <!-- country id -->
      <div>
        <div class="relative mt-4">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <v-icon>mdi-map-marker-multiple-outline</v-icon>
          </div>

          <Field
            as="select"
            name="register-country"
            rules="required"
            id="custom-input3"
            v-model="newUser.country_id"
            :placeholder="$t('auth.country')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          >
            <option selected value="">{{ $t("auth.country") }}</option>
            <option
              v-for="(country, index) in countries"
              :key="index"
              :value="country.id"
            >
              {{ country.name }}
            </option>
          </Field>
        </div>

        <ErrorMessage class="text-sm text-red-500" name="register-country" />
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
            name="register-password"
            rules="required|min:6"
            v-model="newUser.password"
            id="custom-input4"
            :placeholder="$t('auth.password')"
            class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            required
          />
        </div>

        <ErrorMessage class="text-sm text-red-500" name="register-password" />
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
            name="register-confirm"
            rules="required|confirmed:@register-password"
            v-model="newUser.password_confirmation"
            id="custom-input5"
            :placeholder="$t('auth.confirm_password')"
            class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            required
          />
        </div>

        <ErrorMessage class="text-sm text-red-500" name="register-confirm" />
      </div>

      <!-- terms and conditions -->
      <v-checkbox
        v-model="isRemember"
        class="checkbox"
        color="primary"
        :ripple="false"
      >
        <template v-slot:label>
          <!-- <p class="text-sm">{{ $t("auth.terms") }}</p> -->
          <nuxt-link to="/terms-conditions" class="hover:underline">{{
            $t("auth.terms")
          }}</nuxt-link>
        </template>
      </v-checkbox>

      <!-- error message from backend -->
      <!-- <p class="error-msg text-sm text-red-500 text-center mb-2">{{ error }}</p> -->

      <!-- confirm login -->
      <v-btn
        :disabled="isLoading"
        :loading="isLoading"
        :ripple="false"
        type="submit"
        class="text-capitalize rounded-lg w-100 mt-2"
        variant="flat"
        size="large"
        color="primary"
        >{{ $t("auth.signup") }}</v-btn
      >

      <!-- do not have account option -->
      <p class="text-sm pt-sm text-center">
        {{ $t("auth.have_account") }}
        <nuxt-link to="/login" class="text-primary underline cursor-pointer">{{
          $t("auth.login")
        }}</nuxt-link>
      </p>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";

import { useAuth } from "../services/auth";
import { useCountries } from "../services/countries";
import { type NewUser } from "~/helpers/interfaces";

const show1 = ref<boolean>(false);
const show2 = ref<boolean>(false);
const isRemember = ref<boolean>(true);

const fullName = ref<string>("");
const { register, isLoading, error } = useAuth();
const { countries } = useCountries();

const newUser = ref<NewUser>({
  name: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  country_id: "",
});

const showPassword = (): void => {
  show1.value = !show1.value;
};

const showConfPassword = (): void => {
  show2.value = !show2.value;
};

const onSubmit = () => {
  newUser.value.name = fullName.value.split(" ")[0];
  newUser.value.first_name = fullName.value.split(" ")[1];
  newUser.value.last_name = fullName.value.split(" ")[2];
  register(newUser.value);
};
</script>
