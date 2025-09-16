import { createApp } from 'vue'
import App from './App.vue'

// Import main styles
import './assets/styles/main.scss'
import './assets/styles/typography.scss'
import './assets/styles/animations.scss'

// Create Vue app instance
const app = createApp(App)

// Add global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info)
}

// Add global properties if needed
app.config.globalProperties.$log = console.log

// Mount the app
app.mount('#app')

// Add some global performance optimizations
if (typeof window !== 'undefined') {
  // Optimize scroll performance
  let ticking = false
  
  const optimizedScroll = (callback) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback()
        ticking = false
      })
      ticking = true
    }
  }

  // Add performance observer for monitoring
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })
    } catch (e) {
      console.log('PerformanceObserver not supported')
    }
  }

  // Preload critical resources
  const preloadResource = (href, as, type = null) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    if (type) link.type = type
    document.head.appendChild(link)
  }

  // Preload Google Fonts
  preloadResource('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap', 'style')

  // Add viewport meta if not present
  if (!document.querySelector('meta[name="viewport"]')) {
    const viewport = document.createElement('meta')
    viewport.name = 'viewport'
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    document.head.appendChild(viewport)
  }

  // Add theme color meta
  const themeColor = document.createElement('meta')
  themeColor.name = 'theme-color'
  themeColor.content = '#1a1a1a'
  document.head.appendChild(themeColor)

  // Set document title and meta description
  document.title = 'EXPO REAL ESTATE 2025 - Международная выставка недвижимости в Москве'
  
  const description = document.createElement('meta')
  description.name = 'description'
  description.content = 'EXPO REAL ESTATE 2025 - важнейший международный хаб инвестиционной недвижимости. Весна 2025, Москва-Сити. Эксклюзивные предложения, VIP переговоры, инвестиционные возможности.'
  document.head.appendChild(description)

  // Add Open Graph meta tags
  const ogTitle = document.createElement('meta')
  ogTitle.property = 'og:title'
  ogTitle.content = 'EXPO REAL ESTATE 2025 - Международная выставка недвижимости'
  document.head.appendChild(ogTitle)

  const ogDescription = document.createElement('meta')
  ogDescription.property = 'og:description'
  ogDescription.content = 'Международный хаб инвестиционной недвижимости. Эксклюзивные предложения, VIP переговоры, инвестиционные возможности в Москва-Сити.'
  document.head.appendChild(ogDescription)

  const ogType = document.createElement('meta')
  ogType.property = 'og:type'
  ogType.content = 'website'
  document.head.appendChild(ogType)

  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "EXPO REAL ESTATE 2025",
    "description": "Международная выставка недвижимости и инвестиций",
    "startDate": "2025-04-01",
    "endDate": "2025-04-03",
    "location": {
      "@type": "Place",
      "name": "Деловой центр Москва-Сити",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Пресненская набережная, 2",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "EXPO REAL ESTATE",
      "email": "org@exporealestate.ru",
      "telephone": "+7 (499) 35 0000 6"
    }
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)

  // Add CSS custom properties for dynamic theming
  const root = document.documentElement
  root.style.setProperty('--primary-color', '#E31E24')
  root.style.setProperty('--dark-color', '#1a1a1a')
  root.style.setProperty('--white-color', '#ffffff')
  
  // Enable smooth scrolling for browsers that don't support CSS smooth scrolling
  if (!CSS.supports('scroll-behavior', 'smooth')) {
    const smoothScroll = (target) => {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // Add smooth scroll polyfill functionality
    window.smoothScroll = smoothScroll
  }

  // Add intersection observer polyfill check
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Consider adding a polyfill.')
  }

  // Log app initialization
  console.log('🏢 EXPO REAL ESTATE 2025 App Initialized')
  console.log('📧 Contact: org@exporealestate.ru')
  console.log('📞 Phone: +7 (499) 35 0000 6')
}