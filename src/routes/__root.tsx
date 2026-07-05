import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { FloatingButtons } from "../components/site/FloatingButtons";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-warm px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-black text-gradient-brand">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold">Lost the sandwich</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page seems to have been eaten. Let's get you back to something delicious.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_27/0.7)]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Give it a moment and try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Manekchowk Pizza Sandwich [Manekchowk Wala] — Ahmedabad's Most Loved Sandwich Experience" },
      {
        name: "description",
        content:
          "Premium sandwiches, pizzas, burgers and shakes crafted with fresh ingredients across 8 branches in Ahmedabad. Order now or explore franchise opportunities.",
      },
      { name: "theme-color", content: "#D32F2F" },
      { property: "og:title", content: "Manekchowk Pizza Sandwich [Manekchowk Wala] — Ahmedabad's Most Loved Sandwich Experience" },
      {
        property: "og:description",
        content: "Fresh ingredients. Premium taste. Fast service. Authentic street-food flavors, reimagined.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Manekchowk Pizza Sandwich [Manekchowk Wala]" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Manekchowk Pizza Sandwich [Manekchowk Wala] — Ahmedabad's Most Loved Sandwich Experience" },
      { name: "description", content: "Premium sandwiches, pizzas, burgers and shakes across 8 branches in Ahmedabad. Cinematic taste, fast service, franchise-ready." },
      { property: "og:description", content: "Premium sandwiches, pizzas, burgers and shakes across 8 branches in Ahmedabad. Cinematic taste, fast service, franchise-ready." },
      { name: "twitter:description", content: "Premium sandwiches, pizzas, burgers and shakes across 8 branches in Ahmedabad. Cinematic taste, fast service, franchise-ready." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c3f8a8c-c549-4a64-872f-bd1c9dbb9d44/id-preview-cdbf8369--7ae1693b-9624-44f6-a4be-c13665ff8df7.lovable.app-1783154948998.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c3f8a8c-c549-4a64-872f-bd1c9dbb9d44/id-preview-cdbf8369--7ae1693b-9624-44f6-a4be-c13665ff8df7.lovable.app-1783154948998.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen">
        <Navbar />
        <main className="pt-16 md:pt-20">
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </QueryClientProvider>
  );
}
