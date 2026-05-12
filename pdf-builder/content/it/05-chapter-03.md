---
type: chapter
chapter: 3
title: Buying and Selling Cryptocurrency
subtitle: Navigating exchanges without getting burned
---

La prima volta che la maggior parte delle persone acquista crypto, lo fa nel modo sbagliato — non in modo catastrofico, ma costoso. Pagano più commissioni di quante se ne rendano conto, comprano nel peggior momento possibile spinti da un titolo di giornale, e lasciano le loro monete sul exchange a tempo indeterminato perché nessuno gli ha detto che non dovrebbero farlo.

Questo capitolo è il briefing che avresti dovuto ricevere prima del tuo primo trade.

## 3.1 Exchange Centralizzati: Il Punto di Accesso

Un **exchange centralizzato** (CEX) è un'azienda che gestisce un mercato in cui compratori e venditori possono scambiare criptovalute. Coinbase, Kraken, Binance, Gemini — sono intermediari. Depositi valuta fiat, loro la convertono e custodiscono le criptovalute risultanti in un conto che controllano.

Il fascino è evidente: sono pensati per i principianti, accettano carte di credito e bonifici bancari, hanno app curate e sono regolamentati. Negli Stati Uniti, exchange affidabili come Coinbase e Kraken sono registrati presso il FinCEN e rispettano le leggi finanziarie federali. Quella conformità offre una protezione per i consumatori — e ha un costo in termini di commissioni e privacy.

**Coinbase** è il più adatto ai principianti e il più costoso per gli acquirenti occasionali. L'abbonamento Coinbase One o l'utilizzo di Coinbase Advanced riduce significativamente le commissioni. **Kraken** ha strutture di commissioni migliori e una reputazione in materia di sicurezza più solida rispetto alla maggior parte. **Binance** ha la liquidità più profonda e la selezione di token più ampia, ma la sua posizione regolamentare negli Stati Uniti ha incontrato delle difficoltà. Per acquistare semplicemente Bitcoin ed Ethereum, Coinbase o Kraken andranno bene per la maggior parte dei principianti.

## 3.2 KYC/AML: Scambiare Privacy per Accesso

Prima di poter fare trading su qualsiasi exchange regolamentato, dovrai completare la verifica **KYC** (Know Your Customer) e **AML** (Anti-Money Laundering). Questo significa inviare un documento d'identità governativo, un selfie e a volte una prova di residenza. Richiede da pochi minuti a qualche giorno, a seconda della piattaforma.

Questo è il compromesso. L'exchange vuole sapere chi sei. La blockchain non se ne cura. Una volta che sposti i fondi fuori dall'exchange e in un wallet in autocustodia, le tue transazioni diventano pseudonime — visibili sul registro pubblico, ma non legate alla tua identità dall'exchange.

Alcune persone si oppongono al KYC per principio. È una posizione filosofica legittima nel mondo crypto. Per la maggior parte dei principianti, è il punto di ingresso pratico nell'ecosistema, e gli exchange regolamentati che lo richiedono sono anche quelli meno propensi a portarti via i fondi. Una volta dentro e a tuo agio, esistono opzioni senza KYC — anche se presentano le loro complessità e rischi.

## 3.3 Exchange Decentralizzati: Fare Trading Senza Intermediari

Un **exchange decentralizzato** (DEX) è uno smart contract — codice in esecuzione su una blockchain — che ti permette di scambiare token direttamente dal tuo wallet. Nessun account, nessun KYC, nessun limite di prelievo. Uniswap, Curve e dYdX sono i principali attori in questo spazio.

Su Uniswap, colleghi il tuo wallet MetaMask, selezioni i token che vuoi scambiare e i pool di liquidità del protocollo gestiscono il trade automaticamente. Non c'è un order book, non c'è una controparte. Il prezzo è determinato da un algoritmo chiamato **automated market maker** (AMM), basato sul rapporto tra le risorse nel pool.

