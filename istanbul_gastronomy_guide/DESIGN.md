---
name: Istanbul Gastronomy Guide
colors:
  surface: '#16130b'
  surface-dim: '#16130b'
  surface-bright: '#3d392f'
  surface-container-lowest: '#110e07'
  surface-container-low: '#1f1b13'
  surface-container: '#231f17'
  surface-container-high: '#2d2a21'
  surface-container-highest: '#38342b'
  on-surface: '#eae1d4'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#eae1d4'
  inverse-on-surface: '#343027'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#ffe2ab'
  on-secondary: '#402d00'
  secondary-container: '#ffbf00'
  on-secondary-container: '#6d5000'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#fbbc00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#16130b'
  on-background: '#eae1d4'
  surface-variant: '#38342b'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Playfair Display
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: '1.3'
  h3:
    fontFamily: Playfair Display
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-page: 64px
  section-gap: 128px
---

## Brand & Style

This design system embodies the "Old Money" aesthetic of Istanbul’s elite culinary scene. It is a digital concierge that feels like a heavy, gold-embossed leather menu from a Pera District institution. The brand personality is authoritative yet welcoming, sophisticated, and deeply rooted in heritage.

The style is **Minimalist-Luxurious**. It relies on vast amounts of negative space (luxury in digital form), razor-sharp typography, and cinematic imagery. We avoid modern gimmicks like heavy gradients or playful animations, opting instead for steady, deliberate transitions and high-contrast layouts that allow full-bleed photography of Bosphorus sunsets and gold-leafed desserts to take center stage.

## Colors

The palette is strictly dark mode, utilizing the "Zinc" scale to provide a deep, charcoal-to-black foundation that feels more organic and expensive than pure black. 

- **Primary Gold (#D4AF37):** Used exclusively for high-level branding, call-to-action borders, and signature iconography.
- **Amber Accents (#FFBF00):** Reserved for interactive states, star ratings, and subtle "Editor's Choice" indicators.
- **The Grays:** Zinc-950 serves as the canvas, with Zinc-900 used for surface elevation. Text is kept in Zinc-100 for maximum legibility without the harshness of pure white.

## Typography

This design system uses a high-contrast typographic pairing to signal heritage and modernity.

- **Playfair Display:** Our serif typeface. It should be used for all headlines and editorial pull-quotes. Use the "italic" variant sparingly for emphasis or Turkish culinary terms (e.g., *Meyhane*).
- **Inter:** Our sans-serif workhorse. It provides a clean, functional counterpoint to the decorative nature of the serif. Use it for body copy, technical details, and navigation. 
- **Letter Spacing:** Headlines should have slightly tightened tracking, while labels and small caps should be tracked out significantly to evoke a sense of high-end fashion branding.

## Layout & Spacing

The layout philosophy is a **Fixed Grid** with an emphasis on "Luxurious Spacing." We use an 8px rhythmic scale, but we prefer larger increments (32px, 64px, 128px) to prevent the UI from feeling cluttered.

- **The Grid:** A 12-column grid with wide gutters (32px). This creates a stable, structural feel.
- **Negative Space:** Content sections are separated by significant vertical gaps (128px). Whitespace is treated as a design element itself, not just a gap between components.
- **Margins:** Page margins are generous (minimum 64px) to frame the content like a piece of art in a gallery.

## Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layers** and **Refined Borders**. 

- **Surface Levels:** The background is Zinc-950. Cards or modals sit on Zinc-900.
- **Borders:** Depth is defined by 1px solid borders in Zinc-800. For high-importance elements, a 1px border in Gold (#D4AF37) is used.
- **Glassmorphism:** For mobile navigation or overlay headers, a high-intensity backdrop blur (20px+) with a 10% opacity Zinc-900 fill is used to maintain a sense of cinematic depth without losing the dark aesthetic.
- **Imagery:** Depth is further created through "cinematic layering"—text often overlaps darkened, high-contrast imagery to create a 3D parallax effect.

## Shapes

The shape language is **Sharp (0)**. 

To maintain the "Old Money" and architectural feel of Istanbul's historic stone buildings, we use 0px border radii for all primary buttons, input fields, and image containers. Circles are permitted only for profile avatars or specific icon backgrounds to provide a singular point of visual relief against the rigid, rectangular structure of the rest of the UI.

## Components

- **Buttons:** Primary buttons are outlined in Gold (#D4AF37) with no fill, using uppercase Inter typography. On hover, they take a subtle Gold fill with black text.
- **Cards:** Restaurant cards use full-bleed imagery with a sharp-edged Zinc-900 footer. Labels are placed in the top-right corner using the `label-caps` style on a semi-transparent black background.
- **Inputs:** Simple bottom-border only ("Ghost" style). The label sits above in `label-caps`. Focus state changes the border from Zinc-700 to Gold.
- **Chips:** Used for cuisine types (e.g., "Ottoman", "Seafood"). These are sharp-edged rectangles with a Zinc-800 background and Zinc-400 text.
- **Signature Component - The 'Sommelier' Filter:** A specialized dropdown using high-serif typography that feels like selecting from a wine list.
- **Cinematic Hero:** A full-height component with a background video or high-contrast photo, featuring a centered `display-lg` headline and a single gold-bordered CTA button.