<template>
  <section aria-label="overview section" class="pt-sm pb-sm">
    <Container
      class="grid gap-sm pt-sm pb-sm grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 items-center"
    >
      <div class="w-[386px]">
        <!-- honor company  -->
        <div class="honor-compan d-flex ga-2 align-center pt-2">
          <img src="../../../assets/images/honor-company.svg " alt="" />
          <p>{{ $t("home.honor_company") }}</p>
        </div>

        <!-- chalenge title -->
        <h2 class="font-bold text-2xl leading-[39px] pt-1">
          {{ $t("home.feed_familly") }}
        </h2>

        <!-- chalenge desc -->
        <p class="text-sm">
          {{ $t("home.card_desc") }}
        </p>

        <!-- subscribers -->
        <div class="subscribers mt-2">
          <div class="total d-flex ga-2 align-center">
            <img src="../../../assets/images/doners.svg" alt="" />
            <span>150</span>
          </div>

          <v-progress-linear
            color="primary"
            :model-value="50"
            class="rounded mt-2"
            :height="10"
          ></v-progress-linear>
        </div>

        <!-- donation amount -->
        <div class="donation mt-4 d-flex align-center justify-space-between">
          <p>
            <span class="font-bold">$600</span>
            {{ $t("global.raised_of") }}
            $6000
          </p>
        </div>
      </div>

      <div class="image rounded-md">
        <img
          src="../../../assets/images/banner.png"
          class="rounded-lg"
          alt=""
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
</script>
