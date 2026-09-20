import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { routes } from "@/lib/site";

const title = "How to buy a VPS with Bitcoin";
const description =
  "Practical checkout notes for paying a VPS invoice in Bitcoin: confirmations, third-party processors like BitPay and CoinGate, Lightning, and what to do after the VM is up.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: routes.bitcoinGuide },
  openGraph: { title, description, type: "article", url: routes.bitcoinGuide },
};

export default function BitcoinGuidePage() {
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
        Checkout guide
      </Badge>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        Sending BTC to a hosting invoice is simple until a confirmation window,
        a minimum amount, or a KYC’d processor blocks you. Use this page with
        the{" "}
        <Link
          href={routes.ranking}
          className="text-foreground underline-offset-4 hover:underline"
        >
          top 10 crypto VPS ranking
        </Link>{" "}
        so you pick a host whose rail matches how you actually hold coins.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          1. Decide which rail you can live with
        </h2>
        <p className="leading-7 text-muted-foreground">
          In-house checkout (BitLaunch, SporeStack, 0xCloud’s public flow)
          usually means: create or skip an account, get a deposit address, wait
          for the required confirmations, spend a balance. Processor checkout
          (Vultr/BitPay, Hostinger/CoinGate, Time4VPS/Coinify) means the
          processor’s rules sit between you and the VM—minimums, geo blocks, and
          sometimes the processor’s own identity checks.
        </p>
        <p className="leading-7 text-muted-foreground">
          If you only have Bitcoin on an exchange, you will KYC to the exchange
          regardless of how “anonymous” the VPS landing page sounds. Withdraw to
          a wallet you control first. Details are in the{" "}
          <Link
            href={routes.privacyGuide}
            className="text-foreground underline-offset-4 hover:underline"
          >
            KYC and privacy guide
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          2. Match invoice size to network fees
        </h2>
        <p className="leading-7 text-muted-foreground">
          A $5 VPS on a congested Bitcoin mempool is a bad on-chain purchase.
          Time4VPS even documents Coinify floors around €30 for BTC. For small
          monthly boxes, prefer a host that takes Lightning (some Bitcoin VPS
          specialists advertise it), a low-fee coin they list (LTC, TRC-20
          USDT), or a provider where you load a balance once and bill hourly
          (BitLaunch).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          3. Send the exact amount to a fresh invoice
        </h2>
        <p className="leading-7 text-muted-foreground">
          Crypto invoices expire. Copy the address from the live checkout, not
          from an old email. Send the amount the invoice specifies; underpaying
          because you forgot the miner fee is a common way to lose time with
          support. After the host’s required confirmations, credentials usually
          appear in the panel or email. If nothing happens after a reasonable
          confirmation depth, open a ticket with the transaction ID—do not send
          a second payment “just in case.”
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          4. Harden the server before you use it
        </h2>
        <p className="leading-7 text-muted-foreground">
          A crypto-paid VPS is still a server on the public internet. Change
          passwords, disable password SSH if you have keys, enable a firewall,
          and apply updates. If you bought Windows from a BYOL/unlicensed
          catalog (0xCloud documents this explicitly), you are responsible for
          a valid license. If you resell or front Vultr, Hetzner, or
          DigitalOcean via{" "}
          <Link
            href={`${routes.ranking}#bitlaunch`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            BitLaunch
          </Link>
          ,{" "}
          <Link
            href={`${routes.ranking}#sporestack`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            SporeStack
          </Link>
          , or{" "}
          <Link
            href={`${routes.ranking}#0xcloud`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            0xCloud
          </Link>
          , those clouds’ acceptable-use rules still apply to the VM.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl font-semibold">
          5. Plan renewal before the invoice is due
        </h2>
        <p className="leading-7 text-muted-foreground">
          Card-on-file auto-renew is the default on Hostinger and Vultr. Crypto
          is often manual. Keep a surplus on BitLaunch-style balances, or set a
          reminder for monthly invoices. Stablecoins (USDT/USDC) reduce the
          chance that a price swing leaves you underpaid at renewal.
        </p>
      </section>

      <p className="mt-12 text-sm leading-6 text-muted-foreground">
        Next: pick a host from the{" "}
        <Link
          href={routes.ranking}
          className="text-foreground underline-offset-4 hover:underline"
        >
          2026 top 10 list
        </Link>{" "}
        or return to the{" "}
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
