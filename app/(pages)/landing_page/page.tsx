import Nav from "@/components/navigation/nav";
import Main from "@/components/landing_page/main";
import HowItWorksSection from "@/components/landing_page/howitworks";
import StatsSection from "@/components/landing_page/statssection";
import ClientsSection from "@/components/landing_page/clientssection";
import Footer from "@/components/landing_page/footer";

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
