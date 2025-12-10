"use client";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

import Cookies from "js-cookie";
import type { OTPTypes } from "./types";
import { toast } from "sonner";
import routes from "@/lib/routes";
import { otpRequest } from "./request";
export const useOTP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    control,
  } = useForm<OTPTypes>();
  const onSubmit: SubmitHandler<OTPTypes> = async (data) => {
    try {
      console.log(data);
      const response = await otpRequest(data);
      if (response) {
        Cookies.set(
          import.meta.env.VITE_TOKEN_NAME as string,
          response.accessToken
        );
        Cookies.set(
          import.meta.env.VITE_REFRESH_TOKEN_NAME as string,
          response.refreshToken
        );
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
    setValue,
    Controller,
    control,
  };
};
