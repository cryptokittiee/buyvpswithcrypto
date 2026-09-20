export type Provider = {
  rank: number;
  slug: string;
  name: string;
  website: string;
  websiteLabel: string;
  bestFor: string;
  blurb: string;
  whyRanked: string;
  whoItsFor: string;
  paymentNotes: string;
  coins: string;
  kyc: string;
  regions: string;
  startingFrom: string;
  caveats: string;
};

export const rankingUpdated = "September 20, 2026";

export const providers: Provider[] = [
  {
    rank: 1,
    slug: "bitlaunch",
    name: "BitLaunch",
    website: "https://bitlaunch.io/",
    websiteLabel: "bitlaunch.io",
    bestFor: "Crypto-native cloud with hourly billing",
    blurb:
      "The longest-running dedicated Bitcoin VPS platform: in-house crypto checkout, hourly servers, and a single panel for BitLaunch’s own fleet plus DigitalOcean, Vultr, and Linode.",
    whyRanked:
      "BitLaunch is the category reference most people mean when they say “buy a VPS with Bitcoin.” It has been selling hourly cloud servers for cryptocurrency since 2017, processes deposits on its own payment stack rather than handing you to a generic invoice processor, and still gives you access to three mainstream clouds when you need a specific region. That combination of crypto-first billing and real infrastructure choice is unmatched in public positioning.",
    whoItsFor:
      "Developers, node operators, and privacy-conscious users who want to top up a balance in crypto, spin servers up and down by the hour, and keep DigitalOcean / Vultr / Linode regions available without putting a card on those accounts directly.",
    paymentNotes:
      "Account funding is cryptocurrency-only. Public materials and reviews consistently describe Bitcoin, Ethereum, Litecoin, and additional coins processed in-house. There is no card fallback on BitLaunch itself, which is the point for many buyers.",
    coins: "BTC, ETH, LTC, and other coins via in-house checkout",
    kyc: "Email account; no identity documents advertised",
    regions: "Own locations plus DigitalOcean, Vultr, and Linode regions",
    startingFrom: "Hourly (entry VPS typically a few dollars per month equivalent)",
    caveats:
      "Partner clouds still enforce their own acceptable-use policies. Crypto deposits are generally treated as final, and BitLaunch is not a “bulletproof” host—abuse gets accounts closed.",
  },
  {
    rank: 2,
    slug: "cloudzy",
    name: "Cloudzy",
    website: "https://cloudzy.com/bitcoin-vps",
    websiteLabel: "cloudzy.com",
    bestFor: "Low-cost Bitcoin VPS on AMD EPYC / NVMe",
    blurb:
      "A widely marketed Bitcoin VPS brand: AMD EPYC, NVMe, dedicated IPv4, and checkout in Bitcoin plus several other coins, with advertised plans from $2.48/month.",
    whyRanked:
      "Cloudzy is one of the most visible “Bitcoin VPS” search results for a reason. It sells its own VPS catalog (not just a reseller dashboard), publishes Bitcoin as a first-class payment method next to cards and PayPal, and quotes concrete hardware: AMD EPYC, NVMe, and high-bandwidth uplinks across about 13 regions. Independent review roundups in 2026 still treat it as the default budget Bitcoin VPS, and Cloudzy’s own product markup cites a 4.6/5 Trustpilot score from 700+ reviews—useful as a popularity signal, not as a substitute for reading recent tickets.",
    whoItsFor:
      "People who want an inexpensive always-on Linux or Windows VPS paid in BTC or USDT, including Bitcoin Core, Lightning, or BTCPay workloads Cloudzy itself documents on its Bitcoin VPS page.",
    paymentNotes:
      "Bitcoin is a standard checkout option. Public pages also list ETH, USDT, LTC, DOGE, cards, PayPal, and Alipay. Crypto does not require a credit card. Paying by card or PayPal obviously reintroduces conventional billing identity.",
    coins: "BTC, ETH, USDT, LTC, DOGE (plus cards / PayPal / Alipay)",
    kyc: "No KYC advertised on the Bitcoin payment path",
    regions: "About 13 regions",
    startingFrom: "$2.48/month (advertised entry)",
    caveats:
      "Cloudzy has been the subject of public ownership and abuse-traffic reporting. Those claims are disputed in the market and are not treated here as proven; they are a reason to read current terms, refund rules, and recent user reports before parking production on the cheapest plan.",
  },
  {
    rank: 3,
    slug: "vultr",
    name: "Vultr",
    website: "https://www.vultr.com/",
    websiteLabel: "vultr.com",
    bestFor: "Mainstream cloud regions, GPU, and BitPay billing",
    blurb:
      "A full public cloud that officially accepts Bitcoin and other coins through BitPay, with a global footprint you will not get from a boutique privacy host.",
    whyRanked:
      "Most “crypto VPS” lists either skip Vultr or pretend it is anonymous. Neither is accurate. Vultr’s own billing docs (updated December 2025) list digital currencies via BitPay: Bitcoin, Bitcoin Cash, Ethereum, Dogecoin, Litecoin, USDC, and several other assets, alongside cards, PayPal, Alipay, and UnionPay. You get a real cloud: dozens of regions, optimized compute, Kubernetes, bare metal, and NVIDIA GPU. That is why it sits in the top three even though it is not a privacy company.",
    whoItsFor:
      "Teams that already know they want Vultr’s network and product catalog, and prefer to fund the account from a crypto wallet instead of a card. Also the right pick when you need GPUs or a city BitLaunch’s own fleet does not cover—and you are willing to complete Vultr’s normal account checks.",
    paymentNotes:
      "Crypto is BitPay, not an in-house wallet. Vultr still requires a valid payment method to verify the account before you can deploy. BitPay invoices can involve BitPay’s own wallet/KYC rules depending on amount and region. This is crypto billing on a conventional cloud, not anonymous checkout.",
    coins: "BTC, BCH, ETH, DOGE, LTC, USDC, PAX, BUSD, GUSD via BitPay",
    kyc: "Payment-method verification; not a no-KYC host",
    regions: "30+ cloud locations worldwide",
    startingFrom: "$2.50–$5/month class shared compute (varies by instance)",
    caveats:
      "Expect identity friction compared with BitLaunch or SporeStack. Refunds and ToS are standard US-cloud strict. Mining and abuse are prohibited. If you only want Vultr hardware with less billing friction, many people use BitLaunch or 0xCloud as a crypto front-end instead of funding Vultr directly.",
  },
  {
    rank: 4,
    slug: "hostinger",
    name: "Hostinger",
    website: "https://www.hostinger.com/",
    websiteLabel: "hostinger.com",
    bestFor: "Beginner KVM VPS from a large web host",
    blurb:
      "A mainstream hosting company that added CoinGate cryptocurrency checkout, so you can pay for VPS plans in Bitcoin and dozens of other assets without learning a boutique control panel.",
    whyRanked:
      "Hostinger is not a crypto company. It is a high-volume web host that publicly partnered with CoinGate so every locale could take cryptocurrency. Official payment-method pages still list “crypto payments” next to cards and wallets. For SEO and for real buyers, that matters: a lot of people searching “buy VPS with Bitcoin” actually want a cheap KVM box, hPanel, and a 24/7 chat queue—not an anonymous API. Hostinger is the most recognizable name that satisfies that intent.",
    whoItsFor:
      "Site owners, agencies, and first-time VPS users who want documentation, a polished panel, and the option to settle an invoice in BTC or a CoinGate-supported coin.",
    paymentNotes:
      "Crypto is processed by CoinGate. Availability can vary by storefront and invoice size. These are typically one-time checkouts rather than a standing crypto balance. Hostinger remains a full identity-bearing web host: email account, conventional customer record, and standard refund policy (including a money-back window on many plans).",
    coins: "Bitcoin and 70+ CoinGate assets (BTC, ETH, LTC, USDT, SOL, and others)",
    kyc: "Standard hosting account; not marketed as anonymous",
    regions: "Multiple continents (Hostinger data-center network)",
    startingFrom: "Promotional KVM VPS pricing (often in the low single-digit USD/EUR range on term plans)",
    caveats:
      "You are buying a mass-market VPS, not a privacy product. CoinGate is a third-party processor. Auto-renew on crypto is not as seamless as a card on file. Check the live checkout in your locale before you assume every coin is offered.",
  },
  {
    rank: 5,
    slug: "ultahost",
    name: "UltaHost",
    website: "https://ultahost.com/vps-hosting-bitcoin",
    websiteLabel: "ultahost.com",
    bestFor: "Bitcoin VPS plus a conventional hosting catalog",
    blurb:
      "A hosting company that actually productizes “Bitcoin VPS”: dedicated landing pages, advertised no-KYC crypto signup, and 30+ data centers for Linux and Windows.",
    whyRanked:
      "UltaHost sits between Cloudzy and Hostinger. It runs a normal hosting lineup (shared, VPS, dedicated) but sells Bitcoin payment as a first-class feature, including an anonymous-VPS page that says you can sign up with email and pay in crypto without ID. Plans are advertised from about $4.80/month with automated deployment after confirmation. That is more “crypto VPS” than Hostinger, and more “regular host” than SporeStack.",
    whoItsFor:
      "Operators who want a familiar VPS panel, Windows RDP or Linux root, lots of cities, and checkout in BTC or stablecoins—without going through BitPay on a US hyperscaler.",
    paymentNotes:
      "Official Bitcoin VPS materials list BTC plus ETH, ADA, SOL, AVAX, BNB, USDT, USDC, and BUSD. The anonymous-hosting page emphasizes crypto so that no card is required. Treat “anonymous” as marketing for no-ID checkout, not as a legal guarantee.",
    coins: "BTC, ETH, ADA, SOL, AVAX, BNB, USDT, USDC, BUSD",
    kyc: "Advertised no-KYC on the crypto path; email signup",
    regions: "30+ data centers",
    startingFrom: "$4.80/month (advertised Bitcoin VPS entry)",
    caveats:
      "UltaHost is still a commercial host with an AUP. “Anonymous” does not mean abuse is allowed. Confirm live coin list and Windows licensing terms at checkout.",
  },
  {
    rank: 6,
    slug: "time4vps",
    name: "Time4VPS",
    website: "https://www.time4vps.com/",
    websiteLabel: "time4vps.com",
    bestFor: "Cheap EU KVM with Coinify crypto invoices",
    blurb:
      "Lithuanian KVM VPS from a Tier III Vilnius facility, with Bitcoin and a long altcoin list through Coinify—subject to minimum invoice amounts.",
    whyRanked:
      "Time4VPS is one of the usual names in European budget VPS threads, and unlike Contabo it does take crypto. Help-center documentation (updated October 2025) lists BTC and a large Coinify altcoin set, including USDT on several networks. Hardware positioning is straightforward: KVM, custom ISO, IPv6, entry pricing often quoted around €2.25–€2.48/month, and a 30-day money-back window. That is a real product for EU latency, not a privacy slogan.",
    whoItsFor:
      "Buyers who want inexpensive Lithuanian KVM, GDPR-region hosting, and the ability to settle a larger invoice in BTC or USDT.",
    paymentNotes:
      "Crypto goes through Coinify, not an in-house wallet. Time4VPS documents minimums that move over time; a recent help article put BTC around €30 and most altcoins around €15, with USDT on Tron among the lower floors. Several countries and US states are blocked by Coinify. Monero is not on the list.",
    coins: "BTC plus Coinify altcoins (ETH, LTC, USDT, USDC, SOL, TRX, DOGE, and many others)",
    kyc: "Can request identity documents; not a no-KYC specialist",
    regions: "Vilnius, Lithuania (primary)",
    startingFrom: "About €2.25–€2.48/month entry VPS",
    caveats:
      "Small monthly plans may be below the crypto minimum, so you may need to prepay a longer term. Lithuanian hosts act on copyright notices. DDoS handling is basic compared with specialist networks. If Coinify rejects your region, this option disappears.",
  },
  {
    rank: 7,
    slug: "njalla",
    name: "Njalla",
    website: "https://njal.la/",
    websiteLabel: "njal.la",
    bestFor: "Privacy domains and VPS from one vendor",
    blurb:
      "A privacy-as-a-service company for domains, VPN, and servers. Cryptocurrency is a normal way to pay, including Monero—not a bolted-on gateway.",
    whyRanked:
      "Njalla is the well-known privacy registrar that also sells VPS. Public positioning is unusually direct: they exist so people can register domains and host services without the usual WHOIS and billing trail, they accept Bitcoin, Litecoin, Monero, Ethereum, and PayPal, and they talk about Mastodon, Matrix, and Nextcloud as default workloads. You do not pick Njalla for the cheapest vCPU. You pick it because the domain, DNS, and server can live at the same privacy-oriented vendor.",
    whoItsFor:
      "Journalists, activists, and self-hosters who want a Swedish privacy vendor, Monero support, and a VPS that matches an already-private domain setup.",
    paymentNotes:
      "Njalla’s site lists Bitcoin, Litecoin, Monero, Ethereum, and PayPal. PayPal is convenient and much worse for privacy. Monero is the payment that matches the product’s stated purpose.",
    coins: "BTC, LTC, XMR, ETH (and PayPal)",
    kyc: "Email or XMPP; marketed as no-KYC",
    regions: "Sweden (servers); domains are a global product",
    startingFrom: "VPS commonly quoted from about €15 (confirm live catalog)",
    caveats:
      "Narrower infrastructure than a public cloud. Pricing is premium. Njalla is famous, which also means it attracts extra scrutiny. Follow their terms; they are a privacy host, not an abuse host.",
  },
  {
    rank: 8,
    slug: "sporestack",
    name: "SporeStack",
    website: "https://sporestack.com/",
    websiteLabel: "sporestack.com",
    bestFor: "Token-based, no-email VPS paid in Monero",
    blurb:
      "An API-first VPS reseller operating since 2017. No email account: you pay with Monero, Bitcoin, or Bitcoin Cash and launch from a token, the website, CLI, or API.",
    whyRanked:
      "SporeStack is one of the few crypto VPS products that is actually designed like infrastructure, not like a WHMCS clone. It has been around since 2017, it does not require an email address, and Monero is a first-class coin—not an afterthought. The tradeoff is honest on the homepage: a lot of capacity is resold DigitalOcean or Vultr, so those providers’ policies still apply. If you want programmable, low-identity servers and you understand that tradeoff, SporeStack is the usual recommendation.",
    whoItsFor:
      "People automating many short-lived servers, paying in XMR, or refusing to create yet another hosting account. Developers who want CLI/API as the primary interface.",
    paymentNotes:
      "Monero, Bitcoin, and Bitcoin Cash (USDT on ERC-20 is also mentioned in some 2026 roundups). No cards. Funds sit on a token rather than a named customer profile.",
    coins: "XMR, BTC, BCH (USDT ERC-20 also reported)",
    kyc: "None advertised; no email required",
    regions: "SporeStack plus DigitalOcean/Vultr regions it resells",
    startingFrom: "About $3–$4.50/month class (IPv6-only options can be cheaper)",
    caveats:
      "Resold clouds will still suspend ToS-violating workloads. You must handle SSH keys carefully (SporeStack even warns about email addresses inside key comments). Support is not a 24/7 enterprise queue. This is a specialist tool.",
  },
  {
    rank: 9,
    slug: "privex",
    name: "Privex",
    website: "https://www.privex.io/",
    websiteLabel: "privex.io",
    bestFor: "Independent crypto-friendly privacy VPS",
    blurb:
      "A smaller privacy host selling virtual and dedicated servers, with cryptocurrency as the normal way to pay and locations that have included Germany, Sweden, and the US.",
    whyRanked:
      "Privex is a usual name in “pay with Bitcoin / Monero” hosting lists because it is an actual host—not a thin landing page in front of someone else’s API. Public pricing currently advertises virtual servers from $8/month in Germany and promotional Stockholm capacity from $0.99/month, plus heavier dedicated boxes. Comparison tables in this space consistently list Bitcoin, Monero, Litecoin, and other coins through an in-house style processor, with cards not being the product. That independent, crypto-normal posture earns a top-ten slot even though the catalog is smaller than Vultr or BitLaunch.",
    whoItsFor:
      "Users who want a compact privacy provider, Monero or Bitcoin billing, and simple VPS/dedicated SKUs in Northern Europe rather than a multi-cloud control panel.",
    paymentNotes:
      "Crypto-first independent host. Public roundups list BTC, XMR, LTC, DOGE and additional assets. Confirm the live coin list on Privex’s order flow; do not assume every network (for example TRC-20 vs ERC-20) is available.",
    coins: "BTC, XMR, LTC, DOGE and other coins (confirm at checkout)",
    kyc: "Typically email; not marketed as full KYC. Occasional verification is reported in third-party comparisons.",
    regions: "Germany, Sweden, USA (offers vary by product)",
    startingFrom: "$8/month Germany VPS; promotional Stockholm from $0.99/month",
    caveats:
      "Smaller operator means smaller network and quieter public review volume. Some comparison sites note that KYC can appear in edge cases. Read the current terms instead of assuming lifetime anonymity.",
  },
  {
    rank: 10,
    slug: "0xcloud",
    name: "0xCloud",
    website: "https://0xcloud.io/",
    websiteLabel: "0xcloud.io",
    bestFor: "Multi-cloud crypto checkout (Hetzner, Vultr, Gcore)",
    blurb:
      "A crypto checkout layer for Linux and Windows cloud VPS—Bitcoin, USDT, Monero, ETH, and 50+ coins—on capacity from Hetzner, Vultr, and Gcore, including GPU.",
    whyRanked:
      "0xCloud belongs on a crypto VPS shortlist because of what it publicly sells today: sub-minute deployment after payment, no-KYC checkout, full root, 26+ regions, and a coin list that includes Monero and USDT rather than Bitcoin-only. The interesting part is the capacity map. Instead of only running a private fleet, 0xCloud offers Hetzner (CX, CPX, CCX, CAX), Vultr (Cloud Compute, high frequency, optimized, GPU), and Gcore (standard, GPU, bare metal) behind one crypto invoice. That is a legitimate product for people who want Hetzner or Gcore hardware without those companies’ own billing.",
    whoItsFor:
      "Users who specifically want Hetzner, Vultr, or Gcore locations (including NVIDIA GPU) and prefer to pay in BTC, USDT, or XMR without opening a direct account on those clouds. Also a fit if you need Windows BYOL/RDP and a wide coin list in one checkout.",
    paymentNotes:
      "0xCloud’s public site lists Bitcoin, USDT, Monero, Ethereum, and 50+ additional cryptocurrencies, with QR/on-chain checkout and provisioning after confirmation. It markets zero KYC. There is no claim here about in-house vs third-party settlement internals beyond what the site states.",
    coins: "BTC, USDT, XMR, ETH, and 50+ coins",
    kyc: "Advertised zero KYC",
    regions: "26+ regions via Hetzner, Vultr, and Gcore",
    startingFrom: "Advertised from about $4/month on small Vultr-class plans",
    caveats:
      "Underlying clouds still have acceptable-use policies. Windows is offered as unlicensed/BYOL—you are responsible for valid licensing. Start with a small plan and verify deploy, networking, and support yourself. Ignore generic testimonials you cannot corroborate.",
  },
];

