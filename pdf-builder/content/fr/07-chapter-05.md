---
type: chapter
chapter: 5
title: Storing and Securing Your Assets
subtitle: Because "not your keys, not your coins" isn't a cliché
---

Le 11 novembre 2022, la plateforme d'échange FTX de Sam Bankman-Fried a déposé le bilan. Environ 8 milliards de dollars de fonds clients avaient disparu. Des personnes qui pensaient que leurs cryptos étaient en sécurité — parce qu'elles se trouvaient sur un compte auquel elles pouvaient se connecter chaque jour — se sont réveillées pour découvrir qu'elles ne possédaient plus rien. La plateforme prêtait secrètement les fonds des clients, et quand la musique s'est arrêtée, l'argent s'était évaporé.

Voilà la vérité fondamentale de la sécurité en crypto : posséder des cryptomonnaies et y avoir accès sont deux choses différentes. La plupart des débutants les confondent. Cette différence peut tout vous coûter.

## 5.1 Portefeuilles vs. comptes sur une plateforme d'échange

Quand vous achetez des Bitcoin sur Coinbase, vous ne détenez pas réellement des Bitcoin au sens traditionnel du terme. Vous avez une créance sur des Bitcoin que Coinbase conserve en votre nom. C'est l'équivalent numérique d'un dépôt bancaire — sauf qu'il n'y a pas de garantie des dépôts.

Un portefeuille crypto, c'est différent. Il ne « stocke » pas vos cryptos comme un portefeuille contient des billets. Vos coins vivent sur la blockchain — toujours. Un portefeuille détient la **clé privée** : le mot de passe cryptographique qui prouve que vous avez le droit de déplacer ces coins. Celui qui détient la clé privée contrôle les fonds. Point final.

C'est pourquoi l'expression « not your keys, not your coins » est devenue un principe, pas un simple slogan. C'est un énoncé de fait mathématique.

Il existe deux catégories de portefeuilles :

**Les portefeuilles custodiaux** — Vous confiez à un tiers (une plateforme comme Coinbase, Binance ou Kraken) le contrôle de vos clés. Pratique. Risqué pour des montants importants. Vous faites confiance à cette entreprise pour qu'elle reste solvable, sécurisée, et qu'elle ne se fasse pas pirater.

**Les portefeuilles non custodiaux** — Vous détenez les clés vous-même. Les portefeuilles logiciels comme MetaMask ou Trust Wallet fonctionnent sur votre téléphone ou votre navigateur. Les portefeuilles matériels sont des appareils physiques qui conservent les clés hors ligne. L'auto-garde signifie que vous êtes votre propre banque — avec toute la responsabilité que cela implique.

Pour de petits montants et du trading actif, une plateforme réputée convient tout à fait. Pour tout ce dont la perte vous serait insupportable, l'auto-garde est la bonne option.

## 5.2 Portefeuilles matériels — le stockage à froid bien fait

Un portefeuille matériel est un petit appareil physique — à peu près de la taille d'une clé USB — conçu pour stocker les clés privées dans un environnement isolé qui ne touche jamais à internet. Les deux grandes marques sont **Ledger** et **Trezor**, et elles fonctionnent sur le même principe : votre clé privée est générée sur l'appareil, reste sur l'appareil, et signe les transactions sur l'appareil. Votre ordinateur ne la voit jamais.

Voici comment fonctionne concrètement une transaction avec un portefeuille matériel : vous l'initiez sur votre ordinateur, la transaction non signée est envoyée à l'appareil, l'appareil la signe en interne à l'aide de votre clé privée, et seule la transaction signée (pas la clé) repart vers le réseau. Même si votre ordinateur est infecté par un malware, la clé n'est jamais exposée.

Quand en avez-vous vraiment besoin ? La règle approximative : si vous détenez plus de 1 000 à 2 000 $ en crypto sur le long terme, un portefeuille matériel vaut les 80 à 150 $ qu'il coûte. En dessous de ce seuil, un portefeuille logiciel réputé est acceptable. Au-dessus de 10 000 $, un portefeuille matériel n'est plus facultatif — c'est une précaution élémentaire.

Achetez uniquement sur le site officiel du fabricant. N'achetez jamais un portefeuille matériel d'occasion ou auprès d'un vendeur tiers sur Amazon. Des cas avérés de dispositifs préalablement compromis, vendus dans le but précis de voler les fonds de l'acheteur, ont été documentés.

:::detective
**La fuite de données Ledger**

