<template>
  <div class="register_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <div class="flex items-center gap-x-2 mb-5">
      <img loading="lazy" src="../../../assets/images/charity.svg" width="30" alt="" />
      <h2 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("auth.signup_cahrity") }}
      </h2>
    </div>

    <Form @submit="onSubmit" v-slot="{ errors, validate }">
      <!--charity name -->
      <div>
        <div class="lable_switch flex justify-between items-center mb-3">
          <label for="">{{ $t("auth.charity_name") }}</label>

          <div class="lang-switch flex items-center border-b">
            <div
              class="px-3 py-1 cursor-pointer"
              @click="switchName"
              :class="{ 'bg-[#28A745] text-white': nameSwitch == 'en' }"
            >
              <v-badge
                dot
                floating
                :color="
                  errors['charity_name:en'] || apiErrors['charity_name:en']
                    ? 'error'
                    : 'transparent'
                "
              >
                {{ $t("home.english") }}
              </v-badge>
            </div>
            <div
              class="px-3 py-1 cursor-pointer"
              @click="switchName"
              :class="{ 'bg-[#28A745] text-white': nameSwitch == 'ar' }"
            >
              <v-badge
                dot
                floating
                :color="
                  errors['charity_name:ar'] || apiErrors['charity_name:ar']
                    ? 'error'
                    : 'transparent'
                "
              >
                العربيه
              </v-badge>
            </div>
          </div>
        </div>

        <div class="inputs">
          <div class="relative" v-show="nameSwitch === 'ar'">
            <div
              class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
            >
              <img loading="lazy" src="../../../assets/images/campaign/edit.svg" alt="" />
            </div>

            <Field
              type="text"
              name="charity_name:ar"
              v-model="newCharity['charity_name:ar']"
              rules="required"
              :validateOnInput="true"
              :placeholder="$t('home.name_ar')"
              class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />

            <ErrorMessage class="error" name="charity_name:ar" />
            <p
              class="error"
              v-for="(err, n) in apiErrors['charity_name:ar']"
              :key="n"
              v-html="err"
            />
          </div>

          <div class="relative" v-show="nameSwitch === 'en'">
            <div
              class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3"
            >
              <img loading="lazy" src="../../../assets/images/campaign/edit.svg" alt="" />
            </div>

            <Field
              type="text"
              name="charity_name:en"
              v-model="newCharity['charity_name:en']"
              rules="required"
              :validateOnInput="true"
              :placeholder="$t('home.name_en')"
              class="block w-full ltr:pl-5 rtl:pr-5 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />

            <ErrorMessage class="error" name="charity_name:en" />
            <p
              class="error"
              v-for="(err, n) in apiErrors['charity_name:en']"
              :key="n"
              v-html="err"
            />
          </div>
        </div>
      </div>
      <!-- email input -->
      <div>
        <div class="relative mt-4">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <img loading="lazy" src="../../../assets/images/contact/email.svg" alt="" />
          </div>

          <Field
            type="email"
            name="email"
            :validateOnInput="true"
            rules="required|email"
            v-model="newCharity.email"
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
          rules="required"
          :validateOnInput="true"
          v-slot="{ field }"
        >
          <vue-tel-input
            v-bind="field"
            v-model="newCharity.mobile"
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
            name="country_id"
            rules="required"
            :validateOnInput="true"
            id="country_id"
            v-model="newCharity.country_id"
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
            v-model="newCharity.password"
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
            v-model="newCharity.password_confirmation"
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
        @click="validate"
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
import { ErrorMessage, Field, Form } from "vee-validate";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

import { type NewCharity } from "~/helpers/interfaces";
import { useAuth } from "../services/auth";
import { useCountries } from "../services/countries";

const show1 = ref<boolean>(false);
const show2 = ref<boolean>(false);
const isRemember = ref<boolean>(true);
const nameSwitch = ref<string>("ar");
const apiErrors = ref<any>({});

const { register, isLoading } = useAuth();
const { countries, status } = useCountries();

const switchName = (): void => {
  nameSwitch.value = nameSwitch.value === "ar" ? "en" : "ar";
};

const newCharity = ref<NewCharity>({
  "charity_name:ar": "",
  "charity_name:en": "",
  email: "",
  mobile: "",
  password: "",
  password_confirmation: "",
  country_id: "",
  user_type: "charity",
});

const showPassword = (): void => {
  show1.value = !show1.value;
};

const validatePhoneInput = () => {
  newCharity.value.mobile = newCharity.value.mobile.replace(/[^0-9]/g, "");
};

const showConfPassword = (): void => {
  show2.value = !show2.value;
};

const onSubmit = () => {
  apiErrors.value = {};

  register(
    newCharity.value,
    (err: any) => (apiErrors.value = err.response.data.result.errors)
  );
};
</script>

<style scoped>
.error {
  @apply text-sm text-red-500;
}
</style>