export const faqs = [
  {
    question: "What is a crypto VPS?",
    answer:
      "A crypto VPS is a virtual private server you can pay for with Bitcoin or other cryptocurrencies. Some providers are crypto-native (in-house wallets, no card on file). Others are ordinary clouds that added BitPay, CoinGate, or Coinify at checkout. The server itself is still a KVM or similar VM with root access; only the billing rail is different.",
  },
  {
    question: "Can I buy a Vultr VPS with Bitcoin?",
    answer:
      "Yes. Vultr’s billing documentation lists digital currencies via BitPay, including BTC, BCH, ETH, DOGE, LTC, and USDC. Vultr still requires a payment method to verify the account, so this is not anonymous hosting. If you want Vultr hardware with a crypto-only signup, BitLaunch and 0xCloud both resell or front Vultr-class capacity.",
  },
  {
    question: "Which crypto VPS is best for privacy?",
    answer:
      "For payment privacy, prioritize hosts that take Monero and do not require cards: Njalla, SporeStack, Privex, and 0xCloud all advertise XMR. SporeStack goes furthest on signup (no email, token-based). For operational privacy, also read logging policies, jurisdiction, and whether the VM is resold from DigitalOcean, Vultr, or Hetzner—those AUPs still apply.",
  },
  {
    question: "Does Contabo accept Bitcoin?",
    answer:
      "No. Contabo has stated it does not accept Bitcoin or other cryptocurrencies as payment. It is a popular cheap VPS, and it allows some crypto-related workloads on dedicated resource products, but it does not belong on a “pay with crypto” ranking.",
  },
  {
    question: "Is paying with Bitcoin enough to stay anonymous?",
    answer:
      "No. Bitcoin is a public ledger. Exchange withdrawal KYC, reusable addresses, and the hosting provider’s IP logs can still correlate an account. Use a fresh address, prefer hosts that support Monero if payment privacy is the goal, and read our KYC guide before treating any marketer’s “anonymous VPS” line as a fact.",
  },
];
