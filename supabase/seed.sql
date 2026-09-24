-- Pizzeria Bella Nera Mock Data
INSERT INTO public.wood_ovens (oven_code, name, temperature_c, fuel_wood, deck_material, status)
VALUES 
  ('FORNO-01', 'Milano Biscotto Domed Oven', 465, 'Calabrian Beechwood', 'Stone Floor', 'Optimal 90s Bake'),
  ('FORNO-02', 'Napoletana Heritage Deck', 450, 'Oak & Olive Wood', 'Sorrento Terracotta', 'Optimal 90s Bake');

INSERT INTO public.kitchen_tickets (ticket_number, table_reference, guest_name, items_summary, total_eur, baking_status)
VALUES 
  ('TKT-301', 'Booth 4', 'Matteo Rossi', '2x Margherita Burrata, 1x Diavola Calabra, 2x Peroni Gran Riserva', 48.50, 'Baking (Oven 1)'),
  ('TKT-302', 'Terrace Table 9', 'Dr. Sofia Bianchi', '1x Tartufo Nero, 1x Prosciutto di Parma, 1x Tiramisù Tradizionale', 42.00, 'Dough Stretching'),
  ('TKT-303', 'Bar Counter 2', 'Enzo Moretti', '1x Marinara Semplice, 1x San Pellegrino Aranciata', 16.50, 'Ticket Queued');

INSERT INTO public.table_reservations (reservation_ref, guest_name, seating_time, party_size, zone_preference, deposit_eur, status)
VALUES 
  ('RES-7701', 'Gianluigi Ferri', NOW() + INTERVAL '2 hours', 6, 'Main Vault Room', 60.00, 'Confirmed'),
  ('RES-7702', 'Valentina Romano', NOW() + INTERVAL '3 hours', 4, 'Courtyard Terrace', 40.00, 'VIP Seated'),
  ('RES-7703', 'Marco Castiglione', NOW() + INTERVAL '4 hours', 8, 'Chef Tasting Counter', 120.00, 'Confirmed');
