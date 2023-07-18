import { useQuery } from "react-query";
import axios from "axios";

export type CategoryData = [string];

const useCategories = () => {
  return useQuery<CategoryData, Error>(["CategoryData"], async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    return data;
  });
};

export default useCategories;
