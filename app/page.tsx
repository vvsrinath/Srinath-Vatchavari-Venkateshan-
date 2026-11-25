import { About } from "@/components/About";
import { BackToTop } from "@/components/ui/BackToTop";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Disciplines } from "@/components/Disciplines";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Opportunities } from "@/components/Opportunities";
import { Philosophy } from "@/components/Philosophy";
import { Projects } from "@/components/Projects";
import { Recognition } from "@/components/Recognition";

export default function Home() {
  return (
    <>
      <Navigation />
      <BackToTop />
      <main id="main">
        <Hero />
        <About />
        <Disciplines />
        <Projects />
        <Recognition />
        <Philosophy />
        <Opportunities />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
