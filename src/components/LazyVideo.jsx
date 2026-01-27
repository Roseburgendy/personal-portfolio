import { useEffect, useRef, useState } from 'react'

export const LazyVideo = ({
  src,
  poster,
  className = '',
  threshold = 0.5
}) => {
  const videoRef = useRef(null)
  const wrapperRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin: '50px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    if (inView) {
      // 延迟播放，避免多个视频同时解码
      const timer = setTimeout(() => {
        v.play().catch(() => {})
      }, 100)
      return () => clearTimeout(timer)
    } else {
      v.pause()
    }
  }, [inView])

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={wrapperRef} className={className}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload={inView ? 'auto' : 'none'}
        poster={poster}
        className='w-full h-full'
        style={{
          display: 'block',
          opacity: isLoaded ? 1 : 0.5,
          transition: 'opacity 0.3s ease'
        }}
        onLoadedData={handleLoadedData}
      >
        <source src={src} type='video/mp4' />
      </video>
    </div>
  )
}
