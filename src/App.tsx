import React, { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as THREE from "three";
import Media from "./components/Media";
import MediaLoader from "./components/MediaLoader";

/* ---------- 3D wireframe globe ---------- */
function Globe() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let w = el.clientWidth || 360;
    let h = el.clientHeight || 360;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    cam.position.z = 3.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const accent = new THREE.Color(0x1ce8c5);
    const geo = new THREE.IcosahedronGeometry(1.3, 2);
    const group = new THREE.Group();

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.5 })
    );
    const nodes = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: accent, size: 0.05, transparent: true, opacity: 0.9 })
    );
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.28, 1),
      new THREE.MeshBasicMaterial({ color: 0x0a1614, transparent: true, opacity: 0.55 })
    );
    group.add(core, wire, nodes);
    scene.add(group);

    let raf = 0;
    const animate = () => {
      group.rotation.y += 0.0032;
      group.rotation.x += 0.0011;
      renderer.render(scene, cam);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!el) return;
      w = el.clientWidth;
      h = el.clientHeight;
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={ref} className="dc-globe" aria-hidden="true" />;
}

/* ---------- count-up metric ---------- */
function Metric({ n, suffix, label }: { n: number; suffix?: string; label: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const step = Math.max(1, Math.round(n / 34));
          let c = 0;
          const run = () => {
            c += step;
            if (c >= n) setV(n);
            else {
              setV(c);
              requestAnimationFrame(run);
            }
          };
          run();
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [n]);
  return (
    <div className="dc-metric" ref={ref}>
      <div className="n">{v}{suffix || ""}</div>
      <div className="l">{label}</div>
    </div>
  );
}

/* ---------- live clock ---------- */
function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () =>
      setT("· " + new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}

const hideImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.opacity = "0";
};

const featured = [
  {
    title: "Train Your Brain",
    domain: "train-your-brains.org",
    url: "https://train-your-brains.org",
    tag: "LIVE · WEB + MOBILE",
    img: "https://websiteskenya.co.ke/SITESsamples/Company%20Website/trainyourbrain.org.png",
    desc: "Cross-platform AI mental-wellness app — chatbot support, therapist matching, gamified tools & daily notifications, on web, iOS & Android.",
    tags: ["React Native", "Expo", "AI", "Firebase"],
  },
  {
    title: "Amana Butchery — Stock System",
    domain: "amanabutchery.com",
    url: "https://amanabutchery.com",
    tag: "LIVE · SYSTEM",
    img: "https://websiteskenya.co.ke/SITESsamples/E-Commerce/amana%20butchery.com.png",
    desc: "Real-time inventory reconciliation: expected vs. counted stock, live variance flagging, egg-by-grade tracking and PDF reports. POS-grade logic.",
    tags: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    title: "Sculpt Navy",
    domain: "sculptnavy.com",
    url: "https://sculptnavy.com",
    tag: "LIVE · E-COMMERCE",
    img: "https://websiteskenya.co.ke/SITESsamples/E-Commerce/sculptnavy.com.png",
    desc: "Fashion storefront for modern women — 11 categories, lookbook, cart and checkout. Fast, server-rendered, mobile-first.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Samwa Natural Foods",
    domain: "samwafoods.co.ke",
    url: "https://samwafoods.co.ke",
    tag: "LIVE · E-COMMERCE",
    img: "https://samwafoods.co.ke/hero/hero-1024.webp",
    desc: "Full natural-foods store — deep catalog, recipes, store locator and a built-in SEO blog that drives organic traffic to products.",
    tags: ["Next.js", "Firebase", "SEO"],
  },
  {
    title: "Ace Publishers",
    domain: "acepublishers.co.ke",
    url: "https://acepublishers.co.ke",
    tag: "LIVE · EDU + APP",
    img: "https://websiteskenya.co.ke/SITESsamples/E-Commerce/acepublishers.co.ke.png",
    desc: "E-learning & digital-publishing platform for schools — plus a companion app shipped to Google Play. Built for low-bandwidth access.",
    tags: ["React Native", "Next.js", "Firebase"],
  },
  {
    title: "Websiteskenya — The Agency",
    domain: "websiteskenya.co.ke",
    url: "https://websiteskenya.co.ke",
    tag: "LIVE · PLATFORM",
    img: "https://websiteskenya.co.ke/og-image.png",
    desc: "The platform behind my business: service catalog, tiered pricing, client accounts, app-dev & WhatsApp-bot offerings. 100+ sites delivered.",
    tags: ["Next.js", "M-Pesa", "Founder"],
  },
];

