# UNIFIED DESIGN SYSTEM DOCUMENTATION

## Overview
This Design System provides a cohesive, scalable foundation for your web application. It consolidates all colors, typography, spacing, and component styles into a single source of truth using CSS custom properties (variables).

---

## 1. COLOR PALETTE

### Primary Colors
- **`--color-primary`**: `#007bff` - Main blue (buttons, links, accents)
- **`--color-primary-hover`**: `#0056b3` - Darker blue for hover states
- **`--color-primary-light`**: `#e7f1ff` - Light blue background for focus states

### Accent Colors
- **`--color-accent-gold`**: `#f4a460` - Warm accent (previously golden-yellow)
- **`--color-accent-pink`**: `#ff9999` - Pink accent
- **`--color-accent-blue-vibrant`**: `#6699ff` - Vibrant blue accent

### Neutral Colors
- **`--color-background-main`**: `#f8f9fa` - Page background
- **`--color-background-card`**: `#ffffff` - Card/container background
- **`--color-border`**: `#e0e0e0` - Light borders
- **`--color-border-dark`**: `#000000` - Dark borders

### Text Colors
- **`--color-text-primary`**: `#333333` - Primary text
- **`--color-text-secondary`**: `#666666` - Secondary/helper text
- **`--color-text-light`**: `#999999` - Light/disabled text

### Example Usage
```css
.my-element {
  background-color: var(--color-background-card);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.my-button {
  background-color: var(--color-primary);
}

.my-button:hover {
  background-color: var(--color-primary-hover);
}
```

---

## 2. TYPOGRAPHY HIERARCHY

### Font Families
- **Primary**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Fallback**: `Arial, sans-serif`

### Font Sizes (Modular Scale)
| Variable | Size | Pixels | Use Case |
|----------|------|--------|----------|
| `--font-size-xs` | 0.875rem | 14px | Small text, captions |
| `--font-size-sm` | 0.95rem | 15.2px | Secondary text, labels |
| `--font-size-base` | 1rem | 16px | Body text, default |
| `--font-size-lg` | 1.125rem | 18px | Subheadings, emphasis |
| `--font-size-xl` | 1.5rem | 24px | H2 headings |
| `--font-size-2xl` | 2rem | 32px | H1 headings |

### Font Weights
- **Normal**: `400` - Regular text
- **Medium**: `500` - Form labels, emphasis
- **Semibold**: `600` - Headings
- **Bold**: `700` - Strong emphasis

### Line Heights
- **Tight**: `1.2` - Headings
- **Normal**: `1.4` - Body text, lists
- **Relaxed**: `1.6` - Long-form content

### Heading Hierarchy
```
H1: 2rem, semibold, tight line-height    → Page titles
H2: 1.5rem, semibold, tight line-height  → Section titles
H3: 1.125rem, semibold, normal line-height → Subsections
```

### Example Usage
```css
.heading {
  font-family: var(--font-family-primary), var(--font-family-fallback);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.body-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
}
```

---

## 3. SPACING SCALE

All spacing is based on a **4px base unit** for consistency:

| Variable | Size | Pixels | Use Case |
|----------|------|--------|----------|
| `--space-xs` | 0.25rem | 4px | Very tight spacing (gaps) |
| `--space-sm` | 0.5rem | 8px | Small spacing (padding, margins) |
| `--space-base` | 1rem | 16px | Default spacing |
| `--space-md` | 1.5rem | 24px | Medium spacing |
| `--space-lg` | 2rem | 32px | Large spacing, section padding |
| `--space-xl` | 2.5rem | 40px | Extra large, major sections |
| `--space-2xl` | 3rem | 48px | Maximum spacing |

### Spacing Guidelines
- **Padding inside elements**: Use `--space-base` to `--space-lg`
- **Margins between elements**: Use `--space-base` to `--space-xl`
- **Gaps in flex/grid layouts**: Use `--space-md` to `--space-lg`
- **Internal spacing**: Use multiples of the base spacing

### Example Usage
```css
.card {
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
}

.grid {
  gap: var(--space-lg);
}

.button {
  padding: var(--space-sm) var(--space-base);
}
```

---

## 4. BORDER & RADIUS

### Border Radius
- **`--border-radius-sm`**: 5px - Subtle rounding
- **`--border-radius-md`**: 10px - Moderate rounding
- **`--border-radius-lg`**: 15px - Prominent rounding

### Example Usage
```css
.button {
  border-radius: var(--border-radius-sm);
}

.card {
  border-radius: var(--border-radius-lg);
}

.input {
  border-radius: var(--border-radius-sm);
}
```

---

## 5. SHADOWS

### Shadow System
- **`--shadow-sm`**: `0 4px 15px rgba(0, 0, 0, 0.05)` - Subtle elevation
- **`--shadow-md`**: `0 10px 25px rgba(0, 0, 0, 0.1)` - Medium elevation (hover state)
- **`--shadow-lg`**: `5px 5px 10px rgba(0, 0, 0, 0.2)` - Deep shadow

### Example Usage
```css
.card {
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.modal {
  box-shadow: var(--shadow-lg);
}
```

---

## 6. TRANSITIONS

### Transition Speeds
- **`--transition-fast`**: 0.2s ease - Quick feedback
- **`--transition-normal`**: 0.3s ease - Standard animations
- **`--transition-slow`**: 0.5s ease - Smooth, purposeful animations

