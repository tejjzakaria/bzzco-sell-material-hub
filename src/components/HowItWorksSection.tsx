import { UserPlus, ListPlus, ShoppingCart, Wallet } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register as a seller",
    description: "Create your seller account with basic business information and verification documents.",
  },
  {
    number: "02",
    icon: ListPlus,
    title: "List your materials",
    description: "Add your product catalog with descriptions, pricing, and high-quality images.",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Start receiving orders",
    description: "Get notified of new orders and manage them through your personalized dashboard.",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Get paid securely",
    description: "Receive automatic payments directly to your account after successful deliveries.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin selling on BzzCo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-background rounded-lg p-8 h-full border-2 border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  <div className="mt-2 p-2 bg-primary/10 rounded-lg">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
