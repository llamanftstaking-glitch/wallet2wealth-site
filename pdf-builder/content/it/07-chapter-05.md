---
type: chapter
chapter: 5
title: Storing and Securing Your Assets
subtitle: Because "not your keys, not your coins" isn't a cliché
---

L'11 novembre 2022, l'exchange FTX di Sam Bankman-Fried ha dichiarato bancarotta. Circa 8 miliardi di dollari di fondi dei clienti erano svaniti. Le persone che credevano che le loro crypto fossero al sicuro — perché si trovavano in un account a cui potevano accedere ogni giorno — si sono svegliate scoprendo di non possedere nulla. L'exchange aveva segretamente prestato i fondi dei clienti, e quando la musica si è fermata, i soldi erano spariti.

Questa è la verità fondamentale della sicurezza nel mondo crypto: possedere criptovaluta e avere accesso a una criptovaluta sono due cose diverse. La maggior parte dei principianti le confonde. La differenza può costarti tutto.

## 5.1 Wallet vs. account in exchange

Quando acquisti Bitcoin su Coinbase, in senso stretto non possiedi davvero Bitcoin. Hai un credito su Bitcoin che Coinbase detiene per tuo conto. È l'equivalente digitale di un deposito bancario — ma senza alcuna assicurazione sui depositi.

Un wallet crypto è un'altra cosa. Non "conserva" le tue crypto come un portafoglio tiene i contanti. Le tue monete vivono sulla blockchain — sempre. Un wallet detiene la **chiave privata**: la password crittografica che dimostra che hai il diritto di spostare quelle monete. Chi detiene la chiave privata controlla i fondi. Punto.

Ecco perché la frase "not your keys, not your coins" è diventata un principio, non un meme. È un'affermazione di fatto matematico.

Esistono due categorie di wallet:

**Wallet custodial** — Affidi a una terza parte (un exchange come Coinbase, Binance o Kraken) il controllo delle tue chiavi. Comodo. Rischioso per grandi importi. Stai fidandoti del fatto che quella società rimanga solvibile, sicura e non venga violata.

**Wallet non-custodial** — Sei tu a detenere le chiavi. I wallet software come MetaMask o Trust Wallet girano sul tuo telefono o browser. I wallet hardware sono dispositivi fisici che mantengono le chiavi offline. L'autocustodia significa che sei tu la banca — con tutta la responsabilità che questo comporta.

Per piccoli importi e trading attivo, un exchange affidabile va benissimo. Per qualsiasi cifra che ti spezzerebbe il cuore perdere, l'autocustodia è la scelta giusta.

## 5.2 Wallet hardware — il cold storage fatto bene

Un wallet hardware è un piccolo dispositivo fisico — più o meno delle dimensioni di una chiavetta USB — progettato per conservare le chiavi private in un ambiente isolato che non tocca mai internet. I due brand dominanti sono **Ledger** e **Trezor**, e funzionano sullo stesso principio: la tua chiave privata viene generata sul dispositivo, rimane sul dispositivo e firma le transazioni sul dispositivo. Il tuo computer non la vede mai.

Ecco come funziona concretamente una transazione con un wallet hardware: la avvii dal tuo computer, la transazione non firmata viene inviata al dispositivo, il dispositivo la firma internamente usando la tua chiave privata, e solo la transazione firmata (non la chiave) torna alla rete. Anche se il tuo computer fosse infettato da malware, la chiave non viene mai esposta.

Quando ti serve davvero uno? La regola approssimativa è questa: se hai più di 1.000–2.000 dollari in crypto che stai tenendo a lungo termine, un wallet hardware vale i 80–150 dollari che costa. Al di sotto di quella soglia, un wallet software affidabile è accettabile. Al di sopra dei 10.000 dollari, un wallet hardware non è facoltativo — è la minima diligenza del caso.

Acquistalo solo dal sito ufficiale del produttore. Non comprare mai un wallet hardware di seconda mano o da inserzioni di terze parti su Amazon. Esistono casi documentati di dispositivi precompromessi venduti appositamente per rubare i fondi dell'acquirente.

:::detective
**La violazione dei dati Ledger**

