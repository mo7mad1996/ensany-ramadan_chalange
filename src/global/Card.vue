<template>
  <div :class="{ card: shadow }" class="p-2 cursor-pointer rounded-lg text-start w-100">
    <div class="image">
      <slot name="image"></slot>
    </div>

    <!-- honor company  -->
    <div class="honor-compan d-flex ga-2 align-center pt-2">
      <img src="../assets/images/honor-company.svg " alt="" />
      <p>
        <slot name="company"></slot>
      </p>
    </div>

    <!-- chalenge title -->
    <h2 class="font-bold text-xl leading-[30px] pt-1">
      <slot name="title"></slot>
    </h2>

    <!-- chalenge desc -->
    <p class="text-sm">
      <slot name="desc"></slot>
    </p>

    <!-- subscribers -->
    <div class="subscribers mt-2">

      <div class="flex justify-between">
        <div class="total d-flex ga-2 align-center">
          <img src="../assets/images/doners.svg" alt="" />
          <span>
            <slot name="subscribers"></slot>
          </span>
        </div>

        <p>
          <span class="font-bold">
            <slot name="donation"></slot>
          </span>
          {{ $t("global.raised_of") }}
          <slot name="total_donation"></slot>
        </p>
      </div>

      <v-progress-linear v-observe-visibility="onEnterViewport" color="primary" :model-value="animatedRate"
        class="rounded mt-2" :height="10"></v-progress-linear>
    </div>

    <!-- donation amount -->
    <div class="donation mt-4 d-flex align-center justify-space-between">

      <div v-if="user && user?.user_type === 'dooner'">
        <v-btn v-if="donatebtn" class="text-capitalize rounded-lg" variant="text" size="default" color="primary"
          @click="handleCart('add')">{{ $t("global.add_to_cart") }}</v-btn>
      </div>

      <!-- <div v-if="user && user?.user_type === 'dooner'">
        <v-btn v-if="donatebtn" class="text-capitalize rounded-lg" variant="text" size="default" color="primary"
          @click="handleCart('remove')">remove</v-btn>
      </div> -->

      <v-btn v-if="donatebtn" class="text-capitalize rounded-lg" variant="flat" size="default" color="primary"
        @click="$router.push(route)">{{ $t("global.donate_now") }}</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";
import { useCartCounter } from "~/modules/donor/services/cart-counter";

const { token, user } = useAuth();
const { increaseCartCount, DecreaseCartCount } = useCartCounter();



const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  shadow: {
    type: Boolean,
    required: true,
  },
  donatebtn: {
    type: Boolean,
    required: true,
  },
});

const animatedRate = ref(0);
const targetRate = props.rate;

// Watch for changes to rate prop and animate progress bar
watch(
  () => props.rate,
  (newRate) => {
    animateProgressBar(newRate);
  }
);

const onEnterViewport = (isVisible: boolean) => {
  if (isVisible) {
    animateProgressBar(targetRate);
  }
};

const animateProgressBar = (target: number) => {
  const duration = 1000;
  const increment = target / (duration / 16);

  let current = 0;
  const update = () => {
    current += increment;
    if (current < target) {
      animatedRate.value = Math.round(current);
      requestAnimationFrame(update);
    } else {
      animatedRate.value = target;
    }
  };
  requestAnimationFrame(update);
};


// Handle Method Add to Cart if he is a Donner
const handleCart = (method: String) => {
  api.post(`/doner/cart/${method}/${props.id}`, {}, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })

  method === "add" ? increaseCartCount() : DecreaseCartCount()
};
</script>

<style scoped>
.card {
  transition: all 0.3s ease;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  }
}
</style>
