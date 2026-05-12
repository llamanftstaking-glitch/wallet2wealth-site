import 'server-only'
import { Resend } from 'resend'
import type { SupportedLang } from './pocketbase'

const KEY = process.env.RESEND_API_KEY
const FROM = process.env.EMAIL_FROM || 'Wallet to Wealth <hello@wallet2wealth.com>'

const resend = KEY ? new Resend(KEY) : null

type Locale = SupportedLang

type Strings = {
  subject: string
  heading: string
  body: string
  cta: string
  footer: string
}

const COPY: Record<Locale, Strings> = {
  en: {
    subject: 'Your Wallet to Wealth PDF is ready',
    heading: 'Welcome — your guide is inside.',
    body: "Thanks for grabbing a copy of Wallet to Wealth. Tap the button below to download your PDF. The link works for 14 days; save the file once you have it.",
    cta: 'Download your PDF',
    footer: 'Questions? Just reply to this email.',
  },
  es: {
    subject: 'Tu PDF de Wallet to Wealth está listo',
    heading: 'Bienvenido — tu guía está adentro.',
    body: 'Gracias por conseguir tu copia de Wallet to Wealth. Toca el botón para descargar tu PDF. El enlace funciona durante 14 días; guarda el archivo cuando lo tengas.',
    cta: 'Descargar PDF',
    footer: '¿Preguntas? Responde a este correo.',
  },
  it: {
    subject: 'Il tuo PDF di Wallet to Wealth è pronto',
    heading: 'Benvenuto — la tua guida è qui.',
    body: 'Grazie per aver scelto Wallet to Wealth. Tocca il pulsante per scaricare il PDF. Il link è valido 14 giorni; salva subito il file.',
    cta: 'Scarica il PDF',
    footer: 'Domande? Rispondi a questa email.',
  },
  fr: {
    subject: 'Votre PDF Wallet to Wealth est prêt',
    heading: 'Bienvenue — votre guide est à l’intérieur.',
    body: 'Merci d’avoir pris Wallet to Wealth. Cliquez sur le bouton pour télécharger votre PDF. Le lien est valable 14 jours ; enregistrez le fichier.',
    cta: 'Télécharger le PDF',
    footer: 'Des questions ? Répondez à cet email.',
  },
  pt: {
    subject: 'Seu PDF Wallet to Wealth está pronto',
    heading: 'Bem-vindo — seu guia está aqui.',
    body: 'Obrigado por garantir o Wallet to Wealth. Toque no botão para baixar o PDF. O link funciona por 14 dias; salve o arquivo após baixar.',
    cta: 'Baixar PDF',
    footer: 'Dúvidas? Responda a este e-mail.',
  },
  ru: {
    subject: 'Ваш PDF Wallet to Wealth готов',
    heading: 'Добро пожаловать — ваше руководство внутри.',
    body: 'Спасибо, что выбрали Wallet to Wealth. Нажмите кнопку ниже, чтобы скачать PDF. Ссылка работает 14 дней; сохраните файл.',
    cta: 'Скачать PDF',
    footer: 'Вопросы? Просто ответьте на это письмо.',
  },
}

export async function sendPdfReceiptEmail(opts: {
  to: string
  lang: Locale
  downloadUrl: string
}): Promise<{ id?: string; skipped?: boolean }> {
  if (!resend) return { skipped: true }

  const t = COPY[opts.lang] || COPY.en
  const html = `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0A0E1A;padding:40px 0;font-family:Inter,Arial,sans-serif;color:#fff">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="560" style="background:#0D1220;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px">
        <tr><td>
          <h1 style="margin:0 0 12px;font-size:24px;color:#5BC8FF">${t.heading}</h1>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:rgba(255,255,255,0.8)">${t.body}</p>
          <a href="${opts.downloadUrl}" style="display:inline-block;padding:14px 24px;background:#5BC8FF;color:#0A0E1A;text-decoration:none;font-weight:700;border-radius:10px">${t.cta}</a>
          <p style="margin:32px 0 0;font-size:13px;color:rgba(255,255,255,0.5)">${t.footer}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>`

  const res = await resend.emails.send({
    from: FROM,
    to: opts.to,
    subject: t.subject,
    html,
  })

  return { id: res.data?.id }
}
