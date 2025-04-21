import { CONTENT_TYPE } from "@/lib/constants/api.constants";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRegister(){
  const {isPending, error, mutate} = useMutation({
    mutationFn:async(feildData:RegisterData)=>{
          const res = await fetch("https://exam.elevateegy.com/api/v1/auth/signup", {
            method: "POST",
            headers: { ...CONTENT_TYPE },
            body: JSON.stringify({
              username: feildData.username,
              firstName: feildData.firstName,
              lastName: feildData.lastName,
              email: feildData.email,
              password: feildData.password,
              rePassword: feildData.rePassword,
              phone: feildData.phone,
            }),
          });

          const data = await res.json()
          if(data.code){
            throw new Error(data.message)
          }
            return data

    },

    onSuccess:()=>{
      toast.success('Created Accout Successfully!')

      setTimeout(()=>{
        window.location.href = "/login";
      },2000)
    }
  })

  return{isPending, error, register:mutate}
}