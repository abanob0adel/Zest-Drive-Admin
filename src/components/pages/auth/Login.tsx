import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="min-h-screen flex items-center justify-center">
          <form className="p-6 border rounded-2xl lg:min-w-1/2 min-w-full">
            <div className="grid grid-cols-1 gap-4">
              <h4 className="text-center text-2xl font-semibold">سجل دخولك</h4>
              <Input placeholder="بريدك الالكتروني" type="email" />
              <Input placeholder="*********" type="password" />
              <Button className="w-full">سجل دخولك الان</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
