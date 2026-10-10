"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CalendarDays, Menu, X } from "lucide-react";
import { whatsappUrl } from "./constants";

const NAV_ITEMS = [
  { label: "Beranda", href: "#beranda", id: "beranda" },
  { label: "Armada", href: "#armada", id: "armada" },
  { label: "Layanan", href: "#layanan", id: "layanan" },
  { label: "Tentang", href: "#tentang", id: "tentang" },
  { label: "Kontak", href: "#kontak", id: "kontak" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["beranda", "armada", "layanan", "tentang", "kontak"];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container-page nav-inner">
        <a href="#beranda" className="brand-link" aria-label="Azbu Trans Jaya - Beranda">
          <Image
            src="/images/azbu-logo.png"
            alt="Azbu Trans Jaya"
            width={260}
            height={104}
            priority
            className="brand-logo"
          />
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={whatsappUrl()} className="nav-cta" target="_blank" rel="noreferrer">
          <CalendarDays size={17} />
          Booking Sekarang
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          <div className="container-page">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? "active-mobile-link" : ""}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="button-link nav-cta mobile-menu-cta"
            >
              <CalendarDays size={17} />
              Booking Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
