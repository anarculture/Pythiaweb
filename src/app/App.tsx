import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BioSection } from "./components/BioSection";
import { ApproachSection } from "./components/ApproachSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="bg-[#0E3931] min-h-screen text-white font-sans selection:bg-white/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <BioSection />
        <ApproachSection />
        <ContactSection />
      </main>
    </div>
  );
}
