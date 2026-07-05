import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  MapPin,
  Star,
  Leaf,
  Flame,
  Sparkles,
  Timer,
  Apple,
  Play,
  ChevronRight,
  Phone,
  Store,
  Users,
  Award,
  Utensils,
} from "lucide-react";

import heroSandwich from "@/assets/hero-sandwich.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import { DISHES, BRANCHES, TESTIMONIALS } from "@/data/menu";
import { SectionHeading, SectionEyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manekchowk Pizza Sandwich [Manekchowk Wala] — Ahmedabad's Most Loved Sandwich Experience" },
      {
        name: "description",
        content:
          "Premium sandwiches, pizzas, burgers and shakes across 8 branches in Ahmedabad. Cinematic taste, fast service, franchise-ready.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SignatureCarousel />
      <StorySection />
      <Categories />
      <WhyChooseUs />
      <BranchesPreview />
      <Testimonials />
      <AppPromo />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative -mt-16 flex min-h-[100svh] items-center overflow-hidden bg-[oklch(0.11_0.005_260)] pt-16 md:-mt-20 md:pt-20">
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_20%,color-mix(in_oklab,var(--brand-orange)_35%,transparent),transparent_60%),radial-gradient(900px_500px_at_80%_60%,color-mix(in_oklab,var(--brand-gold)_28%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[oklch(0.09_0.005_260)]/60" />
      </motion.div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:px-8 lg:grid-cols-12">
        <div className="text-white lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
              <Sparkles className="size-3.5 text-[color:var(--brand-gold)]" />
              Ahmedabad's Original Since 2001 · 8 branches
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.75rem)] font-black leading-[0.95] tracking-tight"
          >
            Ahmedabad's <span className="text-gradient-brand">Original</span> <br />
            Pizza & Sandwich <br /> Destination.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/80 md:text-lg flex flex-wrap gap-2 items-center"
          >
            <span>Fresh Ingredients</span> <span className="text-[color:var(--brand-gold)]">•</span>
            <span>Premium Cheese</span> <span className="text-[color:var(--brand-gold)]">•</span>
            <span>100% Veg</span> <span className="text-[color:var(--brand-gold)]">•</span>
            <span>Fast Service</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_oklch(0.65_0.22_45/0.8)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Order Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore Menu
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              <MapPin className="size-4" /> Find Nearest Branch
            </Link>
            <Link
              to="/franchise"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-gold)] transition hover:text-white"
            >
              Franchise Partner <ChevronRight className="size-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="size-8 rounded-full border-2 border-[oklch(0.11_0.005_260)] bg-gradient-to-br from-[color:var(--brand-orange)] to-[color:var(--brand-gold)]"
                  />
                ))}
              </div>
              <span>100,000+ happy customers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="size-4 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />
              <span className="font-semibold text-white">4.9</span>
              <span>average rating</span>
            </div>
          </motion.div>
        </div>

        {/* Floating sandwich */}
        <div className="relative lg:col-span-6">
          <motion.div
            style={{ x: mouse.x, y: mouse.y }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* glow */}
            <div className="absolute inset-8 rounded-full bg-[color:var(--brand-orange)] opacity-40 blur-3xl" />
            <div className="absolute inset-16 rounded-full bg-[color:var(--brand-gold)] opacity-30 blur-3xl" />

            <motion.div
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative size-full"
            >
              <img
                src={heroSandwich}
                alt="Signature cheese pull sandwich"
                width={1600}
                height={1600}
                className="relative size-full rounded-[2.5rem] object-cover shadow-[0_60px_120px_-30px_oklch(0.55_0.22_27/0.7)] ring-1 ring-white/10"
              />
            </motion.div>

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 rounded-2xl glass-strong px-4 py-3 text-white shadow-2xl md:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-[color:var(--brand-orange)]">
                  <Flame className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60">Hot & Fresh</p>
                  <p className="text-sm font-bold">Made in 6 min</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 bottom-16 rounded-2xl glass-strong px-4 py-3 text-white shadow-2xl md:-right-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-[color:var(--brand-green)]">
                  <Leaf className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60">100% Veg</p>
                  <p className="text-sm font-bold">Chef-crafted</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-2 left-6 rounded-2xl glass-strong px-4 py-3 text-white shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <Star className="size-4 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />
                <p className="text-sm font-bold">4.9 · Google</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Manekchowk Sp. Sandwich",
    "Italian Double Cheese Pizza",
    "Cheese Garlic Grill",
    "Cheese French Fries",
    "Sp. Cold Coffee",
    "Jini Dosa",
    "Mysore Masala Dosa",
    "Butter Maskabun",
  ];
  const doubled = [...items, ...items];
  return (
    <section className="border-y border-border bg-[color:var(--brand-ink)] py-4 text-[color:var(--brand-cream)]">
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-10 whitespace-nowrap pr-10">
          {doubled.map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-lg font-bold uppercase tracking-[0.2em]">
              {t}
              <span className="text-[color:var(--brand-gold)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BEST SELLERS ---------------- */
function SignatureCarousel() {
  const signatures = DISHES.filter((d) => d.popular);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Best Sellers"
            title={
              <>
                Cinematic bites, <br />
                <span className="text-gradient-brand">crafted daily.</span>
              </>
            }
            subtitle="The most loved dishes from our menu. Every one photographed, tasted, and re-tasted."
          />
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="grid size-12 place-items-center rounded-full border border-border bg-card transition hover:bg-muted"
            >
              <ArrowRight className="size-5 rotate-180" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="grid size-12 place-items-center rounded-full bg-gradient-brand text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_27/0.6)]"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
        >
          {signatures.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group card-tilt card-tilt-hover relative w-[300px] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-border bg-card md:w-[360px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="rounded-full bg-[color:var(--brand-orange)]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Popular
                  </span>
                  {d.veg && (
                    <span className="grid size-6 place-items-center rounded border border-white/60 bg-black/40">
                      <span className="size-2 rounded-full bg-[color:var(--brand-green)]" />
                    </span>
                  )}
                </div>
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="size-3.5 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />
                    {d.rating} · {d.cal} cal
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight">{d.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-white/70">{d.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <span className="font-display text-xl font-black">₹{d.price}</span>
                <button className="group/btn flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-orange)] hover:text-white">
                  Quick Add
                  <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function StorySection() {
  const timeline = [
    { year: "2001", title: "The Beginning", text: "Founded by Gajendra Singh Rathod with a vision to redefine street food." },
    { year: "2018", title: "First Store", text: "A single counter on KK Nagar Road. The famous Cheese Pull sandwich is born." },
    { year: "2021", title: "Signature Era", text: "Going viral across Ahmedabad. Waitlists become the norm." },
    { year: "2026", title: "8 Branches", text: "Premium, hygienic, franchise-ready. Preparing for national scale." },
  ];

  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-cream)] py-24 text-[color:var(--brand-ink)] md:py-32 dark:bg-[oklch(0.16_0.008_260)] dark:text-foreground">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 size-40 rounded-full bg-[color:var(--brand-orange)]/20 blur-3xl" />
          <img
            src={storeInterior}
            alt="Manekchowk Pizza Sandwich [Manekchowk Wala] restaurant interior"
            width={1600}
            height={1000}
            loading="lazy"
            className="relative aspect-[4/5] size-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-black/10"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-background/90 p-4 shadow-xl backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Est.</p>
            <p className="font-display text-3xl font-black text-gradient-brand">2001</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                Street-food soul. <br />
                <span className="text-gradient-brand">Premium finish.</span>
              </>
            }
            subtitle="Inspired by Ahmedabad's iconic Manek Chowk night market. Reimagined as a modern, hygienic, chef-led sandwich chain."
          />

          <ol className="mt-10 space-y-6">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="relative">
                  <div className="grid size-14 place-items-center rounded-2xl bg-gradient-brand font-display text-xs font-black text-white">
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="absolute left-1/2 top-14 h-10 w-px -translate-x-1/2 bg-border" />
                  )}
                </div>
                <div className="pt-1">
                  <h4 className="font-display text-lg font-bold">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  const cats = [
    { name: "Sandwich", icon: Utensils, count: 24, hue: "from-[color:var(--brand-orange)] to-[color:var(--brand-gold)]" },
    { name: "Pizza", icon: Flame, count: 12, hue: "from-orange-500 to-yellow-500" },
    { name: "Dosa", icon: Star, count: 9, hue: "from-red-600 to-rose-500" },
    { name: "Bhaji Pav", icon: Leaf, count: 6, hue: "from-emerald-500 to-lime-500" },
    { name: "Pulav", icon: Sparkles, count: 8, hue: "from-amber-500 to-orange-600" },
    { name: "Ice Cream Sandwich", icon: Timer, count: 10, hue: "from-stone-700 to-amber-700" },
    { name: "Shakes", icon: Star, count: 11, hue: "from-pink-500 to-fuchsia-600" },
    { name: "Desserts", icon: Sparkles, count: 7, hue: "from-purple-500 to-rose-500" },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="The Full Menu"
          title={
            <>
              Nine categories.
              <br /> <span className="text-gradient-brand">Endless cravings.</span>
            </>
          }
          subtitle="From viral sandwiches to late-night shakes, every category is chef-tested and refreshed each season."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cats.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.55_0.22_27/0.4)]"
            >
              <div
                className={`absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br ${c.hue} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />
              <div className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${c.hue} text-white shadow-lg`}>
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.count} items</p>
              <Link
                to="/menu"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-orange)]"
              >
                Explore <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
