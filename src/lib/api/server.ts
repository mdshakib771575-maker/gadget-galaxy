import { baseUrl } from "./baseUrl";

type HttpMethod = "POST" | "PATCH" | "PUT" | "DELETE";

export const serverMutation = async (
  path: string,
  method: HttpMethod,
  data?: unknown
) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

    export const serverFetch = async (path:string)=>{
        const res = await fetch(`${baseUrl}${path}`)
        return res.json();
    }