import { Button } from "@/components/ui/button";
import Nav from "@/components/navigation/nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DecorativeBox } from "./path/to/DecorativeBox";
export default function Home() {
  return (
    <div>
      <Nav />

      {/* Main Section */}
      <main className="flex flex-col md:flex-row justify-between h-screen w-screen">
        <div className="flex flex-col items-start justify-center w-full md:w-[40%] p-2 h-[50%] ml-5 md:ml-[50px] mt-[170px]">
          <div className="text-black p-2">
            <h1 className="font-extrabold text-4xl md:text-6xl p-2 md:text-[70px]">
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
        <div className="hidden md:flex items-start justify-between w-full md:w-1/2 p-2 mr-[50px] mt-[140px]">
          <div className="w-[50%] h-[300px] md:h-[500px] bg-gray-300 mr-2"></div>
          <div className="flex flex-col justify-between w-[48%]">
            <div className="w-full h-[150px] md:h-[250px] bg-gray-300 mb-2"></div>
            <div className="w-full h-[150px] md:h-[250px] bg-gray-300"></div>
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section className="h-screen w-screen p-5">
        <div className="items-center mx-4 md:mx-[200px] lg:mx-[400px] p-3 pt-[50px] md:pt-[185px] ">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[30px] md:text-[50px]">
            How it works
          </h2>
          <p className="text-md md:text-lg mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 p-5 mx-[150px]">
          <Card className="border w-full md:w-[400px] p-[30px] shadow-md flex-grow">
            <CardHeader className="flex items-center space-x-4">
              <CardTitle className="text-center font-bold text-[20px] md:text-[25px]">
                Search property
              </CardTitle>
            </CardHeader>
            <CardContent className="mx-4">
              <p className="text-center text-[16px] md:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </CardContent>
          </Card>
          <Card className="border w-full md:w-[400px] p-[30px] shadow-md flex-grow">
            <CardHeader className="flex items-center space-x-4">
              <CardTitle className="text-center font-bold text-[20px] md:text-[25px]">
                Explore property
              </CardTitle>
            </CardHeader>
            <CardContent className="mx-4">
              <p className="text-center text-[16px] md:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </CardContent>
          </Card>
          <Card className="border w-full md:w-[400px] p-[30px] shadow-md flex-grow">
            <CardHeader className="flex items-center space-x-4">
              <CardTitle className="text-center font-bold text-[20px] md:text-[25px]">
                Choose property
              </CardTitle>
            </CardHeader>
            <CardContent className="mx-4">
              <p className="text-center text-[16px] md:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row h-screen w-screen p-5 ">
        {/* Left side: Cards */}
        <div className="grid grid-cols-2 gap-6 w-[800px] h-[150px] mt-[200px] ml-[100px]">
          {/* Clients Card */}
          <Card>
            <CardHeader>
              <CardTitle>Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">21K+</p>
              <p className="text-sm text-muted">+201 since last hour</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1200</p>
              <p className="text-sm text-muted">+201 since last hour</p>
            </CardContent>
          </Card>

          {/* Proprietors Card */}
          <Card>
            <CardHeader>
              <CardTitle>Proprietors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">500</p>
              <p className="text-sm text-muted">+201 since last hour</p>
            </CardContent>
          </Card>

          {/* Ratings Card */}
          <Card>
            <CardHeader>
              <CardTitle>Ratings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">200</p>
              <p className="text-sm text-muted">+11 since last hour</p>
            </CardContent>
          </Card>
        </div>

        {/* Right side: "How it works" section */}
        <div className="w-[900px] h-[150px] mt-[250px]">
          <div className="mx-6">
            <h2 className="text-[55px] font-bold mb-4 text-center">
              Here are some stats to look at
            </h2>
            <p className="text-md mb-4 text-center w-[700px] ml-[80px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
