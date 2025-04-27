"use client";
import Checkout from "@/components/Checkout";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import convertToSubcurrency from "@/lib/convertToSubCurrency";

// Importing Stripe
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/context/CartContext";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function page() {
  const { amount } = useCart();

  const appearance: Appearance = {
    theme: "night",
    variables: {
      colorPrimary: "#ffffffcf",
      colorBackground: "#151515",
      colorText: "#ffffff",
    },
    rules: {
      ".Label": {
        color: "#ffffffcf",
        fontSize: "18px",
        textTransform: "capitalize",
      },
      ".Input": {
        backgroundColor: "#ffffff0d",
        borderColor: "#393939",
      },
    },
  };

  // Deny user from jumping into this page
  const router = useRouter();

  useEffect(() => {
    const accessGranted = sessionStorage.getItem("checkoutAccess");
    if (accessGranted !== "true") {
      router.replace("/shop"); // redirect if accessed directly
    }
  }, []);

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
        appearance,
      }}
    >
      <Checkout />
    </Elements>
  );
}
