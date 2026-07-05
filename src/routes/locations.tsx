import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BRANCHES } from "@/data/menu";
import { SectionHeading } from "@/components/site/Section";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — ManekChowk Sandwich" },
      { name: "description", content: "Find your nearest ManekChowk Sandwich across 8 branches in Ahmedabad." },
      { property: "og:url", content: "/locations" },
      { property: "og:title", content: "Locations — ManekChowk Sandwich" },
      { property: "og:description", content: "8 branches across Ahmedabad, all delivering the same signature taste." },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Locations"
            title={<>Find us in <span className="text-gradient-brand">Ahmedabad.</span></>}
            subtitle="Open every day, 10 AM to midnight. Same taste. Same speed. Every branch."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {BRANCHES.map((b, i) => (
            <motion.article
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={storeInterior}
                  alt={`ManekChowk Sandwich ${b.name}`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-orange)] backdrop-blur">
                  Now Open
                </div>
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <h3 className="font-display text-2xl font-black">{b.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[color:var(--brand-orange)]" />
                  {b.address}
                </div>
                <div className="mt-2 flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 size-4 shrink-0 text-[color:var(--brand-orange)]" />
                  {b.hours}
                </div>
                <div className="mt-2 flex items-start gap-3 text-sm text-muted-foreground">
                  <Phone className="mt-0.5 size-4 shrink-0 text-[color:var(--brand-orange)]" />
                  {b.phone}
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href={`tel:${b.phone.replace(/\s/g, "")}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand py-2.5 text-sm font-semibold text-white"
                  >
                    <Phone className="size-4" /> Call
                  </a>
                  <a
                    href={b.mapLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-semibold hover:bg-muted"
                  >
                    <Navigation className="size-4" /> Directions
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
