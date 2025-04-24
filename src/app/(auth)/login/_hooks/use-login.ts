import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLogin() {
  const { error, isPending, mutate } = useMutation({
    mutationFn: async (fieldData: LoginData) => {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        email: fieldData.email,
        password: fieldData.password,
      });

      if (res?.error) throw new Error(res.error);
      return res;
    },
    onSuccess: () => {
      toast.success("Logged in successfully!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    },
  });

  return { error, isPending, login: mutate };
}
