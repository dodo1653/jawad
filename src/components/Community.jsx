import { useEffect, useRef, useState } from 'react'

const Community = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="community" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-terminal-surface)' }}>
      <div className="terminal-container">
        <div 
          className="transition-all duration-700 ease-out mb-10"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="label">// COMMUNITY</p>
        </div>

        <div 
          className="transition-all duration-700 ease-out delay-100 mb-10"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join the Chill Zone</h2>
          <p className="max-w-md mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Be part of the unbothered. Stay calm, stay hydrated, hold $CORTISOL.
          </p>
        </div>

        <div 
          className="flex flex-wrap gap-3 transition-all duration-700 ease-out delay-200"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm transition-colors duration-300"
            style={{ 
              background: '#0d9488',
              color: '#000',
              borderRadius: '4px',
            }}
          >
            X Community
          </a>
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm transition-colors duration-300 border"
            style={{ 
              borderColor: 'rgba(255,255,255,0.2)',
              borderRadius: '4px',
              color: '#ffffff',
            }}
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Community
