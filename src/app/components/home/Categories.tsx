"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Smartphones",
    image: "/images/categories/phone.png",
    products: "120+ Products",
  },
  {
    id: 2,
    title: "Laptops",
    image: "/images/categories/laptop.png",
    products: "80+ Products",
  },
  {
    id: 3,
    title: "Watches",
    image: "/images/categories/camera.avif",
    products: "60+ Products",
  },
  {
    id: 4,
    title: "Accessories",
    image: "/images/categories/headphone.png",
    products: "150+ Products",
  },
  {
    id: 5,
    title: "Gaming",
    image: "/images/categories/gaming.png",
    products: "45+ Products",
  },
  {
    id: 6,
    title: "Tablets",
    image: "/images/categories/tablet.png",
    products: "40+ Products",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-green-400 font-semibold uppercase tracking-widest">
            Shop by Category
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Explore Our Categories
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Browse premium gadgets from the world most trusted brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.id}
              className="group"
            >
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 hover:border-green-500 transition-all duration-300 hover:-translate-y-2">

                <div className="flex justify-center">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={90}
                    height={90}
                    className="transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-6 text-center text-lg font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-center text-sm text-slate-400">
                  {category.products}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}