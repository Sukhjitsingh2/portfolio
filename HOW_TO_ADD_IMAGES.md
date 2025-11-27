# How to Add VIGILANTEye UI/UX Images

This guide will help you add screenshots from your VIGILANTEye application to the portfolio.

## Step 1: Take Screenshots

Take screenshots of your VIGILANTEye application interfaces:

### Recommended Screenshots:

1. **Dashboard** (`dashboard.png`)
   - Main dashboard view
   - Path: `app/templates/dashboard.html`
   - Take screenshot of the full dashboard

2. **Mobile View** (`mobile.png`)
   - Responsive mobile interface
   - Open dashboard in mobile view (Chrome DevTools)
   - Take screenshot

3. **UI Design** (`ui-design.png`)
   - Any clean UI interface
   - Could be login page, profile page, etc.
   - Path: `app/templates/auth/login.html` or `app/templates/profile.html`

4. **Performance** (`performance.png`)
   - Analytics or performance dashboard
   - Path: `app/templates/ai_analytics_dashboard.html`

5. **UX Design** (`ux-design.png`)
   - User flow or interface
   - Path: `app/templates/faceai_dashboard.html` or `app/templates/cctv_dashboard.html`

6. **Components** (`components.png`)
   - Component showcase
   - Any page showing UI components

## Step 2: Save Images

1. **Create the directory** (if it doesn't exist):
   ```bash
   mkdir -p portfolio-website/public/images/uiux
   ```

2. **Save your screenshots** with these exact names:
   - `dashboard.png`
   - `mobile.png`
   - `ui-design.png`
   - `performance.png`
   - `ux-design.png`
   - `components.png`

## Step 3: Optimize Images

Before adding images, optimize them for web:

### Using Online Tools:
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced compression

### Recommended Settings:
- **Format**: PNG (for screenshots with text)
- **Size**: 
  - Feature images: 800x450px (16:9 ratio)
  - Max file size: 200KB per image
- **Quality**: 80-85% (good balance)

## Step 4: Place Images

Copy your optimized images to:
```
portfolio-website/public/images/uiux/
```

Your directory should look like:
```
portfolio-website/
└── public/
    └── images/
        └── uiux/
            ├── dashboard.png
            ├── mobile.png
            ├── ui-design.png
            ├── performance.png
            ├── ux-design.png
            └── components.png
```

## Step 5: Verify Images

1. **Start the development server**:
   ```bash
   cd portfolio-website
   npm run dev
   ```

2. **Navigate to UI/UX section**:
   - Go to http://localhost:3000
   - Scroll to the UI/UX section
   - Check that images display correctly

## Quick Screenshot Guide

### Using Browser DevTools:

1. **Open your VIGILANTEye app** in browser
2. **Open DevTools** (F12)
3. **Take screenshot**:
   - Chrome: `Ctrl+Shift+P` → "Capture full size screenshot"
   - Firefox: `Ctrl+Shift+S` → "Screenshot"
   - Edge: `Ctrl+Shift+S` → "Capture full page"

### Using Browser Extensions:

- **Full Page Screen Capture** (Chrome)
- **Fireshot** (Firefox/Chrome)
- **Awesome Screenshot** (All browsers)

### Mobile Screenshots:

1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select device (iPhone, iPad, etc.)
4. Take screenshot

## Image Naming Convention

Make sure your images match these exact names:
- ✅ `dashboard.png` (not `Dashboard.png` or `dashboard.PNG`)
- ✅ `mobile.png`
- ✅ `ui-design.png`
- ✅ `performance.png`
- ✅ `ux-design.png`
- ✅ `components.png`

## Troubleshooting

### Images Not Showing?

1. **Check file names** - Must match exactly (case-sensitive)
2. **Check file location** - Must be in `public/images/uiux/`
3. **Check file format** - Must be PNG or JPG
4. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)
5. **Restart dev server** - Stop and restart `npm run dev`

### Images Too Large?

1. **Compress images** using TinyPNG
2. **Resize images** to recommended dimensions
3. **Use WebP format** for better compression (optional)

### Images Look Blurry?

1. **Use higher resolution** screenshots
2. **Don't resize up** - only resize down
3. **Use PNG** for screenshots with text

## Alternative: Use Placeholder Images

If you don't have screenshots yet, the portfolio will show placeholder icons. You can add images later without changing any code - just place them in the directory!

## Next Steps

Once images are added:
1. ✅ Images will automatically display
2. ✅ Hover effects will work
3. ✅ 3D animations will apply to images
4. ✅ Portfolio will look professional

## Need Help?

If you need help:
1. Check the browser console for errors
2. Verify image paths in DevTools Network tab
3. Ensure images are in the correct directory
4. Check file permissions

---

**Note**: The component automatically handles missing images by showing placeholders, so you can add images gradually without breaking the site.

