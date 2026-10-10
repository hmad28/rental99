import Image from "next/image";
import { CalendarDays, UserCheck, Plane, BusFront, Compass, CircleCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES_DATA } from "./constants";

export function Services() {
  const getIcon = (type: string) => {
    switch (type) {
      case "calendar":
        return <CalendarDays size={28} strokeWidth={1.8} />;
      case "user":
        return <UserCheck size={28} strokeWidth={1.8} />;
      case "plane":
        return <Plane size={28} strokeWidth={1.8} />;
      case "bus":
        return <BusFront size={28} strokeWidth={1.8} />;
      default:
        return <Compass size={28} strokeWidth={1.8} />;
    }
  };

  return (
    <section id="layanan" className="services-section">
      <div className="container-page">
        <Reveal className="center-heading services-heading">
          <p className="section-kicker">Layanan Utama</p>
          <h2>
            Transport Service &amp; Tours
            <br />
            Solusi Perjalanan Lengkap di Lombok
          </h2>
          <p className="services-desc">
            Seluruh layanan rental mobil sudah include driver profesional, BBM, dan air mineral. Melayani airport transfer BIZAM, city tour, paket wisata Sasak &amp; Gili, hingga rute luar daerah.
          </p>
        </Reveal>

        <div className="services-grid mt-10">
          {SERVICES_DATA.map((srv, idx) => (
            <Reveal key={srv.title} delay={idx * 0.08}>
              <article className="service-item">
                <div className="service-image-wrap">
                  <Image
                    src={srv.image}
                    alt={srv.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 34vw"
                    className="service-image"
                  />
                </div>
                <div className="service-content">
                  <div className="service-title-row">
                    {getIcon(srv.iconType)}
                    <h3>{srv.title}</h3>
                  </div>
                  <p>{srv.description}</p>
                  <ul>
                    {srv.points.map((pt) => (
                      <li key={pt}>
                        <CircleCheck size={14} className="text-[#2563EB]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
