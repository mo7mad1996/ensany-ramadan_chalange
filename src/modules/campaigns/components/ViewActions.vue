<template>
  <section class="view-actions" aria-label="more campaign details">
    <div class="card border rounded-lg p-4">
      <!-- loader for amount -->
      <v-skeleton-loader
        v-if="loading"
        :loading="loading"
        type="list-item-two-line"
      ></v-skeleton-loader>

      <div class="collected-amount flex gap-x-2 items-center" v-if="!loading">
        <h1 class="text-2xl font-bold text-primary">17608 USD</h1>
        <span class="text-sm text-[#12121299]">Collected</span>
      </div>

      <!-- subscribers -->
      <div class="doners mt-4">
        <div class="total-doners d-flex ga-2 align-center">
          <span class="text-[#12121299] text-sm">247 Donate</span>
        </div>

        <v-progress-linear
          color="primary"
          :model-value="rate"
          class="rounded mt-2"
          :height="10"
        ></v-progress-linear>
      </div>

      <!-- action buttons -->
      <div class="buttons mt-sm">
        <v-btn
          class="text-capitalize rounded-lg w-100"
          append-icon="mdi-share-variant-outline"
          :ripple="false"
          variant="flat"
          size="default"
          color="primary"
        >
          Share Now
        </v-btn>

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-3"
          :ripple="false"
          variant="flat"
          size="default"
          color="primary"
        >
          Make your donation to the one you love
        </v-btn>

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-3"
          :ripple="false"
          variant="flat"
          size="default"
          color="primary"
        >
          Donate Now
        </v-btn>
      </div>

      <!-- all doners part -->
      <div class="all-doners mt-5">
        <div class="title flex gap-x-3 items-center">
          <img src="../../../assets/images/increment.svg" width="20" alt="" />
          <span class="text-2xl font-bold text-primary">247 Donate</span>
        </div>

        <v-skeleton-loader
          v-for="(item, index) in 3"
          :key="index"
          v-if="loading"
          :loading="loading"
          type="avatar,list-item-two-line"
        ></v-skeleton-loader>

        <!-- list of doners -->
        <div class="doners-list mt-5" v-if="!loading">
          <!-- one doner -->
          <div
            class="doner mb-5 flex justify-between items-center"
            v-for="(item, index) in 3"
            :key="index"
          >
            <div class="flex gap-x-3 items-center">
              <img src="../../../assets/images/user.svg" alt="" />
              <div>
                <h4 class="text-2xl font-bold">Ali Omar</h4>
                <p class="text-sm text-[#121212] pt-1">Highest Donor</p>
              </div>
            </div>

            <div class="donation-amount">
              <h4 class="text-2xl font-bold text-primary">$450</h4>
              <span class="text-sm text-[#12121299] pt-2">Last Week</span>
            </div>
          </div>

          <div class="flex justify-between items-center gap-x-2 w-full mt-5">
            <v-btn
              class="text-capitalize rounded-lg w-1/2"
              :ripple="false"
              variant="flat"
              size="default"
              color="primary"
            >
              View All
            </v-btn>

            <v-btn
              class="text-capitalize rounded-lg w-1/2"
              :ripple="false"
              variant="flat"
              size="default"
              color="primary"
            >
              Top Doners
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const rate = ref(30);
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 3000);
</script>
