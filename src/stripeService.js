import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Q8NwlCjBcXTIKooIxKfQFJVp37uc2RT2tsMcQ7ftx0L6FRwxvQSTgjbMewcmZdQRRU4sPoyqlDEzhi4KDmAYc7F00PwwhgFz5");

export const handleCheckout = async () => {
  const stripe = await stripePromise;

  try {
    const res = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const session = await res.json();
    const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (error) {
        console.error('Error relocate to Stripe Checkout:', error);
      }
  } catch (error) {
    console.log("Error payment", error);
  }
};
