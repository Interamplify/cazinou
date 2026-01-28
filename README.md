# Cazinou.io

Plataforma de afiliados para casinos internacionales accesibles desde Rumanía. Análisis detallados de 20 casinos con información sobre bonos, métodos de pago, juegos y licencias.

## 🚀 Stack Tecnológico

- **Next.js 16.1.5** (App Router)
- **React 19.2.3**
- **Tailwind CSS v4**
- **Radix UI**
- **TypeScript 5.x**
- **Node.js ≥18.17.0**

## 📂 Rutas Principales

```
/                           - Homepage con 20 casinos
/bonus/                     - Landing de bonos
/bonus/fara-depunere/       - Top 10 bonus sin depósito
/bonus/rotiri-gratuite/     - Top 20 rotaciones gratis
/go/[slug]                  - Sistema de redirects de afiliados
```

## 🎰 Los 20 Casinos

1. iWild Casino (9.3/10)
2. VeloBet Casino (9.1/10)
3. Billionairespin Casino (9.0/10)
4. FortuneJack Casino (8.9/10) - 5000 FS, rulaj 10x
5. SpinBetter Casino (9.4/10)
6. ... y 15 más

Todos con análisis completos de bonos, pros/cons, ratings detallados.

## 🛠️ Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/Interamplify/cazinou.git
cd cazinou

# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Ejecutar build
npm start
```

El proyecto estará disponible en `http://localhost:3000`

## 🌐 Deployment en Vercel

El proyecto está configurado para deployment automático en Vercel:

1. Conecta el repositorio en Vercel
2. Vercel auto-detecta Next.js
3. Build automático en cada push a `main`

No requiere variables de entorno.

## 🔄 Sistema de Redirects `/go/[slug]`

Sistema inteligente de redirects de afiliados con detección de bots:

- **Usuarios normales** → Redirigidos a URLs de afiliado
- **Bots de búsqueda** → Redirigidos a URLs reales del casino (evita penalización SEO)

Implementado con middleware de Next.js + route handlers.

## 📱 Características

### SEO Optimizado
- JSON-LD schemas (Organization, Article, BreadcrumbList, FAQPage)
- Sitemap.xml dinámico
- Robots.txt configurado
- Meta tags completos
- Canonical URLs

### Diseño Responsive
- Desktop: Tablas y grids
- Móvil: Cards optimizadas
- Sticky TOC con auto-scroll
- Header con dropdown (Radix UI)

### Seguridad
- Headers de seguridad configurados
- X-Frame-Options, X-Content-Type-Options
- Referrer Policy
- Permissions Policy

## 📋 Estructura del Proyecto

```
src/
├── app/                    # Rutas y páginas
├── components/             # Componentes reutilizables
│   ├── layout/            # Header, Footer, Mobile Nav
│   ├── sections/          # Secciones de homepage
│   ├── shared/            # TOC, JSON-LD, etc.
│   ├── casino/            # Cards y componentes de casino
│   └── ui/                # Radix UI components
├── data/                  # Datos de casinos, bonos, FAQs
├── lib/                   # Utilidades y helpers
└── types/                 # Tipos de TypeScript
```

## 🎨 Sistema de Diseño

- **Colores:** Orange-500 (primary), Gray escala
- **Tipografía:** Geist Sans + Geist Mono
- **Componentes:** Radix UI para accesibilidad
- **Styling:** Tailwind CSS v4

## 📄 Documentación Completa

Para documentación detallada del proyecto, estructura de archivos, y estado actual, ver:

👉 **[PROJECT_STATUS.md](./PROJECT_STATUS.md)**

## 📝 Licencia

Proyecto privado de Interamplify.

## 👥 Autores

- **Jose Baraza** - Interamplify
- **Claude Opus 4.5** - Desarrollo asistido por IA

---

**Website:** https://cazinou.io
**Contact:** andrei@cazinou.io
