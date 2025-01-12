<template>
  <div class="reset_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("auth.reset_password") }}
    </h2>

    <form action="">
      <!-- password input -->
      <div class="relative mt-4">
        <div
          class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
          @click="showPassword"
        >
          <v-icon v-if="show1" size="small">mdi-eye-outline</v-icon>
          <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
        </div>

        <input
          :type="show1 ? 'text' : 'password'"
          id="custom-input"
          :placeholder="$t('auth.password')"
          class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- confirm password  -->
      <div class="relative mt-4">
        <div
          class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
          @click="showConfPassword"
        >
          <v-icon v-if="show2" size="small">mdi-eye-outline</v-icon>
          <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
        </div>

        <input
          :type="show2 ? 'text' : 'password'"
          id="custom-input"
          :placeholder="$t('auth.confirm_password')"
          class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- confirm new password -->
      <v-btn
        class="text-capitalize rounded-lg w-100 mt-5"
        :ripple="false"
        variant="flat"
        size="large"
        color="primary"
        >{{ $t("auth.reset_password") }}</v-btn
      >
    </form>
  </div>
</template>

<script setup lang="ts">
const show1 = ref<boolean>(false);
const show2 = ref<boolean>(false);

const showPassword = (): void => {
  show1.value = !show1.value;
};

const showConfPassword = (): void => {
  show2.value = !show2.value;
};
</script>
