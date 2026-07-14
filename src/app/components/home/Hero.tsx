"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    badge: "🚀 New Arrival 2026",
    title: "Upgrade Your Digital Lifestyle",
    description:
      "Discover the latest smartphones with powerful performance and stunning design.",
    image: "/images/pp.avif",
    bg: "from-slate-950 via-slate-900 to-slate-950",
    button: "Shop Smartphones",
  },
  {
    id: 2,
    badge: "💻 Gaming Collection",
    title: "Power Meets Performance",
    description:
      "Explore premium gaming laptops and ultrabooks from ASUS, MSI and Dell.",
    image: "/images/mak.avif",
    bg: "from-slate-950 via-blue-950 to-slate-950",
    button: "Explore Laptops",
  },
  {
    id: 3,
    badge: "⌚ Smart Gadgets",
    title: "Smarter Tech Better Life",
    description:
      "Shop smartwatches, headphones and accessories from top global brands.",
    image: "/images/gd-22.avif",
    bg: "from-slate-950 via-purple-950 to-slate-950",
    button: "Browse Gadgets",
  },
];

export default function Hero() {
  return (
    <section className="relative h-[70%] overflow-hidden">
      <Swiper

        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative p-5 h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(
                   rgba(0,0,0,.50),
                   rgba(0,0,0,.50)
                  ), url(${slide.image})`,
              }}
            >
              <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
              <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

             <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6">

                {/* Left Content */}
                <div className="max-w-3xl text-center mt-4">
                  <span className="inline-flex rounded-full border border-blue-500/10 bg-blue-500/10 px-4 py-1 text-sm font-medium text-green-400">
                    {slide.badge}
                  </span>

                  <h1 className=" mt-2 text-4xl font-extrabold leading-tight text-white md:text-4xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center md:gap-4 lg:justify-center lg:gap-5">
                    <Link
                      href="/products"
                      className="rounded-xl bg-gradient-to-r from-blue-500 to-green-600 md:px-2 lg:px-10  px-7 py-3 text-center font-semibold text-white transition duration-300 hover:scale-105"
                    >
                      {slide.button}
                    </Link>

                    <Link
                      href="/products"
                      className="rounded-xl border border-white/20 px-7 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      Explore Products
                    </Link>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-6 mb-2">
                    <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
                      <h3 className="text-2xl font-bold text-white">
                        10K+
                      </h3>
                      <p className="text-green-400 font-bold">
                        Happy Customers
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
                      <h3 className="text-2xl font-bold text-white">
                        500+
                      </h3>
                      <p className="text-green-400 font-bold">
                        Products
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
                      <h3 className="text-2xl font-bold text-white">
                        50+
                      </h3>
                      <p className="text-green-400 font-bold">
                        Brands
                      </p>
                    </div>
                   
                  </div>
                </div>

                {/* Right Image */}
          
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-6 left-1/10 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center text-slate-300">
                  <span className="text-xs tracking-widest uppercase">
                    Scroll
                  </span>
                  <span className="text-2xl">↓</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>


    // <section className="relative md:h-[70vh] lg:h-[70%] overflow-hidden">
    //     <Swiper

    //       modules={[Autoplay, Navigation, Pagination]}
    //       autoplay={{
    //         delay: 4500,
    //         disableOnInteraction: false,
    //       }}
    //       navigation
    //       pagination={{
    //         clickable: true,
    //       }}
    //       loop
    //       className="h-full"
    //     >
    //       {slides.map((slide) => (
    //         <SwiperSlide key={slide.id}>
    //           <div
    //             className={`relative h-full overflow-hidden bg-gradient-to-r ${slide.bg}`}
    //           >
    //             {/* Glow */}
    //             <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
    //             <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

    //             <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col-reverse items-center justify-between px-6 py-10 md:flex-row md:gap-2 lg:flex-row">
    //                               {/* Left Content */}
    //               <div className="mt-4 max-w-xl text-center lg:text-left pl-5">
    //                 <span className="inline-flex rounded-full border border-blue-500/10 bg-pink-500/10 px-4 py-1 text-sm font-medium text-green-400">
    //                   {slide.badge}
    //                 </span>

    //                 <h1 className=" mt-5 text-4xl font-extrabold leading-tight text-white md:text-4xl lg:text-6xl">
    //                   {slide.title}
    //                 </h1>

    //                 <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
    //                   {slide.description}
    //                 </p>

    //                 <div className="mt-4   flex flex-col gap-4 sm:flex-row sm:justify-center md:gap-4 lg:justify-start">
    //                   <Link
    //                     href="/products"
    //                     className="rounded-xl bg-gradient-to-r from-blue-500 to-green-600 md:px-2  px-7 py-3 text-center font-semibold text-white transition duration-300 hover:scale-105"
    //                   >
    //                     {slide.button}
    //                   </Link>

    //                   <Link
    //                     href="/products"
    //                     className="rounded-xl border border-white/20 px-7 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black"
    //                   >
    //                     Explore Products
    //                   </Link>
    //                 </div>

    //                 <div className="mt-5 mb-2 flex flex-wrap justify-center gap-6 lg:justify-start">
    //                   <div>
    //                     <h3 className="text-2xl font-bold text-white">
    //                       10K+
    //                     </h3>
    //                     <p className="text-sm text-slate-400">
    //                       Happy Customers
    //                     </p>
    //                   </div>

    //                   <div>
    //                     <h3 className="text-2xl font-bold text-white">
    //                       500+
    //                     </h3>
    //                     <p className="text-sm text-slate-400">
    //                       Products
    //                     </p>
    //                   </div>

    //                   <div>
    //                     <h3 className="text-2xl font-bold text-white">
    //                       50+
    //                     </h3>
    //                     <p className="text-sm text-slate-400">
    //                       Brands
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>

    //               {/* Right Image */}
    //               <div className="relative flex items-center justify-center">
    //                 <div className="absolute h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />

    //                 <Image
    //                   src={slide.image}
    //                   alt={slide.title}
    //                   width={520}
    //                   height={520}
    //                   priority
    //                   // className="relative z-10 object-contain drop-shadow-[0_20px_40px_rgba(236,72,153,.35)] animate-pulse"
    //                   className="rounded-2xl"
    //                 />

    //                 <div className="absolute right-1 top-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
    //                   <p className="text-sm text-yellow-400">
    //                     ⭐⭐⭐⭐⭐
    //                   </p>
    //                   <p className="text-xs text-white">
    //                     Trusted by 10K+ Users
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Scroll Indicator */}
    //             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
    //               <div className="flex flex-col items-center text-slate-300">
    //                 <span className="text-xs tracking-widest uppercase">
    //                   Scroll
    //                 </span>
    //                 <span className="text-2xl">↓</span>
    //               </div>
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </section>
  );
}