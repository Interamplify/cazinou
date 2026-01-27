import type { NavItem } from '@/types/navigation';

export const mainNavItems: NavItem[] = [
  { label: 'Top Cazinouri', href: '/#top-cazinouri' },
  { label: 'Categorii', href: '/#categorii-cazinouri' },
  {
    label: 'Bonusuri',
    href: '/bonus/',
    children: [
      { label: 'Toate Bonusurile', href: '/bonus/' },
      { label: 'Bonus Fără Depunere', href: '/bonus/fara-depunere/' },
      { label: 'Rotiri Gratuite', href: '/bonus/rotiri-gratuite/' },
    ],
  },
  { label: 'Plati', href: '/#metode-plata' },
  { label: 'Jocuri', href: '/#categorii-jocuri' },
  { label: 'Furnizori', href: '/#furnizori' },
  { label: 'FAQ', href: '/#faq' },
];

export const footerNavItems: NavItem[] = [
  { label: 'Top Cazinouri 2026', href: '/#top-cazinouri' },
  { label: 'Metodologie', href: '/#metodologie' },
  { label: 'Tipuri de Bonusuri', href: '/#bonusuri' },
  { label: 'Metode de Plată', href: '/#metode-plata' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Despre Noi', href: '/#despre' },
  { label: 'Contact', href: 'mailto:andrei@cazinou.io' },
];
