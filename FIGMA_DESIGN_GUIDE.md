# Figma Design Guide: Button UI/UX

This guide will help you recreate the button UI/UX shown in the screenshot using Figma.

## Design Specifications

### Button Dimensions
- **Width**: 280px (auto-width based on content)
- **Height**: 48px
- **Padding**: 24px horizontal, 12px vertical
- **Border Radius**: 8px

### Typography
- **Font**: Inter (or system font)
- **Font Size**: 16px
- **Font Weight**: 500 (Medium)
- **Text**: "Generate"

## Color Palette

### Light Theme
- **Default Background**: #2563EB (Blue 600)
- **Default Text**: #FFFFFF (White)
- **Hover Background**: #1D4ED8 (Blue 700)
- **Hover Text**: #FFFFFF (White)
- **Disabled Background**: #E5E7EB (Gray 200)
- **Disabled Text**: #9CA3AF (Gray 400)

### Dark Theme
- **Default Background**: #1E293B (Slate 800)
- **Default Text**: #FFFFFF (White)
- **Hover Background**: #334155 (Slate 700)
- **Hover Text**: #FFFFFF (White)
- **Disabled Background**: #475569 (Slate 600)
- **Disabled Text**: #94A3B8 (Slate 400)

## Figma Setup Instructions

### 1. Create Frames
1. Create a new Figma file
2. Add frames for each section:
   - Light Theme Section (1200x400px)
   - Dark Theme Section (1200x400px)

### 2. Create Button Component
1. **Rectangle**: 280x48px with 8px border radius
2. **Text**: "Generate" centered in the rectangle
3. **Convert to Component**: Select both elements and create component (Ctrl/Cmd + Alt + K)

### 3. Create Variants
1. **Select the component** and click "Add variant" in the right panel
2. Create the following variants:
   - **State**: Default, Hover, Disabled
   - **Theme**: Light, Dark

### 4. Style Each Variant

#### Light Theme - Default
- Background: #2563EB
- Text: #FFFFFF
- Shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)

#### Light Theme - Hover
- Background: #1D4ED8
- Text: #FFFFFF
- Shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)

#### Light Theme - Disabled
- Background: #E5E7EB
- Text: #9CA3AF
- Opacity: 50%

#### Dark Theme - Default
- Background: #1E293B
- Text: #FFFFFF
- Shadow: 0px 1px 2px rgba(0, 0, 0, 0.25)

#### Dark Theme - Hover
- Background: #334155
- Text: #FFFFFF
- Shadow: 0px 1px 2px rgba(0, 0, 0, 0.25)

#### Dark Theme - Disabled
- Background: #475569
- Text: #94A3B8
- Opacity: 50%

### 5. Layout Design
1. **Create sections** with labels:
   - "Default", "Hover", "Disabled" for light theme
   - "Theme", "Dark" for dark theme sections
   - "Button/Primary" at the bottom

2. **Add background colors**:
   - Light section: #F9FAFB (Gray 50)
   - Dark section: #111827 (Gray 900)

3. **Position buttons** with proper spacing (40px between buttons)

### 6. Add Interactive Prototyping (Optional)
1. Select button instances
2. Add hover interactions in the Prototype panel
3. Set trigger to "While hovering"
4. Connect to hover variant

## Export Settings
- **Format**: PNG or SVG
- **Scale**: 2x for high resolution
- **Include**: All variants and states

## Tips for Figma
1. Use **Auto Layout** for consistent spacing
2. Create **Color Styles** for reusable colors
3. Use **Text Styles** for consistent typography
4. Group related elements for easier management
5. Name layers clearly (e.g., "Button/Primary/Default/Light")

## Figma Community Resources
You can also search for "Button Component" or "Design System" in Figma Community for pre-made components that you can customize to match this design.
