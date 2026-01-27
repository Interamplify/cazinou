export type BonusCategory =
  | 'bonus-de-bun-venit'
  | 'bonus-fara-depunere'
  | 'rotiri-gratuite'
  | 'cashback'
  | 'program-vip'
  | 'bonus-ziua-ta'
  | 'roata-norocului';

export interface BonusType {
  slug: string;
  name: string;
  description: string;
  icon: string;
  typicalValue: string;
  wageringRange: string;
}
