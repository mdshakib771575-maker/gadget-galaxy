"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaUser, FaSignOutAlt, FaThLarge, FaBars, FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import { authClient, useSession } from "@/lib/auth-client";

// import ThemeSwitch2 from "./ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();

  // পরে Authentication করলে এগুলো ব্যবহার করবে
  // const session = true;
  const { data: session } = useSession()
  // console.log(session)

  const role = (session?.user as { role?: string })?.role;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
   
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/65 backdrop-blur-md py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="sm:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? (
                <FaTimes className="text-2xl text-white" />
              ) : (
                <FaBars className="text-2xl text-white" />
              )}
            </button>
          </div>
          {/* Logo */}
          <Logo />


          {/* Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${pathname === "/"
                ? "text-green-400 font-semibold"
                : "text-slate-300 hover:text-white"
                }`}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`text-sm font-medium transition-colors ${pathname.startsWith("/products")
                ? "text-green-500 font-semibold"
                : "text-slate-300 hover:text-white"
                }`}
            >
              Products
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${pathname === "/about"
                ? "text-green-500 font-semibold"
                : "text-slate-300 hover:text-white"
                }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${pathname === "/contact"
                ? "text-green-500 font-semibold"
                : "text-slate-300 hover:text-white"
                }`}
            >
              Contact
            </Link>

          
          
          {session && session?.user && (
            <Link
              href={`/dashboard/${role}`}
              className={`text-sm font-medium transition-colors ${pathname.startsWith("/dashboard") ? "text-pink-500 font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              Dashboard
            </Link>
          )}
          </div>

          


          {/* Right Side */}
          <div className="flex items-center gap-4">
            {!session ? (
              <div className="flex items-center gap-3">
                {/* <ThemeSwitch2 /> */}

                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-xs font-semibold text-slate-300   hover:text-white hover:bg-white/5 transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                {/* <ThemeSwitch2 /> */}

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={session?.user?.image || "/avatar.png"}
                      alt={session?.user?.name || "User"}
                      width={36}
                      height={36}
                      unoptimized
                      className="rounded-full border border-green-500"
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-black/10  py-2">
                     
                      
                      
                    <Link
                      href={`/dashboard/${role}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm  hover:bg-black hover:text-white cursor-pointer"
                    > <FaThLarge></FaThLarge>
                    Dashboard
                    </Link>

                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                        <FaUser />
                        Profile
                      </Link>

                      <button onClick={handleLogout} className="flex w-full items-center gap-3 px-4 py-2 text-left text-red-400 hover:bg-red-500/10">
                        <FaSignOutAlt />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="sm:hidden bg-slate-900 border-t  border-white/10 text-white">
          <div className="flex flex-col p-5 py-5 space-y-3 ">

            <Link href="/" className="hover:bg-green-500 " onClick={() => setMobileMenu(false)}>
              Home
            </Link>

            <Link href="/products" className="hover:bg-green-500 " onClick={() => setMobileMenu(false)}>
              Products
            </Link>

            <Link href="/about" className="hover:bg-green-500 " onClick={() => setMobileMenu(false)}>
              About
            </Link>

            <Link href="/contact" className="hover:bg-green-500 " onClick={() => setMobileMenu(false)}>
              Contact
            </Link>



            {session && (
              <>
                <Link href="/dashboard">Dashboard</Link>

              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}