"use client"
import Link from "next/link";
import { Button } from "@heroui/react";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">

        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center">
            <SearchX size={50} className="text-secondary" />
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-secondary">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-default-500 mt-3">
          Sorry! The page you are looking for doesnot exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8">
            <Link href={"/"}>
          <Button
           
          >
            Go Home
          </Button>
          </Link>

        
        </div>

      </div>
    </div>
  );
}