import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { Si9Gag } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-slate-950/80 pt-16 pb-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        {/* Logo */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-tr from-blue-500 to-green-500 p-2 text-white">
              <Si9Gag className="text-lg" />
            </div>

            <span className="bg-gradient-to-r from-white via-white-200 to-green-500 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
              Gadget Galaxy
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-slate-400">
            Discover the latest smartphones, laptops, smartwatches, gaming
            accessories and premium gadgets at the best prices.
          </p>

          <div className="flex gap-4 text-slate-400">
            <Link href="#" className="transition-colors hover:text-pink-500">
              <FaFacebook size={18} />
            </Link>

            <Link href="#" className="transition-colors hover:text-pink-500">
              <FaTwitter size={18} />
            </Link>

            <Link href="#" className="transition-colors hover:text-pink-500">
              <FaInstagram size={18} />
            </Link>

            <Link href="#" className="transition-colors hover:text-pink-500">
              <FaGithub size={18} />
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Categories
          </h3>

          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link
                href="/products?category=Smartphones"
                className="transition-colors hover:text-white"
              >
                Smartphones
              </Link>
            </li>

            <li>
              <Link
                href="/products?category=Laptops"
                className="transition-colors hover:text-white"
              >
                Laptops
              </Link>
            </li>

            <li>
              <Link
                href="/products?category=Headphones"
                className="transition-colors hover:text-white"
              >
                Headphones
              </Link>
            </li>

            <li>
              <Link
                href="/products?category=Accessories"
                className="transition-colors hover:text-white"
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Customer Service
          </h3>

          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="/support" className="transition-colors hover:text-white">
                Help Center
              </Link>
            </li>

            <li>
              <Link href="/shipping" className="transition-colors hover:text-white">
                Shipping Info
              </Link>
            </li>

            <li>
              <Link href="/returns" className="transition-colors hover:text-white">
                Returns & Refunds
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h3>

          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link href="/blog" className="transition-colors hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-6 pt-8 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Gadget Galaxy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}