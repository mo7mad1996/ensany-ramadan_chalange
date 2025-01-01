<template>
  <section aria-label="contact us page" class="pt-sm pb-sm">
    <Container>
      <div
        class="flex lg:flex-row xl:flex-row md:flex-col-reverse flex-col-reverse justify-between items-center lg:gap-xl xl:gap-xl md:gap-md gap-sm"
      >
        <ContactForm />

        <ContactVideo />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
useSeoMeta({
  title: "Ramadan | contact",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
