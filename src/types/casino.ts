export type LicenseType =
  | 'Curacao'
  | 'Malta (MGA)'
  | 'Gibraltar'
  | 'Anjouan'
  | 'Costa Rica'
  | 'Kahnawake'
  | 'N/A';

export interface CasinoRatings {
  securitate: number;
  catalogJocuri: number;
  bonusuri: number;
  metodePlata: number;
  experientaUtilizator: number;
  licenta: number;
}

export interface Casino {
  slug: string;
  name: string;
  logo: string;
  bonusTitle: string;
  bonusPercentage: number;
  bonusMaxAmount: number;
  bonusCurrency: string;
  freeSpins: number;
  wageringRequirement: number;
  overallRating: number;
  ratings: CasinoRatings;
  features: string[];
  pros: string[];
  cons: string[];
  license: LicenseType;
  paymentMethods: string[];
  providers: string[];
  affiliateUrl: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
}
