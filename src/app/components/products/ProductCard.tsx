import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const {
    _id,
    name,
    brand,
    category,
    price,
    stock,
    image,
  } = product;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-green-500">

      {/* Product Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">

        {/* Brand */}
        <p className="text-sm font-medium text-green-400">
          {brand}
        </p>

        {/* Product Name */}
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {name}
        </h3>

        {/* Category & Stock */}
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>{category}</span>
          <span>
            Stock: {stock}
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-white">
          ${price}
        </p>

        {/* Button */}
        <Link
          href={`/products/${_id}`}
          className="block rounded-xl bg-gradient-to-r from-blue-500 to-green-500 py-3 text-center font-semibold text-white transition hover:opacity-90"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}