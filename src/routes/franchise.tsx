import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Store, Download, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise — ManekChowk Sandwich" },
      { name: "description", content: "Own the future of India's sandwich culture. Franchise investment starts at ₹35L with full ops support." },
      { property: "og:url", content: "/franchise" },
      { property: "og:title", content: "Franchise — ManekChowk Sandwich" },
      { property: "og:description", content: "Proven unit economics. Cinematic brand. Now inviting partners across India." },
    ],
    links: [{ rel: "canonical", href: "/franchise" }],
  }),
  component: FranchisePage,
});

const benefits = [
  "Fully assisted site scouting and store design",
  "Standardised, chef-tested recipes and central sauce facility",
  "3-week hands-on staff training at our flagship kitchen",
  "Marketing, launch and social campaigns handled centrally",
  "POS, inventory, supply chain and app fully integrated",
  "Ongoing R&D drops — new dishes every quarter",
];

const numbers = [
  { k: "₹35L", v: "Total investment" },
  { k: "18mo", v: "Avg. ROI period" },
  { k: "42%", v: "Gross margin" },
  { k: "8 / 8", v: "Profitable stores" },
];

function FranchisePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(700px_400px_at_20%_20%,color-mix(in_oklab,var(--brand-orange)_40%,transparent),transparent_60%),radial-gradient(600px_400px_at_80%_60%,color-mix(in_oklab,var(--brand-gold)_28%,transparent),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">
            <Store className="size-3.5" /> Franchise Partner Program
          </span>
          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] md:text-7xl">
            Own the future of <br />
            <span className="text-gradient-brand">India's sandwich culture.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70 md:text-lg">
            A proven, franchise-ready brand from Ahmedabad. Now inviting partners across Tier-1 and Tier-2 cities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white">
              Apply Now <ArrowRight className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white">
              <Download className="size-4" /> Download Brochure
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-4 md:px-8">
          {numbers.map((n, i) => (
            <motion.div
              key={n.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <p className="font-display text-4xl font-black text-gradient-brand">{n.k}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">{n.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="What you get"
              title={<>A partnership, <span className="text-gradient-brand">not a licence.</span></>}
              subtitle="From location scouting to marketing, every part of the business comes wired in."
            />
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[color:var(--brand-green)]" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-2xl">
            <div className="flex items-center gap-3">
              <TrendingUp className="size-6 text-[color:var(--brand-orange)]" />
              <p className="font-display text-lg font-bold">Growth trajectory</p>
            </div>
            <div className="mt-6 flex items-end gap-3">
              {[30, 55, 70, 90, 65, 110, 140, 170].map((h, i) => (
                <div key={i} className="flex-1">
                  <div
                    className="w-full rounded-t-xl bg-gradient-brand"
                    style={{ height: `${h}px` }}
                  />
                  <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                    Q{(i % 4) + 1}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Store-count growth, 2022 → 2026. Ahmedabad-only footprint. National rollout starting 2026.
            </p>
          </div>
        </div>
      </section>

      <section id="apply" className="py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeading
            align="center"
            eyebrow="Apply"
            title={<>Let's build the <span className="text-gradient-brand">next store together.</span></>}
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! Our franchise team will reach out within 24 hours.");
            }}
            className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-8 shadow-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Your name" />
              <Field label="City" name="city" placeholder="Preferred city" />
              <Field label="Phone" name="phone" placeholder="+91" type="tel" />
              <Field label="Email" name="email" placeholder="you@example.com" type="email" />
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Tell us about yourself</span>
              <textarea
                required
                rows={4}
                placeholder="Investment capacity, past F&B experience, location shortlist…"
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]/40"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-bold text-white"
            >
              <Users className="size-4" /> Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]/40"
      />
    </label>
  );
}
