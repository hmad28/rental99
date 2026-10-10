export interface Car {
  name: string;
  category: "MPV" | "SUV" | "City Car" | "Luxury" | "Minibus & Bus";
  image: string;
  transmission: "Matic" | "Manual" | "Matic / Manual";
  seats: string;
  price: number; // 0 for price by WhatsApp
  priceLabel: string;
  badge?: string;
  includes: string;
  features: string[];
}

export const FLEET_DATA: Car[] = [
  {
    name: "Toyota Innova Reborn",
    category: "MPV",
    image: "/images/fleet/innova-reborn.png",
    transmission: "Matic",
    seats: "7 Kursi",
    price: 850000,
    priceLabel: "Rp 850.000 / Hari",
    badge: "Favorit Wisata",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Matic", "7 Kursi", "AC Double Blower"],
  },
  {
    name: "Toyota Alphard",
    category: "Luxury",
    image: "/images/fleet/alphard.png",
    transmission: "Matic",
    seats: "7 Kursi (Captain Seat)",
    price: 3300000,
    priceLabel: "Rp 3.300.000 / Hari",
    badge: "VIP & Luxury",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Matic", "Captain Seat", "Luxury Interior"],
  },
  {
    name: "Toyota Avanza",
    category: "MPV",
    image: "/images/fleet/avanza.png",
    transmission: "Matic",
    seats: "7 Kursi",
    price: 650000,
    priceLabel: "Rp 650.000 / Hari",
    badge: "Paling Populer",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Matic", "7 Kursi", "AC Dingin"],
  },
  {
    name: "Toyota Fortuner",
    category: "SUV",
    image: "/images/fleet/fortuner.png",
    transmission: "Matic",
    seats: "7 Kursi",
    price: 1400000,
    priceLabel: "Rp 1.400.000 / Hari",
    badge: "SUV Gagah",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Matic", "7 Kursi", "Tangguh Semua Medan"],
  },
  {
    name: "Toyota Hiace Commuter",
    category: "Minibus & Bus",
    image: "/images/fleet/hiace-commuter.png",
    transmission: "Manual",
    seats: "15 Kursi",
    price: 1200000,
    priceLabel: "Rp 1.200.000 / Hari",
    badge: "Rombongan Nyaman",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Manual", "15 Kursi", "Kabin Luas"],
  },
  {
    name: "Toyota Hiace Premio",
    category: "Minibus & Bus",
    image: "/images/fleet/hiace-premio.png",
    transmission: "Manual",
    seats: "12–14 Kursi",
    price: 1450000,
    priceLabel: "Rp 1.450.000 / Hari",
    badge: "Executive Van",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Manual", "12-14 Kursi", "Suspensi Mewah"],
  },
  {
    name: "Mitsubishi Pajero Sport",
    category: "SUV",
    image: "/images/fleet/pajero-sport.png",
    transmission: "Matic",
    seats: "7 Kursi",
    price: 1550000,
    priceLabel: "Rp 1.550.000 / Hari",
    badge: "Premium SUV",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Matic", "7 Kursi", "Kenyamanan Maksimal"],
  },
  {
    name: "Honda Brio",
    category: "City Car",
    image: "/images/fleet/brio.png",
    transmission: "Matic",
    seats: "5 Kursi",
    price: 550000,
    priceLabel: "Rp 550.000 / Hari",
    badge: "City Car Lincah",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Matic", "5 Kursi", "Hemat & Nyaman"],
  },
  {
    name: "Toyota Agya",
    category: "City Car",
    image: "/images/fleet/agya.png",
    transmission: "Matic",
    seats: "5 Kursi",
    price: 500000,
    priceLabel: "Rp 500.000 / Hari",
    badge: "Paling Hemat",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Matic", "5 Kursi", "Praktis & Irit"],
  },
  {
    name: "Isuzu Elf Long",
    category: "Minibus & Bus",
    image: "/images/fleet/isuzu-elf.png",
    transmission: "Manual",
    seats: "17–19 Kursi",
    price: 1300000,
    priceLabel: "Rp 1.300.000 / Hari",
    badge: "Kapasitas Besar",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Manual", "19 Kursi", "AC Ducting Full"],
  },
  {
    name: "Medium Bus Pariwisata",
    category: "Minibus & Bus",
    image: "/images/fleet/medium-bus.png",
    transmission: "Manual",
    seats: "30–35 Kursi",
    price: 0,
    priceLabel: "Order by WhatsApp",
    badge: "Bus Pariwisata",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Manual", "35 Kursi", "Karaoke & Bagasi Besar"],
  },
  {
    name: "Big Bus Pariwisata",
    category: "Minibus & Bus",
    image: "/images/fleet/big-bus.png",
    transmission: "Manual",
    seats: "45–50 Kursi",
    price: 0,
    priceLabel: "Order by WhatsApp",
    badge: "Pariwisata Besar",
    includes: "Include Driver + BBM + Air Mineral",
    features: ["Manual", "50 Kursi", "Full AC & Fasilitas Tour"],
  },
];

