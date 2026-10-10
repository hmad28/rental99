import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rental Mobil Surabaya & Sidoarjo | Azbu Trans Jaya",
  description:
    "Azbu Trans Jaya menyediakan layanan rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
  metadataBase: new URL("https://azbutransjaya.com"),
  alternates: {
    canonical: "https://azbutransjaya.com",
  },
  openGraph: {
    title: "Rental Mobil Surabaya & Sidoarjo | Azbu Trans Jaya",
    description:
      "Rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
    url: "https://azbutransjaya.com",
    siteName: "Azbu Trans Jaya",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero-fleet-final.png",
        width: 1536,
        height: 1024,
        alt: "Azbu Trans Jaya Armada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Surabaya & Sidoarjo | Azbu Trans Jaya",
    description:
      "Rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
    images: ["/images/hero-fleet-final.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Azbu Trans Jaya",
    legalName: "PT Azbu Trans Jaya",
    url: "https://azbutransjaya.com",
    telephone: "085655221633",
    email: "azbutransjaya.com@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Raya Jaretan, Perum Sun Garden Blok A5/02, Urangagung, Sumberejo",
      addressLocality: "Sidoarjo",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    areaServed: ["Surabaya", "Sidoarjo"],
    description:
      "Azbu Trans Jaya menyediakan layanan rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah tersedia rental dengan driver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ketersediaan layanan dengan driver perlu dikonfirmasi melalui WhatsApp sesuai jadwal dan kebutuhan perjalanan.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah tersedia rental lepas kunci?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kebijakan rental lepas kunci belum ditetapkan pada situs. Silakan hubungi Azbu Trans Jaya untuk informasi terbaru.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani perjalanan luar kota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tujuan perjalanan dan ketersediaan kendaraan perlu dikonsultasikan terlebih dahulu melalui WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana proses booking kendaraan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pilih armada, hubungi kami, konfirmasi jadwal serta detail perjalanan, lalu tunggu konfirmasi pemesanan.",
        },
      },
      {
        "@type": "Question",
        name: "Apa saja syarat pemesanan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Persyaratan menyesuaikan jenis layanan dan kendaraan. Detail lengkap akan disampaikan saat konsultasi.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana metode pembayarannya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metode dan tahapan pembayaran perlu dikonfirmasi langsung karena informasi kebijakan belum tersedia pada situs.",
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
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
