import { Input, Button } from "@/components/ui/import";

export default function Footer() {
  return (
    <footer className="bg-white py-10 min-h-[845px] min-w-[1900px] flex justify-center   items-center">
      <div className="w-[1850px] text-center">
        <div className="w-[1850px] text-center">
          <div className="mb-10 flex flex-col items-center">
            <h2 className="text-[50px] font-bold">
              Join <span className="text-blue-500">our</span> newsletter
            </h2>
            <p className="text-[18px] mb-4 w-[600px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-[28%] flex justify-center mr-[10px]">
              <Input
                type="email"
                placeholder="name@example.com"
                className="py-[6px] px-[0px] border border-gray-300 rounded-l-md flex-1 h-full"
              />
              <Button className="bg-blue-500 text-white py-[6px] px-3 rounded-r-md h-full ml-2 px-[60px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500 mt-[100px]">
          <span>© 2024 UniHomes. All rights reserved.</span>
          <a href="#" className="text-blue-500 hover:underline mt-2 md:mt-0">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
