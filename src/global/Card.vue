<template>
  <div class="card p-2 cursor-pointer rounded-lg text-start ma-2 w-100">
    <div class="image">
      <slot name="image"></slot>
    </div>

    <!-- honor company  -->
    <div class="honor-compan d-flex ga-2 align-center pt-2">
      <img src="../assets/images/honor-company.svg " alt="" />
      <p><slot name="company"></slot></p>
    </div>

    <!-- chalenge title -->
    <h2 class="font-bold text-2xl leading-[39px] pt-1">
      <slot name="title"></slot>
    </h2>

    <!-- chalenge desc -->
    <p class="text-sm">
      <slot name="desc"></slot>
    </p>

    <!-- subscribers -->
    <div class="subscribers mt-2">
      <div class="total d-flex ga-2 align-center">
        <img src="../assets/images/doners.svg" alt="" />
        <span><slot name="subscribers"></slot></span>
      </div>

      <v-progress-linear
        v-observe-visibility="onEnterViewport"
        color="primary"
        :model-value="animatedRate"
        class="rounded mt-2"
        :height="10"
      ></v-progress-linear>
    </div>

    <!-- donation amount -->
    <div class="donation mt-4 d-flex align-center justify-space-between">
      <p>
        <span class="font-bold"><slot name="donation"></slot></span>
        {{ $t("global.raised_of") }}
        <slot name="total_donation"></slot>
      </p>

      <v-btn
        class="text-capitalize rounded-lg"
        variant="flat"
        size="default"
        color="primary"
        @click="$router.push(route)"
        >{{ $t("global.donate_now") }}</v-btn
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
  route: {
    type: String,
    required: true,
  },
});

const animatedRate = ref(0);
const targetRate = props.rate;

const onEnterViewport = (isVisible: boolean) => {
  if (isVisible) {
    animateProgressBar(targetRate);
  }
};

const animateProgressBar = (target: number) => {
  const duration = 1000;
  const increment = target / (duration / 16);

  let current = 0;
  const update = () => {
    current += increment;
    if (current < target) {
      animatedRate.value = Math.round(current);
      requestAnimationFrame(update);
    } else {
      animatedRate.value = target;
    }
  };
  requestAnimationFrame(update);
};
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  }
}
</style>
