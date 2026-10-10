export interface Car {
  name: string;
  category: "City Car" | "MPV" | "Premium" | "Minibus";
  image: string;
  transmission: "Automatic" | "Manual";
  seats: string;
  price: number;
  allInPrice: number;
  badge?: string;
  features: string[];
}

export const FLEET_DATA: Car[] = [
  {
    name: "Daihatsu Sigra R AT",
    category: "City Car",
    image: "/images/sigra.png",
    transmission: "Automatic",
    seats: "5–7 Kursi",
    price: 325000,
    allInPrice: 575000,
    badge: "Best Seller",
    features: ["Matic", "5–7 Kursi", "AC Dingin"],
  },
  {
    name: "Suzuki XL7 AT",
    category: "MPV",
    image: "/images/xl7.png",
    transmission: "Automatic",
    seats: "7 Kursi",
    price: 400000,
    allInPrice: 650000,
    badge: "Favorit Keluarga",
    features: ["Matic", "7 Kursi", "AC Double"],
  },
  {
    name: "Daihatsu Xenia 2018 Manual",
    category: "MPV",
    image: "/images/xenia.png",
    transmission: "Manual",
    seats: "7 Kursi",
    price: 275000,
    allInPrice: 525000,
    badge: "Hemat & Irit",
    features: ["Manual", "7 Kursi", "AC Dingin"],
  },
  {
    name: "Daihatsu Ayla AT",
    category: "City Car",
    image: "/images/ayla.png",
    transmission: "Automatic",
    seats: "5 Kursi",
    price: 275000,
    allInPrice: 525000,
    badge: "City Car",
    features: ["Matic", "5 Kursi", "AC Dingin"],
  },
  {
    name: "Avanza Manual",
    category: "MPV",
    image: "/images/avanza.png",
    transmission: "Manual",
    seats: "7 Kursi",
    price: 300000,
    allInPrice: 550000,
    badge: "Paling Populer",
    features: ["Manual", "7 Kursi", "AC Double"],
  },
  {
    name: "Daihatsu Sirion 2016 AT",
    category: "City Car",
    image: "/images/sirion.png",
    transmission: "Automatic",
    seats: "5 Kursi",
    price: 300000,
    allInPrice: 550000,
    badge: "Praktis & Nyaman",
    features: ["Matic", "5 Kursi", "AC Dingin"],
  },
  {
    name: "Innova Reborn Automatic",
    category: "Premium",
    image: "/images/innova.png",
    transmission: "Automatic",
    seats: "7 Kursi",
    price: 600000,
    allInPrice: 850000,
    badge: "VIP Premium",
    features: ["Matic", "7 Kursi", "Kabin Lega"],
  },
  {
    name: "Toyota Hiace Commuter",
    category: "Minibus",
    image: "/images/hiace.png",
    transmission: "Manual",
    seats: "14–16 Kursi",
    price: 1000000,
    allInPrice: 1350000,
    badge: "Wisata & Rombongan",
    features: ["Manual", "Rombongan", "AC Full"],
  },
];

export const FLEET_CATEGORIES = ["Semua", "City Car", "MPV", "Premium", "Minibus"] as const;

export interface DriverOption {
  id: string;
  label: string;
  tag: string;
}

export const DRIVER_OPTIONS: DriverOption[] = [
  { id: "none", label: "Tanpa Driver (Lepas Kunci)", tag: "Tanpa Driver" },
  { id: "city", label: "Driver Dalam Kota (+Rp200.000)", tag: "Driver Dalam Kota" },
  { id: "outOfCity", label: "Driver Luar Kota (+Rp250.000)", tag: "Driver Luar Kota" },
  { id: "allIn", label: "Paket All-in (Include Driver + BBM)", tag: "Include Driver + BBM" },
];

export interface AreaOption {
  id: string;
  label: string;
  tag: string;
}

export const AREA_OPTIONS: AreaOption[] = [
  { id: "surabaya-sidoarjo", label: "Surabaya & Sidoarjo (Dalam Kota)", tag: "Surabaya & Sidoarjo" },
  { id: "luar-daerah", label: "Luar Kota / Luar Daerah", tag: "Luar Daerah" },
];

export const DRIVER_PRICING = {
  city: 200000,
  outOfCity: 250000,
  outOfRegionMin: 50000,
  outOfRegionMax: 100000,
  outOfRegionNote: "Paket All-in tersedia dengan Driver + BBM sesuai rute perjalanan.",
};

export const SERVICES_DATA = [
  {
    title: "Rental Harian",
    description: "Kendaraan praktis untuk agenda personal, keluarga, atau aktivitas bisnis harian.",
    image: "/images/gallery-fleet.png",
    imageAlt: "Visual representatif armada rental harian Rental99",
    points: ["Pilihan unit lepas kunci terawat", "Jadwal fleksibel dikonfirmasi via WhatsApp"],
    iconType: "calendar",
  },
  {
    title: "Rental + Driver",
    description: "Layanan sewa mobil dengan pengemudi profesional untuk perjalanan santai dan bebas lelah.",
    image: "/images/gallery-interior.png",
    imageAlt: "Visual representatif layanan rental mobil dengan driver Rental99",
    points: [
      "Dalam Kota: Rp200.000 / hari",
      "Luar Kota: Rp250.000 / hari",
      "Paket All-in: Include Driver + BBM tersedia",
    ],
    iconType: "user",
  },
  {
    title: "Antar Jemput & Airport",
    description: "Perjalanan terjadwal untuk kebutuhan antar jemput dan transfer bandara Juanda.",
    image: "/images/gallery-airport.png",
    imageAlt: "Visual representatif layanan antar jemput bandara Rental99",
    points: ["Titik jemput on-time terkoordinasi", "Pilihan armada menyesuaikan kapasitas bagasi"],
    iconType: "plane",
  },
  {
    title: "Wisata & Rombongan",
    description: "Pilihan perjalanan untuk keluarga, agenda luar kota, dan rombongan wisata.",
    image: "/images/gallery-journey.png",
    imageAlt: "Visual representatif perjalanan wisata Rental99",
    points: ["Rute dan destinasi dapat dikonsultasikan", "Armada minibus & MPV siap luar kota"],
    iconType: "bus",
  },
];

