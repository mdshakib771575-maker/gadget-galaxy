"use"
import { serverFetch } from "@/lib/api/server";
import { Card, Chip, Button } from "@heroui/react";
import Image from "next/image";
import { Package, Tag } from "lucide-react";
import toast from "react-hot-toast";
import { addOrder } from "@/lib/api/products/action";
import { authClient } from "@/lib/auth-client";
import ProductActions from "@/app/components/products/ProductActionsBtn";
// import { useRouter } from "next/navigation";
const ProductDetailsPage = async ({params,}:{params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const product = await serverFetch(`/products/${id}`);


//   const handleBuyNow = async () => {
//     const session = await authClient.getSession();

//     if (!session.data?.user) {
//       toast.error("Please login first");
//     //   router.push("/login");
//       return;
//     }

//     const orderData = {
//       productId: product._id,
//       productName: product.name,
//       productImage: product.image,
//       productPrice: product.price,

//       userName: session.data.user.name,
//       userEmail: session.data.user.email,

//       quantity: 1,
//       totalPrice: product.price,
//     };

//     const result = await addOrder(orderData);

//     if (result.insertedId) {
//       toast.success("Order placed successfully");
//     //   router.push("/dashboard/my-orders");
//     }
//   };

  return (
    <div className="py-10">
      <Card className="max-w-6xl mx-auto shadow-xl  bg-black">
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Image */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">

              <Chip
               
                className="w-fit mb-3"
              >
                {product.category}
              </Chip>

              <h1 className="text-4xl font-bold">
                {product.name}
              </h1>

              <p className="mt-2 text-lg text-default-500">
                Brand:{" "}
                <span className="font-semibold">
                  {product.brand}
                </span>
              </p>

              <p className="mt-6 text-default-600 leading-8">
                {product.description}
              </p>

              <div className="space-y-4 mt-8">

                <div className="flex items-center gap-3">
                  <Tag size={18} />
                  <span className="font-semibold">
                    Price:
                  </span>

                  <span className="text-success font-bold text-2xl">
                    ${product.price}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Package size={18} />
                  <span className="font-semibold">
                    Stock:
                  </span>

                  <span>
                    {product.stock}
                  </span>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10">

                {/* <Button
                  onPress={handleBuyNow}
                  className={"bg-gradient-to-r from-blue-500 to-green-500"}
                  size="lg"
                >
                  Buy Now
                </Button>

                <Button
                  size="lg"
                  className={"bg-pink-500"}
                >
                  Add WishList
                </Button> */}
                <ProductActions product={product}></ProductActions>

              </div>

            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;