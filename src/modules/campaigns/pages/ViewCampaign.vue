<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> View Campaign </template>
  </BreadCrumb>

  <Container>
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-9">
        <CampaignsViewDetails />
      </div>

      <div class="col-span-3">
        <CampaignsViewActions />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
</script>
