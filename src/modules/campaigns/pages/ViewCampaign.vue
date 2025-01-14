<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> View Campaign </template>
  </BreadCrumb>

  <Container>
    <div class="grid grid-cols-12 gap-5">
      <div class="xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12">
        <CampaignsViewDetails />
      </div>

      <div class="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12">
        <CampaignsViewActions />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
</script>
