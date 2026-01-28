# Content Creation Guidelines for Cazinou.io

This document outlines the methodology and principles used to create high-quality, SEO-optimized content for casino bonus pages.

---

## 📋 Table of Contents

1. [Content Creation Process](#content-creation-process)
2. [HTML Reference Analysis](#html-reference-analysis)
3. [Content Improvement Principles](#content-improvement-principles)
4. [Page Structure Template](#page-structure-template)
5. [Section-by-Section Guidelines](#section-by-section-guidelines)
6. [Writing Style Guide](#writing-style-guide)
7. [SEO Requirements](#seo-requirements)
8. [Data Requirements](#data-requirements)

---

## Content Creation Process

### Step 1: Analyze Reference HTML

When provided with a reference HTML file from a competitor or existing page:

1. **Extract H1 and Title**
   - Identify the main heading
   - Note the meta title format
   - Determine target keywords

2. **Map H2 Structure**
   - List all H2 headings in order
   - Identify section hierarchy
   - Note which sections are educational vs actionable

3. **Extract Casino List**
   - Identify all casinos mentioned
   - Note their ranking order
   - Extract any casino-specific data (bonus amounts, wagering, etc.)

4. **Extract FAQ Content**
   - List all questions
   - Note if answers are present in HTML
   - If answers are missing, write them based on context

5. **Identify Unique Elements**
   - Special sections not in other pages
   - Comparison tables
   - Interactive elements
   - Data visualizations

### Step 2: Identify Gaps and Opportunities

Compare the reference HTML against our quality standards:

- **Missing actionable content?** Add Quick Picks, per-casino tables
- **Too much education?** Replace with practical guides
- **No data-driven comparisons?** Add wagering tables, activation guides
- **Missing SEO elements?** Add TOC, FAQPage schema, breadcrumbs
- **Poor mobile UX?** Add responsive cards, collapsible sections

### Step 3: Design Improved Structure

Create a section list that:
- Keeps useful content from reference
- Adds missing actionable sections
- Removes or condenses verbose educational content
- Follows our 13-14 section template

### Step 4: Create Data File

Create `src/data/[page-slug].ts` with:
```typescript
export const [page]Slugs = ['casino-1', 'casino-2', ...];
export const [page]Faqs = [{ question, answer }, ...];
export const tocItems = [{ id, label }, ...];
```

### Step 5: Build Components in Parallel

Use background agents to create sections simultaneously:
- Agent 1: Hero + Listing + Quick Picks
- Agent 2: Reviews + Unique Section
- Agent 3: Activation + Wagering + Methodology
- Agent 4: Pros/Cons + Payment + Withdrawal + FAQ

### Step 6: Create Page Orchestrator

Build `page.tsx` with:
- Metadata (title, description, canonical)
- JSON-LD schemas
- All section imports in correct order

---

## HTML Reference Analysis

### What to Extract

**1. Metadata**
```
✓ Page title
✓ Meta description
✓ Canonical URL
✓ H1 heading
✓ Language (ro for Romanian)
```

**2. Content Structure**
```
✓ All H2 headings
✓ Casino names and ranking
✓ Bonus values mentioned
✓ Wagering requirements
✓ FAQ questions
```

**3. Missing Elements (Usually)**
```
✗ TOC/navigation
✗ Per-casino comparison tables
✗ Actionable quick picks
✗ FAQPage structured data
✗ Detailed reviews (usually only top 3)
✗ Activation instructions per casino
```

### Example Analysis Output

```markdown
# Analysis: rotiri-gratuiti.html

## Extracted Data
- H1: "Rotiri Gratuite 2026"
- Meta Title: "Rotiri Gratuite Casino 🏅 Oferte Free Spins Cu & Fara Depunere"
- Casinos Listed: 20 (same as our database)
- H2 Sections: 11 (mostly educational)
- FAQ Questions: 10 (answers not rendered)
- Unique Elements: None
- TOC: Not present

## Gaps Identified
- No actionable "Quick Picks" section
- Missing per-casino activation guide
- No wagering comparison table
- FAQs missing answers
- No section about types of free spins
- Reviews only for top 3 (not 5)
- No sticky TOC navigation

## Improvement Plan
- Add 6 Quick Picks cards (Most Spins, Best Wagering, etc.)
- Create SpinTypesSection (6 types of bonuses)
- Build per-casino activation table with slot eligibility
- Add wagering difficulty comparison table
- Write full FAQ answers
- Expand reviews to top 5
- Add sticky TOC with auto-scroll
```

---

## Content Improvement Principles

### 1. Actionable Over Educational

**❌ Bad (Too Educational):**
```
What Are Free Spins?
Free spins are promotional offers that allow players to spin
slot machine reels without using their own money...
[500 words of explanation]
```

**✅ Good (Actionable):**
```
Quick Picks — Best Casino for Free Spins
[6 cards with specific recommendations and CTAs]
```

### 2. Data-Driven Comparisons

Always include tables or grids that let users compare:
- Wagering requirements by casino
- Activation methods
- Max cashout limits
- Expiry periods
- Eligible games/slots

**Example:**
```
Per-Casino Wagering Comparison
[Table with 20 rows, difficulty badges, CTA buttons]
```

### 3. Per-Casino Specificity

Never write generic content. Always differentiate:

**❌ Generic:**
```
Casinos offer various activation methods.
```

**✅ Specific:**
```
Activation Guide — First 10 Casinos

Casino          | Method              | Slot Eligibil
----------------|---------------------|---------------
Rolletto        | Automat             | Book of Dead
National Casino | Activare din cont   | Starburst
VeloBet         | Verificare email    | Sweet Bonanza
```

### 4. Condense Educational Content

If educational content is necessary:
- Use compact card grids instead of long paragraphs
- Visual hierarchy over walls of text
- Icons and badges for scanability

**Before:**
```
8 full cards with 3-4 paragraphs each explaining methodology
```

**After:**
```
8 compact cards in 4-column grid with:
- Icon + title
- Weight badge (if applicable)
- Single-line description
```

### 5. Mobile-First Design

Every section must work perfectly on mobile:
- Desktop: Tables
- Mobile: Cards with stat grids
- Horizontal scroll for TOC navigation
- Collapsible FAQ with Radix Accordion

### 6. SEO-First Content

Every page must include:
- JSON-LD: Article + BreadcrumbList + FAQPage
- Sticky TOC for internal linking
- Canonical URLs
- H1 with target keyword
- Meta description with CTA

---

## Page Structure Template

### Standard 14-Section Structure

```typescript
1.  HeroSection
    - Breadcrumb (Acasa > Bonus > [Page])
    - Date updated
    - H1 with keyword + orange highlight
    - Intro paragraph (2-3 sentences, actionable)
    - 3 stat pills (Shield, TrendingUp, Award icons)

2.  StickyToc
    - Floating navigation bar
    - Auto-scroll to keep active section visible
    - 10-11 items

3.  CasinoListingSection
    - H2: "Tabel Comparativ — Top X Cazinouri cu [Bonus Type]"
    - Desktop: 8-column table
    - Mobile: Cards with rank badge, logo, stats grid
    - Top 3 highlighted with orange styling

4.  QuickPicksSection
    - H2: "Recomandări Rapide — Cel Mai Bun Casino Pentru [Feature]"
    - 6 cards in 3-column grid
    - Each card: Icon, label, casino logo, reason, CTA
    - Different color schemes per category

5.  ReviewsSection
    - H2: "Recenzii Individuale — Top 5 [Bonus Type]"
    - 5 detailed reviews
    - Each review: Rank badge, logo, score, tagline, 3 subsections, verdict, CTA banner

6.  UniqueSection (varies by page type)
    - Bonus Fara Depunere: (none, reuses other sections)
    - Rotiri Gratuite: SpinTypesSection (6 types of free spins)
    - Future pages: customize as needed

7.  ActivationGuideSection
    - H2: "Cum Activezi [Bonus] la Fiecare Cazinou"
    - Per-casino table with: Method, Slot/Code, Max Cashout, Expiry
    - First 10 casinos
    - Differentiated activation methods

8.  WageringSection
    - H2: "Condiții de Rulaj pentru [Bonus]"
    - Explanation cards (2-column: What is Wagering + Tiers)
    - Per-casino comparison table with difficulty badges
    - Game contributions chart
    - Mistakes callout (5 common errors)

9.  MethodologySection
    - H2: "Cum Selectăm Cazinourile"
    - Weight pills bar (5 weighted criteria)
    - 8 criteria in compact 4-column grid

10. ProsConsSection
    - H2: "Avantaje, Dezavantaje și Rezolvarea Problemelor"
    - 2-column: Green pros + Red cons
    - Dispute resolution (4 steps)
    - Verdict box

11. PaymentMethodsSection
    - H2: "Metode de Plată la Cazinourile cu [Bonus]"
    - 4 stat pills (speed, categories, security, instant)
    - 5 payment method cards (E-Wallets, Crypto, Cards, Bank, Vouchers)

12. WithdrawalSection
    - H2: "Cum Retragi Câștigurile din [Bonus]"
    - 4 steps (Verify Wagering, Complete KYC, Request, Receive)
    - Payment timing table (desktop + mobile)
    - Warning about max cashout cap

13. FaqSection
    - H2: "Întrebări Frecvente (FAQ)"
    - Radix Accordion with 7-10 questions
    - Full answers written, not just questions

14. ResponsibleGamingSection
    - 18+ orange-bordered card
    - Hotline number (0800 800 099)
    - Link to jocresponsabil.ro
```

---

## Section-by-Section Guidelines

### HeroSection

**Purpose:** Immediately communicate page value and build trust

**Required Elements:**
```tsx
- Breadcrumb navigation
- Date badge (Actualizat: Ianuarie 2026)
- H1 with brand color highlight on key phrase
- 2-3 sentence intro (actionable, not educational)
- 3 stat pills with icons
```

**H1 Formula:**
```
Top [Number] Cazinouri cu [Bonus Type] 2026
OR
Cele Mai Bune [Feature] la Cazinouri Internaționale 2026
```

**Stat Pills:**
- Number of casinos tested
- Key value prop (amount, wagering, etc.)
- Unique selling point

**Example:**
```tsx
<h1>
  Top Cazinouri cu Rotiri{' '}
  <span className="text-orange-500">Gratuite</span> 2026
</h1>

Stats:
- 20 cazinouri testate (Shield icon, green)
- Până la 5.000 FS (TrendingUp icon, orange)
- Rulaj de la 10x (Award icon, amber)
```

### QuickPicksSection

**Purpose:** Help users quickly find the best casino for their specific need

**Required Elements:**
```tsx
- H2 with "Recomandări Rapide"
- 6 cards in responsive grid (sm:2, lg:3)
- Each card has unique color scheme
- Icon + label + casino logo + stats + reason + CTA
```

**6 Standard Categories:**
1. Best Wagering
2. Best Offer/Most Value
3. Most Games
4. Best for Crypto
5. Fastest Withdrawals
6. Best VIP/Loyalty

**Color Schemes:**
```tsx
const picks = [
  { color: 'border-green-200 bg-green-50/30', icon: Trophy },
  { color: 'border-orange-200 bg-orange-50/30', icon: Gift },
  { color: 'border-blue-200 bg-blue-50/30', icon: Gamepad2 },
  { color: 'border-amber-200 bg-amber-50/30', icon: Coins },
  { color: 'border-cyan-200 bg-cyan-50/30', icon: Zap },
  { color: 'border-purple-200 bg-purple-50/30', icon: Crown },
];
```

### ReviewsSection

**Purpose:** Provide in-depth analysis of top 5 casinos

**Structure per Review:**
```
┌─────────────────────────────────────────┐
│ Header: Rank badge + Logo + Name + Score│
├─────────────────────────────────────────┤
│ 3 Subsections:                          │
│   1. Platformă și Jocuri (Gamepad2)     │
│   2. Ofertă [Bonus] (Gift)              │
│   3. Plăți și Retragere (CreditCard)    │
├─────────────────────────────────────────┤
│ Verdict: Pros + Cons + Rating bars      │
├─────────────────────────────────────────┤
│ CTA Banner: Orange gradient with button │
└─────────────────────────────────────────┘
```

**Review Data Required:**
```typescript
{
  tagline: string;        // 1 sentence hook
  platform: string;       // 2-3 sentences about games/providers
  bonuses: string;        // 2-3 sentences about bonus details
  payments: string;       // 2-3 sentences about payment methods
  bonusValidity: string;  // e.g., "7 zile", "30 zile"
}
```

**Writing Guidelines:**
- Platform: Mention number of games, key providers, mobile support
- Bonuses: Explain distribution, wagering, special programs
- Payments: List methods, timeframes, limits
- Keep each paragraph 2-3 sentences max

### ActivationGuideSection

**Purpose:** Show exact steps to claim bonus at each casino

**Desktop Table Columns:**
```
Casino | Rotiri/Bonus | [Slot/Code] | Activare | Rulaj | Max Câștig | Expirare | CTA
```

**Differentiate Activation Methods:**
- "Automat la înregistrare" (most common)
- "Verificare email" (requires email confirm)
- "Activare din cont" (manual in account settings)
- "Cod promoțional: XXX" (needs bonus code)

**Mobile Cards:**
```
Casino name
Bonus amount
4 stat boxes (Rulaj, Max Câștig, Slot/Code, Expirare)
CTA button
```

### WageringSection

**Purpose:** Explain wagering requirements and help users compare

**4 Required Parts:**

1. **Explanation Cards (2-column)**
   - Left: "Ce Înseamnă Rulaj?" with formula example
   - Right: "Clasificare Condiții" with 5 tiers (visual bars)

2. **Per-Casino Comparison Table**
   - All casinos with wagering requirement
   - `getDifficultyBadge()` function:
     - < 30x: Excelent (green)
     - 30-35x: Bun (emerald)
     - 36-45x: Acceptabil (amber)
     - 46-50x: Dificil (orange)
     - > 50x: De evitat (red)

3. **Game Contributions Chart**
   - 5 game types with contribution percentage bars
   - Sloturi: 100%, Video Poker: 10-25%, etc.

4. **Mistakes Callout**
   - Red-bordered box with 5 common errors
   - Icon: AlertTriangle
   - Grid: 3 columns on desktop

### MethodologySection

**Purpose:** Build trust by showing evaluation process

**Structure:**
```
Weight Pills Bar (top)
[30%] [25%] [20%] [15%] [10%]

8 Criteria Cards (4-column grid)
Each card:
- Icon + Title
- Weight badge (if weighted)
- 1-line description
```

**8 Standard Criteria:**
1. Licență Validă (30%) - Shield icon
2. Metode de Plată (25%) - CreditCard icon
3. Selecție Jocuri (20%) - Gamepad2 icon
4. Termeni Bonus (15%) - Gift icon
5. UX & Suport (10%) - Smartphone icon
6. Joc Responsabil (null) - BadgeCheck icon
7. Reputație (null) - Scale icon
8. Transparență (null) - Eye icon

### FaqSection

**Purpose:** Answer common questions + SEO (FAQPage schema)

**Requirements:**
```tsx
- Radix Accordion (type="single", collapsible)
- 7-10 questions minimum
- Full answers (not just questions)
- Orange highlight on open state
- Wrapped in max-w-2xl container
```

**Question Format:**
- Start with "Pot...", "Cum...", "Ce...", "Care..."
- Be specific to bonus type
- Address real user concerns

**Answer Format:**
- 2-4 sentences
- Include specific examples with numbers
- End with actionable guidance when possible

**Example:**
```typescript
{
  question: 'Pot câștiga bani reali cu un bonus fără depunere?',
  answer: 'Da. Câștigurile obținute din bonusul fără depunere sunt bani reali, dar trebuie să îndeplinești cerințele de rulaj și să respecți plafonul maxim de retragere (de obicei 50–100€) înainte de a putea retrage.',
}
```

---

## Writing Style Guide

### Tone and Voice

**Romanian Language:**
- Formal "tu" form (second person singular)
- Professional but approachable
- Direct and action-oriented

**Writing Principles:**
1. **Clarity over cleverness** - No puns or wordplay
2. **Specificity over generalization** - Use exact numbers
3. **Action over education** - Tell users what to do
4. **Facts over opinions** - Data-driven statements

### Word Choice

**Prefer:**
- "Primești" over "Vei primi"
- "Joacă" over "Poți juca"
- "Verifică" over "Este recomandat să verifici"
- Concrete numbers over ranges ("35x" not "între 30-40x")

**Avoid:**
- Superlatives without data ("cel mai bun", "perfect", "unic")
- Passive voice
- Unnecessary qualifiers ("destul de", "relativ", "cam")
- English loanwords when Romanian equivalent exists

### Formatting

**Numbers:**
- Use periods for thousands: "5.000" not "5,000"
- Currency after number: "100€" not "€100"
- Percentages: "30%" with no space

**Lists:**
- Bullet points for unordered items
- Numbered lists only for sequences
- Max 5-7 items per list

**Emphasis:**
- Use `<strong>` for important terms
- Use orange color for brand highlights
- Use badges for categorical data (Good/Bad/Medium)

---

## SEO Requirements

### Every Page Must Have

**1. Metadata**
```typescript
export const metadata: Metadata = {
  title: 'Keyword-rich title under 60 chars',
  description: 'Call-to-action description 150-160 chars',
  alternates: { canonical: '/page-url/' },
  openGraph: {
    title: 'Same as title or variation',
    description: 'Same as description',
    type: 'article',
  },
};
```

**2. JSON-LD Schemas**
```typescript
// Always include:
- Article schema (headline, url, author, dates)
- BreadcrumbList schema (for navigation)

// When applicable:
- FAQPage schema (if FAQ section exists)
- Review schema (future: for individual casinos)
```

**3. Structured Headings**
```
H1 - One per page, includes main keyword
H2 - Section titles, descriptive
H3 - Subsection titles within H2 sections
```

**4. Internal Linking**
```tsx
// Link to related pages
<Link href="/bonus/">Toate Bonusurile</Link>
<Link href="/bonus/rotiri-gratuite/">Rotiri Gratuite</Link>

// Link to homepage sections
<Link href="/#top-cazinouri">Top Cazinouri</Link>
```

### Keyword Strategy

**Primary Keywords:**
- Bonus fără depunere
- Rotiri gratuite
- Free spins
- Casino online
- Cazinouri internaționale

**Long-tail Keywords:**
- "Cum activez rotirile gratuite la [Casino]"
- "Ce rulaj are bonusul fără depunere la [Casino]"
- "Cel mai bun casino cu rotiri gratuite 2026"

**Placement:**
- H1: Include primary keyword
- First paragraph: Include primary + 1 long-tail
- H2s: Variations of primary keyword
- Image alt text: Descriptive with brand names

---

## Data Requirements

### Per-Casino Data Structure

Every casino in `src/data/casinos.ts` must have:

```typescript
interface Casino {
  // Identity
  slug: string;                    // URL-safe identifier
  name: string;                    // Display name
  logo: string;                    // Path to logo (/images/casinos/...)

  // Ratings (1-10 scale)
  ratings: {
    securitate: number;
    catalogJocuri: number;
    bonusuri: number;
    metodePlata: number;
    experientaUtilizator: number;
    licenta: number;
  };
  overallRating: number;           // Weighted average

  // Bonus Info
  bonusTitle: string;              // Short description
  bonusPercentage: number;         // Deposit match %
  bonusMaxAmount: number;          // Max bonus amount
  bonusCurrency: string;           // EUR, RON, etc.
  freeSpins: number;               // Number of free spins
  wageringRequirement: number;     // Wagering multiplier

  // Metadata
  license: string;                 // MGA, Curaçao, etc.
  features: string[];              // Array of 3-5 features
  pros: string[];                  // Array of 3-5 pros
  cons: string[];                  // Array of 2-3 cons
  affiliateUrl: string;            // /go/[slug] redirect
}
```

### FAQ Data Structure

```typescript
interface FAQ {
  question: string;                // Full question with ?
  answer: string;                  // 2-4 sentence answer
}

export const faqs: FAQ[] = [
  {
    question: 'Question in Romanian?',
    answer: 'Detailed answer with specific examples and numbers.',
  },
  // ... 7-10 total
];
```

### TOC Data Structure

```typescript
interface TocItem {
  id: string;                      // Matches section id
  label: string;                   // Short display label
}

export const tocItems: TocItem[] = [
  { id: 'top-cazinouri', label: 'Top 10' },
  { id: 'recomandari', label: 'Recomandări' },
  // ... 10-11 total
];
```

---

## Quality Checklist

Before publishing any page, verify:

### Content Quality
- [ ] All casino names spelled correctly
- [ ] All numbers/stats verified against source
- [ ] No Lorem Ipsum or placeholder text
- [ ] All links work (internal + external)
- [ ] Romanian language correct (no Google Translate errors)

### SEO
- [ ] H1 includes target keyword
- [ ] Meta description under 160 characters
- [ ] All images have alt text
- [ ] Canonical URL set correctly
- [ ] JSON-LD validates (use Google Rich Results Test)
- [ ] FAQPage schema for FAQ sections

### Design
- [ ] Mobile cards display correctly
- [ ] Desktop tables don't overflow
- [ ] All buttons have hover states
- [ ] Orange accent color used consistently
- [ ] Sticky TOC scrolls to active section
- [ ] All icons load correctly

### Functionality
- [ ] Sticky TOC navigation works
- [ ] Accordion FAQ expands/collapses
- [ ] All CTAs link to correct /go/ redirects
- [ ] Section anchor links work
- [ ] Build completes without errors

### Accessibility
- [ ] All buttons have aria-labels
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader can navigate sections

---

## Examples Repository

### Good Example: Rotiri Gratuite Page

**What Makes It Good:**
1. ✅ SpinTypesSection unique to this page
2. ✅ Per-casino activation table with slot eligibility
3. ✅ Wagering comparison table with difficulty badges
4. ✅ 6 Quick Picks for different user types
5. ✅ Reviews expanded to top 5 (not just 3)
6. ✅ FAQ answers written (not just questions)
7. ✅ All 14 sections follow template

**Metrics:**
- Build time: 3s
- Routes: 4 pages
- Components: 14 per bonus page
- SEO: 4 JSON-LD schemas per page

### Reference HTML vs Our Implementation

**Reference HTML (rotiri-gratuiti.html):**
- ❌ No TOC navigation
- ❌ Only 3 casinos reviewed
- ❌ No per-casino activation data
- ❌ FAQ questions without answers
- ❌ Educational sections dominate
- ❌ No FAQPage schema

**Our Implementation:**
- ✅ Sticky TOC with auto-scroll
- ✅ 5 casinos with detailed reviews
- ✅ Activation guide for 10 casinos
- ✅ All FAQ answers written
- ✅ Actionable Quick Picks section
- ✅ Complete FAQPage schema

---

## Version History

- **v1.0** (Jan 27, 2026) - Initial guidelines based on rotiri-gratuite and fara-depunere pages
- Created by: Jose Baraza + Claude Opus 4.5

---

## Future Additions

As we create more pages, document here:

### Page Type: Casino Reviews (Future)
- Section template for individual casino pages
- Rating methodology details
- Comparison widgets

### Page Type: Payment Methods (Future)
- Payment provider structure
- Fee comparison tables
- Processing time data

### Page Type: Game Guides (Future)
- Game type taxonomies
- Provider comparison
- RTP data presentation

---

**End of Guidelines**

For project status and architecture, see: [PROJECT_STATUS.md](./PROJECT_STATUS.md)
