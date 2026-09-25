import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Pizza, 
  Flame, 
  Sparkles, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  X, 
  LogOut, 
  Calendar, 
  ChefHat,
  Thermometer
} from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'ovens' | 'tickets' | 'tables'>('ovens');

  const [ovens, setOvens] = useState([
    { id: 'FORNO-01', name: 'Milano Biscotto Domed Oven', temp: '465°C', fuel: 'Calabrian Beechwood', deck: 'Stone Floor', status: 'Optimal 90s Bake' },
    { id: 'FORNO-02', name: 'Napoletana Heritage Deck', temp: '450°C', fuel: 'Oak & Olive Wood', deck: 'Sorrento Terracotta', status: 'Optimal 90s Bake' }
  ]);

  const [tickets, setTickets] = useState([
    { id: 'TKT-301', table: 'Booth 4', guest: 'Matteo Rossi', items: '2x Margherita Burrata, 1x Diavola Calabra, 2x Peroni Gran Riserva', total: '€48.50', time: '4m ago', status: 'Baking (Oven 1)' },
    { id: 'TKT-302', table: 'Terrace Table 9', guest: 'Dr. Sofia Bianchi', items: '1x Tartufo Nero, 1x Prosciutto di Parma, 1x Tiramisù Tradizionale', total: '€42.00', time: '8m ago', status: 'Dough Stretching' },
    { id: 'TKT-303', table: 'Bar Counter 2', guest: 'Enzo Moretti', items: '1x Marinara Semplice, 1x San Pellegrino Aranciata', total: '€16.50', time: 'Just now', status: 'Ticket Queued' }
  ]);

  const [reservations, setReservations] = useState([
    { id: 'RES-7701', name: 'Gianluigi Ferri', time: '7:30 PM Tonight', party: 6, zone: 'Main Vault Room', deposit: '€60.00', status: 'Confirmed' },
    { id: 'RES-7702', name: 'Valentina Romano', time: '8:15 PM Tonight', party: 4, zone: 'Courtyard Terrace', deposit: '€40.00', status: 'VIP Seated' },
    { id: 'RES-7703', name: 'Marco Castiglione', time: '9:00 PM Tonight', party: 8, zone: 'Chef Tasting Counter', deposit: '€120.00', status: 'Confirmed' }
  ]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'pizza2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleOneClickFill = () => {
    setPasscode('pizza2026');
    setIsAuthenticated(true);
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn text-stone-100 font-sans">
      <div className="relative w-full max-w-4xl bg-stone-950 border border-amber-600/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-red-700 flex items-center justify-center shadow-lg shadow-amber-900/40">
              <Pizza className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg tracking-wide font-bold text-amber-100">PIZZERIA BELLA NERA — FORNO DISPATCH OS</h3>
                <span className="text-xs font-semibold tracking-wider uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                  Live Oven Telemetry
                </span>
              </div>
              <p className="text-xs text-stone-400">450°C Wood Oven Tracking • Kitchen KDS • Table Seating</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gate vs Dashboard */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-amber-400" />
            </div>
            <h4 className="text-xl font-bold font-serif text-stone-100 mb-2">Pizzaiolo Terminal Authorization</h4>
            <p className="text-stone-400 text-sm max-w-md mb-8">
              Authorized kitchen operators and floor managers only. Enter the passkey below or click the 1-click bypass button.
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passkey (pizza2026)"
                  className="w-full px-4 py-3 bg-stone-900/90 border border-stone-800 rounded-xl text-center text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono tracking-widest text-lg"
                />
                {error && (
                  <p className="text-rose-400 text-xs mt-2 font-medium">Invalid passkey. Cheat code: pizza2026</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold rounded-xl shadow-lg transition-all text-base font-semibold min-h-[44px] tracking-widest uppercase"
                >
                  Verify Access
                </button>
                <button
                  type="button"
                  onClick={handleOneClickFill}
                  className="w-full py-2.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold rounded-xl transition-all text-base font-semibold min-h-[44px] tracking-wider flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Auto-Fill 1-Click Passkey (pizza2026)
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col">
            {/* Top Subnav */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-stone-800 bg-stone-900/40">
              <div className="flex gap-2">
                {[
                  { id: 'ovens', label: 'Wood-Fired Ovens', icon: Flame },
                  { id: 'tickets', label: 'Baking Queue (KDS)', icon: ChefHat },
                  { id: 'tables', label: 'Table Bookings', icon: Calendar }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isActive 
                          ? 'bg-amber-600 text-stone-950 shadow-md' 
                          : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-stone-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  OVENS FIRING: 2/2
                </span>
                <button 
                  onClick={() => setIsAuthenticated(false)}
                  className="text-stone-400 hover:text-rose-400 text-xs flex items-center gap-1 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Lock
                </button>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-6 space-y-6 flex-1">
              {/* Financial Metric Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-xl">
                  <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase tracking-widest block mb-1">Evening Sales</span>
                  <span className="text-xl font-bold font-mono text-stone-100">€4,890.00</span>
                  <span className="text-xs font-semibold tracking-wider text-emerald-400 block mt-1">+14% vs Last Friday</span>
                </div>
                <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-xl">
                  <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase tracking-widest block mb-1">Pizzas Baked Today</span>
                  <span className="text-xl font-bold font-mono text-stone-100">312 Pies</span>
                  <span className="text-xs font-semibold tracking-wider text-amber-400 block mt-1">Avg 88s Bake Time</span>
                </div>
                <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-xl">
                  <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase tracking-widest block mb-1">48hr Dough Stock</span>
                  <span className="text-xl font-bold font-mono text-stone-100">140 Doughballs</span>
                  <span className="text-xs font-semibold tracking-wider text-emerald-400 block mt-1">Optimal Proof</span>
                </div>
                <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-xl">
                  <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase tracking-widest block mb-1">Table Seating</span>
                  <span className="text-xl font-bold font-mono text-stone-100">96%</span>
                  <span className="text-xs font-semibold tracking-wider text-amber-400 block mt-1">Full Service Floor</span>
                </div>
              </div>

              {/* Tab 1: Ovens */}
              {activeTab === 'ovens' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-amber-500" />
                    Biscotto Stone Deck Telemetry
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ovens.map((ov) => (
                      <div key={ov.id} className="p-5 bg-stone-900/70 border border-stone-800 rounded-xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-amber-400">{ov.id}</span>
                          <span className="text-xs font-semibold tracking-wider font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {ov.status}
                          </span>
                        </div>
                        <div className="font-serif font-bold text-base text-stone-100">{ov.name}</div>
                        <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold tracking-wider text-stone-500 block">Deck Temperature</span>
                            <span className="text-2xl font-mono font-bold text-amber-300">{ov.temp}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold tracking-wider text-stone-500 block">Fuel & Stone</span>
                            <span className="text-xs font-mono text-stone-300">{ov.fuel} • {ov.deck}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Tickets */}
              {activeTab === 'tickets' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                    <ChefHat className="w-4 h-4 text-amber-500" />
                    Artisan Kitchen Display (KDS)
                  </h4>
                  <div className="space-y-2">
                    {tickets.map((tkt) => (
                      <div key={tkt.id} className="p-4 bg-stone-900/60 border border-stone-800 rounded-xl flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-xs text-amber-400">{tkt.id}</span>
                            <span className="text-xs font-bold text-stone-200">{tkt.table} — {tkt.guest}</span>
                            <span className="text-xs font-semibold tracking-wider text-stone-500 font-mono">({tkt.time})</span>
                          </div>
                          <div className="text-xs text-stone-400">{tkt.items}</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-bold text-stone-100">{tkt.total}</span>
                          <span className="text-xs font-semibold tracking-wider font-bold px-2 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                            {tkt.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Tables */}
              {activeTab === 'tables' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    Guest Reservations & Floor Allotments
                  </h4>
                  <div className="border border-stone-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs text-stone-300">
                      <thead className="bg-stone-900/80 text-xs font-semibold tracking-wider uppercase font-bold text-stone-400 tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Ref</th>
                          <th className="py-3 px-4">Guest</th>
                          <th className="py-3 px-4">Seating Time</th>
                          <th className="py-3 px-4">Party & Zone</th>
                          <th className="py-3 px-4">Deposit</th>
                          <th className="py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800/60 font-mono">
                        {reservations.map((res) => (
                          <tr key={res.id} className="hover:bg-stone-900/40">
                            <td className="py-3 px-4 text-amber-400 font-bold">{res.id}</td>
                            <td className="py-3 px-4 font-sans font-bold text-stone-200">{res.name}</td>
                            <td className="py-3 px-4">{res.time}</td>
                            <td className="py-3 px-4 text-stone-400">{res.party} guests • {res.zone}</td>
                            <td className="py-3 px-4 text-emerald-400">{res.deposit}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wider">
                                {res.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer */}
            <div className="px-6 py-3 border-t border-stone-800 bg-stone-900/60 flex items-center justify-between text-xs text-stone-500">
              <span className="font-mono">Turnkey Supabase Schema Ready • RLS Active</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded-lg transition-colors text-base font-semibold min-h-[44px]"
              >
                Close Terminal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