I DEX sono potenti ma richiedono maggiore competenza. Hai bisogno di un wallet. Hai bisogno di ETH per le gas fee. Devi capire lo slippage. E devi fare attenzione ai contratti token con cui interagisci — i token truffa possono imitare quelli legittimi. Ma per accedere a token non quotati sui principali exchange — in particolare i protocolli DeFi più recenti e gli altcoin — i DEX sono spesso l'unica opzione.

CEX per comprare con valuta fiat, DEX per accedere all'intera gamma di asset on-chain. Questo è il modello pratico.

## 3.4 Leggere un Order Book

Sugli exchange centralizzati, i prezzi sono determinati dagli **order book** — elenchi di ordini di acquisto e vendita aperti a vari livelli di prezzo.

Il lato **bid** riguarda i compratori: quanto sono disposti a pagare. Il lato **ask** (o offer) riguarda i venditori: quanto vogliono ricevere. La differenza tra il bid più alto e l'ask più basso è lo **spread**. Spread ridotti indicano un mercato liquido. Spread ampi indicano mercati sottili — procedi con cautela.

Quando piazzi un trade, interagisci con questo book in uno di due modi:

**Market order:** Compri o vendi immediatamente al miglior prezzo disponibile. Veloce, semplice, ma ottieni quello che il mercato ti offre — che nei mercati sottili o in rapido movimento può essere peggio del previsto.

**Limit order:** Specifichi il prezzo esatto che sei disposto a pagare (o ricevere). L'ordine rimane nel book finché non viene eseguito — o finché non lo cancelli. Maggiore controllo, ma nessuna garanzia di esecuzione. Se il prezzo non raggiunge mai il tuo limite, non fai il trade.

Per i principianti che acquistano Bitcoin o Ethereum su exchange principali con elevata liquidità, i market order vanno bene. Per i token più piccoli con order book sottili, usa sempre i limit order. Otterrai spesso prezzi significativamente migliori.

:::detective
**Il Flash Crash Che Fece 2 Milioni di Dollari in Pochi Secondi**

Il 22 giugno 2017, il prezzo di Ethereum su Coinbase crollò da $319 a $0,10 in millisecondi. Fu scatenato da un grande ordine di vendita che si propagò a cascata attraverso l'order book, innescando migliaia di ordini stop-loss contemporaneamente. La reazione a catena attraversò ogni bid finché il book non fu quasi vuoto.

I trader che avevano impostato ordini limit di acquisto vicino allo zero — per scherzo, o come una scommessa calcolata — li videro eseguire all'istante. Poi il prezzo si riprese in pochi secondi. Alcune persone guadagnarono cifre che cambiarono loro la vita da un trade che non si aspettavano mai di eseguire.

La lezione non è impostare limit order folli. È capire che gli order book sono cose vive. Nei mercati sottili, un singolo ordine di grandi dimensioni può muovere i prezzi in modi che sembrano impossibili finché non accadono.
:::

## 3.5 Commissioni: Il Silenzioso Killer del Portafoglio

Le commissioni non sembrano significative su un singolo trade. Si accumulano diventando un serio freno ai rendimenti nel tempo.

Ogni exchange addebita commissioni per eseguire i trade. La struttura varia, ma i principali tipi che incontrerai sono:

**Commissioni di trading** — una percentuale di ogni transazione. La maggior parte dei principali exchange addebita tra lo 0,1% e lo 0,5% per trade. L'interfaccia standard di Coinbase può essere più alta. Utilizzare le interfacce di trading "avanzate" sulle stesse piattaforme riduce quasi sempre le commissioni in modo significativo.

**Commissioni maker vs. taker** — i "taker" piazzano market order che vengono eseguiti immediatamente (prelevano liquidità). I "maker" piazzano limit order che restano nel book (aggiungono liquidità). La maggior parte degli exchange addebita meno ai maker — a volte zero — perché contribuiscono alla profondità dell'order book della piattaforma. Impara la struttura del tuo exchange e opera di conseguenza.

**Commissioni di prelievo** — commissioni fisse per spostare le crypto dall'exchange al tuo wallet. Variano molto. Spostare Bitcoin di solito costa una piccola cifra fissa. Alcuni exchange applicano commissioni di prelievo elevate. Confronta prima di spostare grosse somme.

