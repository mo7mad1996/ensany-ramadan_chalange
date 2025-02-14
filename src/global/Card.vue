<template>
  <div :class="{ card: shadow }" class="p-2 cursor-pointer rounded-lg text-start w-100">
    <div class="image">
      <slot name="image"></slot>
    </div>

    <!-- honor company  -->
    <div class="honor-compan d-flex ga-2 align-center pt-2">
      <img
        src="../assets/images/honor-company.svg "
        alt="ramadanchallenges image"
        loading="lazy"
      />
      <p>
        <slot name="company"></slot>
      </p>
    </div>

    <!-- chalenge title -->
    <h2 class="font-bold text-xl leading-[30px] pt-2 pb-2">
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
          <img
            loading="lazy"
            src="../assets/images/doners.svg"
            alt="ramadanchallenges image"
          />
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

      <v-progress-linear
        v-observe-visibility="onEnterViewport"
        color="primary"
        :model-value="animatedRate"
        class="rounded mt-2"
        :height="10"
      ></v-progress-linear>
    </div>

    <!-- donation amount -->
    <div class="donation mt-4 d-flex align-center justify-space-between">
      <div
        v-if="
          user &&
          user?.user_type === 'dooner' &&
          !in_cart &&
          status != 'ended' &&
          (cart_status !== undefined || cart_status == 'wait')
        "
      >
        <v-btn
          :disabled="loading"
          :loading="loading"
          v-if="donatebtn"
          class="text-capitalize rounded-lg"
          variant="text"
          size="default"
          color="primary"
          @click="handleCart('add')"
        >
          <img
            loading="lazy"
            src="../assets/images/donor/Icon.png"
            width="20"
            alt="Cart"
          />
          {{ $t("global.add_to_cart") }}</v-btn
        >
      </div>

      <div
        v-if="
          user &&
          user?.user_type === 'dooner' &&
          in_cart &&
          status != 'ended' &&
          cart_status !== undefined &&
          cart_status == 'wait'
        "
      >
        <v-btn
          :disabled="loading"
          :loading="loading"
          v-if="donatebtn"
          class="text-capitalize rounded-lg"
          variant="text"
          color="red"
          size="default"
          @click="handleCart('remove')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clip-rule="evenodd"
            />
          </svg>

          {{ $t("global.remove_from_cart") }}</v-btn
        >
      </div>
      <div v-if="user && user?.user_type === 'dooner' && cart_status == 'donated'">
        {{ $t("global.already_donated") }}
      </div>

      <div class="flex items-cener gap-1" v-if="status == 'completed'">
        <span class="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clip-rule="evenodd"
            /></svg
        ></span>
        <span class="text-primary">
          {{ $t("campaigns.completed") }}
        </span>
      </div>

      <v-btn
        v-if="donatebtn && status != 'ended'"
        class="text-capitalize rounded-lg bg-red-500 text-white"
        variant="flat"
        size="default"
        @click="$router.push(route)"
        >{{ $t("global.donate_now") }}</v-btn
      >

      <v-btn
        v-if="status == 'ended'"
        class="text-capitalize rounded-lg bg-red-500 text-white"
        variant="flat"
        :disabled="true"
        size="default"
        @click="$router.push(route)"
        >{{ $t("campaigns.ended") }}</v-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";
import { useCartCounter } from "~/modules/donor/services/cart-counter";

const { token, user } = useAuth();
const { increaseCartCount, decreaseCartCount } = useCartCounter();

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
  cart_id: {
    type: String,
    required: true,
  },
  cart_status: {
    type: String,
    required: true,
  },
  in_cart: {
    type: Boolean,
    required: true,
  },
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
const in_cart = ref(props.in_cart);
const cart_id = ref(props.cart_id);
const cart_status = ref(props.cart_status);
const loading = ref(false);

// Watch for changes to rate prop and animate progress bar
watch(
  () => props.rate,
  (newRate) => {
    animateProgressBar(newRate);
  }
);

watchEffect(() => {
  // console.log(props.in_cart);
  // cart_id.value = props.cart_id;
});

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
const handleCart = async (method: String) => {
  loading.value = true;
  const id = method === "add" ? props.id : cart_id.value;
  const waitcart = await api.post(
    `/doner/cart/${method}/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  in_cart.value = waitcart && method == "add";
  loading.value = false;
  if (method === "add") {
    cart_id.value = waitcart?.data?.result?.id;
    cart_status.value = waitcart?.data?.result?.status;
  }
  method === "add" ? increaseCartCount() : decreaseCartCount();
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
