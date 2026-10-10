import { Navbar } from "@/components/sites/azbutransjaya/Navbar";
import { Hero } from "@/components/sites/azbutransjaya/Hero";
import { QuickBookingPanel } from "@/components/sites/azbutransjaya/QuickBookingPanel";
import { TrustStrip } from "@/components/sites/azbutransjaya/TrustStrip";
import { FleetCatalog } from "@/components/sites/azbutransjaya/FleetCatalog";
import { Services } from "@/components/sites/azbutransjaya/Services";
import { FeaturedArmada } from "@/components/sites/azbutransjaya/FeaturedArmada";
import { CoverageArea } from "@/components/sites/azbutransjaya/CoverageArea";
import { Experience } from "@/components/sites/azbutransjaya/Experience";
import { BookingFlow } from "@/components/sites/azbutransjaya/BookingFlow";
import { FAQ } from "@/components/sites/azbutransjaya/FAQ";
import { CtaBanner } from "@/components/sites/azbutransjaya/CtaBanner";
import { Footer } from "@/components/sites/azbutransjaya/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickBookingPanel />
        <TrustStrip />
        <FleetCatalog />
        <Services />
        <FeaturedArmada />
        <CoverageArea />
        <Experience />
        <BookingFlow />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
