import { Globe, DollarSign, Package, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeInSection, StaggerContainer, StaggerItem } from "./FadeInSection";

const features = [
  {
    icon: Globe,
    title: "Wide Market Reach",
    description: "Access thousands of buyers across multiple regions and expand your customer base exponentially.",
  },
  {
    icon: DollarSign,
    title: "Reliable Payments",
    description: "Get paid on time, every time, with our secure payment processing and transparent transaction system.",
  },
  {
    icon: Package,
    title: "Easy Order Management",
    description: "Manage your inventory, orders, and deliveries with our intuitive dashboard and real-time updates.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our team is here to help you succeed with 24/7 support and personalized business guidance.",
  },
];

const WhySellSection = () => {
  return (
    <section className="py-20 bg-background" id="why-us">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Sell with BzzCo</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of successful suppliers who trust BzzCo to grow their construction materials business.
            </p>
          </div>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="border-2 hover:border-primary transition-all hover:shadow-brand h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhySellSection;
