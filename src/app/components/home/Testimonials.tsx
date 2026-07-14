"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Software Engineer",
    image: "/images/testimonials/user1.jpg",
    review:
      "Amazing shopping experience! The product quality exceeded my expectations and delivery was incredibly fast.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Graphic Designer",
    image: "/images/testimonials/user2.jpg",
    review:
      "Highly recommended! Great customer support, genuine products, and secure payment process.",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Content Creator",
    image: "/images/testimonials/user3.jpg",
    review:
      "I've purchased multiple gadgets from Gadget Galaxy and every experience has been fantastic.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Thousands of customers trust Gadget Galaxy for premium gadgets,
            fast delivery, and outstanding support.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-3xl h-80 mt-2 border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:border-green-500 hover:-translate-y-2">

                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="mb-4 text-yellow-400 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="leading-7 text-slate-300">
                  {item.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}