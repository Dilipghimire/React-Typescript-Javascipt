//https://fakestoreapi.com/carts

import { useQuery } from "react-query";
import axios from "axios";

export type CartData = {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
};

export const useCartItems = () => {
  return useQuery<CartData[], Error>(["CartData"], async () => {
    const { data } = await axios.get("https://fakestoreapi.com/carts");

    return data;
  });
};