En juillet 2020, Ledger — la société de portefeuilles matériels — a subi une fuite de données qui a exposé les informations personnelles de 270 000 clients : noms, numéros de téléphone et adresses postales. Les appareils eux-mêmes n'ont pas été compromis. Les cryptos étaient en sécurité.

Mais ce qui a suivi a été une vague de campagnes de phishing sophistiquées, de fausses demandes de phrase de récupération et même de menaces physiques envoyées aux domiciles des personnes concernées. La leçon n'était pas « n'utilisez pas Ledger » — c'était que la sécurité fonctionne par couches. L'appareil protège vos clés ; votre comportement protège tout le reste. Utilisez une boîte postale pour la livraison si possible. N'enregistrez jamais vos portefeuilles matériels sous votre vrai nom en ligne.
:::

## 5.3 Phrases de récupération — la clé maîtresse

Lorsque vous configurez un portefeuille non custodial — matériel ou logiciel — il génère une **phrase de récupération** : une séquence de 12 ou 24 mots courants en anglais. Cette phrase, c'est tout. C'est un encodage lisible par un humain de votre clé privée maîtresse, et elle permet de restaurer l'intégralité de votre portefeuille sur n'importe quel appareil compatible, partout dans le monde.

Perdez-la, et vos fonds sont perdus à jamais. Quelqu'un d'autre la trouve, et vos fonds disparaissent immédiatement.

Les règles sont simples et non négociables :

**Ne la stockez jamais sous forme numérique.** Pas dans une photo sur votre téléphone. Pas dans un Google Doc. Pas dans un e-mail à vous-même. Pas dans un gestionnaire de mots de passe. Pas dans un SMS. Les fichiers numériques se font pirater, synchroniser dans le cloud, et voler. La phrase de récupération vit sur papier ou sur métal — rien d'autre.

**Notez-la au moment où vous la voyez.** Lors de la configuration. Mot pour mot, numéro par numéro. Vérifiez-la deux fois avant de fermer l'écran.

**Conservez-la physiquement en plusieurs endroits sûrs.** Un exemplaire chez vous. Un dans un coffre-fort ignifuge, un coffre de banque, ou chez un membre de confiance de votre famille. L'incendie et les inondations sont des risques réels. Un seul exemplaire ne suffit pas.

**Des plaques de sauvegarde en métal** sont disponibles pour 20 à 50 $ et vous permettent de graver votre phrase de récupération dans de l'acier inoxydable. C'est superflu pour de petits montants — c'est indispensable pour des montants importants. Le papier brûle. Le métal, non.

La phrase ne doit jamais être saisie sur un site web ou une application qui vous la demande. Le seul usage légitime d'une phrase de récupération est l'importation dans un logiciel de portefeuille officiel que vous avez installé vous-même. Tout site qui vous demande votre phrase de récupération est en train de vous la voler.

## 5.4 Authentification à deux facteurs et sécurité des comptes

Pour les comptes sur les plateformes d'échange et tout service custodial que vous utilisez, l'authentification à deux facteurs (2FA) est obligatoire — mais tous les types de 2FA ne se valent pas.

**Le 2FA par SMS** est la forme la plus faible. Il est vulnérable aux attaques par échange de carte SIM (SIM-swapping), où un criminel appelle votre opérateur, se fait passer pour vous, et transfère votre numéro de téléphone vers son propre appareil. Cela prend quelques minutes. Des milliers de personnes ont perdu des sommes considérables de cette façon.

**Les applications d'authentification** (Google Authenticator, Authy, Aegis) génèrent des codes temporels localement sur votre appareil. Ils ne peuvent pas être interceptés via le réseau téléphonique. C'est le minimum requis pour tout compte sérieux.

**Les clés de sécurité matérielles** (YubiKey) représentent l'étalon-or. Une clé physique que vous branchez pour vous authentifier. Quasiment impossible à pirater à distance. Si vous détenez des avoirs importants sur une plateforme, cela vaut la peine d'y réfléchir.

Au-delà du 2FA : utilisez un mot de passe unique et solide pour chaque compte sur les plateformes. Utilisez une adresse e-mail dédiée aux comptes crypto que vous n'utilisez pour rien d'autre. Activez la liste blanche d'adresses de retrait partout où c'est proposé — cela limite les retraits aux seules adresses préapprouvées, de sorte que même un compte compromis ne peut pas être vidé vers un portefeuille inconnu.

## 5.5 Phishing — le vecteur d'attaque le plus courant

