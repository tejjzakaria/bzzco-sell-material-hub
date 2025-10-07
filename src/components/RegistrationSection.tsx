import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Valid business registration or trade license",
  "Product catalog with specifications and pricing",
  "Business banking information for secure payments",
  "Quality certifications (if applicable)",
  "Contact and delivery information",
];

const RegistrationSection = () => {
  return (
    <section className="py-20 bg-background" id="what-do-you-need">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-brand">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">Ready to Start Selling?</h2>
                <p className="text-muted-foreground text-lg">
                  Register today and join BzzCo's network of trusted construction material suppliers.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">What You'll Need to Register:</h3>
                <div className="space-y-4">
                  {requirements.map((requirement) => (
                    <div key={requirement} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a href="https://www.bzzco.com/become-a-seller">
                  <Button variant="hero" size="lg">
                    Start Selling Today
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Registration takes less than 10 minutes. Our team will review your application within 24-48 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
