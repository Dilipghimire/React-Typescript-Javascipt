import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

export type ProductData = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: { count: number; rate: number };
};

export const useProductData = () => {
  return useQuery<ProductData[], Error>(["PoductData"], async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  });
};

export const useGetProduct = (id: number) => {
  return useQuery<ProductData, Error>(["PoductData", id], async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  });
};
