import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rental Mobil & Tour BIZAM Lombok | Rental99 Transport Service & Tours",
  description:
    "Rental99 Transport Service & Tours menyediakan layanan rental mobil include driver, BBM, dan air mineral di BIZAM Lombok, airport transfer, city tour, dan paket wisata Sasak & Gili.",
  metadataBase: new URL("https://rental99.id"),
  alternates: {
    canonical: "https://rental99.id",
  },
  icons: {
    icon: "/images/rental99-icon.png",
    shortcut: "/images/rental99-icon.png",
    apple: "/images/rental99-icon.png",
  },
  openGraph: {
    title: "Rental Mobil & Tour BIZAM Lombok | Rental99 Transport Service & Tours",
    description:
      "Rental99 Transport Service & Tours menyediakan layanan rental mobil include driver, BBM, dan air mineral di BIZAM Lombok, airport transfer, city tour, dan paket wisata Sasak & Gili.",
    url: "https://rental99.id",
    siteName: "Rental99 Transport Service & Tours",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero-fleet-final.png",
        width: 1536,
        height: 1024,
        alt: "Rental99 Armada & Tour BIZAM Lombok",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil & Tour BIZAM Lombok | Rental99 Transport Service & Tours",
    description:
      "Rental99 Transport Service & Tours menyediakan layanan rental mobil include driver, BBM, dan air mineral di BIZAM Lombok, airport transfer, city tour, dan paket wisata Sasak & Gili.",
    images: ["/images/hero-fleet-final.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Rental99",
    legalName: "Rental99 Transport Service & Tours",
    url: "https://rental99.id",
    telephone: "+6285655221633",
    email: "info@rental99.id",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Area Bandara Internasional Zainuddin Abdul Madjid (BIZAM), Praya",
      addressLocality: "Lombok Tengah",
      addressRegion: "Nusa Tenggara Barat",
      addressCountry: "ID",
    },
    areaServed: ["BIZAM Lombok", "Mataram", "Senggigi", "Kuta Mandalika", "Gili Trawangan", "Sembalun", "Sumbawa"],
    description:
      "Rental99 Transport Service & Tours menyediakan layanan rental mobil include driver, BBM, dan air mineral di BIZAM Lombok, airport transfer, city tour, dan paket wisata Sasak & Gili.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah tarif rental sudah termasuk Driver dan BBM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, seluruh armada Rental99 sudah termasuk Driver profesional, BBM, dan Air Mineral gratis selama perjalanan. Anda tinggal duduk santai menikmati perjalanan di Lombok.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani penjemputan langsung di Bandara BIZAM Lombok?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tentu saja. BIZAM (Bandara Internasional Zainuddin Abdul Madjid) adalah area layanan utama kami. Driver kami akan standby menyambut kedatangan Anda tepat waktu.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara pemesanan Big Bus atau Medium Bus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Untuk armada Medium Bus (30-35 seat) dan Big Bus (45-50 seat), pemesanan dan penawaran harga khusus dapat langsung dikonsultasikan melalui WhatsApp kami sesuai durasi dan rute perjalanan.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah tersedia paket tour kustom (custom itinerary)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sangat bisa. Anda dapat mengkombinasikan destinasi sesuai keinginan, misalnya Sasak Tour + Sunset Mandalika, atau Snorkeling 3 Gili + Sembalun.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani perjalanan luar daerah seperti Sumbawa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami melayani perjalanan dinas maupun wisata lintas daerah ke Pulau Sumbawa, Bima, dan sekitarnya dengan konfirmasi jadwal terlebih dahulu.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana proses pembayaran booking di Rental99?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pemesanan dapat didiskusikan terlebih dahulu melalui WhatsApp. Setelah draft jadwal dan armada disepakati, pembayaran dapat diselesaikan dengan aman.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="overflow-x-hidden max-w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased overflow-x-hidden max-w-full w-full`}>
        {children}
      </body>
    </html>
  );
}
