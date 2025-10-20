import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "./Logic";

export default function Login() {
  const { onSubmit, register, handleSubmit, isSubmitting, errors } = useLogin();

  return (
    <>
      <div className="container">
        <div className="min-h-screen flex items-center justify-center">
          <form
            className="p-6 border rounded-2xl lg:min-w-1/2 min-w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-4">
              <h4 className="text-center text-2xl font-semibold">سجل دخولك</h4>
              <Input
                placeholder="بريدك الالكتروني"
                type="email"
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-red-500">{errors?.email?.message}</p>
              )}
              <Input
                placeholder="*********"
                type="password"
                {...register("password")}
              />
              {errors?.password && (
                <p className="text-red-500">{errors?.password?.message}</p>
              )}
              <Button className="w-full">
                {isSubmitting ? "جاري التحقق" : "سجل دخولك الان"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
