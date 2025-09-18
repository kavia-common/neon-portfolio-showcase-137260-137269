import React, { useEffect, useState } from "react";
import "./index.css";

/**
 * PUBLIC_INTERFACE
 * App - Neon-themed portfolio single page application using Tailwind CSS.
 * Sections: Navbar, Hero, About, Skills, Portfolio, Contact, Footer, ScrollTop.
 * Ocean Professional palette with blue primary and amber neon accents.
 */
function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ocean-gradient from-blue-500/10 to-gray-50 text-text">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />

      <ScrollTop visible={showTop} />
    </div>
  );
}

/** PUBLIC_INTERFACE */
function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="container-pro flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-neon block group-hover:animate-glow" />
          <span className="text-lg font-bold tracking-tight text-text">
            Neon<span className="text-primary">Portfolio</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="hover:text-primary transition" href="#about">About</a>
          <a className="hover:text-primary transition" href="#skills">Skills</a>
          <a className="hover:text-primary transition" href="#work">Portfolio</a>
          <a className="hover:text-primary transition" href="#contact">Contact</a>
          <a href="#contact" className="btn-secondary shadow-neon">
            <i className="fa-solid fa-bolt-lightning mr-2"></i> Hire Me
          </a>
        </nav>

        <a href="#contact" className="md:hidden inline-flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white">
          <i className="fa-solid fa-paper-plane text-sm mr-2" />
          Contact
        </a>
      </div>
    </header>
  );
}

/** PUBLIC_INTERFACE */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full blur-3xl opacity-30 bg-blue-400 animate-pulse-soft" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-30 bg-amber-400 animate-pulse-soft" />
      </div>

      <div className="container-pro py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-soft">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-neon" />
          <span className="text-xs font-semibold text-blue-700">
            Ocean Professional Theme
          </span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-text">
          Graphic Designer with a{" "}
          <span className="text-primary">
            Neon Flair
          </span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          I craft bold, modern visuals with glowing accents and smooth motion.
          Explore my work, skills, and reach out to collaborate on your next project.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#work" className="btn-primary">
            <i className="fa-solid fa-eye mr-2" /> View Work
          </a>
          <a href="#contact" className="btn-secondary">
            <i className="fa-solid fa-message mr-2" /> Let’s Talk
          </a>
        </div>

        {/* Mock device/card with floating animation */}
        <div className="mt-14 mx-auto max-w-5xl">
          <div className="card p-1 animate-float">
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-white p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <Metric icon="fa-wand-magic-sparkles" label="Projects" value="48+" />
                <Metric icon="fa-face-smile" label="Happy Clients" value="30+" />
                <Metric icon="fa-clock" label="Years Experience" value="5+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-soft mb-3">
        <i className={`fa-solid ${icon} text-primary`} />
      </div>
      <div className="text-3xl font-extrabold text-text">{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

/** PUBLIC_INTERFACE */
function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-pro grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-text">About Me</h2>
          <p className="mt-4 text-gray-600">
            I’m a graphic designer focused on modern, high-contrast visuals with neon highlights.
            My workflow blends creativity with precision, delivering designs that stand out and communicate clearly.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-secondary mt-1" />
              <span>Branding, identity systems, and digital ads</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-secondary mt-1" />
              <span>UI assets, social media kits, and pitch decks</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-secondary mt-1" />
              <span>Motion-ready graphics and export pipelines</span>
            </li>
          </ul>
          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              <i className="fa-solid fa-bolt mr-2" /> Start a Project
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-amber-400/30 blur-xl"></div>
            <div className="relative card p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-amber-500/10 flex items-center justify-center">
                <i className="fa-solid fa-pen-nib text-5xl text-primary"></i>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Clean lines, neon edges, precise execution.</p>
        </div>
      </div>
    </section>
  );
}

