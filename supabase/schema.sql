-- Pizzeria Bella Nera Schema
-- Real-time tables for stone deck ovens, kitchen display queue, and guest reservations

CREATE TABLE IF NOT EXISTS public.wood_ovens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  oven_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  temperature_c INT NOT NULL DEFAULT 450,
  fuel_wood TEXT NOT NULL,
  deck_material TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Optimal 90s Bake',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.kitchen_tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_number TEXT NOT NULL UNIQUE,
  table_reference TEXT NOT NULL,
  guest_name TEXT NOT NULL,
  items_summary TEXT NOT NULL,
  total_eur NUMERIC(10, 2) NOT NULL,
  baking_status TEXT NOT NULL DEFAULT 'Ticket Queued',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.table_reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reservation_ref TEXT NOT NULL UNIQUE,
  guest_name TEXT NOT NULL,
  seating_time TIMESTAMPTZ NOT NULL,
  party_size INT NOT NULL,
  zone_preference TEXT NOT NULL,
  deposit_eur NUMERIC(10, 2) DEFAULT 0.00,
  status TEXT NOT NULL DEFAULT 'Confirmed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.wood_ovens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kitchen_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.table_reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to wood_ovens"
  ON public.wood_ovens FOR SELECT USING (true);

CREATE POLICY "Allow public insert and read to table_reservations"
  ON public.table_reservations FOR ALL USING (true);

CREATE POLICY "Allow authenticated staff to manage kitchen_tickets"
  ON public.kitchen_tickets FOR ALL USING (true);
