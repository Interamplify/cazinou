import { HeroSection } from '@/components/sections/hero-section';
import { CasinoListingSection } from '@/components/sections/casino-listing-section';
import { TopReviewsSection } from '@/components/sections/top-reviews-section';
import { CategoryPicksSection } from '@/components/sections/category-picks-section';
import { MethodologySection } from '@/components/sections/methodology-section';
import { BonusComparisonSection } from '@/components/sections/bonus-comparison-section';
import { BonusCalculatorSection } from '@/components/sections/bonus-calculator-section';
import { PaymentMethodsSection } from '@/components/sections/payment-methods-section';
import { GameCategoriesSection } from '@/components/sections/game-categories-section';
import { ProvidersSection } from '@/components/sections/providers-section';
import { MobileCasinoSection } from '@/components/sections/mobile-casino-section';
import { ProsConsSection } from '@/components/sections/pros-cons-section';
import { SafePlaySection } from '@/components/sections/safe-play-section';
import { FAQSection } from '@/components/sections/faq-section';
import { ResponsibleGamingSection } from '@/components/sections/responsible-gaming-section';
import { JsonLd } from '@/components/shared/json-ld';
import { StickyToc } from '@/components/shared/sticky-toc';
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo-helpers';
import { tocItems } from '@/data/content';

export default function HomePage() {
  const articleJsonLd = generateArticleJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd();

  return (
    <article className="bg-white">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <HeroSection />
      <StickyToc items={tocItems} />
      <CasinoListingSection />
      <TopReviewsSection />
      <CategoryPicksSection />
      <MethodologySection />
      <BonusComparisonSection />
      <BonusCalculatorSection />
      <PaymentMethodsSection />
      <GameCategoriesSection />
      <ProvidersSection />
      <MobileCasinoSection />
      <ProsConsSection />
      <SafePlaySection />
      <FAQSection />
      <ResponsibleGamingSection />
    </article>
  );
}
