import type { SupportedLang } from './supabase'

export type Lang = SupportedLang
export const SUPPORTED: Lang[] = ['en', 'es', 'it', 'fr', 'pt', 'ru']
export const DEFAULT_LANG: Lang = 'en'

export const LANG_LABELS: Record<Lang, { native: string; en: string }> = {
  en: { native: 'English', en: 'English' },
  es: { native: 'Español', en: 'Spanish' },
  it: { native: 'Italiano', en: 'Italian' },
  fr: { native: 'Français', en: 'French' },
  pt: { native: 'Português', en: 'Portuguese' },
  ru: { native: 'Русский', en: 'Russian' },
}

export function pickLang(raw: string | undefined): Lang {
  if (!raw) return DEFAULT_LANG
  const v = raw.toLowerCase().slice(0, 2)
  return (SUPPORTED as string[]).includes(v) ? (v as Lang) : DEFAULT_LANG
}

export type Dict = {
  nav: { buy: string }
  hero: {
    badge: string
    h1Line1: string
    h1Line2: string
    sub: string
    priceCaption: string
    cta: string
    delivery: string
  }
  socialBar: { downloads: string; rated: string }
  chaptersHeader: { title: string; sub: string }
  chapters: { title: string; body: string }[]
  audienceHeader: string
  audience: { profile: string; body: string }[]
  reviewsHeader: string
  reviews: { name: string; role: string; body: string }[]
  faqHeader: string
  faq: { q: string; a: string }[]
  finalCta: { headPrefix: string; headPrice: string; body: string; cta: string; delivery: string }
  footer: { copy: string; privacy: string; terms: string }
  buy: {
    back: string
    title: string
    sub: string
    langLabel: string
    emailLabel: string
    emailPlaceholder: string
    cta: string
    redirecting: string
    secure: string
  }
  thanks: {
    title: string
    bodyEmailed: string
    download: string
    fallback: string
    note: string
  }
}

const en: Dict = {
  nav: { buy: 'Buy Now' },
  hero: {
    badge: '⚠ Read before you buy your first coin',
    h1Line1: "Don't lose your first $100",
    h1Line2: 'to a scam you could have spotted.',
    sub: 'A 40-page crypto-beginner field guide. Wallets, scams, and your first real buy — explained in plain English.',
    priceCaption: 'One coffee. One PDF. Zero noise.',
    cta: 'Protect Yourself — $2.99',
    delivery: 'Instant PDF · Emailed too · 14-day refund',
  },
  socialBar: { downloads: '1,200+ downloads', rated: 'Rated 5 stars by beginners' },
  chaptersHeader: {
    title: 'Everything You Need to Start',
    sub: 'Focused chapters, zero jargon. Each one builds on the last.',
  },
  chapters: [
    {
      title: 'What Is a Crypto Wallet?',
      body: 'Hot wallets vs cold wallets — explained without the tech overwhelm.',
    },
    {
      title: 'Bitcoin, Ethereum & Beyond',
      body: "The coins that actually matter for beginners (and why most don't).",
    },
    {
      title: 'Staying Safe from Scams',
      body: 'The 5 red flags every beginner must know before sending a single dollar.',
    },
    {
      title: 'How to Buy Your First Coin',
      body: 'Step-by-step exchange walkthrough — Coinbase, Kraken, and Binance covered.',
    },
    {
      title: 'Understanding Market Cycles',
      body: 'Bull markets, bear markets — what history tells us and how to stay calm.',
    },
    {
      title: 'Your First Action Plan',
      body: 'A simple 7-day plan to go from zero to your first crypto holding.',
    },
  ],
  audienceHeader: 'This Guide Is For You If...',
  audience: [
    {
      profile: '“I keep hearing about crypto but have no idea where to start.”',
      body: "You've watched the headlines for years. This guide is your on-ramp.",
    },
    {
      profile: '“I tried learning but got lost in technical jargon.”',
      body: 'Plain English only. Zero assumed knowledge.',
    },
    {
      profile: '“I don’t want to risk much — is $2.99 really worth it?”',
      body: 'At this price, the real risk is staying on the sideline.',
    },
  ],
  reviewsHeader: 'Beginners Are Already Winning',
  reviews: [
    {
      name: 'Mia R.',
      role: 'First-time buyer',
      body: 'I bought my first Bitcoin the same day. The wallet section alone was worth way more than $2.99.',
    },
    {
      name: 'Daniel K.',
      role: 'Self-taught',
      body: 'Finally a guide that does not assume I already know what gas fees are. Highlighter dry by chapter 3.',
    },
    {
      name: 'Sofia A.',
      role: 'Skeptic',
      body: 'I almost did not buy it because of the price. Turns out cheap does not mean low value.',
    },
  ],
  faqHeader: 'Got Questions?',
  faq: [
    {
      q: 'What exactly do I get for $2.99?',
      a: 'A beginner-friendly PDF (instant download + emailed copy) covering wallets, coins, scams, your first purchase, market cycles, and a 7-day action plan.',
    },
    {
      q: 'Why so cheap?',
      a: 'The goal is to help you start, not gatekeep. If $2.99 helps you avoid one scam, the guide already paid for itself many times over.',
    },
    {
      q: 'How do I receive it?',
      a: 'Two ways. You get an instant download link on the thank-you page, plus a copy emailed to you immediately after checkout.',
    },
    {
      q: 'Is this financial advice?',
      a: 'No. This is education — the basics nobody bothered to explain to you. Always do your own research before investing.',
    },
    {
      q: 'Will this work for someone who is completely non-technical?',
      a: 'Yes. That is exactly who it is written for. If you can use email, you can follow this guide.',
    },
  ],
  finalCta: {
    headPrefix: 'Your Crypto Journey Starts for ',
    headPrice: '$2.99',
    body: 'Stop waiting. The best time to start was yesterday. The next best time is right now.',
    cta: 'Get My Copy Now',
    delivery: 'Instant PDF delivery after purchase',
  },
  footer: {
    copy: '© 2026 Wallet to Wealth. Instant PDF delivery after purchase.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  buy: {
    back: 'Wallet to Wealth',
    title: 'Get the PDF',
    sub: 'Pick your language, enter your email, and check out for',
    langLabel: 'Language',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    cta: 'Pay $2.99 with Stripe',
    redirecting: 'Redirecting…',
    secure: 'Secure checkout · Cards, Apple Pay, Google Pay',
  },
  thanks: {
    title: 'You’re in.',
    bodyEmailed: 'Payment received. A copy has been emailed to',
    download: 'Download your PDF',
    fallback:
      'Your PDF will arrive in your inbox within a minute. Check your spam folder if you don’t see it.',
    note: 'The download link is good for 14 days. Save the PDF once you have it.',
  },
}

