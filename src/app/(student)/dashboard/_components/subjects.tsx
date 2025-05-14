"use client";
import Image from "next/image";
import useSubjects from "../_hooks/get-subjects";
import CardSkeleton from "@/components/custom/card-skeleton";
import AlertError from "@/components/custom/alert-error";

export default function FetchSubjects() {
  const { data, error, isPending } = useSubjects();

  return (
    <>
      {/* Error */}
      {error && <AlertError errorMessage={error.message} />}

      {/* Skeletons */}

      {isPending && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}

      {/* Subjects */}
      {data &&
        data.subjects.map((subject: Subject) => {
          return (
            <>
              <div className="w-[330px] h-[292px] relative group cursor-pointer" key={subject._id}>
                <div className="w-full h-full">
                  <Image className="w-full h-full rounded-[9px]" src={subject.icon} alt={subject.name} width={330} height={292} />
                </div>
                <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black rounded-[9px] opacity-50 duration-200"></div>
                <span className="absolute bottom-3 left-3 group-hover:bottom-6 group-hover:left-6 duration-200 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-2xl z-40">
                  {subject.name}
                </span>
              </div>
            </>
          );
        })}
    </>
  );
}
