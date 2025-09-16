<template>
  <section ref="heroRef" class="hero">
    <!-- Background Video/Image -->
    <div class="hero-background">
      <div class="video-container">
        <img
            src="/images/hero-background.jpg"
            alt="Real Estate Exhibition Background"
            class="hero-image"
        />
        <div class="video-overlay"></div>
      </div>
    </div>

    <!-- Particles System -->
    <div class="hero-particles">
      <div
          v-for="i in 50"
          :key="i"
          class="particle"
          :style="getParticleStyle(i)"
      ></div>
    </div>

    <!-- Hero Content -->
    <div class="container">
      <div class="hero-content">
        <!-- Main Title with 3D Effect -->
        <div class="hero-title-wrapper">
          <h1 ref="titleRef" class="hero-title">
            <div class="title-line">
              <span class="letter-word">EXPO</span>
            </div>
            <div class="title-line">
              <span class="letter-word red">REAL</span>
            </div>
            <div class="title-line">
              <span class="letter-word">ESTATE</span>
            </div>
          </h1>
          <div class="title-year">2025</div>
        </div>

        <!-- Subtitle -->
        <div ref="subtitleRef" class="hero-subtitle">
          <p class="subtitle-main">
            EXPO REAL ESTATE — это важнейший международный хаб инвестиционной недвижимости,
            который является мостом между крупнейшими российскими инвесторами и застройщиками со всего мира
          </p>
        </div>

        <!-- Location -->
        <div ref="locationRef" class="hero-location">
          <div class="location-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div class="location-text">
              <div class="location-main">Деловой центр Москва-Сити</div>
              <div class="location-address">Пресненская набережная, 2</div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div ref="ctaRef" class="hero-cta">
          <div class="cta-text">
            <h3 class="cta-title">
              Станьте частью эксклюзивного<br>
              <span class="gradient-text">сообщества лидеров рынка</span><br>
              на EXPO REAL ESTATE
            </h3>
          </div>
          <div class="cta-buttons">
            <button
                @click="openModal"
                class="btn btn-primary btn-large ripple"
                ref="ctaButtonRef"
            >
              Узнать подробнее
            </button>
            <button @click="scrollToStats" class="btn btn-outline btn-large">
              Смотреть статистику
            </button>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div ref="scrollIndicatorRef" class="scroll-indicator">
          <div class="scroll-text">Прокрутите вниз</div>
          <div class="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Noise Overlay - удалено -->
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HeroSection',
  emits: ['open-modal'],
  setup(props, { emit }) {
    const heroRef = ref(null)
    const titleRef = ref(null)
    const subtitleRef = ref(null)
    const locationRef = ref(null)
    const ctaRef = ref(null)
    const scrollIndicatorRef = ref(null)
    const ctaButtonRef = ref(null)

    const openModal = () => {
      emit('open-modal')
    }

    const scrollToStats = () => {
      const statsSection = document.querySelector('.stats-section')
      if (statsSection) {
        statsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const getParticleStyle = (index) => {
      const colors = ['#E31E24', '#ffffff', '#b71c1c']
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${2 + Math.random() * 3}px`,
        height: `${2 + Math.random() * 3}px`,
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${8 + Math.random() * 12}s`
      }
    }

    const setupParallax = () => {
      gsap.to('.hero-background', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

      gsap.to('.hero-particles', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    const animateHero = () => {
      const tl = gsap.timeline()

      // Animate title words
      tl.from('.letter-word', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out'
      })

      // Animate year
      tl.from('.title-year', {
        duration: 1,
        scale: 0,
        rotation: 360,
        opacity: 0,
        ease: 'back.out(2)'
      }, '-=0.5')

      // Animate subtitle
      tl.from(subtitleRef.value, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.8')

      // Animate location
      tl.from(locationRef.value, {
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.6')

      // Animate CTA section
      tl.from('.cta-title', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.4')

      tl.from('.cta-buttons .btn', {
        duration: 0.8,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, '-=0.2')

      // Animate scroll indicator
      tl.from(scrollIndicatorRef.value, {
        duration: 0.6,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.4')

      // Animate particles
      gsap.fromTo('.particle',
          {
            scale: 0,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 0.7,
            duration: 2,
            stagger: {
              amount: 3,
              from: 'random'
            },
            ease: 'power2.out',
            delay: 1
          }
      )
    }

    const setupInteractions = () => {
      // Add magnetic effect to CTA button
      if (ctaButtonRef.value) {
        const button = ctaButtonRef.value

        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          gsap.to(button, {
            duration: 0.3,
            x: x * 0.2,
            y: y * 0.2,
            ease: 'power2.out'
          })
        })

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            duration: 0.5,
            x: 0,
            y: 0,
            ease: 'elastic.out(1, 0.5)'
          })
        })
      }

      // Animate scroll indicator
      gsap.to('.scroll-arrow', {
        duration: 2,
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }

    onMounted(() => {
      animateHero()
      setupParallax()
      setupInteractions()
    })

    onBeforeUnmount(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

    return {
      heroRef,
      titleRef,
      subtitleRef,
      locationRef,
      ctaRef,
      scrollIndicatorRef,
      ctaButtonRef,
      openModal,
      scrollToStats,
      getParticleStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: $dark;

  @media (max-width: $mobile) {
    min-height: 600px;
    height: 100vh;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .video-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.4) contrast(1.2);
  }

  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            135deg,
            rgba($dark, 0.8) 0%,
            rgba($dark, 0.6) 40%,
            rgba($red, 0.2) 70%,
            rgba($dark, 0.9) 100%
    );
  }
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;

  .particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.7;
    animation: particleFloat 15s linear infinite;
  }
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
  }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: $mobile) {
    padding: 0 1rem;
  }
}

.hero-title-wrapper {
  position: relative;
  margin-bottom: 3rem;
  z-index: 10;

  @media (max-width: $mobile) {
    margin-bottom: 2rem;
  }
}

.hero-title {
  font-size: clamp(2rem, 10vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;

  .title-line {
    display: block;
    margin-bottom: 0.1em;
  }

  .letter-word {
    display: inline-block;
    color: $white;
    position: relative;
    text-shadow:
        2px 2px 0 rgba($black, 0.8),
        4px 4px 0 rgba($black, 0.6),
        6px 6px 0 rgba($black, 0.4),
        8px 8px 20px rgba($black, 0.8),
        0 0 40px rgba($white, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;

    &.red {
      color: $red;
      text-shadow:
          2px 2px 0 rgba(darken($red, 30%), 0.8),
          4px 4px 0 rgba(darken($red, 40%), 0.6),
          6px 6px 0 rgba(darken($red, 50%), 0.4),
          8px 8px 20px rgba($black, 0.8),
          0 0 40px rgba($red, 0.6);
    }

    &:hover {
      transform: scale(1.05) translateZ(20px);
      text-shadow:
          3px 3px 0 rgba($black, 0.8),
          6px 6px 0 rgba($black, 0.6),
          9px 9px 0 rgba($black, 0.4),
          12px 12px 25px rgba($black, 0.9),
          0 0 50px rgba($white, 0.3);
    }
  }
}

.title-year {
  position: absolute;
  top: -20px;
  right: -50px;
  font-size: clamp(1rem, 3vw, 2rem);
  font-weight: 900;
  color: $red;
  background: rgba($dark, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 2px solid $red;
  transform: rotate(15deg);

  @media (max-width: $tablet) {
    position: relative;
    top: 0;
    right: 0;
    transform: none;
    display: inline-block;
    margin-top: 1rem;
  }
}

.hero-subtitle {
  margin-bottom: 3rem;

  .subtitle-main {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba($white, 0.9);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    font-weight: 400;
  }
}

.hero-location {
  margin-bottom: 4rem;

  .location-item {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: rgba($white, 0.1);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    border-radius: 50px;
    border: 1px solid rgba($white, 0.2);

    svg {
      color: $red;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .location-text {
      text-align: left;

      .location-main {
        font-weight: 700;
        font-size: 1.1rem;
        color: $white;
      }

      .location-address {
        font-size: 0.9rem;
        color: rgba($white, 0.7);
      }
    }
  }
}

.hero-cta {
  margin-bottom: 4rem;

  .cta-title {
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 700;
    margin-bottom: 2rem;
    line-height: 1.3;
    color: $white;

    .gradient-text {
      background: $gradient-red;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: $mobile) {
      flex-direction: column;
      gap: 1rem;
    }

    .btn-large {
      padding: 1.25rem 2.5rem;
      font-size: 1rem;
      font-weight: 700;
      min-width: 200px;

      @media (max-width: $mobile) {
        width: 100%;
        min-width: auto;
      }
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba($white, 0.7);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: $white;
  }

  .scroll-text {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .scroll-arrow {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: $mobile) {
    bottom: 1rem;
  }
}

// Ripple effect for buttons
.ripple {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba($white, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover::after {
    width: 300px;
    height: 300px;
  }
}
</style>