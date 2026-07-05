import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import storeInterior from "@/assets/store-interior.jpg";
import storyStreet from "@/assets/story-street.jpg";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Manekchowk Pizza Sandwich [Manekchowk Wala]" },
      { name: "description", content: "The journey of Manekchowk Pizza Sandwich [Manekchowk Wala] from a single counter to Ahmedabad's most loved brand." },
      { property: "og:url", content: "/story" },
      { property: "og:title", content: "Our Story — Manekchowk Pizza Sandwich [Manekchowk Wala]" },
      { property: "og:description", content: "The journey of Manekchowk Pizza Sandwich [Manekchowk Wala] from a single counter to Ahmedabad's most loved brand." },
    ],
    links: [{ rel: "canonical", href: "/story" }],
  }),
  component: StoryPage,
});

const chapters = [
  { year: "2001", title: "The Beginning", text: "Founded by Gajendra Singh Rathod with a vision to redefine street food, setting the foundation for what would become an iconic brand." },
  { year: "2018", title: "First Store", text: "A single counter opens on KK Nagar Road. The famous Cheese Pull sandwich is born, and the mission accelerates." },
  { year: "2020", title: "Through the storm", text: "We doubled down on hygiene, packaging and the cold chain — long before it became mandatory." },
  { year: "2021", title: "The cheese pull heard around Gujarat", text: "The signature drops. Videos go viral. Queues become part of the identity." },
  { year: "2023", title: "The premium turn", text: "Interiors are rebuilt. Uniforms redesigned. Every station rethought like a fine-dining kitchen." },
  { year: "2026", title: "Franchise-ready", text: "8 branches across Ahmedabad. Standardised recipes. A brand ready to travel beyond Gujarat." },
];

function StoryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] py-24 text-white md:py-32">
        <img
          src={storyStreet}
          alt=""
          width={1400}
          height={1000}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--brand-ink)]/60 via-[color:var(--brand-ink)]/60 to-[color:var(--brand-ink)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--brand-gold)]">Our story</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] md:text-7xl">
            Born on a street. <br />
            <span className="text-gradient-brand">Built for a nation.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70 md:text-lg">
            ManekChowk Sandwich is a love letter to Ahmedabad's most iconic food street — rewritten in a modern, premium, hygienic voice.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <img src={storeInterior} alt="" width={1600} height={1000} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl" />
          <div>
            <SectionHeading
              eyebrow="Our belief"
              title={<>Street food deserves <span className="text-gradient-brand">the finest room in the house.</span></>}
              subtitle="Gajendra Singh Rathod's vision was simple: keep the flavors loud, the ingredients honest, and the spaces beautiful. Not because it looks good — because it feels right."
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-cream)] py-24 text-[color:var(--brand-ink)] dark:bg-[oklch(0.16_0.008_260)] dark:text-foreground">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <SectionHeading eyebrow="Timeline" title={<>Six chapters. <span className="text-gradient-brand">One long queue.</span></>} />
          <ol className="relative mt-14 border-l border-border pl-8">
            {chapters.map((c, i) => (
              <motion.li
                key={c.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="mb-10 last:mb-0"
              >
                <div className="absolute -left-[11px] mt-1 grid size-5 place-items-center rounded-full bg-gradient-brand ring-4 ring-background" />
                <p className="font-display text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">{c.year}</p>
                <h3 className="mt-1 font-display text-2xl font-black">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
