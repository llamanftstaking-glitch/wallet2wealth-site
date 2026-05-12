---
type: chapter
chapter: 3
title: Buying and Selling Cryptocurrency
subtitle: Navigating exchanges without getting burned
---

La plupart des gens font une erreur lors de leur premier achat de crypto — pas catastrophique, mais coûteuse. Ils paient plus de frais qu'ils ne le réalisent, ils achètent au pire moment possible à cause d'un titre d'actualité, et ils laissent leurs pièces sur l'exchange indéfiniment parce que personne ne leur a dit qu'ils ne devraient pas.

Ce chapitre est le briefing que vous auriez dû recevoir avant votre premier trade.

## 3.1 Les exchanges centralisés : la porte d'entrée

Un **exchange centralisé** (CEX) est une entreprise qui exploite une place de marché où acheteurs et vendeurs peuvent échanger des cryptomonnaies. Coinbase, Kraken, Binance, Gemini — ce sont des intermédiaires. Vous déposez de la monnaie fiduciaire, ils la convertissent, et ils conservent les cryptos obtenues dans un compte qu'ils contrôlent.

L'attrait est évident : ils sont conçus pour les débutants, ils acceptent les cartes de crédit et les virements bancaires, ils disposent d'applications claires, et ils sont réglementés. Aux États-Unis, des exchanges réputés comme Coinbase et Kraken sont enregistrés auprès du FinCEN et respectent les lois financières fédérales. Cette conformité offre une protection aux consommateurs — et vous coûte quelque chose en frais et en vie privée.

**Coinbase** est le plus accessible aux débutants et le plus cher pour les acheteurs occasionnels. Son abonnement Coinbase One ou l'utilisation de Coinbase Advanced réduit les frais de manière significative. **Kraken** propose de meilleures structures de frais et une réputation en matière de sécurité plus solide que la plupart. **Binance** offre la liquidité la plus profonde et la sélection de tokens la plus large, mais sa situation réglementaire aux États-Unis a connu des difficultés. Pour de simples achats de Bitcoin et d'Ethereum, Coinbase ou Kraken conviendront parfaitement à la plupart des débutants.

## 3.2 KYC/AML : échanger sa vie privée contre l'accès

