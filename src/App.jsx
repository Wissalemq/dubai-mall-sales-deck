import "./App.css";
import { useEffect, useState } from "react";

const chapters = [
  { id: "hero", label: "01", title: "Arrival" },
  { id: "scale", label: "02", title: "Scale" },
  { id: "world", label: "03", title: "Worlds" },
  { id: "platform", label: "04", title: "Platform" },
  { id: "choose-path", label: "05", title: "Paths" },
  { id: "cta", label: "06", title: "Action" },
];

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
    detail:
      "Ideal for international brands seeking visibility, permanent stores, seasonal pop-ups, and premium retail exposure inside a high-traffic destination.",
    cta: "Explore Leasing",
  },
  {
    title: "Luxury",
    text: "A premium environment built for elevated brand storytelling.",
    detail:
      "Designed for luxury flagships, exclusive launches, private clienteling moments, and high-value brand positioning.",
    cta: "View Luxury Path",
  },
  {
    title: "Dining",
    text: "Restaurants and cafés that extend dwell time and social energy.",
    detail:
      "Dining concepts benefit from tourists, families, shoppers, and lifestyle visitors who stay longer and return often.",
    cta: "Explore F&B",
  },
  {
    title: "Attractions",
    text: "Aquarium, cinema, ice rink, attractions, and family experiences.",
    detail:
      "Entertainment creates emotional pull, increases dwell time, and gives sponsors unique spaces for activations and events.",
    cta: "View Event Potential",
  },
];

function App() {
  
  const [activePath, setActivePath] = useState(null);
  const [activeWorld, setActiveWorld] = useState(null);
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);
const paths = [
  {
    number: "01",
    title: "Lease a Space",
    text: "For retailers, luxury brands, pop-ups, and F&B concepts looking for premium visibility.",
    detail:
      "This path is designed for brands that want a physical presence inside Dubai Mall. It can support flagship stores, pop-ups, luxury boutiques, restaurants, and lifestyle concepts.",
    cta: "Start Leasing Conversation",
  },
  {
    number: "02",
    title: "Sponsor the Destination",
    text: "For brands seeking high-footfall activations, seasonal campaigns, and premium audience engagement.",
    detail:
      "This path is for companies that want brand visibility through activations, seasonal campaigns, digital placements, and sponsored experiences inside a high-traffic destination.",
    cta: "Discuss Sponsorship",
  },
  {
    number: "03",
    title: "Host an Event",
    text: "For event producers, agencies, and companies planning launches, showcases, exhibitions, or cultural moments.",
    detail:
      "This path is for event partners who want to organize product launches, exhibitions, cultural showcases, corporate events, or immersive experiences.",
    cta: "Plan an Event",
  },
];
  return (
    
    <main className="deck">
      <aside className="side-nav">
        <div className="side-line"></div>
        {chapters.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            <span>{item.label}</span>
            {item.title}
          </a>
        ))}
      </aside>

      <section className="hero" id="hero">
        <div className="noise"></div>
        <div className="hero-bg"></div>

        <nav className="topbar">
          <div className="brand">DUBAI MALL</div>
          <a href="#cta">Partner With Us</a>
        </nav>

        <div className="hero-copy">
          <p className="kicker">Interactive Sales Experience</p>
          <h1>
            The destination where global attention becomes business.
          </h1>
          <p>
            A cinematic platform for retailers, luxury brands, sponsors, and
            event producers ready to enter the heart of Downtown Dubai.
          </p>
          <div className="hero-actions">
            <a href="#scale" className="button light">Enter the Deck</a>
            <a href="#platform" className="button ghost">View Opportunities</a>
          </div>
        </div>

        <div className="floating-panel">
          <span>Now Pitching</span>
          <strong>Retail · Sponsorship · Events</strong>
        </div>
      </section>

      <section className="scale" id="scale">
        <div className="section-label">02 / Scale</div>
        <div className="scale-grid">
          <div>
            <h2>Not a mall. A city-scale commercial stage.</h2>
            <p>
              Dubai Mall blends retail, hospitality, dining, attractions,
              tourism, and culture into one destination designed for constant
              movement and global visibility.
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
      </section>

      <section className="worlds" id="world">
        <div className="section-label">03 / Destination Worlds</div>
        <h2>Multiple commercial worlds. One address.</h2>

        <div className="world-grid">
          {worlds.map((world, index) => (
          <article className="world-card fade-in">
  
              <span>0{index + 1}</span>
              <h3>{world.title}</h3>
              <p>{world.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="platform" id="platform">
        <div className="platform-card">
          <p className="kicker">Events & Brand Platform</p>
          <h2>From product launches to cultural moments.</h2>
          <p>
            The property becomes a high-footfall media platform where brands can
            build activations, launch campaigns, host showcases, and connect
            with visitors in real life.
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
              <p>Launches, concerts, exhibitions, and immersive experiences.</p>
            </div>
          </div>
        </div>
      </section>
<section className="choose-path" id="choose-path">
  <p className="kicker">Choose Your Opportunity</p>
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

      </div>
    ))}
  </div>
</section>
      <section className="cta" id="cta">
        <p className="kicker">Final Step</p>
        <h2>Put your brand inside the destination people already travel to see.</h2>
        <a href="mailto:medi@liat.ai" className="button light">
          Start the Conversation
        </a>
      </section>
      {activeWorld && (
  <div className="modal-overlay" onClick={() => setActiveWorld(null)}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setActiveWorld(null)}>
        ×
      </button>

      <p className="kicker">Business Module</p>
      <h2>{activeWorld.title}</h2>
   <p>{activeWorld.detail}</p>

      <div className="modal-actions">
        <a href="#cta" className="button light" onClick={() => setActiveWorld(null)}>
          {activeWorld.cta}
        </a>
      </div>
    </div>
  </div>
)}
{activePath && (
  <div className="modal-overlay" onClick={() => setActivePath(null)}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setActivePath(null)}>
        ×
      </button>

      <p className="kicker">Opportunity Path</p>
      <h2>{activePath.title}</h2>
      <p>{activePath.detail}</p>

      <a href="#cta" className="button light" onClick={() => setActivePath(null)}>
        {activePath.cta}
      </a>
    </div>
  </div>
)}
    </main>
  );
}

export default App;