import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySellSection from "@/components/WhySellSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhySellSection />
        <HowItWorksSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
