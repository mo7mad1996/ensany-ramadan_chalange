<template>
  <div class="payment-return flex justify-center pt-xl pb-xl">
    <div class="card p-sm rounded-xl border">
      <div class="spinner flex justify-center pb-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <path
            fill="#3E7E41"
            d="M2,12A10.94,10.94,0,0,1,5,4.65c-.21-.19-.42-.36-.62-.55h0A11,11,0,0,0,12,23c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
      </div>

      <h3 class="text-xl">{{ $t("campaigns.wait") }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useCallback } from "../services/callback";
import { useGlobalVar } from "~/helpers/global-var";

// definePageMeta({
//   middleware: "navigate",
// });

const { siteName } = useGlobalVar();
const route = useRoute();
const { visitorGatewayCallback } = useCallback();
const { razorpay_payment_link_id } = route.query;

visitorGatewayCallback(razorpay_payment_link_id);

siteName("campaigns.page_title_payment_confirmation");
</script>
