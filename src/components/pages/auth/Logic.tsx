"use client";
import { useForm, type SubmitHandler } from "react-hook-form";

import { loginRequest } from "./request";
import Cookies from "js-cookie";
import type { LoginTypes } from "./types";
import { toast } from "sonner";
import routes from "@/lib/routes";
export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginTypes>();
  const onSubmit: SubmitHandler<LoginTypes> = async (data) => {
    try {
      const response = await loginRequest(data);
      if (response) {
        Cookies.set(import.meta.env.VITE_TOKEN_NAME as string, response.token);
        window.location.href = routes?.Dashboard?.Home;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    isSubmitting,
    errors,
  };
};
