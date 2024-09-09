import Nav from "@/components/navigation/nav";
import Main from "@/app/(pages)/landing_page/sections/main";
import HowItWorksSection from "@/app/(pages)/landing_page/sections/howitworks";
import StatsSection from "@/app/(pages)/landing_page/sections/stats";
import ClientsSection from "@/app/(pages)/landing_page/sections/clients";
import Footer from "@/app/(pages)/landing_page/sections/footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <Main />
      <HowItWorksSection />
      <div className="min-h-[922px] min-w-[1900px] p-5 flex flex-col items-center">
        <StatsSection />
        <ClientsSection />
      </div>
      <Footer />
    </div>
  );
}
