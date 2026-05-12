---
type: chapter
chapter: 3
title: Buying and Selling Cryptocurrency
subtitle: Navigating exchanges without getting burned
---

Na primeira vez que a maioria das pessoas compra cripto, elas fazem errado — não de forma catastrófica, mas cara. Pagam mais em taxas do que percebem, compram no pior momento possível por causa de uma manchete e deixam suas moedas na corretora indefinidamente porque ninguém disse que não deveriam.

Este capítulo é o briefing que você deveria ter recebido antes da sua primeira negociação.

## 3.1 Corretoras Centralizadas: A Porta de Entrada

Uma **corretora centralizada** (CEX) é uma empresa que opera um mercado onde compradores e vendedores podem negociar criptomoedas. Coinbase, Kraken, Binance, Gemini — são intermediários. Você deposita moeda fiduciária, eles convertem e mantêm a cripto resultante em uma conta que eles controlam.

O apelo é óbvio: são projetadas para iniciantes, aceitam cartões de crédito e transferências bancárias, têm aplicativos intuitivos e são regulamentadas. Nos EUA, corretoras respeitáveis como Coinbase e Kraken são registradas no FinCEN e cumprem as leis financeiras federais. Essa conformidade oferece proteção ao consumidor — e tem um custo em taxas e privacidade.

A **Coinbase** é a mais amigável para iniciantes e a mais cara para compradores ocasionais. Sua assinatura Coinbase One ou o uso do Coinbase Advanced reduz as taxas significativamente. A **Kraken** tem estruturas de taxas melhores e reputação de segurança superior à maioria. A **Binance** tem a maior liquidez e a mais ampla seleção de tokens, mas sua situação regulatória nos EUA enfrentou desafios. Para compras puras de Bitcoin e Ethereum, Coinbase ou Kraken atenderão bem a maioria dos iniciantes.

## 3.2 KYC/AML: Trocando Privacidade por Acesso

Antes de negociar em qualquer corretora regulamentada, você passará pela verificação de **KYC** (Conheça Seu Cliente) e **AML** (Prevenção à Lavagem de Dinheiro). Isso significa enviar um documento de identidade emitido pelo governo, uma selfie e, às vezes, comprovante de endereço. O processo leva de minutos a dias dependendo da plataforma.

Essa é a troca. A corretora quer saber quem você é. O blockchain não se importa. Depois que você move os fundos para fora da corretora e para uma carteira sob sua própria custódia, suas transações são pseudônimas — visíveis no registro público, mas não vinculadas à sua identidade pela corretora.

Algumas pessoas se opõem ao KYC por princípio. É uma posição filosófica legítima no mundo cripto. Para a maioria dos iniciantes, é o ponto de entrada prático no ecossistema, e as corretoras regulamentadas que o exigem também são as menos propensas a roubar seus fundos. Depois que você estiver dentro e confortável, há opções sem KYC — embora venham com sua própria complexidade e risco.

## 3.3 Corretoras Descentralizadas: Negociando Sem Intermediário

Uma **corretora descentralizada** (DEX) é um contrato inteligente — código rodando em um blockchain — que permite trocar tokens diretamente da sua carteira. Sem conta, sem KYC, sem limites de saque. Uniswap, Curve e dYdX são os principais players nesse espaço.

No Uniswap, você conecta sua carteira MetaMask, seleciona os tokens que deseja trocar e os pools de liquidez do protocolo executam a negociação automaticamente. Não há livro de ordens, não há contraparte. O preço é determinado por um algoritmo chamado **formador de mercado automatizado** (AMM), baseado na proporção de ativos no pool.

As DEXes são poderosas, mas exigem mais sofisticação. Você precisa de uma carteira. Precisa de ETH para as taxas de gas. Precisa entender o slippage. E precisa ter cuidado com quais contratos de tokens está interagindo — tokens fraudulentos podem imitar os legítimos. Mas para acessar tokens que não estão listados nas principais corretoras — especialmente protocolos DeFi mais novos e altcoins — as DEXes costumam ser sua única opção.

