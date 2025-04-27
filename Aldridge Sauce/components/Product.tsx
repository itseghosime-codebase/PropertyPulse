"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductImage from "@/assets/product.webp";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { LuLoaderCircle } from "react-icons/lu";
import { sellingPrice, useCart } from "@/context/CartContext";
import { BlurFade } from "./magicui/blur-fade";

export default function Product() {
  // Router
  const router = useRouter();

  // Fetch unit price, quantity and return new total price
  const { setAmount, quantity, increaseQuantity, decreaseQuantity } = useCart();

  // Quantity Price multiplier = Totalprice
  const totalPrice = sellingPrice * quantity;

  // Loading State
  const [loading, setLoading] = useState<boolean>(false);

  // Reset Values
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, []);

  // Checkout Function
  function checkoutUser() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAmount(totalPrice);
      sessionStorage.setItem("checkoutAccess", "true");
      router.push("/shop/checkout");
    }, 2000);
  }

  return (
    <div>
      <div className="min-h-screen grid md:grid-cols-2 items-center pt-24 pb-14 px-4 md:px-0 gap-10 xl:gap-16">
        <section className="xl:h-[800px]">
          <BlurFade direction="right" inView>
            <Image
              src={ProductImage}
              alt="Image of Aldridge barbecue sauce bottle"
              sizes="100%"
              priority
              className="h-full w-full object-left object-contain"
            />
          </BlurFade>
        </section>
        <section className="lg:pr-16 md:pr-6">
          <div className="space-y-4 xl:space-y-6">
            <BlurFade direction="up" delay={0.2} inView>
              <h2 className="text-white">Aldridge barbecue sauce</h2>
            </BlurFade>

            <BlurFade direction="up" delay={0.4} inView>
              <p className="text-base xl:text-3xl max-w-2xl">
                Crafted with bold ingredients and backyard love,
                <br className="2xl:block hidden" />
                Aldridge Sauce is your go-to for ribs, wings,
                <br className="2xl:block hidden" />
                burgers, and everything in between.
              </p>
            </BlurFade>
          </div>
          <BlurFade direction="up" delay={0.6} inView>
            <h6 className="my-8 xl:my-12 text-[#A8D6F8] xl:text-5xl lg:text-4xl text-3xl font-mono">
              ${totalPrice.toFixed(2)}
            </h6>
          </BlurFade>

          <div className="flex items-center justify-between gap-5 lg:gap-8 mb-6 lg:mb-12">
            <BlurFade direction="up" delay={0.7} inView>
              <button
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className={`w-16 lg:w-20 btn-fill ${
                  quantity <= 1 ? "opacity-70" : "opacity-100"
                } shop-btn-size`}
              >
                <FaMinus className="text-2xl" />
              </button>
            </BlurFade>

            <BlurFade direction="up" className="grow" delay={0.8} inView>
              <div className="bg-white/5 shop-btn-size">
                <h5 className="text-4xl font-normal text-center">{quantity}</h5>
              </div>
            </BlurFade>

            <BlurFade direction="up" delay={0.9} inView>
              <button
                onClick={increaseQuantity}
                className="w-16 lg:w-20 shop-btn-size btn-fill"
              >
                <FaPlus className="text-2xl" />
              </button>
            </BlurFade>
          </div>
          <BlurFade direction="up" delay={0.8} inView>
            <Button
              onClick={checkoutUser}
              className="h-fit p-4 btn-fill w-full lg:p-5 "
            >
              {loading ? (
                <>
                  <LuLoaderCircle className="animate-spin scale-125" />
                  <span className="xl:text-2xl text-xl font-semibold">
                    Checking Out
                  </span>
                </>
              ) : (
                <span className="xl:text-2xl text-xl font-semibold">
                  Checkout
                </span>
              )}
            </Button>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
