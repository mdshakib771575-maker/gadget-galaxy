"use client"
import { ProductEditModal } from '@/app/components/products/ProducEditModal';
import DashboardHeading from '@/app/components/shared/DashboardHeading';
import { deleteProduct } from '@/lib/api/products/action';
import { getProducts } from '@/lib/api/products/data';
import { AlertDialog, Button, Table } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
export interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  createdAt?: Date;
}
const columns = [
  { id: "product", name: "Product" },
  { id: "category", name: "Category" },
  { id: "price", name: "Price" },
  { id: "actions", name: "Actions" },
];

const ManageProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const result = await deleteProduct(id);

    if (result.deletedCount > 0) {
      toast.success("Product Deleted Successfully!");

      setProducts((prev) =>
        prev.filter((product) => product._id !== id)
      );
    }
  };

  // console.log(products)

  return (
    <div>
      <DashboardHeading title={"Manage All Books"} description={"   Manage all books across the platform."}></DashboardHeading>
      <Table>
        <Table.ScrollContainer className="overflow-x-auto">
          <Table.Content
            aria-label="Manage Products Table"
            className="min-w-[700px]"
          >
            <Table.Header>
              {columns.map((column) => (
                <Table.Column
                  key={column.id}
                  id={column.id}
                  isRowHeader={column.id === "product"}
                >
                  {column.name}
                </Table.Column>
              ))}
            </Table.Header>

            <Table.Body>
              <Table.Collection items={products}>
                {(product: Product) => (
                  <Table.Row>
                    <Table.Cell>
                      <div>
                        <h3 className="font-semibold">
                          {product.name}
                        </h3>

                        <p className="text-sm text-default-500">
                          {product.brand}
                        </p>
                      </div>
                    </Table.Cell>

                    <Table.Cell>{product.category}</Table.Cell>

                    <Table.Cell>${product.price}</Table.Cell>

                    <Table.Cell>
                      <div className="flex gap-2">
                        {/* edit btn */}
                        <ProductEditModal
                          product={product}
                          setProducts={setProducts}
                        />
                        {/* delete btn */}
                        <AlertDialog>
                          <Button className={"text-red-500 rounded-full"} variant='outline'><MdDelete /></Button>
                          <AlertDialog.Backdrop>
                            <AlertDialog.Container>
                              <AlertDialog.Dialog className="sm:max-w-[400px]">
                                <AlertDialog.CloseTrigger />
                                <AlertDialog.Header>
                                  <AlertDialog.Icon status="danger" />
                                  <AlertDialog.Heading>Delete {product.name} permanently?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  <p>
                                    This will permanently delete <strong>{product.name}</strong> and all of its
                                    data. This action cannot be undone.
                                  </p>
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Cancel
                                  </Button>
                                  <Button slot="close" variant="danger"
                                    onPress={() => handleDelete(product._id)}
                                  >
                                    Delete
                                  </Button>
                                </AlertDialog.Footer>
                              </AlertDialog.Dialog>
                            </AlertDialog.Container>
                          </AlertDialog.Backdrop>
                        </AlertDialog>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Collection>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ManageProductsPage;