CEX para comprar com moeda fiduciária, DEX para acessar toda a amplitude de ativos on-chain. Esse é o modelo prático.

## 3.4 Lendo um Livro de Ordens

Nas corretoras centralizadas, os preços são determinados por **livros de ordens** — listas de ordens de compra e venda abertas em vários pontos de preço.

O lado do **bid** (oferta de compra) representa os compradores: o que as pessoas estão dispostas a pagar. O lado do **ask** (oferta de venda) representa os vendedores: o que as pessoas querem receber. A diferença entre o bid mais alto e o ask mais baixo é o **spread**. Spreads estreitos indicam um mercado líquido. Spreads largos indicam mercados com pouca liquidez — use cautela.

Quando você faz uma negociação, está interagindo com esse livro de uma das duas maneiras:

**Ordem a mercado:** Você compra ou vende imediatamente pelo melhor preço disponível. Rápida e simples, mas você recebe o que o mercado oferecer — o que em mercados com pouca liquidez ou em rápida movimentação pode ser pior do que o esperado.

**Ordem limitada:** Você especifica o preço exato que está disposto a pagar (ou receber). A ordem fica no livro até ser executada — ou até você cancelá-la. Mais controle, mas sem garantia de execução. Se o preço nunca atingir seu limite, a negociação não acontece.

Para iniciantes comprando Bitcoin ou Ethereum em grandes corretoras com liquidez profunda, ordens a mercado funcionam bem. Para tokens menores com livros de ordens com pouca liquidez, sempre use ordens limitadas. Frequentemente você conseguirá preços significativamente melhores.

:::detective
**O Flash Crash Que Rendeu US$ 2 Milhões em Segundos**

Em 22 de junho de 2017, o preço do Ethereum na Coinbase despencou de US$ 319 para US$ 0,10 em milissegundos. O evento foi desencadeado por uma grande ordem de venda que cascateou pelo livro de ordens, ativando milhares de ordens de stop-loss de uma vez. A reação em cadeia atravessou todos os bids até o livro ficar quase vazio.

Traders que tinham definido ordens limitadas de compra próximas a zero — como uma brincadeira, ou como uma aposta calculada — tiveram suas ordens executadas instantaneamente. Então o preço se recuperou em segundos. Algumas pessoas fizeram dinheiro suficiente para mudar de vida em uma negociação que nunca esperavam ver executada.

A lição não é definir ordens limitadas absurdas. É entender que os livros de ordens são organismos vivos. Em mercados com pouca liquidez, uma única ordem grande pode mover os preços de formas que parecem impossíveis — até acontecerem.
:::

## 3.5 Taxas: O Destruidor Silencioso de Portfólios

As taxas não parecem significativas em uma única negociação. Com o tempo, elas se acumulam e se tornam um sério obstáculo aos retornos.

Toda corretora cobra taxas para executar negociações. A estrutura varia, mas os principais tipos que você encontrará são:

**Taxas de negociação** — uma porcentagem de cada transação. A maioria das grandes corretoras cobra de 0,1% a 0,5% por negociação. A interface padrão da Coinbase pode cobrar mais. Usar as interfaces de negociação "avançadas" nas mesmas plataformas quase sempre reduz suas taxas significativamente.

**Taxas de maker vs. taker** — "takers" fazem ordens a mercado que são executadas imediatamente (eles consomem liquidez). "Makers" fazem ordens limitadas que ficam no livro (eles adicionam liquidez). A maioria das corretoras cobra menos dos makers — às vezes zero — porque eles estão contribuindo para a profundidade do livro de ordens da plataforma. Aprenda a estrutura da sua corretora e negocie de acordo.

**Taxas de saque** — taxas fixas para mover cripto da corretora para sua carteira. Essas variam bastante. Mover Bitcoin normalmente custa um pequeno valor fixo. Algumas corretoras cobram taxas de saque elevadas. Compare antes de mover grandes quantias.

