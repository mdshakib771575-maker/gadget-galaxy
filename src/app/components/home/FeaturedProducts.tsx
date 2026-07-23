
import ProductCard from "../products/ProductCard";
import { Product } from "@/types/product";
import { serverFetch } from "@/lib/api/server";
import Link from "next/link";

export default async function FeaturedProducts() {
  const featuredProducts: Product[] = await serverFetch("/products?limit=8");
  console.log(featuredProducts)

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Featured Collection
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Featured Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Discover our most popular gadgets with premium quality,
            latest technology, and unbeatable prices.
          </p>
        </div>

        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.data.map((product:Product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-8 py-4 font-semibold text-white transition hover:scale-105 inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}