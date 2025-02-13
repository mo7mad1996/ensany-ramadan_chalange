<template>
  <div class="contact_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <div class="heading mb-5">
      <h2 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("contact.get_touch") }}
      </h2>

      <p class="w-[400px] text-sm text-[#12121299]">
        {{ $t("contact.contact_desc") }}
      </p>
    </div>

    <Form v-slot="{ meta }" @submit="onSubmit">
      <!-- name input -->
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
          name="name"
          rules="required"
          v-model="contactData.name"
          type="text"
          id="name"
          :placeholder="$t('contact.name')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>
      <ErrorMessage name="name" class="text-sm text-red-500 mt-2" />

      <!-- email input -->
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
          name="email"
          rules="required"
          v-model="contactData.email"
          type="text"
          id="email"
          :placeholder="$t('contact.email')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>
      <ErrorMessage name="email" class="text-sm text-red-500 mt-2" />
      <!-- phone number  -->
      <div class="relative mt-4">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img
            loading="lazy"
            src="../../../assets/images/contact/phone.svg"
            alt=""
          />
        </div>

        <Field
          name="mobile"
          rules="required"
          v-model="contactData.mobile"
          type="text"
          id="mobile"
          :placeholder="$t('contact.phone')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>
      <ErrorMessage name="mobile" class="text-sm text-red-500 mt-2" />

      <!-- subject -->
      <div class="relative mt-3">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img
            loading="lazy"
            src="../../../assets/images/campaign/edit.svg"
            alt=""
          />
        </div>

        <Field
          name="subject"
          rules="required"
          v-model="contactData.subject"
          type="text"
          id="subject"
          :placeholder="$t('contact.subject')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>
      <ErrorMessage name="subject" class="text-sm text-red-500 mt-2" />

      <!-- comment input -->
      <div class="relative mt-3">
        <div
          class="absolute ltr:right-0 rtl:left-0 top-3 flex items-center ltr:pr-3 rtl:pl-3"
        >
          <img
            loading="lazy"
            src="../../../assets/images/campaign/edit.svg"
            alt=""
          />
        </div>

        <Field
          as="textarea"
          type="text"
          rules="required"
          name="content"
          v-model="contactData.content"
          id="text-eria"
          :placeholder="$t('contact.comment')"
          class="block w-full px-4 pb-md pt-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />

        <ErrorMessage name="content" class="text-sm text-red-500 mt-2" />

        <v-btn
          :disabled="isLoading"
          :loading="isLoading"
          :ripple="false"
          type="submit"
          class="text-capitalize rounded-lg w-full mt-2"
          variant="flat"
          size="large"
          color="primary"
          >{{ $t("contact.submit") }}</v-btn
        >
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { useRoute } from "vue-router";
import { useContact } from "../services/contact_us";
const route = useRoute();
const { isLoading, error, makeContact } = useContact();

const contactData = ref<any>({
  name: "",
  email: "",
  mobile: "",
  subject: "",
  content: "",
});

const onSubmit = () => {
  makeContact(contactData.value);
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
