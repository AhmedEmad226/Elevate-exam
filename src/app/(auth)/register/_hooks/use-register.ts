import { CONTENT_TYPE } from "@/lib/constants/api.constants";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRegister() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fieldData: RegisterData) => {
      const res = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: { ...CONTENT_TYPE },
          body: JSON.stringify({
            username: fieldData.username,
            firstName: fieldData.firstName,
            lastName: fieldData.lastName,
            email: fieldData.email,
            password: fieldData.password,
            rePassword: fieldData.rePassword,
            phone: fieldData.phone,
          }),
        }
      );

      const data = await res.json();
      if (data.code) {
        throw new Error(data.message);
      }
      return data;
    },

    onSuccess: () => {
      toast.success("Created Account Successfully!");

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    },
  });

  return { isPending, error, register: mutate };
}
