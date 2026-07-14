import ProductCard from "../products/ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 1599,
    rating: 4.9,
    image: "/images/products/lap.avif",
  },
  {
    id: 2,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    price: 1399,
    rating: 4.8,
    image: "/images/products/ear.avif",
  },
  {
    id: 3,
    name: "MacBook Pro M4",
    brand: "Apple",
    price: 2499,
    rating: 5.0,
    image: "/images/products/17.avif",
  },
  {
    id: 4,
    name: "ROG Zephyrus G16",
    brand: "ASUS",
    price: 2199,
    rating: 4.8,
    image: "/images/products/gadget.avif",
  },
  {
    id: 5,
    name: "Sony WH-1000XM6",
    brand: "Sony",
    price: 499,
    rating: 4.9,
    image: "/images/products/gd.avif",
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: 899,
    rating: 4.9,
    image: "/images/products/lap.avif",
  },
  {
    id: 7,
    name: "iPad Pro M4",
    brand: "Apple",
    price: 1299,
    rating: 4.8,
    image: "/images/products/ear.avif",
  },
  {
    id: 8,
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    price: 149,
    rating: 4.7,
    image: "/images/products/ear.avif",
  },
];

export default function FeaturedProducts() {
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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-8 py-4 font-semibold text-white transition hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}