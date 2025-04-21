import Image from "next/image";
import profile from "@/assets/user-profile.png";
import { CircleCheck, Clock, FlagIcon } from "lucide-react";
import StudentNavbar from "@/components/customs/student-navbar";
import FetchSubjects from "@/components/customs/fetch-subjects";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export default async function Page() {

  // Getting token on server side
  const cookieSession = cookies().get('next-auth.session-token')?.value
  const token = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token:cookieSession
  })


  return (
    <>
      <div className="flex flex-wrap p-5 flex-col w-10/12">
        <StudentNavbar />

        <div className="flex flex-wrap">
          {/* User Profile */}

          <div className="p-3 size-[216px] relative">
            <Image
              src={profile}
              alt="User's profile image"
              className="object-cover"
            />
          </div>

          {/* User Details */}

          <div className="w-[646px] p-5 flex flex-col">
            <h2 className="text-2xl font-bold text-main mb-1">User Name</h2>
            <p className="text-[#696F79] mb-3">Lorem ipsum dolor sit amet.</p>
            <div className="bg-[#F5F5F5] w-[619px] h-[12px] rounded-[30px]">
              <div className="w-[434px] h-[12px] rounded-[30px] bg-main"></div>
            </div>

            {/* Extra Details */}

            <div className="flex flex-wrap justify-evenly mt-7">
              <div className="flex flex-wrap justify-between">
                <FlagIcon className="text-main rounded-[10px] size-[70px] shadow-md" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl font-bold text-[#696F79]">27</p>
                  <p className="text-[#696F79]">Quiz Passed</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-between">
                <Clock className="text-main rounded-[10px] size-[70px] shadow-md" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl font-bold text-[#696F79]">13 min</p>
                  <p className="text-[#696F79]">Fastest Time</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-between">
                <CircleCheck className="text-main rounded-[10px] size-[70px] shadow-md" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl font-bold text-[#696F79]">200</p>
                  <p className="text-[#696F79]">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] py-[32px] px-[16px]">
          <div className="w-full flex justify-between">
            <span className="text-main cursor-pointer">Quizes</span>
            <span className="text-main cursor-pointer">View All</span>
          </div>
          <div className="flex flex-wrap w-full gap-[24px] justify-evenly">
            <FetchSubjects token={token?.token!}/>
          </div>
        </div>
      </div>
    </>
  );
}
