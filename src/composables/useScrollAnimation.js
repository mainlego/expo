import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const isInitialized = ref(false)

  const initializeScrollTrigger = () => {
    if (isInitialized.value) return

    ScrollTrigger.refresh()
    isInitialized.value = true
  }

  const animateOnScroll = (element, animation, options = {}) => {
    if (!element) return

    const defaultOptions = {
      trigger: element,
      start: 'top 85%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options
    }

    return gsap.fromTo(element, animation.from, {
      ...animation.to,
      scrollTrigger: defaultOptions
    })
  }

  const fadeInUp = (element, options = {}) => {
    return animateOnScroll(element, {
      from: { y: 50, opacity: 0 },
      to: { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out',
        ...options.animation
      }
    }, options.trigger)
  }

  const fadeInLeft = (element, options = {}) => {
    return animateOnScroll(element, {
      from: { x: -50, opacity: 0 },
      to: { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out',
        ...options.animation
      }
    }, options.trigger)
  }

  const fadeInRight = (element, options = {}) => {
    return animateOnScroll(element, {
      from: { x: 50, opacity: 0 },
      to: { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out',
        ...options.animation
      }
    }, options.trigger)
  }

  const scaleIn = (element, options = {}) => {
    return animateOnScroll(element, {
      from: { scale: 0.8, opacity: 0 },
      to: { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        ease: 'back.out(1.7)',
        ...options.animation
      }
    }, options.trigger)
  }

  const staggerAnimation = (elements, animation, options = {}) => {
    if (!elements || elements.length === 0) return

    const defaultOptions = {
      trigger: elements[0].closest('section') || elements[0],
      start: 'top 85%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options.trigger
    }

    return gsap.fromTo(elements, animation.from, {
      ...animation.to,
      stagger: 0.2,
      scrollTrigger: defaultOptions,
      ...options.animation
    })
  }

  const parallaxEffect = (element, options = {}) => {
    if (!element) return

    const { speed = -0.5, start = 'top bottom', end = 'bottom top' } = options

    return gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
        ...options
      }
    })
  }

  const createTimeline = (options = {}) => {
    return gsap.timeline({
      scrollTrigger: {
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...options
      }
    })
  }

  const animateCounter = (element, target, options = {}) => {
    if (!element) return

    const { duration = 2, ease = 'power2.out', decimals = 0 } = options
    
    return gsap.to({}, {
      duration,
      ease,
      onUpdate: function() {
        const progress = this.progress()
        const currentValue = progress * target
        
        if (decimals > 0) {
          element.textContent = currentValue.toFixed(decimals)
        } else {
          element.textContent = Math.floor(currentValue).toLocaleString('ru-RU')
        }
      },
      onComplete: () => {
        if (decimals > 0) {
          element.textContent = target.toFixed(decimals)
        } else {
          element.textContent = target.toLocaleString('ru-RU')
        }
      }
    })
  }

  const morphText = (element, options = {}) => {
    if (!element) return

    const { 
      trigger = element,
      duration = 0.6,
      ease = 'power2.out'
    } = options

    const originalText = element.textContent
    const morphedElement = element.querySelector('::before') || element

    return gsap.fromTo(morphedElement, 
      {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration,
        ease,
        scrollTrigger: {
          trigger,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const createScrollIndicator = () => {
    const indicator = document.createElement('div')
    indicator.className = 'scroll-progress-indicator'
    indicator.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 4px;
      background: linear-gradient(90deg, #E31E24 0%, #b71c1c 100%);
      z-index: 9999;
      transform-origin: left;
    `
    document.body.appendChild(indicator)

    gsap.to(indicator, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    })

    return indicator
  }

  const magneticEffect = (element, options = {}) => {
    if (!element) return

    const { strength = 0.3, speed = 0.3 } = options

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) * strength
      const y = (e.clientY - rect.top - rect.height / 2) * strength

      gsap.to(element, {
        x,
        y,
        duration: speed,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: speed * 2,
        ease: 'elastic.out(1, 0.5)'
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }

  const cleanup = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  onMounted(() => {
    initializeScrollTrigger()
  })

  onBeforeUnmount(() => {
    cleanup()
  })

  return {
    initializeScrollTrigger,
    animateOnScroll,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerAnimation,
    parallaxEffect,
    createTimeline,
    animateCounter,
    morphText,
    createScrollIndicator,
    magneticEffect,
    cleanup
  }
}