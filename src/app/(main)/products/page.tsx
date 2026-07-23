import FilterPanel from "@/app/components/FilterPanal";
import ProductCard from "@/app/components/products/ProductCard";
// import ProductCard from "@/components/cards/ProductCard";
// import FilterPanel from "@/components/products/FilterPanel";
import { serverFetch } from "@/lib/api/server";
import { Pagination } from "@heroui/react";
import Link from "next/link";

export interface Product {
    _id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    stock: number;
    image: string;
    description: string;
    createdAt: string;
}

const ProductsPage = async ({
    searchParams,
}: {
    searchParams: Promise<{
        page?: string;
        search?: string;
        category?: string;
        brand?: string;
    }>;
}) => {
    const {
        page = "1",
        search = "",
        category = "",
        brand = "",
    } = await searchParams;

    const productsData = await serverFetch(
        `/products?page=${page}&search=${search}&category=${category}&brand=${brand}`
    );

    const currentPage = productsData.page;
    const totalPages = productsData.totalPage;

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            {/* Filter Panel */}
            <FilterPanel></FilterPanel>

            {/* Products */}
            <div className="w-11/12 mx-auto mb-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
                {productsData.data?.map((product: Product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="my-10 text-white">
                <Pagination className="justify-center text-white">
                    <Pagination.Content>

                        {/* Previous Button */}
                        <Pagination.Item>
                            <Pagination.Previous
                                isDisabled={currentPage === 1}
                            >
                                <Link
                                    href={`/products?page=${currentPage - 1
                                        }&search=${search}&category=${category}&brand=${brand}`}
                                    className="flex gap-2 text-white"
                                >
                                    <Pagination.PreviousIcon />
                                    Prev
                                </Link>
                            </Pagination.Previous>
                        </Pagination.Item>

                        {/* Page Numbers */}
                        {pages.map((p) => (
                            <Pagination.Item key={p}>
                                <Link
                                    href={`/products?page=${p}&search=${search}&category=${category}&brand=${brand}`}
                                    
                                >
                                    <Pagination.Link
                                        isActive={p === currentPage}
                                        className="text-blue-500"
                                    >
                                        {p}
                                    </Pagination.Link>
                                </Link>
                            </Pagination.Item>
                        ))}

                        {/* Next Button */}
                        <Pagination.Item>
                            <Pagination.Next
                                isDisabled={
                                    currentPage === totalPages
                                }
                            >
                                <Link
                                    href={`/products?page=${currentPage + 1
                                        }&search=${search}&category=${category}&brand=${brand}`}
                                    className="flex gap-2 text-white"
                                >
                                    Next
                                    <Pagination.NextIcon />
                                </Link>
                            </Pagination.Next>
                        </Pagination.Item>
                    </Pagination.Content>
                </Pagination>
            </div>
        </div>
    );
};

export default ProductsPage;

export const dynamic = "force-dynamic";