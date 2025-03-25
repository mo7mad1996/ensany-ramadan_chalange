<template>
  <section aria-label="login page" class="pt-sm pb-sm">
    <Container>
      <div
        class="flex lg:flex-row xl:flex-row md:flex-col-reverse flex-col-reverse justify-between items-center lg:gap-xl xl:gap-xl md:gap-md gap-sm"
      >
        <AuthLoginForm />

        <div class="image">
          <nuxt-img
            loading="lazy"
            src="/auth/login-img.svg"
            class="lg:h-[518px] xl:h-[518px] md:h-full h-full"
            alt="ramadanchallenges image"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
import { useGlobalVar } from "~/helpers/global-var";

definePageMeta({
  middleware: "guest",
});

const { siteName } = useGlobalVar();
siteName("auth.page_title_login");
</script>
