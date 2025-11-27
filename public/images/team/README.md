# Team Photos Directory

Place team member photos in this directory.

## Naming Convention

Use the following naming format:
- `tanzima.jpg` or `tanzima.png`
- `sameer.jpg` or `sameer.png`
- `om.jpg` or `om.png`
- `abdullah.jpg` or `abdullah.png`
- `sukhjit-singh.jpg` or `sukhjit-singh.png`
- `riya-shah.jpg` or `riya-shah.png`
- `sri-datta.jpg` or `sri-datta.png`
- `varisdeep-singh.jpg` or `varisdeep-singh.png`

## Image Requirements

- **Format**: JPG or PNG
- **Size**: 400x400px (square) recommended
- **Aspect Ratio**: 1:1 (square)
- **File Size**: Keep under 200KB per image
- **Optimization**: Compress images for web

## Usage

To add team photos, update `components/Team.tsx` to include image paths:

```tsx
{
  name: 'Sukhjit Singh',
  role: 'Full Stack Developer',
  image: '/images/team/sukhjit-singh.jpg',
  // ... rest of the data
}
```

Then update the component to display images instead of icons.

