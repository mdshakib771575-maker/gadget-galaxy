"use client";


import DashboardHeading from "@/app/components/shared/DashboardHeading";
import { uploadImage } from "@/utils/UploadImage";
import {
  Button,
  Card,
  CardHeader,
  Form,
  Input,

} from "@heroui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type ProductFormData = {
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  image: FileList;
  description: string;
};

const CATEGORIES = [
  "Smartphone",
  "Laptop",
  "Smart Watch",
  "Headphone",
  "Tablet",
  "Accessories",
];

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const onSubmit = async (data: ProductFormData) => {
    try {
      const imageFile = data.image[0];
      const imageUrl = await uploadImage(imageFile);

      const productData = {
        name: data.name,
        brand: data.brand,
        category: data.category,
        price: Number(data.price),
        stock: Number(data.stock),
        image: imageUrl,
        description: data.description,
        createdAt: new Date(),
      };

      console.log(productData);

      toast.success("Product Added Successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="">
      <DashboardHeading
        title="Add Product"
        description="Add a new product to your store."
      />

      <div className="mt-4 w-lg mx-auto text-left ">
        <Card className="rounded-2xl border border-white/5 shadow-2xl backdrop-blur-xl">
          <CardHeader className="flex flex-col gap-1 border-b border-white/5 p-6 pb-4">
            <h3 className="text-xl font-bold text-center">
              Add New Product
            </h3>

            <p className="text-xs text-slate-400 text-center">
              Fill out all the required product information.
            </p>
          </CardHeader>

          <div className="p-6">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-5"
            >
              {/* Name & Brand */}
              <div className=" w-full ">
                <div className="flex flex-col gap-2 mb-2">
                  <label>Product Name</label>

                  <Input
                    {...register("name", {
                      required: "Product name is required",
                    })}
                    placeholder="iPhone 16 Pro Max"
                    className={'border p-2 rounded-xl '}
                  />

                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label>Brand Name</label>

                  <Input
                    {...register("brand", {
                      required: "Brand name is required",
                    })}
                    placeholder="Apple"
                    className={'border p-2 rounded-xl'}
                  />

                  {errors.brand && (
                    <p className="text-sm text-red-500">
                      {errors.brand.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Category & Image */}
              <div className="w-full ">
                <div className="flex flex-col gap-1 mb-2">
                  <label>Category</label>

                  <select
                    {...register("category", {
                      required: "Category is required",
                    })}
                    className="rounded-xl border p-3"
                  >
                    <option value="">Select Category</option>

                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  {errors.category && (
                    <p className="text-sm text-red-500">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label>Product Image</label>

                  <Input
                    {...register("image", {
                      required: "Image is required",
                    })}
                    type="file"
                    accept="image/*"
                    className={'border p-2 rounded-xl'}
                  />

                  {errors.image && (
                    <p className="text-sm text-red-500">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Price & Stock */}
              <div className="grid w-full ">
                <div className="flex flex-col gap-2 mb-2">
                  <label>Price</label>

                  <Input
                    {...register("price", {
                      required: "Price is required",
                    })}
                    type="number"
                    placeholder="$1499"
                    className={'border p-2 rounded-xl'}
                  />

                  {errors.price && (
                    <p className="text-sm text-red-500">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label>Stock Quantity</label>

                  <Input
                    {...register("stock", {
                      required: "Stock quantity is required",
                    })}
                    type="number"
                    placeholder="25"
                    className={'border p-2 rounded-xl'}
                  />

                  {errors.stock && (
                    <p className="text-sm text-red-500">
                      {errors.stock.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="flex w-full flex-col gap-2">
                <label>Description</label>

                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Write product details here..."
                  className={'border h-30 p-2 rounded-xl'}   
                
                />

                {errors.description && (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <Button
                type="submit"
               
                className="h-12 w-full bg-gradient-to-r from-blue-500 to-green-500 font-semibold text-white rounded-lg"
              >
                Add Product
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddProductPage;