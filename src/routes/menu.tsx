import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, Star, Plus, Leaf } from "lucide-react";

import { DISHES, CATEGORIES } from "@/data/menu";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Manekchowk Pizza Sandwich [Manekchowk Wala]" },
      { name: "description", content: "Explore our full menu. Premium sandwiches, cinematic cheese pulls, pizzas, burgers, and shakes." },
      { property: "og:url", content: "/menu" },
      { property: "og:title", content: "Menu — Manekchowk Pizza Sandwich [Manekchowk Wala]" },
      { property: "og:description", content: "Explore our full menu. Premium sandwiches, cinematic cheese pulls, pizzas, burgers, and shakes." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return DISHES.filter((d) => (cat === "All" ? true : d.category === cat)).filter((d) =>
      d.name.toLowerCase().includes(q.toLowerCase())
    );
  }, [cat, q]);

  const cats = ["All", ...CATEGORIES] as const;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="The Menu"
            title={
              <>
                50+ ways to <br />
                <span className="text-gradient-brand">fall in love.</span>
              </>
            }
            subtitle="Fresh every day. Refreshed every season. Search or filter to find your next favorite."
          />

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search cheese pull, paneer, cold coffee…"
                className="glass-strong w-full rounded-full py-3.5 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]/40"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {filtered.length} items · updated today
            </p>
          </div>

          <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  cat === c
                    ? "bg-gradient-brand text-white shadow-[0_10px_30px_-10px_oklch(0.65_0.22_45/0.6)]"
                    : "border border-border bg-card hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((d, i) => (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
                className="group card-tilt card-tilt-hover overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    {d.popular && (
                      <span className="rounded-full bg-[color:var(--brand-orange)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        Popular
                      </span>
                    )}
                    {d.veg && (
                      <span className="grid size-6 place-items-center rounded border border-white/70 bg-black/30 backdrop-blur">
                        <Leaf className="size-3 text-[color:var(--brand-green)]" />
                      </span>
                    )}
                  </div>
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white backdrop-blur">
                    <Star className="size-3 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />
                    {d.rating}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold leading-tight">{d.name}</h3>
                    <span className="font-display text-lg font-black text-[color:var(--brand-orange)]">
                      ₹{d.price}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{d.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{d.cal} cal · {d.category}</span>
                    <button className="group/btn inline-flex items-center gap-1 rounded-full bg-foreground px-3.5 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-orange)] hover:text-white">
                      <Plus className="size-3.5" /> Add
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-24 text-center text-muted-foreground">Nothing matches "{q}" yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
