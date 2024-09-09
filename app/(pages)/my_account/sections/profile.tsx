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
    <div className="w-[750px] pl-[35px] pt-[14px]">
      <div className="text-[40px] font-bold flex justify-between">
        <div>
          <h1>Profile</h1>
        </div>

        <div className="mt-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <div className="mt-3">
          <h1>Name</h1>
          <Input type="text" placeholder="shadcn" />
          <p className="text-[15px] opacity-45 mt-2">
            This is your public display name. It can be your real name or a
            pseudonym. You can only change this once every 30 days.
          </p>
        </div>
        <div>
          <h1>Contact Number</h1>
          <Input type="text" placeholder="639-000-000-000" />
        </div>
        <div>
          <h1>Address</h1>
          <Input type="text" placeholder="Baguio City" />
        </div>
        <div>
          <h1>Date of birth</h1>
          <DatePickerForm /> {/* Use DatePickerForm here */}
        </div>
        <div>
          <h1>Email</h1>
          <Input type="text" placeholder="janedoe@gmail.com" />
        </div>
        <div>
          <h1>Lifestyle Tag/s</h1>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <div className="flex mt-2 gap-3">
          <Button>Update Profile</Button>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </div>
    </div>
  );
}
