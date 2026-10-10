export interface Car {
  name: string;
  category: "City Car" | "MPV" | "Premium" | "Minibus";
  image: string;
  transmission: "Automatic" | "Manual";
  seats: string;
  price: number;
}

export const FLEET_DATA: Car[] = [
  {
    name: "Daihatsu Sigra R AT",
    category: "City Car",
    image: "/images/sigra.png",
    transmission: "Automatic",
    seats: "5–7 Seat",
    price: 325000,
  },
  {
    name: "Suzuki XL7 AT",
    category: "MPV",
    image: "/images/xl7.png",
    transmission: "Automatic",
    seats: "7 Seat",
    price: 400000,
  },
  {
    name: "Daihatsu Xenia 2018 Manual",
    category: "MPV",
    image: "/images/xenia.png",
    transmission: "Manual",
    seats: "7 Seat",
    price: 275000,
  },
  {
    name: "Daihatsu Ayla AT",
    category: "City Car",
    image: "/images/ayla.png",
    transmission: "Automatic",
    seats: "5 Seat",
    price: 275000,
  },
  {
    name: "Avanza Manual",
    category: "MPV",
    image: "/images/avanza.png",
    transmission: "Manual",
    seats: "7 Seat",
    price: 300000,
  },
  {
    name: "Daihatsu Sirion 2016 AT",
    category: "City Car",
    image: "/images/sirion.png",
    transmission: "Automatic",
    seats: "5 Seat",
    price: 300000,
  },
  {
    name: "Innova Reborn Automatic",
    category: "Premium",
    image: "/images/innova.png",
    transmission: "Automatic",
    seats: "7 Seat",
    price: 600000,
  },
  {
    name: "Hiace",
    category: "Minibus",
    image: "/images/hiace.png",
    transmission: "Manual",
    seats: "Rombongan",
    price: 1000000,
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
  { id: "outOfRegion", label: "Driver Luar Daerah (+Rp50rb–100rb, menyesuaikan tujuan)", tag: "Driver Luar Daerah" },
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
  outOfRegionNote: "Tambahan Rp50.000–Rp100.000, menyesuaikan tujuan.",
};

export const SERVICES_DATA = [
  {
    title: "Rental Harian",
    description: "Kendaraan praktis untuk agenda personal, keluarga, atau aktivitas bisnis harian.",
    image: "/images/gallery-fleet.png",
    imageAlt: "Visual representatif armada rental harian",
    points: ["Pilihan unit sesuai kebutuhan", "Jadwal dikonfirmasi via WhatsApp"],
    iconType: "calendar",
  },
  {
    title: "Rental + Driver",
    description: "Layanan sewa mobil dengan pengemudi profesional untuk perjalanan santai dan bebas lelah.",
    image: "/images/gallery-interior.png",
    imageAlt: "Visual representatif layanan rental mobil dengan driver",
    points: [
      "Dalam Kota: Rp200.000 / hari",
      "Luar Kota: Rp250.000 / hari",
      "Luar Daerah: +Rp50.000–Rp100.000 (sesuai tujuan)",
    ],
    iconType: "user",
  },
  {
    title: "Antar Jemput & Airport",
    description: "Perjalanan terjadwal untuk kebutuhan antar jemput dan transfer bandara.",
    image: "/images/gallery-airport.png",
    imageAlt: "Visual representatif layanan antar jemput bandara",
    points: ["Detail titik jemput terkoordinasi", "Pilihan kendaraan menyesuaikan penumpang"],
    iconType: "plane",
  },
  {
    title: "Wisata & Rombongan",
    description: "Pilihan perjalanan untuk keluarga, agenda luar kota, dan rombongan.",
    image: "/images/gallery-journey.png",
    imageAlt: "Visual representatif perjalanan wisata dan luar kota",
    points: ["Tujuan dikonsultasikan terlebih dahulu", "Armada dipilih sesuai kebutuhan"],
    iconType: "bus",
  },
];

export const FAQ_DATA = [
  {
    question: "Apakah tersedia rental dengan driver?",
    answer: "Ketersediaan layanan dengan driver perlu dikonfirmasi melalui WhatsApp sesuai jadwal dan kebutuhan perjalanan.",
  },
  {
    question: "Apakah tersedia rental lepas kunci?",
    answer: "Kebijakan rental lepas kunci belum ditetapkan pada situs. Silakan hubungi Azbu Trans Jaya untuk informasi terbaru.",
  },
  {
    question: "Apakah melayani perjalanan luar kota?",
    answer: "Tujuan perjalanan dan ketersediaan kendaraan perlu dikonsultasikan terlebih dahulu melalui WhatsApp.",
  },
  {
    question: "Bagaimana proses booking kendaraan?",
    answer: "Pilih armada, hubungi kami, konfirmasi jadwal serta detail perjalanan, lalu tunggu konfirmasi pemesanan.",
  },
  {
    question: "Apa saja syarat pemesanan?",
    answer: "Persyaratan menyesuaikan jenis layanan dan kendaraan. Detail lengkap akan disampaikan saat konsultasi.",
  },
  {
    question: "Bagaimana metode pembayarannya?",
    answer: "Metode dan tahapan pembayaran perlu dikonfirmasi langsung karena informasi kebijakan belum tersedia pada situs.",
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
    description: "Kondisi dan kebersihan kendaraan dipersiapkan sebelum jadwal keberangkatan.",
    iconType: "shield",
  },
  {
    title: "Proses Booking Praktis",
    description: "Sampaikan unit, tanggal, dan tujuan agar ketersediaan dapat segera dikonfirmasi.",
    iconType: "clipboard",
  },
  {
    title: "Harga Transparan",
    description: "Harga mulai ditampilkan di katalog dan detail akhir dikonfirmasi sesuai kebutuhan perjalanan.",
    iconType: "check",
  },
  {
    title: "Konsultasi via WhatsApp",
    description: "Diskusikan kebutuhan perjalanan langsung bersama tim Azbu Trans Jaya.",
    iconType: "chat",
  },
];

export const BOOKING_STEPS = [
  {
    step: 1,
    title: "Pilih Unit",
    description: "Pilih armada sesuai kebutuhan Anda.",
    iconType: "car",
  },
  {
    step: 2,
    title: "Kirim Tanggal & Tujuan",
    description: "Kirim rencana perjalanan melalui WhatsApp.",
    iconType: "calendar",
  },
  {
    step: 3,
    title: "Konfirmasi Ketersediaan",
    description: "Kami cek unit dan detail perjalanan.",
    iconType: "clipboard",
  },
  {
    step: 4,
    title: "Mobil Siap",
    description: "Detail selesai, perjalanan siap dilakukan.",
    iconType: "check",
  },
];

export const PHONE_NUMBER = "085655221633";
export const EMAIL_ADDRESS = "azbutransjaya.com@gmail.com";
export const ADDRESS_TEXT = "Jl. Raya Jaretan, Perum Sun Garden Blok A5/02, Urangagung, Sumberejo, Sidoarjo, Jawa Timur";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/o8b3UyufouA529XU7";

export function whatsappUrl(message?: string): string {
  const defaultMsg = "Halo Azbu Trans Jaya, saya melihat dari website dan ingin menanyakan ketersediaan rental mobil.";
  const text = message || defaultMsg;
  const rawPhone = PHONE_NUMBER.replace(/\D/g, "");
  const phone = rawPhone.startsWith("0") ? `62${rawPhone.slice(1)}` : rawPhone;
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : "#kontak";
}
