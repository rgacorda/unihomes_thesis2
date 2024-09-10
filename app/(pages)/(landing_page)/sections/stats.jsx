import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/import";

export default function StatsSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-5 mx-[70px]">
      <div className="grid grid-cols-2 gap-6 lg:w-1/2 mt-[50px]">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">21K+</p>
            <p className="text-sm">+201 since last hour</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1200</p>
            <p className="text-sm">+201 since last hour</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Proprietors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">500</p>
            <p className="text-sm">+201 since last hour</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Ratings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">200</p>
            <p className="text-sm">+11 since last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col justify-center items-center w-1/2 mt-[50px]">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Here are some stats to look at
        </h2>
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
      </div>
    </section>
  );
}
