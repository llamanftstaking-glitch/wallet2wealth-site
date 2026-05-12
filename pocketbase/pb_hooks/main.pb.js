/// <reference path="../pb_data/types.d.ts" />

// Hook: when an order flips to "paid", auto-create a 14-day download token
// for the buyer in the language captured on the order. The Next.js webhook
// can also create the download row directly; this is defense-in-depth in
// case PocketBase is updated via the admin UI or a future integration.
onRecordAfterUpdateSuccess((e) => {
  const order = e.record

  if (order.get('status') !== 'paid') {
    e.next()
    return
  }

  const lang = order.get('lang') || 'en'

  const existing = $app.findRecordsByFilter(
    'downloads',
    `order = "${order.id}" && lang = "${lang}"`,
    '-created',
    1,
  )
  if (existing && existing.length > 0) {
    e.next()
    return
  }

  const downloads = $app.findCollectionByNameOrId('downloads')
  const dl = new Record(downloads)
  dl.set('order', order.id)
  dl.set('lang', lang)
  dl.set('token', $security.randomString(48))
  const expires = new Date()
  expires.setDate(expires.getDate() + 14)
  dl.set('expires_at', expires.toISOString())
  dl.set('used_count', 0)
  $app.save(dl)

  e.next()
}, 'orders')
