<template>
  <div class="login_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      Sign Up
    </h2>

    <form action="">
      <!-- name input -->
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="../../../assets/images/contact/name.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          placeholder="Enyer your name"
          class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- email input -->
      <div class="relative mt-4">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="../../../assets/images/contact/email.svg" alt="" />
        </div>

        <input
          type="email"
          id="custom-input"
          placeholder="Email"
          class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- phone number  -->
      <div class="relative mt-4">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="../../../assets/images/contact/phone.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          placeholder="phone number"
          class="block w-full pl-10 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- password input -->
      <div class="relative mt-4">
        <div
          class="absolute right-0 inset-y-0 flex items-center pr-3 cursor-pointer"
          @click="showPassword"
        >
          <v-icon v-if="show1" size="small">mdi-eye-outline</v-icon>
          <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
        </div>

        <input
          :type="show1 ? 'text' : 'password'"
          id="custom-input"
          placeholder="Password"
          class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- confirm password  -->
      <div class="relative mt-4">
        <div
          class="absolute right-0 inset-y-0 flex items-center pr-3 cursor-pointer"
          @click="showConfPassword"
        >
          <v-icon v-if="show2" size="small">mdi-eye-outline</v-icon>
          <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
        </div>

        <input
          :type="show2 ? 'text' : 'password'"
          id="custom-input"
          placeholder="confirm password"
          class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- accept all terms checkbox -->
      <v-checkbox v-model="isRemember" color="primary" :ripple="false">
        <template v-slot:label>
          <p class="text-sm">Acceptance of all terms and conditions</p>
        </template>
      </v-checkbox>

      <!-- confirm login -->
      <v-btn
        class="text-capitalize rounded-lg w-100 mt-2"
        :ripple="false"
        variant="flat"
        size="large"
        color="primary"
        >Sign up</v-btn
      >

      <!-- do not have account option -->
      <p class="text-sm pt-sm text-center">
        Are you already have an account? go to
        <nuxt-link to="/login" class="text-primary underline cursor-pointer"
          >Log in</nuxt-link
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const show1 = ref<boolean>(false);
const show2 = ref<boolean>(false);
const isRemember = ref<boolean>(true);

const showPassword = (): void => {
  show1.value = !show1.value;
};

const showConfPassword = (): void => {
  show2.value = !show2.value;
};
</script>
