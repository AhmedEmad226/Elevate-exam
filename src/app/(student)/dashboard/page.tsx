import Image from "next/image";
import profile from "public/assets/user-profile.png";
import { CircleCheck, Clock, FlagIcon } from "lucide-react";
import StudentNavbar from "@/components/custom/student-navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import FetchSubjects from "./_components/subjects";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <main className="flex flex-wrap p-5 flex-col flex-1">
        {/* Search Quiz */}
        <header>
          <StudentNavbar />
        </header>

        <section className="flex flex-wrap">
          {/* User Profile */}

          <div className="p-3 size-[216px] relative">
            <Image src={profile} alt="User's profile image" className="object-cover" />
          </div>

          {/* User Details */}

          <div className="w-[646px] p-5 flex flex-col">
            <h2 className="text-2xl font-bold text-main mb-1">{session ? session.user.username : "User name"}</h2>
            <p className="text-[#696F79] mb-3">Lorem ipsum dolor sit amet.</p>
            <div className="bg-[#F5F5F5] w-[619px] h-[12px] rounded-[30px]">
              <div className="w-[434px] h-[12px] rounded-[30px] bg-main"></div>
            </div>

            {/* Extra Details */}

            <div className="flex justify-center mt-7 w-full">
              <div className="flex justify-between p-3">
                <FlagIcon className="text-main rounded-[10px] size-[70px] shadow-md" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl font-bold text-[#696F79]">27</p>
                  <p className="text-[#696F79]">Quiz Passed</p>
                </div>
              </div>

              <div className="flex justify-between p-3">
                <Clock className="text-main rounded-[10px] size-[70px] shadow-md" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl font-bold text-[#696F79]">13 min</p>
                  <p className="text-[#696F79]">Fastest Time</p>
                </div>
              </div>

              <div className="flex justify-between p-3">
                <CircleCheck className="text-main rounded-[10px] size-[70px] shadow-md" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl font-bold text-[#696F79]">200</p>
                  <p className="text-[#696F79]">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quizzes */}
        <section className="rounded-[20px] py-[32px] px-[16px]">
          <div className="w-full flex justify-between">
            <span className="text-main cursor-pointer">Quizzes</span>
            <span className="text-main cursor-pointer">View All</span>
          </div>
          <div className="flex flex-wrap w-full gap-[24px] justify-evenly">
            <FetchSubjects />
          </div>
        </section>
      </main>
    </>
  );
}
