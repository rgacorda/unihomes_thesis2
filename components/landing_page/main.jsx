import { Button } from "@/components/ui/import";

export default function Main() {
  return (
    <>
      <main className="flex flex-col md:flex-row justify-between min-h-[828px] min-w-[1900px]">
        <div className="flex flex-col items-start justify-center w-full w-[40%] p-2 h-[50%] ml-5 ml-[50px] mt-[250px]">
          <div className="text-black p-2">
            <h1 className="font-extrabold text-4xl text-6xl p-2 md:text-[70px]">
              Welcome to Our
            </h1>
            <h1 className="font-extrabold text-4xl md:text-6xl p-2 md:text-[70px]">
              Website
            </h1>
            <p className="mt-1 p-2 text-[18px] md:text-[20px] opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Button className="bg-black text-white py-4 px-4 md:py-6 md:px-5 mt-5 text-[15px]">
              Explore Now
            </Button>
            <Button
              variant="outline"
              className="ml-[15px] border-2 border-black border-opacity-10 text-black py-4 px-4 md:py-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex items-start justify-between w-full md:w-1/2 p-2 mr-[50px] mt-[200px]">
          <div className="w-[50%] h-[300px] md:h-[510px] bg-gray-300 mr-2"></div>
          <div className="flex flex-col justify-between w-[48%]">
            <div className="w-full h-[150px] md:h-[250px] bg-gray-300 mb-2"></div>
            <div className="w-full h-[150px] md:h-[250px] bg-gray-300"></div>
          </div>
        </div>
      </main>
    </>
  );
}
