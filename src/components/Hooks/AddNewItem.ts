import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

type AddToCartReq = {
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
};

type AddToCartRes = {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation<AddToCartRes, Error, AddToCartReq>(
    async (req: AddToCartReq) => {
      const { data } = await axios.post(`https://fakestoreapi.com/carts`, req);
      return data;
    },
    {
      onSuccess: (data: AddToCartRes) => {
        queryClient.setQueryData<AddToCartRes>("CartData", data);
      },
    }
  );
};
