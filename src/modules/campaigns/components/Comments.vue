<template>
  <div class="comments pt-sm text-[#121212]">
    <h1 class="text-2xl leading-[36px] text-[#121212]">Comments</h1>

    <div class="header flex justify-between items-center mt-4">
      <div class="text-sm">(12) Comments</div>

      <div class="flex items-center gap-x-2 cursor-pointer">
        <span class="text-sm">Sorted by</span>
        <v-icon size="small">mdi-sort</v-icon>
      </div>
    </div>

    <!-- commment input (write a comment) -->
    <div class="comment-part mt-5 py-0 px-5">
      <div class="flex gap-x-3 items-center">
        <img src="../../../assets/images/user.svg" alt="" />
        <h4 class="text-2xl font-bold">Ali Omar</h4>
      </div>

      <Field
        as="textarea"
        type="text"
        name="comment"
        rules="required"
        placeholder="Write your comment here"
        class="block w-full mt-5 ltr:pl-5 rtl:pr-5 pt-3 pb-md outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
      />

      <div class="w-full flex justify-end">
        <v-btn
          type="submit"
          class="text-capitalize rounded-lg w-1/4 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >Comment</v-btn
        >
      </div>

      <!-- skeleton loader for comments -->
      <div class="mt-md" v-for="(item, index) in 2" :key="index">
        <v-skeleton-loader
          v-if="loading"
          :loading="loading"
          type="avatar, list-item-two-line"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-if="loading"
          :loading="loading"
          type="list-item-two-line"
        ></v-skeleton-loader>
      </div>

      <!-- here display all comments -->
      <div class="all-comments mt-md" v-if="!loading">
        <div class="comment mb-md" v-for="(item, index) in 2" :key="index">
          <div class="flex gap-x-3 items-start">
            <img src="../../../assets/images/user.svg" alt="" />
            <div>
              <h4 class="text-2xl font-bold">Ali Omar</h4>
              <p class="text-sm text-[#12121299] pt-1">5 min ago</p>
            </div>
          </div>

          <p class="text-sm leading-20 text-justify pt-5">
            This campaign truly speaks to my heart. It’s inspiring to see so
            many people coming together for such a meaningful cause. Keep up the
            amazing work!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from "vee-validate";

const loading = ref<boolean>(true);

setTimeout(() => {
  loading.value = false;
}, 3000);
</script>
