import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-construction-dark/90" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-construction-dark-foreground mb-6 leading-tight">
            Sell Your Construction Materials with BzzCo
          </h1>
          <p className="text-xl text-construction-dark-foreground/90 mb-8 leading-relaxed">
            Join BzzCo's trusted network of suppliers and grow your business.
          </p>
          <a href="https://www.bzzco.com/become-a-seller">
            <Button variant="hero">
              Register as a Seller
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
