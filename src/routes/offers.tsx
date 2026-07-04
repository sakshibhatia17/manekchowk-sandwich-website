import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Gift, Sparkles, Timer } from "lucide-react";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers — ManekChowk Sandwich" },
      { name: "description", content: "Limited-time deals, festival specials and the ManekChowk loyalty program." },
      { property: "og:url", content: "/offers" },
      { property: "og:title", content: "Offers — ManekChowk Sandwich" },
      { property: "og:description", content: "Buy 1 Get 1, festival specials, and rewards for every 10 orders." },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
  component: OffersPage,
});

const OFFERS = [
  { title: "Buy 1 Get 1 · Every Tuesday", desc: "On every signature sandwich. All 8 branches.", code: "SIGTUE", tone: "brand" },
  { title: "Cheese Pull @ ₹99", desc: "Weekdays, 3 to 6 PM only.", code: "PULL99", tone: "gold" },
  { title: "Combo Meals from ₹199", desc: "Sandwich + fries + cold coffee. Any branch.", code: "COMBO199", tone: "green" },
  { title: "Weekend Family Feast", desc: "Serves 4 · Save ₹250 on Saturday and Sunday.", code: "FAMILY4", tone: "brand" },
];

function OffersPage() {
  return (
    <>
      <section className="bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Offers"
            title={<>Deals worth <span className="text-gradient-brand">crossing town for.</span></>}
            subtitle="Limited-time drops, festival specials, and a loyalty program built to be actually used."
          />
        </div>
      </section>

      <CountdownBanner />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-8">
          {OFFERS.map((o, i) => (
            <motion.article
              key={o.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl border border-border p-8 ${
                o.tone === "brand" ? "bg-gradient-brand text-white" : o.tone === "gold" ? "bg-[color:var(--brand-gold)] text-[color:var(--brand-ink)]" : "bg-[color:var(--brand-green)] text-white"
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/20 blur-2xl" />
              <Ticket className="size-8 opacity-80" />
              <h3 className="mt-4 font-display text-2xl font-black md:text-3xl">{o.title}</h3>
              <p className="mt-2 max-w-sm text-sm opacity-85">{o.desc}</p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border-2 border-dashed border-current/40 px-4 py-2">
                <span className="text-xs uppercase tracking-widest opacity-80">Code</span>
                <span className="font-display text-lg font-black tracking-widest">{o.code}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <LoyaltySection />
    </>
  );
}

function CountdownBanner() {
  const [t, setT] = useState({ d: 3, h: 12, m: 45, s: 8 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let { d, h, m, s } = p;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        return { d: Math.max(0, d), h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[color:var(--brand-ink)] p-8 text-white md:p-14">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(500px_300px_at_20%_20%,color-mix(in_oklab,var(--brand-red)_40%,transparent),transparent_60%),radial-gradient(500px_300px_at_80%_80%,color-mix(in_oklab,var(--brand-gold)_30%,transparent),transparent_60%)]" />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-gold)]">
              <Timer className="size-3.5" /> Ends in
            </span>
            <h3 className="mt-4 font-display text-3xl font-black md:text-5xl">Diwali Signature Drop</h3>
            <p className="mt-2 max-w-md text-white/70">Two festival sandwiches, three limited-edition shakes. Only at ManekChowk.</p>
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {[
              { l: "Days", v: t.d },
              { l: "Hrs", v: t.h },
              { l: "Min", v: t.m },
              { l: "Sec", v: t.s },
            ].map((x) => (
              <div key={x.l} className="min-w-16 rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-center backdrop-blur">
                <p className="font-display text-3xl font-black">{String(x.v).padStart(2, "0")}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/60">{x.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LoyaltySection() {
  const perks = [
    { icon: Sparkles, title: "Free sandwich", text: "Every 10th order is on us. Every branch. Every time." },
    { icon: Gift, title: "Referral rewards", text: "Refer a friend, get ₹100 off. They get ₹100 too." },
    { icon: Ticket, title: "Gift cards", text: "Digital gift cards from ₹200. Redeem across all branches." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading align="center" eyebrow="Loyalty Program" title={<>Rewards that actually <span className="text-gradient-brand">reward.</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="glass-strong rounded-3xl p-8 text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_27/0.6)]">
                <p.icon className="size-6" />
              </div>
              <h4 className="mt-5 font-display text-xl font-bold">{p.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