**Taxas de gas (DEXes)** — no Ethereum, cada transação exige o pagamento de "gas" — a taxa que remunera os validadores que processam sua transação. Os preços do gas flutuam com a demanda da rede. Fazer uma troca no Uniswap nos horários de pico pode custar de US$ 30 a US$ 100 ou mais. Nas redes Layer 2 do Ethereum, como Arbitrum ou Base, a mesma troca custa centavos. Conheça sua rede antes de negociar.

Um hábito útil: antes de executar qualquer negociação, some o custo total de ida e volta — taxas para comprar, taxas para vender, taxas para sacar. Esse é o seu ponto de equilíbrio real. Você precisa superá-lo antes de entrar no lucro.

## 3.6 Slippage: Por Que Você Nem Sempre Consegue o Preço que Vê

Quando você troca tokens em uma DEX — ou executa uma grande negociação em um par com pouca liquidez em uma CEX — você encontrará o **slippage**: a diferença entre o preço que você esperava e o preço que realmente obteve.

Veja por que isso acontece. No Uniswap, os preços são determinados pela proporção de tokens em um pool de liquidez. Quando você compra, está retirando um token e colocando outro, o que muda a proporção — o que muda o preço. Quanto maior a sua negociação em relação ao tamanho do pool, mais você move o preço contra si mesmo.

A maioria das interfaces de DEX permite definir uma tolerância de slippage — o desvio máximo em relação ao preço cotado que você está disposto a aceitar. Muito apertado (0,1%) e sua transação falha porque os preços se moveram antes de ser confirmada. Muito frouxo (10% ou mais) e você está aceitando um mau negócio, possivelmente por causa de um ataque sandwich — onde bots detectam sua transação pendente e negociam ao redor dela para extrair valor.

Para pares de grande capitalização com liquidez profunda (ETH/USDC), uma tolerância de slippage de 0,5% geralmente é adequada. Para tokens pequenos ou novos, espere slippage maior e inclua isso no seu custo de base.

:::quote
"Uma corretora é uma ferramenta, não uma conta poupança. Entre, faça o que precisa e retire seus ativos da plataforma."
:::

## 3.7 Mova Sua Cripto para Fora da Corretora

Isso nunca pode ser dito o suficiente: corretoras servem para comprar e vender, não para guardar.

O Capítulo 2 cobriu o colapso da FTX em detalhes. Isso não é um incidente isolado. Mt. Gox, Celsius, BlockFi, Voyager — a lista de corretoras e custodiantes que faliram, congelaram saques ou simplesmente desapareceram com os fundos dos clientes é longa. O padrão é sempre o mesmo: os clientes confiaram suas chaves a uma contraparte, a contraparte falhou e os clientes perderam.

Depois de comprar cripto e não estar ativamente negociando, mova para a sua carteira. Isso requer uma única transação e alguns minutos. É o ato mais importante de autocustódia que você pode realizar.

A única exceção: valores pequenos o suficiente para que a taxa de saque consumisse uma porcentagem desproporcional, ou fundos que você está gerenciando ativamente em negociações do dia a dia. Todo o resto deve estar fora da corretora dentro de 24 horas após a compra.

:::action
**Passo de Ação W2W**

Crie uma conta verificada na Coinbase ou na Kraken. Complete a verificação KYC — tenha seu documento de identidade emitido pelo governo em mãos. Após a verificação, deposite entre US$ 20 e US$ 50 e compre uma pequena quantidade de Bitcoin ou Ethereum usando uma ordem limitada, não uma ordem a mercado. Anote as taxas exatas que pagou e calcule qual porcentagem da sua compra elas representaram. Em seguida, transfira a cripto comprada para a carteira MetaMask que você configurou no Capítulo 2. Você acabou de completar um ciclo completo de corretora para carteira.
:::
