import { casinos } from '@/data/casinos';
import { gameCategories } from '@/data/games';
import { providers } from '@/data/providers';
import { paymentMethods } from '@/data/payment-methods';
import { faqs } from '@/data/faqs';
import { evaluationCriteria } from '@/data/evaluation-criteria';
import { bonusTypes } from '@/data/bonuses';
import { categoryPicks } from '@/data/content';
import type { Casino } from '@/types/casino';
import type { Provider } from '@/types/provider';
import type { PaymentMethod } from '@/types/payment';
import type { BonusType } from '@/types/bonus';
import type { EvaluationCriterion, FAQ } from '@/types/navigation';

export function getAllCasinos(): Casino[] {
  return casinos;
}

export function getTopCasinos(count: number = 20): Casino[] {
  return casinos.slice(0, count);
}

export function getCasinosBySlugs(slugs: string[]): Casino[] {
  return slugs
    .map((slug) => casinos.find((c) => c.slug === slug))
    .filter((c): c is Casino => c !== undefined);
}

export function getCategoryPicks() {
  return categoryPicks.map((pick) => ({
    ...pick,
    casinos: getCasinosBySlugs(pick.casinoSlugs),
  }));
}

export function getGameCategories() {
  return gameCategories;
}

export function getAllProviders(): Provider[] {
  return providers;
}

export function getDepositMethods(): PaymentMethod[] {
  return paymentMethods.filter((p) => p.type === 'depunere' || p.type === 'ambele');
}

export function getWithdrawalMethods(): PaymentMethod[] {
  return paymentMethods.filter((p) => p.type === 'retragere' || p.type === 'ambele');
}

export function getAllPaymentMethods(): PaymentMethod[] {
  return paymentMethods;
}

export function getAllBonusTypes(): BonusType[] {
  return bonusTypes;
}

export function getAllFAQs(): FAQ[] {
  return faqs;
}

export function getAllEvaluationCriteria(): EvaluationCriterion[] {
  return evaluationCriteria;
}
