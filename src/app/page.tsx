import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import Importance from "@/components/Importance";
import Services from "@/components/Services";
import SteamWash from "@/components/SteamWash";
import MobileService from "@/components/MobileService";
import Packages from "@/components/Packages";
import Tips from "@/components/Tips";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <BeforeAfterGallery />
        <Importance />
        <Services />
        <SteamWash />
        <MobileService />
        <Packages />
        <Tips />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
