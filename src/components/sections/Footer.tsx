import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-background/10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold font-sans tracking-tight">
          SV<span className="text-primary">.</span>
        </div>
        
        <div className="text-sm text-background/60 text-center md:text-left">
          &copy; {new Date().getFullYear()} Srinath Vatchavari Venkateshan. All rights reserved.
        </div>
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
