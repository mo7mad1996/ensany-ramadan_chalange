<template>
  <div class="login_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      Log In
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

      <!-- password input -->
      <div class="relative mt-4">
        <div
          class="absolute right-0 inset-y-0 flex items-center pr-3 cursor-pointer"
          @click="showPassword"
        >
          <v-icon v-if="show" size="small">mdi-eye-outline</v-icon>
          <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
        </div>

        <input
          :type="show ? 'text' : 'password'"
          id="custom-input"
          placeholder="Password"
          class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- forget password link -->
      <nuxt-link to="/forgetpassword">
        <p class="underline text-primary cursor-pointer text-sm pt-2 text-end">
          Forget Password ?
        </p>
      </nuxt-link>

      <!-- remember me checkbox -->
      <v-checkbox v-model="isRemember" color="primary" :ripple="false">
        <template v-slot:label>
          <p class="text-sm">Remember Me</p>
        </template>
      </v-checkbox>

      <!-- confirm login -->
      <v-btn
        class="text-capitalize rounded-lg w-100 mt-2"
        :ripple="false"
        variant="flat"
        size="large"
        color="primary"
        >Log in</v-btn
      >

      <!-- do not have account option -->
      <p class="text-sm pt-sm text-center">
        Do not have an account? go to
        <nuxt-link to="/signup" class="text-primary underline cursor-pointer"
          >Sign Up</nuxt-link
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const show = ref<boolean>(false);
const isRemember = ref<boolean>(true);

const showPassword = (): void => {
  show.value = !show.value;
};
</script>
