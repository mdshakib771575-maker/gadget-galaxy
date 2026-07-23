"use client";

import { Button } from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { addOrder } from "@/lib/api/products/action";

interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
}


interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({product}: ProductActionsProps) {
  const router = useRouter();

  const handleBuyNow = async () => {
    const session = await authClient.getSession();

    if (!session.data?.user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    const orderData = {
      productId: product._id,
      productName: product.name,
      productImage: product.image,
      productPrice: product.price,

      userName: session.data.user.name,
      userEmail: session.data.user.email,

      quantity: 1,
      totalPrice: product.price,
    };

    const result = await addOrder(orderData);

    if (result.insertedId) {
      toast.success("Order placed successfully");
    }
  };

  const handleWishlist = () => {
    toast.success("Added to wishlist");
  };

  return (
    <div className="flex gap-4 mt-10">
      <Button
        className="bg-gradient-to-r from-blue-500 to-green-500"
        size="lg"
        onPress={handleBuyNow}
      >
        Buy Now
      </Button>

      <Button
        className="bg-pink-500"
        size="lg"
        onPress={handleWishlist}
      >
        Add Wishlist
      </Button>
    </div>
  );
}