"use client";

import Nav from "@/components/navigation/nav";
import { Button } from "@/components/ui/import";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("profile"); // State to manage selected button

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col min-h-[844px] mt-[73px] p-[50px]">
        <div className="flex h-[110px] border border-black">
          <h1 className="text-[70px]">My Account</h1>
        </div>

        <div className="flex h-3/4">
          <div className="flex flex-col w-[450px] mb-[200px] border border-black pt-2">
            <div>
              <Button
                onClick={() => setSelected("profile")}
                className={` px-[100px] rounded-lg ${
                  selected === "profile"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Profile
              </Button>
            </div>

            <Button
              onClick={() => setSelected("hosting")}
              className={`w-full py-2 text-left px-4 rounded-lg mt-4 ${
                selected === "hosting"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Hosting Verification
            </Button>
          </div>

          <div className="w-3/4">asdas</div>
        </div>
      </div>
    </div>
  );
}
