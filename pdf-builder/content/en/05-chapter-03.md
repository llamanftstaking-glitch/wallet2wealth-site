---
type: chapter
chapter: 3
title: Buying and Selling Cryptocurrency
subtitle: Navigating exchanges without getting burned
---

The first time most people buy crypto, they do it wrong — not catastrophically, but expensively. They pay more in fees than they realize, they buy at the worst possible moment because of a headline, and they leave their coins on the exchange indefinitely because nobody told them they shouldn't.

This chapter is the briefing you should have gotten before your first trade.

## 3.1 Centralized Exchanges: The On-Ramp

A **centralized exchange** (CEX) is a company that operates a marketplace where buyers and sellers can trade cryptocurrency. Coinbase, Kraken, Binance, Gemini — these are intermediaries. You deposit fiat currency, they convert it, and they hold the resulting crypto in an account they control.

The appeal is obvious: they're designed for beginners, they accept credit cards and bank transfers, they have clean apps, and they're regulated. In the US, reputable exchanges like Coinbase and Kraken are registered with FinCEN and comply with federal financial laws. That compliance provides consumer protection — and costs you something in fees and privacy.

**Coinbase** is the most beginner-friendly and the most expensive for casual buyers. Its Coinbase One subscription or using Coinbase Advanced reduces fees significantly. **Kraken** has better fee structures and stronger security reputation than most. **Binance** has the deepest liquidity and widest token selection, but its regulatory standing in the US has faced challenges. For pure Bitcoin and Ethereum purchases, Coinbase or Kraken will serve most beginners well.

## 3.2 KYC/AML: Trading Privacy for Access

Before you can trade on any regulated exchange, you'll go through **KYC** (Know Your Customer) and **AML** (Anti-Money Laundering) verification. This means submitting government ID, a selfie, and sometimes proof of address. It takes minutes to days depending on the platform.

This is the tradeoff. The exchange wants to know who you are. The blockchain doesn't care. Once you move funds off-exchange and into a self-custodied wallet, your transactions are pseudonymous — visible on the public ledger but not tied to your identity by the exchange.

Some people object to KYC on principle. That's a legitimate philosophical position in crypto. For most beginners, it's the practical entry point into the ecosystem, and the regulated exchanges that require it are also the least likely to steal your funds. Once you're in and comfortable, there are non-KYC options — though they come with their own complexity and risk.

## 3.3 Decentralized Exchanges: Trading Without an Intermediary

A **decentralized exchange** (DEX) is a smart contract — code running on a blockchain — that allows you to swap tokens directly from your wallet. No account, no KYC, no withdrawal limits. Uniswap, Curve, and dYdX are the major players in this space.

On Uniswap, you connect your MetaMask wallet, select the tokens you want to swap, and the protocol's liquidity pools handle the trade automatically. There's no order book, no counterparty. The price is determined by an algorithm called an **automated market maker** (AMM), based on the ratio of assets in the pool.

DEXes are powerful but require more sophistication. You need a wallet. You need ETH for gas fees. You need to understand slippage. And you need to be careful about which token contracts you're interacting with — scam tokens can mimic legitimate ones. But for accessing tokens that aren't listed on major exchanges — particularly newer DeFi protocols and altcoins — DEXes are often your only option.

CEX for buying with fiat, DEX for accessing the full breadth of on-chain assets. That's the practical model.

## 3.4 Reading an Order Book

On centralized exchanges, prices are determined by **order books** — lists of open buy and sell orders at various price points.

The **bid** side is buyers: what people are willing to pay. The **ask** (or offer) side is sellers: what people want to receive. The difference between the highest bid and lowest ask is the **spread**. Narrow spreads mean a liquid market. Wide spreads mean thin markets — use caution.

When you place a trade, you're interacting with this book in one of two ways:

**Market order:** You buy or sell immediately at the best available price. Fast, simple, but you get whatever the market gives you — which in thin or fast-moving markets can be worse than expected.

**Limit order:** You specify the exact price you're willing to pay (or receive). The order sits in the book until it fills — or until you cancel it. More control, but no guarantee of execution. If the price never reaches your limit, you don't trade.

For beginners buying Bitcoin or Ethereum on major exchanges with deep liquidity, market orders are fine. For smaller tokens with thin order books, always use limit orders. You'll often get significantly better prices.

:::detective
**The Flash Crash That Made $2 Million in Seconds**

