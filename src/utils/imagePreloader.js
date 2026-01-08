/**
 * Preload images to improve performance
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Promise<void>} - Resolves when all images are loaded
 */
export const preloadImages = imageUrls => {
  return Promise.all(
    imageUrls.map(
      url =>
        new Promise((resolve, reject) => {
          const img = new Image()
          img.src = url
          img.onload = () => resolve(url)
          img.onerror = () => reject(new Error(`Failed to load image: ${url}`))
        })
    )
  )
}

/**
 * Preload a single image
 * @param {string} imageUrl - Image URL to preload
 * @returns {Promise<string>} - Resolves with the URL when loaded
 */
export const preloadImage = imageUrl => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = imageUrl
    img.onload = () => resolve(imageUrl)
    img.onerror = () => reject(new Error(`Failed to load image: ${imageUrl}`))
  })
}

/**
 * Preload images with priority (using link rel="preload")
 * Best for critical above-fold images
 * @param {string[]} imageUrls - Array of image URLs to preload
 */
export const preloadImagesWithLinkTag = imageUrls => {
  imageUrls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = url
    document.head.appendChild(link)
  })
}

/**
 * Hook for preloading images in React components
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @param {boolean} enabled - Whether to enable preloading (default: true)
 */
export const useImagePreloader = (imageUrls, enabled = true) => {
  React.useEffect(() => {
    if (!enabled || !imageUrls || imageUrls.length === 0) return

    const preload = async () => {
      try {
        await preloadImages(imageUrls)
        console.log('✅ Images preloaded:', imageUrls.length)
      } catch (error) {
        console.warn('⚠️ Image preload error:', error)
      }
    }

    preload()
  }, [imageUrls, enabled])
}

/**
 * Get critical images for a project detail page
 * @param {string} projectSlug - Project slug (e.g., 'hexagonal-war')
 * @returns {string[]} - Array of critical image URLs to preload
 */
export const getCriticalImages = projectSlug => {
  const basePath = '/personal-portfolio/media'

  const criticalImages = {
    'hexagonal-war': [
      `${basePath}/projects/hex/hero-board.webp`,
      `${basePath}/projects/hex/layer-1.webp`,
      `${basePath}/projects/hex/layer-2.webp`,
      `${basePath}/projects/hex/layer-3.webp`
    ],
    '3d-model': [
      `${basePath}/projects/3d-model/model_cover.webp`,
      `${basePath}/projects/3d-model/castle-ref.webp`
    ],
    'thesis-project': [
      `${basePath}/projects/fyp/overview.webp`,
      `${basePath}/thumbnails/thesis_cover.webp`
    ]
  }

  return criticalImages[projectSlug] || []
}
