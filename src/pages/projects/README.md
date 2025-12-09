# Project Detail Pages - Customization Guide

This guide explains how to create customizable project detail pages while maintaining a consistent hero card structure across your portfolio.

## Architecture Overview

The project detail system consists of three main components:

1. **BaseProjectDetail**: A reusable base component with consistent hero card structure
2. **Custom Project Pages**: Individual pages for projects that need unique customization
3. **Project Registry**: Maps project slugs to their custom components

## How It Works

### 1. Project Data Structure

Each project in [src/data/projects.js](../../data/projects.js) must include a unique `slug`:

```javascript
{
  id: 1,
  slug: "hexagonal-war", // Unique identifier for routing
  title: "Hexagonal War: Chemical Crisis",
  role: "Game Designer, Project Manager",
  description: "Short description...",
  fullDescription: "Detailed description...",
  // ... other fields
}
```

### 2. Default Behavior

Projects without custom pages automatically use [BaseProjectDetail.jsx](./BaseProjectDetail.jsx) with default sections:
- Hero image + project meta card
- Overview + Features
- Contributions
- Gallery
- External links

### 3. Creating Custom Project Pages

For projects requiring unique layouts or content, create a custom component:

```javascript
// src/pages/projects/YourProjectDetail.jsx
import { BaseProjectDetail } from "./BaseProjectDetail";
import { RevealOnScroll } from "../../components/RevealOnScroll";
import { gameProjects } from "../../data/projects";

export const YourProjectDetail = () => {
  const project = gameProjects.find(p => p.slug === "your-project-slug");

  const customSections = (
    <>
      {/* Your custom sections here */}
      <RevealOnScroll>
        <div className="card-glass rounded-3xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4"
              style={{ color: "var(--text)" }}>
            Custom Section Title
          </h2>
          <p className="text-sm leading-relaxed"
             style={{ color: "var(--muted)" }}>
            Your custom content...
          </p>
        </div>
      </RevealOnScroll>
    </>
  );

  return <BaseProjectDetail project={project} customSections={customSections} />;
};
```

### 4. Register Your Custom Page

Add your component to the project registry in [index.js](./index.js):

```javascript
import { YourProjectDetail } from "./YourProjectDetail";

export const projectRegistry = {
  "hexagonal-war": HexagonalWarDetail,
  "your-project-slug": YourProjectDetail, // Add here
};
```

## Routing System

The routing system in [App.jsx](../../App.jsx) works as follows:

1. User navigates to `#project/your-slug`
2. System checks if a custom component exists in the registry
3. If yes: Renders the custom component
4. If no: Renders BaseProjectDetail with default sections
5. If project not found: Falls back to old ProjectDetail for backward compatibility

## Hero Card Structure

All project pages maintain this consistent hero structure:

```
┌─────────────────────────────────────────┐
│  Row 1: Hero Layout (h-[500-600px])    │
│  ┌──────────────┐  ┌────────────────┐  │
│  │  Hero Image  │  │  Meta Card:    │  │
│  │  (2/3 width) │  │  - Title       │  │
│  │              │  │  - Description │  │
│  │              │  │  - Role        │  │
│  │              │  │  - Duration    │  │
│  │              │  │  - Tech        │  │
│  │              │  │  - Team Size   │  │
│  └──────────────┘  └────────────────┘  │
└─────────────────────────────────────────┘
```

## Example: Hexagonal War Custom Page

See [HexagonalWarDetail.jsx](./HexagonalWarDetail.jsx) for a complete example that includes:

- Custom "Design Philosophy" section
- Two-column "Challenges + Features" layout
- Three-column "Development Process" timeline
- All default sections (contributions, gallery, links)

## Quick Start Checklist

To add a new custom project page:

- [ ] Add `slug` field to your project in `src/data/projects.js`
- [ ] Create your custom component in `src/pages/projects/YourProjectDetail.jsx`
- [ ] Register the component in `src/pages/projects/index.js`
- [ ] Test by navigating to `#project/your-slug`

## Best Practices

1. **Always maintain the hero structure** - Users expect consistent navigation
2. **Use RevealOnScroll** - Wrap sections for smooth animations
3. **Follow the color scheme** - Use CSS variables (`var(--text)`, `var(--muted)`, etc.)
4. **Use card-glass class** - Maintains consistent styling across sections
5. **Keep slugs URL-friendly** - Use lowercase with hyphens (e.g., `my-project`)

## Component Props Reference

### BaseProjectDetail

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| project | Object | Yes | Project data from projects.js |
| customSections | JSX | No | Custom content to replace default sections |
| heroLayout | String | No | Future: Support for alternate hero layouts |

### ProjectCard

The ProjectCard component automatically uses slugs:

```javascript
<ProjectCard project={projectData} categoryPrefix="" />
```

- If `project.slug` exists, uses slug for routing
- Otherwise falls back to `project.id` for backward compatibility

## Troubleshooting

**Project not found error:**
- Check that the `slug` in your project data matches the URL
- Verify the project is exported from `src/data/projects.js`

**Custom page not loading:**
- Confirm the component is imported in `index.js`
- Check that the registry key matches your project slug

**Styling issues:**
- Use CSS variables for colors to support theme switching
- Wrap sections in RevealOnScroll for animations
- Apply `card-glass` and `rounded-3xl` classes for consistency

## Future Enhancements

Potential improvements to consider:

- Multiple hero layout options
- Section templates library
- Project categories with different default layouts
- Dynamic section ordering
- Gallery lightbox integration
