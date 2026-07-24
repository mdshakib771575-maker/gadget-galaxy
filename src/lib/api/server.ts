"use server"
import { baseUrl } from "./baseUrl";

import { getTokenServer } from "./getTokenServer";

type HttpMethod = "POST" | "PATCH" | "PUT" | "DELETE";

export const serverMutation = async (path: string,method: HttpMethod,data?: unknown
) => {
  const token = await getTokenServer()
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

    export const serverFetch = async (path:string)=>{
        const res = await fetch(`${baseUrl}${path}`)
        return res.json();
    }