---
type: chapter
chapter: 2
title: Setting Up Your Digital Wallet
subtitle: Your first step into sovereign finance
---

Il existe une phrase dans le monde de la crypto qui paraît paranoïaque jusqu'au moment où vous en avez besoin : *Not your keys, not your coins.*

En 2022, une société appelée FTX — le deuxième plus grand exchange de crypto au monde, dirigé par un homme qui apparaissait en couverture de magazines et témoignait devant le Congrès — s'est effondrée du jour au lendemain. 8 milliards de dollars de fonds clients, envolés. Les personnes qui avaient laissé leur Bitcoin et leur Ethereum sur la plateforme ont vu leurs soldes tomber à zéro. Non pas à cause d'un piratage. Mais parce que quelqu'un d'autre contrôlait les clés.

Un wallet ne contient pas vos cryptos. La blockchain contient vos cryptos. Un wallet contient les clés qui prouvent que vous en êtes propriétaire. Comprenez cette distinction, et tout le reste de ce chapitre prend sens.

## 2.1 Wallets Custodiaux vs. Non-Custodiaux

La décision la plus importante que vous prendrez dans la crypto n'est pas ce que vous achetez. C'est la manière dont vous conservez ce que vous achetez.

**Les wallets custodiaux** sont gérés par un tiers — un exchange comme Coinbase, Kraken ou Binance. Lorsque vous créez un compte et achetez du Bitcoin sur ces plateformes, l'exchange détient vos clés privées. Vous, vous détenez une reconnaissance de dette. C'est pratique, accessible aux débutants, et accompagné d'un service client. C'est aussi le même modèle de confiance qu'une banque : vous espérez que l'institution ne fait pas faillite, ne gèle pas votre compte ou ne se fait pas pirater.

**Les wallets non-custodiaux** placent les clés entre vos mains. Vous êtes la seule personne pouvant accéder à vos fonds, les déplacer ou les perdre. Aucune entreprise ne peut bloquer vos transactions. Aucun gouvernement ne peut geler votre compte. Et aucune ligne d'assistance ne peut vous aider si vous commettez une erreur. Avec la souveraineté vient la responsabilité.

Pour les débutants qui achètent leurs premières cryptos, un compte sur un exchange custodial est un point de départ raisonnable. Mais l'objectif — et la philosophie centrale de ce livre — est d'évoluer vers l'auto-conservation à mesure que vos connaissances et vos avoirs grandissent. Garder tout sur un exchange sur le long terme, c'est comme ne jamais mettre d'argent dans votre propre compte bancaire. Vous faites confiance à quelqu'un d'autre pour faire la chose souveraine à votre place.

## 2.2 Hot Wallets vs. Cold Wallets

Parmi les wallets non-custodiaux, il existe un autre axe : le degré de connexion à internet de vos clés.

**Les hot wallets** sont des applications logicielles — extensions de navigateur, applications mobiles, programmes de bureau. MetaMask, Phantom, Rainbow. Ils sont connectés à internet par conception, ce qui les rend pratiques pour interagir avec des protocoles DeFi, acheter des NFT et déplacer des fonds rapidement. Cette même connexion en fait une cible. Un hot wallet, c'est comme de l'argent liquide dans votre poche : utile pour les dépenses quotidiennes, mais vous n'y mettriez pas toutes vos économies.

**Les cold wallets** (wallets matériels) sont des appareils physiques — Ledger, Trezor, Coldcard — qui stockent vos clés privées hors ligne. Pour signer une transaction, vous branchez physiquement l'appareil et vous la confirmez directement sur le matériel. Les logiciels malveillants présents sur votre ordinateur ne peuvent pas atteindre les clés, car celles-ci ne touchent jamais votre machine connectée à internet. Un cold wallet est un coffre-fort. Plus lent d'accès, plus difficile à utiliser, mais considérablement plus sécurisé.

L'approche pratique qu'utilisent la plupart des détenteurs sérieux : un hot wallet pour un usage actif et des montants modestes, un cold wallet pour le stockage à long terme de tout ce qui a de la valeur.

