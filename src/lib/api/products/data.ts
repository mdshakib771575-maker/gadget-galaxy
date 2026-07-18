import { serverFetch } from "../server";

export const getProducts = async () => {
  const data = await serverFetch("/api/manage-products");

  return data;
};




export const getUsers = async () => {
  const res = await serverFetch("/api/users");

  return res;
};
