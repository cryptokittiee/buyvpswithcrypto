import { faqs, providers, rankingUpdated } from "@/lib/providers";
import { absoluteUrl, routes, siteName, siteUrl } from "@/lib/site";

export function JsonLd({
  pathname,
  title,
  description,
}: {
  pathname: string;
  title: string;
  description: string;
}) {
  const pageUrl = absoluteUrl(pathname);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description:
          "Independent rankings of VPS hosts that accept Bitcoin and other cryptocurrencies.",
      },
      {
        "@type": "Article",
        headline: title,
        description,
        datePublished: "2026-09-20",
        dateModified: "2026-09-20",
        mainEntityOfPage: pageUrl,
        author: { "@type": "Organization", name: siteName },
        publisher: { "@type": "Organization", name: siteName },
      },
      {
        "@type": "ItemList",
        name: `Top 10 crypto VPS providers (${rankingUpdated})`,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: providers.length,
        itemListElement: providers.map((provider) => ({
          "@type": "ListItem",
          position: provider.rank,
          name: provider.name,
          url: `${absoluteUrl(routes.ranking)}#${provider.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
