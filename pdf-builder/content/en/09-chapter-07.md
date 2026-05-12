---
type: chapter
chapter: 7
title: Crypto Regulations and Taxes
subtitle: Staying legal while staying free
---

In 2014, the IRS issued Notice 2014-21. Twenty-three pages. Six questions. One answer that changed everything for American crypto holders: cryptocurrency is property, not currency, for federal tax purposes.

That single classification created a tax event every time you spend, trade, or earn crypto — not just when you cash out to dollars. Most people had no idea. Many still don't. The IRS knew this and began sending warning letters to tens of thousands of holders in 2019, signaling that the agency was paying attention. By 2021, they had added a specific yes/no question about crypto transactions to the front page of Form 1040 — the document every American taxpayer files.

This isn't a niche compliance issue anymore. It's front and center. The good news: understanding how crypto is taxed is not complicated. It just requires learning a framework most people were never taught.

## 7.1 How the IRS Treats Cryptocurrency

The 2014 classification matters because of what it triggers. When the IRS calls something property, every disposal of it is a taxable event — calculated as the difference between what you paid (cost basis) and what you received (fair market value at the time of the transaction).

This means:

- Selling Bitcoin for dollars: taxable event.
- Trading Bitcoin for Ethereum: taxable event (you disposed of Bitcoin at its current value).
- Using crypto to buy a coffee or a Tesla: taxable event.
- Receiving crypto as payment for work: taxable as ordinary income at the moment of receipt.
- Mining rewards: taxable as ordinary income when received.
- Staking rewards: taxable as ordinary income when received (per the IRS's current guidance).

What is **not** a taxable event: buying crypto with dollars, transferring your own crypto between your own wallets, and holding crypto that has increased in value but hasn't been sold or traded.

The non-taxable list is important. Many people believe moving Bitcoin from Coinbase to their Ledger triggers a tax. It doesn't. You're not selling it; you're just relocating it. The cost basis travels with the coin.

## 7.2 Capital Gains — Short-Term vs. Long-Term

When you sell or trade crypto at a profit, the resulting gain is a capital gain. How much tax you owe depends on how long you held the asset before disposing of it.

**Short-term capital gains** apply when you held the asset for one year or less. These are taxed at your ordinary income rate — the same bracket as your salary. For high earners, this can be 32%, 35%, or 37% federally. Holding for twelve months and one day can meaningfully change your tax bill.

**Long-term capital gains** apply when you held for more than one year. The federal rates are 0%, 15%, or 20% depending on income. Most investors fall into the 15% bracket. The mathematical incentive to hold longer than twelve months before selling is significant and concrete.

Capital losses are the mirror image: if you sell crypto at a loss, you can use that loss to offset capital gains elsewhere in your portfolio. If your losses exceed your gains, you can deduct up to $3,000 against ordinary income per year, with the remainder carrying forward to future tax years. This is called **tax-loss harvesting**, and it's a legitimate strategy used by sophisticated investors — sell a depressed position, realize the loss for tax purposes, and buy back in (crypto has no wash-sale rule, unlike stocks, though legislation on this has been proposed).

:::quote
"The goal isn't to avoid taxes — it's to pay exactly what you owe and not a dollar more. Understanding the rules is how you do that."
:::

## 7.3 Cost Basis Methods

Your **cost basis** is what you paid for a crypto asset, including any fees. When you sell, your gain or loss is calculated against that basis. Simple enough with a single purchase. Complicated when you've bought the same asset dozens of times at different prices.

When you sell a portion of your holdings, you have to specify which "lots" you're selling. The IRS permits several accounting methods:

**FIFO (First In, First Out)** — The coins you bought first are treated as sold first. If you bought Bitcoin at $10,000 and again at $40,000, then sell a portion, FIFO assumes you're selling the $10,000 coins first — resulting in the largest possible gain. This is the IRS default if you don't specify another method.

**LIFO (Last In, First Out)** — The most recent purchases are sold first. In a rising market, this means selling coins with a higher cost basis and lower gains. In a falling market after a recent purchase, it can produce losses. Fewer tax software tools support this by default.

**Specific ID / Highest Cost** — You manually select which exact lots you're selling. This is the most tax-efficient approach because you can choose to sell whichever coins produce the lowest gain (or highest loss) for your situation. It requires meticulous record-keeping — but that's what software is for. This method requires you to adequately identify the lots at the time of sale, not retroactively.

The method you use must be applied consistently. You can't switch methods mid-year to optimize after the fact. Choose a method when you first start tracking, document it, and stick to it.

## 7.4 Tax Tools — Stop Doing This Manually

Attempting to calculate crypto taxes in a spreadsheet is a path toward errors, omissions, and audits. A moderately active crypto user might execute hundreds of transactions across multiple exchanges and wallets in a single year. Each one is potentially a taxable event. Each one requires knowing the exact price at the exact moment of the transaction.

Two leading tools solve this:

**Koinly** (koinly.io) connects to exchanges and wallets via API or CSV import, automatically identifies all taxable events, calculates gains and losses using your chosen method, and generates IRS-compatible forms (8949, Schedule D) ready to hand to your accountant or plug into TurboTax. It supports over 400 exchanges and covers DeFi, NFTs, and staking — not just simple buy/sell transactions.

**CoinTracker** (cointracker.io) offers similar functionality with a slightly different interface and strong integration with TurboTax. If you already use TurboTax, the workflow is seamless.

Both have free tiers that cover small transaction counts and paid plans that scale with activity level. The paid plans cost far less than the time required to calculate taxes manually — or the penalties that come from getting it wrong.

One critical habit: **connect your accounts now**, not during tax season. These tools work retroactively, but the further you get from your transaction dates, the harder it becomes to track missing data — especially for DeFi protocols and cross-chain transactions that don't always map cleanly.

:::detective
**The John Doe Summons**

In 2016, the IRS issued a "John Doe summons" to Coinbase — demanding identifying information for every user who had transacted more than $20,000 between 2013 and 2015. Coinbase fought it in court. The IRS won in 2017. Coinbase was required to hand over account information for roughly 14,000 users.

The message was clear: anonymity on regulated exchanges was always an illusion. Every major U.S. exchange now reports directly to the IRS. Starting with the 2023 tax year, brokers are required to report digital asset transactions on Form 1099-DA, bringing crypto reporting in line with stock brokerage reporting. The era of voluntary self-reporting is ending. Accurate records are not optional.
:::

## 7.5 Reporting Requirements and Common Audit Triggers

For U.S. taxpayers, crypto activity is reported primarily on **Form 8949** (listing each transaction, cost basis, proceeds, and gain/loss) and **Schedule D** (summarizing total capital gains and losses). These roll up into your Form 1040.

Foreign exchange holdings may trigger additional requirements. If you hold more than $10,000 in a foreign financial account (including some foreign crypto exchanges), FBAR filing may be required. The penalties for failing to file an FBAR are severe — up to 50% of account value per year for willful violations. If you use foreign exchanges, consult a tax professional familiar with crypto.

Common patterns that draw IRS attention:

- Large capital gains reported on Form 8949 that don't match 1099-B reports from exchanges
- Checking "no" on the crypto question on Form 1040 while exchange records show activity
- Receiving 1099-MISC from an exchange for staking or referral rewards without reporting corresponding income
- Significant crypto-to-crypto trading activity with no reported gains (looks like evasion)
- Receiving large amounts of crypto from mining or staking with no income reported

The fix for all of these is the same: complete, accurate records and software that generates compliant reports. An amended return filed proactively looks far better than one filed after an IRS notice.

## 7.6 The Global Regulatory Landscape

The United States is not alone in trying to figure out crypto — and the approaches taken by different countries reflect fundamentally different philosophies about finance, privacy, and innovation.

**United States** — The property classification creates the most complex tax treatment of any major economy. Regulatory oversight is fragmented across the SEC (which claims many tokens are securities), the CFTC (which claims Bitcoin and Ether are commodities), and FinCEN (which governs money transmission). The lack of comprehensive federal legislation has produced a patchwork that exchanges and investors navigate with significant uncertainty.

**European Union** — The Markets in Crypto-Assets regulation (MiCA), fully effective as of 2024, provides the most comprehensive crypto regulatory framework of any major jurisdiction. It creates licensing requirements for crypto service providers, rules for stablecoins, and investor protections — with the goal of enabling innovation within a consistent legal structure across all EU member states.

**El Salvador** — Became the first country to adopt Bitcoin as legal tender in 2021, creating a real-world experiment in state-level crypto adoption. Citizens can use Bitcoin for any transaction; merchants are required to accept it. The experiment has had mixed results in terms of adoption, but has drawn significant attention to what government-level crypto integration looks like in practice.

**Singapore and UAE** — Have positioned themselves as crypto-friendly hubs with clear licensing frameworks designed to attract exchanges and blockchain companies. Both have seen significant migration of crypto businesses from less-defined regulatory environments.

**China** — Banned crypto mining and trading in 2021, driving a massive migration of mining operations (primarily to the U.S. and Kazakhstan) and serving as a recurring reminder of the political risk inherent in centralized state power over decentralized technology.

The global picture is moving toward more regulation, not less. The question for investors is not whether regulation will arrive — it will — but whether that regulation will be designed intelligently. The best frameworks acknowledge that crypto is a new asset class requiring new rules rather than forcing it into existing categories built for 20th-century finance.

## 7.7 DeFi, NFTs, and the Edge Cases

Decentralized finance creates tax complexity that centralized exchange trading doesn't. When you provide liquidity to a DEX like Uniswap, you receive LP (liquidity provider) tokens in return. When you remove liquidity, those tokens are redeemed. Each of these events is potentially a taxable disposal.

Wrapping tokens (converting ETH to wETH, for example) is currently treated as a taxable event by many accountants, though the IRS hasn't issued specific guidance. Receiving tokens through airdrops is generally treated as ordinary income at fair market value upon receipt. NFT sales are taxed as capital gains. Creating and selling NFTs as a business may create self-employment tax obligations.

The honest answer is that DeFi taxation is a developing area where IRS guidance has lagged significantly behind actual practice. The practical approach: track everything, make reasonable determinations using available guidance, disclose rather than conceal, and work with a CPA who specializes in crypto if your DeFi activity is substantial.

:::action
**W2W Action Step — Connect Your Accounts**

Sign up for either Koinly or CoinTracker today — both have free tiers that will handle a modest transaction count. Connect every exchange account you use via API key (read-only access — the tool cannot move your funds). Import wallet addresses for any self-custody wallets. Let the software run and see your complete tax picture for the first time. If you've been active for multiple years, check whether previous tax years look accurate. Knowing what you owe — or what you should have reported — is the first step to being in control of it. Do this before tax season arrives and your accountant's rates double.
:::