**Gas fee (DEX)** — su Ethereum, ogni transazione richiede il pagamento del "gas" — la commissione che remunera i validatori che processano la tua transazione. I prezzi del gas oscillano in base alla domanda della rete. Fare uno swap su Uniswap nelle ore di punta può costare tra $30 e $100 o più. Sulle reti Layer 2 di Ethereum come Arbitrum o Base, lo stesso swap costa pochi centesimi. Conosci la tua rete prima di fare trading.

Un'abitudine utile: prima di eseguire qualsiasi trade, calcola il costo complessivo di andata e ritorno — commissioni per comprare, commissioni per vendere, commissioni per prelevare. Quello è il tuo punto di pareggio reale. Devi superarlo prima di essere in profitto.

## 3.6 Slippage: Perché Non Ottieni Sempre il Prezzo Che Vedi

Quando scambi token su un DEX — o esegui un trade di grandi dimensioni su una coppia CEX con pochi scambi — incontrerai lo **slippage**: la differenza tra il prezzo che ti aspettavi e quello che hai effettivamente ottenuto.

Ecco perché accade. Su Uniswap, i prezzi sono determinati dal rapporto tra i token in un pool di liquidità. Quando compri, stai prelevando un token e aggiungendone un altro, il che modifica il rapporto — e quindi il prezzo. Più il tuo trade è grande rispetto alle dimensioni del pool, più sposti il prezzo a tuo sfavore.

La maggior parte delle interfacce DEX ti permette di impostare una tolleranza di slippage — la deviazione massima dal prezzo quotato che sei disposto ad accettare. Troppo bassa (0,1%) e la tua transazione fallisce perché i prezzi si sono mossi prima della conferma. Troppo alta (10% o più) e stai accettando un affare sfavorevole, possibilmente vittima di un sandwich attack — dove i bot rilevano la tua transazione in sospeso e operano intorno ad essa per estrarne valore.

Per le coppie di grandi capitali con elevata liquidità (ETH/USDC), una tolleranza di slippage dello 0,5% è di solito adeguata. Per i token piccoli o nuovi, aspettati uno slippage più alto e consideralo nel tuo costo base.

:::quote
"Un exchange è uno strumento, non un conto di risparmio. Entra, fai quello che devi fare e porta i tuoi asset fuori dalla piattaforma."
:::

## 3.7 Sposta le Tue Crypto Fuori dall'Exchange

Non si può dirlo abbastanza: gli exchange servono per comprare e vendere, non per conservare.

Il capitolo 2 ha trattato in dettaglio il collasso di FTX. Non è un caso isolato. Mt. Gox, Celsius, BlockFi, Voyager — l'elenco di exchange e custodi che sono falliti, hanno bloccato i prelievi o sono semplicemente spariti con i fondi dei clienti è lungo. Il modello è sempre lo stesso: i clienti hanno affidato le loro chiavi a una controparte, la controparte è venuta meno, i clienti hanno perso tutto.

Una volta acquistate le crypto e se non le stai attivamente scambiando, spostale nel tuo wallet. Richiede una sola transazione e qualche minuto. È il singolo atto di autocustodia più importante che tu possa compiere.

L'unica eccezione: importi così piccoli che la commissione di prelievo rappresenterebbe una percentuale sproporzionata, oppure fondi che stai gestendo attivamente in trade quotidiani. Tutto il resto dovrebbe essere fuori dall'exchange entro 24 ore dall'acquisto.

:::action
**W2W Action Step**

Crea un account verificato su Coinbase o Kraken. Completa la verifica KYC — tieni pronto il tuo documento d'identità. Una volta verificato, deposita tra $20 e $50 e acquista una piccola quantità di Bitcoin o Ethereum usando un limit order, non un market order. Annota le commissioni esatte che hai pagato e calcola quale percentuale del tuo acquisto rappresentano. Poi trasferisci le crypto acquistate al wallet MetaMask che hai configurato nel capitolo 2. Hai appena completato un ciclo completo dall'exchange al wallet.
:::