export const FLEET_CATEGORIES = [
  "Semua",
  "MPV",
  "SUV",
  "City Car",
  "Luxury",
  "Minibus & Bus",
] as const;

export interface ClientLogo {
  name: string;
  logo: string;
  category?: string;
}

export const CLIENTS_DATA: ClientLogo[] = [
  { name: "MS Glow For Men", logo: "/images/clients/ms-glow-men.png" },
  { name: "DANA Indonesia", logo: "/images/clients/dana.webp" },
  { name: "BRIN (Badan Riset & Inovasi Nasional)", logo: "/images/clients/brin.svg" },
  { name: "J99 Corp.", logo: "/images/clients/j99-corp.png" },
  { name: "Traveloka", logo: "/images/clients/traveloka.webp" },
  { name: "Bank Mandiri", logo: "/images/clients/mandiri.png" },
  { name: "Bank Indonesia", logo: "/images/clients/bank-indonesia.png" },
  { name: "Kementerian Imigrasi & Pemasyarakatan", logo: "/images/clients/kemenimipas.png" },
  { name: "Aston International", logo: "/images/clients/aston.png" },
  { name: "Ferrari Owners' Club Indonesia", logo: "/images/clients/foc-indonesia.png" },
  { name: "BNPB Indonesia", logo: "/images/clients/bnpb.png" },
  { name: "Telkom Indonesia", logo: "/images/clients/telkom.png" },
  { name: "McLaren Club Indonesia", logo: "/images/clients/mclaren-club.png" },
];

export interface TourPackage {
  id: string;
  title: string;
  tag: string;
  duration: string;
  destinations: string[];
  facilities: string[];
  image: string;
}

export const TOUR_PACKAGES_DATA: TourPackage[] = [
  {
    id: "sasak-mandalika",
    title: "Sasak Traditional & Mandalika Tour",
    tag: "Paling Populer",
    duration: "1 Hari (Full Day)",
    image: "/images/gallery-journey.png",
    destinations: [
      "Desa Sukarara (Sentra Tenun Songket Khas Lombok)",
      "Desa Sade / Ende (Perkampungan Adat Suku Sasak)",
      "Pantai Kuta Mandalika & Kawasan Sirkuit MotoGP",
      "Bukit Merese (Spot Sunset Panorama Laut Terbaik)",
      "Pantai Tanjung Aan & Bukit Merese",
    ],
    facilities: [
      "Mobil Ber-AC Nyaman & Terawat",
      "Driver Ramah sebagai Local Guide",
      "BBM & Tiket Masuk Seluruh Destinasi",
      "Air Mineral Dingin selama Tour",
    ],
  },
  {
    id: "gili-snorkeling",
    title: "Gili Trawangan 3 Island Snorkeling Tour",
    tag: "Best Seller",
    duration: "1 Hari (Full Day)",
    image: "/images/gallery-fleet.png",
    destinations: [
      "Pelabuhan Teluk Nare / Bangsal",
      "Snorkeling Patung Bawah Air Gili Meno",
      "Snorkeling Penyu & Turtle Point Gili Trawangan",
      "Feeding Fish & Terumbu Karang Gili Air",
      "Sunset Panorama di Bukit Malimbu",
    ],
    facilities: [
      "Antar-Jemput Hotel / Bandara BIZAM",
      "Private Glass Bottom Boat",
      "Snorkeling Gear & Dokumentasi GoPro",
      "Driver + BBM + Air Mineral",
    ],
  },
  {
    id: "sembalun-rinjani",
    title: "Sembalun Highland & Air Terjun Rinjani",
    tag: "Favorite Nature",
    duration: "1 Hari (Full Day)",
    image: "/images/gallery-interior.png",
    destinations: [
      "Bukit Selong (Panorama Petak Sawah Berwarna)",
      "Desa Adat Beleq Sembalun",
      "Wisata Petik Stroberi & Pusuk Pas Sembalun",
      "Air Terjun Sendang Gile & Tiu Kelep Kaki Rinjani",
      "Taman Hutan Monyet Baun Pusuk",
    ],
    facilities: [
      "Mobil Nyaman untuk Rute Pegunungan",
      "Driver Berpengalaman Rute Rinjani",
      "BBM & Tiket Masuk Objek Wisata",
      "Local Guide Air Terjun & Air Mineral",
    ],
  },
];

