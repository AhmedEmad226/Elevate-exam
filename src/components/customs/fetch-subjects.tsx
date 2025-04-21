import { CONTENT_TYPE } from "@/lib/constants/api.constants";
import Image from "next/image";

export default async function FetchSubjects({token}:{token:string}) {
  const res = await fetch("https://exam.elevateegy.com/api/v1/subjects", {
    ...CONTENT_TYPE,
    headers: {
      token
    },
  });

  const { subjects } = await res.json();
  
  return (
    <>
      {subjects.map((subject: Subject) => {
        return (
          <>
            <div className="w-[330px] h-[292px] relative" key={subject._id}>
              <Image
                className="w-full h-full rounded-[9px] cursor-pointer relative"
                src={subject.icon}
                alt={subject.name}
                width={330}
                height={292}
              />
              <span className="absolute bottom-3 left-3 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-2xl z-40">
                {subject.name}
              </span>
            </div>
          </>
        );
      })}
    </>
  );
}
