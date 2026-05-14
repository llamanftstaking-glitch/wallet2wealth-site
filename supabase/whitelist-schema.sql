-- =============================================================================
-- Wallet to Wealth → GIZER token whitelist schema
-- Run in Supabase SQL Editor. Idempotent: safe to re-run.
-- =============================================================================

-- 1. whitelist table — post-purchase token allocation signups
create table if not exists public.whitelist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  eth_address text,
  sol_address text,
  order_id uuid references public.orders(id) on delete set null,
  lang text,
  agreed_terms boolean not null default false,
  agreed_terms_version text not null default 'v1-2026-05-13',
  ip text,
  user_agent text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz not null default now(),
  constraint whitelist_at_least_one_address check (
    eth_address is not null or sol_address is not null
  )
);

create unique index if not exists whitelist_email_unique on public.whitelist (lower(email));
create index if not exists whitelist_created_at_idx on public.whitelist (created_at desc);
create index if not exists whitelist_order_id_idx on public.whitelist (order_id);

-- RLS: locked down. Service-role inserts only.
alter table public.whitelist enable row level security;

drop policy if exists whitelist_no_anon on public.whitelist;
create policy whitelist_no_anon on public.whitelist
  for all to anon using (false) with check (false);

-- 2. chapter_leads table — exit-intent email captures (separate from subscribers
-- to keep funnel attribution clean; subscribers may merge in v2)
create table if not exists public.chapter_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  lang text,
  source text not null default 'exit-intent',
  ip text,
  user_agent text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  delivered boolean not null default false,
  delivered_at timestamptz,
  created_at timestamptz not null default now()
);

create unique index if not exists chapter_leads_email_unique on public.chapter_leads (lower(email));
create index if not exists chapter_leads_created_at_idx on public.chapter_leads (created_at desc);

alter table public.chapter_leads enable row level security;
drop policy if exists chapter_leads_no_anon on public.chapter_leads;
create policy chapter_leads_no_anon on public.chapter_leads
  for all to anon using (false) with check (false);

-- 3. Quick analytics views
create or replace view public.whitelist_stats as
select
  count(*) as total_signups,
  count(*) filter (where eth_address is not null) as with_eth,
  count(*) filter (where sol_address is not null) as with_sol,
  count(*) filter (where eth_address is not null and sol_address is not null) as both_chains,
  count(*) filter (where created_at::date = current_date) as today,
  count(*) filter (where created_at >= now() - interval '7 days') as week
from whitelist;

create or replace view public.chapter_leads_stats as
select
  count(*) as total_leads,
  count(*) filter (where delivered) as delivered,
  count(*) filter (where created_at::date = current_date) as today,
  count(*) filter (where created_at >= now() - interval '7 days') as week
from chapter_leads;
