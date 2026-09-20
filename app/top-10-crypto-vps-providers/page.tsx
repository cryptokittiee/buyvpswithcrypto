import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
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
import { Separator } from "@/components/ui/separator";
import { providers, rankingUpdated } from "@/lib/providers";
import { routes } from "@/lib/site";

const title = "Top 10 Crypto VPS Providers (2026)";
const description =
  "Real comparison of the top 10 VPS hosts that take Bitcoin and other cryptocurrencies: BitLaunch, Cloudzy, Vultr, Hostinger, UltaHost, Time4VPS, Njalla, SporeStack, Privex, and 0xCloud.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "crypto VPS",
    "Bitcoin VPS",
    "buy VPS with crypto",
    "BitLaunch",
    "Cloudzy",
    "Vultr Bitcoin",
    "0xCloud",
    "Monero VPS",
  ],
  openGraph: {
    title,
    description,
    type: "article",
    url: routes.ranking,
  },
  alternates: { canonical: routes.ranking },
};

export default function RankingArticlePage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:py-16">
      <JsonLd
        pathname={routes.ranking}
        title={title}
        description={description}
      />
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href={routes.home} className="hover:text-foreground">
            Rankings
          </Link>
          <span aria-hidden> / </span>
          Top 10
        </p>
        <Badge variant="secondary">Updated {rankingUpdated}</Badge>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance">
          {title}
        </h1>
        <p className="text-lg leading-8 text-muted-foreground text-pretty">
          Plenty of hosts advertise “Bitcoin VPS.” Fewer actually document a
          working coin checkout, and fewer still are honest about KYC. This
          ranking is a comparison of ten providers that publicly take
          cryptocurrency for virtual servers—not a stack of invented five-star
          reviews.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href={routes.bitcoinGuide} />}
        >
          How Bitcoin checkout works
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href={routes.privacyGuide} />}
        >
          KYC and privacy notes
        </Button>
      </div>

      <section className="mt-12 space-y-4" aria-labelledby="quick-table">
        <h2 id="quick-table" className="font-heading text-2xl font-semibold">
          Quick ranking
        </h2>
        <p className="leading-7 text-muted-foreground">
          Jump to a provider for ranking reasons, who it is for, and payment
          notes.
        </p>
        <RankingTable linked={false} />
      </section>

      <section className="prose-article mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-semibold">How this ranking works</h2>
        <p className="leading-7 text-muted-foreground">
          The job is “I want a virtual private server and I want to pay with
          crypto.” That is a billing question first and a hardware question
          second. A privacy-maximal Monero host and a 32-city public cloud that
          added BitPay both qualify, but they should not be scored as if they
          were the same product.
        </p>
        <p className="leading-7 text-muted-foreground">
          Criteria, in order: (1) documented cryptocurrency checkout, (2)
          whether coins are first-class or a third-party invoice, (3) what you
          can actually deploy (regions, GPU, Windows, API), (4) publicly stated
          KYC/signup friction, (5) how established the brand is in this niche.
          We used provider documentation and widely reported positioning. We did
          not fabricate uptime percentages, mystery benchmarks, or customer
          quotes.
        </p>
        <p className="leading-7 text-muted-foreground">
          Left off on purpose: Contabo (it has said it does{" "}
          <em>not</em> take crypto), DigitalOcean and Linode as direct checkouts
          (crypto access is via BitLaunch or similar), and “bulletproof”
          abuse-friendly hosts. Paying in Bitcoin is not a license to spam,
          mine against AUP, or hide criminal infrastructure.
        </p>
        <p className="leading-7 text-muted-foreground">
          If you are new to the checkout flow itself, start with{" "}
          <Link
            href={routes.bitcoinGuide}
            className="text-foreground underline-offset-4 hover:underline"
          >
            how to buy a VPS with Bitcoin
          </Link>{" "}
          and the companion piece on{" "}
          <Link
            href={routes.privacyGuide}
            className="text-foreground underline-offset-4 hover:underline"
          >
            KYC, privacy, and crypto VPS payments
          </Link>
          .
        </p>
      </section>

      <Separator className="my-12" />

      <div className="space-y-14">
        {providers.map((provider) => (
          <section
            key={provider.slug}
            id={provider.slug}
            className="scroll-mt-24 space-y-4"
            aria-labelledby={`${provider.slug}-title`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge>#{provider.rank}</Badge>
              <h2
                id={`${provider.slug}-title`}
                className="font-heading text-2xl font-semibold"
              >
                {provider.name}
              </h2>
            </div>
            <p className="text-base leading-7">{provider.blurb}</p>
            <Card>
              <CardHeader>
                <CardTitle>Why it ranks here</CardTitle>
                <CardDescription>Best for: {provider.bestFor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>{provider.whyRanked}</p>
                <div>
                  <h3 className="font-medium text-foreground">Who it is for</h3>
                  <p className="mt-1">{provider.whoItsFor}</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Crypto and payment notes
                  </h3>
                  <p className="mt-1">{provider.paymentNotes}</p>
                </div>
                <dl className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-foreground">Coins (publicly listed)</dt>
                    <dd>{provider.coins}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground">Signup / KYC</dt>
                    <dd>{provider.kyc}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground">Regions</dt>
                    <dd>{provider.regions}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground">Starting point</dt>
                    <dd>{provider.startingFrom}</dd>
                  </div>
                </dl>
                <p>
                  <span className="text-foreground">Caveats: </span>
                  {provider.caveats}
                </p>
                <p>
                  Official site:{" "}
                  <a
                    href={provider.website}
                    className="text-foreground underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {provider.websiteLabel}
                  </a>
                </p>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      <section className="mt-16 space-y-4">
        <h2 className="font-heading text-2xl font-semibold">
          How to choose among the ten
        </h2>
        <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
          <li>
            <span className="text-foreground">You want hourly crypto cloud with an API:</span>{" "}
            BitLaunch, then SporeStack if you refuse email accounts.
          </li>
          <li>
            <span className="text-foreground">You want the cheapest advertised Bitcoin VPS:</span>{" "}
            Cloudzy, then Time4VPS if you can clear Coinify minimums.
          </li>
          <li>
            <span className="text-foreground">You need a real public cloud or GPUs:</span>{" "}
            Vultr directly (BitPay) or Vultr/Hetzner/Gcore capacity through
            BitLaunch or 0xCloud.
          </li>
          <li>
            <span className="text-foreground">You are moving a website off shared hosting:</span>{" "}
            Hostinger, then UltaHost.
          </li>
          <li>
            <span className="text-foreground">You care about Monero and low identity:</span>{" "}
            Njalla, SporeStack, Privex, 0xCloud—then read the{" "}
            <Link
              href={routes.privacyGuide}
              className="text-foreground underline-offset-4 hover:underline"
            >
              privacy guide
            </Link>
            , because “no KYC” is not the same as “untraceable.”
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-semibold">
          Frequently asked questions
        </h2>
        <FaqList />
      </section>

      <p className="mt-12 text-sm leading-6 text-muted-foreground">
        Pricing, coin lists, and KYC rules change without notice. Confirm the
        live checkout on the provider’s site before you send funds. This page is
        part of{" "}
        <Link
          href={routes.home}
          className="text-foreground underline-offset-4 hover:underline"
        >
          Buy VPS with Crypto
        </Link>
        .
      </p>
    </article>
  );
}
