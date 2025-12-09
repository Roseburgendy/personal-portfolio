# School Highlights Carousel - Setup Guide

The "Currently Working On" card has been replaced with an interactive carousel showcasing your school highlight moments.

## Features

- **Auto-playing carousel** - Automatically cycles through highlights every 4 seconds
- **Manual navigation** - Arrow buttons and dot indicators for manual control
- **Hover descriptions** - Full description appears when hovering over a slide
- **Smooth transitions** - Elegant fade animations between slides
- **Pause on hover** - Auto-play pauses when you hover over the carousel
- **Responsive design** - Works beautifully on all screen sizes

## Files Created

1. **[src/components/SchoolHighlightsCarousel.jsx](src/components/SchoolHighlightsCarousel.jsx)** - The carousel component
2. **[src/data/schoolHighlights.js](src/data/schoolHighlights.js)** - Your highlight moments data

## How to Add Your Images

### Step 1: Create the Images Folder

Create a folder for your highlight images:
```
public/personal-portfolio/media/highlights/
```

### Step 2: Add Your Images

Place your school highlight images in the folder:
- `graduation.jpg`
- `workshop.jpg`
- `hackathon.jpg`
- `exhibition.jpg`
- `study-abroad.jpg`

**Recommended image specifications:**
- Format: JPG or PNG
- Dimensions: 800x600 pixels or similar 4:3 ratio
- File size: Under 500KB for optimal loading

### Step 3: Update the Data

Edit [src/data/schoolHighlights.js](src/data/schoolHighlights.js) with your actual moments:

```javascript
export const schoolHighlights = [
  {
    id: 1,
    title: "Your Moment Title",
    subtitle: "Short subtitle",
    description: "Detailed description that appears on hover",
    image: "/personal-portfolio/media/highlights/your-image.jpg",
    date: "Month Year"
  },
  // Add more highlights...
];
```

## Using Placeholder Images (Temporary)

If you don't have images yet, you can use placeholder images:

```javascript
{
  id: 1,
  title: "Graduation Ceremony",
  subtitle: "Class of 2026",
  description: "A memorable day celebrating our achievements...",
  image: "https://picsum.photos/800/600?random=1",
  date: "July 2026"
}
```

## Carousel Behavior

### Default Behavior
- Slides change automatically every 4 seconds
- Smooth fade transition between slides
- Title and subtitle always visible at bottom
- Full description appears on hover

### User Interactions
- **Hover** - Pauses auto-play and shows full description
- **Left/Right arrows** - Navigate manually
- **Dot indicators** - Jump to specific slide
- **Mouse leave** - Resumes auto-play

## Customization Options

### Change Auto-Play Speed

In [SchoolHighlightsCarousel.jsx](src/components/SchoolHighlightsCarousel.jsx), line 16:
```javascript
}, 4000); // Change this number (milliseconds)
```

### Modify Carousel Height

In [SchoolHighlightsCarousel.jsx](src/components/SchoolHighlightsCarousel.jsx), line 35:
```javascript
className="card-glass-gradient rounded-3xl overflow-hidden relative h-full min-h-[350px]"
// Change min-h-[350px] to your desired height
```

### Adjust Gradient Overlay

In [SchoolHighlightsCarousel.jsx](src/components/SchoolHighlightsCarousel.jsx), line 57:
```javascript
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
// Adjust opacity values (/80, /30) to make overlay darker or lighter
```

## Structure

The carousel displays on the About page in a two-column grid:
- Left: Education Card
- Right: School Highlights Carousel (replaced "Currently Working On")

## Example Data Structure

```javascript
{
  id: 1,                    // Unique identifier
  title: "Main Title",      // Always visible (large text at bottom)
  subtitle: "Subtitle",     // Always visible (small text at bottom)
  description: "Long...",   // Shows on hover (center overlay)
  image: "/path/to/img",    // Background image
  date: "Month Year"        // Shows on hover (below description)
}
```

## Troubleshooting

**Images not showing:**
- Check that image paths are correct
- Ensure images are in `public/personal-portfolio/media/highlights/`
- Try using placeholder images first

**Carousel not auto-playing:**
- Check browser console for errors
- Ensure the highlights array has multiple items

**Hover not working:**
- Make sure you're hovering over the image area
- Check that the slide is fully loaded

## Best Practices

1. **Image Quality** - Use high-quality images that represent meaningful moments
2. **Consistent Sizing** - Keep all images the same aspect ratio (4:3 recommended)
3. **Optimize Files** - Compress images to improve loading speed
4. **Descriptive Text** - Write engaging descriptions that tell your story
5. **Chronological Order** - Arrange highlights from newest to oldest (or vice versa)

## Next Steps

1. Gather 3-5 memorable photos from your school experience
2. Create the highlights folder and add your images
3. Update schoolHighlights.js with your actual moments
4. Test the carousel on your About page
5. Adjust styling/timing to your preference

Enjoy showcasing your school journey!
