# Cazinou.io - Estado del Proyecto

**Fecha:** 27 Enero 2026
**Versión:** 0.1.0
**Repositorio:** https://github.com/Interamplify/cazinou
**Dominio:** https://cazinou.io

---

## 📋 Resumen del Proyecto

Plataforma de afiliados para casinos internacionales accesibles desde Rumanía. Clasifica y recomienda 20 casinos con análisis detallados de bonos, métodos de pago, juegos y licencias.

### Stack Tecnológico

- **Framework:** Next.js 16.1.5 (App Router)
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **TypeScript:** 5.x
- **Node.js:** ≥18.17.0
- **Hosting:** Vercel (configurado)

---

## 🗂️ Estructura del Proyecto

### Rutas Principales

```
/                           - Homepage con 20 casinos, metodología, bonos
/bonus/                     - Landing page de bonos
/bonus/fara-depunere/       - Top 10 casinos con bonus sin depósito
/bonus/rotiri-gratuite/     - Top 20 casinos con rotaciones gratis
/go/[slug]                  - Sistema de redirects de afiliados (con detección de bots)
/robots.txt                 - Generado dinámicamente
/sitemap.xml                - Generado dinámicamente
```

### Arquitectura de Archivos

```
src/
├── app/
│   ├── layout.tsx                 - Layout raíz con Header/Footer
│   ├── page.tsx                   - Homepage
│   ├── not-found.tsx              - Página 404
│   ├── robots.ts                  - Robots.txt dinámico
│   ├── sitemap.ts                 - Sitemap dinámico
│   ├── bonus/
│   │   ├── page.tsx               - Landing de bonos
│   │   ├── fara-depunere/
│   │   │   ├── page.tsx           - Orchestrador de página
│   │   │   └── _components/       - 14 secciones
│   │   └── rotiri-gratuite/
│   │       ├── page.tsx           - Orchestrador de página
│   │       └── _components/       - 14 secciones
│   └── go/[slug]/
│       └── route.ts               - Handler de redirects
│
├── components/
│   ├── layout/
│   │   ├── header.tsx             - Header con dropdown Radix
│   │   ├── mobile-nav.tsx         - Nav móvil con colapsables
│   │   └── footer.tsx             - Footer del sitio
│   ├── sections/                  - Secciones de homepage (15 archivos)
│   ├── shared/
│   │   ├── sticky-toc.tsx         - TOC flotante con auto-scroll
│   │   ├── json-ld.tsx            - Componente para schema
│   │   └── ...
│   ├── casino/                    - Componentes de casino cards
│   └── ui/                        - Radix UI components (11 archivos)
│
├── data/
│   ├── casinos.ts                 - 20 casinos con todos los datos
│   ├── affiliate-links.ts         - URLs reales + afiliados
│   ├── bonuses.ts                 - Definiciones de bonos
│   ├── bonus-fara-depunere.ts     - Data para página sin depósito
│   ├── rotiri-gratuite.ts         - Data para página rotaciones
│   ├── navigation.ts              - Items de navegación
│   ├── content.ts                 - Contenido homepage
│   ├── faqs.ts                    - Preguntas frecuentes
│   ├── providers.ts               - Proveedores de juegos
│   ├── payment-methods.ts         - Métodos de pago
│   └── ...
│
├── lib/
│   ├── constants.ts               - SITE_NAME, SITE_URL, RATING_MAX
│   ├── data-helpers.ts            - getCasinosBySlugs, etc.
│   ├── seo-helpers.ts             - Generadores de JSON-LD
│   ├── format.ts                  - Utilidades de formato
│   └── utils.ts                   - cn() para clases
│
├── types/
│   ├── casino.ts                  - Tipos de casino
│   ├── bonus.ts                   - Tipos de bonus
│   ├── navigation.ts              - NavItem con children
│   └── ...
│
└── middleware.ts                  - Detección de bots para /go/
```

---

## 🎰 Los 20 Casinos

