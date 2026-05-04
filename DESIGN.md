---
name: Nostalgic Storybook
colors:
  surface: '#fcf9f6'
  surface-dim: '#dcd9d7'
  surface-bright: '#fcf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f0'
  surface-container: '#f0edea'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e5e2df'
  on-surface: '#1c1c1a'
  on-surface-variant: '#504441'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f3f0ed'
  outline: '#827470'
  outline-variant: '#d4c3be'
  surface-tint: '#77574d'
  primary: '#442a22'
  on-primary: '#ffffff'
  primary-container: '#5d4037'
  on-primary-container: '#d4ada1'
  inverse-primary: '#e7bdb1'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfdf'
  on-secondary-container: '#626362'
  tertiary: '#313131'
  on-tertiary: '#ffffff'
  tertiary-container: '#474747'
  on-tertiary-container: '#b7b5b5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#e7bdb1'
  on-primary-fixed: '#2c160e'
  on-primary-fixed-variant: '#5d4037'
  secondary-fixed: '#e3e2e1'
  secondary-fixed-dim: '#c7c6c5'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464746'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#fcf9f6'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2df'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 24px
  margin: 32px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system is built to evoke the warmth of a cherished family photo album and the timeless quality of a classic storybook. The target audience includes family, friends, and dog lovers who appreciate a personal, heart-warming narrative. 

The aesthetic blends **Minimalism** with **Tactile** warmth. It prioritizes heavy whitespace and refined typography to keep the interface clean, while utilizing soft textures and subtle depth to create a "cozy" atmosphere. The goal is to make the user feel like they are stepping into a sun-drenched living room, where every image and word is treated with the care of a handwritten letter.

## Colors

The palette is rooted in nature and nostalgia. 
- **Primary (Rich Brown):** Derived from the deep tones of fur, used for key actions and narrative headings to provide a grounded, organic feel.
- **Secondary (Crisp White/Cream):** A warm, off-white background that prevents the clinical feel of pure white, providing a soft canvas for content.
- **Tertiary (Deep Black):** A high-contrast charcoal used sparingly for body text and structural elements to maintain legibility and a classic editorial look.
- **Neutral (Warm Sand):** Used for subtle backgrounds, dividers, and secondary surfaces to enhance the layered, cozy feel.

## Typography

This design system utilizes a sophisticated typographic pairing to balance heritage with modern readability. 

**Newsreader** serves as the primary serif for all headlines. Its literary qualities give the website a "storybook" feel, suggesting that every section is a chapter in the dog’s life.

**Be Vietnam Pro** is used for all body text and interface labels. Its contemporary, friendly letterforms ensure that long-form stories remain accessible and easy to read, while its geometric clarity provides a functional counterpoint to the more ornate serif.

## Layout & Spacing

The layout follows a **Fixed Grid** model to mirror the structured layout of a physical book or a framed gallery. A 12-column grid is used with generous margins and gutters to ensure the content never feels crowded.

Spacing is intentionally expansive. Larger vertical "stacks" (64px+) are used between sections to allow the user's eyes to rest, emphasizing a slow, nostalgic browsing experience. Elements should be grouped within soft containers with consistent internal padding of 24px to 32px to maintain a sense of protective "coziness."

## Elevation & Depth

Visual hierarchy is achieved through **Ambient Shadows** and **Tonal Layers**. Instead of harsh, gray shadows, this design system uses soft, diffused shadows with a slight brown tint (`rgba(93, 64, 55, 0.08)`) to mimic the way light falls on paper or fabric.

Lower elevation levels are used for cards and interactive components, while higher elevation is reserved for modals or "floating" photo memories. Subtle, low-contrast borders in a slightly darker cream are used to define boundaries without breaking the soft, unified feel of the interface.

## Shapes

The shape language is defined by **Rounded** corners. Sharp edges are avoided to maintain the "heart-warming" and approachable personality of the site. 

Standard components like buttons and input fields use a 0.5rem radius, while larger containers like cards and photo frames utilize a 1rem to 1.5rem radius. This creates a "squishy" and soft visual rhythm that feels safe and inviting, much like the soft features of a pet.

## Components

- **Buttons:** Primary buttons are filled with the rich brown color and feature white text. They should have a slight lift on hover to enhance the tactile feel. Secondary buttons use a thick, soft-colored border.
- **Cards (The "Memory" Card):** These are the core of the design system. They use a secondary white background, a 1rem corner radius, and a subtle ambient shadow. Images within cards should have a slightly smaller corner radius (0.5rem) to create a framed effect.
- **Chips & Tags:** Small, pill-shaped labels used for "moods" or "activities." These use a light brown tint with darker brown text to remain legible but understated.
- **Input Fields:** Designed with a soft-gray background and a 0.5rem radius. The focus state should transition the border color to the primary brown with a soft outer glow.
- **Interactive Photo Gallery:** A custom component where photos are slightly rotated at different angles (1-2 degrees) to mimic physical photos scattered on a table.
- **Quotes:** Large-scale Newsreader text, often accompanied by a large, soft-colored opening quotation mark, used for "barks" or "thoughts" from the dog.