Nel luglio 2020, Ledger — l'azienda produttrice di wallet hardware — ha subito una violazione dei dati che ha esposto le informazioni personali di 270.000 clienti: nomi, numeri di telefono e indirizzi postali fisici. I dispositivi stessi non sono stati compromessi. Le crypto erano al sicuro.

Ma quello che è seguito è stata un'ondata di sofisticate campagne di phishing, false richieste di seed di recupero e persino minacce fisiche recapitate agli indirizzi di casa delle persone. La lezione non era "non usare Ledger" — era che la sicurezza è stratificata. Il dispositivo protegge le tue chiavi; il tuo comportamento protegge tutto il resto. Se possibile, usa un indirizzo postale alternativo per la spedizione. Non registrare mai i wallet hardware con il tuo vero nome online.
:::

## 5.3 Seed phrase — la chiave maestra

Quando configuri qualsiasi wallet non-custodial — hardware o software — genera una **seed phrase**: una sequenza di 12 o 24 parole comuni in inglese. Questa frase è tutto. È una codifica in formato leggibile dall'uomo della tua chiave privata principale, e può recuperare l'intero wallet su qualsiasi dispositivo compatibile, ovunque nel mondo.

Perdila, e i tuoi fondi sono andati per sempre. Se qualcun altro la ottiene, i tuoi fondi spariscono immediatamente.

Le regole sono semplici e non negoziabili:

**Non conservarla mai in formato digitale.** Non come foto sul telefono. Non in un Google Doc. Non in un'email a te stesso. Non in un gestore di password. Non in un messaggio di testo. I file digitali vengono violati, sincronizzati sul cloud e rubati. La seed phrase vive su carta o metallo — nient'altro.

**Scrivila nel momento esatto in cui la vedi.** Durante la configurazione. Parola per parola, numero per numero. Ricontrollala prima di chiudere la schermata.

**Conservala fisicamente in più luoghi sicuri.** Una copia a casa tua. Una in una cassaforte ignifuga, in una cassetta di sicurezza in banca, o presso un familiare di fiducia. Incendi e alluvioni sono rischi reali. Una sola copia non basta.

Sono disponibili **targhe di backup in metallo** a 20–50 dollari che ti permettono di stampigliare la tua seed phrase su acciaio inossidabile. Per piccoli importi è eccessivo — per importi grandi è essenziale. La carta brucia. Il metallo no.

La frase non deve mai essere digitata in nessun sito web o app che la richieda. L'unico uso legittimo di una seed phrase è l'importazione in un software wallet ufficiale installato personalmente da te. Qualsiasi sito che chiede la tua seed phrase te la sta rubando.

## 5.4 Autenticazione a due fattori e sicurezza degli account

Per gli account in exchange e qualsiasi servizio custodial che utilizzi, l'autenticazione a due fattori (2FA) è obbligatoria — ma non tutti i 2FA sono uguali.

**Il 2FA via SMS** è la forma più debole. È vulnerabile agli attacchi di SIM-swapping, in cui un criminale chiama il tuo operatore telefonico, si spaccia per te e trasferisce il tuo numero di telefono sul proprio dispositivo. Ci vogliono minuti. In questo modo migliaia di persone hanno perso fondi significativi.

**Le app di autenticazione** (Google Authenticator, Authy, Aegis) generano codici temporanei direttamente sul tuo dispositivo. Non possono essere intercettati attraverso la rete telefonica. Questo è il minimo per qualsiasi account serio.

**Le chiavi di sicurezza hardware** (YubiKey) sono il massimo livello. Una chiave fisica che colleghi per autenticarti. Praticamente impossibile da aggirare con il phishing da remoto. Se hai importi significativi su un qualsiasi exchange, vale la pena considerarla.

Oltre al 2FA: usa una password unica e robusta per ogni account in exchange. Usa un indirizzo email dedicato per gli account crypto che non utilizzi per nessun altro scopo. Attiva il whitelist degli indirizzi di prelievo ovunque sia disponibile — questo blocca i prelievi esclusivamente agli indirizzi preapprovati, così anche un account compromesso non può svuotarsi verso un wallet sconosciuto.

## 5.5 Phishing — il vettore d'attacco più comune

