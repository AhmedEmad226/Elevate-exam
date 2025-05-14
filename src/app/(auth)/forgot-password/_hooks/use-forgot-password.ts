import { CONTENT_TYPE } from "@/lib/constants/api.constants";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useForgotPassword() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fieldData: { email: string }) => {
      const res = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/forgotPassword", // This should be a server action
        {
          method: "POST",
          headers: {
            ...CONTENT_TYPE,
          },
          body: JSON.stringify({
            email: fieldData.email,
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
      toast.info("Code has been sent successfully");

      setTimeout(() => {
        window.location.href = "/verify-code";
      }, 2000);
    },
  });

  return { error, isPending, forgotPassword: mutate };
}
