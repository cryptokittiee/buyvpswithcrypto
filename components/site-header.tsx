import Link from "next/link";
import { siteName, routes } from "@/lib/site";

const nav = [
  { href: routes.home, label: "Rankings" },
  { href: routes.ranking, label: "Top 10 article" },
  { href: routes.bitcoinGuide, label: "Pay with Bitcoin" },
  { href: routes.privacyGuide, label: "KYC & privacy" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-background/90 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <Link href={routes.home} className="font-heading text-base font-semibold tracking-tight">
          {siteName}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
