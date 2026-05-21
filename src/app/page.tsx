import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutSpain from "@/components/AboutSpain";
import Locations from "@/components/Locations";
import IndustrySolutions from "@/components/IndustrySolutions";
import Products from "@/components/Products";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function SpainLandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <StatsBar /> */}
        <AboutSpain />
        <Locations />
        <IndustrySolutions />
        <Products />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
