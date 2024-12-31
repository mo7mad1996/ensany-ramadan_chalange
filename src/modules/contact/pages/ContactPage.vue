<template>
  <section aria-label="contact us page" class="pt-sm pb-sm">
    <Container class="grid gap-y-sm grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
      <ContactForm />
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
