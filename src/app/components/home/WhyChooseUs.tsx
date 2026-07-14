"use client";

import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description:
      "Enjoy fast and free delivery on eligible orders across the country.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Official Warranty",
    description:
      "All products come with genuine brand warranty for complete peace of mind.",
  },
  {
    id: 3,
    icon: <FaCreditCard />,
    title: "Secure Payment",
    description:
      "Pay safely with trusted payment methods and encrypted transactions.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our support team is available anytime to assist you with your orders.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Experience Shopping Like Never Before
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            We combine premium products, trusted brands, secure payments,
            and exceptional customer service to give you the best shopping
            experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,.15)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 text-3xl text-white transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}