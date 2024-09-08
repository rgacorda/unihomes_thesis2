import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/import";

export default function HowItWorksSection() {
  return (
    <section className="min-h-[905px] p-5">
      <div className="items-center mx-4 md:mx-[200px] lg:mx-[400px] pt-[50px] md:pt-[185px]">
        <h2 className="font-bold text-center text-[30px] md:text-[50px]">
          How it works
        </h2>
        <p className="text-center text-md md:text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mx-[150px]">
        <Card className="w-full md:w-[400px] p-[30px] shadow-md">
          <CardHeader>
            <CardTitle className="text-center font-bold text-[20px] md:text-[25px]">
              Search Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-[16px] md:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>

        <Card className="w-full md:w-[400px] p-[30px] shadow-md">
          <CardHeader>
            <CardTitle className="text-center font-bold text-[20px] md:text-[25px]">
              Explore Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-[16px] md:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>

        <Card className="w-full md:w-[400px] p-[30px] shadow-md">
          <CardHeader>
            <CardTitle className="text-center font-bold text-[20px] md:text-[25px]">
              Choose Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-[16px] md:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
