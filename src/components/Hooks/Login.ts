import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type LoginReq = {
  username: string;
  password: string;
};

type LoginRes = {
  token: string;
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<LoginRes, Error, LoginReq>(
    async (req: LoginReq) => {
      const { data } = await axios.post(
        `https://fakestoreapi.com/auth/login`,
        req
      );
      return data;
    },
    {
      onSuccess: () => {
        navigate("../");
      },
    }
  );
};
