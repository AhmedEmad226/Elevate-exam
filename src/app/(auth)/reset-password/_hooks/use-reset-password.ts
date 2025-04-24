'use client'
import { CONTENT_TYPE } from '@/lib/constants/api.constants';
import { useMutation } from "@tanstack/react-query";
import { toast } from 'sonner';

export default function useResetPassword() {
  const {isPending, error, mutate} = useMutation({
    mutationFn:async(feildData:{email:string, newPassword:string})=>{
      const res = await fetch('https://exam.elevateegy.com/api/v1/auth/resetPassword',{
        method:'PUT',
        headers:{...CONTENT_TYPE},
        body:JSON.stringify({
          email:feildData.email,
          newPassword:feildData.newPassword
        })
      })
      const apiData = await res.json()
      if(!res.ok) throw new Error(apiData.message)

        return apiData
    },

    onSuccess:()=>{
      toast.success('Created new password successfully!')

      setTimeout(() => {
        window.location.href = '/login'
      }, 2000);
    }
  })

  return{isPending,error,resetPassword:mutate}
}
