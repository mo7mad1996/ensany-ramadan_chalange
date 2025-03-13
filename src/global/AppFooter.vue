<template>
  <footer class="px-[.5rem] py-[2rem] bg-primary-light">
    <Container>
      <div class="row grid grid-cols-12 gap-4 items-center">
        <div class="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12">
          <img
            loading="lazy"
            src="../assets/images/logo.svg"
            alt="ramadanchallenges image"
          />
          <p class="pt-[.5rem] pb-[.5rem]">{{ $t("global.footer") }}</p>
        </div>

        <div class="xl:col-span-5 lg:col-span-8 md:col-span-12 col-span-12">
          <div
            class="terms pb-[.5rem] flex flex-col sm:flex-row justify-center items-center lg:gap-x-[2rem] xl:gap-x-[2rem] md:gap-x-[8rem] gap-x-[8rem]"
          >
            <!-- <span
              class="cursor-pointer hover:text-primary"
              @click="$router.push('/terms-conditions')"
              >{{ $t("global.footer_terms") }}</span
            > -->

            <p
              @click="$router.push('/')"
              class="cursor-pointer hover:text-primary"
            >
              {{ $t("global.home") }}
            </p>
            <p
              @click="$router.push('/faqs')"
              class="cursor-pointer hover:text-primary"
            >
              {{ $t("global.footer_faqs") }}
            </p>

            <p
              v-for="(page, index) in pages"
              :key="index"
              @click="$router.push(`/page/${page?.id}`)"
              class="cursor-pointer hover:text-primary"
            >
              {{ page?.title }}
            </p>
          </div>
        </div>

        <div class="xl:col-span-3 lg:col-span-12 md:col-span-12 col-span-12">
          <p class="flow pb-[.5rem]">{{ $t("global.footer_follow") }}</p>
          <div
            class="scotila-links cursor-pointer flex flex-wrap gap-y-4 lg:gap-x-4 xl:gap-x-4 md:gap-x-[2rem] gap-x-[2rem] pt-[.5rem]"
          >
            <a
              v-for="(link, index) in footer"
              :key="index"
              :href="link?.url"
              target="_blank"
            >
              <nuxt-img loading="lazy" :src="link?.icon" alt="footer_icon" />
            </a>
          </div>
        </div>
      </div>

      <p class="text-center text-sm pt-xm">
        {{ $t("global.copy_right") }}
      </p>
    </Container>
  </footer>
</template>

<script setup>
import { useFooter } from "~/modules/home/services/footer";
import { usePages } from "~/modules/home/services/pages";
import Container from "./Container.vue";
const { footer, footer_error } = useFooter();
const { pages, pages_error } = usePages();
</script>

<style scoped>
footer {
  margin-top: auto;
}
.v-row {
  align-items: center !important;
}

.terms,
.flow {
  font-size: 18px;
}
</style>
