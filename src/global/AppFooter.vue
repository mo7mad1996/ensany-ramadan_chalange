<template>
  <footer class="px-[.5rem] py-[2rem] bg-primary-light">
    <Container>
      <v-row class="row ga-4" no-gutters>
        <v-col lg="3" xl="4" md="12" cols="12" offset-lg="0">
          <img src="../assets/images/logo.svg" alt="" />
          <p class="pt-[.5rem] pb-[.5rem]">{{ $t("global.footer") }}</p>
        </v-col>

        <v-col lg="3" xl="4" md="12" cols="12" offset-lg="1">
          <div
            class="terms pb-[.5rem] flex rtl:flex-row-reverse justify-center items-center lg:gap-x-[2rem] xl:gap-x-[2rem] md:gap-x-[8rem] gap-x-[8rem]"
          >
            <span>{{ $t("global.footer_terms") }}</span>

            <span>{{ $t("global.footer_faqs") }}</span>
          </div>
        </v-col>

        <v-col lg="3" xl="4" md="12" cols="12" offset-lg="1">
          <p class="flow pb-[.5rem]">{{ $t("global.footer_follow") }}</p>
          <div
            class="scotila-links flex lg:gap-x-4 xl:gap-x-4 md:gap-x-[2rem] gap-x-[2rem] pt-[.5rem]"
          >
            <img src="../assets/images/facebook.svg" alt="" />
            <img src="../assets/images/insta.svg" alt="" />
            <img src="../assets/images/twitter.svg" alt="" />
            <img src="../assets/images/youtube.svg" alt="" />
            <img src="../assets/images/ticktok.svg" alt="" />
            <img src="../assets/images/whatsapp.svg" alt="" />
          </div>
        </v-col>
      </v-row>

      <p class="text-center text-sm pt-xm">
        {{ $t("global.copy_right") }}
      </p>
    </Container>
  </footer>
</template>

<script setup>
import Container from "./Container.vue";
</script>

<style scoped>
.v-row {
  align-items: center !important;
}

.terms,
.flow {
  font-size: 18px;
}
</style>
