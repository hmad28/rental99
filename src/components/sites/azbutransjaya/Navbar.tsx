"use client";

import { useState, useEffect } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { whatsappUrl } from "./constants";
import { Rental99Logo } from "./Rental99Logo";

const NAV_ITEMS = [
  { label: "Beranda", href: "#beranda", id: "beranda" },
  { label: "Armada", href: "#armada", id: "armada" },
  { label: "Layanan", href: "#layanan", id: "layanan" },
  { label: "Paket Tour", href: "#tour", id: "tour" },
  { label: "Klien", href: "#klien", id: "klien" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Kontak", href: "#kontak", id: "kontak" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["beranda", "armada", "layanan", "tour", "klien", "faq", "kontak"];
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
        <a href="#beranda" className="brand-link" aria-label="Rental99 - Beranda">
          <Rental99Logo variant="dark" />
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
