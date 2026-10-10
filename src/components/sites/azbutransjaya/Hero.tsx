"use client";

import Image from "next/image";
import { CarFront, MessageCircle, ShieldCheck, MapPin, Award } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { whatsappUrl } from "./constants";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animFadeUp = !shouldReduceMotion
    ? {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  const animVisual = !shouldReduceMotion
    ? {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  return (
    <section id="beranda" className="hero-section">
      {/* Mobile Hero View */}
      <div className="mobile-hero-container">
        <div className="mobile-hero-bg-layer" aria-hidden="true">
          <Image
            src="/images/drivemate/city-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="mobile-hero-bg-img opacity-20"
          />
        </div>

        <div className="mobile-hero-content">
          <p className="mobile-hero-eyebrow">Transport Service &amp; Tours • BIZAM Lombok</p>
          <div className="mobile-hero-title" role="heading" aria-level={1}>
            Rental Mobil &amp; Tour
            <br />
            <span>Lombok BIZAM</span>
          </div>
          <p className="mobile-hero-desc">
            Transportasi terpercaya sejak tahun 2012. 12 armada prima lengkap <strong>Include Driver + BBM + Mineral</strong>.
          </p>

          <div className="mobile-hero-actions">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="button-link button-primary mobile-hero-btn-primary"
            >
              <MessageCircle size={18} />
              <span>Booking via WhatsApp</span>
            </a>
            <a href="#armada" className="button-link button-secondary mobile-hero-btn-secondary">
              <CarFront size={18} />
              <span>Lihat Armada</span>
            </a>
          </div>

          <div className="mobile-hero-trust-chips">
            <span className="mobile-trust-chip">
              <ShieldCheck size={13} className="mobile-trust-icon" />
              Include Driver + BBM
            </span>
            <span className="mobile-trust-chip">
              <Award size={13} className="mobile-trust-icon" />
              Sejak Tahun 2012
            </span>
            <span className="mobile-trust-chip">
              <MapPin size={13} className="mobile-trust-icon" />
              Standby BIZAM
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
              alt="Armada Rental99 Lombok"
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
          <p className="hero-eyebrow">Rental99 • Transport Service &amp; Tours</p>
          <h1>
            Rental Mobil &amp; Tour
            <span>BIZAM Lombok</span>
          </h1>
          <p className="hero-description">
            Transportasi terpercaya sejak tahun 2012 di Lombok. Pilihan 12 armada prima lengkap <strong>Include Driver + BBM + Air Mineral</strong> untuk airport transfer BIZAM, city tour, Sasak &amp; Gili.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="button-link button-primary"
            >
              <MessageCircle size={18} />
              <span>Booking via WhatsApp</span>
            </a>
            <a href="#armada" className="button-link button-secondary">
              <CarFront size={18} />
              <span>Lihat Armada</span>
            </a>
          </div>

          <div className="hero-trust">
            <span>
              <ShieldCheck size={16} />
              Driver + BBM + Mineral
            </span>
            <span>
              <Award size={16} />
              Terpercaya Sejak 2012
            </span>
            <span>
              <MapPin size={16} />
              Standby BIZAM Lombok
            </span>
          </div>
        </motion.div>

        <motion.div className="hero-visual" {...animVisual}>
          <Image
            src="/images/hero-fleet-final.png"
            alt="Armada Rental Mobil Rental99 BIZAM Lombok"
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
