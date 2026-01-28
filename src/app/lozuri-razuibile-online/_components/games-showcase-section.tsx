import Image from 'next/image';
import { Dices, Star, TrendingUp, Trophy, Tag } from 'lucide-react';

const featuredGames = [
  {
    name: 'Scratch Match',
    provider: 'Evoplay',
    image: '/images/games/scratch-match.webp',
    rating: 4.5,
    rtp: '96%',
    maxWin: '500x',
    theme: 'Numbers',
  },
  {
    name: 'Scratch Alpaca',
    provider: 'BGaming',
    image: '/images/games/scratch-alpaca.webp',
    rating: 4.3,
    rtp: '95%',
    maxWin: '250x',
    theme: 'Animals',
  },
  {
    name: 'Scratch a Million',
    provider: 'Hacksaw Gaming',
    image: '/images/games/scratch-million.webp',
    rating: 4.6,
    rtp: '94%',
    maxWin: '1000x',
    theme: 'Money',
  },
  {
    name: 'Football Scratch',
    provider: 'Evoplay',
    image: '/images/games/football-scratch.webp',
    rating: 4.2,
    rtp: '95.5%',
    maxWin: '300x',
    theme: 'Sports',
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />;
        } else if (i === fullStars && hasHalf) {
          return (
            <div key={i} className="relative">
              <Star className="h-3.5 w-3.5 text-gray-300" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              </div>
            </div>
          );
        } else {
          return <Star key={i} className="h-3.5 w-3.5 text-gray-300" />;
        }
      })}
    </div>
  );
}

function GameCard({ game }: { game: (typeof featuredGames)[0] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all hover:shadow-lg hover:border-orange-200">
      {/* Game Image / Placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center">
        <Dices className="h-16 w-16 text-orange-300" />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Game Name & Provider */}
        <div className="mb-3">
          <h3 className="text-sm font-bold font-mono text-gray-900 mb-0.5">{game.name}</h3>
          <p className="text-xs text-gray-500 font-mono">{game.provider}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={game.rating} />
          <span className="text-xs font-mono font-semibold text-gray-600">{game.rating.toFixed(1)}</span>
        </div>

        {/* RTP & Max Win Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 border border-green-200">
            <TrendingUp className="h-3 w-3 text-green-600" />
            <span className="text-xs font-mono font-semibold text-green-700">RTP {game.rtp}</span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 border border-amber-200">
            <Trophy className="h-3 w-3 text-amber-600" />
            <span className="text-xs font-mono font-semibold text-amber-700">{game.maxWin}</span>
          </div>
        </div>

        {/* Theme Tag */}
        <div className="flex items-center gap-1 mb-4">
          <Tag className="h-3 w-3 text-gray-400" />
          <span className="text-xs font-mono text-gray-500">{game.theme}</span>
        </div>

        {/* CTA Button */}
        <a
          href="#cazinouri"
          className="block w-full text-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 text-xs font-bold font-mono transition-colors"
        >
          Joac&#259; Acum
        </a>
      </div>
    </div>
  );
}

export function GamesShowcaseSection() {
  return (
    <section id="jocuri-recomandate" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900 mb-3">
            Jocuri de Lozuri R&#259;zuibile Recomandate
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Selec&#539;ia noastr&#259; cu cele mai bune jocuri de scratch cards disponibile la cazinouri interna&#539;ionale
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
