"use client";

import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-500 to-green-500 p-10 md:p-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-100">
            Stay Updated
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Get Exclusive Deals & Latest Tech News
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Subscribe to our newsletter and be the first to know about new
            arrivals, exclusive discounts, and special offers.
          </p>

          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-xl border border-white/20 bg-white px-5 text-black outline-none placeholder:text-slate-500 focus:border-green-300"
            />

            <button
              type="submit"
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-black px-8 font-semibold text-white transition hover:scale-105"
            >
              <FaPaperPlane />
              Subscribe
            </button>
          </form>

          <p className="mt-5 text-sm text-slate-200">
            🔒 We respect your privacy. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}