Les pirates ne cassent que rarement les systèmes cryptographiques. Ils cassent les gens.

Une attaque de phishing est un piège d'ingénierie sociale conçu pour vous amener à livrer volontairement vos identifiants ou votre phrase de récupération. Elle arrive sous forme d'e-mails qui ressemblent exactement à des correspondances de Ledger, Coinbase ou MetaMask. Elle arrive sous forme de messages privés Twitter de « conseillers du support ». Elle arrive sous forme d'annonces Google pour « MetaMask » qui mènent à des imitations convaincantes. Elle arrive sous forme de faux airdrops vous demandant de « connecter votre portefeuille et de vérifier ».

L'anatomie d'un site de phishing : l'URL est fausse. Pas MetaMask.io — c'est Metarnask.io, ou metamask-support.net. La page est visuellement parfaite. Le seul indice, c'est le nom de domaine.

Mettez en favori chaque site que vous utilisez pour la crypto. Accédez-y via le favori, pas via les résultats de recherche ou les liens dans des e-mails. Ne cliquez jamais sur un lien dans un e-mail non sollicité prétendant provenir d'une plateforme ou d'un fournisseur de portefeuille. En cas de doute, allez directement sur le site officiel en tapant vous-même l'URL.

La protection la plus efficace contre le phishing, c'est le scepticisme. Si quelque chose vous demande d'agir en urgence — « votre compte va être suspendu », « réclamez votre airdrop maintenant », « vérifiez votre portefeuille » — ralentissez. L'urgence est l'outil du manipulateur.

:::detective
**L'effondrement de FTX**

En novembre 2022, FTX était la deuxième plus grande plateforme d'échange de cryptos au monde. Elle bénéficiait d'endorsements de célébrités, de publicités au Super Bowl, d'un accord de naming avec une salle de sport, et son fondateur faisait la couverture de Forbes. Elle traitait des milliards de dollars de volume quotidien.

Elle prêtait également secrètement les fonds des clients à Alameda Research, la firme de trading de SBF, qui avait effectué des paris catastrophiques. Lorsqu'un concurrent a publié le bilan d'Alameda et que les clients ont commencé à retirer leurs fonds, la liquidité s'est évaporée en 72 heures. Plus d'un million de clients ont vu leurs comptes gelés du jour au lendemain.

La blockchain a fonctionné parfaitement tout au long de cette période. Les transactions Bitcoin continuaient de se régler. L'échec résidait dans le fait d'avoir confié ses clés à une institution centralisée. Les clients qui détenaient leurs Bitcoin dans des portefeuilles en auto-garde n'ont rien ressenti. Ceux qui faisaient confiance à FTX ont tout perdu.
:::

## 5.6 Portefeuilles multi-signatures pour les avoirs importants

Pour les grands détenteurs — pensez à 100 000 $ et plus, ou à des fonds partagés entre plusieurs personnes — les **portefeuilles multi-signatures (multisig)** ajoutent une couche de protection supplémentaire. Une configuration multisig exige plusieurs clés privées pour autoriser toute transaction. Un multisig 2-sur-3, par exemple, nécessite que deux des trois clés désignées signent avant que les fonds ne bougent.

L'avantage concret : aucun point de défaillance unique. Une clé peut être compromise et vos fonds sont toujours en sécurité. Une clé peut être perdue et vous pouvez toujours récupérer vos fonds grâce aux deux autres. C'est l'équivalent d'un coffre-fort bancaire qui nécessite que deux responsables tournent leurs clés simultanément.

Des outils comme Gnosis Safe (désormais simplement Safe) rendent le multisig accessible aux particuliers et aux équipes. La configuration est plus complexe qu'avec un portefeuille standard, mais pour des avoirs qui représentent une richesse significative, cette architecture vaut la peine d'être comprise et envisagée.

:::action
**Action Wallet to Wealth — Audit de sécurité**

Ouvrez chaque compte sur lequel vous détenez des cryptos. Pour chacun, répondez à trois questions : (1) Est-il custodial ou non custodial ? (2) Le 2FA est-il activé, et est-il basé sur une application d'authentification plutôt que sur des SMS ? (3) S'il est custodial, le montant qui y est stocké est-il une somme dont la perte vous serait dévastatrice ? Si la réponse à cette troisième question est oui, transférez-la vers un portefeuille matériel ou au minimum vers un portefeuille logiciel non custodial cette semaine. Pas un jour — cette semaine. La sécurité est la seule chose en crypto qui ne peut pas attendre un meilleur moment.
:::
