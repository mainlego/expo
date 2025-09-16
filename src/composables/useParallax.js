import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useParallax() {
  const elements = ref([])
  const isEnabled = ref(true)

  // Check if user prefers reduced motion
  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const addParallaxElement = (element, options = {}) => {
    if (!element || prefersReducedMotion()) return

    const defaultOptions = {
      speed: -0.5, // Negative values move up, positive move down
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      ease: 'none'
    }

    const config = { ...defaultOptions, ...options }
    
    const animation = gsap.to(element, {
      yPercent: config.speed * 100,
      ease: config.ease,
      scrollTrigger: {
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        scrub: config.scrub,
        onUpdate: config.onUpdate,
        onToggle: config.onToggle
      }
    })

    elements.value.push({
      element,
      animation,
      config
    })

    return animation
  }

  const addLayeredParallax = (layersConfig) => {
    if (prefersReducedMotion()) return []

    return layersConfig.map((layerConfig, index) => {
      const { element, speed = -0.2 * (index + 1), ...options } = layerConfig
      return addParallaxElement(element, { speed, ...options })
    })
  }

  const addMouseParallax = (container, elements, options = {}) => {
    if (!container || !elements.length || prefersReducedMotion()) return

    const { 
      strength = 0.1, 
      ease = 'power2.out',
      duration = 1.5 
    } = options

    let isHovering = false

    const handleMouseMove = (e) => {
      if (!isHovering) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      elements.forEach((element, index) => {
        const multiplier = (index + 1) * 0.5
        gsap.to(element, {
          x: deltaX * multiplier,
          y: deltaY * multiplier,
          duration,
          ease
        })
      })
    }

    const handleMouseEnter = () => {
      isHovering = true
    }

    const handleMouseLeave = () => {
      isHovering = false
      elements.forEach(element => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: duration * 1.5,
          ease: 'elastic.out(1, 0.5)'
        })
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }

  const addScrollParallax = (element, options = {}) => {
    if (!element || prefersReducedMotion()) return

    const {
      property = 'y',
      start = 0,
      end = 100,
      unit = 'px',
      ease = 'none'
    } = options

    return gsap.fromTo(element, 
      { [property]: start + unit },
      {
        [property]: end + unit,
        ease,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    )
  }

  const addRotationParallax = (element, options = {}) => {
    if (!element || prefersReducedMotion()) return

    const {
      speed = 1,
      direction = 1, // 1 for clockwise, -1 for counterclockwise
      start = 'top bottom',
      end = 'bottom top'
    } = options

    return gsap.to(element, {
      rotation: 360 * speed * direction,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true
      }
    })
  }

  const addScaleParallax = (element, options = {}) => {
    if (!element || prefersReducedMotion()) return

    const {
      fromScale = 0.8,
      toScale = 1.2,
      start = 'top bottom',
      end = 'bottom top'
    } = options

    return gsap.fromTo(element,
      { scale: fromScale },
      {
        scale: toScale,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub: true
        }
      }
    )
  }

  const addDepthParallax = (element, options = {}) => {
    if (!element || prefersReducedMotion()) return

    const {
      z = -100,
      rotationX = 0,
      rotationY = 0,
      perspective = 1000
    } = options

    // Set initial 3D properties
    gsap.set(element, {
      transformPerspective: perspective,
      transformStyle: 'preserve-3d'
    })

    return gsap.to(element, {
      z,
      rotationX,
      rotationY,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  const addTextParallax = (container, options = {}) => {
    if (!container || prefersReducedMotion()) return

    const words = container.querySelectorAll('[data-parallax-word]')
    if (!words.length) return

    const { baseSpeed = -0.2 } = options

    words.forEach((word, index) => {
      const speed = baseSpeed * (1 + index * 0.1)
      addParallaxElement(word, { speed })
    })
  }

  const createFloatingElements = (container, count = 10, options = {}) => {
    if (!container || prefersReducedMotion()) return []

    const {
      size = { min: 4, max: 12 },
      opacity = { min: 0.3, max: 0.7 },
      speed = { min: -0.5, max: -1.5 },
      colors = ['#E31E24', '#ffffff', '#b71c1c']
    } = options

    const elements = []

    for (let i = 0; i < count; i++) {
      const element = document.createElement('div')
      const elementSize = size.min + Math.random() * (size.max - size.min)
      const elementOpacity = opacity.min + Math.random() * (opacity.max - opacity.min)
      const elementSpeed = speed.min + Math.random() * (speed.max - speed.min)
      const elementColor = colors[Math.floor(Math.random() * colors.length)]

      element.style.cssText = `
        position: absolute;
        width: ${elementSize}px;
        height: ${elementSize}px;
        background: ${elementColor};
        border-radius: 50%;
        opacity: ${elementOpacity};
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        pointer-events: none;
      `

      container.appendChild(element)
      elements.push(element)

      // Add parallax to each floating element
      addParallaxElement(element, { speed: elementSpeed })

      // Add floating animation
      gsap.to(element, {
        y: -20,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: Math.random() * 2
      })
    }

    return elements
  }

  const toggleParallax = (enabled) => {
    isEnabled.value = enabled
    elements.value.forEach(({ animation }) => {
      if (enabled) {
        animation.play()
      } else {
        animation.pause()
      }
    })
  }

  const refreshParallax = () => {
    ScrollTrigger.refresh()
  }

  const updateParallaxSpeed = (element, newSpeed) => {
    const parallaxElement = elements.value.find(item => item.element === element)
    if (parallaxElement) {
      parallaxElement.animation.kill()
      addParallaxElement(element, { ...parallaxElement.config, speed: newSpeed })
    }
  }

  const cleanup = () => {
    elements.value.forEach(({ animation }) => {
      animation.kill()
    })
    elements.value = []
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  // Automatically disable parallax on mobile devices for performance
  const checkMobileDevice = () => {
    const isMobile = window.innerWidth <= 768 || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      toggleParallax(false)
    }
  }

  onMounted(() => {
    checkMobileDevice()
    
    // Listen for resize events
    const handleResize = () => {
      refreshParallax()
      checkMobileDevice()
    }
    
    window.addEventListener('resize', handleResize)
    
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      cleanup()
    })
  })

  return {
    addParallaxElement,
    addLayeredParallax,
    addMouseParallax,
    addScrollParallax,
    addRotationParallax,
    addScaleParallax,
    addDepthParallax,
    addTextParallax,
    createFloatingElements,
    toggleParallax,
    refreshParallax,
    updateParallaxSpeed,
    cleanup,
    isEnabled
  }
}