export interface DriverOption {
  id: string;
  label: string;
  tag: string;
}

export const DRIVER_OPTIONS: DriverOption[] = [
  { id: "allIn", label: "Include Driver + BBM + Air Mineral", tag: "Include Driver + BBM + Air Mineral" },
  { id: "driverOnly", label: "Driver Saja (Tanpa BBM)", tag: "Driver Saja" },
  { id: "custom", label: "Custom Tour / Paket Wisata", tag: "Paket Tour" },
];

export interface AreaOption {
  id: string;
  label: string;
  tag: string;
}

export const AREA_OPTIONS: AreaOption[] = [
  { id: "bizam", label: "BIZAM Lombok (Bandara Internasional)", tag: "BIZAM Lombok" },
  { id: "mataram", label: "Mataram & Kota", tag: "Mataram" },
  { id: "senggigi", label: "Senggigi & Lombok Barat", tag: "Senggigi" },
  { id: "mandalika", label: "Kuta Mandalika (Lombok Tengah)", tag: "Mandalika" },
  { id: "gili", label: "Pelabuhan Bangsal / Gili Trawangan", tag: "Bangsal / Gili" },
  { id: "sembalun", label: "Sembalun & Rinjani (Lombok Timur)", tag: "Sembalun" },
  { id: "luar-daerah", label: "Luar Daerah (Sumbawa / Bima)", tag: "Luar Daerah" },
];

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconType: "compass" | "palmtree" | "plane" | "map";
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "city-tour",
    title: "Layanan City Tour",
    subtitle: "Keliling destinasi kota Mataram, budaya, kuliner, dan pantai.",
    iconType: "compass",
  },
  {
    id: "sasak-gili",
    title: "Layanan Sasak Tour & Gili",
    subtitle: "Eksplorasi Desa Adat Sade, Sirkuit Mandalika & island hopping 3 Gili.",
    iconType: "palmtree",
  },
  {
    id: "airport-harbor",
    title: "Bandara & Pelabuhan",
    subtitle: "Antar-jemput on-time Bandara BIZAM, Pelabuhan Lembar & Bangsal.",
    iconType: "plane",
  },
  {
    id: "luar-daerah",
    title: "Permintaan ke Luar Daerah/Kota",
    subtitle: "Perjalanan dinas & wisata lintas pulau ke Sumbawa, Bima, dan sekitarnya.",
    iconType: "map",
  },
];

export const FAQ_DATA = [
  {
    question: "Apakah tarif rental sudah termasuk Driver dan BBM?",
    answer: "Ya, seluruh armada Rental99 sudah termasuk Driver profesional, BBM, dan Air Mineral gratis selama perjalanan. Anda tinggal duduk santai menikmati perjalanan di Lombok.",
  },
  {
    question: "Apakah melayani penjemputan langsung di Bandara BIZAM Lombok?",
    answer: "Tentu saja. BIZAM (Bandara Internasional Zainuddin Abdul Madjid) adalah area layanan utama kami. Driver kami akan standby menyambut kedatangan Anda tepat waktu.",
  },
  {
    question: "Bagaimana cara pemesanan Big Bus atau Medium Bus?",
    answer: "Untuk armada Medium Bus (30-35 seat) dan Big Bus (45-50 seat), pemesanan dan penawaran harga khusus dapat langsung dikonsultasikan melalui WhatsApp kami sesuai durasi dan rute perjalanan.",
  },
  {
    question: "Apakah tersedia paket tour kustom (custom itinerary)?",
    answer: "Sangat bisa. Anda dapat mengkombinasikan destinasi sesuai keinginan, misalnya Sasak Tour + Sunset Mandalika, atau Snorkeling 3 Gili + Sembalun.",
  },
  {
    question: "Apakah melayani perjalanan luar daerah seperti Sumbawa?",
    answer: "Ya, kami melayani perjalanan dinas maupun wisata lintas daerah ke Pulau Sumbawa, Bima, dan sekitarnya dengan konfirmasi jadwal terlebih dahulu.",
  },
  {
    question: "Bagaimana proses pembayaran booking di Rental99?",
    answer: "Pemesanan dapat didiskusikan terlebih dahulu melalui WhatsApp. Setelah draft jadwal dan armada disepakati, pembayaran dapat diselesaikan dengan aman.",
  },
];

