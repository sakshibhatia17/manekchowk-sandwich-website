import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { DISHES } from "@/data/menu";
import storeInterior from "@/assets/store-interior.jpg";
import storyStreet from "@/assets/story-street.jpg";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ManekChowk Sandwich" },
      { name: "description", content: "A cinematic look inside ManekChowk Sandwich — food, stores, and moments." },
      { property: "og:url", content: "/gallery" },
      { property: "og:title", content: "Gallery — ManekChowk Sandwich" },
      { property: "og:description", content: "Cinematic food photography from our kitchens and stores." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const items = [
    ...DISHES.map((d) => ({ src: d.image, alt: d.name, span: "" })),
    { src: storeInterior, alt: "Store interior", span: "row-span-2" },
    { src: storyStreet, alt: "Manek Chowk night market", span: "col-span-2" },
  ];

  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title={<>Every plate. <span className="text-gradient-brand">Every moment.</span></>}
            subtitle="Real photography from our stores and kitchens. Tap any image to view."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4 md:gap-4 md:space-y-4">
            {items.map((it, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 8) * 0.05 }}
                onClick={() => setLightbox(it.src)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-6 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 grid size-11 place-items-center rounded-full bg-white/10 text-white">
            <X />
          </button>
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl" />
        </div>
      )}
    </>
  );
}
