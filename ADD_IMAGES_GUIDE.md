# Adding UI/UX Images to Portfolio

This guide explains how to add UI/UX related images to your portfolio website.

## Quick Start

1. **Add your images** to `public/images/uiux/` directory
2. **Uncomment the image code** in `components/UIUXShowcase.tsx`
3. **Replace placeholder divs** with actual image tags

## Directory Structure

```
public/
└── images/
    ├── uiux/
    │   ├── dashboard.png
    │   ├── mobile.png
    │   ├── ui-design.png
    │   ├── performance.png
    │   ├── ux-design.png
    │   ├── components.png
    │   ├── screenshot-1.png
    │   ├── screenshot-2.png
    │   ├── screenshot-3.png
    │   ├── screenshot-4.png
    │   ├── screenshot-5.png
    │   └── screenshot-6.png
    └── team/
        ├── tanzima.jpg
        ├── sameer.jpg
        ├── om.jpg
        ├── abdullah.jpg
        ├── sukhjit-singh.jpg
        ├── riya-shah.jpg
        ├── sri-datta.jpg
        └── varisdeep-singh.jpg
```

## Step-by-Step Instructions

### 1. Feature Images (Small Cards)

**Location**: `components/UIUXShowcase.tsx` (around line 50)

**Current code**:
```tsx
<div className="mt-4 h-48 bg-gradient-to-br from-dark-800 to-dark-700 rounded-lg flex items-center justify-center overflow-hidden relative group-hover:from-primary-900/20 group-hover:to-purple-900/20 transition-all">
  <div className="text-gray-500 text-sm flex flex-col items-center">
    <feature.icon className="w-12 h-12 mb-2 opacity-50" />
    <span>{feature.title}</span>
  </div>
</div>
```

**Replace with**:
```tsx
<div className="mt-4 h-48 bg-dark-800 rounded-lg overflow-hidden relative">
  <img
    src={feature.image}
    alt={feature.title}
    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
  />
</div>
```

### 2. Screenshot Gallery Images

**Location**: `components/UIUXShowcase.tsx` (around line 140)

**Current code**:
```tsx
<div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center relative overflow-hidden group-hover:from-primary-900/30 group-hover:to-purple-900/30 transition-all">
  <div className="text-gray-500 text-sm text-center px-4">
    <Layout className="w-16 h-16 mx-auto mb-2 opacity-50" />
    <div className="font-semibold">{screenshot.title}</div>
    <div className="text-xs mt-1">{screenshot.category}</div>
  </div>
</div>
```

**Replace with**:
```tsx
<div className="aspect-video bg-dark-800 relative overflow-hidden">
  <img
    src={screenshot.image}
    alt={screenshot.title}
    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
</div>
```

### 3. Modal Preview Image

**Location**: `components/UIUXShowcase.tsx` (around line 220)

**Current code**:
```tsx
<div className="aspect-video bg-dark-700 flex items-center justify-center min-w-[600px]">
  <div className="text-gray-400 text-center">
    <Layout className="w-24 h-24 mx-auto mb-4 opacity-50" />
    <div>Full-size image preview</div>
  </div>
</div>
```

**Replace with**:
```tsx
<div className="bg-dark-700 flex items-center justify-center min-w-[600px] max-h-[80vh]">
  <img
    src={selectedImage}
    alt="Full size preview"
    className="object-contain max-h-[80vh] w-full rounded-lg"
  />
</div>
```

## Image Recommendations

### Feature Images
- **Size**: 400x200px (16:9 aspect ratio)
- **Format**: PNG or JPG
- **File Size**: Under 100KB each
- **Content**: UI mockups, design concepts, feature highlights

### Screenshot Images
- **Size**: 1200x800px (3:2 aspect ratio)
- **Format**: PNG (for transparency) or JPG
- **File Size**: Under 300KB each
- **Content**: Actual application screenshots, dashboard views, interfaces

## Image Optimization Tips

1. **Use image compression tools**:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Optimize for web**:
   - Use PNG for screenshots with text
   - Use JPG for photos/realistic images
   - Consider WebP format for better compression

3. **Responsive images**:
   - Consider using Next.js Image component for automatic optimization
   - Or use responsive image sizes

## Example Images You Can Add

1. **Dashboard Screenshots**: Main dashboard, analytics views
2. **Mobile Views**: Responsive design examples
3. **Component Library**: UI components showcase
4. **User Flows**: Wireframes or flow diagrams
5. **Design System**: Color palettes, typography, spacing
6. **Prototypes**: Interactive prototype screenshots

## Testing

After adding images:

1. Run `npm run dev`
2. Navigate to the UI/UX section
3. Check that images load correctly
4. Test the modal preview functionality
5. Verify responsive behavior on mobile

## Troubleshooting

**Images not showing?**
- Check file paths match exactly (case-sensitive)
- Ensure images are in `public/images/uiux/` directory
- Verify image file names match the code

**Images too large?**
- Compress images using optimization tools
- Consider using Next.js Image component for automatic optimization

**Modal not working?**
- Check that `selectedImage` state is set correctly
- Verify image paths in the screenshots array

## Next Steps

Once images are added:
1. Test all functionality
2. Optimize images for performance
3. Add alt text for accessibility
4. Consider lazy loading for better performance

