# UI/UX Images Directory

Place your UI/UX related images in this directory.

## Image Structure

### Feature Images (400x200px recommended)
- `dashboard.png` - Dashboard design screenshot
- `mobile.png` - Mobile responsive design
- `ui-design.png` - UI design showcase
- `performance.png` - Performance optimization UI
- `ux-design.png` - UX design examples
- `components.png` - Component library showcase

### Screenshot Images (1200x800px recommended)
- `screenshot-1.png` - Home Dashboard
- `screenshot-2.png` - Face Detection Interface
- `screenshot-3.png` - Project Management
- `screenshot-4.png` - Analytics View
- `screenshot-5.png` - Settings Panel
- `screenshot-6.png` - Mobile View

## Image Requirements

- **Format**: PNG or JPG
- **Feature Images**: 400x200px or 16:9 aspect ratio
- **Screenshots**: 1200x800px or 3:2 aspect ratio
- **Optimization**: Compress images for web (use tools like TinyPNG)

## Usage

Once images are added, uncomment the Image components in `components/UIUXShowcase.tsx`:

```tsx
// Change from:
<div className="text-gray-500 text-sm">Image Placeholder</div>

// To:
<Image
  src={feature.image}
  alt={feature.title}
  width={400}
  height={200}
  className="object-cover w-full h-full"
/>
```

## Image Sources

You can use:
- Screenshots from your VIGILANTEye application
- UI mockups and wireframes
- Design system components
- User flow diagrams
- Prototype screenshots