On June 22, 2017, the price of Ethereum on Coinbase crashed from $319 to $0.10 in milliseconds. It was triggered by a large sell order that cascaded through the order book, triggering thousands of stop-loss orders at once. The chain reaction blew through every bid until the book was nearly empty.

Traders who had set limit buy orders near zero — as a joke, or as a calculated moonshot — had them filled instantly. Then the price recovered within seconds. Some people made life-changing money from a trade they never expected to execute.

The lesson isn't to set crazy limit orders. It's to understand that order books are living things. In thin markets, a single large order can move prices in ways that feel impossible until they happen.
:::

## 3.5 Fees: The Silent Portfolio Killer

Fees don't feel significant on a single trade. They compound into a serious drag on returns over time.

Every exchange charges fees to execute trades. The structure varies, but the main types you'll encounter:

**Trading fees** — a percentage of each transaction. Most major exchanges charge 0.1%–0.5% per trade. Coinbase's standard interface can go higher. Using "advanced" trading interfaces on the same platforms almost always cuts your fees significantly.

**Maker vs. taker fees** — "takers" place market orders that immediately fill (they take liquidity). "Makers" place limit orders that sit in the book (they add liquidity). Most exchanges charge makers less — sometimes zero — because they're contributing to the platform's order book depth. Learn the structure of your exchange and trade accordingly.

**Withdrawal fees** — flat fees to move crypto off the exchange to your wallet. These vary widely. Moving Bitcoin typically costs a small flat amount. Some exchanges charge premium withdrawal fees. Compare before you move large sums.

**Gas fees (DEXes)** — on Ethereum, every transaction requires paying "gas" — the fee that compensates the validators who process your transaction. Gas prices fluctuate with network demand. Swapping on Uniswap during peak hours can cost $30–$100+. On Ethereum Layer 2 networks like Arbitrum or Base, the same swap costs cents. Know your network before you trade.

A useful habit: before executing any trade, add up the round-trip cost — fees to buy, fees to sell, fees to withdraw. That's your actual break-even point. You need to clear it before you're in profit.

## 3.6 Slippage: Why You Don't Always Get the Price You See

When you swap tokens on a DEX — or execute a large trade on a thinly traded CEX pair — you'll encounter **slippage**: the difference between the price you expected and the price you actually got.

Here's why it happens. On Uniswap, prices are determined by the ratio of tokens in a liquidity pool. When you buy, you're taking one token out and putting another in, which changes the ratio — which changes the price. The larger your trade relative to the pool size, the more you move the price against yourself.

Most DEX interfaces let you set a slippage tolerance — the maximum deviation from the quoted price you're willing to accept. Too tight (0.1%) and your transaction fails because prices moved before it confirmed. Too loose (10%+) and you're accepting a bad deal, possibly to a sandwich attack — where bots detect your pending transaction and trade around it to extract value.

For large-cap pairs with deep liquidity (ETH/USDC), 0.5% slippage tolerance is usually fine. For small or new tokens, expect higher slippage and factor it into your cost basis.

:::quote
"An exchange is a tool, not a savings account. Get in, do your business, and get your assets off the platform."
:::

## 3.7 Move Your Crypto Off the Exchange

This cannot be said enough: exchanges are for buying and selling, not storing.

Chapter 2 covered the FTX collapse in detail. That's not an isolated incident. Mt. Gox, Celsius, BlockFi, Voyager — the list of exchanges and custodians that have failed, frozen withdrawals, or simply disappeared with customer funds is long. The pattern is always the same: customers trusted a counterparty with their keys, the counterparty failed, customers lost.

Once you've bought crypto and you're not actively trading it, move it to your wallet. This takes one transaction and a few minutes. It's the single most important act of self-custody you can take.

The only exception: amounts small enough that the withdrawal fee would eat a disproportionate percentage, or funds you're actively managing in day-to-day trades. Everything else should be off exchange within 24 hours of purchase.

:::action
**W2W Action Step**

Create a verified account on Coinbase or Kraken. Complete KYC verification — have your government ID ready. Once verified, deposit $20–$50 and purchase a small amount of Bitcoin or Ethereum using a limit order, not a market order. Note the exact fees you paid, and calculate what percentage of your purchase they represented. Then transfer the purchased crypto to the MetaMask wallet you set up in Chapter 2. You've just completed a full exchange-to-wallet cycle.
:::