### Example Usage
```css
.button {
  transition: background-color var(--transition-normal);
}

.card {
  transition: all var(--transition-normal);
}

.link {
  transition: color var(--transition-fast);
}
```

---

## 7. REUSABLE COMPONENT CLASSES

### Buttons
**`.button-primary`** - Primary action button
```html
<button class="button-primary">Click Me</button>
```
- Blue background, white text
- Hover: Darker blue + slight lift
- Disabled: Gray background

**`.button-secondary`** - Secondary action button
```html
<button class="button-secondary">Secondary</button>
```
- Transparent, bordered
- Hover: Light gray background
- Disabled: Reduced opacity

### Containers
**`.container`** - Standard container (max 100%)
```html
<div class="container">Content</div>
```

**`.container-narrow`** - Narrow container (max 600px)
```html
<div class="container-narrow">Content</div>
```

**`.container-wide`** - Wide container (max 1200px)
```html
<div class="container-wide">Content</div>
```

### Flex Utilities
**`.flex-center`** - Center content both directions
```html
<div class="flex-center">Centered</div>
```

**`.flex-column`** - Column direction flex
```html
<div class="flex-column">Stacked</div>
```

### Cards
**`.card`** - Standard card component
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```
- White background, border, shadow
- Hover: Lift + stronger shadow + gold border

---

## 8. FORM ELEMENTS

All form inputs (text, password, search, select, textarea) are styled consistently:
- Padding: `var(--space-sm)` vertical, `var(--space-base)` horizontal
- Border: 1px solid `var(--color-border)`
- Focus: Primary color border + light blue shadow

### Example Usage
```html
<input type="text" placeholder="Enter text">
<input type="search" placeholder="Search...">
<select>
  <option>Option 1</option>
</select>
<textarea></textarea>
```

---

## 9. HOW TO USE IN YOUR COMPONENTS

### In JSX Components
```jsx
export function MyComponent() {
  return (
    <div className="container">
      <h1>My Component</h1>
      <div className="card">
        <h2>Card Title</h2>
        <p>Content here</p>
        <button className="button-primary">Action</button>
      </div>
    </div>
  );
}
```

### In Inline Styles (Avoid if possible)
```jsx
// Instead of hardcoding values, use CSS variables
<button style={{ marginTop: 'var(--space-base)' }}>
  Click
</button>
```

### In CSS files
```css
.my-custom-element {
  background-color: var(--color-background-card);
  color: var(--color-text-primary);
  padding: var(--space-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.my-custom-element:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

---

## 10. CUSTOMIZATION & EXTENDING

### Modifying the Design System
To adjust the design system, edit `/src/design-system.css` in the `:root` selector:

```css
:root {
  /* Change primary color */
  --color-primary: #YOUR_COLOR;
  
  /* Change base spacing multiplier */
  --space-base: 1.25rem; /* Now all spacing scales by 1.25 */
  
  /* Change font family */
  --font-family-primary: 'Your Font', sans-serif;
}
```

### Adding New Variables
```css
:root {
  /* Add new color */
  --color-success: #4caf50;
  
  /* Add new size */
  --font-size-3xl: 2.5rem;
  
  /* Add new spacing */
  --space-3xl: 3.5rem;
}
```

### Creating Component Variants
```css
.button-success {
  /* Reuse existing structure */
  padding: var(--space-sm) var(--space-base);
  border: none;
  background-color: var(--color-success);
  color: white;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: background-color var(--transition-normal);
}

.button-success:hover {
  background-color: #45a049;
}
```

---

## 11. RESPONSIVE DESIGN

The Design System includes mobile-first responsive breakpoints:

### Breakpoints
- **Tablet & Below**: `@media (max-width: 768px)`
- **Mobile**: `@media (max-width: 480px)`

### Current Responsive Adjustments
- Grid layouts collapse to single column on mobile
- Font sizes reduce on small screens
- Buttons and forms take full width on mobile
- Padding reduces to `var(--space-sm)` on very small screens

### Adding Custom Breakpoints
```css
@media (max-width: 1024px) {
  .my-element {
    font-size: var(--font-size-lg);
  }
}
```

---

## 12. MIGRATION CHECKLIST

If updating existing code to use the Design System:

- ✅ Replace hard-coded colors with CSS variables
- ✅ Replace hard-coded spacing with `--space-*` variables
- ✅ Replace hard-coded font sizes with `--font-size-*` variables
- ✅ Use `--transition-*` for all transitions
- ✅ Use `--shadow-*` for all box-shadows
- ✅ Use `--border-radius-*` for border-radius
- ✅ Use consistent component class names
- ✅ Remove duplicate CSS rules
- ✅ Test all components after changes

---

## 13. QUICK REFERENCE

### Most Used Variables
```css
/* Colors */
--color-primary
--color-background-card
--color-text-primary

/* Spacing */
--space-base      /* 16px */
--space-lg        /* 32px */
--space-sm        /* 8px */

/* Typography */
--font-size-base  /* 16px */
--font-size-xl    /* 24px */

/* Effects */
--shadow-sm
--transition-normal
--border-radius-md
```

---

## 14. SUPPORT & DOCUMENTATION

All CSS variables are defined in `/src/design-system.css` and imported in `/src/styles.css`.

**Key Files:**
- `src/design-system.css` - Design System variables & reusable classes
- `src/styles.css` - App-specific styles (imports design-system.css)

**For questions or updates**, refer to this documentation or the source CSS files.

---

**Last Updated**: 2024 | Design System Version 1.0
