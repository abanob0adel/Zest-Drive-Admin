import { Button } from "@/components/ui/button";
import { useOTP } from "./Logic";
import { useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function OTP({ email }: { email: string }) {
  const {
    onSubmit,
    handleSubmit,
    isSubmitting,
    setValue,
    Controller,
    control,
  } = useOTP();
  useEffect(() => {
    setValue("email", email);
  }, []);
  return (
    <>
      <form
        className="p-6 border rounded-2xl lg:min-w-1/2 min-w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-4">
          <h4 className="text-center text-2xl font-semibold">تحقق من الرمز</h4>
          <p className="text-center text-sm text-muted-foreground">
            الرمز تم ارساله الى بريدك الالكتروني
          </p>
          <div className="flex items-center justify-center">
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup dir="ltr">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
          </div>
          <Button className="w-full">
            {isSubmitting ? "جاري التحقق" : "تحقق من الرمز"}
          </Button>
        </div>
      </form>
    </>
  );
}
