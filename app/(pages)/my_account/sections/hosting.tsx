"use client";
import { useRouter } from "next/navigation";
import {
  Button,
  AvatarImage,
  Avatar,
  AvatarFallback,
  Input,
  Badge,
} from "@/components/ui/import";
import { useState } from "react";
import { DatePickerForm } from "@/components/ui/DatePickerForm";

export default function Profile() {
  const [selected, setSelected] = useState("profile");
  const router = useRouter();
  return (
    <div className="w-[1250px] pl-[15px] pt-[14px] border border-black">
      <div className="text-[40px]">
        <div>
          <h1 className="text-[20px] font-bold">Hosting Verification</h1>
          <p className="text-[14px] font-medium opacity-45">
            Please upload necessary documents to verify yourself as a host. Make
            sure your photos aren’t blurry and the front of your driver’s
            license clearly shows your face.{" "}
          </p>
          <hr className="mt-4" />
        </div>
        <div className="flex border border-black mt-20">
          <div className="w-1/2 border border-black">asdas</div>
          <div className="w-1/2 border border-black">asdas</div>
        </div>
      </div>
    </div>
  );
}
