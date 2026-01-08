import React, { useState, useEffect, useRef } from 'react'

export const LazyImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  placeholderClassName = '',
  onLoad,
  threshold = 0.1,
  rootMargin = '50px',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(imgRef.current)

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [threshold, rootMargin])

  const handleLoad = e => {
    setIsLoaded(true)
    if (onLoad) onLoad(e)
  }

  return (
    <div
      ref={imgRef}
      className={`lazy-image-container ${placeholderClassName}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: isLoaded ? 'transparent' : 'var(--brand-scale-2-light)',
        ...style
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={handleLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          loading='lazy'
          {...props}
        />
      )}
      {!isLoaded && isInView && (
        <div
          className='lazy-image-placeholder'
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--brand-scale-2-light)'
          }}
        >
          <div
            className='spinner'
            style={{
              width: '40px',
              height: '40px',
              border: '3px solid var(--brand-scale-3-light)',
              borderTop: '3px solid var(--accent-600)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}
          />
        </div>
      )}
    </div>
  )
}

// Add to global CSS or inline style tag
const styleTag = document.createElement('style')
styleTag.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
if (!document.querySelector('style[data-lazy-image]')) {
  styleTag.setAttribute('data-lazy-image', 'true')
  document.head.appendChild(styleTag)
}
