import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rental Mobil Surabaya & Sidoarjo Terpercaya | Rental99",
  description:
    "Rental99 menyediakan layanan rental mobil lepas kunci dan dengan driver profesional di Surabaya & Sidoarjo. Armada bersih, terawat, proses cepat, harga transparan.",
  metadataBase: new URL("https://rental99.id"),
  alternates: {
    canonical: "https://rental99.id",
  },
  openGraph: {
    title: "Rental Mobil Surabaya & Sidoarjo Terpercaya | Rental99",
    description:
      "Rental99 menyediakan layanan rental mobil lepas kunci dan dengan driver profesional di Surabaya & Sidoarjo. Armada bersih, terawat, proses cepat, harga transparan.",
    url: "https://rental99.id",
    siteName: "Rental99",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero-fleet-final.png",
        width: 1536,
        height: 1024,
        alt: "Rental99 Armada Surabaya & Sidoarjo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Surabaya & Sidoarjo Terpercaya | Rental99",
    description:
      "Rental99 menyediakan layanan rental mobil lepas kunci dan dengan driver profesional di Surabaya & Sidoarjo. Armada bersih, terawat, proses cepat, harga transparan.",
    images: ["/images/hero-fleet-final.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Rental99",
    legalName: "PT Rental 99 Indonesia",
    url: "https://rental99.id",
    telephone: "+6285655221633",
    email: "info@rental99.id",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Raya Darmo No. 99, Wonokromo",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    areaServed: ["Surabaya", "Sidoarjo", "Juanda Airport", "Gresik", "Malang"],
    description:
      "Rental99 menyediakan layanan rental mobil lepas kunci dan dengan driver profesional di Surabaya & Sidoarjo dengan berbagai pilihan armada terawat.",
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
          text: "Ya, Rental99 menyediakan opsi lepas kunci maupun paket lengkap Include Driver + BBM untuk kenyamanan perjalanan tanpa repot.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah tersedia rental lepas kunci?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tersedia untuk pelanggan yang memenuhi persyaratan verifikasi identitas (KTP, SIM A, dan dokumen pendukung). Hubungi WhatsApp kami untuk detail verifikasi.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani perjalanan ke luar kota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami melayani perjalanan dinas, wisata, dan keluarga ke berbagai kota di Jawa Timur maupun lintas provinsi dengan tarif transparan.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana proses booking kendaraan di Rental99?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sangat mudah: pilih unit kendaraan, tentukan tanggal serta layanan (lepas kunci atau dengan driver), lalu klik tombol WhatsApp untuk konfirmasi instan.",
        },
      },
      {
        "@type": "Question",
        name: "Apa saja syarat pemesanan rental mobil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Untuk sewa dengan driver cukup menyertakan identitas dan jadwal. Untuk lepas kunci diperlukan verifikasi KTP, SIM A, serta deposit jaminan.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana metode pembayarannya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pembayaran dapat dilakukan melalui transfer bank resmi atau tunai setelah kesepakatan pemesanan dikonfirmasi oleh admin Rental99.",
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
