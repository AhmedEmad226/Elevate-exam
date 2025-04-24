"use client";
import { CONTENT_TYPE } from "@/lib/constants/api.constants";
import { useQuery } from "@tanstack/react-query";

export default function useSubjects(token: string) {
  const { data, isPending, error } = useQuery<Subjects>({
    queryKey: ["Quiz Subjects", token],
    queryFn: async ({ queryKey }) => {
      const [, token] = queryKey as [string, string];
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/subjects`, {
        headers: {
          ...CONTENT_TYPE,
          token,
        },
      });

      const apiData = await res.json();
      if (!res.ok) throw new Error(apiData.message);

      return apiData;
    },
  });

  return { data, error, isPending };
}
