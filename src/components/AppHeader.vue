<template>
  <header ref="headerRef" class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <span class="brand">
            EXPO <span class="red">REAL</span> ESTATE
          </span>
        </div>

        <!-- Contact Info -->
        <div class="header-contact">
          <div class="contact-item">
            <a href="mailto:org@exporealestate.ru" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              org@exporealestate.ru
            </a>
          </div>
          <div class="contact-item">
            <a href="tel:+74993500006" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +7 (499) 35 0000 6
            </a>
          </div>
          <div class="contact-item event-date">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            Весна 2025
          </div>
        </div>

        <!-- CTA Button -->
        <div class="header-cta">
          <button 
            @click="openModal" 
            class="btn btn-primary"
            ref="ctaButtonRef"
          >
            Узнать подробнее
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="toggleMobileMenu" 
          class="mobile-menu-toggle"
          :class="{ active: isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
        <div class="mobile-menu-content">
          <div class="mobile-contact">
            <a href="mailto:org@exporealestate.ru" class="mobile-contact-item">
              org@exporealestate.ru
            </a>
            <a href="tel:+74993500006" class="mobile-contact-item">
              +7 (499) 35 0000 6
            </a>
            <div class="mobile-contact-item">
              Весна 2025, выставка недвижимости в Москве
            </div>
          </div>
          <button @click="openModal" class="btn btn-primary mobile-cta">
            Узнать подробнее
          </button>
        </div>
      </div>
    </div>

    <!-- Background particles for header -->
    <div class="header-particles">
      <div 
        v-for="i in 20" 
        :key="i" 
        class="particle"
        :style="getParticleStyle(i)"
      ></div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'AppHeader',
  emits: ['open-modal'],
  setup(props, { emit }) {
    const headerRef = ref(null)
    const ctaButtonRef = ref(null)
    const isMobileMenuOpen = ref(false)
    const isScrolled = ref(false)

    const openModal = () => {
      emit('open-modal')
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const getParticleStyle = (index) => {
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      isScrolled.value = scrollY > 50

      if (headerRef.value) {
        if (scrollY > 50) {
          headerRef.value.classList.add('scrolled')
        } else {
          headerRef.value.classList.remove('scrolled')
        }
      }
    }

    const animateHeader = () => {
      const tl = gsap.timeline()
      
      tl.from('.logo', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power3.out'
      })
      .from('.contact-item', {
        duration: 0.8,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.header-cta', {
        duration: 0.8,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)'
      }, '-=0.3')

      // Animate particles
      gsap.set('.particle', {
        opacity: 0,
        scale: 0
      })

      gsap.to('.particle', {
        duration: 2,
        opacity: 0.7,
        scale: 1,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 1
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      animateHeader()

      // Add magnetic effect to CTA button
      if (ctaButtonRef.value) {
        const button = ctaButtonRef.value
        
        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          
          gsap.to(button, {
            duration: 0.3,
            x: x * 0.3,
            y: y * 0.3,
            ease: 'power2.out'
          })
        })

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            duration: 0.3,
            x: 0,
            y: 0,
            ease: 'power2.out'
          })
        })
      }
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      headerRef,
      ctaButtonRef,
      isMobileMenuOpen,
      isScrolled,
      openModal,
      toggleMobileMenu,
      getParticleStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $z-index-header;
  background: rgba($dark, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba($white, 0.1);
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba($dark, 0.98);
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .container {
    position: relative;
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;

  @media (max-width: $mobile) {
    padding: 0.75rem 0;
  }
}

.logo {
  .brand {
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $white;

    .red {
      color: $red;
    }
  }
}

.header-contact {
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: $tablet) {
    display: none;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: rgba($white, 0.8);

    &.event-date {
      color: $red;
      font-weight: 600;
    }

    svg {
      color: $red;
      width: 16px;
      height: 16px;
    }
  }

  .contact-link {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: $white;
      text-decoration: none;
    }
  }
}

.header-cta {
  @media (max-width: $tablet) {
    display: none;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;

  @media (max-width: $tablet) {
    display: flex;
  }

  span {
    width: 100%;
    height: 2px;
    background: $white;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: translateY(0);
    }

    &:nth-child(2) {
      opacity: 1;
    }

    &:nth-child(3) {
      transform: translateY(0);
    }
  }

  &.active {
    span {
      &:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    }
  }
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba($dark, 0.98);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba($white, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}

.mobile-menu-content {
  padding: 2rem 1rem;
}

.mobile-contact {
  margin-bottom: 2rem;

  .mobile-contact-item {
    display: block;
    padding: 0.75rem 0;
    color: rgba($white, 0.8);
    text-decoration: none;
    border-bottom: 1px solid rgba($white, 0.1);
    font-size: 0.875rem;

    &:last-child {
      border-bottom: none;
      color: $red;
      font-weight: 600;
    }

    &:hover {
      color: $white;
    }
  }
}

.mobile-cta {
  width: 100%;
  justify-content: center;
}

.header-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: $red;
    border-radius: 50%;
    opacity: 0.7;
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

// Hover effects
.header-content {
  .logo:hover .brand {
    text-shadow: 0 0 20px rgba($red, 0.5);
    transition: text-shadow 0.3s ease;
  }
}
</style>