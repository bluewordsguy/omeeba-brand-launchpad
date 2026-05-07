import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/omeeba-logo.png";
import nucleus from "@/assets/omeeba-nucleus.png";
import { Apple, Play, Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omeeba — A social network for your story" },
      { name: "description", content: "Omeeba is a mobile-only social network. Download on iOS and Android." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "terms", label: "Terms" },
  { id: "privacy", label: "Privacy" },
  { id: "about", label: "About" },
  { id: "nucleus", label: "Nucleus" },
  { id: "contact", label: "Contact" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-brand ${className}`}>Omeeba</span>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-editorial text-muted-foreground">
      <span className="font-mono">{n}</span>
      <span className="h-px w-8 bg-border" />
      <span>{label}</span>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Omeeba" className="h-7 w-7 rounded-md" />
          <Wordmark className="text-2xl text-foreground" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-foreground transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#home" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
          Get the app <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function StoreButton({ kind }: { kind: "ios" | "android" }) {
  const isIos = kind === "ios";
  return (
    <a
      href="#"
      className="hover-float group inline-flex items-center gap-3 rounded-2xl bg-foreground text-background px-5 py-3.5 min-w-[180px]"
    >
      <span className="shrink-0">
        {isIos ? <Apple className="h-7 w-7" /> : <Play className="h-7 w-7 fill-current" />}
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] tracking-editorial opacity-70">{isIos ? "Download on the" : "Get it on"}</span>
        <span className="text-base font-semibold">{isIos ? "App Store" : "Google Play"}</span>
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vmin] w-[60vmin] rounded-full blur-3xl opacity-30 brand-ember-bg" />
      </div>

      <SectionLabel n="01" label="A social network for your story" />

      <div className="mt-10 flex flex-col items-center text-center">
        <img src={logo} alt="Omeeba" className="h-32 w-32 md:h-44 md:w-44 rounded-3xl shadow-[var(--shadow-float)] animate-float" />
        <h1 className="mt-10 font-brand text-7xl md:text-[9rem] leading-none text-foreground">
          Omeeba
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground font-display">
          A mobile-only social network — built to help you hype yourself, share your story, and connect with the world.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <StoreButton kind="ios" />
          <StoreButton kind="android" />
        </div>

        <p className="mt-6 text-xs tracking-editorial text-muted-foreground">Available on mobile only</p>
      </div>
    </section>
  );
}

function ScrollSection({
  id,
  number,
  label,
  title,
  body,
  variant = "light",
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  body: string[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <section
      id={id}
      className={`relative py-28 px-6 ${dark ? "bg-foreground text-background" : "bg-background text-foreground"}`}
    >
      {dark && (
        <div className="absolute inset-0 -z-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl brand-ember-bg" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-6">
          <SectionLabel n={number} label={label} />
          <h2 className={`font-display text-5xl md:text-6xl leading-[1.05] ${dark ? "text-background" : "text-foreground"}`}>
            {title}
          </h2>
        </div>
        <div className="md:col-span-8">
          <div
            className={`scrollbox ${dark ? "scrollbox-dark scroll-frame-dark" : "scroll-frame"} p-8 md:p-10 max-h-[460px] overflow-y-auto`}
          >
            <div className="space-y-5 text-[15px] leading-relaxed">
              {body.map((p, i) => (
                <p key={i} className={dark ? "text-background/80" : "text-foreground/80"}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TERMS = [
  "Welcome to Omeeba. By accessing or using our mobile application, you agree to be bound by these Terms & Conditions. Please read them carefully before continuing.",
  "Eligibility. You must be at least 13 years old to create an account. By using Omeeba, you represent that you meet this requirement and that all information you provide is accurate.",
  "Your Content. You retain full ownership of the content you post. By sharing on Omeeba, you grant us a non-exclusive, worldwide license to host, display, and distribute that content within the platform.",
  "Acceptable Use. You agree not to upload unlawful, harmful, or infringing material. We reserve the right to suspend accounts that violate community guidelines or applicable law.",
  "Service Changes. Omeeba is continuously evolving. Features may be added, modified, or removed at any time. We will make reasonable effort to communicate significant changes to our community.",
  "Termination. You may stop using Omeeba at any time. We may suspend or terminate access for violations of these terms or where required by law.",
  "Liability. Omeeba is provided 'as is' without warranties of any kind. To the maximum extent permitted by law, we are not liable for indirect or consequential damages.",
  "Governing Law. These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Punjab.",
  "Contact. For questions about these terms, please reach us at hello@omeeba.app.",
];

const PRIVACY = [
  "Your privacy matters. This Privacy Policy explains how Omeeba collects, uses, and safeguards information when you use our mobile application.",
  "Information We Collect. Account data (name, email, profile), content you create, device identifiers, and basic analytics required to operate and improve the service.",
  "How We Use It. To deliver core features, personalize your feed, keep the platform safe, and communicate important updates. We do not sell your personal data.",
  "Sharing. We share information only with service providers under strict confidentiality, when required by law, or with your explicit consent.",
  "Your Choices. You can edit your profile, control visibility of posts, manage notifications, and request deletion of your account at any time from within the app.",
  "Security. We employ industry-standard encryption in transit and at rest, with continuous monitoring to protect your information.",
  "Children. Omeeba is not directed to children under 13. If we learn that we have collected data from a child without consent, we will delete it promptly.",
  "Changes. We may update this policy as Omeeba grows. We will notify you of meaningful changes through the app or via email.",
  "Contact. Questions about your data? Write to privacy@omeeba.app.",
];

function About() {
  const lines = [
    "Omeeba is everything you need to hype yourself :)",
    "A social network giving you the most outta there.",
    "A social network for your story.",
    "",
    "Omeeba is built to give you the most out there.",
    "We're focused on delivering multi-level satisfaction for creators and users alike —",
    "a warm space to connect, create, and share yourself,",
    "your story, and your passions with loved ones",
    "and people across the globe.",
  ];
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <SectionLabel n="04" label="About Us" />
        <div className="mt-12 space-y-3">
          {lines.map((l, i) =>
            l === "" ? (
              <div key={i} className="h-6" />
            ) : (
              <p
                key={i}
                className={`font-display leading-tight ${
                  i < 3 ? "text-3xl md:text-5xl text-foreground" : "text-xl md:text-2xl text-muted-foreground"
                }`}
              >
                {l}
              </p>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Nucleus() {
  return (
    <section id="nucleus" className="relative py-32 px-6 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-20 right-0 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-40 brand-ember-bg" />
      </div>
      <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 text-xs tracking-editorial text-background/60">
            <span className="font-mono">05</span>
            <span className="h-px w-8 bg-background/30" />
            <span>Coming Soon</span>
          </div>
          <h2 className="mt-8 font-brand text-6xl md:text-7xl text-background">Omeeba</h2>
          <h3 className="font-display text-5xl md:text-6xl mt-1 text-background/90">Nucleus</h3>
          <p className="mt-8 text-base md:text-lg text-background/70 max-w-md leading-relaxed">
            Our annual festival of innovation, partnerships, exhibitions, and unforgettable concerts. A vibrant hub where creativity meets collaboration — shaping tomorrow's culture and connections, every year.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-background/20 px-5 py-2 text-xs tracking-editorial text-background/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.62_0.18_45)] animate-pulse" />
            Save the date — 2026
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full brand-ember-bg blur-2xl opacity-40" />
          <img src={nucleus} alt="Omeeba Nucleus" className="relative h-80 md:h-[28rem] w-auto animate-float drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <SectionLabel n="06" label="Contact Us" />
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] text-foreground">
            Let's stay in touch.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed font-display">
            Omeeba is located (virtually) from the heart of Hsp, Punjab, and we're always eager to connect with our users — and new users alike. Feel free to reach out to us via email for any inquiries or assistance.
          </p>
          <a
            href="mailto:hello@omeeba.app"
            className="hover-float group inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-6 w-full md:w-auto"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
              <Mail className="h-5 w-5" />
            </span>
            <span className="flex flex-col text-left">
              <span className="text-xs tracking-editorial text-muted-foreground">Write to us</span>
              <span className="text-xl font-medium text-foreground">hello@omeeba.app</span>
            </span>
            <ArrowUpRight className="ml-4 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>

      <footer className="mx-auto max-w-5xl mt-32 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-editorial">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-5 w-5 rounded" />
          <span className="font-brand text-base normal-case tracking-normal text-foreground">Omeeba</span>
        </div>
        <span>© {new Date().getFullYear()} Omeeba — Hsp, Punjab</span>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ScrollSection
          id="terms"
          number="02"
          label="Terms & Conditions"
          title={"The fine print, written plainly."}
          body={TERMS}
        />
        <ScrollSection
          id="privacy"
          number="03"
          label="Privacy Policy"
          title={"Your story, kept safe."}
          body={PRIVACY}
          variant="dark"
        />
        <About />
        <Nucleus />
        <Contact />
      </main>
    </div>
  );
}
