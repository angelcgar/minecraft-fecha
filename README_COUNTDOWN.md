# Página de Countdown - Minecraft Próxima Actualización

## 📋 Descripción

Página web con contador regresivo para la próxima actualización de Minecraft, implementada con Astro, TypeScript avanzado y siguiendo el design system **Tectonic Editorial**.

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   └── Countdown.astro          # Componente de countdown con lógica reactiva
├── config/
│   └── constants.ts             # Configuración y design tokens
├── layouts/
│   └── BaseLayout.astro         # Layout base con SEO y fuentes
├── pages/
│   └── index.astro              # Página principal
└── types/
    └── countdown.ts             # Tipos TypeScript avanzados
```

## 🎨 Design System: Tectonic Editorial

### Principios Aplicados

1. **0px Border Radius**: Todos los elementos usan esquinas rectas (border-radius: 0)
2. **Sin Líneas Divisorias**: Se usan bloques de color para separar secciones
3. **Tipografía Brutalist**: Space Grotesk para títulos, Work Sans para cuerpo
4. **Profundidad Tonal**: Sistema de capas usando surface-container-*
5. **Asimetría Intencional**: Layout con jerarquía visual clara

### Paleta de Colores

- **Primary (Grass)**: `#8cda70` / `#3c8527`
- **Secondary (Earth)**: `#e2c0a9` / `#5c4433`
- **Tertiary (Sky)**: `#a2c9ff` / `#0077d0`
- **Surface**: Escala de grises oscuros con jerarquía tonal

## 🔧 Características Técnicas

### TypeScript Avanzado

- **Tipos Inmutables**: Uso de `readonly` en todas las interfaces
- **Literal Types**: `TimeUnit` con valores específicos
- **Mapped Types**: `TimeUnitConfig` con Record<>
- **Type Guards**: Validación de tipos en runtime
- **Const Assertions**: `as const` para objetos inmutables

### Accesibilidad (WCAG 2.2)

- ✅ Estructura semántica HTML5 (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- ✅ ARIA labels y live regions (`aria-live="polite"`, `aria-atomic="true"`)
- ✅ Contraste de color AAA (verificado con design tokens)
- ✅ Navegación por teclado con focus-visible
- ✅ Texto alternativo en imágenes
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Landmarks ARIA implícitos

### SEO

- ✅ Meta tags completos (title, description, canonical)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Estructura semántica
- ✅ Preload de fuentes críticas
- ✅ Lazy loading de imágenes no críticas
- ✅ Sitemap-ready (estructura de URLs limpia)

### Performance

- ✅ Fuentes WOFF2 optimizadas con `font-display: swap`
- ✅ Preload de recursos críticos
- ✅ CSS scoped por componente
- ✅ JavaScript mínimo (solo countdown)
- ✅ Imágenes optimizadas con `loading` y `fetchpriority`
- ✅ Animaciones con `will-change` implícito

## 🚀 Uso

### Configurar Fecha de Actualización

Edita `src/config/constants.ts`:

```typescript
export const NEXT_UPDATE_DATE = new Date('2026-06-15T19:00:00Z');
```

### Desarrollo

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px
- **Grid Adaptativo**: `grid-template-columns: repeat(auto-fit, minmax(...))`
- **Tipografía Fluida**: `clamp()` para escalado suave

## 🎯 Componentes Principales

### Countdown.astro

Componente reactivo con:
- Actualización cada segundo
- Formateo automático de unidades (singular/plural)
- Detección de expiración
- Limpieza de intervalos en unmount
- ARIA live regions para lectores de pantalla

### BaseLayout.astro

Layout con:
- Meta tags SEO completos
- Integración de fuentes locales
- Design tokens CSS custom properties
- Estilos globales normalizados
- Soporte para dark mode nativo

## 🎨 Fuentes Utilizadas

- **Space Grotesk** (300, 400, 500, 600, 700): Títulos y displays
- **Work Sans** (400, 500, 600): Cuerpo y labels

Todas las fuentes están en formato WOFF2 y se cargan desde `/public/fonts/`.

## ♿ Accesibilidad Destacada

1. **Contador con ARIA Live**: Los cambios se anuncian a lectores de pantalla
2. **Focus Visible**: Indicadores claros para navegación por teclado
3. **Contraste Alto**: Todos los textos cumplen WCAG AAA
4. **Semántica Correcta**: Uso apropiado de headings (h1-h6)
5. **Landmarks**: Navegación estructurada para tecnologías asistivas

## 🔍 SEO Implementado

- Canonical URL
- Meta description optimizada
- Open Graph completo
- Twitter Cards
- Locale definido (es-MX)
- Estructura de headings jerárquica
- Alt text descriptivo

## 📝 Notas de Implementación

### ¿Por qué TypeScript Avanzado?

- **Type Safety**: Previene errores en tiempo de compilación
- **IntelliSense**: Autocompletado mejorado en el IDE
- **Refactoring Seguro**: Cambios con confianza
- **Documentación Implícita**: Los tipos documentan el código

### ¿Por qué Astro?

- **Zero JS por defecto**: Solo JS necesario (countdown)
- **Partial Hydration**: Componentes interactivos aislados
- **SEO-First**: HTML estático generado
- **DX Excelente**: TypeScript nativo, scoped styles

### ¿Por qué Design System Tectonic?

- **Identidad Única**: Se diferencia de templates genéricos
- **Minecraft-Aligned**: Estética blocky coherente con el tema
- **Premium Feel**: Brutalismo editorial sofisticado
- **Escalable**: Sistema de tokens reutilizable

## 🎓 Conceptos Avanzados Aplicados

1. **Immutability**: Todos los tipos son readonly
2. **Type Inference**: TypeScript infiere tipos automáticamente
3. **Discriminated Unions**: TimeUnit como literal type
4. **Const Assertions**: Objetos inmutables con `as const`
5. **Utility Types**: Record<> para mapeo de tipos
6. **Custom Properties**: CSS variables para theming
7. **Semantic HTML**: Estructura accesible por defecto
8. **Progressive Enhancement**: Funciona sin JS (SSG)

## 🚦 Checklist de Calidad

- ✅ TypeScript sin errores
- ✅ Accesibilidad WCAG 2.2 AA/AAA
- ✅ SEO completo
- ✅ Responsive design
- ✅ Performance optimizada
- ✅ Design system aplicado
- ✅ Código modular y escalable
- ✅ Documentación completa

---

**Fecha de actualización configurada**: 15 de junio de 2026, 19:00 UTC
