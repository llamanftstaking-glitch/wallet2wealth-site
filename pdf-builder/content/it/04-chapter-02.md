---
type: chapter
chapter: 2
title: Setting Up Your Digital Wallet
subtitle: Your first step into sovereign finance
---

Nel mondo cripto esiste una frase che sembra paranoica finché non ti trovi a doverla applicare: *Not your keys, not your coins.*

Nel 2022, una società chiamata FTX — il secondo exchange di criptovalute più grande al mondo, guidata da un uomo che appariva sulle copertine delle riviste e testimoniava davanti al Congresso — è crollata da un giorno all'altro. 8 miliardi di dollari in fondi dei clienti, spariti. Le persone che avevano lasciato i loro Bitcoin ed Ethereum sulla piattaforma hanno visto i loro saldi azzerarsi. Non per via di un hack. Perché qualcun altro controllava le chiavi.

Un wallet non contiene le tue criptovalute. È la blockchain a contenere le tue criptovalute. Un wallet contiene le chiavi che dimostrano che ne sei il proprietario. Capisci questa distinzione, e tutto il resto di questo capitolo ti sarà chiaro.

## 2.1 Wallet Custodial e Non-Custodial

La decisione più importante che prenderai nel mondo cripto non riguarda cosa comprare. Riguarda come custodire quello che compri.

I **wallet custodial** sono gestiti da una terza parte — un exchange come Coinbase, Kraken o Binance. Quando crei un account e acquisti Bitcoin lì, l'exchange detiene le tue chiavi private. Tu hai in mano una promessa di pagamento. È comodo, adatto ai principianti e include un servizio di assistenza clienti. È anche lo stesso modello di fiducia di una banca: stai sperando che l'istituzione non fallisca, non blocchi il tuo account o non venga violata.

I **wallet non-custodial** mettono le chiavi nelle tue mani. Sei l'unica persona che può accedere ai tuoi fondi, spostarli o perderli. Nessuna azienda può bloccare le tue transazioni. Nessun governo può congelare il tuo account. E nessun servizio di assistenza può aiutarti se commetti un errore. Con la sovranità arriva la responsabilità.

Per i principianti che acquistano le loro prime criptovalute, aprire un account su un exchange custodial è un punto di partenza ragionevole. Ma l'obiettivo — e la filosofia centrale di questo libro — è muoversi verso l'autocustodia man mano che le tue conoscenze e i tuoi asset crescono. Tenere tutto su un exchange a lungo termine equivale a non versare mai denaro sul proprio conto bancario. Stai affidando a qualcun altro il compito di fare la cosa sovrana al posto tuo.

## 2.2 Hot Wallet e Cold Wallet

All'interno dei wallet non-custodial, c'è un'altra distinzione: quanto le tue chiavi sono connesse a internet.

Gli **hot wallet** sono applicazioni software — estensioni per browser, app mobile, programmi desktop. MetaMask, Phantom, Rainbow. Sono connessi a internet per loro natura, il che li rende pratici per interagire con i protocolli DeFi, acquistare NFT e spostare fondi rapidamente. Questa stessa connessione li rende un bersaglio. Un hot wallet è come il contante in tasca: utile per le spese quotidiane, ma non ci metteresti tutti i tuoi risparmi.

I **cold wallet** (hardware wallet) sono dispositivi fisici — Ledger, Trezor, Coldcard — che archiviano le tue chiavi private offline. Per firmare una transazione, colleghi fisicamente il dispositivo e la confermi direttamente sull'hardware. Il malware sul tuo computer non può raggiungere le chiavi perché le chiavi non entrano mai in contatto con la tua macchina connessa a internet. Un cold wallet è una cassaforte. Più lento da utilizzare, più difficile da usare, ma enormemente più sicuro.

L'approccio pratico che usano la maggior parte dei possessori seri: un hot wallet per l'uso attivo e per importi ridotti, un cold wallet per la custodia a lungo termine di qualsiasi asset di valore.

:::detective
**I 300 Milioni di Dollari in un Hard Disk**

James Howells è un tecnico informatico gallese che ha minato 8.000 Bitcoin nel 2013 — abbastanza presto che richiedeva a malapena alcuno sforzo — e ha archiviato il wallet su un hard disk di un laptop. Quando il laptop si è guastato, lo ha buttato via. L'hard disk è finito in una discarica a Newport, nel Galles.

Quegli 8.000 Bitcoin valgono oggi centinaia di milioni di dollari.

Per anni, Howells ha cercato di trattare con il consiglio comunale di Newport per ottenere il permesso di scavare nella discarica. Il consiglio ha ripetutamente rifiutato. Le monete giacciono sepolte, perfettamente intatte su un hard disk, crittograficamente accessibili a chiunque possieda la chiave privata — che è anch'essa sepolta sotto 110.000 tonnellate di spazzatura.

La lezione non è di non buttare mai via gli hard disk. È di capire cosa stai custodendo. Howells non si era reso conto che le chiavi su quell'hard disk erano la cosa più importante.
:::

## 2.3 Come Scegliere

La scelta del wallet dipende da cosa fai con i tuoi fondi e da quanti rischi sei in grado di gestire su entrambi i fronti — il rischio che un exchange fallisca, e il rischio di perdere le tue chiavi.

Per la maggior parte dei principianti, comincia da qui: **MetaMask per Ethereum e le chain compatibili con EVM, e un hardware wallet (Ledger Nano X o Trezor Safe 3) una volta che i tuoi asset superano qualche centinaio di dollari.** Questa combinazione copre il 90% dei casi d'uso.

Alcune domande per orientarti:

