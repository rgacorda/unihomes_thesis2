import { Button } from "@/components/ui/button";
import Nav from "@/components/navigation/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="flex justify-between p-5">
        <div className="flex flex-col items-start justify-center w-[48%] p-2 mt-[120px] ml-[30px]">
          <div className="text-black p-2">
            <h1 className="font-extrabold text-6xl p-2">Welcome to Our</h1>
            <h1 className="font-extrabold text-6xl p-2">Website</h1>
            <p className="mt-5 font-thin p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <Button className="bg-black text-white">Sign Up</Button>
            <Button variant="outline" className="ml-[15px] border-2 border-black text-black">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex items-start justify-between w-1/2 p-2 mt-[120px] mr-[30px]">
          <div className="w-[48%] h-[500px] bg-gray-300 mr-2"></div>
          <div className="flex flex-col justify-between w-[48%]">
            <div className="w-full h-[250px] bg-gray-300 mb-2"></div>
            <div className="w-full h-[250px] bg-gray-300"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
