"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Nav from "@/components/navigation/nav";
import { Button } from "@/components/ui/import";
import { User } from "lucide-react";
import Profile from "@/app/(pages)/my_account/sections/profile";
import Hosting from "@/app/(pages)/my_account/sections/hosting";

export default function Main() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "profile";

  const handleNavigation = (route: string) => {
    router.push(`/my_account/?page=${route}`);
  };

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col min-h-[844px] mt-[13px] p-[100px]">
        <div className="flex h-[110px]">
          <h1 className="text-[65px] font-bold">My Account</h1>
        </div>
        <hr className="w-[370px] mb-[10px]" />
        <div className="flex h-3/4">
          <div className="flex flex-col w-[450px] mb-[200px] pt-2 p-2">
            <div>
              <Button
                onClick={() => handleNavigation("profile")}
                className={`flex items-center justify-start w-[377px] h-[50px] rounded-lg ${
                  page === "profile"
                    ? "bg-black text-white hover:bg-black"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                <User className="mr-2 w-5 h-5" />
                Profile
              </Button>
            </div>

            <div className="mt-4">
              <Button
                onClick={() => handleNavigation("hosting")}
                className={`flex items-center justify-start w-[377px] h-[50px] rounded-lg ${
                  page === "hosting"
                    ? "bg-black text-white hover:bg-black"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                <User className="mr-2 w-5 h-5" />
                Hosting Verification
              </Button>
            </div>
          </div>
          <div className="flex-1">
            {page === "profile" && <Profile />}
            {page === "hosting" && <Hosting />}
          </div>
        </div>
      </div>
    </div>
  );
}