const deploys: [string, string, string][] = [
  ["kferments.co.ke", "E-Commerce", "Next.js"],
  ["organicnationkenya.com", "E-Commerce", "React · Firebase"],
  ["buconfurniture.co.ke", "E-Commerce", "React"],
  ["kwakuku.co.ke", "E-Commerce", "React · Subscriptions"],
  ["smartbio.ke", "E-Commerce", "React"],
  ["classycollectionhub.co.ke", "E-Commerce", "React"],
  ["starmounttech.co.ke", "Technology", "Next.js"],
  ["matthtrackingtech.com", "Technology", "Next.js"],
  ["primax.co.ke", "Corporate", "React"],
  ["nyarariafrica.com", "Business", "React"],
  ["diaslinksolutions.org", "Business", "React"],
  ["techglobalprime.com", "Technology", "React"],
  ["muthui-murigu-realty.vercel.app", "Real Estate", "Next.js"],
  ["ultrapropertiesltd.netlify.app", "Real Estate", "React"],
  ["manyaracs.vercel.app", "Construction", "Next.js"],
  ["keldymoving.co.ke", "Logistics", "React"],
  ["flinchwavemovers.com", "Logistics", "React"],
  ["backyardcartinting.com", "Automotive", "React · Booking"],
  ["bmtyres.co.ke", "Automotive", "Next.js"],
  ["apixtravels.co.ke", "Travel", "React"],
  ["entamistours.co.ke", "Travel", "Next.js"],
  ["jessynailsandspa.com", "Beauty", "React · Booking"],
  ["kariwoletheologicalseminary.co.ke", "Education", "React"],
  ["kingdomcityschoolofmusic.com", "Education", "React"],
  ["rolafoundation.org", "Non-Profit", "React"],
  ["thecityofglory.org", "Ministry", "React"],
  ["globalkindforwomenandchildren.org", "Non-Profit", "React"],
  ["ultimatewings.co.ke", "Non-Profit", "React"],
  ["restorationhope.biz", "Non-Profit", "Next.js"],
  ["skylonairservices.com", "Aviation", "React"],
];

