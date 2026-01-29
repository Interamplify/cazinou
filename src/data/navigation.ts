import type { NavItem } from '@/types/navigation';

export const mainNavItems: NavItem[] = [
  { label: 'Acasă', href: '/' },
  { label: 'Cazinouri Noi', href: '/cazinouri-noi/' },
  { label: 'Casino Germania', href: '/cazinouri-online-germania/' },
  {
    label: 'Bonusuri',
    href: '/bonus/',
    children: [
      { label: 'Toate Bonusurile', href: '/bonus/' },
      { label: 'Fără Depunere', href: '/bonus/fara-depunere/' },
      { label: 'Rotiri Gratuite', href: '/bonus/rotiri-gratuite/' },
    ],
  },
  { label: 'Lozuri Online', href: '/lozuri-razuibile-online/' },
];

export const footerNavItems: NavItem[] = [
  { label: 'Acasă', href: '/' },
  { label: 'Cazinouri Noi', href: '/cazinouri-noi/' },
  { label: 'Casino Germania', href: '/cazinouri-online-germania/' },
  { label: 'Bonusuri', href: '/bonus/' },
  { label: 'Fără Depunere', href: '/bonus/fara-depunere/' },
  { label: 'Rotiri Gratuite', href: '/bonus/rotiri-gratuite/' },
  { label: 'Lozuri Online', href: '/lozuri-razuibile-online/' },
];
