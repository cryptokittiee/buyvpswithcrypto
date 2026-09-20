import Link from "next/link";
import { githubRepoUrl, routes, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <div className="max-w-md space-y-2">
          <p className="font-medium text-foreground">{siteName}</p>
          <p>
            Editorial comparison of hosts that publicly accept cryptocurrency.
            Not financial, legal, or security advice. Verify live pricing,
            coins, and terms before you pay.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="hover:text-foreground" href={routes.ranking}>
            Top 10 crypto VPS providers
          </Link>
          <Link className="hover:text-foreground" href={routes.bitcoinGuide}>
            How to buy a VPS with Bitcoin
          </Link>
          <Link className="hover:text-foreground" href={routes.privacyGuide}>
            KYC, privacy, and crypto payments
          </Link>
          <a
            className="hover:text-foreground"
            href={githubRepoUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub repository
          </a>
        </div>
      </div>
    </footer>
  );
}
