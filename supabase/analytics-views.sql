-- =============================================================================
-- Wallet to Wealth — Business analytics views
-- Run this in Supabase SQL Editor. Re-runnable: views drop-and-recreate.
-- After running, Table Editor sidebar shows each view under "Views" section.
-- =============================================================================

-- 1. Today's snapshot — single row, everything that matters right now
create or replace view public.dashboard_today as
select
  (select count(*) from orders where status = 'paid' and created_at::date = current_date) as sales_today,
  (select coalesce(sum(amount_cents), 0) / 100.0 from orders where status = 'paid' and created_at::date = current_date) as revenue_today_usd,
  (select count(*) from subscribers where created_at::date = current_date) as leads_today,
  (select count(*) from orders where status = 'paid' and created_at >= now() - interval '7 days') as sales_week,
  (select coalesce(sum(amount_cents), 0) / 100.0 from orders where status = 'paid' and created_at >= now() - interval '7 days') as revenue_week_usd,
  (select count(*) from subscribers where created_at >= now() - interval '7 days') as leads_week,
  (select count(*) from orders where status = 'paid') as sales_all_time,
  (select coalesce(sum(amount_cents), 0) / 100.0 from orders where status = 'paid') as revenue_all_time_usd,
  (select count(*) from subscribers) as leads_all_time;

-- 2. Daily revenue trend (last 60 days)
create or replace view public.daily_revenue as
select
  date_trunc('day', created_at)::date as day,
  count(*) filter (where status = 'paid') as sales,
  coalesce(sum(amount_cents) filter (where status = 'paid'), 0) / 100.0 as revenue_usd,
  count(*) filter (where status = 'refunded') as refunds,
  coalesce(sum(amount_cents) filter (where status = 'refunded'), 0) / 100.0 as refund_amount_usd
from orders
where created_at >= now() - interval '60 days'
group by 1
order by 1 desc;

-- 3. Sales by language — which market is converting
create or replace view public.sales_by_lang as
select
  coalesce(lang, 'unknown') as lang,
  count(*) filter (where status = 'paid') as sales,
  coalesce(sum(amount_cents) filter (where status = 'paid'), 0) / 100.0 as revenue_usd,
  round(
    100.0 * count(*) filter (where status = 'paid') /
    nullif(count(*), 0),
    2
  ) as paid_rate_pct
from orders
group by lang
order by sales desc nulls last;

-- 4. Lead capture by source — which channel works
create or replace view public.leads_by_source as
select
  coalesce(source, 'unknown') as source,
  count(*) as total_leads,
  count(*) filter (where created_at >= now() - interval '7 days') as leads_week,
  count(*) filter (where confirmed = true) as confirmed_leads
from subscribers
group by source
order by total_leads desc;

-- 5. Lead → buyer conversion funnel
create or replace view public.conversion_funnel as
with overlap as (
  select s.email, s.created_at as lead_at, o.created_at as paid_at, o.amount_cents
  from subscribers s
  left join orders o on lower(o.email) = lower(s.email) and o.status = 'paid'
)
select
  count(*) as total_leads,
  count(paid_at) as buyers,
  round(100.0 * count(paid_at) / nullif(count(*), 0), 2) as conversion_rate_pct,
  coalesce(sum(amount_cents) / 100.0, 0) as revenue_from_leads_usd,
  round(
    coalesce(sum(amount_cents) / 100.0, 0) / nullif(count(*), 0),
    2
  ) as avg_value_per_lead_usd
from overlap;

-- 6. Geography breakdown
create or replace view public.sales_by_country as
select
  coalesce(country, 'unknown') as country,
  count(*) filter (where status = 'paid') as sales,
  coalesce(sum(amount_cents) filter (where status = 'paid'), 0) / 100.0 as revenue_usd
from orders
where status = 'paid'
group by country
order by sales desc;

-- 7. Download activity — see which buyers are engaged
create or replace view public.download_activity as
select
  d.id,
  o.email,
  d.lang,
  d.used_count,
  d.last_used_at,
  d.expires_at,
  d.expires_at < now() as expired,
  o.created_at as purchased_at
from downloads d
join orders o on o.id = d.order_id
order by d.last_used_at desc nulls last;

-- 8. Recent orders feed — live sales view
create or replace view public.recent_orders as
select
  o.created_at,
  o.email,
  o.lang,
  o.amount_cents / 100.0 as amount_usd,
  o.currency,
  o.country,
  o.status,
  o.stripe_session_id
from orders o
order by o.created_at desc
limit 100;

-- 9. Recent leads feed
create or replace view public.recent_leads as
select
  created_at,
  email,
  lang,
  source,
  confirmed
from subscribers
order by created_at desc
limit 100;

-- 10. Hourly traffic / lead pattern (last 7 days)
create or replace view public.hourly_lead_pattern as
select
  extract(hour from created_at) as hour_of_day,
  count(*) as leads
from subscribers
where created_at >= now() - interval '7 days'
group by 1
order by 1;

-- Grant access to the views (service role + authenticated)
grant select on public.dashboard_today to service_role, authenticated;
grant select on public.daily_revenue to service_role, authenticated;
grant select on public.sales_by_lang to service_role, authenticated;
grant select on public.leads_by_source to service_role, authenticated;
grant select on public.conversion_funnel to service_role, authenticated;
grant select on public.sales_by_country to service_role, authenticated;
grant select on public.download_activity to service_role, authenticated;
grant select on public.recent_orders to service_role, authenticated;
grant select on public.recent_leads to service_role, authenticated;
grant select on public.hourly_lead_pattern to service_role, authenticated;