/** PUBLIC_INTERFACE */
function Skills() {
  const skills = [
    { name: "Adobe Photoshop", level: 90, icon: "fa-brands fa-adobe" },
    { name: "Illustrator", level: 85, icon: "fa-solid fa-palette" },
    { name: "Figma", level: 80, icon: "fa-brands fa-figma" },
    { name: "After Effects", level: 70, icon: "fa-solid fa-film" },
    { name: "Branding", level: 88, icon: "fa-solid fa-bullseye" },
    { name: "Social Media Design", level: 82, icon: "fa-solid fa-hashtag" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-pro">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center">Skills</h2>
        <p className="mt-2 text-gray-600 text-center">Focused, versatile, and production-ready.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <i className={`${s.icon} text-primary`} />
                  </div>
                  <div className="font-semibold">{s.name}</div>
                </div>
                <div className="text-sm text-gray-500">{s.level}%</div>
              </div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** PUBLIC_INTERFACE */
function Portfolio() {
  const items = [
    {
      title: "Neon Brand Identity",
      tag: "Branding",
      cover: "from-blue-500/15 to-amber-400/15",
      icon: "fa-solid fa-bolt"
    },
    {
      title: "Futuristic UI Kit",
      tag: "UI Design",
      cover: "from-blue-500/15 to-gray-200/40",
      icon: "fa-solid fa-grid-2"
    },
    {
      title: "Social Campaign Pack",
      tag: "Social Media",
      cover: "from-amber-400/20 to-blue-500/10",
      icon: "fa-solid fa-hashtag"
    },
    {
      title: "Motion Graphics Teaser",
      tag: "Motion",
      cover: "from-blue-500/20 to-indigo-400/10",
      icon: "fa-solid fa-film"
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="container-pro">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text">Portfolio</h2>
            <p className="mt-2 text-gray-600">Interactive cards with neon hover effects.</p>
          </div>
          <a href="#contact" className="btn-secondary">
            <i className="fa-solid fa-paper-plane mr-2" /> Get a Quote
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((it) => (
            <PortfolioCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ title, tag, cover, icon }) {
  return (
    <article className="group card overflow-hidden p-0">
      <div className={`aspect-[4/3] bg-gradient-to-br ${cover} relative`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
          <div className="absolute inset-0 bg-amber-400/10 blur-2xl"></div>
        </div>
        <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-xs font-semibold border border-blue-100">
          <i className="fa-solid fa-bolt-lightning text-secondary mr-2"></i>{tag}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/90 border border-blue-100 flex items-center justify-center shadow-neon-blue group-hover:scale-110 transition">
            <i className={`fa-solid ${icon} text-primary text-2xl`} />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-text">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">
          Hover to see the neon glow. Built with clean, modern aesthetics.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Learn more
          </a>
          <i className="fa-solid fa-arrow-right text-primary"></i>
        </div>
      </div>
    </article>
  );
}

/** PUBLIC_INTERFACE */
function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-pro grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">Contact</h2>
          <p className="mt-2 text-gray-600">
            Have a project in mind? Let’s bring your ideas to life with neon precision.
          </p>
          <div className="mt-6 space-y-3 text-gray-700">
            <p><i className="fa-solid fa-envelope text-secondary mr-2"></i> hello@designer.dev</p>
            <p><i className="fa-solid fa-location-dot text-secondary mr-2"></i> Remote / Worldwide</p>
          </div>
        </div>

        <form
          className="card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! Your message has been sent.");
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Name" id="name" type="text" placeholder="Your name" />
            <Field label="Email" id="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" id="subject" type="text" placeholder="Project inquiry" className="mt-4" />
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-semibold text-text mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full h-32 rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50"
              placeholder="Tell me about your project..."
            />
          </div>
          <button type="submit" className="btn-secondary mt-5 w-full sm:w-auto">
            <i className="fa-solid fa-paper-plane mr-2" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-text mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50"
      />
    </div>
  );
}

/** PUBLIC_INTERFACE */
function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="container-pro flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} NeonPortfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#" aria-label="Twitter" className="hover:text-primary"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" aria-label="Dribbble" className="hover:text-primary"><i className="fa-brands fa-dribbble"></i></a>
          <a href="#" aria-label="Behance" className="hover:text-primary"><i className="fa-brands fa-behance"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

/** PUBLIC_INTERFACE */
function ScrollTop({ visible }) {
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 rounded-full bg-primary text-white shadow-neon-blue p-3 transition transform hover:-translate-y-1 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default App;
