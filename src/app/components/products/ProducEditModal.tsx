"use client";

;
import { updateProduct } from "@/lib/api/products/action";
import { getProducts } from "@/lib/api/products/data";
import { Product } from "@/types/product";
import { uploadImage } from "@/utils/UploadImage";
import { Button, Form, Input, Modal, Surface } from "@heroui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";

interface ProductEditModalProps {
    product: Product;
    setProducts: React.Dispatch<
        React.SetStateAction<Product[]>
    >;
}
interface ProductData {
    name: string;
    brand: string;
    category: string;
    price: number;
    stock: number;
    image: string;
    description: string;
}


interface ProductFormData {
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


export function ProductEditModal({ product, setProducts }: ProductEditModalProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormData>();

    const onSubmit = async (data: ProductFormData) => {
        try {
            let imageUrl = product.image;

            if (data.image?.length > 0) {
                const imageFile = data.image[0];

                const uploadedImage = await uploadImage(imageFile);

                if (!uploadedImage) {
                    throw new Error("Image upload failed!");
                }

                imageUrl = uploadedImage;
            }
            const productData: ProductData = {
                name: data.name,
                brand: data.brand,
                category: data.category,
                price: Number(data.price),
                stock: Number(data.stock),
                image: imageUrl,
                description: data.description,
            };

            const result = await updateProduct(
                product._id,
                productData
            );
         if (result.modifiedCount > 0) {
    toast.success("Product Updated Successfully!");

    const updatedProducts = await getProducts();

    setProducts(updatedProducts);

    // onClose();
}
        } catch (error) {
            toast.error("Something went wrong!");
            console.log(error);
        }
    };

    return (
        <Modal>
            <Button variant="secondary"><FaRegEdit /></Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>


                            <Modal.Heading className="font-bold text-green-600 text-center">Edit Product</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="w-full space-y-5"
                                >
                                    {/* Name & Brand */}
                                    <div className=" w-full ">
                                        <div className="flex flex-col gap-2 mb-2">
                                            <label>Product Name</label>

                                            <Input
                                                defaultValue={product.name}
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
                                                defaultValue={product.brand}
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
                                                defaultValue={product.category}
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

                                                type="file"
                                                accept="image/*"
                                                className={'border p-2 rounded-xl'}
                                            />

                                        </div>
                                    </div>

                                    {/* Price & Stock */}
                                    <div className="grid w-full ">
                                        <div className="flex flex-col gap-2 mb-2">
                                            <label>Price</label>

                                            <Input
                                                defaultValue={product.price}
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
                                                defaultValue={product.stock}
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
                                            defaultValue={product.description}
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
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"

                                            className=" bg-gradient-to-r from-blue-500 to-green-500 font-semibold text-white rounded-full hover:cursor-pointer"
                                        >
                                            Edit Product
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}