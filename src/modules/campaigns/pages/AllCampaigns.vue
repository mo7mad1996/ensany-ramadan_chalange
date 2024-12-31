<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("global.campaigns") }} </template>
  </BreadCrumb>

  <Container class="all-campaigns">
    <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("campaigns.all_campaigns") }}
    </h1>

    <div
      class="campaigns grid gap-6 pt-sm pb-sm grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2"
    >
      <Card :rate="20" v-for="(item, index) in 12" :key="index">
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

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="5"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import Container from "~/global/Container.vue";
import Card from "~/global/Card.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";

const page = ref(2);
</script>
