import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ManekChowk Sandwich" },
      { name: "description", content: "Talk to ManekChowk Sandwich — support, catering, franchise or press." },
      { property: "og:url", content: "/contact" },
      { property: "og:title", content: "Contact — ManekChowk Sandwich" },
      { property: "og:description", content: "We'd love to hear from you. Reach out for orders, catering, or press." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Contact"
            title={<>We love <span className="text-gradient-brand">hearing from you.</span></>}
            subtitle="Orders, catering, press, feedback — pick a channel and we'll respond within a few hours."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-8">
              <div className="grid gap-6">
                <Row icon={Phone} label="Phone" value="+91 98250 00000" />
                <Row icon={Mail} label="Email" value="hello@manekchowksandwich.com" />
                <Row icon={MapPin} label="HQ" value="KK Nagar Road, Ghatlodia, Ahmedabad 380061" />
                <Row icon={Clock} label="Hours" value="Every day · 10 AM – 12 AM" />
              </div>
              <div className="mt-8 flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social"
                    className="grid size-11 place-items-center rounded-full border border-border transition hover:bg-gradient-brand hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border">
              <iframe
                title="ManekChowk Sandwich HQ map"
                src="https://www.google.com/maps?q=Ghatlodia,+Ahmedabad&output=embed"
                className="aspect-[4/3] w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! We'll reply within a few hours.");
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-xl lg:col-span-3"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <F label="Your name" name="name" />
              <F label="Email" name="email" type="email" />
              <F label="Phone" name="phone" type="tel" />
              <F label="Reason" name="reason" placeholder="Order · Catering · Press · Franchise" />
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold">Message</span>
              <textarea
                required
                rows={6}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]/40"
                placeholder="Tell us what you need…"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-bold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Row({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 font-semibold">{value}</p>
      </div>
    </div>
  );
}

function F({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
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
