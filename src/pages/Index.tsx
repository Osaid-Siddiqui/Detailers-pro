import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Gallery from "@/components/sections/Gallery";
import Areas from "@/components/sections/Areas";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/BackToTop";
import SpecialOffer from "@/components/SpecialOffer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Gallery />
          <Areas />
          <Contact />
          <Footer />
          <BackToTop />
          <SpecialOffer />
        </div>
      )}
    </>
  );
};

export default Index;