const es: Dict = {
  nav: { buy: 'Comprar' },
  hero: {
    badge: '⚠ Léelo antes de comprar tu primera moneda',
    h1Line1: 'No pierdas tus primeros $100',
    h1Line2: 'por una estafa que podías ver venir.',
    sub: 'Una guía cripto de 40 páginas para principiantes. Wallets, estafas y tu primera compra real — en español claro.',
    priceCaption: 'Un café. Un PDF. Cero ruido.',
    cta: 'Protégete — $2.99',
    delivery: 'PDF instantáneo · También por email · Reembolso 14 días',
  },
  socialBar: { downloads: '1,200+ descargas', rated: 'Calificado 5 estrellas por principiantes' },
  chaptersHeader: {
    title: 'Todo lo que Necesitas para Empezar',
    sub: 'Capítulos enfocados, cero jerga. Cada uno construye sobre el anterior.',
  },
  chapters: [
    {
      title: '¿Qué es una Wallet Cripto?',
      body: 'Hot wallets vs cold wallets — explicado sin tecnicismos.',
    },
    {
      title: 'Bitcoin, Ethereum y Más',
      body: 'Las monedas que realmente importan al principio (y por qué la mayoría no).',
    },
    {
      title: 'Cómo Evitar Estafas',
      body: 'Las 5 señales de alerta que todo principiante debe conocer antes de enviar un solo dólar.',
    },
    {
      title: 'Cómo Comprar tu Primera Moneda',
      body: 'Paso a paso en exchanges — Coinbase, Kraken y Binance incluidos.',
    },
    {
      title: 'Entender los Ciclos del Mercado',
      body: 'Mercados alcistas y bajistas — qué nos enseña la historia y cómo mantener la calma.',
    },
    {
      title: 'Tu Primer Plan de Acción',
      body: 'Un plan simple de 7 días para pasar de cero a tu primera tenencia cripto.',
    },
  ],
  audienceHeader: 'Esta Guía Es Para Ti Si...',
  audience: [
    {
      profile: '“Escucho hablar de cripto pero no sé por dónde empezar.”',
      body: 'Llevas años viendo los titulares. Esta guía es tu rampa de entrada.',
    },
    {
      profile: '“Intenté aprender pero me perdí entre tecnicismos.”',
      body: 'Español claro. Cero conocimientos previos.',
    },
    {
      profile: '“No quiero arriesgar mucho — ¿vale realmente $2.99?”',
      body: 'A este precio, el verdadero riesgo es quedarte fuera.',
    },
  ],
  reviewsHeader: 'Los Principiantes Ya Están Ganando',
  reviews: [
    {
      name: 'Mía R.',
      role: 'Primera compra',
      body: 'Compré mi primer Bitcoin el mismo día. Solo la sección de wallets ya vale mucho más de $2.99.',
    },
    {
      name: 'Daniel K.',
      role: 'Autodidacta',
      body: 'Por fin una guía que no asume que ya sé qué son las gas fees. Subrayé casi todo hasta el capítulo 3.',
    },
    {
      name: 'Sofía A.',
      role: 'Escéptica',
      body: 'Casi no la compro por el precio. Resulta que barato no significa malo.',
    },
  ],
  faqHeader: '¿Tienes Preguntas?',
  faq: [
    {
      q: '¿Qué recibo exactamente por $2.99?',
      a: 'Un PDF claro para principiantes (descarga instantánea + copia por email) sobre wallets, monedas, estafas, tu primera compra, ciclos de mercado y un plan de 7 días.',
    },
    {
      q: '¿Por qué tan barato?',
      a: 'La idea es ayudarte a empezar, no ponerte un muro. Si $2.99 te evita una estafa, ya se pagó solo varias veces.',
    },
    {
      q: '¿Cómo lo recibo?',
      a: 'De dos formas. Tienes un enlace de descarga instantánea en la página de gracias y una copia enviada a tu correo justo después del pago.',
    },
    {
      q: '¿Esto es asesoría financiera?',
      a: 'No. Esto es educación — lo básico que nadie se molestó en explicarte. Siempre haz tu propia investigación antes de invertir.',
    },
    {
      q: '¿Sirve para alguien que no es nada técnico?',
      a: 'Sí. Está escrito exactamente para esa persona. Si sabes usar el correo, puedes seguir esta guía.',
    },
  ],
  finalCta: {
    headPrefix: 'Tu Camino Cripto Empieza por ',
    headPrice: '$2.99',
    body: 'Deja de esperar. El mejor momento para empezar fue ayer. El siguiente mejor momento es ahora.',
    cta: 'Quiero mi Copia',
    delivery: 'Entrega PDF al instante tras la compra',
  },
  footer: {
    copy: '© 2026 Wallet to Wealth. Entrega PDF inmediata.',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
  buy: {
    back: 'Wallet to Wealth',
    title: 'Consigue el PDF',
    sub: 'Elige tu idioma, ingresa tu email y paga',
    langLabel: 'Idioma',
    emailLabel: 'Email',
    emailPlaceholder: 'tu@correo.com',
    cta: 'Pagar $2.99 con Stripe',
    redirecting: 'Redirigiendo…',
    secure: 'Pago seguro · Tarjetas, Apple Pay, Google Pay',
  },
  thanks: {
    title: '¡Listo!',
    bodyEmailed: 'Pago recibido. Te enviamos una copia a',
    download: 'Descargar PDF',
    fallback:
      'El PDF llegará a tu correo en menos de un minuto. Revisa la carpeta de spam si no lo ves.',
    note: 'El enlace de descarga vale por 14 días. Guarda el PDF cuando lo tengas.',
  },
}

const it: Dict = {
  nav: { buy: 'Acquista' },
  hero: {
    badge: '⚠ Leggi prima di comprare la tua prima moneta',
    h1Line1: 'Non perdere i tuoi primi $100',
    h1Line2: 'per una truffa che potevi evitare.',
    sub: 'Una guida crypto di 40 pagine per principianti. Wallet, truffe e il tuo primo acquisto vero — in italiano semplice.',
    priceCaption: 'Un caffè. Un PDF. Zero rumore.',
    cta: 'Proteggiti — $2.99',
    delivery: 'PDF immediato · Anche via email · Rimborso 14 giorni',
  },
  socialBar: { downloads: '1.200+ download', rated: 'Valutata 5 stelle dai principianti' },
  chaptersHeader: {
    title: 'Tutto Quello che Serve per Iniziare',
    sub: 'Capitoli mirati, zero gergo. Ognuno costruisce sul precedente.',
  },
  chapters: [
    {
      title: 'Cos’è un Wallet Crypto?',
      body: 'Hot wallet contro cold wallet — spiegato senza tecnicismi.',
    },
    {
      title: 'Bitcoin, Ethereum e Oltre',
      body: 'Le monete che contano davvero per chi inizia (e perché la maggior parte no).',
    },
    {
      title: 'Difenderti dalle Truffe',
      body: 'I 5 segnali d’allarme che ogni principiante deve conoscere prima di inviare un solo dollaro.',
    },
    {
      title: 'Come Comprare la Tua Prima Moneta',
      body: 'Procedura passo passo sugli exchange — Coinbase, Kraken e Binance inclusi.',
    },
    {
      title: 'Capire i Cicli di Mercato',
      body: 'Mercati toro e orso — cosa ci dice la storia e come restare calmi.',
    },
    {
      title: 'Il Tuo Primo Piano d’Azione',
      body: 'Un piano semplice di 7 giorni per arrivare alla tua prima posizione crypto.',
    },
  ],
  audienceHeader: 'Questa Guida È per Te Se...',
  audience: [
    {
      profile: '«Sento parlare di crypto ovunque ma non so da dove iniziare.»',
      body: 'Hai visto i titoli per anni. Questa guida è la tua rampa d’ingresso.',
    },
    {
      profile: '«Ho provato a studiarmela ma mi sono perso nei termini tecnici.»',
      body: 'Italiano semplice. Zero conoscenze pregresse richieste.',
    },
    {
      profile: '«Non voglio rischiare molto — vale davvero $2.99?»',
      body: 'A questo prezzo, il vero rischio è restare a guardare.',
    },
  ],
  reviewsHeader: 'I Principianti Stanno Già Vincendo',
  reviews: [
    {
      name: 'Mia R.',
      role: 'Primo acquisto',
      body: 'Ho comprato il mio primo Bitcoin lo stesso giorno. Solo la sezione wallet vale molto più di $2.99.',
    },
    {
      name: 'Daniel K.',
      role: 'Autodidatta',
      body: 'Finalmente una guida che non dà per scontato che sappia cosa sono le gas fee. Sottolineata al 90% entro il terzo capitolo.',
    },
    {
      name: 'Sofia A.',
      role: 'Scettica',
      body: 'Stavo per non comprarla per il prezzo. A volte economico non vuol dire scarso.',
    },
  ],
  faqHeader: 'Domande?',
  faq: [
    {
      q: 'Cosa ricevo esattamente per $2.99?',
      a: 'Un PDF chiaro per principianti (download immediato + copia via email) su wallet, monete, truffe, primo acquisto, cicli di mercato e un piano di 7 giorni.',
    },
    {
      q: 'Perché così economico?',
      a: 'L’obiettivo è farti iniziare, non metterti un muro davanti. Se $2.99 ti evitano una truffa, la guida si è già ripagata molte volte.',
    },
    {
      q: 'Come lo ricevo?',
      a: 'In due modi. Hai un link di download immediato nella pagina di ringraziamento e una copia inviata via email subito dopo il pagamento.',
    },
    {
      q: 'È una consulenza finanziaria?',
      a: 'No. È educazione — le basi che nessuno si è preso la briga di spiegarti. Fai sempre le tue ricerche prima di investire.',
    },
    {
      q: 'Funziona per chi non è tecnico?',
      a: 'Sì. È scritto esattamente per quella persona. Se sai usare l’email, sai usare questa guida.',
    },
  ],
  finalCta: {
    headPrefix: 'Il Tuo Viaggio Crypto Inizia da ',
    headPrice: '$2.99',
    body: 'Smetti di aspettare. Il momento migliore per iniziare era ieri. Il secondo migliore è adesso.',
    cta: 'Voglio la Mia Copia',
    delivery: 'Consegna PDF immediata dopo il pagamento',
  },
  footer: {
    copy: '© 2026 Wallet to Wealth. Consegna PDF immediata.',
    privacy: 'Privacy',
    terms: 'Termini',
  },
  buy: {
    back: 'Wallet to Wealth',
    title: 'Ottieni il PDF',
    sub: 'Scegli la lingua, inserisci l’email e paga',
    langLabel: 'Lingua',
    emailLabel: 'Email',
    emailPlaceholder: 'tu@email.com',
    cta: 'Paga $2.99 con Stripe',
    redirecting: 'Reindirizzamento…',
    secure: 'Pagamento sicuro · Carte, Apple Pay, Google Pay',
  },
  thanks: {
    title: 'Ci sei.',
    bodyEmailed: 'Pagamento ricevuto. Copia inviata a',
    download: 'Scarica il PDF',
    fallback:
      'Il PDF arriverà nella tua casella entro un minuto. Controlla lo spam se non lo vedi.',
    note: 'Il link di download è valido per 14 giorni. Salva il file appena lo hai.',
  },
}

const fr: Dict = {
  nav: { buy: 'Acheter' },
  hero: {
    badge: '⚠ À lire avant d’acheter votre première crypto',
    h1Line1: 'Ne perdez pas vos 100 premiers dollars',
    h1Line2: 'à cause d’une arnaque évitable.',
    sub: 'Un guide crypto de 40 pages pour débutants. Wallets, arnaques et votre premier vrai achat — en français clair.',
    priceCaption: 'Un café. Un PDF. Zéro bruit.',
    cta: 'Protégez-vous — 2,99 $',
    delivery: 'PDF instantané · Aussi par email · Remboursement 14 jours',
  },
  socialBar: { downloads: '1 200+ téléchargements', rated: 'Noté 5 étoiles par des débutants' },
  chaptersHeader: {
    title: 'Tout ce qu’il Vous Faut pour Démarrer',
    sub: 'Des chapitres ciblés, zéro jargon. Chacun s’appuie sur le précédent.',
  },
  chapters: [
    {
      title: 'C’est Quoi un Wallet Crypto ?',
      body: 'Hot wallets contre cold wallets — expliqué sans bla-bla technique.',
    },
    {
      title: 'Bitcoin, Ethereum et au-delà',
      body: 'Les coins qui comptent vraiment pour un débutant (et pourquoi la plupart non).',
    },
    {
      title: 'Éviter les Arnaques',
      body: 'Les 5 signaux d’alerte à connaître avant d’envoyer le moindre dollar.',
    },
    {
      title: 'Acheter Votre Première Crypto',
      body: 'Pas-à-pas sur les exchanges — Coinbase, Kraken et Binance couverts.',
    },
    {
      title: 'Comprendre les Cycles du Marché',
      body: 'Marchés haussiers, marchés baissiers — ce que l’histoire dit et comment garder la tête froide.',
    },
    {
      title: 'Votre Premier Plan d’Action',
      body: 'Un plan simple de 7 jours pour passer de zéro à votre première position crypto.',
    },
  ],
  audienceHeader: 'Ce Guide est Fait pour Vous Si...',
  audience: [
    {
      profile: '« J’entends parler de crypto partout mais je ne sais pas par où commencer. »',
      body: 'Vous regardez les gros titres depuis des années. Ce guide est votre rampe d’accès.',
    },
    {
      profile: '« J’ai essayé mais je me suis perdu dans le jargon. »',
      body: 'Français clair. Zéro connaissance préalable requise.',
    },
    {
      profile: '« Je ne veux pas risquer beaucoup — 2,99 $ ça vaut vraiment le coup ? »',
      body: 'À ce prix, le vrai risque est de rester sur le banc.',
    },
  ],
  reviewsHeader: 'Les Débutants Avancent Déjà',
  reviews: [
    {
      name: 'Mia R.',
      role: 'Premier achat',
      body: 'J’ai acheté mon premier Bitcoin le jour même. La partie wallet vaut largement plus que 2,99 $.',
    },
    {
      name: 'Daniel K.',
      role: 'Autodidacte',
      body: 'Enfin un guide qui ne suppose pas que je sache déjà ce qu’est le gas. Surligneur quasiment à sec au chapitre 3.',
    },
    {
      name: 'Sofia A.',
      role: 'Sceptique',
      body: 'J’ai failli ne pas l’acheter à cause du prix. Pas cher ne veut pas dire mauvais.',
    },
  ],
  faqHeader: 'Des Questions ?',
  faq: [
    {
      q: 'Qu’est-ce que j’obtiens vraiment pour 2,99 $ ?',
      a: 'Un PDF accessible (téléchargement instantané + copie par email) couvrant wallets, coins, arnaques, premier achat, cycles de marché et un plan d’action de 7 jours.',
    },
    {
      q: 'Pourquoi si peu cher ?',
      a: 'Le but est de vous aider à démarrer, pas de mettre une barrière. Si 2,99 $ vous évite une arnaque, le guide s’est déjà remboursé plusieurs fois.',
    },
    {
      q: 'Comment je le reçois ?',
      a: 'De deux façons. Un lien de téléchargement instantané sur la page de remerciement, plus une copie envoyée par email juste après le paiement.',
    },
    {
      q: 'Est-ce un conseil financier ?',
      a: 'Non. C’est de l’éducation — les bases que personne n’a pris le temps de vous expliquer. Faites toujours vos propres recherches avant d’investir.',
    },
    {
      q: 'Ça marche pour quelqu’un de pas du tout technique ?',
      a: 'Oui. C’est exactement la cible. Si vous savez utiliser l’email, vous pouvez suivre ce guide.',
    },
  ],
  finalCta: {
    headPrefix: 'Votre Aventure Crypto Commence pour ',
    headPrice: '2,99 $',
    body: 'Ne tergiversez plus. Le meilleur moment pour commencer, c’était hier. Le deuxième meilleur, c’est maintenant.',
    cta: 'Je Veux Ma Copie',
    delivery: 'Livraison PDF immédiate après paiement',
  },
  footer: {
    copy: '© 2026 Wallet to Wealth. Livraison PDF immédiate.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
  },
  buy: {
    back: 'Wallet to Wealth',
    title: 'Obtenir le PDF',
    sub: 'Choisissez la langue, entrez votre email et payez',
    langLabel: 'Langue',
    emailLabel: 'Email',
    emailPlaceholder: 'vous@exemple.com',
    cta: 'Payer 2,99 $ avec Stripe',
    redirecting: 'Redirection…',
    secure: 'Paiement sécurisé · Cartes, Apple Pay, Google Pay',
  },
  thanks: {
    title: 'C’est fait.',
    bodyEmailed: 'Paiement reçu. Une copie a été envoyée à',
    download: 'Télécharger le PDF',
    fallback:
      'Le PDF arrivera dans votre boîte en moins d’une minute. Vérifiez les spams si vous ne le voyez pas.',
    note: 'Le lien de téléchargement est valable 14 jours. Enregistrez le fichier dès réception.',
  },
}

const pt: Dict = {
  nav: { buy: 'Comprar' },
  hero: {
    badge: '⚠ Leia antes de comprar sua primeira moeda',
    h1Line1: 'Não perca seus primeiros $100',
    h1Line2: 'para um golpe que dava para evitar.',
    sub: 'Um guia cripto de 40 páginas para iniciantes. Wallets, golpes e sua primeira compra real — em português claro.',
    priceCaption: 'Um café. Um PDF. Zero ruído.',
    cta: 'Proteja-se — $2,99',
    delivery: 'PDF imediato · Também por email · Reembolso em 14 dias',
  },
  socialBar: { downloads: '1.200+ downloads', rated: 'Avaliado 5 estrelas por iniciantes' },
  chaptersHeader: {
    title: 'Tudo o que Você Precisa para Começar',
    sub: 'Capítulos diretos, zero jargão. Cada um se apoia no anterior.',
  },
  chapters: [
    {
      title: 'O que é uma Wallet Cripto?',
      body: 'Hot wallets vs cold wallets — explicado sem complicação técnica.',
    },
    {
      title: 'Bitcoin, Ethereum e Além',
      body: 'As moedas que realmente importam para iniciantes (e por que a maioria não).',
    },
    {
      title: 'Como Fugir de Golpes',
      body: 'Os 5 sinais de alerta que todo iniciante precisa saber antes de mandar um dólar.',
    },
    {
      title: 'Como Comprar sua Primeira Moeda',
      body: 'Passo a passo nas exchanges — Coinbase, Kraken e Binance cobertas.',
    },
    {
      title: 'Entender os Ciclos de Mercado',
      body: 'Mercados de alta e de baixa — o que a história mostra e como manter a calma.',
    },
    {
      title: 'Seu Primeiro Plano de Ação',
      body: 'Um plano simples de 7 dias para sair do zero e ter sua primeira posição em cripto.',
    },
  ],
  audienceHeader: 'Este Guia é Para Você Se...',
  audience: [
    {
      profile: '“Ouço falar de cripto o tempo todo mas não sei por onde começar.”',
      body: 'Você acompanha as manchetes faz anos. Este guia é seu ponto de entrada.',
    },
    {
      profile: '“Tentei aprender mas me perdi nos termos técnicos.”',
      body: 'Português claro. Zero conhecimento prévio necessário.',
    },
    {
      profile: '“Não quero arriscar muito — $2,99 vale mesmo?”',
      body: 'Por esse preço, o verdadeiro risco é ficar de fora.',
    },
  ],
  reviewsHeader: 'Iniciantes Já Estão no Jogo',
  reviews: [
    {
      name: 'Mia R.',
      role: 'Primeira compra',
      body: 'Comprei meu primeiro Bitcoin no mesmo dia. Só a parte de wallet já vale muito mais que $2,99.',
    },
    {
      name: 'Daniel K.',
      role: 'Autodidata',
      body: 'Finalmente um guia que não assume que eu já sei o que é gas fee. Marquei quase tudo até o capítulo 3.',
    },
    {
      name: 'Sofia A.',
      role: 'Cética',
      body: 'Quase não comprei por causa do preço. Barato não significa ruim.',
    },
  ],
  faqHeader: 'Tem Dúvidas?',
  faq: [
    {
      q: 'O que recebo exatamente por $2,99?',
      a: 'Um PDF claro para iniciantes (download imediato + cópia por email) sobre wallets, moedas, golpes, primeira compra, ciclos de mercado e um plano de 7 dias.',
    },
    {
      q: 'Por que tão barato?',
      a: 'A ideia é te ajudar a começar, não te colocar barreira. Se $2,99 te livra de um golpe, o guia já se pagou várias vezes.',
    },
    {
      q: 'Como recebo?',
      a: 'De duas formas. Link de download imediato na página de obrigado, e uma cópia enviada por email logo após o pagamento.',
    },
    {
      q: 'Isso é recomendação financeira?',
      a: 'Não. É educação — o básico que ninguém te explicou. Sempre faça sua própria pesquisa antes de investir.',
    },
    {
      q: 'Serve para quem não é técnico?',
      a: 'Sim. Foi escrito exatamente para essa pessoa. Se você sabe usar email, sabe usar este guia.',
    },
  ],
  finalCta: {
    headPrefix: 'Sua Jornada Cripto Começa por ',
    headPrice: '$2,99',
    body: 'Pare de esperar. O melhor momento para começar foi ontem. O próximo melhor é agora.',
    cta: 'Quero a Minha Cópia',
    delivery: 'Entrega PDF imediata após a compra',
  },
  footer: {
    copy: '© 2026 Wallet to Wealth. Entrega PDF imediata.',
    privacy: 'Privacidade',
    terms: 'Termos',
  },
  buy: {
    back: 'Wallet to Wealth',
    title: 'Pegue o PDF',
    sub: 'Escolha o idioma, informe seu email e pague',
    langLabel: 'Idioma',
    emailLabel: 'Email',
    emailPlaceholder: 'voce@exemplo.com',
    cta: 'Pagar $2,99 no Stripe',
    redirecting: 'Redirecionando…',
    secure: 'Pagamento seguro · Cartões, Apple Pay, Google Pay',
  },
  thanks: {
    title: 'Pronto!',
    bodyEmailed: 'Pagamento recebido. Mandamos uma cópia para',
    download: 'Baixar o PDF',
    fallback: 'O PDF chega no seu email em menos de um minuto. Confira o spam se não aparecer.',
    note: 'O link de download vale por 14 dias. Salve o arquivo depois de baixar.',
  },
}

const ru: Dict = {
  nav: { buy: 'Купить' },
  hero: {
    badge: '⚠ Прочтите перед покупкой первой монеты',
    h1Line1: 'Не теряйте первые $100',
    h1Line2: 'на скаме, который можно было увидеть.',
    sub: 'Крипто-гид на 40 страниц для новичков. Кошельки, скамы и ваша первая реальная покупка — простым языком.',
    priceCaption: 'Кофе. PDF. Без шума.',
    cta: 'Защитите себя — $2.99',
    delivery: 'Мгновенный PDF · Также по email · Возврат 14 дней',
  },
  socialBar: { downloads: '1 200+ загрузок', rated: 'Оценка 5 звёзд от новичков' },
  chaptersHeader: {
    title: 'Всё, что нужно для старта',
    sub: 'Фокусные главы, ноль жаргона. Каждая опирается на предыдущую.',
  },
  chapters: [
    {
      title: 'Что такое крипто-кошелёк?',
      body: 'Горячие против холодных — без технического тумана.',
    },
    {
      title: 'Bitcoin, Ethereum и не только',
      body: 'Монеты, которые реально важны для новичка (и почему остальные — нет).',
    },
    {
      title: 'Как не попасть на скам',
      body: '5 красных флагов, которые должен знать каждый новичок до первой транзакции.',
    },
    {
      title: 'Покупаем первую монету',
      body: 'Пошагово на биржах — Coinbase, Kraken и Binance разобраны.',
    },
    {
      title: 'Циклы рынка',
      body: 'Бычьи и медвежьи — что говорит история и как сохранять спокойствие.',
    },
    {
      title: 'Ваш первый план действий',
      body: 'Простой 7-дневный план: от нуля до первой крипто-позиции.',
    },
  ],
  audienceHeader: 'Этот гид — для вас, если...',
  audience: [
    {
      profile: '«Везде говорят про крипту, но я не знаю, с чего начать.»',
      body: 'Вы годами читаете заголовки. Этот гид — ваша точка входа.',
    },
    {
      profile: '«Пробовал разобраться сам и утонул в терминах.»',
      body: 'Простой язык. Нулевые исходные знания не нужны.',
    },
    {
      profile: '«Не хочу рисковать большим — стоит ли $2.99?»',
      body: 'По такой цене настоящий риск — остаться в стороне.',
    },
  ],
  reviewsHeader: 'Новички уже в плюсе',
  reviews: [
    {
      name: 'Мия Р.',
      role: 'Первая покупка',
      body: 'Купила первый Bitcoin в тот же день. Один раздел про кошельки уже стоит сильно больше $2.99.',
    },
    {
      name: 'Даниил К.',
      role: 'Самоучка',
      body: 'Наконец гид, в котором не считают, что я уже знаю, что такое gas fee. К третьей главе маркер кончился.',
    },
    {
      name: 'София А.',
      role: 'Скептик',
      body: 'Чуть не отказалась из-за низкой цены. Оказалось, дёшево не значит плохо.',
    },
  ],
  faqHeader: 'Есть вопросы?',
  faq: [
    {
      q: 'Что именно я получу за $2.99?',
      a: 'Понятный PDF для новичков (мгновенная загрузка + копия по email) про кошельки, монеты, скамы, первую покупку, циклы рынка и план на 7 дней.',
    },
    {
      q: 'Почему так дёшево?',
      a: 'Цель — помочь вам начать, а не поставить стену. Если $2.99 спасут вас от одного скама, гид окупился многократно.',
    },
    {
      q: 'Как я его получу?',
      a: 'Двумя способами. Мгновенная ссылка на странице благодарности и копия на email сразу после оплаты.',
    },
    {
      q: 'Это финансовый совет?',
      a: 'Нет. Это образование — основа, которую вам никто не объяснил. Перед инвестициями всегда проводите своё исследование.',
    },
    {
      q: 'Подойдёт, если я совсем не технарь?',
      a: 'Да. Гид написан именно для такого читателя. Умеете пользоваться email — справитесь.',
    },
  ],
  finalCta: {
    headPrefix: 'Ваш путь в крипту начинается за ',
    headPrice: '$2.99',
    body: 'Хватит ждать. Лучшее время начать было вчера. Следующее лучшее — прямо сейчас.',
    cta: 'Забрать свою копию',
    delivery: 'Мгновенная доставка PDF после оплаты',
  },
  footer: {
    copy: '© 2026 Wallet to Wealth. Мгновенная доставка PDF.',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
  },
  buy: {
    back: 'Wallet to Wealth',
    title: 'Получить PDF',
    sub: 'Выберите язык, введите email и оплатите',
    langLabel: 'Язык',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    cta: 'Оплатить $2.99 через Stripe',
    redirecting: 'Перенаправление…',
    secure: 'Безопасная оплата · Карты, Apple Pay, Google Pay',
  },
  thanks: {
    title: 'Готово.',
    bodyEmailed: 'Платёж получен. Копия отправлена на',
    download: 'Скачать PDF',
    fallback: 'PDF придёт на ваш email в течение минуты. Проверьте папку «Спам», если письма нет.',
    note: 'Ссылка на загрузку действует 14 дней. Сохраните файл после скачивания.',
  },
}

export const DICTS: Record<Lang, Dict> = { en, es, it, fr, pt, ru }

export function getDict(lang: Lang | string | undefined): Dict {
  const safe = pickLang(typeof lang === 'string' ? lang : undefined)
  return DICTS[safe]
}
