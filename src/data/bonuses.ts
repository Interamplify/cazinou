import type { BonusType } from '@/types/bonus';

export const bonusTypes: BonusType[] = [
  {
    slug: 'bonus-de-bun-venit',
    name: 'Bonus de Bun Venit',
    description:
      'Primul bonus pe care îl primești la înregistrare și prima depunere. De obicei procentual pe valoarea depunerii.',
    icon: 'party-popper',
    typicalValue: '100%-550% + Rotiri Gratuite',
    wageringRange: 'x25 - x45',
  },
  {
    slug: 'bonus-fara-depunere',
    name: 'Bonus Fără Depunere',
    description:
      'Bonus oferit fără a fi necesară o depunere. Ideal pentru a testa un cazinou fără risc.',
    icon: 'banknote',
    typicalValue: '50-100 RON sau 50-300 rotiri',
    wageringRange: 'x30 - x60',
  },
  {
    slug: 'rotiri-gratuite',
    name: 'Rotiri Gratuite',
    description:
      'Spinuri gratuite pe sloturi populare, oferite ca parte a unui bonus sau promoții separate.',
    icon: 'rotate-cw',
    typicalValue: '50-550 rotiri gratuite',
    wageringRange: 'x20 - x40',
  },
  {
    slug: 'cashback',
    name: 'Cashback',
    description:
      'Procentaj din pierderile returnate jucătorului. Poate fi zilnic, săptămânal sau lunar.',
    icon: 'undo-2',
    typicalValue: '2%-50% din pierderi',
    wageringRange: 'x1 - x10',
  },
  {
    slug: 'program-vip',
    name: 'Program VIP',
    description:
      'Sistem de loialitate cu niveluri care oferă recompense crescătoare pe măsură ce joci.',
    icon: 'crown',
    typicalValue: 'Recompense pe niveluri',
    wageringRange: 'Variabil',
  },
  {
    slug: 'bonus-ziua-ta',
    name: 'Bonus de Ziua Ta',
    description:
      'Bonus special oferit de cazinou cu ocazia zilei tale de naștere.',
    icon: 'cake',
    typicalValue: '25-50 RON cadou',
    wageringRange: 'x10 - x30',
  },
  {
    slug: 'roata-norocului',
    name: 'Roata Norocului',
    description:
      'Învârte roata zilnic pentru a câștiga premii: rotiri gratuite, bani bonus sau multiplicatori.',
    icon: 'circle-dot',
    typicalValue: 'Premii zilnice aleatorii',
    wageringRange: 'x5 - x20',
  },
];