function WhyChooseUs() {
  const features = [
    { title: "Premium Cheese", icon: Flame, text: "Only the highest quality cheese for that perfect, cinematic pull." },
    { title: "Fresh Ingredients", icon: Sparkles, text: "Farm-fresh vegetables and house-made sauces prepared daily." },
    { title: "100% Veg", icon: Leaf, text: "A purely vegetarian kitchen, ensuring complete peace of mind." },
    { title: "Authentic Taste", icon: Utensils, text: "The true street food soul of Manek Chowk, refined for you." },
    { title: "Fast Service", icon: Timer, text: "Hot and fresh meals served with lightning speed." },
    { title: "8 Branches", icon: Store, text: "Always nearby. Conveniently located across Ahmedabad." },
  ];

  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-ink)] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_300px_at_10%_50%,color-mix(in_oklab,var(--brand-orange)_45%,transparent),transparent_60%),radial-gradient(600px_300px_at_90%_50%,color-mix(in_oklab,var(--brand-gold)_30%,transparent),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="The Manekchowk Wala Difference"
          title={
            <>
              Why <span className="text-gradient-brand">Choose Us?</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8 transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-gradient-brand shadow-lg">
                <f.icon className="size-5 text-white" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BRANCHES PREVIEW ---------------- */
function BranchesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Find us in Ahmedabad"
            title={
              <>
                8 branches. <br />
                <span className="text-gradient-brand">One flavor.</span>
              </>
            }
          />
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-muted"
          >
            View all locations <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {BRANCHES.slice(0, 4).map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-[color:var(--brand-orange)]/40 hover:shadow-xl"
            >
              <MapPin className="size-6 text-[color:var(--brand-orange)]" />
              <h3 className="mt-4 font-display text-lg font-bold">{b.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.area}, Ahmedabad</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Timer className="size-3.5" />
                {b.hours}
              </div>
              <div className="mt-5 flex gap-2">
                <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="flex-1 rounded-full bg-gradient-brand py-2 text-center text-xs font-semibold text-white">
                  Call
                </a>
                <a href="#" className="flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold">
                  Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-warm opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Loved on Google"
          title={
            <>
              What Ahmedabad <br />
              <span className="text-gradient-brand">is saying.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-3xl p-6 shadow-[0_20px_60px_-30px_oklch(0.55_0.22_27/0.35)]"
            >
              <div className="flex gap-0.5 text-[color:var(--brand-gold)]">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-brand" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- APP PROMO ---------------- */
function AppPromo() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Coming soon"
              title={
                <>
                  Order faster on the <br />
                  <span className="text-gradient-brand">Manekchowk Wala app.</span>
                </>
              }
              subtitle="Reorder in one tap. Track your sandwich live. Earn a free one after every 10 orders."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background">
                <Play className="size-5" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-70">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background">
                <Apple className="size-5" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-70">Download on</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </a>
              <div className="grid size-16 place-items-center rounded-2xl border-2 border-dashed border-border p-2 text-center text-[10px] font-semibold text-muted-foreground">
                QR<br />CODE
              </div>
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-brand opacity-40 blur-3xl" />
            <div className="relative size-full rounded-[3rem] border-[10px] border-[color:var(--brand-ink)] bg-[color:var(--brand-ink)] shadow-2xl">
              <div className="size-full overflow-hidden rounded-[2.2rem] bg-[color:var(--brand-cream)] p-6">
                <div className="flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-black text-white">M</div>
                  <div className="size-3 rounded-full bg-[color:var(--brand-orange)]" />
                </div>
                <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Good evening,</p>
                <p className="font-display text-2xl font-black">Hungry?</p>
                <div className="mt-5 rounded-2xl bg-white p-4 shadow">
                  <div className="flex items-center gap-3">
                    <img src={heroSandwich} alt="" className="size-16 rounded-xl object-cover" />
                    <div>
                      <p className="text-sm font-bold">Cheese Pull</p>
                      <p className="text-xs text-muted-foreground">Reorder · ₹189</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-2xl bg-white p-3 text-center">
                    <p className="font-display text-xl font-black text-[color:var(--brand-orange)]">7</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Orders to free</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-brand p-3 text-center text-white">
                    <p className="font-display text-xl font-black">₹120</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-80">Rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8 md:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[color:var(--brand-ink)] p-8 text-white md:p-16">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(600px_300px_at_20%_20%,color-mix(in_oklab,var(--brand-red)_35%,transparent),transparent_60%),radial-gradient(600px_300px_at_80%_80%,color-mix(in_oklab,var(--brand-gold)_25%,transparent),transparent_60%)]" />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionEyebrow>Franchise partner program</SectionEyebrow>
            <h3 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
              Own the future of India's<br />
              <span className="text-gradient-brand">sandwich culture.</span>
            </h3>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-md text-white/70">
              Proven unit economics. Full ops support. Cinematic brand. We're now inviting franchise partners across Tier-1 and Tier-2 cities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/franchise"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white"
              >
                Apply Now <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white"
              >
                <Phone className="size-4" /> Talk to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
