import Script from 'next/script'

type PixelConfig = {
  meta: string
  tiktok: string
  ga4: string
  gtm: string
  posthogHost: string
  posthogKey: string
}

function readConfig(): PixelConfig {
  return {
    meta: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '',
    ga4: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '',
    gtm: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || '',
    posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
    posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
  }
}

const ID_RE = /^[A-Z0-9_-]+$/i

export function Pixels() {
  const cfg = readConfig()
  const safe = {
    meta: ID_RE.test(cfg.meta) ? cfg.meta : '',
    tiktok: ID_RE.test(cfg.tiktok) ? cfg.tiktok : '',
    ga4: ID_RE.test(cfg.ga4) ? cfg.ga4 : '',
    gtm: ID_RE.test(cfg.gtm) ? cfg.gtm : '',
    posthogKey: ID_RE.test(cfg.posthogKey) ? cfg.posthogKey : '',
    posthogHost: cfg.posthogHost,
  }

  return (
    <>
      {/* Google Consent Mode v2 — default deny everything; CookieConsent updates after user picks. */}
      {(safe.gtm || safe.ga4) && (
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`,
          }}
        />
      )}
      {safe.gtm && (
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${safe.gtm}');`,
          }}
        />
      )}

      {safe.ga4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${safe.ga4}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${safe.ga4}',{send_page_view:true});`,
            }}
          />
        </>
      )}

      {safe.meta && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${safe.meta}');fbq('track','PageView');`,
          }}
        />
      )}

      {safe.tiktok && (
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=i;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};ttq.load('${safe.tiktok}');ttq.page();}(window, document, 'ttq');`,
          }}
        />
      )}

      {safe.posthogKey && safe.posthogHost && (
        <Script
          id="posthog-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('${safe.posthogKey}',{api_host:'${safe.posthogHost}'});`,
          }}
        />
      )}
    </>
  )
}

export function GtmNoscript() {
  const id = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || ''
  if (!ID_RE.test(id)) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
