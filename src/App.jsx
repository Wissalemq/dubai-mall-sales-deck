import "./App.css";
import { useState } from "react";

const stats = [
  ["100M+", "Annual Visitors"],
  ["1,200+", "Retail Outlets"],
  ["200+", "Dining Experiences"],
  ["Global", "Tourism Magnet"],
];

const worlds = [
  {
    title: "Retail",
    text: "Flagship stores, pop-ups, category leaders, and high-intent shoppers.",
  },
  {
    title: "Luxury",
    text: "A premium environment built for elevated brand storytelling.",
  },
  {
    title: "Dining",
    text: "Restaurants and cafés that extend dwell time and social energy.",
  },
  {
    title: "Attractions",
    text: "Aquarium, cinema, ice rink, attractions, and family experiences.",
  },
];

const paths = [
  {
    number: "01",
    title: "Lease a Space",
    text: "For retailers, luxury brands, pop-ups, and F&B concepts looking for premium visibility.",
    detail:
      "This path supports flagship stores, seasonal pop-ups, luxury boutiques, restaurants, and lifestyle concepts inside a high-traffic destination.",
    cta: "Start Leasing Conversation",
  },
  {
    number: "02",
    title: "Sponsor the Destination",
    text: "For brands seeking high-footfall activations, seasonal campaigns, and premium audience engagement.",
    detail:
      "This path helps brands create visibility through activations, premium placements, seasonal campaigns, and sponsored experiences.",
    cta: "Discuss Sponsorship",
  },
  {
    number: "03",
    title: "Host an Event",
    text: "For event producers, agencies, and companies planning launches, showcases, exhibitions, or cultural moments.",
    detail:
      "This path is for launches, exhibitions, cultural showcases, corporate events, and immersive public experiences.",
    cta: "Plan an Event",
  },
];

const slides = [
  {
    label: "01",
    title: "Arrival",
    type: "hero",
  },
  {
    label: "02",
    title: "Scale",
    type: "scale",
  },
  {
    label: "03",
    title: "Worlds",
    type: "worlds",
  },
  {
    label: "04",
    title: "Platform",
    type: "platform",
  },
  {
    label: "05",
    title: "Paths",
    type: "paths",
  },
  {
    label: "06",
    title: "Action",
    type: "cta",
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePath, setActivePath] = useState(null);

  const goNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const goPrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const slide = slides[currentSlide];

  return (
    <main className="deck">
      <nav className="topbar">
        <div className="brand">DUBAI MALL</div>
        <div className="deck-counter">
          {slide.label} / {slides.length.toString().padStart(2, "0")}
        </div>
      </nav>

      <aside className="side-nav">
        {slides.map((item, index) => (
          <button
            key={item.title}
            className={currentSlide === index ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          >
            <span>{item.label}</span>
            {item.title}
          </button>
        ))}
      </aside>

      <section className={`deck-slide ${slide.type}`}>
        {slide.type === "hero" && (
          <>
            <div className="noise"></div>
            <div className="hero-bg"></div>

            <div className="hero-copy">
              <p className="kicker">Interactive Sales Deck</p>
              <h1>The destination where global attention becomes business.</h1>
              <p>
                A premium pitch experience for retailers, luxury brands,
                sponsors, and event producers ready to enter the heart of
                Downtown Dubai.
              </p>

            </div>

            <div className="floating-panel">
              <span>Now Pitching</span>
              <strong>Retail · Sponsorship · Events</strong>
            </div>
          </>
        )}

        {slide.type === "scale" && (
          <div className="scale-grid">
            <div>
              <p className="section-label">02 / Scale</p>
              <h2>Not a mall. A city-scale commercial stage.</h2>
              <p>
                Dubai Mall blends retail, hospitality, dining, attractions,
                tourism, and culture into one destination designed for movement,
                visibility, and business opportunity.
              </p>
            </div>

            <div className="stats">
              {stats.map(([number, label]) => (
                <div className="stat" key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === "worlds" && (
          <div className="slide-inner">
            <p className="section-label">03 / Destination Worlds</p>
            <h2>Multiple commercial worlds. One address.</h2>

            <div className="world-grid">
              {worlds.map((world, index) => (
                <article className="world-card" key={world.title}>
                  <span>0{index + 1}</span>
                  <h3>{world.title}</h3>
                  <p>{world.text}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {slide.type === "platform" && (
          <div className="platform-card">
            <p className="kicker">04 / Events & Brand Platform</p>
            <h2>From product launches to cultural moments.</h2>
            <p>
              The property becomes a high-footfall media platform where brands
              can build activations, launch campaigns, host showcases, and
              connect with visitors in real life.
            </p>

            <div className="platform-options">
              <div>
                <span>01</span>
                <strong>Leasing Paths</strong>
                <p>Luxury, retail, F&B, pop-up, and flagship opportunities.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Sponsorship</strong>
                <p>Brand moments, seasonal campaigns, and premium placements.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Event Booking</strong>
                <p>Launches, exhibitions, and immersive experiences.</p>
              </div>
            </div>
          </div>
        )}

        {slide.type === "paths" && (
          <div className="slide-inner">
            <p className="kicker">05 / Choose Your Opportunity</p>
            <h2>Three business paths. One global destination.</h2>

            <div className="path-grid">
              {paths.map((path) => (
                <div
                  className="path-card"
                  key={path.title}
                  onClick={() => setActivePath(path)}
                >
                  <span>{path.number}</span>
                  <div>
                    <h3>{path.title}</h3>
                    <p>{path.text}</p>
                  </div>
                  <button className="explore-btn">Explore →</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === "cta" && (
          <div className="cta-content">
            <p className="kicker">Final Step</p>
            <h2>Ready to turn global footfall into your next business move?</h2>
            <a href="mailto:medi@liat.ai" className="button light">
              Request a Private Walkthrough
            </a>
          </div>
        )}
      </section>

      <div className="deck-controls">
        <button onClick={goPrev} disabled={currentSlide === 0}>
          ← Previous
        </button>

        <div className="slide-dots">
          {slides.map((item, index) => (
            <button
              key={item.title}
              className={currentSlide === index ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <button onClick={goNext} disabled={currentSlide === slides.length - 1}>
          Next →
        </button>
      </div>

      {activePath && (
        <div className="modal-overlay" onClick={() => setActivePath(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActivePath(null)}>
              ×
            </button>

            <p className="kicker">Opportunity Path</p>
            <h2>{activePath.title}</h2>
            <p>{activePath.detail}</p>

            <button className="button light" onClick={() => setActivePath(null)}>
              {activePath.cta}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;