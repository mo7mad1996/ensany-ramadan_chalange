<template>
  <div class="contact_form lg:w-[402px] xl:w-[402px] md:w-full w-full">
    <div class="heading mb-5">
      <h2 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        Get in Touch
      </h2>

      <p class="w-[400px] text-sm text-[#12121299]">
        We’re here to help! Reach out with any questions or feedback, and we’ll
        get back to you soon.
      </p>
    </div>

    <form action="">
      <!-- name input -->
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="../../../assets/images/contact/name.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          placeholder="Name"
          class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- email input -->
      <div class="relative mt-3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="../../../assets/images/contact/email.svg" alt="" />
        </div>

        <input
          type="email"
          id="custom-input"
          placeholder="Email"
          class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- phone number -->
      <div class="relative mt-3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="../../../assets/images/contact/phone.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          placeholder="Phone"
          class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- phone number -->
      <div class="relative mt-3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="../../../assets/images/campaign/edit.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          placeholder="Subject"
          class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- comment input -->
      <div class="relative mt-3">
        <div class="absolute right-0 top-3 flex items-center pr-3">
          <img src="../../../assets/images/campaign/edit.svg" alt="" />
        </div>

        <textarea
          type="text"
          id="custom-input"
          placeholder="Please describe how we can help you."
          class="block w-full px-4 pb-md pt-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >Submit</v-btn
        >
      </div>
    </form>
  </div>
</template>
