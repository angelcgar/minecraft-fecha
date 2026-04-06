# FeaturesGrid Component

Componente Astro que recrea la sección "NEW BIOMES & MOBS" con diseño pixel-perfect basado en la imagen de referencia.

## 🎨 Diseño

### Layout Principal
- **Grid asimétrico** de 3 columnas en desktop (2/3 izquierda + 1/3 derecha)
- **Responsive**: Stack vertical en mobile, grid en desktop
- **Gaps consistentes**: 3-4px (mobile/tablet/desktop)

### Estructura del Grid

```
┌─────────────────────────────────────────────────┬─────────────────────┐
│ Header: "NEW BIOMES & MOBS"                     │ VERSION 1.21 badge  │
├─────────────────────────────────────────────────┴─────────────────────┤
│                                                 │                     │
│  THE BIRCH OVERHAUL (Grande con imagen)         │  ANCIENT POTTERY    │
│  - Overlay oscuro gradiente                     │  (Tarjeta oscura)   │
│  - Texto sobre imagen                           │                     │
│  - CTA "EXPLORE THE WILD"                       ├─────────────────────┤
│                                                 │  REDSTONE 2.0       │
├─────────────────────────────────────────────────┤  (Gradiente marrón) │
│  THE SNIFFER (Azul brillante)                   │                     │
│  - Fondo azul sólido                            ├─────────────────────┤
│  - Placeholder para imagen del mob              │  CREATIVE FREEDOM   │
│                                                 │  (Texto "CRAFT")    │
└─────────────────────────────────────────────────┴─────────────────────┘
```

## 🎯 Características Implementadas

### Colores Exactos
- **Fondo principal**: `#0f0f0f` (negro profundo)
- **Tarjetas oscuras**: `#1a1a1a`
- **Texto gris**: `#a1a1a1`
- **Verde acento**: `#4ade80` (Minecraft green)
- **Azul Sniffer**: `#0ea5e9` → `#0284c7` (gradiente)
- **Marrón Redstone**: `#78350f` → `#451a03` (gradiente)

### Tipografía
- **Títulos**: Space Grotesk (bold, uppercase, tracking-tight)
- **Descripciones**: Work Sans (text-xs/sm/base según breakpoint)
- **Badge versión**: Monospace (tracking-widest)

### Efectos Visuales
- **Overlays**: Gradientes oscuros sobre imágenes
- **Hover states**: Scale 1.05 en imágenes (700ms transition)
- **Backdrop blur**: En placeholder del Sniffer
- **Texto watermark**: "CRAFT" con opacity 0.08

### Responsive Breakpoints
- **Mobile**: Stack vertical, padding reducido
- **Tablet (sm)**: Tamaños intermedios
- **Desktop (lg)**: Grid 3 columnas, espaciado completo

## 📦 Uso

### Importar el componente

```astro
---
import FeaturesGrid from '../components/FeaturesGrid.astro';
---

<FeaturesGrid />
```

### Página de ejemplo

Ver `src/pages/features.astro` para un ejemplo completo.

## 🖼️ Imágenes Necesarias

Para que el componente se vea completo, necesitas agregar:

1. **Birch Forest**: `/public/assets/birch-forest.jpg`
   - Imagen de bosque de abedules con troncos verticales
   - Dimensiones recomendadas: 1200x800px mínimo
   - Debe tener buen contraste para el overlay

2. **Sniffer Mob** (opcional): Reemplazar el placeholder SVG
   - Ubicación: línea 71-77 del componente
   - Dimensiones: 140x140px aprox

## 🎨 Personalización

### Cambiar colores de acento

```astro
<!-- En FeaturesGrid.astro -->
<!-- Verde acento: busca #4ade80 y reemplaza -->
<!-- Azul Sniffer: busca #0ea5e9 y #0284c7 -->
```

### Ajustar alturas de tarjetas

```astro
<!-- Tarjeta grande Birch -->
h-[350px] sm:h-[420px] lg:h-[460px]

<!-- Tarjeta Sniffer -->
h-[220px] sm:h-[240px] lg:h-[260px]

<!-- Tarjetas derecha -->
h-[180px] sm:h-[200px] lg:h-[210px]
```

### Modificar contenido

Edita directamente los textos en `FeaturesGrid.astro`:
- Línea 10-15: Header y descripción
- Línea 38-42: The Birch Overhaul
- Línea 62-66: The Sniffer
- Línea 96-100: Ancient Pottery
- Línea 106-110: Redstone 2.0
- Línea 123-127: Creative Freedom

## 🚀 Integración en el Proyecto

### Opción 1: Página dedicada
```astro
// src/pages/features.astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Navbar from '../components/Navbar.astro';
import FeaturesGrid from '../components/FeaturesGrid.astro';
---

<BaseLayout>
  <Navbar />
  <FeaturesGrid />
</BaseLayout>
```

### Opción 2: Sección en index
```astro
// src/pages/index.astro
<main>
  <!-- Hero section -->
  <div class="hero">...</div>
  
  <!-- Features Grid -->
  <FeaturesGrid />
  
  <!-- Footer -->
  <footer>...</footer>
</main>
```

## ✅ Checklist de Implementación

- [x] Grid asimétrico 2/3 + 1/3
- [x] Colores exactos de la referencia
- [x] Overlays y gradientes precisos
- [x] Tipografía y jerarquía correcta
- [x] Espaciados y padding fieles
- [x] Responsive mobile-first
- [x] Hover states y transiciones
- [x] Accesibilidad (alt texts, semantic HTML)
- [ ] Agregar imagen birch-forest.jpg
- [ ] (Opcional) Agregar imagen del Sniffer

## 🔧 Notas Técnicas

- **Framework**: Astro 4.x
- **Estilos**: Tailwind CSS (utility-first)
- **Sin CSS custom**: Todo con clases de Tailwind
- **Sin JavaScript**: Componente estático puro
- **Performance**: Lazy loading en imágenes recomendado
- **Accesibilidad**: Semantic HTML, alt texts incluidos

## 📸 Comparación con Referencia

El diseño replica fielmente:
- ✅ Proporciones del grid (66% / 33%)
- ✅ Alturas relativas de tarjetas
- ✅ Intensidad de overlays
- ✅ Colores de fondo y texto
- ✅ Espaciado entre elementos
- ✅ Jerarquía tipográfica
- ✅ Badges y labels
- ✅ Efectos hover sutiles

---

**Desarrollado con**: Astro + Tailwind CSS  
**Estilo**: Minecraft Modern Dark UI