Stai semplicemente acquistando Bitcoin e conservandolo? Un hardware wallet o l'app Bitcoin nativa su un Coldcard è la scelta ottimale. Stai interagendo con la DeFi — scambiando token, fornendo liquidità, connettendoti ai protocolli? Un hot wallet come MetaMask è la tua interfaccia. Fai trading attivo ogni giorno? Tieni una piccola somma operativa in un hot wallet e sposta regolarmente i profitti in cold storage.

Non usare mai lo stesso wallet per tutto. Compartimentalizza. I tuoi asset a lungo termine non dovrebbero condividere le chiavi con il wallet che connetti a protocolli DeFi casuali.

## 2.4 Configurare MetaMask: Passo dopo Passo

MetaMask è il wallet non-custodial più diffuso per Ethereum e il suo ecosistema. Si installa come estensione per browser (Chrome, Firefox, Brave) o come app mobile. Ecco come configurarlo correttamente.

**Passo 1 — Scaricalo solo dalla fonte ufficiale.** Vai su metamask.io. Non installare MetaMask da nessun altro link, pubblicità o raccomandazione. Esistono decine di estensioni MetaMask false progettate per rubarti i fondi nel momento in cui inserisci la tua seed phrase. L'URL è metamask.io. Aggiungilo ai preferiti.

**Passo 2 — Crea un nuovo wallet.** Clicca su "Create a New Wallet." Ti verrà chiesto di creare una password. Questa password protegge soltanto il tuo dispositivo locale — non è la tua chiave principale.

**Passo 3 — Metti al sicuro la tua Secret Recovery Phrase.** MetaMask genererà una seed phrase di 12 parole. Questo è il momento più importante del tuo percorso nel mondo cripto. Non fare uno screenshot. Non salvarla nell'app note, nella posta elettronica, su iCloud o su Google Drive. Scrivila su carta con una penna. Scrivila di nuovo su un secondo foglio di carta. Conserva entrambe le copie in luoghi fisici separati. Questa frase è il tuo wallet. Chiunque la possieda ha il pieno controllo di tutto ciò che contiene.

**Passo 4 — Verifica la tua frase.** MetaMask ti chiederà di confermare la tua frase selezionando le parole nell'ordine corretto. Non è una formalità — è una verifica per assicurarsi che tu l'abbia davvero scritta. Prendila sul serio.

**Passo 5 — Sei dentro.** Il tuo wallet ha ora un indirizzo pubblico — una lunga stringa che inizia con `0x`. Questo è il tuo indirizzo di deposito. Condividilo liberamente. Le tue chiavi private non lasciano mai l'estensione.

## 2.5 Le Seed Phrase: Trattale come Contante in una Busta

Le 12 (o 24) parole generate quando crei un wallet si chiamano seed phrase, recovery phrase o mnemonic. Qualsiasi wallet, su qualsiasi blockchain, può essere ripristinato a partire da questa frase. Se la perdi, i tuoi fondi sono persi per sempre. Se la condividi, i tuoi fondi spariscono nel giro di minuti.

Non è un'ipotesi. Crypto Twitter è piena di storie di persone che hanno pubblicato le seed phrase nei canali di assistenza di Discord (truffatori che fingono di aiutare), le hanno digitate su siti falsi di "verifica" MetaMask, o le hanno salvate in file di testo compromessi in una violazione del cloud.

Alcune regole che possono sembrare eccessive finché non smettono di esserlo:

Non digitare mai la tua seed phrase su nessun sito web, mai. Il vero MetaMask non te la chiederà mai. Nessun protocollo legittimo te la chiederà mai. Se qualcosa ti sta chiedendo la tua seed phrase, quella cosa è una truffa.

Conserva la tua seed phrase in almeno due luoghi fisici separati — edifici diversi, idealmente. Un incendio, un'alluvione o un furto possono distruggere una copia.

Considera un backup metallico della seed phrase resistente al fuoco e all'acqua. Prodotti come Cryptosteel o Billoday ti permettono di incidere le tue parole sull'acciaio. La carta brucia. L'acciaio no.

:::quote
"Una chiave privata è solo un numero. La differenza tra il fatto che non valga nulla e che valga milioni è che solo tu la conosci."
:::

## 2.6 Gli Errori Più Comuni dei Principianti

**Tenere tutto su un exchange.** Ne abbiamo già parlato. Comodo ma fragile. Muoviti verso l'autocustodia.

**Usare lo stesso wallet per tutto.** Un wallet per governarli tutti significa che basta un solo exploit per perdere tutto. Usa wallet dedicati per scopi diversi.

**Conservare le seed phrase in formato digitale.** Screenshot, app per le note, bozze di email. Ognuno di questi è una falla di sicurezza. Solo archiviazione fisica e offline.

**Inviare sulla rete sbagliata.** Ethereum e reti come Polygon, Arbitrum e Base condividono i formati degli indirizzi ma operano su reti diverse. Inviare ETH a un indirizzo Arbitrum sulla rete sbagliata può bloccare i tuoi fondi. Verifica sempre la rete prima di inviare.

**Saltare la fase di verifica della seed phrase.** Le persone configurano i wallet di fretta, cliccano velocemente sulla conferma e non scrivono davvero la frase. Poi il computer si blocca. E poi imparano la lezione nel modo più duro. Verifica. Scrivila. Controllala due volte.

Il tuo wallet è la base dell'intera tua partecipazione in questo spazio. Costruiscila nel modo giusto.

:::action
**W2W Action Step**

Scarica MetaMask da metamask.io e crea il tuo primo wallet non-custodial. Scrivi la tua seed phrase su carta — non farne uno screenshot. Una volta creato il wallet, trova il tuo indirizzo pubblico (la stringa 0x...) e copialo in un posto sicuro. Hai ora il tuo primo indirizzo cripto sovrano. Nessuno può accedervi tranne te.
:::
