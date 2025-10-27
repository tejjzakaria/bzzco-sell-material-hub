import { Mail, Phone, MapPin } from "lucide-react";
import { FadeInSection, StaggerContainer, StaggerItem } from "./FadeInSection";

const Footer = () => {
  return (
    <footer className="bg-construction-dark text-construction-dark-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          {/* Company Info */}
          <div className="w-full max-w-xl">
            <FadeInSection delay={0.1}>
              <div className="flex items-center gap-2 mb-4 justify-center">
                <div className="bg-primary text-primary-foreground font-bold text-2xl px-3 py-1 rounded">
                  Bzz
                </div>
                <span className="text-sm font-medium text-construction-dark-foreground/70">COMPANY</span>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-construction-dark-foreground/80 leading-relaxed mb-6 max-w-md mx-auto text-center">
                BzzCo is your trusted partner for construction materials. We connect quality suppliers with buyers,
                ensuring the best products for your building projects.
              </p>
            </FadeInSection>
            <StaggerContainer staggerDelay={0.1}>
              <div className="space-y-3 mx-auto w-fit">
                <StaggerItem>
                  <div className="flex items-center gap-3 text-construction-dark-foreground/80 justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>support@bzzco.com</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center gap-3 text-construction-dark-foreground/80 justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+31 6 84385566</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center gap-3 text-construction-dark-foreground/80 justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Mercuriusplein 1,
                      2340 Hoofddorp</span>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>

        <FadeInSection delay={0.5}>
          <div className="border-t border-construction-dark-foreground/20 pt-8">
            <p className="text-center text-construction-dark-foreground/60 text-sm">
              © {new Date().getFullYear()} BzzCo. All rights reserved.
            </p>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
};

export default Footer;