Gli hacker raramente violano i sistemi crittografici. Violano le persone.

Un attacco di phishing è un inganno di ingegneria sociale progettato per farti cedere volontariamente credenziali o seed phrase. Arriva come email che sembrano in tutto e per tutto comunicazioni di Ledger, Coinbase o MetaMask. Arriva come DM su Twitter da presunti "operatori del supporto". Arriva come annunci Google per "MetaMask" che portano a falsi convincenti. Arriva come finti airdrop che richiedono di "connettere il tuo wallet e verificarlo".

L'anatomia di un sito di phishing: l'URL è sbagliato. Non MetaMask.io — è Metarnask.io, o metamask-support.net. La pagina sembra perfetta al pixel. L'unico indizio è il dominio.

Metti nei preferiti ogni sito che usi per le crypto. Accedili tramite il preferito, non tramite risultati di ricerca o link nelle email. Non cliccare mai un link in un'email non sollecitata che afferma di provenire da un exchange o da un provider di wallet. In caso di dubbio, vai direttamente al sito ufficiale digitando l'URL tu stesso.

La protezione più efficace contro il phishing è lo scetticismo. Se qualcosa ti chiede di agire urgentemente — "il tuo account verrà sospeso", "richiedi il tuo airdrop adesso", "verifica il tuo wallet" — rallenta. L'urgenza è lo strumento del manipolatore.

:::detective
**Il crollo di FTX**

Nel novembre 2022, FTX era il secondo exchange crypto più grande al mondo. Aveva endorsement di celebrità, pubblicità al Super Bowl, un accordo di naming con un'arena sportiva e un fondatore in copertina su Forbes. Processava miliardi di volume giornaliero.

Stava anche segretamente prestando i fondi dei clienti ad Alameda Research, la società di trading di SBF, che aveva fatto scommesse disastrose. Quando un concorrente pubblicò il bilancio di Alameda e i clienti iniziarono a prelevare, la liquidità evaporò in 72 ore. Oltre un milione di clienti si trovò gli account bloccati da un giorno all'altro.

La blockchain ha funzionato perfettamente per tutto il tempo. Le transazioni Bitcoin continuavano a essere regolate. Il fallimento stava nell'aver affidato le proprie chiavi a un'istituzione centralizzata. I clienti che tenevano i loro Bitcoin in wallet di autocustodia non hanno sentito nulla. Quelli che si erano fidati di FTX hanno perso tutto.
:::

## 5.6 Wallet multi-firma per patrimoni importanti

Per chi detiene importi grandi — pensa a 100.000 dollari o più, o a fondi condivisi tra più persone — i **wallet multi-firma (multisig)** aggiungono un ulteriore livello di protezione. Una configurazione multisig richiede più chiavi private per autorizzare qualsiasi transazione. Un multisig 2-di-3, ad esempio, richiede che almeno due delle tre chiavi designate firmino prima che i fondi si muovano.

Il vantaggio pratico: nessun singolo punto di fallimento. Una chiave può essere compromessa e i tuoi fondi sono comunque al sicuro. Una chiave può andare persa e puoi comunque recuperare usando le altre due. È l'equivalente di un caveau bancario che richiede a due direttori di girare contemporaneamente le proprie chiavi.

Strumenti come Gnosis Safe (ora semplicemente Safe) rendono il multisig accessibile a privati e team. Richiede più configurazione rispetto a un wallet standard, ma per patrimoni che rappresentano una ricchezza significativa, vale la pena capire questa architettura e considerarla.

:::action
**W2W Action Step — Audit della sicurezza**

Apri ogni account in cui detieni crypto. Per ognuno, rispondi a tre domande: (1) È custodial o non-custodial? (2) Il 2FA è attivato, ed è basato su un'app di autenticazione anziché su SMS? (3) Se è custodial, l'importo conservato lì è una cifra che ti devasterebbe perdere? Se la risposta alla terza domanda è sì, spostalo su un wallet hardware o almeno su un wallet software non-custodial questa settimana. Non un giorno qualunque — questa settimana. La sicurezza è l'unica cosa nel mondo crypto che non può aspettare un momento più opportuno.
:::