:::detective
**Les 300 Millions de Dollars dans un Disque Dur**

James Howells est un technicien informatique gallois qui a miné 8 000 Bitcoin en 2013 — suffisamment tôt pour que cela ne demande presque aucun effort — et a stocké le wallet sur le disque dur d'un ordinateur portable. Quand l'ordinateur est tombé en panne, il l'a jeté. Le disque dur a fini dans une décharge à Newport, au Pays de Galles.

Ces 8 000 Bitcoin valent aujourd'hui des centaines de millions de dollars.

Pendant des années, Howells a tenté de négocier avec le conseil municipal de Newport pour faire excaver la décharge. Le conseil a refusé à plusieurs reprises. Les pièces reposent enfouies, parfaitement intactes sur un disque dur, cryptographiquement accessibles à quiconque détient la clé privée — laquelle est également enfouie sous 110 000 tonnes d'ordures.

La leçon n'est pas de ne jamais jeter de disques durs. C'est de comprendre ce que vous possédez. Howells n'avait pas réalisé que les clés sur ce disque étaient ce qui importait le plus.
:::

## 2.3 Comment Choisir

Le choix de votre wallet dépend de ce que vous faites avec les fonds et du niveau de risque que vous pouvez gérer dans les deux sens — le risque qu'un exchange fasse faillite, et le risque de perdre vos propres clés.

Pour la plupart des débutants, commencez ici : **MetaMask pour Ethereum et les chaînes compatibles EVM, et un wallet matériel (Ledger Nano X ou Trezor Safe 3) dès que vos avoirs dépassent quelques centaines de dollars.** Cette combinaison couvre 90 % des cas d'usage.

Quelques questions pour vous guider :

Vous achetez simplement du Bitcoin et le conservez ? Un wallet matériel ou l'application Bitcoin native sur un Coldcard est la solution optimale. Vous interagissez avec la DeFi — échangez des tokens, fournissez des liquidités, vous connectez à des protocoles ? Un hot wallet comme MetaMask est votre interface. Vous tradez activement au quotidien ? Gardez un petit montant opérationnel dans un hot wallet et transférez régulièrement vos gains vers un cold storage.

N'utilisez jamais le même wallet pour tout. Compartimentez. Vos avoirs à long terme ne devraient pas partager de clés avec le wallet que vous connectez à des protocoles DeFi inconnus.

## 2.4 Configurer MetaMask : Étape par Étape

MetaMask est le wallet non-custodial le plus utilisé pour Ethereum et son écosystème. Il se présente sous la forme d'une extension de navigateur (Chrome, Firefox, Brave) ou d'une application mobile. Voici comment le configurer correctement.

**Étape 1 — Téléchargez uniquement depuis la source officielle.** Rendez-vous sur metamask.io. N'installez pas MetaMask depuis un autre lien, une publicité ou une recommandation quelconque. Il existe des dizaines de fausses extensions MetaMask conçues pour voler vos fonds dès que vous saisissez votre phrase de récupération. L'URL est metamask.io. Mettez-la en favori.

**Étape 2 — Créez un nouveau wallet.** Cliquez sur « Create a New Wallet ». Il vous sera demandé de créer un mot de passe. Ce mot de passe protège uniquement votre appareil local — ce n'est pas votre clé maîtresse.

**Étape 3 — Sécurisez votre phrase de récupération secrète.** MetaMask va générer une phrase de récupération de 12 mots. C'est le moment le plus important de votre parcours dans la crypto. Ne faites pas de capture d'écran. Ne la stockez pas dans votre application de notes, vos e-mails, iCloud ou Google Drive. Écrivez-la sur papier avec un stylo. Réécrivez-la sur une seconde feuille de papier. Conservez les deux copies dans deux endroits physiques distincts. Cette phrase, c'est votre wallet. Quiconque la possède a le contrôle total de tout ce qu'il contient.

