import { ShieldCheck, Clock, Headphones, Car } from "lucide-react";
import { Reveal } from "./Reveal";
import { EXPERIENCE_ITEMS } from "./constants";

export function Experience() {
  const getIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <ShieldCheck size={34} strokeWidth={1.7} />;
      case "clock":
        return <Clock size={34} strokeWidth={1.7} />;
      case "headset":
        return <Headphones size={34} strokeWidth={1.7} />;
      case "car":
        return <Car size={34} strokeWidth={1.7} />;
      default:
        return <ShieldCheck size={34} strokeWidth={1.7} />;
    }
  };

  return (
    <section id="keunggulan" className="experience-section">
      <div className="container-page">
        <Reveal className="center-heading experience-heading">
          <p className="section-kicker">Kenapa memilih kami</p>
          <h2>
            Pengalaman Rental
            <br />
            Mudah, Aman &amp; Nyaman
          </h2>
        </Reveal>

        <div className="benefit-grid experience-grid">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.07}>
              <article className="benefit-item">
                {getIcon(item.iconType)}
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
