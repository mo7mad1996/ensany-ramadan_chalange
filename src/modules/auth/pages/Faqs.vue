<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("auth.fq_title") }} </template>
  </BreadCrumb>

  <Container class="faqs">
    <div class="title_desc">
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("auth.fq_title") }}
      </h1>

      <p class="text-sm">{{ $t("auth.fq_desc") }}</p>
    </div>

    <div class="questions w-full">
      <div class="mt-6" v-if="status == 'pending'">
        <v-skeleton-loader
          class=""
          v-for="(item, index) in 3"
          :key="index"
          type="avatar, list-item-two-line"
        ></v-skeleton-loader>
      </div>

      <v-expansion-panels
        v-if="status == 'success'"
        class="mb-6 mt-6"
        elevation="0"
      >
        <v-expansion-panel v-for="(item, index) in faqs" :key="index">
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            <div class="flex items-center gap-x-3">
              <img
                v-if="index % 2 == 0"
                src="../../../assets/images/dashboard/amount.svg"
                alt=""
              />

              <img
                v-else
                src="../../../assets/images/dashboard/campaigns.svg"
                alt=""
              />

              <h2 class="text-[#121212] text-xl font-bold">
                {{ item.title }}
              </h2>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>{{ item.content }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
import { useFaqs } from "../services/faqs";
import { useGlobalVar } from "~/helpers/global-var";

const { faqs, status } = useFaqs();

const { siteName } = useGlobalVar();
siteName("auth.page_title_faq");
</script>
