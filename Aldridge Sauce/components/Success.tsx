"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "lucide-react"; // or any icon library you use
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const email = searchParams.get("email");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      <section className="p-8 max-w-xl w-full text-center animate-fadeIn">
        <div className="flex justify-center mb-6">
          <CheckCircleIcon className="text-green-500 w-16 h-16 animate-bounce" />
        </div>
        <h2>Payment Successful! 🎉</h2>
        

        <div className="text-center space-y-4 mb-6">
          <div>
            <p className="text-white text-lg">
              A receipt has been sent to {email ? email : "your email"}{" "}
              {amount
                ? `for the
              purchase worth $${amount} `
                : ""}
            </p>
          </div>
        </div>

        <Link href="/shop" className="btn btn-fill">
          Continue shopping
        </Link>
      </section>
    </div>
  );
}