function HomePage() {
  const navigate = useNavigate();
  const openMedia = useCallback(() => navigate("/media"), [navigate]);

  return (
    <div className="dc">
      <div className="dc-bg" />

      {/* status bar */}
      <div className="dc-status">
        <div className="dc-wrap">
          <div className="dc-sl">
            <span className="dc-dot" />
            <span>SYSTEM ONLINE</span>
            <span>· Nairobi, KE </span>
            <Clock />
          </div>
          <div className="dc-sr">
            <a href="#deployments">deployments</a>
            <a href="#stack">stack</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </div>

      {/* hero */}
      <header className="dc-hero">
        <div className="dc-wrap">
          <div className="dc-hero-grid">
            <div>
              <div className="dc-kicker">FULL-STACK &amp; MOBILE DEVELOPER · FOUNDER @ WEBSITESKENYA</div>
              <h1 className="dc-name">Lewis<span className="ac">.</span>Weru</h1>
              <div className="dc-role">I ship products, not just pages<span className="dc-cursor" /></div>
              <p className="dc-lede">
                Founder of <b>Websiteskenya</b>. I design, build, and deploy <b>web &amp; mobile apps</b> for
                businesses across Kenya — <b>100+ live sites</b> and <b>3 mobile apps</b> shipped, with real{" "}
                <b>M-Pesa, Pesapal &amp; Paystack</b> payments and systems that actually run the business.
              </p>
              <div className="dc-cta">
                <a className="dc-btn pri" href="/MYCV.pdf" target="_blank" rel="noopener noreferrer">↗ View Résumé</a>
                <a className="dc-btn gh" href="#deployments">◆ See Deployments</a>
                <button className="dc-btn gh" onClick={openMedia}>▶ Explore Media</button>
              </div>
            </div>
            <Globe />
          </div>

          <div className="dc-metrics">
            <Metric n={100} suffix="+" label="Sites Deployed" />
            <Metric n={3} label="Mobile Apps" />
            <Metric n={3} label="Payment Gateways" />
            <Metric n={40} suffix="+" label="Client Brands" />
          </div>
        </div>
      </header>

      {/* featured */}
      <section id="deployments" className="dc-sec">
        <div className="dc-wrap">
          <div className="dc-head">
            <span className="dc-idx">01</span>
            <span className="dc-title">Featured Deployments</span>
            <span className="dc-hline" />
            <span className="dc-note">status: all live</span>
          </div>
          <div className="dc-grid">
            {featured.map((p) => (
              <a key={p.domain} className="dc-card" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="dc-shot">
                  <span className="dc-badge"><span className="dc-bdot" />{p.tag}</span>
                  <img loading="lazy" src={p.img} alt={p.title} onError={hideImg} />
                </div>
                <div className="dc-cbody">
                  <div className="dc-ctitle">{p.title}</div>
                  <div className="dc-cdom">{p.domain}</div>
                  <div className="dc-cdesc">{p.desc}</div>
                  <div className="dc-tags">{p.tags.map((t) => <span key={t} className="dc-tag">{t}</span>)}</div>
                  <span className="dc-clink">open deployment →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* deploy log */}
      <section className="dc-sec">
        <div className="dc-wrap">
          <div className="dc-head">
            <span className="dc-idx">02</span>
            <span className="dc-title">Deployment Log</span>
            <span className="dc-hline" />
            <span className="dc-note">live · selected</span>
          </div>
          <div className="dc-log">
            <div className="dc-lh">
              <span>status</span><span>domain</span><span className="dc-cat">category</span>
              <span className="dc-stk">stack</span><span className="dc-ar">↗</span>
            </div>
            {deploys.map(([d, c, s]) => (
              <a
                key={d}
                className="dc-lr"
                href={"https://" + d}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="dc-st"><span className="dc-bdot" />LIVE</span>
                <span className="dc-dm">{d}</span>
                <span className="dc-cat">{c}</span>
                <span className="dc-stk">{s}</span>
                <span className="dc-ar">→</span>
              </a>
            ))}
            <div className="dc-more">// + 60 more deployments across e-commerce, real estate, non-profits, churches &amp; professional services</div>
          </div>
        </div>
      </section>

      {/* stack */}
      <section id="stack" className="dc-sec">
        <div className="dc-wrap">
          <div className="dc-head">
            <span className="dc-idx">03</span>
            <span className="dc-title">Stack</span>
            <span className="dc-hline" />
            <span className="dc-note">production-tested</span>
          </div>
          <div className="dc-sgrid">
            <div className="dc-sblock"><h3>Frontend</h3><div className="dc-chips">
              {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"].map((x) => <span key={x} className="dc-chip">{x}</span>)}
            </div></div>
            <div className="dc-sblock"><h3>Mobile</h3><div className="dc-chips">
              {["React Native", "Expo", "Flutter", "App Store", "Google Play"].map((x) => <span key={x} className="dc-chip">{x}</span>)}
            </div></div>
            <div className="dc-sblock"><h3>Backend &amp; Data</h3><div className="dc-chips">
              {["Node.js", "Firebase / Firestore", "REST APIs", "Laravel", "PHP", "SQL", "Python"].map((x) => <span key={x} className="dc-chip">{x}</span>)}
            </div></div>
            <div className="dc-sblock"><h3>Payments &amp; Ops</h3><div className="dc-chips">
              {["M-Pesa Daraja", "Pesapal", "Paystack", "CI/CD", "Vercel", "Netlify", "WhatsApp Bots"].map((x) => <span key={x} className="dc-chip">{x}</span>)}
            </div></div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="dc-sec">
        <div className="dc-wrap">
          <div className="dc-head">
            <span className="dc-idx">04</span>
            <span className="dc-title">About</span>
            <span className="dc-hline" />
            <span className="dc-note">B.Sc. Computer Science · Riara University</span>
          </div>
          <div className="dc-about">
            <p>I'm a full-stack and mobile developer and the founder of <b>Websiteskenya</b>. I've designed, built,
            and deployed <b className="hl">100+ live websites</b> and <b className="hl">3 mobile apps</b> to the App
            Store and Play Store for businesses across Kenya — from e-commerce stores and inventory systems to
            AI-assisted apps.</p>
            <p>My core stack is <b>React, Next.js, TypeScript, Node.js, and React Native</b>, backed by <b>Firebase</b>.
            I specialize in real payment integrations — <b className="hl">M-Pesa (Daraja), Pesapal, and Paystack</b> —
            and in building genuine systems that solve business problems, not just static pages. I care about fast,
            mobile-first experiences that perform on real-world Kenyan network conditions.</p>
            <p>I graduated with a <b>B.Sc. in Computer Science</b> from Riara University. I'm open to <b>full-stack,
            frontend, and mobile roles</b> — including remote.</p>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="dc-contact">
        <div className="dc-wrap">
          <h2>Let's build something<span className="ac">.</span></h2>
          <p>Open to full-stack, frontend, and mobile roles — remote or on-site. If you're hiring, let's talk.</p>
          <div className="dc-clinks">
            <a className="dc-btn pri" href="mailto:lewisweru.uu@gmail.com">✉ lewisweru.uu@gmail.com</a>
            <a className="dc-btn gh" href="https://github.com/Lewisweru" target="_blank" rel="noopener noreferrer">◆ GitHub</a>
            <a className="dc-btn gh" href="https://www.linkedin.com/in/onlylewis" target="_blank" rel="noopener noreferrer">in LinkedIn</a>
            <a className="dc-btn gh" href="https://wa.me/254727814888" target="_blank" rel="noopener noreferrer">✆ WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="dc-foot">
        <div className="dc-wrap">
          <span>© {new Date().getFullYear()} Lewis Weru · Nairobi, KE</span>
          <span>build: <span className="ac">stable</span> · deployed with care</span>
        </div>
      </footer>
    </div>
  );
}

function MediaPage() {
  const navigate = useNavigate();
  const [mediaLoading, setMediaLoading] = useState(true);
  const closeMediaPage = useCallback(() => navigate("/"), [navigate]);
  return (
    <div className="min-h-screen bg-black text-white">
      {mediaLoading ? (
        <MediaLoader onComplete={() => setMediaLoading(false)} />
      ) : (
        <Media onClose={closeMediaPage} />
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/media" element={<MediaPage />} />
    </Routes>
  );
}

export default App;
