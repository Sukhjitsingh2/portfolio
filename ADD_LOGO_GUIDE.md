# Adding VIGILANTEye Logo

This guide explains how to add your VIGILANTEye logo to the portfolio.

## Quick Steps

1. **Save your logo image** as `vigilanteye-logo.png` or `vigilanteye-logo.jpg`
2. **Place it in**: `portfolio-website/public/images/logo/`
3. **The logo will automatically appear** in:
   - Navigation bar (top left)
   - Hero section (large display)
   - Footer (small version)

## File Location

```
portfolio-website/
└── public/
    └── images/
        └── logo/
            └── vigilanteye-logo.png  ← Place your logo here
```

## Image Specifications

### Recommended Settings:
- **Format**: PNG (with transparent background) or JPG
- **Size**: 
  - Minimum: 400x200px
  - Recommended: 800x400px or larger
  - Maintain aspect ratio
- **Background**: 
  - Transparent PNG (preferred for dark backgrounds)
  - White background (if PNG not available)
- **File Size**: Under 500KB

## Where Logo Appears

### 1. Navigation Bar
- **Size**: ~40px height
- **Location**: Top left corner
- **Fallback**: Shows "VE" icon if logo not found

### 2. Hero Section
- **Size**: Large (128px-192px height)
- **Location**: Center top of hero section
- **Animation**: Rotates in on page load

### 3. Footer
- **Size**: ~40px height
- **Location**: Footer left section
- **Fallback**: Shows "VE" icon if logo not found

## Image Optimization

Before adding:
1. **Compress the image** using [TinyPNG](https://tinypng.com/)
2. **Ensure proper dimensions** (maintain aspect ratio)
3. **Test on dark background** (portfolio uses dark theme)

## Testing

After adding the logo:

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Check all locations**:
   - Navigation bar (top)
   - Hero section (center)
   - Footer (bottom)

3. **Verify responsive**:
   - Test on mobile view
   - Check logo scales properly

## Troubleshooting

### Logo Not Showing?
- ✅ Check file name: `vigilanteye-logo.png` (exact match, case-sensitive)
- ✅ Check file location: `public/images/logo/`
- ✅ Check file format: PNG or JPG
- ✅ Hard refresh browser: `Ctrl+Shift+R`
- ✅ Restart dev server

### Logo Too Large/Small?
- Adjust the `h-32 md:h-48` classes in `Hero.tsx`
- Adjust the `h-10` class in `Navigation.tsx` and `Footer.tsx`

### Logo Has White Background?
- Use PNG with transparent background
- Or add CSS filter to remove white background

## Current Implementation

The portfolio is already set up to use your logo. Just add the image file and it will automatically display in all three locations with smooth animations and 3D effects!

---

**Note**: If the logo file is not found, the portfolio will gracefully fall back to the "VE" gradient icon, so the site will still work perfectly.

