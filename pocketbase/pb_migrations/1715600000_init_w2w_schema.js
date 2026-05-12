/// <reference path="../pb_data/types.d.ts" />

// Wallet to Wealth — initial schema.
// Collections: subscribers (lead magnet + newsletter), orders (Stripe), downloads (signed PDF access).
// Auth on built-in `users` is enabled but the $2.99 tripwire does not require accounts.

migrate(
  (app) => {
    // subscribers — email captures from lead magnet + footer signup
    const subscribers = new Collection({
      type: 'base',
      name: 'subscribers',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'email', type: 'email', required: true, unique: true },
        {
          name: 'lang',
          type: 'select',
          maxSelect: 1,
          values: ['en', 'es', 'it', 'fr', 'pt', 'ru'],
        },
        { name: 'source', type: 'text', max: 64 },
        { name: 'ip', type: 'text', max: 64 },
        { name: 'user_agent', type: 'text', max: 512 },
        { name: 'consent', type: 'bool' },
        { name: 'confirmed', type: 'bool' },
        { name: 'created', type: 'autodate', onCreate: true },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE UNIQUE INDEX idx_subscribers_email ON subscribers (email)'],
    })
    app.save(subscribers)

    // orders — created on Stripe checkout.session.completed webhook
    const orders = new Collection({
      type: 'base',
      name: 'orders',
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'stripe_session_id', type: 'text', required: true, max: 256 },
        { name: 'stripe_payment_intent', type: 'text', max: 256 },
        { name: 'email', type: 'email', required: true },
        { name: 'amount_cents', type: 'number', required: true, onlyInt: true },
        { name: 'currency', type: 'text', max: 8 },
        {
          name: 'lang',
          type: 'select',
          maxSelect: 1,
          values: ['en', 'es', 'it', 'fr', 'pt', 'ru'],
        },
        {
          name: 'status',
          type: 'select',
          maxSelect: 1,
          required: true,
          values: ['pending', 'paid', 'refunded', 'failed'],
        },
        { name: 'country', type: 'text', max: 8 },
        { name: 'raw', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE UNIQUE INDEX idx_orders_session ON orders (stripe_session_id)',
        'CREATE INDEX idx_orders_email ON orders (email)',
      ],
    })
    app.save(orders)

    // downloads — signed, expiring access tokens for the PDF
    const downloads = new Collection({
      type: 'base',
      name: 'downloads',
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        {
          name: 'order',
          type: 'relation',
          required: true,
          collectionId: orders.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'token', type: 'text', required: true, max: 128 },
        {
          name: 'lang',
          type: 'select',
          maxSelect: 1,
          required: true,
          values: ['en', 'es', 'it', 'fr', 'pt', 'ru'],
        },
        { name: 'expires_at', type: 'date', required: true },
        { name: 'used_count', type: 'number', onlyInt: true },
        { name: 'last_used_at', type: 'date' },
        { name: 'last_ip', type: 'text', max: 64 },
        { name: 'created', type: 'autodate', onCreate: true },
      ],
      indexes: [
        'CREATE UNIQUE INDEX idx_downloads_token ON downloads (token)',
        'CREATE INDEX idx_downloads_order ON downloads (`order`)',
      ],
    })
    app.save(downloads)
  },
  (app) => {
    for (const name of ['downloads', 'orders', 'subscribers']) {
      try {
        const c = app.findCollectionByNameOrId(name)
        app.delete(c)
      } catch (_) {
        // already gone
      }
    }
  },
)
