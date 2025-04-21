import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLogin() {
  const { error, isPending, mutate } = useMutation({
    mutationFn: async (feildData: LoginData) => {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        email: feildData.email,
        password: feildData.password,
      });

      if (res?.error) throw new Error(res.error);
      return res;
    },
    onSuccess: (data) => {
      toast.success('Logged in successfully!')
      setTimeout(() => {
        window.location.href = data?.url || "/dashboard";
      },2000);
    },
  });

  return {error, isPending, login:mutate}
}
