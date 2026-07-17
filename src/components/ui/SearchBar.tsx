import { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

export function SearchBar({ onSearch }: { onSearch?: (data: { destination: string; date: string; guests: string }) => void }) {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <div
      className="rounded-3xl p-2 flex flex-col md:flex-row gap-2"
      style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
        <MapPin className="h-5 w-5 text-gold-400 shrink-0" />
        <div className="flex-1">
          <label className="block text-xs text-secondary font-medium">Destination</label>
          <input
            type="text"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-white/35 focus:outline-none text-sm"
          />
        </div>
      </div>
      <div className="hidden md:block w-px bg-white/10" />
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
        <Calendar className="h-5 w-5 text-gold-400 shrink-0" />
        <div className="flex-1">
          <label className="block text-xs text-secondary font-medium">When</label>
          <input
            type="text"
            placeholder="Add dates"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-white/35 focus:outline-none text-sm"
          />
        </div>
      </div>
      <div className="hidden md:block w-px bg-white/10" />
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
        <Users className="h-5 w-5 text-gold-400 shrink-0" />
        <div className="flex-1">
          <label className="block text-xs text-secondary font-medium">Guests</label>
          <input
            type="text"
            placeholder="Add guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-white/35 focus:outline-none text-sm"
          />
        </div>
      </div>
      <button
        onClick={() => onSearch?.({ destination, date, guests })}
        className="btn-gold rounded-xl px-6 py-3 flex items-center gap-2"
      >
        <Search className="h-4 w-4" />
        <span className="md:hidden lg:inline">Search</span>
      </button>
    </div>
  );
}
