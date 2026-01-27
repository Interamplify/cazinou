import type { EvaluationCriterion } from '@/types/navigation';

export const evaluationCriteria: EvaluationCriterion[] = [
  {
    id: 'securitate',
    name: 'Securitate',
    icon: 'shield-check',
    shortDescription:
      'Verificăm criptarea SSL, protecția împotriva fraudei și măsurile de securitate ale operatorului.',
    fullDescription:
      'Securitatea este prioritatea noastră numărul unu. Evaluăm criptarea SSL, protecția datelor personale, măsurile anti-fraudă, și conformitatea cu standardele internaționale de securitate.',
    checkpoints: [
      'Criptare SSL activă',
      'Protecție împotriva fraudei',
      'Conformitate GDPR',
      'Audituri de securitate independente',
    ],
  },
  {
    id: 'catalog-jocuri',
    name: 'Catalog de Jocuri',
    icon: 'gamepad-2',
    shortDescription:
      'Analizăm diversitatea jocurilor, furnizorii de software și calitatea titlurilor disponibile.',
    fullDescription:
      'Un catalog variat de jocuri de la furnizori de renume este esențial. Verificăm numărul de jocuri, diversitatea categoriilor, prezența jocurilor populare și calitatea furnizorilor de software.',
    checkpoints: [
      'Minimum 1000+ jocuri',
      'Furnizori de renume (Pragmatic, NetEnt, etc.)',
      'Categorii variate (sloturi, live, poker)',
      'Jocuri noi adăugate regulat',
    ],
  },
  {
    id: 'bonusuri',
    name: 'Bonusuri și Promoții',
    icon: 'gift',
    shortDescription:
      'Evaluăm valoarea bonusurilor, termenii și condițiile, și cerințele de rulaj.',
    fullDescription:
      'Analizăm bonusurile de bun venit, promoțiile regulate, cerințele de rulaj, termenii și condițiile, și valoarea reală a ofertelor pentru jucători.',
    checkpoints: [
      'Bonus de bun venit competitiv',
      'Cerințe de rulaj rezonabile (ideal x30)',
      'Promoții regulate',
      'Termeni și condiții clare',
    ],
  },
  {
    id: 'metode-plata',
    name: 'Metode de Plată',
    icon: 'credit-card',
    shortDescription:
      'Verificăm varietatea metodelor de plată, viteza retragerilor și limitele tranzacțiilor.',
    fullDescription:
      'Evaluăm diversitatea metodelor de plată disponibile, viteza de procesare a retragerilor, comisioanele aplicate, limitele minime și maxime, și suportul pentru criptomonede.',
    checkpoints: [
      'Metode variate (card, e-wallet, crypto)',
      'Retrageri procesate în 24-48h',
      'Limite rezonabile',
      'Comisioane minime sau zero',
    ],
  },
  {
    id: 'experienta-utilizator',
    name: 'Experiența Utilizatorului',
    icon: 'monitor-smartphone',
    shortDescription:
      'Testăm interfața, navigarea, compatibilitatea mobilă și calitatea suportului clienți.',
    fullDescription:
      'Testăm experiența completă a utilizatorului: designul interfeței, navigarea intuitivă, compatibilitatea mobilă, viteza de încărcare, și calitatea suportului clienți 24/7.',
    checkpoints: [
      'Interfață responsive și intuitivă',
      'Compatibilitate mobilă excelentă',
      'Suport clienți 24/7',
      'Timp de încărcare rapid',
    ],
  },
  {
    id: 'licenta',
    name: 'Licență',
    icon: 'badge-check',
    shortDescription:
      'Verificăm validitatea licenței, autoritatea emitentă și istoricul de conformitate.',
    fullDescription:
      'Verificăm existența unei licențe valide de operare, autoritatea emitentă (Curacao, MGA, etc.), istoricul de conformitate al operatorului, și disponibilitatea informațiilor legale pe site.',
    checkpoints: [
      'Licență activă și verificabilă',
      'Autoritate de reglementare recunoscută',
      'Informații legale vizibile pe site',
      'Istoric curat de conformitate',
    ],
  },
];
