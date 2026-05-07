import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/omeeba-logo.png";
import nucleus from "@/assets/omeeba-nucleus.png";
import { Apple, Play, Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omeeba — A social network for your story" },
      {
        name: "description",
        content: "Omeeba is a mobile-only social network. Download on iOS and Android.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "terms", label: "Terms" },
  { id: "privacy", label: "Privacy" },
  { id: "about", label: "About" },
  { id: "nucleus", label: "Omeeba Nucleus" },
  { id: "contact", label: "Contact" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`font-brand ${className}`}>Omeeba</span>;
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
            <a key={n.id} href={`#${n.id}`} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        {/* <a href="#home" className= "hidden md:inline-flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70">
           
        </a> */}
      </div>
    </header>
  );
}

function StoreButton({ kind }: { kind: "ios" | "android" }) {
  const isIos = kind === "ios";
  const href = isIos
    ? "https://apps.apple.com/in/app/omeeba/id6753140500"
    : "https://play.google.com/store/apps/details?id=com.omeeba.app&pcampaignid=web_share";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-float group inline-flex items-center gap-3 rounded-2xl bg-foreground text-background px-5 py-3.5 min-w-[180px]"
    >
      <span className="shrink-0">
        {isIos ? <Apple className="h-7 w-7" /> : <Play className="h-7 w-7 fill-current" />}
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] tracking-editorial opacity-70">
          {isIos ? "Download on the" : "Get it on"}
        </span>
        <span className="text-base font-semibold">{isIos ? "App Store" : "Google Play"}</span>
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vmin] w-[60vmin] rounded-full blur-3xl opacity-30 brand-ember-bg" />
      </div>

      <SectionLabel n="01" label="A social network for your story" />

      <div className="mt-10 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Omeeba"
          className="h-32 w-32 md:h-44 md:w-44 rounded-3xl shadow-[var(--shadow-float)] animate-float"
        />
        <h1 className="mt-10 font-brand text-7xl md:text-[9rem] leading-none text-foreground">
          Omeeba
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground font-display">
          Built to help you hype yourself, share your story, and connect with the world.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <StoreButton kind="ios" />
          <StoreButton kind="android" />
        </div>

        <p className="mt-6 text-xs tracking-editorial text-muted-foreground">
          Available on mobile only
        </p>
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
          <h2
            className={`font-display text-5xl md:text-6xl leading-[1.05] ${dark ? "text-background" : "text-foreground"}`}
          >
            {title}
          </h2>
        </div>
        <div className="md:col-span-8">
          <div
            className={`scrollbox ${dark ? "scrollbox-dark scroll-frame-dark" : "scroll-frame"} p-8 md:p-10 max-h-[460px] overflow-y-auto`}
          >
            <div className="space-y-5 text-[15px] leading-relaxed">
              {body.map((p, i) => (
                <p key={i} className={dark ? "text-background/80" : "text-foreground/80"}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TERMS = [
  "1. Create, Connect, Discover & Share. Omeeba offers a variety of features to help you create, share, and connect with others. We aim to support meaningful interactions and shared experiences that matter to you. Using the data you provide (like posts, interactions, and connections), Omeeba helps you discover and join experiences, communities, and content that align with your interests.",
  "2. Safe and Inclusive Community. We provide tools and features to help our community have positive and inclusive experiences. While Omeeba relies on MongoDB & a Node server to manage content and user data, we take steps to address reports of abuse, violations of our Terms, or harmful behavior. We may use the information you provide to help keep the platform safe and secure. In certain cases, we may share information about misuse or harmful content with law enforcement or other relevant parties as required. You can learn more about this in our Privacy Policy.",
  "3. Innovative Technology for Users. Organizing and managing information for our community is central to Omeeba. We use technologies like Google Firebase, MongoDB, Node.js, and other tools/AI tools to help store, retrieve, and secure data, ensuring the app functions smoothly and reliably for all users. These systems help us maintain the integrity of the Service and support features that let you connect, share, and interact.",
  "4. Meaningful Brand & Service Connections. We may use data from Omeeba and other sources to show you ads, offers, or sponsored content in the future. Our goal is to make these experiences relevant and helpful, while keeping your interactions on Omeeba a priority — smooth and enjoyable.",
  "5. Ensuring Service Access. To provide and operate Omeeba, we store and process your data using Google Firebase and MongoDB, which may involve transferring data to and from servers located outside your country of residence. This global infrastructure is necessary to deliver the Service. For more details on how your data is handled, please see our Privacy Policy.",
  "6. Research and Innovation. We use the information stored in Omeeba to improve the Service and ensure it works well for our community. This includes understanding how features are used and making updates that help everyone have a better experience.",
  "7.1 Who Can Use Omeeba. You must be at least 13 years old (or the minimum legal age in your country). You cannot be prohibited from using the Service under applicable law or appear on any denied party lists. You must not have had a previous Omeeba account disabled for violating the law or our policies. You must not be a convicted sex offender.",
  "7.2 How You Must Use Omeeba. Provide accurate information; you may remain anonymous, but your registration info must be correct and up to date. Do not impersonate anyone or create accounts for others without permission. Do not use Omeeba for unlawful, misleading, fraudulent, or unauthorized purposes. Do not violate these Terms or any Omeeba policies, including attempts to bypass system protections. Do not collect, sell, or share Omeeba account data, login credentials, or other users' private information. Do not post content that infringes on someone else's rights, including intellectual property, unless legally permitted. You may use others' content only under applicable law exceptions. You may not use a domain name or URL as your username without written consent.",
  "7.3 Permissions You Give to Us. You retain ownership of your content, but grant Omeeba a non-exclusive, royalty-free, worldwide license to host, use, distribute, display, modify, and create derivative works from your content, consistent with your privacy settings. This license ends when you delete your content. You give Omeeba permission to use your username, profile picture, and any content you share in connection with the Service, including potential future features like ads or sponsored content.",
  "8. User Content Responsibility. By posting or uploading any content (including but not limited to photos, videos, writings, polls, or any other material) on Omeeba, you confirm that you are the sole owner of such content, or you have obtained all necessary rights, licenses, or permissions to use and share it. You are fully responsible for the content you post, including its accuracy, legality, and compliance with copyright and intellectual property laws. Omeeba and its operators will not be held liable for any claims, disputes, or damages arising from content uploaded by users.",
  "9. Updating These Terms of Use. We may change our Service and policies, and we may need to make changes to these Terms of Use so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes and give you an opportunity to review them before they go into effect. If you continue to access or use the Service, you will be bound by the updated Terms. If you do not agree, you can terminate your agreement by deleting your account and no longer accessing or using any part of the Omeeba Service.",
  "Contact. For questions about these terms, please reach us at support@omeeba.co.in.",
];

const PRIVACY = [
  "1. Information We Collect. When you use Omeeba, we collect a minimal amount of information necessary to provide and improve the Service.",
  "1.1 Information You Provide. To create an Omeeba account, you provide certain details, including username and display name (you can use your real name or a pseudonym), email address or phone number for account verification and notifications, and profile information such as your bio and profile picture. All accounts on Omeeba are public, so your username, display name, and profile picture are visible to everyone. You are responsible for the content you post and for keeping your account information accurate and up to date.",
  "1.2 Information We Collect Automatically. When you use Omeeba, we automatically collect information to help us run the Service safely and efficiently, including usage activity: posts, likes, comments, and interactions with other users' content.",
  "1.3 How We Use Your Information. We use the information we collect to provide and maintain the Omeeba Service, protect the community and ensure safety, and improve features and understand how the Service is used. Note: We do not sell your personal data. However, we may use trusted third-party services such as cloud storage providers (e.g., Firebase, MongoDB) to operate and maintain the platform.",
  "2. How We Use Information. Even with a simple setup, the information we collect helps us provide and improve Omeeba for everyone.",
  "2.1 Operate and Improve Omeeba. We use the information you provide to run the Omeeba service, make it reliable, and improve your experience. This includes making sure content displays correctly, your posts and interactions work smoothly, and new features function as intended.",
  "2.2 Ensure Safety and Security. We use information to protect users and Omeeba itself. This includes verifying accounts, preventing unauthorized access, and keeping the community safe and secure.",
  "2.3 Analyze and Enhance the Service. We review information about how Omeeba is used to understand patterns, troubleshoot issues, and improve features, performance, and overall user experience.",
  "2.4 Communicate with You. We may use your contact info to inform you about updates to Omeeba, changes to our policies, or important service announcements.",
  "2.5 Research and Development. We may use information to test new features, conduct surveys, or improve the app's usability, reliability, and performance.",
  "3. How Long We Keep Information. Account Information: your profile details (username, display name, email) are kept for as long as your account exists. Content and Interactions: posts you share and your interactions with others are kept for as long as your account exists or until you delete the content. Communication with Us: if you contact us via email or other methods, we may keep a record of the communication for up to a few months, unless retaining it longer is necessary to comply with the law or protect Omeeba's rights. Safety and Legal Obligations: if you violate Omeeba's rules and your account is suspended, we delete all your information. Important Note: even after you delete content, it may remain visible elsewhere (e.g., search engines or third-party platforms) based on their own policies.",
  "4. Your Rights and Ours. Omeeba is available to users worldwide, and we provide the same privacy tools and controls to all of our users, irrespective of where you live.",
  "4.1 Legal basis for using your information. We only collect, use, and process your information when we have a clear legal reason to do so. For example, we need your data to provide, maintain, and improve Omeeba. We do not sell your personal information.",
  "4.2 Moving your data globally. Omeeba is designed to work seamlessly for users around the world. This means your information may be transferred across borders — such as if you interact with someone in another country — to provide a safe and reliable service. We use cloud services and other trusted partners to help run Omeeba.",
  "5. Changes To This Privacy Policy. The most current version of this Privacy Policy governs our processing of your personal data, and we may revise this Privacy Policy from time to time as needed. If we make changes that are determined by us to be material, we will provide you notice and an opportunity to review the revised Privacy Policy before you continue to use Omeeba.",
  "Contact. Questions about your data? Write to support@omeeba.co.in.",
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
    "your story, and your passions with loved ones.",
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
                  i < 3
                    ? "text-3xl md:text-5xl text-foreground"
                    : "text-xl md:text-2xl text-muted-foreground"
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
    <section
      id="nucleus"
      className="relative py-32 px-6 bg-foreground text-background overflow-hidden"
    >
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
            Our annual festival of innovation, partnerships, exhibitions, and unforgettable
            concerts. A vibrant hub where creativity meets collaboration — shaping tomorrow's
            culture and connections, every year.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-background/20 px-5 py-2 text-xs tracking-editorial text-background/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.62_0.18_45)] animate-pulse" />
            Dates Announcing Soon
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full brand-ember-bg blur-2xl opacity-40" />
          <img
            src={nucleus}
            alt="Omeeba Nucleus"
            className="relative h-80 md:h-[28rem] w-auto animate-float drop-shadow-2xl"
          />
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
            Omeeba is located (virtually) from the heart of Hsp, Punjab, and we're always eager to
            connect with our users — and new users alike. Feel free to reach out to us via email for
            any inquiries or assistance.
          </p>
          <a
            href="mailto:hello@omeeba.co.in"
            className="hover-float group inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-6 w-full md:w-auto"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
              <Mail className="h-5 w-5" />
            </span>
            <span className="flex flex-col text-left">
              <span className="text-xs tracking-editorial text-muted-foreground">Write to us</span>
              <span className="text-xl font-medium text-foreground">hello@omeeba.co.in</span>
            </span>
            <ArrowUpRight className="ml-4 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>

      <footer className="mx-auto max-w-5xl mt-32 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-editorial">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-5 w-5 rounded" />
          <span className="font-brand text-base normal-case tracking-normal text-foreground">
            Omeeba
          </span>
        </div>
        <span>© {new Date().getFullYear()} Omeeba Pvt Ltd</span>
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
export default Index;
