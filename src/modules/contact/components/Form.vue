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

    <form action="">
      <!-- name input -->
      <div class="relative">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img src="../../../assets/images/contact/name.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          :placeholder="$t('contact.name')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- email input -->
      <div class="relative mt-4">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img src="../../../assets/images/contact/email.svg" alt="" />
        </div>

        <input
          type="email"
          id="custom-input"
          :placeholder="$t('auth.email')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- phone number  -->
      <div class="relative mt-4">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img src="../../../assets/images/contact/phone.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          :placeholder="$t('auth.phone')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- subject -->
      <div class="relative mt-3">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img src="../../../assets/images/campaign/edit.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          :placeholder="$t('contact.subject')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- comment input -->
      <div class="relative mt-3">
        <div
          class="absolute ltr:right-0 rtl:left-0 top-3 flex items-center ltr:pr-3 rtl:pl-3"
        >
          <img src="../../../assets/images/campaign/edit.svg" alt="" />
        </div>

        <textarea
          type="text"
          id="custom-input"
          :placeholder="$t('contact.comment')"
          class="block w-full px-4 pb-md pt-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >{{ $t("contact.submit") }}</v-btn
        >
      </div>
    </form>
  </div>
</template>
