"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Table, Chip } from "@heroui/react";
import { serverFetch } from "@/lib/api/server";

interface Order {
  _id: string;
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity: number;
  totalPrice: number;
  status: string;
  createdAt: string;
}

const columns = [
  { id: "product", name: "PRODUCT" },
  { id: "price", name: "PRICE" },
  { id: "quantity", name: "QUANTITY" },
  { id: "total", name: "TOTAL" },
  { id: "status", name: "STATUS" },
  { id: "date", name: "ORDER DATE" },
];

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    const loadOrders = async () => {
      if (!session?.user?.email) return;

      const data = await serverFetch(`/api/orders/${session?.user?.email}`)
       console.log(data)
   

      setOrders(data);
    };

    loadOrders();
  }, [session]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        My Orders
      </h1>

      <Table>
        <Table.ScrollContainer className="overflow-x-auto">
          <Table.Content
            aria-label="My Orders Table"
            className="min-w-[900px]"
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
              <Table.Collection items={orders}>
                {(order: Order) => (
                  <Table.Row key={order._id}>
                    <Table.Cell>
                      <div>
                        <h3 className="font-semibold">
                          {order.productName}
                        </h3>

                        <p className="text-sm text-default-500">
                          ID: {order.productId}
                        </p>
                      </div>
                    </Table.Cell>

                    <Table.Cell>
                      ${order.productPrice}
                    </Table.Cell>

                    <Table.Cell>
                      {order.quantity}
                    </Table.Cell>

                    <Table.Cell>
                      ${order.totalPrice}
                    </Table.Cell>

                    <Table.Cell>
                      <Chip
                        className={`
                          ${order.status === "Delivered"
                            ? "bg-green-500"
                            : order.status === "Processing"
                            ? "bg-purple-400" :   "bg-blue-400"}
                        `}
                      >
                        {order.status}
                      </Chip>
                    </Table.Cell>

                    <Table.Cell>
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
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
}