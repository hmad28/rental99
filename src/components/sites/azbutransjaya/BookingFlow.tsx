import { CarFront, CalendarDays, ClipboardCheck, CircleCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOKING_STEPS } from "./constants";

export function BookingFlow() {
  const getIcon = (type: string) => {
    switch (type) {
      case "car":
        return <CarFront size={32} strokeWidth={1.7} />;
      case "calendar":
        return <CalendarDays size={32} strokeWidth={1.7} />;
      case "clipboard":
        return <ClipboardCheck size={32} strokeWidth={1.7} />;
      case "check":
        return <CircleCheck size={32} strokeWidth={1.7} />;
      default:
        return <CarFront size={32} strokeWidth={1.7} />;
    }
  };

  return (
    <section className="booking-section booking-flow-section">
      <div className="container-page">
        <Reveal className="center-heading booking-heading">
          <p className="section-kicker">Cara sewa</p>
          <h2>Mudah dalam 4 Langkah</h2>
        </Reveal>

        <div className="booking-grid">
          {BOOKING_STEPS.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 0.08}>
              <article className="booking-step">
                <div className="booking-step-icon-wrap">
                  {getIcon(step.iconType)}
                  <span className="booking-step-badge">{step.step}</span>
                </div>
                <div className="booking-step-text">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