export const EXPERIENCE_ITEMS = [
  {
    title: "Include Driver + BBM + Mineral",
    description: "Seluruh perjalanan sudah lengkap dengan driver berpengalaman, bahan bakar, dan air mineral dingin.",
    iconType: "shield",
  },
  {
    title: "Terpercaya Sejak 2012",
    description: "Berpengalaman lebih dari 12 tahun melayani ribuan wisatawan, instansi BUMN, kementerian, dan korporasi.",
    iconType: "clock",
  },
  {
    title: "Standby di BIZAM Lombok",
    description: "Titik temu utama di Bandara Internasional Lombok dengan penjemputan tepat waktu dan ramah.",
    iconType: "headset",
  },
  {
    title: "Armada Lengkap & Terawat",
    description: "Tersedia 12 pilihan unit dari City Car, MPV, SUV, Luxury Alphard, hingga Bus Pariwisata berkapasitas besar.",
    iconType: "car",
  },
];

export interface BookingStep {
  step: string;
  title: string;
  description: string;
  iconType: "car" | "calendar" | "clipboard" | "check";
}

export const BOOKING_STEPS: BookingStep[] = [
  {
    step: "01",
    title: "Pilih Armada / Paket Tour",
    description: "Tentukan jenis kendaraan (12 pilihan unit) atau paket wisata Lombok yang Anda butuhkan.",
    iconType: "car",
  },
  {
    step: "02",
    title: "Tentukan Jadwal & Rute",
    description: "Informasikan tanggal kedatangan di BIZAM Lombok serta rencana tujuan perjalanan Anda.",
    iconType: "calendar",
  },
  {
    step: "03",
    title: "Konfirmasi via WhatsApp",
    description: "Admin Rental99 akan memberikan konfirmasi ketersediaan armada dan penawaran terbaik secara instan.",
    iconType: "clipboard",
  },
  {
    step: "04",
    title: "Jemput On-Time & Nikmati Perjalanan",
    description: "Driver kami siap menyambut kedatangan Anda di BIZAM atau hotel untuk perjalanan yang berkesan.",
    iconType: "check",
  },
];

export const TRUST_STRIP_ITEMS = [
  { title: "Include Driver + BBM", subtitle: "Plus Air Mineral Gratis" },
  { title: "Sejak Tahun 2012", subtitle: "Transportasi Terpercaya" },
  { title: "Area Utama BIZAM", subtitle: "Standby Bandara Lombok" },
  { title: "12 Pilihan Armada", subtitle: "City Car hingga Big Bus" },
];

export const BRAND_INFO = {
  name: "Rental99",
  tagline: "Transport Service & Tours",
  established: "2012",
  claim: "Transportasi terpercaya sejak tahun 2012",
  phone: "085655221633",
  whatsapp: "6285655221633",
  email: "info@rental99.id",
  address: "Area Bandara Internasional Lombok (BIZAM), Praya, Lombok Tengah, NTB",
  logoUrl: "/images/rental99-logo.png",
  iconUrl: "/images/rental99-icon.png",
};

export const PHONE_NUMBER = BRAND_INFO.phone;
export const EMAIL_ADDRESS = BRAND_INFO.email;
export const ADDRESS_TEXT = BRAND_INFO.address;
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Bandara+Internasional+Lombok+BIZAM";

export function whatsappUrl(customText?: string) {
  const defaultText = `Halo Rental99 Transport Service & Tours, saya ingin konsultasi sewa armada / paket tour di Lombok.`;
  const text = encodeURIComponent(customText || defaultText);
  return `https://wa.me/6285655221633?text=${text}`;
}
