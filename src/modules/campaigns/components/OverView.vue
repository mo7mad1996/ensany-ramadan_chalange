<template>
  <section aria-label="overview section">
    <Container
      class="gap-sm pt-sm pb-sm flex justify-between lg:flex-row md:flex-col-reverse xl:flex-row flex-col-reverse items-center"
    >
      <div class="card w-[366px]">
        <Card
          :rate="20"
          :shadow="false"
          :donatebtn="false"
          :route="`/campaigns`"
        >
          <template #image>
            <img
              src="../../../assets/images/chalenge-img.png"
              class="w-100"
              alt=""
            />
          </template>

          <template #company> {{ $t("home.honor_company") }}</template>

          <template #title>{{ $t("home.feed_familly") }}</template>

          <template #desc> {{ $t("home.card_desc") }}</template>

          <template #subscribers>150</template>

          <template #total_donation>$6000</template>

          <template #donation>$600</template>
        </Card>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
import Card from "~/global/Card.vue";
import { useCarousel } from "~/helpers/carousel";
const { breakpoints4, settings, Carousel, Slide, Pagination } = useCarousel();
</script>
