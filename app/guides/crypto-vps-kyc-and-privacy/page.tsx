import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { routes } from "@/lib/site";

const title = "Crypto VPS KYC and privacy: what “no KYC” actually means";
const description =
  "How Bitcoin, Monero, BitPay, CoinGate, and Coinify change VPS privacy—and why a no-KYC landing page is not the same as anonymity.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: routes.privacyGuide },
  openGraph: { title, description, type: "article", url: routes.privacyGuide },
};

export default function PrivacyGuidePage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:py-16">
      <p className="text-sm text-muted-foreground">
        <Link href={routes.home} className="hover:text-foreground">
          Rankings
        </Link>
        <span aria-hidden> / </span>
        Guides
      </p>
      <Badge variant="secondary" className="mt-4">
        Privacy notes
      </Badge>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        Crypto VPS marketing overuses the word anonymous. This page separates
        signup policy, payment privacy, and operational privacy so the{" "}
        <Link
          href={routes.ranking}
          className="text-foreground underline-offset-4 hover:underline"
        >
          provider ranking
        </Link>{" "}
        is harder to misread.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          Three layers people collapse into one
        </h2>
        <ol className="list-decimal space-y-3 pl-5 leading-7 text-muted-foreground">
          <li>
            <span className="text-foreground">Account KYC.</span> Does the host
            demand a passport, a selfie, or a billing address? Vultr requires a
            payment method to verify the account. Time4VPS can ask for documents.
            SporeStack advertises no email at all. “No KYC” on a landing page
            usually means “no ID upload at signup,” not “we cannot correlate
            you later.”
          </li>
          <li>
            <span className="text-foreground">Payment privacy.</span> Bitcoin
            is public. Paying a BitPay or Coinify invoice from an exchange
            withdrawal is one of the least private paths available. Monero
            (Njalla, SporeStack, Privex, 0xCloud) is the coin that actually
            matches a privacy pitch. Cards and PayPal undo it.
          </li>
          <li>
            <span className="text-foreground">Infrastructure identity.</span>{" "}
            The VM still has an IP, a hypervisor owner, and an AUP. If
            BitLaunch, SporeStack, or 0xCloud places you on Vultr, Hetzner,
            Gcore, or DigitalOcean, that company’s abuse desk still exists.
            Privacy hosting is not bulletproof hosting.
          </li>
        </ol>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          Where the top 10 sit
        </h2>
        <p className="leading-7 text-muted-foreground">
          Treat this as a map, then click through for caveats on each card:
        </p>
        <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
          <li>
            Lowest signup friction:{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#sporestack`}>
              SporeStack
            </Link>{" "}
            (token, no email), then{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#njalla`}>
              Njalla
            </Link>{" "}
            and{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#0xcloud`}>
              0xCloud
            </Link>{" "}
            (advertised zero KYC).
          </li>
          <li>
            Crypto-native but still an account:{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#bitlaunch`}>
              BitLaunch
            </Link>
            ,{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#privex`}>
              Privex
            </Link>
            ,{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#cloudzy`}>
              Cloudzy
            </Link>{" "}
            (crypto path without a card).
          </li>
          <li>
            Conventional hosts that take coins:{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#vultr`}>
              Vultr
            </Link>
            ,{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#hostinger`}>
              Hostinger
            </Link>
            ,{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#time4vps`}>
              Time4VPS
            </Link>
            ,{" "}
            <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#ultahost`}>
              UltaHost
            </Link>
            . Fine for paying from a wallet; poor if your requirement is
            identity minimization.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          What this site will not tell you to do
        </h2>
        <p className="leading-7 text-muted-foreground">
          We will not walk through mixing, identity evasion, or hiding abuse.
          Legitimate reasons to pay a VPS in crypto include: you already operate
          in coins, your card fails on international checkout, you are
          self-hosting, or you do not want a card network sitting on every
          renewal. Follow the law and the provider’s terms. If a host markets
          itself as bulletproof, it is not on this list.
        </p>
      </section>

      <p className="mt-12 text-sm leading-6 text-muted-foreground">
        Related:{" "}
        <Link
          href={routes.bitcoinGuide}
          className="text-foreground underline-offset-4 hover:underline"
        >
          how to buy a VPS with Bitcoin
        </Link>{" "}
        and the{" "}
        <Link
          href={routes.home}
          className="text-foreground underline-offset-4 hover:underline"
        >
          ranking hub
        </Link>
        .
      </p>
    </article>
  );
}
