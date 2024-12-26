<template>
  <section aria-label="banner section" class="banner">
    <Container class="h-100">
      <div class="content">
        <!-- large text -->
        <h2 class="mb-0">
          Your donations make a difference. Participate in our challenge today!
        </h2>

        <!-- small text -->
        <p class="mb-0 mt-5">
          Create your fundraising page, set your goal, and inspire others to
          donate!
        </p>

        <!-- banner buttons -->
        <div class="banner_buttons d-flex ga-3 align-center mt-5">
          <v-btn
            class="text-capitalize rounded-lg"
            variant="flat"
            size="default"
            color="#3E7E41"
            >Join the Challenge</v-btn
          >

          <v-btn
            class="text-capitalize rounded-lg"
            variant="outlined"
            size="default"
            color="#fff"
            >Start a Campaign</v-btn
          >
        </div>

        <div
          class="statistics grid gap-x-[2rem] grid-cols-2 lg:grid-cols-4 md:grid-cols-4"
        >
          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount">$3,085</span>
                <span>
                  <img src="../../../assets/images/statistics1.svg" alt="" />
                </span>
              </div>

              <h5>Raised</h5>
            </div>
          </div>

          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount">$3,085</span>
                <span>
                  <img src="../../../assets/images/doners.svg" alt="" />
                </span>
              </div>

              <h5>Doners</h5>
            </div>
          </div>

          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount">$3,085</span>
                <span>
                  <img src="../../../assets/images/funded.svg" alt="" />
                </span>
              </div>

              <h5>Funded</h5>
            </div>
          </div>

          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount">$3,085</span>
                <span>
                  <img src="../../../assets/images/campaigns.svg" alt="" />
                </span>
              </div>

              <h5>Campaign</h5>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <div class="donate_button flex justify-center">
      <v-btn
        class="text-capitalize rounded-[5px] rounded-ss-none rounded-es-none"
        stacked
        size="x-small"
        color="#3E7E41"
      >
        <img src="../../../assets/images/statistics1.svg" alt="" />
        <p>Donation</p>
      </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import { ref } from "vue";

const statistics = ref([
  {
    number: "$3,085",
    name: "Raised",
    icon: "../../..//assets/images/statistics1.svg",
  },
  {
    number: "$3,085",
    name: "Doners",
    icon: "../../../src/assets/images/doners.svg",
  },
  {
    number: "$60 M",
    name: "Funded",
    icon: "../../../src/assets/images/funded.svg",
  },
  {
    number: "110k",
    name: "Campaign",
    icon: "../../../src/assets/images/campaigns.svg",
  },
]);
</script>

<style scoped>
.banner {
  background: url(../../../assets/images/banner.png) no-repeat;
  background-size: cover;
  position: relative;
  /* height: 100vh; */

  .content {
    padding-top: 3rem;
  }

  .v-container {
    position: relative;
    color: #fff;
    display: grid;
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-size: 46px;
    line-height: 64.4px;
    width: 520px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .statistics {
    padding: 5rem 0;
    .v-col-lg-3 {
      justify-items: center;
    }
    .statistic_item {
      .amount,
      h5 {
        font-weight: 700;
        font-size: 26px;
        line-height: 39px;
      }

      h5 {
        color: #ffffff9e;
      }
    }
  }

  .donate_button {
    position: fixed;
    bottom: 0;
    z-index: 100000000;
    left: 0;
    color: #fff;
    cursor: pointer;
    img {
      filter: brightness(4.5);
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9164478291316527) 11%,
      rgba(255, 255, 255, 0) 95%
    );
  }
}

@media (max-width: 767px) {
  .banner {
    h2 {
      font-weight: 700;
      font-size: 30px;
      line-height: 44.4px;
      width: 326px;
    }

    &::before {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8324142156862745) 43%,
        rgba(255, 255, 255, 0) 95%
      );
    }

    /* p {
      width: 326px;
    } */

    .statistics {
      padding: 2rem 0rem 5rem 0;
    }
  }
}
</style>
