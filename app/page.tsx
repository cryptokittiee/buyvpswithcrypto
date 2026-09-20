import type { Metadata } from "next";
import Link from "next/link";
import { RankingTable } from "@/components/ranking-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { providers, rankingUpdated } from "@/lib/providers";
import { routes, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buy a VPS with Bitcoin and other crypto",
  description:
    "Ranked list of crypto-friendly VPS providers, including BitLaunch, Cloudzy, Vultr, Hostinger, and 0xCloud. Compare coins, KYC, and who each host is for.",
  alternates: { canonical: routes.home },
};

const highlights = [
  {
    title: "Crypto-native vs crypto-at-checkout",
    body: "BitLaunch and SporeStack are built around coin deposits. Vultr and Hostinger are conventional clouds that added BitPay or CoinGate. Both count as “crypto VPS,” but they are not the same product.",
  },
  {
    title: "Bitcoin is not automatically private",
    body: "A public chain plus a hosting account is still correlatable. If payment privacy is the job, look at Monero support (Njalla, SporeStack, Privex, 0xCloud) and read the KYC notes—not just the marketing headline.",
  },
  {
    title: "Resold clouds keep their AUPs",
    body: "BitLaunch, SporeStack, and 0xCloud can put you on DigitalOcean, Vultr, Hetzner, or Gcore hardware. The hypervisor still belongs to that cloud. Forbidden workloads still get shut down.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:py-16">
      <div className="max-w-3xl space-y-5">
        <Badge variant="secondary">Updated {rankingUpdated}</Badge>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Buy a VPS with crypto—without guessing who actually takes coins
        </h1>
        <p className="text-lg leading-8 text-muted-foreground text-pretty">
          {siteName} ranks ten providers that publicly accept Bitcoin or other
          cryptocurrencies for virtual servers. The full comparison covers
          ranking reasons, who each host is for, and how checkout actually
          works—BitPay, CoinGate, Coinify, or in-house wallets.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button nativeButton={false} render={<Link href={routes.ranking} />}>
            Read the top 10 article
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href={routes.bitcoinGuide} />}
          >
            Bitcoin checkout guide
          </Button>
        </div>
      </div>

      <section className="mt-12 space-y-4" aria-labelledby="table-heading">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="table-heading" className="font-heading text-2xl font-semibold">
            2026 ranking at a glance
          </h2>
          <p className="text-sm text-muted-foreground">
            0xCloud is listed at #10 — newer public review history, real
            multi-cloud crypto checkout.
          </p>
        </div>
        <RankingTable />
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-6 text-muted-foreground">
                {item.body}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How we ranked</CardTitle>
            <CardDescription>
              Public billing docs, product pages, and well-known positioning—not
              invented reviews or mystery lab tests.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>
              Weight went to documented crypto checkout, whether coins are
              first-class or bolted on, region/product depth, and honesty about
              KYC. We did not buy every plan on this list, so treat live
              checkout as source of truth.
            </p>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href={routes.ranking} />}
            >
              Methodology inside the article
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Start with a use case</CardTitle>
            <CardDescription>
              The “best” crypto VPS depends on whether you need privacy, GPUs,
              or a cheap EU KVM.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Hourly crypto cloud:{" "}
                <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#bitlaunch`}>
                  BitLaunch
                </Link>
              </li>
              <li>
                Mainstream regions / GPU:{" "}
                <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#vultr`}>
                  Vultr
                </Link>
              </li>
              <li>
                Monero, no email:{" "}
                <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#sporestack`}>
                  SporeStack
                </Link>
              </li>
              <li>
                Hetzner/Gcore via coins:{" "}
                <Link className="text-foreground underline-offset-4 hover:underline" href={`${routes.ranking}#0xcloud`}>
                  0xCloud
                </Link>
              </li>
            </ul>
            <p>
              Also read{" "}
              <Link className="text-foreground underline-offset-4 hover:underline" href={routes.privacyGuide}>
                KYC and privacy notes
              </Link>{" "}
              before you treat any host as anonymous.
            </p>
          </CardContent>
        </Card>
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        {providers.length} providers in the current table. Contabo is omitted
        on purpose: it hosts crypto workloads for some products, but it does
        not accept cryptocurrency as payment.
      </p>
    </main>
  );
}
