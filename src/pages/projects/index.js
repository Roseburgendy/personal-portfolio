/**
 * Project Registry
 * Maps project slugs to their custom detail page components
 * If a project doesn't have a custom page, it will use BaseProjectDetail with default sections
 */

import { HexagonalWarDetail } from "./HexagonalWarDetail";
// Import other custom project detail pages here as you create them
// import { MysticForestDetail } from "./MysticForestDetail";
// import { SpaceColonyDetail } from "./SpaceColonyDetail";

export const projectRegistry = {
  "hexagonal-war": HexagonalWarDetail,
  // Add more custom project pages here:
  // "mystic-forest": MysticForestDetail,
  // "space-colony": SpaceColonyDetail,
};

/**
 * Get the component for a project detail page
 * @param {string} slug - The project slug
 * @returns {Component|null} - The component to render, or null if not found
 */
export const getProjectDetailComponent = (slug) => {
  return projectRegistry[slug] || null;
};
