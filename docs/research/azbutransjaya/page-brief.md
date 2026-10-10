# azbutransjaya.com Page Brief & Asset Map

## Target Information
- **Source URL**: https://www.azbutransjaya.com/
- **Brand Name**: Azbu Trans Jaya (PT Azbu Trans Jaya)
- **Industry**: Rental Mobil (Car Rental) Surabaya & Sidoarjo
- **Contact**: 085655221633 (WhatsApp & Phone)
- **Email**: azbutransjaya.com@gmail.com
- **Address**: Jl. Raya Jaretan, Perum Sun Garden Blok A5/02, Urangagung, Sumberejo, Sidoarjo, Jawa Timur

## Design Tokens & Palette
- `--background`: `#faf7f2` (warm cream)
- `--surface`: `#fffdf9` (light card background)
- `--foreground`: `#151515` (deep charcoal)
- `--primary`: `#c9272c` (brand red)
- `--primary-dark`: `#a71f24` (hover red)
- `--muted`: `#666666` (secondary text)
- `--border`: `#eae2d8` (warm neutral border)
- `--light-red`: `#fbe9e8` (soft red tint / gradient)
- `--header-height`: `72px` (desktop), `62px` (mobile)

## Typography
- Primary Font: **Plus Jakarta Sans** (weights: 500, 600, 700, 800)

## Asset Mapping
All source images downloaded locally to `public/images/` and `public/sites/azbutransjaya/`:
- Brand Logo: `/images/azbu-logo.png`
- Hero Fleet: `/images/hero-fleet-final.png`
- Mobile Hero BG: `/images/hero-bg-surabaya-mobile.png`
- Hero City Ribbon: `/images/hero-city-ribbon.png`
- Featured Stage: `/images/featured-stage.png`
- Featured Car: `/images/innova-dark.png`
- Map Coverage: `/images/service-map-v2.png`
- Fleet Cars:
  - Sigra: `/images/sigra.png`
  - XL7: `/images/xl7.png`
  - Xenia: `/images/xenia.png`
  - Ayla: `/images/ayla.png`
  - Avanza: `/images/avanza.png`
  - Sirion: `/images/sirion.png`
  - Innova: `/images/innova.png`
  - Hiace: `/images/hiace.png`
- Service Gallery:
  - Rental Harian: `/images/gallery-fleet.png`
  - Rental + Driver: `/images/gallery-interior.png`
  - Airport Transfer: `/images/gallery-airport.png`
  - Wisata / Rombongan: `/images/gallery-journey.png`

## Page Sections & Interactions
1. **Header / Navbar (`site-header`)**:
   - Sticky header with backdrop blur.
   - Brand logo.
   - Navigation links with scroll spy: `#beranda`, `#armada`, `#layanan`, `#tentang`, `#kontak`.
   - "Booking Sekarang" WhatsApp CTA button.
   - Mobile hamburger menu toggle with collapsible drawer.

2. **Hero Section (`hero-section`)**:
   - Desktop: 2-column layout (copy + trust chips on left, hero fleet visual on right).
   - Mobile: dedicated mobile hero container with Surabaya skyline background, bold heading, primary/secondary action buttons, trust chips, and perspective red road glow showcase.

3. **Quick Booking Panel (`quick-booking-wrap`)**:
   - Floating interactive booking card overlapping hero bottom.
   - 3 interactive custom dropdowns:
     - Vehicle selector (8 fleet options with price badges and check icon).
     - Driver service selector (`Tanpa Driver`, `Driver Dalam Kota`, `Driver Luar Kota`, `Driver Luar Daerah`).
     - Area / destination selector (`Surabaya & Sidoarjo`, `Luar Kota / Luar Daerah`).
   - "Cek Ketersediaan" button dynamically generating customized WhatsApp message URL.
   - Driver rate disclaimer pill.

4. **Trust Strip (`trust-strip-wrap`)**:
   - Dark luxury pill container with 4 value propositions.

5. **Fleet Catalog (`fleet-section`)**:
   - Category filter tabs: `Semua (8)`, `City Car (3)`, `MPV (3)`, `Premium (1)`, `Minibus (1)`.
   - Responsive grid of fleet cards with specs (transmission, capacity), price badge, driver addon tag, and direct booking CTA.

6. **Services Section (`services-section`)**:
   - 4 service cards with imagery, icons, descriptions, and feature bullet lists.

7. **Featured Armada (`featured-section`)**:
   - Dark stage showcasing Innova Reborn CVT with gradient lighting, masked image, 4 spec cards, and inquiry CTA.

8. **Coverage Area (`coverage-section`)**:
   - Service map with 6 geographical location pins: Surabaya, Sidoarjo, Juanda, Gresik, Mojokerto, Pasuruan.
   - Area checklist and contact button.

9. **Why Choose Us (`experience-section`)**:
   - 4 core benefits with icons.

10. **How to Rent (`booking-flow-section`)**:
    - 4 clear chronological steps with number badges.

11. **FAQ Section (`faq-section`)**:
    - Smooth interactive accordion answering top 6 questions.

12. **Final CTA Banner (`cta-section`)**:
    - High-impact banner with WhatsApp booking action and fleet image.

13. **Footer (`site-footer`)**:
    - Complete company information, quick links, direct Google Maps link, phone, email, copyright.
