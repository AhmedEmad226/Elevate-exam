import Image from "next/image";
import userStatic from "public/assets/user-profile.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function StudentNavbar() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly my-1 align-middle">
        {/* Search Quiz */}
        <Input placeholder="Search Quiz" className="w-[762px] h-[61px] rounded-[20px] p-[16px]"></Input>

        {/* Submit Search */}
        <Button className="w-[191px] h-[61px] rounded-[20px]">Start Quiz</Button>

        {/* Profile Image */}
        <div className="size-[61px] rounded-full">
          <Image src={userStatic} className="w-full rounded-full object-cover" alt="user's profile image" />
        </div>
      </div>
    </>
  );
}