1. **iWild Casino** - 550 FS, rating 9.3/10
2. **VeloBet Casino** - 70 FS, rating 9.1/10
3. **Billionairespin Casino** - 250 FS, rating 9.0/10
4. **FortuneJack Casino** - 5000 FS, rating 8.9/10, rulaj 10x
5. **SpinBetter Casino** - 150 FS, rating 9.4/10
6. **Rolletto Casino** - 200 FS, rating 9.2/10
7. **Flagman Casino** - 500 FS, rating 8.8/10
8. **GambleZen Casino** - 350 FS, rating 8.7/10
9. **Immerion Casino** - 250 FS, rating 8.9/10
10. **Xon Bet Casino** - 550 FS, rating 8.6/10
11. **Cosmobet Casino** - 50 FS, rating 8.5/10
12. **SpinoGambino Casino** - 250 FS, rating 8.8/10
13. **WilderBet Casino** - 325 FS, rating 8.7/10
14. **GGBet Casino** - 900 FS, rating 9.0/10, 50 FS sin depósito
15. **Vavada Casino** - 100 FS, rating 8.9/10, rulaj 25x
16. **Spinch Casino** - 250 FS, rating 8.6/10
17. **National Casino** - 150 FS, rating 8.8/10
18. **Cosmic Slot Casino** - 250 FS, rating 8.7/10, 9000+ juegos
19. **HitnSpin Casino** - 200 FS, rating 8.5/10
20. **Fairspin Casino** - 200 FS, rating 8.6/10

**Todos con:**
- Logos en `/public/images/casinos/`
- Datos completos (bonus, ratings, pros/cons, features)
- URLs de afiliado en `/go/[slug]`

---

## 📄 Páginas de Bonus

### `/bonus/` - Landing de Bonos
- Hero con breadcrumb, stats pills
- 2 tarjetas de categoría (Fara Depunere + Rotiri Gratuite)
- Sección de metodología
- Responsible gaming notice
- SEO completo (Article + Breadcrumb JSON-LD)

### `/bonus/fara-depunere/` - Bonus Sin Depósito
**10 casinos** listados por orden de calidad

**14 secciones:**
1. Hero con stats (10 casinos, bonos 5€-10€, rulaj 30x+)
2. Sticky TOC (11 items)
3. Casino Listing (tabla desktop + cards móvil)
4. Quick Picks (6 recomendaciones: Best Wagering, Best Offer, etc.)
5. Reviews (5 casinos con análisis detallados)
6. Activation Guide (tabla con métodos por casino)
7. Wagering (explicación + tabla comparativa de dificultad)
8. Methodology (8 criterios compactos)
9. Pros & Cons + Dispute Resolution
10. Payment Methods (5 categorías)
11. Withdrawal (4 pasos + tabla de tiempos)
12. FAQ (10 preguntas con Radix Accordion)
13. Responsible Gaming (18+ notice)

**Mejoras vs HTML original:**
- QuickPicks para diferentes tipos de jugadores
- Tabla de wagering por casino con badges de dificultad
- Activation guide diferenciada (Automat / Email / Manual)
- FAQPage schema para rich snippets
- TOC flotante con auto-scroll

### `/bonus/rotiri-gratuite/` - Rotaciones Gratis
**20 casinos** (todos)

**14 secciones:** (similar a fara-depunere)
1. Hero con stats (20 casinos, hasta 5000 FS, rulaj desde 10x)
2. Sticky TOC (11 items)
3. Casino Listing (todos los 20)
4. Quick Picks (Most Spins, Best Wagering, No-Deposit, etc.)
5. Reviews (iWild, VeloBet, Billionairespin, FortuneJack, SpinBetter)
6. **Spin Types** ⭐ ÚNICA - 6 tipos de rotaciones:
   - Rotiri la Înregistrare
   - Rotiri la Depunere
   - Promoții Săptămânale
   - Coduri Bonus Rotiri
   - Rotiri Fără Verificare KYC
   - Rotiri de Ziua Ta
7. Activation Guide (primeros 10, con slot elegible)
8. Wagering (fórmula adaptada para ganancias de FS)
9. Methodology
10. Pros & Cons
11. Payment Methods
12. Withdrawal
13. FAQ (10 específicas de free spins)
14. Responsible Gaming

**Diferencias clave:**
- Muestra 20 casinos vs 10
- SpinTypesSection única
- Datos de activación incluyen slot elegible (Book of Dead, etc.)
- QuickPicks adaptados (FortuneJack 5000 FS, Vavada rulaj 25x, etc.)