export const FAQ_DATA = [
  {
    question: "Apakah tersedia rental dengan driver dan BBM?",
    answer: "Ya, Rental99 menyediakan opsi lepas kunci maupun paket lengkap Include Driver + BBM untuk kenyamanan perjalanan tanpa repot.",
  },
  {
    question: "Apakah tersedia rental lepas kunci?",
    answer: "Tersedia untuk pelanggan yang memenuhi persyaratan verifikasi identitas (KTP, SIM A, dan dokumen pendukung). Hubungi WhatsApp kami untuk detail verifikasi.",
  },
  {
    question: "Apakah melayani perjalanan ke luar kota?",
    answer: "Ya, kami melayani perjalanan dinas, wisata, dan keluarga ke berbagai kota di Jawa Timur maupun lintas provinsi dengan tarif transparan.",
  },
  {
    question: "Bagaimana proses booking kendaraan di Rental99?",
    answer: "Sangat mudah: pilih unit kendaraan, tentukan tanggal serta layanan (lepas kunci atau dengan driver), lalu klik tombol WhatsApp untuk konfirmasi instan.",
  },
  {
    question: "Apa saja syarat pemesanan rental mobil?",
    answer: "Untuk sewa dengan driver cukup menyertakan identitas dan jadwal. Untuk lepas kunci diperlukan verifikasi KTP, SIM A, serta deposit jaminan.",
  },
  {
    question: "Bagaimana metode pembayarannya?",
    answer: "Pembayaran dapat dilakukan melalui transfer bank resmi atau tunai setelah kesepakatan pemesanan dikonfirmasi oleh admin Rental99.",
  },
];

export const COVERAGE_PINS = [
  { name: "Surabaya", left: "68%", top: "32%" },
  { name: "Sidoarjo", left: "73%", top: "63%" },
  { name: "Juanda", left: "83%", top: "48%" },
  { name: "Gresik", left: "53%", top: "18%" },
  { name: "Mojokerto", left: "46%", top: "65%" },
  { name: "Pasuruan", left: "58%", top: "79%" },
];

export const EXPERIENCE_ITEMS = [
  {
    title: "Armada Bersih & Terawat",
    description: "Setiap kendaraan melalui inspeksi berkala dan pembersihan menyeluruh sebelum diserahkan.",
    iconType: "shield",
  },
  {
    title: "Proses Booking Cepat 5 Menit",
    description: "Konsultasi dan konfirmasi unit langsung via WhatsApp dengan respon cepat dan ramah.",
    iconType: "clipboard",
  },
  {
    title: "Harga Jujur & Transparan",
    description: "Tarif jelas tanpa biaya siluman. Pilihan lepas kunci maupun Include Driver + BBM tercantum transparan.",
    iconType: "check",
  },
  {
    title: "Driver Berpengalaman & Ramah",
    description: "Pengemudi profesional, paham rute jalan, dan mengutamakan keselamatan serta kenyamanan Anda.",
    iconType: "chat",
  },
];

export const BOOKING_STEPS = [
  {
    step: 1,
    title: "Pilih Unit",
    description: "Tentukan jenis mobil sesuai kebutuhan perjalanan Anda.",
    iconType: "car",
  },
  {
    step: 2,
    title: "Kirim Jadwal & Rute",
    description: "Sampaikan tanggal sewa, tujuan, dan opsi driver via WhatsApp.",
    iconType: "calendar",
  },
  {
    step: 3,
    title: "Konfirmasi Ketersediaan",
    description: "Admin kami segera memverifikasi ketersediaan armada dalam hitungan menit.",
    iconType: "clipboard",
  },
  {
    step: 4,
    title: "Mobil Siap Jalan",
    description: "Armada siap diantarkan atau dijemput sesuai jadwal keberangkatan.",
    iconType: "check",
  },
];

export const BRAND_NAME = "Rental99";
export const PHONE_NUMBER = "085655221633";
export const EMAIL_ADDRESS = "info@rental99.id";
export const ADDRESS_TEXT = "Jl. Raya Jaretan, Perum Sun Garden Blok A5/02, Urangagung, Sumberejo, Sidoarjo, Jawa Timur";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/o8b3UyufouA529XU7";

export function whatsappUrl(message?: string): string {
  const defaultMsg = "Halo Rental99, saya melihat dari website dan ingin menanyakan ketersediaan rental mobil.";
  const text = message || defaultMsg;
  const rawPhone = PHONE_NUMBER.replace(/\D/g, "");
  const phone = rawPhone.startsWith("0") ? `62${rawPhone.slice(1)}` : rawPhone;
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : "#kontak";
}
