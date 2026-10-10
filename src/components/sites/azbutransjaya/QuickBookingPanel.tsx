"use client";

import { useState, useRef, useEffect } from "react";
import { CarFront, ChevronDown, UserCheck, MapPin, MessageCircle, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { FLEET_DATA, DRIVER_OPTIONS, AREA_OPTIONS, whatsappUrl } from "./constants";

export function QuickBookingPanel() {
  const [selectedVehicle, setSelectedVehicle] = useState(FLEET_DATA[0].name);
  const [selectedDriverId, setSelectedDriverId] = useState("allIn");
  const [selectedAreaId, setSelectedAreaId] = useState("bizam");

  const [vehicleMenuOpen, setVehicleMenuOpen] = useState(false);
  const [driverMenuOpen, setDriverMenuOpen] = useState(false);
  const [areaMenuOpen, setAreaMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setVehicleMenuOpen(false);
        setDriverMenuOpen(false);
        setAreaMenuOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setVehicleMenuOpen(false);
        setDriverMenuOpen(false);
        setAreaMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const activeDriver = DRIVER_OPTIONS.find((d) => d.id === selectedDriverId) || DRIVER_OPTIONS[0];
  const activeArea = AREA_OPTIONS.find((a) => a.id === selectedAreaId) || AREA_OPTIONS[0];

  const customWaMessage = `Halo Rental99 Transport Service & Tours, saya ingin booking ${selectedVehicle} (${activeDriver.label}) untuk area ${activeArea.label}. Bisa dibantu cek ketersediaan dan jadwalnya?`;

  return (
    <section className="quick-booking-wrap" aria-label="Mulai perjalanan Anda">
      <div className="container-page" ref={containerRef}>
        <Reveal className="quick-booking-panel">
          <div className="quick-booking-intro">
            <strong>Mulai Perjalanan Anda</strong>
            <span>Pilih layanan dan armada, tentukan opsi driver, lalu cek ketersediaan via WhatsApp.</span>
          </div>

          <div className="quick-booking-fields interactive-booking-fields">
            {/* Vehicle Select */}
            <div className="booking-field-select-wrap">
              <button
                type="button"
                className="booking-select-btn"
                onClick={() => {
                  setVehicleMenuOpen(!vehicleMenuOpen);
                  setDriverMenuOpen(false);
                  setAreaMenuOpen(false);
                }}
                aria-label="Pilih unit armada"
                aria-expanded={vehicleMenuOpen}
                aria-controls="vehicle-dropdown"
                role="combobox"
                aria-haspopup="listbox"
              >
                <CarFront size={18} />
                <span className="booking-select-text">
                  <small>Kendaraan</small>
                  <strong>{selectedVehicle}</strong>
                </span>
                <ChevronDown size={15} className={`booking-chevron ${vehicleMenuOpen ? "rotated" : ""}`} />
              </button>

              {vehicleMenuOpen && (
                <div id="vehicle-dropdown" className="booking-dropdown-menu" role="listbox" aria-label="Daftar kendaraan">
                  {FLEET_DATA.map((car) => (
                    <button
                      key={car.name}
                      type="button"
                      role="option"
                      aria-selected={selectedVehicle === car.name}
                      className={`booking-dropdown-item ${selectedVehicle === car.name ? "active" : ""}`}
                      onClick={() => {
                        setSelectedVehicle(car.name);
                        setVehicleMenuOpen(false);
                      }}
                    >
                      <span className="booking-item-name">{car.name}</span>
                      <span className="booking-item-price">Rp{car.price.toLocaleString("id-ID")}/hr</span>
                      {selectedVehicle === car.name && <Check size={14} className="booking-check-icon" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Driver Service Select */}
            <div className="booking-field-select-wrap">
              <button
                type="button"
                className="booking-select-btn"
                onClick={() => {
                  setDriverMenuOpen(!driverMenuOpen);
                  setVehicleMenuOpen(false);
                  setAreaMenuOpen(false);
                }}
                aria-label="Pilih layanan driver"
                aria-expanded={driverMenuOpen}
                aria-controls="driver-dropdown"
                role="combobox"
                aria-haspopup="listbox"
              >
                <UserCheck size={18} />
                <span className="booking-select-text">
                  <small>Layanan Driver</small>
                  <strong>{activeDriver.tag}</strong>
                </span>
                <ChevronDown size={15} className={`booking-chevron ${driverMenuOpen ? "rotated" : ""}`} />
              </button>

              {driverMenuOpen && (
                <div id="driver-dropdown" className="booking-dropdown-menu" role="listbox" aria-label="Pilihan layanan driver">
                  {DRIVER_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      role="option"
                      aria-selected={selectedDriverId === opt.id}
                      className={`booking-dropdown-item ${selectedDriverId === opt.id ? "active" : ""}`}
                      onClick={() => {
                        setSelectedDriverId(opt.id);
                        setDriverMenuOpen(false);
                      }}
                    >
                      <span className="booking-item-name">{opt.label}</span>
                      {selectedDriverId === opt.id && <Check size={14} className="booking-check-icon" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Area Destination Select */}
            <div className="booking-field-select-wrap">
              <button
                type="button"
                className="booking-select-btn"
                onClick={() => {
                  setAreaMenuOpen(!areaMenuOpen);
                  setVehicleMenuOpen(false);
                  setDriverMenuOpen(false);
                }}
                aria-label="Pilih area perjalanan"
                aria-expanded={areaMenuOpen}
                aria-controls="area-dropdown"
                role="combobox"
                aria-haspopup="listbox"
              >
                <MapPin size={18} />
                <span className="booking-select-text">
                  <small>Area / Tujuan</small>
                  <strong>{activeArea.tag}</strong>
                </span>
                <ChevronDown size={15} className={`booking-chevron ${areaMenuOpen ? "rotated" : ""}`} />
              </button>

              {areaMenuOpen && (
                <div id="area-dropdown" className="booking-dropdown-menu" role="listbox" aria-label="Pilihan area tujuan">
                  {AREA_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      role="option"
                      aria-selected={selectedAreaId === opt.id}
                      className={`booking-dropdown-item ${selectedAreaId === opt.id ? "active" : ""}`}
                      onClick={() => {
                        setSelectedAreaId(opt.id);
                        setAreaMenuOpen(false);
                      }}
                    >
                      <span className="booking-item-name">{opt.label}</span>
                      {selectedAreaId === opt.id && <Check size={14} className="booking-check-icon" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action CTA */}
            <a
              href={whatsappUrl(customWaMessage)}
              target="_blank"
              rel="noreferrer"
              className="quick-booking-action"
              aria-label="Cek ketersediaan via WhatsApp Rental99"
            >
              <MessageCircle size={18} />
              <span>Cek Ketersediaan</span>
            </a>
          </div>

          <div className="quick-booking-driver-note">
            <span className="driver-note-pill">
              <strong>Paket Lengkap:</strong> Seluruh armada sudah <strong>Include Driver + BBM + Air Mineral</strong> selama perjalanan di Lombok.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
