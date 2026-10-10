import { Navbar } from "@/components/sites/azbutransjaya/Navbar";
import { Hero } from "@/components/sites/azbutransjaya/Hero";
import { FleetCatalog } from "@/components/sites/azbutransjaya/FleetCatalog";
import { Services } from "@/components/sites/azbutransjaya/Services";
import { TourPackages } from "@/components/sites/azbutransjaya/TourPackages";
import { ClientsSection } from "@/components/sites/azbutransjaya/ClientsSection";
import { Experience } from "@/components/sites/azbutransjaya/Experience";
import { BookingFlow } from "@/components/sites/azbutransjaya/BookingFlow";
import { FAQ } from "@/components/sites/azbutransjaya/FAQ";
import { CtaBanner } from "@/components/sites/azbutransjaya/CtaBanner";
import { Footer } from "@/components/sites/azbutransjaya/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden max-w-full w-full">
        {/* 1. Hero section */}
        <Hero />

        {/* 2. Armada unggulan */}
        <FleetCatalog />

        {/* 3. Layanan utama */}
        <Services />

        {/* 4. Paket Tour Lombok */}
        <TourPackages />

        {/* 5. Klien Kami */}
        <ClientsSection />

        {/* 6. Kenapa Pilih Rental99 */}
        <Experience />

        {/* 7. Cara Booking singkat */}
        <BookingFlow />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. CTA penutup */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