Avant de pouvoir trader sur un exchange réglementé, vous devrez passer par la vérification **KYC** (Know Your Customer, « Connaître son client ») et **AML** (Anti-Money Laundering, « Lutte contre le blanchiment d'argent »). Cela implique de soumettre une pièce d'identité officielle, un selfie, et parfois un justificatif de domicile. Le processus prend de quelques minutes à plusieurs jours selon la plateforme.

C'est le compromis à accepter. L'exchange veut savoir qui vous êtes. La blockchain, elle, s'en moque. Une fois que vous transférez vos fonds hors de l'exchange vers un portefeuille en auto-conservation, vos transactions sont pseudonymes — visibles sur le registre public, mais non liées à votre identité par l'exchange.

Certaines personnes s'opposent au KYC par principe. C'est une position philosophique légitime dans le monde de la crypto. Pour la plupart des débutants, c'est le point d'entrée pratique dans l'écosystème, et les exchanges réglementés qui l'exigent sont aussi ceux qui ont le moins de chances de vous voler vos fonds. Une fois que vous êtes à l'aise, il existe des options sans KYC — mais elles ont leur propre complexité et leurs propres risques.

## 3.3 Les exchanges décentralisés : trader sans intermédiaire

Un **exchange décentralisé** (DEX) est un smart contract — du code qui s'exécute sur une blockchain — qui vous permet d'échanger des tokens directement depuis votre portefeuille. Pas de compte, pas de KYC, pas de limites de retrait. Uniswap, Curve et dYdX sont les acteurs majeurs de cet espace.

Sur Uniswap, vous connectez votre portefeuille MetaMask, sélectionnez les tokens que vous souhaitez échanger, et les pools de liquidité du protocole gèrent l'opération automatiquement. Pas de carnet d'ordres, pas de contrepartie. Le prix est déterminé par un algorithme appelé **automated market maker** (AMM), basé sur le ratio des actifs dans le pool.

Les DEX sont puissants, mais requièrent plus d'expertise. Vous avez besoin d'un portefeuille. Vous avez besoin d'ETH pour les frais de gas. Vous devez comprendre le slippage. Et vous devez faire attention aux contrats de tokens avec lesquels vous interagissez — des tokens frauduleux peuvent imiter des tokens légitimes. Mais pour accéder à des tokens qui ne sont pas listés sur les grands exchanges — notamment les protocoles DeFi récents et les altcoins — les DEX sont souvent votre seule option.

CEX pour acheter avec de la monnaie fiduciaire, DEX pour accéder à toute l'étendue des actifs on-chain. C'est le modèle pratique à retenir.

## 3.4 Lire un carnet d'ordres

Sur les exchanges centralisés, les prix sont déterminés par des **carnets d'ordres** — des listes d'ordres d'achat et de vente ouverts à différents niveaux de prix.

Le côté **bid** correspond aux acheteurs : ce que les gens sont prêts à payer. Le côté **ask** (ou offre) correspond aux vendeurs : ce que les gens souhaitent recevoir. La différence entre le bid le plus élevé et l'ask le plus bas est le **spread**. Un spread serré indique un marché liquide. Un spread large indique un marché peu profond — soyez prudent.

Lorsque vous passez un ordre, vous interagissez avec ce carnet de l'une des deux manières suivantes :

**Ordre au marché :** Vous achetez ou vendez immédiatement au meilleur prix disponible. Rapide et simple, mais vous obtenez ce que le marché vous donne — ce qui, dans des marchés peu profonds ou en mouvement rapide, peut être moins bon que prévu.

**Ordre à cours limité :** Vous spécifiez le prix exact que vous êtes prêt à payer (ou à recevoir). L'ordre reste dans le carnet jusqu'à ce qu'il soit exécuté — ou jusqu'à ce que vous l'annuliez. Plus de contrôle, mais aucune garantie d'exécution. Si le prix n'atteint jamais votre limite, vous ne tradez pas.

Pour les débutants qui achètent du Bitcoin ou de l'Ethereum sur des exchanges majeurs avec une liquidité profonde, les ordres au marché conviennent très bien. Pour les tokens moins importants avec des carnets d'ordres peu fournis, utilisez toujours des ordres à cours limité. Vous obtiendrez souvent des prix nettement meilleurs.

:::detective
**Le Flash Crash qui a généré 2 millions de dollars en quelques secondes**

Le 22 juin 2017, le prix de l'Ethereum sur Coinbase a chuté de 319 $ à 0,10 $ en quelques millisecondes. Cela a été déclenché par un large ordre de vente qui a cascadé à travers le carnet d'ordres, déclenchant des milliers d'ordres stop-loss simultanément. La réaction en chaîne a traversé chaque bid jusqu'à ce que le carnet soit presque vide.

Les traders qui avaient placé des ordres d'achat à cours limité proches de zéro — par plaisanterie, ou comme un pari calculé — les ont vus s'exécuter instantanément. Puis le prix s'est redressé en quelques secondes. Certaines personnes ont réalisé des gains qui ont changé leur vie grâce à un trade qu'elles ne s'attendaient jamais à voir s'exécuter.

La leçon n'est pas de placer des ordres à cours limité farfelus. C'est de comprendre que les carnets d'ordres sont des choses vivantes. Dans des marchés peu profonds, un seul ordre important peut faire bouger les prix d'une façon qui semble impossible — jusqu'à ce que ça arrive.
:::

## 3.5 Les frais : le tueur silencieux de portefeuille

Les frais ne semblent pas significatifs sur un seul trade. Ils se cumulent en un frein sérieux sur les rendements au fil du temps.

Chaque exchange facture des frais pour exécuter des trades. La structure varie, mais voici les principaux types que vous rencontrerez :

**Frais de trading** — un pourcentage de chaque transaction. La plupart des grands exchanges facturent entre 0,1 % et 0,5 % par trade. L'interface standard de Coinbase peut aller plus haut. Utiliser les interfaces de trading « avancées » sur ces mêmes plateformes réduit presque toujours vos frais de manière significative.

**Frais maker et taker** — les « takers » passent des ordres au marché qui s'exécutent immédiatement (ils prennent de la liquidité). Les « makers » passent des ordres à cours limité qui restent dans le carnet (ils ajoutent de la liquidité). La plupart des exchanges facturent moins les makers — parfois rien du tout — parce qu'ils contribuent à la profondeur du carnet d'ordres de la plateforme. Apprenez la structure de votre exchange et tradez en conséquence.

**Frais de retrait** — frais fixes pour transférer des cryptos de l'exchange vers votre portefeuille. Ils varient beaucoup. Le transfert de Bitcoin coûte généralement un petit montant fixe. Certains exchanges appliquent des frais de retrait élevés. Comparez avant de déplacer des sommes importantes.

**Frais de gas (DEX)** — sur Ethereum, chaque transaction nécessite de payer du « gas » — les frais qui rémunèrent les validateurs qui traitent votre transaction. Les prix du gas fluctuent en fonction de la demande du réseau. Effectuer un swap sur Uniswap aux heures de pointe peut coûter entre 30 $ et 100 $, voire plus. Sur les réseaux Layer 2 d'Ethereum comme Arbitrum ou Base, le même swap ne coûte que quelques centimes. Connaissez votre réseau avant de trader.

Une bonne habitude : avant d'exécuter un trade, additionnez le coût aller-retour — frais d'achat, frais de vente, frais de retrait. C'est votre véritable seuil de rentabilité. Vous devez le dépasser avant d'être en profit.

## 3.6 Le slippage : pourquoi vous n'obtenez pas toujours le prix affiché

Lorsque vous échangez des tokens sur un DEX — ou que vous exécutez un ordre important sur une paire CEX peu liquide — vous rencontrerez le **slippage** : la différence entre le prix attendu et le prix réellement obtenu.

Voici pourquoi cela se produit. Sur Uniswap, les prix sont déterminés par le ratio des tokens dans un pool de liquidité. Lorsque vous achetez, vous retirez un token du pool et en injectez un autre, ce qui modifie le ratio — et donc le prix. Plus votre trade est important par rapport à la taille du pool, plus vous faites évoluer le prix en votre défaveur.

La plupart des interfaces DEX vous permettent de définir une tolérance au slippage — l'écart maximal par rapport au prix affiché que vous êtes prêt à accepter. Trop serrée (0,1 %) et votre transaction échoue parce que les prix ont bougé avant sa confirmation. Trop lâche (10 % et plus) et vous acceptez un mauvais deal, potentiellement en raison d'une attaque sandwich — où des bots détectent votre transaction en attente et tradent autour d'elle pour en extraire de la valeur.

Pour les paires à grande capitalisation avec une liquidité profonde (ETH/USDC), une tolérance au slippage de 0,5 % est généralement suffisante. Pour les tokens petits ou récents, attendez-vous à un slippage plus élevé et intégrez-le dans votre coût de revient.

:::quote
« Un exchange est un outil, pas un compte d'épargne. Entrez, faites vos opérations, et retirez vos actifs de la plateforme. »
:::

## 3.7 Retirez vos cryptos de l'exchange

On ne le dira jamais assez : les exchanges servent à acheter et à vendre, pas à stocker.

Le chapitre 2 a traité en détail l'effondrement de FTX. Ce n'est pas un incident isolé. Mt. Gox, Celsius, BlockFi, Voyager — la liste des exchanges et des dépositaires qui ont fait faillite, gelé les retraits, ou tout simplement disparu avec les fonds des clients est longue. Le schéma est toujours le même : les clients ont confié leurs clés à une contrepartie, la contrepartie a fait défaut, les clients ont tout perdu.

Une fois que vous avez acheté des cryptos et que vous ne les tradez pas activement, transférez-les vers votre portefeuille. Cela ne prend qu'une transaction et quelques minutes. C'est l'acte d'auto-conservation le plus important que vous puissiez accomplir.

La seule exception : les montants suffisamment faibles pour que les frais de retrait représentent un pourcentage disproportionné, ou les fonds que vous gérez activement dans des trades quotidiens. Tout le reste devrait être retiré de l'exchange dans les 24 heures suivant l'achat.

:::action
**Étape d'action W2W**

Créez un compte vérifié sur Coinbase ou Kraken. Complétez la vérification KYC — ayez votre pièce d'identité officielle à portée de main. Une fois vérifié, déposez entre 20 $ et 50 $ et achetez une petite quantité de Bitcoin ou d'Ethereum en utilisant un ordre à cours limité, et non un ordre au marché. Notez les frais exacts que vous avez payés et calculez quel pourcentage de votre achat ils représentent. Transférez ensuite les cryptos achetées vers le portefeuille MetaMask que vous avez configuré au chapitre 2. Vous venez de réaliser un cycle complet exchange-vers-portefeuille.
:::
