"use server"
import {serverMutation } from "../server";

interface ProductData {
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
}
interface OrderData {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;

  userName: string;
  userEmail: string;

  quantity: number;
  totalPrice: number;
}
export const addProduct = async (data:ProductData)=>{
    const resData = await serverMutation("/api/add-product","POST",data);
    
    return resData; 
};



export const deleteProduct = async (id: string) => {
  const data = await serverMutation(
`/api/products/${id}`,
    "DELETE"
  );

  return data;
};


export const updateProduct = async (id: string,data: ProductData) => {
  const resData = await serverMutation(`/api/products-update/${id}`,"PATCH",data);

  return resData;

};

export const deleteUser = async (id: string) => {
  return await serverMutation(`/api/users/${id}`, "DELETE");
};


export const addOrder = async (data:OrderData)=>{
  
    const resData = await serverMutation("/api/orders","POST",data);
    
    return resData; 
};