---

## 🔄 Sistema de Redirects `/go/[slug]`

### Funcionamiento

```
Usuario hace clic en "Vizitează" → /go/iwild-casino
                                        ↓
                               middleware.ts detecta bot
                                        ↓
                               route.ts GET handler
                                        ↓
                    ┌─────────────────┴──────────────────┐
               Googlebot?                          Usuario normal?
                    ↓                                     ↓
        302 → URL real del casino           302 → URL de afiliado
        (evita penalización)                (o URL real si no hay afiliado)
```

**Middleware (`src/middleware.ts`):**
- Detecta bots: googlebot, bingbot, yandex, etc.
- Añade header `x-is-googlebot: true/false`
- Solo se ejecuta en `/go/:path*`

**Route Handler (`src/app/go/[slug]/route.ts`):**
- Lee `x-is-googlebot` del header
- Bots → URL real del casino
- Usuarios → URL de afiliado (con fallback a URL real)
- Headers de respuesta:
  - `X-Robots-Tag: noindex, nofollow`
  - `Vary: x-is-googlebot`
- Status: 302 (temporal, no cacheado por Google)

**Data (`src/data/affiliate-links.ts`):**
```typescript
export const casinoRealUrls: Record<string, string> = {
  'iwild-casino': 'https://www.iwildcasino.com/',
  // ... todos los 20
};

export const affiliateLinks: Record<string, string> = {
  'iwild-casino': '',  // Vacío por ahora, se llenará con URLs de tracking
  // ...
};
```

---

## 🎨 Sistema de Diseño

