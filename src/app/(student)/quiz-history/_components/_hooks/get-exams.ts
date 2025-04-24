import { useQuery } from "@tanstack/react-query";

export default function getExams() {
  const { isPending, error, data } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const res = await fetch("https://exam.elevateegy.com/api/v1/exams", {
        headers: { ...CONTENT_TYPE },
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      return data;
    },
  });
}
