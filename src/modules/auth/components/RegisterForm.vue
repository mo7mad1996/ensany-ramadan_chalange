<template>
  <div class="register_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <div class="flex gap-x-2 items-center mb-5">
      <img
        loading="lazy"
        src="../../../assets/images/doner.svg"
        width="30"
        alt=""
      />
      <h2 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("auth.signup_doner") }}
      </h2>
    </div>

    <Form @submit="onSubmit">
      <!-- first name and last name -->
      <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <div>
          <div class="relative">
            <div
              class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
            >
              <img
                loading="lazy"
                src="../../../assets/images/contact/name.svg"
                alt=""
              />
            </div>

            <Field
              type="text"
              name="first_name"
              rules="required"
              id="first_name"
              :validateOnInput="true"
              class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
              :placeholder="$t('auth.first_name')"
              v-model="newUser.first_name"
            />
          </div>

          <ErrorMessage class="error" name="first_name" />
          <p
            class="error"
            v-for="(err, n) in apiErrors.first_name"
            :key="n"
            v-html="err"
          />
        </div>

        <!-- last name -->
        <div>
          <div class="relative">
            <div
              class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
            >
              <img
                loading="lazy"
                src="../../../assets/images/contact/name.svg"
                alt=""
              />
            </div>

            <Field
              type="text"
              name="last_name"
              rules="required"
              v-model="newUser.last_name"
              :validateOnInput="true"
              id="last_name"
              :placeholder="$t('auth.last_name')"
              class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>

          <ErrorMessage class="error" name="last_name" />
          <p
            class="error"
            v-for="(err, n) in apiErrors.last_name"
            :key="n"
            v-html="err"
          />
        </div>
      </div>

      <!-- email input -->
      <div>
        <div class="relative mt-4">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <img
              loading="lazy"
              src="../../../assets/images/contact/email.svg"
              alt=""
            />
          </div>

          <Field
            type="email"
            name="email"
            rules="required|email"
            :validateOnInput="true"
            v-model="newUser.email"
            id="email"
            :placeholder="$t('auth.email')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <ErrorMessage class="error" name="email" />
        <p
          class="error"
          v-for="(err, n) in apiErrors.email"
          :key="n"
          v-html="err"
        />
      </div>

      <!-- phone number -->
      <div class="mt-4">
        <Field
          name="mobile"
          rules="required|phone"
          :validateOnInput="true"
          v-slot="{ field }"
        >
          <vue-tel-input
            v-bind="field"
            v-model="newUser.mobile"
            autocomplet="phone-number"
            :dropdown-options="{ showSearchBox: true, showFlags: true }"
            :inputOptions="{
              showDialCode: true,
              placeholder: $t('auth.phone'),
            }"
            @input="validatePhoneInput"
          />
        </Field>

        <ErrorMessage class="error" name="mobile" />
        <p
          class="error"
          v-for="(err, n) in apiErrors.mobile"
          :key="n"
          v-html="err"
        />
      </div>

      <!-- country id -->
      <div>
        <div class="relative mt-4">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <span v-if="status == 'pending'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3E7E41"
                  d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </path>
              </svg>
            </span>
            <v-icon v-if="status == 'success'"
              >mdi-map-marker-multiple-outline</v-icon
            >
          </div>

          <Field
            as="select"
            id="country_id"
            name="country_id"
            rules="required"
            :validateOnInput="true"
            v-model="newUser.country_id"
            :placeholder="$t('auth.country')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          >
            <option selected disabled value="">{{ $t("auth.country") }}</option>
            <option
              v-for="(country, index) in countries"
              :key="index"
              :value="country.id"
            >
              {{ country.name }} (+{{ country.mob_code }})
            </option>
          </Field>
        </div>
        <ErrorMessage class="error" name="country_id" />
        <p
          class="error"
          v-for="(err, n) in apiErrors.country_id"
          :key="n"
          v-html="err"
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
            name="password"
            rules="required|min:6"
            :validateOnInput="true"
            v-model="newUser.password"
            id="password"
            :placeholder="$t('auth.password')"
            autocomplete="new-password"
            class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            required
          />
        </div>

        <ErrorMessage class="error" name="password" />
        <p
          class="error"
          v-for="(err, n) in apiErrors.password"
          :key="n"
          v-html="err"
        />
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
            name="password_confirmation"
            rules="required|confirmed:@password"
            :validateOnInput="true"
            v-model="newUser.password_confirmation"
            id="password_confirmation"
            :placeholder="$t('auth.confirm_password')"
            autocomplete="confirm-password"
            class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            required
          />
        </div>

        <ErrorMessage class="error" name="password_confirmation" />
        <p
          class="error"
          v-for="(err, n) in apiErrors.password_confirmation"
          :key="n"
          v-html="err"
        />
      </div>

      <!-- terms and conditions -->
      <v-checkbox
        v-model="isRemember"
        class="checkbox"
        color="primary"
        id="checkbox-4"
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

      <!-- submit Btns -->
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
import { ErrorMessage, Field, Form, defineRule } from "vee-validate";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

import { type NewUser } from "~/helpers/interfaces";
import { useAuth } from "../services/auth";
import { useCountries } from "../services/countries";

const { t } = useI18n();

defineRule("phone", (value: string) => {
  const phoneRegex = /^\+?[\d\s().-]{7,}$/;

  return phoneRegex.test(value) || t("auth.validation.phone");
});

const show1 = ref<boolean>(false);
const show2 = ref<boolean>(false);
const isRemember = ref<boolean>(true);
const apiErrors = ref<any>({});

const { register, isLoading } = useAuth();
const { countries, status } = useCountries();

const newUser = ref<NewUser>({
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  password: "",
  password_confirmation: "",
  country_id: "",
  user_type: "dooner",
});

const validatePhoneInput = () => {
  newUser.value.mobile = newUser.value.mobile.replace(/[^0-9]/g, "");
};

const showPassword = (): void => {
  show1.value = !show1.value;
};

const showConfPassword = (): void => {
  show2.value = !show2.value;
};

const onSubmit = () => {
  apiErrors.value = {};
  register(
    newUser.value,
    (err: any) => (apiErrors.value = err.response.data.result.errors)
  );
};
</script>

<style scoped>
.error {
  @apply text-sm text-red-500;
}
</style>
