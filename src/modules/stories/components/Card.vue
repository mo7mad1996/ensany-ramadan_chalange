<template>
  <div class="blog_card p-3 cursor-pointer rounded-md">
    <div class="video">
      <slot name="video"></slot>
    </div>

    <h3
      @click="$router.push(route)"
      class="font-semibold text-2xl hover:text-primary cursor-pointer leading-[36px] mt-6 mb-0 text-[#121212]"
    >
      <slot name="title"></slot>
    </h3>

    <p class="mt-4 text-sm text-justify leading-20 text-[#121212]">
      <slot name="desc"></slot>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  route: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.video {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.blog_card:hover {
  transition: all 0.3s ease;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>
