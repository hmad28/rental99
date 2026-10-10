import Image from "next/image";
import { CalendarDays, UserCheck, Plane, BusFront, CircleCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES_DATA } from "./constants";

export function Services() {
  const getIcon = (type: string) => {
    switch (type) {
      case "calendar":
        return <CalendarDays size={30} strokeWidth={1.7} />;
      case "user":
        return <UserCheck size={30} strokeWidth={1.7} />;
      case "plane":
        return <Plane size={30} strokeWidth={1.7} />;
      case "bus":
        return <BusFront size={30} strokeWidth={1.7} />;
      default:
        return <CalendarDays size={30} strokeWidth={1.7} />;
    }
  };

  return (
    <section id="layanan" className="services-section">
      <div className="container-page">
        <Reveal className="center-heading services-heading">
          <p className="section-kicker">Pilihan Layanan</p>
          <h2>
            Layanan Rental &amp; Driver
            <br />
            Sesuai Kebutuhan Perjalanan
          </h2>
          <p className="services-desc">
            Tersedia pilihan sewa lepas kunci maupun rental lengkap dengan pengemudi profesional untuk kenyamanan maksimal.
          </p>
        </Reveal>

        <div className="services-grid">
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
                        <CircleCheck size={14} />
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
