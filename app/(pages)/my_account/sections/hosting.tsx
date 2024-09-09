"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  CardContent,
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/import";

export default function Profile() {
  return (
    <div className="w-[1250px] pl-[15px] pt-[14px]">
      <div className="text-[40px]">
        <div>
          <h1 className="text-[20px] font-bold">Hosting Verification</h1>
          <p className="text-[14px] font-medium opacity-45">
            Please upload necessary documents to verify yourself as a host. Make
            sure your photos aren’t blurry and the front of your driver’s
            license clearly shows your face.
          </p>
          <hr className="mt-4 w-[700px]" />
        </div>
        <div className="flex mt-4">
          <div className="w-[800px] flex flex-col gap-3">
            <div>
              <h1 className="text-[17px] font-bold">Government ID</h1>
              <p className="text-[13px] font-medium opacity-45 w-[780px]">
                You’ll need to add an official government ID. Depending on what
                country you’re from, you can add a driver’s license, passport,
                or national identity card. This helps us make sure you’re really
                you and is required to publish your listing(s).
              </p>
              <Input
                type="file"
                id="government-id"
                name="government-id"
                className="mt-2 h-[32px] w-[780px] text-[13px] font-medium border border-black-65 rounded-md p-1"
              />
            </div>
            <div>
              <h1 className="text-[17px] font-bold">Business License</h1>
              <p className="text-[13px] font-medium opacity-45">
                You’ll need to add your official business license. This helps us
                make sure you’re really you and is required to publish your
                listing(s).
              </p>
              <Input
                type="file"
                id="government-id"
                name="government-id"
                className="mt-2 h-[32px] w-[780px] text-[13px] font-medium border border-black-65 rounded-md p-1"
              />
            </div>
            <div>
              <h1 className="text-[16px] font-bold">
                Which number can guests use to contact you?
              </h1>
              <p className="text-[13px] font-medium opacity-45">
                This number should be able to receive texts or calls.
              </p>
              <Input
                type="text"
                placeholder="639-000-000-000"
                className="mt-2 h-[32px] w-[780px] text-[13px] font-medium border border-black-65 rounded-md p-1"
              />
              <Button>Submit</Button>
            </div>
          </div>
          <div className="w-[400px] ml-[50px]">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-[20px] ">Your Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[13px] mb-2">
                  We aim to keep the data you share during this process private,
                  safe, and secure. Learn more in our Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
