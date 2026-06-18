import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { WhatsAppFab } from "../components/site/WhatsAppFab";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off the map.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Back home
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
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm">Go home</a>
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
      { title: "Aura Travel & Tours | Luxury Travel Agency South Africa" },
      { name: "description", content: "Premium South African travel agency offering Dubai, Mauritius, Zanzibar, Cape Town packages, safaris, corporate travel, visa assistance and religious tours." },
      { name: "author", content: "Aura Travel & Tours" },
      { property: "og:title", content: "Aura Travel & Tours | Luxury Travel Agency South Africa" },
      { property: "og:description", content: "Premium South African travel agency offering Dubai, Mauritius, Zanzibar, Cape Town packages, safaris, corporate travel, visa assistance and religious tours." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Aura Travel & Tours" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aura Travel & Tours | Luxury Travel Agency South Africa" },
      { name: "twitter:description", content: "Premium South African travel agency offering Dubai, Mauritius, Zanzibar, Cape Town packages, safaris, corporate travel, visa assistance and religious tours." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/16834025-7671-49d1-b0bf-68dfc6658431/id-preview-3cf130dd--f9afbfde-9b5f-45f8-b3f8-d8b0a0e887d2.lovable.app-1781797588168.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/16834025-7671-49d1-b0bf-68dfc6658431/id-preview-3cf130dd--f9afbfde-9b5f-45f8-b3f8-d8b0a0e887d2.lovable.app-1781797588168.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
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
      <head><HeadContent /></head>
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
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
        <WhatsAppFab />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
