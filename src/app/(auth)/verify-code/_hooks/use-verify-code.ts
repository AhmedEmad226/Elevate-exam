import { CONTENT_TYPE } from "@/lib/constants/api.constants";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useVerifyCode() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fieldData: { resetCode: string }) => {
      const res = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/verifyResetCode",
        {
          method: "POST",
          headers: {
            ...CONTENT_TYPE,
          },
          body: JSON.stringify({
            resetCode: fieldData.resetCode,
          }),
        }
      );

      const apiData = await res.json();
      if (!res.ok) throw new Error(apiData.error);

      return apiData;
    },

    onSuccess: () => {
      toast.success("Verified code successfully!");

      setTimeout(() => {
        window.location.href = "/reset-password";
      }, 2000);
    },
  });

  return { error, isPending, verifyCode: mutate };
}
