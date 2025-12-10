"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { loginRequest } from "./request";
import type { LoginTypes } from "./types";
import { toast } from "sonner";
export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginTypes>();
  const [otp, setOTP] = useState(false);
  const [email, setEmail] = useState("");
  const onSubmit: SubmitHandler<LoginTypes> = async (data) => {
    try {
      const response = await loginRequest(data);
      if (response.step === "otp_verification_required") {
        setOTP(true);
        setEmail(data.email);
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
    otp,
    email,
  };
};
