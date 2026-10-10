"use client";

import Image from "next/image";
import { CarFront, MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { whatsappUrl } from "./constants";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animFadeUp = !shouldReduceMotion
    ? {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  const animVisual = !shouldReduceMotion
    ? {
        initial: { opacity: 0, x: 28, scale: 0.98 },
        animate: { opacity: 1, x: 0, scale: 1 },
        transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  return (
    <section id="beranda" className="hero-section">
      {/* Mobile Hero View */}
      <div className="mobile-hero-container">
        <div className="mobile-hero-bg-layer" aria-hidden="true">
          <Image
            src="/images/hero-bg-surabaya-mobile.png"
            alt="Surabaya Landmark Background"
            fill
            sizes="100vw"
            priority
            className="mobile-hero-bg-img"
          />
          <div className="mobile-hero-gradient-scrim" />
        </div>

        <div className="mobile-hero-content">
          <p className="mobile-hero-eyebrow">Rental Mobil Surabaya &amp; Sidoarjo</p>
          <div className="mobile-hero-title" role="heading" aria-level={1}>
            Rental Mobil
            <br />
            <span>
              Surabaya &amp;
              <br />
              Sidoarjo
            </span>
          </div>
          <p className="mobile-hero-desc">
            Armada terawat untuk perjalanan harian, airport, wisata, dan kebutuhan keluarga.
          </p>
          <div className="mobile-hero-actions">
            <a href="#armada" className="button-link button-primary mobile-hero-btn-primary">
              <CarFront size={18} />
              <span>Lihat Armada</span>
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="button-link button-secondary mobile-hero-btn-secondary"
            >
              <MessageCircle size={18} />
              <span>Booking via WhatsApp</span>
            </a>
          </div>

          <div className="mobile-hero-trust-chips">
            <span className="mobile-trust-chip">
              <ShieldCheck size={13} className="mobile-trust-icon" />
              Armada Terawat
            </span>
            <span className="mobile-trust-chip">
              <CarFront size={13} className="mobile-trust-icon" />
              Pilihan Lengkap
            </span>
            <span className="mobile-trust-chip">
              <MapPin size={13} className="mobile-trust-icon" />
              Siap Surabaya &amp; Sidoarjo
            </span>
          </div>
        </div>

        <div className="mobile-hero-showcase">
          <div className="mobile-hero-red-road" aria-hidden="true">
            <div className="mobile-hero-road-glow" />
            <div className="mobile-hero-road-surface" />
          </div>
          <div className="mobile-hero-fleet-wrap">
            <Image
              src="/images/hero-fleet-final.png"
              alt="Toyota Innova Reborn, Suzuki XL7, dan Toyota Hiace Azbu Trans Jaya"
              fill
              sizes="(max-width: 767px) 120vw, 50vw"
              priority
              className="mobile-hero-fleet-img"
            />
          </div>
        </div>
      </div>

      {/* Desktop Hero View */}
      <div className="container-page hero-grid desktop-hero-grid">
        <motion.div className="hero-copy" {...animFadeUp}>
          <p className="hero-eyebrow">Rental Mobil Surabaya &amp; Sidoarjo</p>
          <h1>
            Rental Mobil
            <span>Surabaya &amp; Sidoarjo</span>
          </h1>
          <p className="hero-description">
            Perjalanan nyaman, aman, dan menyenangkan dengan armada terawat dan pelayanan profesional.
          </p>

          <div className="hero-actions">
            <a href="#armada" className="button-link button-primary">
              <CarFront size={18} />
              <span>Lihat Armada</span>
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="button-link button-secondary"
            >
              <MessageCircle size={18} />
              <span>Booking via WhatsApp</span>
            </a>
          </div>

          <div className="hero-trust">
            <span>
              <ShieldCheck size={16} />
              Armada Terawat
            </span>
            <span>
              <CarFront size={16} />
              Pilihan Mobil Lengkap
            </span>
            <span>
              <MapPin size={16} />
              Siap Surabaya &amp; Sidoarjo
            </span>
          </div>
        </motion.div>

        <motion.div className="hero-visual" {...animVisual}>
          <Image
            src="/images/hero-fleet-final.png"
            alt="Toyota Innova Reborn, Suzuki XL7, dan Toyota Hiace"
            fill
            sizes="(max-width: 767px) 100vw, 58vw"
            priority
            className="hero-fleet-image"
          />
        </motion.div>
      </div>
    </section>
  );
}
