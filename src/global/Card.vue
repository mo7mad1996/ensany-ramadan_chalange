<template>
  <div class="card text-start ma-2 w-100">
    <div class="image">
      <slot name="image"></slot>
    </div>

    <!-- honor company  -->
    <div class="honor-compan d-flex ga-2 align-center pt-2">
      <img src="../assets/images/honor-company.svg " alt="" />
      <p><slot name="company"></slot></p>
    </div>

    <!-- chalenge title -->
    <h2 class="font-bold text-[26px] leading-[39px] pt-1">
      <slot name="title"></slot>
    </h2>

    <!-- chalenge desc -->
    <p class="text-[14px]">
      <slot name="desc"></slot>
    </p>

    <!-- subscribers -->
    <div class="subscribers mt-2">
      <div class="total d-flex ga-2 align-center">
        <img src="../assets/images/doners.svg" alt="" />
        <span><slot name="subscribers"></slot></span>
      </div>

      <v-progress-linear
        color="#3E7E41"
        :model-value="props.rate"
        class="rounded mt-2"
        :height="10"
      ></v-progress-linear>
    </div>

    <!-- donation amount -->
    <div class="donation mt-4 d-flex align-center justify-space-between">
      <p>
        <span><slot name="donation"></slot></span> raised of
        <slot name="total_donation"></slot>
      </p>

      <v-btn
        class="text-capitalize rounded-lg"
        variant="flat"
        size="default"
        color="#3E7E41"
        >Donate Now</v-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  rate: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
h2 {
  font-weight: bold;
}

.donation {
  span {
    font-weight: bold;
  }
}

.honor-company {
  p {
    color: #12121299;
  }
}
</style>
