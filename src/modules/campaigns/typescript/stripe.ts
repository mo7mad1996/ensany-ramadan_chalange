import {
  loadStripe,
  type Stripe,
  type StripeElements,
  type StripeCardElement,
} from "@stripe/stripe-js";

const stripe = ref<Stripe | null>(null);
const elements = ref<StripeElements | null>(null);
const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const setupStripe = async (): Promise<void> => {
  stripe.value = await loadStripe(stripeKey);
  if (!stripe.value) {
    throw new Error("Stripe failed to load.");
  }

  elements.value = stripe.value.elements();

  const style = {
    base: {
      color: "#32325d",
      fontSize: "16px",
    },
  };

  // Create and mount the individual input fields
  const cardNumber = elements.value.create("cardNumber", { style });
  cardNumber.mount("#card-number-element");

  const cardExpiry = elements.value.create("cardExpiry", { style });
  cardExpiry.mount("#card-expiry-element");

  const cardCvc = elements.value.create("cardCvc", { style });
  cardCvc.mount("#card-cvc-element");
};

export default setupStripe;
