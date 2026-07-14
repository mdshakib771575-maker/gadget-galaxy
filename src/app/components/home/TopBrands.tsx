"use client";

import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    id: 1,
    name: "Apple",
    logo: "/images/brands/apple.png",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "/images/brands/samsung.png",
  },
  {
    id: 3,
    name: "ASUS",
    logo: "/images/brands/asus.png",
  },
  {
    id: 4,
    name: "Dell",
    logo: "/images/brands/dell.png",
  },
  {
    id: 5,
    name: "HP",
    logo: "/images/brands/hp.png",
  },
  {
    id: 6,
    name: "Lenovo",
    logo: "/images/brands/lenovo.png",
  },
  {
    id: 7,
    name: "Sony",
    logo: "/images/brands/sony.png",
  },
  {
    id: 8,
    name: "Xiaomi",
    logo: "/images/brands/xiaomi.png",
  },
];

export default function TopBrands() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Trusted Brands
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Shop By Top Brands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            We partner with the world leading technology brands to deliver
            premium quality gadgets and accessories.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href="/products"
              className="group"
            >
              <div className="flex h-44 flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-950 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,.15)]">

                <div className="relative h-16 w-16">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {brand.name}
                </h3>

                <span className="mt-2 text-sm text-slate-400">
                  View Products →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}