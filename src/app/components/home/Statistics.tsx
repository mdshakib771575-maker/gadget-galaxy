"use client";

import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers />,
    value: "15K+",
    title: "Happy Customers",
  },
  {
    id: 2,
    icon: <FaBoxOpen />,
    value: "500+",
    title: "Premium Products",
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    value: "25K+",
    title: "Orders Delivered",
  },
  {
    id: 4,
    icon: <FaStar />,
    value: "4.9",
    title: "Average Rating",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Our Achievements
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Trusted by Thousands of Customers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            We continue to deliver premium gadgets with excellent service and
            customer satisfaction.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,.15)]"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-3xl text-white group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}