# Changelog - Actualización de Diseño

## Cambios Realizados

### 1. Refactorización CSS Modular

**Archivos creados:**
- `src/styles/fonts.css` - Todas las declaraciones @font-face
- `src/styles/global.css` - Estilos globales, variables CSS, reset

**Beneficios:**
- ✅ Eliminación de duplicación de código
- ✅ Mejor organización y mantenibilidad
- ✅ Separación de responsabilidades
- ✅ Facilita actualizaciones futuras

### 2. Navbar Implementado

**Archivo:** `src/components/Navbar.astro`

**Características:**
- Logo "MINECRAFT UPDATE" en verde
- Links de navegación: CHRONICLES, FEATURES, COMMUNITY, SUPPORT
- Botón CTA "GET THE UPDATE" en verde
- Navbar fijo con backdrop-blur
- **Efecto hover:** Links cambian de verde a blanco con underline animado
- Responsive: oculta links en mobile, mantiene logo y CTA

**Diseño:**
- Fondo: `rgba(0, 0, 0, 0.95)` con blur
- Border inferior verde sutil
- Transiciones suaves en todos los elementos

### 3. Hero Section Rediseñado

**Cambios principales:**

#### Badge "THE NEXT CHAPTER IS NEAR"
- Fondo verde (`--primary`)
- Texto blanco
- Uppercase con letter-spacing amplio
- Sin border-radius (0px)

#### Título "UNEARTH THE ANCIENT"
- **"UNEARTH THE"** en blanco
- **"ANCIENT"** en verde
- Font-size: `clamp(2.5rem, 10vw, 5.5rem)`
- Line-height ajustado: 0.95 para compactar
- Ambas líneas uppercase

#### Layout
- Centrado vertical y horizontal
- Padding superior aumentado para compensar navbar fijo
- Gap reducido entre elementos para mayor cohesión

### 4. Countdown Horizontal

**Cambios en:** `src/components/Countdown.astro`

**Nuevo diseño:**
- Layout horizontal con flexbox
- Números grandes: `clamp(3rem, 8vw, 5rem)`
- Labels pequeños debajo de cada número
- Sin fondos en las unidades (transparente)
- Gap de 3rem entre unidades (1.5rem en mobile)
- Alineación centrada

**Comparación:**
- **Antes:** Grid vertical con fondos, padding, borders
- **Ahora:** Flex horizontal, minimalista, números protagonistas

### 5. BaseLayout Simplificado

**Cambios en:** `src/layouts/BaseLayout.astro`

**Antes:**
- 200+ líneas de estilos inline
- @font-face duplicados
- Variables CSS duplicadas

**Ahora:**
- Solo `@import '../styles/global.css'`
- Código limpio y mantenible
- Sin duplicación

### 6. Página Principal Actualizada

**Cambios en:** `src/pages/index.astro`

**Estructura:**
```astro
<Navbar />
<main>
  <hero-section>
    <badge>THE NEXT CHAPTER IS NEAR</badge>
    <title>UNEARTH THE ANCIENT</title>
    <countdown />
  </hero-section>
  <features-section>...</features-section>
  <footer>...</footer>
</main>
```

**Eliminado:**
- Sección CTA (botones "Visitar sitio oficial", "Conocer más")
- Descripción del hero
- Heading visible del countdown

**Agregado:**
- Navbar component
- Badge component
- Clase `.visually-hidden` para accesibilidad

## Estructura de Archivos Actualizada

```
src/
├── components/
│   ├── Countdown.astro          ✨ Rediseñado (horizontal)
│   └── Navbar.astro              🆕 Nuevo componente
├── layouts/
│   └── BaseLayout.astro          ♻️ Refactorizado (usa global.css)
├── pages/
│   └── index.astro               ♻️ Rediseñado (badge + nuevo título)
├── styles/                       🆕 Nueva carpeta
│   ├── fonts.css                 🆕 Fuentes separadas
│   └── global.css                🆕 Estilos globales
├── config/
│   └── constants.ts              (sin cambios)
└── types/
    └── countdown.ts              (sin cambios)
```

## Alineación con Referencia Visual

### ✅ Implementado según referencia:

1. **Navbar oscuro** con logo verde y links verdes
2. **Badge verde** con texto "THE NEXT CHAPTER IS NEAR"
3. **Título grande** "UNEARTH THE ANCIENT" (blanco + verde)
4. **Countdown horizontal** con números grandes
5. **Efecto hover** en navbar (verde → blanco)
6. **Layout centrado** y minimalista

### 🎨 Decisiones de diseño:

- **Navbar fijo:** Mejora UX en scroll
- **Backdrop-blur:** Efecto glassmorphism moderno
- **Sin CTA buttons:** Simplifica hero, enfoca en countdown
- **Transparencia en countdown:** Números protagonistas
- **Letter-spacing ajustado:** Mejor legibilidad

## Accesibilidad Mantenida

- ✅ Estructura semántica HTML5
- ✅ ARIA labels y live regions
- ✅ Navegación por teclado
- ✅ Focus-visible indicators
- ✅ Contraste de color AAA
- ✅ `.visually-hidden` para screen readers
- ✅ `prefers-reduced-motion` respetado

## Responsive Design

### Mobile (< 768px)
- Navbar: Solo logo + CTA
- Badge: Tamaño reducido
- Título: `clamp()` ajusta automáticamente
- Countdown: Gap reducido, números escalados

### Tablet/Desktop (≥ 768px)
- Navbar: Todos los links visibles
- Hero: Padding aumentado
- Countdown: Gap completo (3rem)
- Números: Tamaño máximo (5rem)

## Performance

- ✅ CSS modular reduce duplicación
- ✅ Preload de fuentes críticas mantenido
- ✅ Estilos scoped por componente
- ✅ Animaciones optimizadas
- ✅ Sin JavaScript adicional

## Próximos Pasos Sugeridos

1. **Ajustar fecha de actualización** en `src/config/constants.ts`
2. **Personalizar links del navbar** según necesidades
3. **Agregar contenido a secciones** (chronicles, community, support)
4. **Optimizar imágenes** para producción
5. **Configurar dominio real** en `astro.config.mjs`

---

**Fecha de actualización:** 6 de abril de 2026
**Versión:** 2.0.0
