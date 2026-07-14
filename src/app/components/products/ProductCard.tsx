import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    id: number;
    name: string;
    brand: string;
    price: number;
    rating: number;
    image: string;
}

export default function ProductCard({
    id,
    name,
    brand,
    price,
    rating,
    image,
}: ProductCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-green-500">
            {/* Image */}
            <div className="relative h-50 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">
                <p className="text-sm text-green-400">{brand}</p>

                <h3 className="line-clamp-2 text-lg font-semibold text-white">
                    {name}
                </h3>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">
                        ${price}
                    </span>

                    <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-sm text-yellow-400">
                        ⭐ {rating}
                    </span>
                </div>

                <Link
                    href={`/products/${id}`}
                    className="block rounded-xl bg-gradient-to-r from-blue-500 to-green-500 py-3 text-center font-semibold text-white transition hover:opacity-90"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}