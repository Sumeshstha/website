# Resume Preview Modal - Responsive Design Style Guide

## Overview
This document outlines the responsive design patterns and implementation details for the Resume Preview Modal component, ensuring optimal display across all devices and browsers.

## Breakpoint System

### Mobile First Approach
The component uses a mobile-first responsive design approach with the following breakpoints:

- **Extra Small (XS)**: 0px - 480px
- **Small (SM)**: 481px - 640px  
- **Medium (MD)**: 641px - 768px
- **Large (LG)**: 769px - 1024px
- **Extra Large (XL)**: 1025px - 1280px
- **2K+ Displays**: 1281px+

## Container Behavior

### Dimensions & Scaling
```css
/* Mobile (0-480px) */
.pdf-viewer-container {
  min-height: 40vh;
  padding: 0.5rem;
  max-width: 100%;
}

/* Tablet (481-1024px) */
.pdf-viewer-container {
  min-height: 60vh;
  padding: 1rem;
  max-width: 85%;
}

/* Desktop (1025px+) */
.pdf-viewer-container {
  min-height: 80vh;
  padding: 2rem;
  max-width: 70%;
}
```

### Aspect Ratio Maintenance
- The PDF maintains its original aspect ratio (8.5:11 for US Letter)
- Container uses `max-width` and `height: auto` to prevent distortion
- Viewport-based scaling automatically adjusts PDF size

## Responsive Features

### 1. Dynamic Sizing
- **Width**: 100% on mobile, scales down to 70% on large displays
- **Height**: Minimum viewport heights (40vh-80vh) based on screen size
- **Padding**: Scales from 0.5rem (mobile) to 2.5rem (ultra-wide)

### 2. Typography Scaling
```css
/* Mobile */
.text-responsive {
  font-size: clamp(0.75rem, 2vw, 0.875rem);
}

/* Tablet+ */
.text-responsive {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
}
```

### 3. Button Sizing
- Touch targets scale from 32px (mobile) to 48px (desktop)
- Icon sizes adapt: 16px (mobile) → 24px (desktop)
- Spacing between controls scales proportionally

### 4. Layout Adaptations

#### Header Layout
- **Mobile**: Stacked layout (title above controls)
- **Tablet+**: Side-by-side layout with space-between

#### Control Groups
- **Mobile**: Compact controls with reduced spacing
- **Tablet+**: Full-size controls with proper spacing

## Performance Optimizations

### 1. Smooth Transitions
```css
.transition-all {
  transition: all 0.3s ease-in-out;
}
```

### 2. Hardware Acceleration
```css
.pdf-page {
  will-change: transform;
  contain: layout style paint;
}
```

### 3. Layout Shift Prevention
- Fixed container heights with `min-height`
- Aspect ratio containers using `aspect-ratio` property
- Reserved space for loading states

## Browser Compatibility

### Modern Browsers (Chrome 88+, Firefox 85+, Safari 14+, Edge 88+)
- Full CSS Grid and Flexbox support
- CSS custom properties (CSS variables)
- `clamp()` function for fluid typography
- `aspect-ratio` property

### Legacy Browser Support
- Fallback to percentage-based widths
- Polyfills for `clamp()` using calc() + media queries
- Vendor prefixes for transforms and transitions

### Specific Fallbacks

#### Internet Explorer 11
```css
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .pdf-viewer-container {
    display: block;
    text-align: center;
  }
}
```

#### Safari < 14
```css
@supports not (aspect-ratio: 1/1) {
  .pdf-page::before {
    content: '';
    float: left;
    padding-top: 129.41%; /* 11/8.5 * 100% */
  }
}
```

## Accessibility Features

### 1. Responsive Typography
- Minimum font size: 12px (mobile), 14px (desktop)
- Maximum line length: 75 characters
- Adequate contrast ratios (WCAG 2.1 AA)

### 2. Touch Target Sizing
- Minimum 44px × 44px touch targets (iOS)
- 48dp × 48dp touch targets (Android)
- Adequate spacing between interactive elements

### 3. High Contrast Mode
```css
@media (prefers-contrast: high) {
  .pdf-page {
    border: 2px solid currentColor;
  }
}
```

### 4. Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .pdf-viewer-container,
  .pdf-document,
  .pdf-page {
    transition: none;
  }
}
```

## Device-Specific Optimizations

### Mobile Devices
- **iPhone SE (375px)**: Optimized for smallest screens
- **iPhone 12/13 (390px)**: Standard mobile layout
- **Android (360px-412px)**: Flexible mobile range

### Tablets
- **iPad (768px-1024px)**: Portrait and landscape modes
- **Android tablets (600px-1280px)**: Various aspect ratios

### Desktop
- **Standard (1024px-1920px)**: Standard desktop range
- **Ultra-wide (2560px+)**: Enhanced spacing and sizing

### High DPI Displays
```css
@media (-webkit-min-device-pixel-ratio: 2), 
       (min-resolution: 192dpi),
       (min-resolution: 2dppx) {
  .pdf-page {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}
```

## Testing Checklist

### Device Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] Android devices (360px-412px)
- [ ] iPad (768px-1024px)
- [ ] Android tablets (600px-1280px)
- [ ] Desktop (1024px+)
- [ ] Ultra-wide displays (2560px+)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Chrome Mobile
- [ ] Safari Mobile

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] High contrast mode
- [ ] Reduced motion preference
- [ ] Touch target sizing

### Performance Testing
- [ ] Layout shift measurement (CLS)
- [ ] Loading performance
- [ ] Smooth scrolling
- [ ] Resize performance

## Implementation Notes

### CSS Custom Properties
```css
:root {
  --pdf-container-padding: 1rem;
  --pdf-page-max-width: 80%;
  --pdf-transition-speed: 0.3s;
}

@media (max-width: 640px) {
  :root {
    --pdf-container-padding: 0.5rem;
    --pdf-page-max-width: 95%;
  }
}
```

### JavaScript Enhancements
```javascript
// Viewport detection
const updateViewport = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  // Auto-adjust scale based on viewport
  if (width < 640 && scale > 1.2) {
    setScale(0.8);
  }
};
```

### Container Queries (Future)
```css
@supports (container-type: inline-size) {
  .pdf-viewer-container {
    container-type: inline-size;
  }
  
  @container (max-width: 400px) {
    .pdf-page {
      max-width: 100%;
    }
  }
}
```

## Maintenance Guidelines

1. **Regular Testing**: Test on new device releases quarterly
2. **Browser Updates**: Monitor browser support for new CSS features
3. **Performance Monitoring**: Track Core Web Vitals for layout shifts
4. **Accessibility Audits**: Annual accessibility compliance reviews
5. **User Feedback**: Collect and analyze user experience reports

## Version History
- v1.0.0: Initial responsive implementation
- v1.1.0: Added container queries and enhanced fallbacks
- v1.2.0: Optimized for high DPI displays and touch devices