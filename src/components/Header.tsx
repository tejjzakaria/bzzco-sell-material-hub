import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-construction-dark text-construction-dark-foreground font-bold text-2xl px-3 py-1 rounded">
                Bzz
              </div>
              <span className="text-sm font-medium text-muted-foreground">COMPANY</span>
            </div>
            
            
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">
                Why us?
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How it works?
              </a>
              <a href="#what-do-you-need" className="text-sm font-medium hover:text-primary transition-colors">
                What do you need?
              </a>
            </nav>
            <a href="https://www.bzzco.com/become-a-seller"><Button variant="default" size="sm">
              Become a Seller
            </Button></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