**Étape 4 — Vérifiez votre phrase.** MetaMask vous demandera de confirmer votre phrase en sélectionnant les mots dans l'ordre. Ce n'est pas une formalité — c'est une vérification pour s'assurer que vous l'avez bien notée. Prenez-le au sérieux.

**Étape 5 — Vous êtes prêt.** Votre wallet dispose désormais d'une adresse publique — une longue chaîne de caractères commençant par `0x`. C'est votre adresse de dépôt. Partagez-la librement. Vos clés privées ne quittent jamais l'extension.

## 2.5 Phrases de Récupération : Traitez-les Comme des Espèces dans une Enveloppe

Les 12 (ou 24) mots générés lors de la création d'un wallet sont appelés votre phrase de récupération, phrase mnémonique ou seed phrase. N'importe quel wallet, sur n'importe quelle blockchain, peut être restauré à partir de cette phrase. Perdez-la, et vos fonds sont perdus pour toujours. Partagez-la, et vos fonds disparaissent en quelques minutes.

Ce n'est pas hypothétique. Crypto Twitter regorge d'histoires de personnes ayant posté leur phrase de récupération dans des salons d'aide Discord (des escrocs qui faisaient semblant d'aider), l'ayant saisie sur de faux sites de « vérification » MetaMask, ou l'ayant stockée dans des fichiers texte compromis lors d'une fuite dans le cloud.

Quelques règles qui peuvent sembler extrêmes au premier abord, mais ne le seront plus longtemps :

Ne saisissez jamais votre phrase de récupération sur un site web, jamais. Le vrai MetaMask ne vous la demandera jamais. Aucun protocole légitime ne vous la demandera jamais. Si quelque chose vous demande votre phrase de récupération, c'est une arnaque.

Conservez votre phrase de récupération dans au moins deux endroits physiques distincts — idéalement dans des bâtiments différents. Un incendie, une inondation ou un vol peut éliminer une seule copie.

Envisagez une sauvegarde de phrase de récupération en métal, résistante au feu et à l'eau. Des produits comme Cryptosteel ou Billoday vous permettent de graver vos mots sur de l'acier. Le papier brûle. L'acier, non.

:::quote
"Une clé privée n'est qu'un nombre. La différence entre le fait qu'elle ne vaille rien et qu'elle vaille des millions, c'est que vous seul la connaissez."
:::

## 2.6 Erreurs Courantes des Débutants

**Tout garder sur un exchange.** Évoqué plus haut. Pratique, mais fragile. Évoluez vers l'auto-conservation.

**Utiliser le même wallet pour tout.** Un wallet pour tout gérer, c'est une seule faille qui suffit pour tout perdre. Utilisez des wallets dédiés à des usages différents.

**Stocker les phrases de récupération sous forme numérique.** Captures d'écran, applications de notes, brouillons d'e-mails. Tout cela constitue une faille de sécurité. Uniquement un stockage physique, hors ligne.

**Envoyer sur le mauvais réseau.** Ethereum et des réseaux comme Polygon, Arbitrum et Base partagent le même format d'adresse, mais fonctionnent sur des réseaux différents. Envoyer des ETH vers une adresse Arbitrum sur le mauvais réseau peut bloquer vos fonds. Vérifiez toujours le réseau avant d'envoyer.

**Sauter l'étape de vérification de la phrase de récupération.** Les gens configurent des wallets à la hâte, cliquent sur la confirmation sans vraiment noter la phrase. Puis leur ordinateur plante. Puis ils apprennent à leurs dépens. Vérifiez. Notez-la. Vérifiez deux fois.

Votre wallet est le fondement de toute votre participation dans cet espace. Construisez-le correctement.

:::action
**W2W Action Step**

Téléchargez MetaMask depuis metamask.io et créez votre premier wallet non-custodial. Écrivez votre phrase de récupération sur papier — ne la prenez pas en capture d'écran. Une fois votre wallet créé, trouvez votre adresse publique (la chaîne 0x...) et copiez-la quelque part en sécurité. Vous avez maintenant votre première adresse crypto souveraine. Personne ne peut y accéder en dehors de vous.
:::
