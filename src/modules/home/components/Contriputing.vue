<template>
  <section aria-label="contributing section" class="contributing pb-10">
    <Container>
      <div class="card">
        <v-row class="align-center">
          <v-col lg="6" xl="6" md="12" cols="12">
            <h1 class="mb-2">Contributing with Ramadan Challenge!</h1>
            <p class="mb-2">
              Help families in need experience a blessed Ramadan.
            </p>
            <v-btn
              class="text-capitalize rounded-lg"
              variant="flat"
              size="default"
              color="#3E7E41"
              >Dontate Now</v-btn
            >
          </v-col>

          <v-col lg="6" xl="6" md="12" cols="12">
            <img src="../../../assets/images/video.png" class="w-100" alt="" />
          </v-col>
        </v-row>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
}

.card {
  background-color: #f7f7f7;
  padding: 3rem;
  border-radius: 7px;
}
</style>
