export type GameCategory =
  | 'pacanele'
  | 'poker-ca-la-aparate'
  | 'casino-live'
  | 'loto-keno'
  | 'lozuri-razuibile'
  | 'bingo'
  | 'plinko'
  | 'sic-bo';

export type VolatilityLevel = 'Scăzută' | 'Medie' | 'Ridicată' | 'Foarte Ridicată';

export interface Game {
  slug: string;
  name: string;
  thumbnail: string;
  category: GameCategory;
  provider: string;
  rtp: number;
  volatility: VolatilityLevel;
  description: string;
}
