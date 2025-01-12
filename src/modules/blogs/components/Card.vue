<template>
  <div class="blog_card">
    <div class="video">
      <slot name="video"></slot>
    </div>

    <h3
      @click="$router.push(route)"
      class="font-semibold text-2xl hover:text-primary cursor-pointer leading-[36px] mt-3 mb-0 text-[#121212]"
    >
      <slot name="title"></slot>
    </h3>

    <p class="mt-2 text-sm text-justify leading-20 text-[#00000099]">
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
