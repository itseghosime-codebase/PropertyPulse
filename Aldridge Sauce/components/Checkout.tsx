"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
  ExpressCheckoutElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubCurrency";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { amount } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount), email }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/success?amount=${amount}&email=${encodeURIComponent(email)}`,
        payment_method_data: {
          billing_details: {
            email: email,
          },
        },
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <form onSubmit={handleSubmit} className="p-2 rounded-md">
        {clientSecret && (
          <section className="grid gap-5">
            <div>
              <h3>Enter shipping details</h3>
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md border"
                required
              />
            </div>
            <AddressElement
              options={{
                mode: "shipping",
                allowedCountries: ["US"],
                fields: {
                  phone: "always",
                },
                validation: {
                  phone: {
                    required: "always",
                  },
                },
              }}
            />
            <div className="mt-5">
              <h3>Choose a payment method</h3>
            </div>
            <PaymentElement />
          </section>
        )}

        {errorMessage && <div>{errorMessage}</div>}

        <button
          disabled={!stripe || loading}
          className="btn-fill lg:text-xl sm:text-lg text-base rounded capitalize font-sans w-full p-4 mt-5 rounded-mde font-bold disabled:opacity-50 disabled:animate-pulse"
        >
          {!loading ? `Proceed to pay $${amount} with stripe` : "Processing..."}
        </button>

        {clientSecret && (
          <section className="mt-20 space-y-5">
            <h3>Express Checkout</h3>
            <ExpressCheckoutElement onConfirm={(e) => console.log(e)} />
          </section>
        )}
      </form>
    </div>
  );
};

export default Checkout;
