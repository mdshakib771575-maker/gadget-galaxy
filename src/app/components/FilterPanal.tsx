"use client";

import { useState } from "react";
import { Card, Input, Button, Label, } from "@heroui/react";
import { FaHistory } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CATEGORIES = [
      
  "Smartphone",
  "Laptop",
  "Gaming Laptop",
  "Smart Watch",
  "Headphone",
  "Earbuds",
  "Gaming Console",
  "Camera",
  "Drone",
  "Mouse",
  "Keyboard",
  "Accessories",
  "Router",
  "Storage",
  "Speaker",
  "Monitor",
];

const brands = [
   
  "Apple",
  "Samsung",
  "Sony",
  "Dell",
  "ASUS",
  "Logitech",
  "Razer",
  "Microsoft",
  "Canon",
  "DJI",
  "Anker",
  "TP-Link",
  "JBL",
  "LG",
];

export default function FilterPanel() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
    const router = useRouter();

    // console.log(search, category, location);

    const handleApplyFilters = () => {
        const params = new URLSearchParams();

        params.set("page", "1");

        if (search) {
            params.set("search", search);
        }

        if (category) {
            params.set("category", category);
        }

       if (brand) {
    params.set("brand", brand);
  }

        router.push(`/products?${params.toString()}`);
    };
  


    return (
        <Card className="relative overflow-hidden border backdrop-blur-2xl p-7 mt-5 shadow rounded-3xl w-11/12 mx-auto mb-10 bg-black" >
            {/* Decorative gradient glow behind the panel */}
            <div className="absolute top-0 right-0 w-64 h-60 bg-gradient-to-br from-pink-500/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-64  h-64  to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="gap-6 grid grid-cols-1 md:grid-cols-4 items-end ">
                {/* Search Input */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="search-title" className="text-xs font-bold uppercase tracking-wider text-slate-400 ">Search Title</Label>
                    <Input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        id="search-title"
                        placeholder="Search keyword..."
                        // startContent={<FaSearch className="text-pink-500 text-sm mr-1" />}
                       
                        className="w-full rounded-xl p-3 focus:outline-none focus:border-pink-500 hover:border-white/20 border text-sm cursor-pointer h-12 flex items-center transition-all duration-300 "
                    />
                </div>

                {/* Category Selector */}
                <div className="flex flex-col gap-2 ">
                    <Label htmlFor="filter-category" className="text-xs font-bold uppercase tracking-wider text-slate-400">Category</Label>
                    <div className="relative group">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full h-12 border rounded-xl px-3  text-sm outline-none focus:border-pink-500"
                        >
                            <option value="">All Categories</option>

                            {CATEGORIES.map((cat) => (
                                <option
                                    key={cat}
                                    value={cat}
                                    className="bg-slate-900 text-white"
                                >
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Location Selector */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="filter-location" className="text-xs font-bold uppercase tracking-wider text-slate-400">Brand</Label>
                    <div className="relative group">
                        <div className="relative w-full">
                            <select
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="w-full h-12  border rounded-xl px-3 pr-10  text-sm appearance-none outline-none focus:border-pink-500"
                            >
                                <option value="">All Brand</option>

                                {brands.map((brand) => (
                                    <option
                                        key={brand}
                                        value={brand}
                                        className="bg-slate-900 text-white"
                                    >
                                        {brand}
                                    </option>
                                ))}
                            </select>

                            <svg
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 w-full">
                    <Button
                        onClick={handleApplyFilters}
                        className="flex-grow bg-gradient-to-r from-green-500  to-cyan-500 text-white font-bold h-12 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                    // startContent={<FaSlidersH size={13} />}
                    >
                        Apply Filters
                    </Button>
                
                </div>
            </div>
        </Card>
    );
}