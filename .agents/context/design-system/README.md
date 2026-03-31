# Design System Strategy: Tectonic Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Tectonic Editorial."** 

We are moving away from the literal interpretation of "gaming" UI and instead embracing the structural logic of a voxel-based world: modularity, weight, and hard-edged precision. This system rejects the "template" look of modern web design by leaning into intentional asymmetry and massive typographic scale. We treat the screen not as a flat canvas, but as a site of excavation and construction. Elements should feel like they have been carved out of the interface or stacked with architectural intent. By utilizing a 0px border-radius across the board, we establish a signature visual language that feels unapologetically digital yet sophisticated and premium.

## 2. Colors: The Palette of the Earth
The color strategy utilizes deep, organic tones to ground the experience, contrasted with high-vibrancy accents to guide the eye.

*   **Primary (`#8cda70`, `#3c8527`):** Represents the "Grass" layer. Use this for the most significant calls to action and primary brand moments.
*   **Secondary (`#e2c0a9`, `#5c4433`):** The "Earth" tones. These provide warmth and grounding, perfect for secondary navigation or supporting elements.
*   **Tertiary (`#a2c9ff`, `#0077d0`):** The "Sky" accents. These are reserved for moments of discovery, info-states, or ethereal highlights.
*   **The "No-Line" Rule:** To achieve a high-end editorial feel, designers are **prohibited from using 1px solid borders** for sectioning. Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to create a clean, modern break without the clutter of lines.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. Use the `surface-container` tiers (Lowest to Highest) to create "nested" depth. An inner content block should use a slightly higher tier (e.g., `surface-container-high`) than its parent container (`surface-container-low`) to define its importance and "lift."
*   **The "Glass & Gradient" Rule:** For floating menus or high-impact hero sections, use semi-transparent versions of `surface` colors combined with a heavy backdrop-blur (Glassmorphism). To add "soul," apply subtle linear gradients transitioning from `primary` to `primary_container` on large CTAs.

## 3. Typography: Brutalist Authority
This system uses a high-contrast pairing to evoke an adventurous, editorial spirit.

*   **Display & Headlines (`spaceGrotesk`):** This is our "Brutalist" voice. Use `display-lg` (3.5rem) for hero statements. The geometric nature of Space Grotesk mimics the blocky logic of the system while remaining sophisticated. Ensure headlines are set with tight letter-spacing for a "packed" look.
*   **Body & Titles (`workSans`):** Work Sans provides a clean, neutral balance to the expressive headlines. Use `body-lg` (1rem) for long-form content to ensure maximum readability against dark backgrounds.
*   **Labels:** Use `label-md` in all-caps with increased letter-spacing to create a "technical blueprint" feel for metadata and small UI triggers.

## 4. Elevation & Depth: Tonal Layering
We reject the traditional "drop shadow" in favor of environmental depth.

*   **The Layering Principle:** Depth is achieved by "stacking" the surface-container tiers. Placing a `surface-container-highest` element on a `surface-dim` background creates a natural, soft lift that feels integrated into the environment.
*   **Ambient Shadows:** If a "floating" effect is mandatory (e.g., a modal), use an extra-diffused shadow with 4-8% opacity. The shadow color must be a tinted version of the `on-surface` color (a deep, dark green or brown) rather than a neutral gray, to mimic natural light bouncing off the "earth."
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use a "Ghost Border": the `outline-variant` token at 15% opacity. Never use 100% opaque, high-contrast borders.
*   **Glassmorphism:** Use backdrop-blur on `surface-variant` containers for overlays. This allows the "biomes" (content sections) to bleed through, making the layout feel like a single, immersive world.

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background, `on-primary` text. 0px radius. Use a 2px "bottom-heavy" inset shadow of `primary_container` to give it a "pressed block" feel.
*   **Secondary:** `surface-container-high` background with a `Ghost Border`.
*   **Tertiary:** Text-only using `tertiary` color, all-caps `label-md` typography.

### Chips
*   **Selection Chips:** Use `secondary_container` for the background. When selected, switch to `primary` with `on-primary` text. No rounded corners.

### Input Fields
*   **Structure:** Use `surface-container-lowest` for the input area to create an "excavated" look (it should look lower than the surrounding surface). 
*   **State:** Use a 2px bottom-border of `primary` only when the field is focused.

### Cards & Lists
*   **Rule:** Forbid the use of divider lines.
*   **Execution:** Use `spacing.8` (2rem) of vertical white space to separate list items, or alternate background shades (`surface-container-low` vs `surface-container-medium`).
*   **Immersive Cards:** Use large-scale background imagery with a `primary_container` color overlay at 20% to tie images into the "grass/earth" theme.

### Tooltips
*   **Style:** Sharp-edged boxes using `surface-container-highest`. Use `label-sm` for the text. No "tail" on the tooltip; use proximity to define relationship.

## 6. Do's and Don'ts

### Do
*   **Embrace Asymmetry:** Offset your columns. Let a `display-lg` headline bleed across two grid columns while the body text stays in one.
*   **Use Hard Edges:** Every element must have a 0px border-radius. This is the signature of the design system.
*   **Prioritize Breathing Room:** Use `spacing.16` and `spacing.24` for section margins to let the "adventurous" layout feel expansive.

### Don't
*   **Don't use "Default" Shadows:** Avoid the standard CSS `box-shadow: 0 4px 6px...`. It breaks the immersive, blocky logic.
*   **Don't use 1px Dividers:** Lines create a "cheap" grid feel. Use color blocks to define space.
*   **Don't Round Corners:** Even a 2px radius will dilute the "Tectonic" brand identity. Keep it sharp.