### Colores
- **Primary:** Orange-500 (#f97316)
- **Hover:** Orange-600
- **Background:** White, Gray-50/60 para secciones alternas
- **Badges:** Green (Good), Amber (Medium), Red (Bad)

### Tipografía
- **Sans:** Geist
- **Mono:** Geist Mono (usada en headings, badges, números)

### Componentes Reutilizables
- `casino-card.tsx` - Tarjetas de casino
- `sticky-toc.tsx` - TOC flotante con auto-scroll ✅
- `rating-display.tsx` - Estrellas + número
- `casino-badge.tsx` - Badges de licencia
- Radix UI: Accordion, NavigationMenu, Sheet, Tabs, etc.

### Patterns
- Desktop: Tablas con columnas
- Móvil: Cards con stats grid
- Rank badges: 1 = orange-500, 2-3 = orange-400, 4+ = gray-400
- Orange divider antes de H2: `w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto`
- Container: `container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Section padding: `py-14 lg:py-20`

---

## 🔍 SEO Implementado

### Metadata
- `title` template: solo `%s` (sin sufijo)
- `description` optimizada por página
- `canonical` URLs en todas las páginas
- OpenGraph tags (title, description, type: article)
- Language: `ro` (rumano)

### JSON-LD Schemas
1. **Organization** (todas las páginas)
2. **Article** (páginas de contenido)
3. **BreadcrumbList** (todas las páginas)
4. **FAQPage** (páginas con FAQ)

### robots.txt
```
User-agent: *
Allow: /
Disallow: /go/

Sitemap: https://cazinou.io/sitemap.xml
```

### sitemap.xml
```xml
/ - priority 1.0, weekly
/bonus/ - priority 0.9, weekly
/bonus/fara-depunere/ - priority 0.9, weekly
/bonus/rotiri-gratuite/ - priority 0.9, weekly
```

### Security Headers
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 📱 Header Navigation

### Desktop
**Radix NavigationMenu** con dropdown en "Bonusuri":
```
Logo | Top Cazinouri | Categorii | Bonusuri ▼ | Plati | Jocuri | Furnizori | FAQ
                                      ├─ Toate Bonusurile
                                      ├─ Bonus Fără Depunere
                                      └─ Rotiri Gratuite
```

### Mobile
**Sheet** (panel lateral) con accordion colapsable para "Bonusuri"

---

## ⚙️ Configuración de Deployment

### next.config.ts
```typescript
{
  trailingSlash: true,
  images: { formats: ['image/webp'] },
  headers: [/* security headers */]
}
```

### package.json
```json
{
  "engines": { "node": ">=18.17.0" },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### Vercel
- Auto-detecta Next.js
- Build command: `next build`
- Output directory: `.next`
- No env vars requeridas
- Build time: ~3s local, ~60s Vercel estimado

---

## 📊 Estado de Build

**Último build:** ✅ Exitoso

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /bonus
├ ○ /bonus/fara-depunere
├ ○ /bonus/rotiri-gratuite
├ ƒ /go/[slug]
├ ○ /robots.txt
└ ○ /sitemap.xml

○ (Static)   - Pre-renderizado
ƒ (Dynamic)  - Renderizado bajo demanda
```

**Warnings (no bloquean deployment):**
- Middleware deprecation (funcional hasta Next.js 17+)
- Turbopack root inference (solo afecta dev local)

---

## 🚀 Commits del Proyecto

1. **191942e** - Initial commit from Create Next App
2. **21a8126** - Add full casino platform (130 archivos, 11,938 inserciones)
   - Homepage, bonus pages, /go/ redirects, header navigation
3. **30d411d** - Add Vercel deployment config
   - Security headers, robots.txt, sitemap.xml, engines field
4. **885c992** - Auto-scroll sticky TOC on mobile
   - Fix para mantener sección activa visible

---

## 📝 Datos Técnicos por Archivo

### src/data/casinos.ts
- 20 casinos completos
- Cada uno con: name, slug, logo, ratings (6 categorías), bonusTitle, bonusPercentage, bonusMaxAmount, bonusCurrency, freeSpins, wageringRequirement, license, features (array), pros (array), cons (array), affiliateUrl

### src/data/affiliate-links.ts
- `casinoRealUrls`: 20 URLs reales
- `affiliateLinks`: 20 slots (vacíos, para rellenar con tracking)

### src/data/bonus-fara-depunere.ts
- `faraDepunereSlugs`: array de 10 slugs en orden de ranking
- `faraDepunereFaqs`: 7 preguntas con respuestas
- `tocItems`: 10 items del TOC

### src/data/rotiri-gratuite.ts
- `rotiriGratuiteSlugs`: array de 20 slugs (todos los casinos)
- `rotiriGratuiteFaqs`: 10 preguntas específicas de free spins
- `tocItems`: 11 items (incluye 'tipuri')

---

## 🎯 Próximos Pasos Sugeridos

### Contenido
- [ ] Rellenar URLs de afiliado en `affiliate-links.ts`
- [ ] Añadir páginas de casino individual `/casino/[slug]/`
- [ ] Crear página `/metode-plata/`
- [ ] Crear página `/furnizori/`
- [ ] Añadir blog `/blog/` para SEO long-tail

### SEO
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics 4
- [ ] Crear más internal linking entre páginas
- [ ] Añadir schema de Review para casinos individuales

### Funcionalidad
- [ ] Implementar filtros en casino listing
- [ ] Añadir búsqueda de casinos
- [ ] Newsletter signup (si aplica)
- [ ] Sistema de favoritos (localStorage)

### Performance
- [ ] Optimizar imágenes (ya están en webp, verificar tamaños)
- [ ] Lazy load de secciones no críticas
- [ ] Preconnect a dominios de afiliados

### Analytics
- [ ] Trackear clics en /go/ redirects
- [ ] Heatmaps de interacción
- [ ] A/B testing de CTAs

---

## 🐛 Issues Conocidos

**Ninguno crítico.** Todo funcional para deployment.

**Warnings de Build:**
1. Middleware deprecation - Funcional, migrar a proxy en Next.js 17+
2. Turbopack root - Solo afecta dev local con múltiples lockfiles

---

## 📞 Contacto del Proyecto

- **Email:** andrei@cazinou.io
- **Dominio:** cazinou.io
- **GitHub:** https://github.com/Interamplify/cazinou
- **Framework:** Next.js 16.1.5
- **Deployment:** Vercel

---

## 📚 Documentación de Referencia

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vercel Deployment](https://vercel.com/docs)

---

**Última actualización:** 27 Enero 2026
**Autor:** Claude Opus 4.5 con Jose Baraza
