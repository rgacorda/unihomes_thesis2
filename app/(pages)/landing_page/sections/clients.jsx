import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientsSection() {
  return (
    <section className="relative mt-[20px]">
      <div className="mx-[70px] p-5 relative">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-start">
          Meet <span className="text-blue-500">our</span> happy clients
        </h2>

        <div className="absolute top-7 right-0 flex space-x-6 mr-[18px]">
          <Button
            variant="outline"
            className="p-1 rounded-full h-8 w-8 flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="p-1 rounded-full h-8 w-8 flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-4 shadow-lg">
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Jane Doe"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <CardTitle>Jane Doe</CardTitle>
                  <CardDescription>Student</CardDescription>
                </div>
              </div>
              <p className="text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </CardContent>
          </Card>
          <Card className="p-4 shadow-lg">
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="John Smith"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <CardTitle>John Smith</CardTitle>
                  <CardDescription>Teacher</CardDescription>
                </div>
              </div>
              <p className="text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </CardContent>
          </Card>
          <Card className="p-4 shadow-lg">
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Anna Johnson"
                  />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <CardTitle>Anna Johnson</CardTitle>
                  <CardDescription>Engineer</CardDescription>
                </div>
              </div>
              <p className="text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </CardContent>
          </Card>
          <Card className="p-4 shadow-lg">
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Mike Williams"
                  />
                  <AvatarFallback>MW</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <CardTitle>Mike Williams</CardTitle>
                  <CardDescription>Designer</CardDescription>
                </div>
              </div>
              <p className="text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
