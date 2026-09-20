export const siteName = "Buy VPS with Crypto";
export const siteTagline =
  "Independent rankings of virtual private servers you can pay for with Bitcoin and other cryptocurrencies.";

export const githubRepoUrl =
  "https://github.com/cryptokittiee/buyvpswithcrypto";
export const githubPagesOrigin = "https://cryptokittiee.github.io";
export const githubPagesBasePath = "/buyvpswithcrypto";

/** Canonical public URL for SEO (GitHub Pages). */
export const siteUrl = `${githubPagesOrigin}${githubPagesBasePath}`;

export const routes = {
  home: "/",
  ranking: "/top-10-crypto-vps-providers/",
  bitcoinGuide: "/guides/how-to-buy-a-vps-with-bitcoin/",
  privacyGuide: "/guides/crypto-vps-kyc-and-privacy/",
} as const;

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}
