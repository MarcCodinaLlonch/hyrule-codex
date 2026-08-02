---
name: Ancient Archive
colors:
  surface: '#fff8f1'
  surface-dim: '#e7d9bb'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff2db'
  surface-container: '#fcecce'
  surface-container-high: '#f6e7c9'
  surface-container-highest: '#f0e1c3'
  on-surface: '#221b08'
  on-surface-variant: '#4d4635'
  inverse-surface: '#38301b'
  inverse-on-surface: '#feefd1'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#376757'
  on-secondary: '#ffffff'
  secondary-container: '#baeed9'
  on-secondary-container: '#3d6d5d'
  tertiary: '#455f87'
  on-tertiary: '#ffffff'
  tertiary-container: '#9ab4e0'
  on-tertiary-container: '#2b466b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#baeed9'
  secondary-fixed-dim: '#9ed1bd'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#1d4f40'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#adc8f5'
  on-tertiary-fixed: '#001c3b'
  on-tertiary-fixed-variant: '#2d486d'
  background: '#fff8f1'
  on-background: '#221b08'
  surface-variant: '#f0e1c3'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Libre Franklin
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  margin-mobile: 16px
  margin-desktop: 32px
  gutter: 16px
---

## Brand & Style

The design system is rooted in the **Tactile / Skeuomorphic** and **Minimalist** intersection, specifically designed to evoke the feeling of a legendary traveler’s journal. The brand personality is epic and immersive, targeting fans who appreciate high-fantasy aesthetics and meticulous world-building.

The UI avoids the sterile nature of modern flat design, opting instead for a "Digital Parchment" style. It utilizes subtle organic textures, soft shadows to imply stacked physical papers, and ornate golden accents that serve as functional focal points. Every interaction should feel like a deliberate movement through an ancient, magical archive.

## Colors

The palette is anchored by **Light Parchment (#F5E6C8)**, providing a warm, organic backdrop that reduces eye strain during long reading sessions. 

- **Triforce Gold (#D4AF37):** Used exclusively for high-importance elements: headings, primary calls to action, and decorative iconography.
- **Forest Green (#1B4D3E):** Serves as the structural anchor for navigation bars, headers, and footer backgrounds, providing a sense of natural depth.
- **Royal Blue (#1E3A5F):** Reserved for interactive links and secondary utility buttons, distinguishing them from primary "Legendary" actions.
- **Wood Brown (#3E2723):** Replaces pure black for all typography to maintain the soft, historical aesthetic.

## Typography

This design system uses a dual-type approach to balance atmosphere with legibility. 

**EB Garamond** is the primary serif for all headings. Its classical, high-contrast strokes reflect the medieval-fantasy theme. For maximum impact, `display-lg` should utilize the gold primary color.

**Libre Franklin** provides a clean, neutral contrast for body text and metadata. It ensures that data-heavy sections (like item stats or map coordinates) remain highly readable on mobile devices. Use `label-md` for small navigational elements and buttons to ensure clarity.

## Layout & Spacing

The layout follows a **Fluid Grid** model. On mobile, content is contained within 16px side margins. As the screen scales to desktop, the layout adopts a centered container with a maximum width of 1200px and 32px margins.

Spacing is governed by a 4px baseline grid to ensure vertical rhythm. Use larger `xl` (40px) padding for section transitions to allow the parchment background to "breathe," simulating the generous margins of a physical book. Gutters between cards and grid items are fixed at 16px to maintain a compact, information-dense feel.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and subtle physical metaphors rather than intense shadows.

- **Level 0 (Deepest):** Dark Forest Green (#1B4D3E) used for the app shell and global navigation.
- **Level 1 (Base):** Light Parchment (#F5E6C8) used for the main content area.
- **Level 2 (Raised):** Cards and surfaces use a slightly lighter tint of parchment or a 1px border of Wood Brown (#3E2723) at 10% opacity.
- **Accents:** Use a 1px inner "engraved" stroke on gold elements to give them a metallic, embossed appearance. Avoid heavy drop shadows; use soft, brown-tinted blurs only for modal dialogs.

## Shapes

The shape language is **Soft**. Sharp edges are avoided to maintain the organic feel of hand-cut paper and aged wood. 

Standard components (buttons, input fields) use a 0.25rem (4px) radius. Larger containers like content cards use `rounded-lg` (8px). For interactive icons or specific "magical" items, use a circular or "lozenge" shape to differentiate them from standard structural UI.

## Components

- **Buttons:** Primary buttons are Forest Green with Gold text, using a 2px bottom border of a darker green to simulate thickness. Secondary buttons are outlined in Royal Blue.
- **Cards:** Content cards feature a subtle texture overlay mimicking parchment. They use a decorative "bracket" border style in Gold for headers within the card.
- **Input Fields:** Use a recessed look with a 1px Wood Brown border and a slightly darker parchment fill. The focus state replaces the border with a 2px Gold stroke.
- **Chips/Tags:** Used for categorizing lore (e.g., "Boss", "Weapon", "Location"). These should have a slight 2px roundedness and use the Royal Blue palette for high visibility.
- **Dividers:** Instead of simple lines, use decorative SVG dividers that feature a subtle Triforce-inspired geometric flourish in the center.
- **Lists:** List items are separated by thin, low-opacity Wood Brown lines. Interactive list items should have a gold-tinted hover state.