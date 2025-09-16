<template>
  <section ref="sectionRef" class="stats-section section">
    <div class="container">
      <!-- Section Description -->
      <div class="stats-intro">
        <p class="stats-description">
          EXPO REAL ESTATE — это встречи с бизнес партнёрами со всего мира, 
          реализация доходных проектов, эффективный маркетинг, выгодные инвестиции.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <!-- Countries Stat -->
        <div ref="stat1Ref" class="stat-card card-3d">
          <div class="stat-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div 
              ref="counter1Ref" 
              class="stat-number large"
              data-target="15"
            >0</div>
            <div class="stat-plus">+</div>
            <div class="stat-label">представителей стран</div>
            <div class="stat-description">
              из Турции, ОАЭ, Кипра, Грузии, Черногории, Португалии и тд.
            </div>
          </div>
          <div class="stat-decoration"></div>
        </div>

        <!-- Properties Stat -->
        <div ref="stat2Ref" class="stat-card card-3d">
          <div class="stat-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div 
              ref="counter2Ref" 
              class="stat-number large"
              data-target="10000"
            >0</div>
            <div class="stat-plus">+</div>
            <div class="stat-label">объектов недвижимости в России и за рубежом</div>
            <div class="stat-description">
              Виллы, квартиры, апартаменты, коттеджные поселки, таунхаусы, 
              небоскребы, гостиничные комплексы, деловые центры, бизнес центры, 
              туристические объекты, коммерческая недвижимость
            </div>
          </div>
          <div class="stat-decoration"></div>
        </div>

        <!-- Participants Stat -->
        <div ref="stat3Ref" class="stat-card card-3d">
          <div class="stat-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.83 0-1.54.5-1.85 1.22L13.5 13.5l-2.5-2.5V8c0-.55-.45-1-1-1s-1 .45-1 1v3l2.5 2.5 1.5 6H15v-2h3v4h2zm-9.5-8L8 16.5 3.5 12 8 7.5l2.5 4.5z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div 
              ref="counter3Ref" 
              class="stat-number large"
              data-target="500"
            >0</div>
            <div class="stat-plus">+</div>
            <div class="stat-label">участников отрасли</div>
            <div class="stat-description">
              Крупнейшие международные застройщики, агентства по недвижимости, 
              частные инвесторы и крупнейшие инвестфонды, дизайнерские и архитектурные бюро
            </div>
          </div>
          <div class="stat-decoration"></div>
        </div>

        <!-- Visitors Stat -->
        <div ref="stat4Ref" class="stat-card card-3d">
          <div class="stat-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div 
              ref="counter4Ref" 
              class="stat-number large"
              data-target="30000"
            >0</div>
            <div class="stat-plus">+</div>
            <div class="stat-label">посетителей</div>
            <div class="stat-description">
              Прямые покупатели, инвесторы, брокеры, высокопоставленные гости, 
              представители среднего и крупного бизнеса
            </div>
          </div>
          <div class="stat-decoration"></div>
        </div>

        <!-- Property Value Stat -->
        <div ref="stat5Ref" class="stat-card card-3d featured">
          <div class="stat-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div 
              ref="counter5Ref" 
              class="stat-number large featured-number"
              data-target="5.4"
            >0</div>
            <div class="stat-currency">млрд</div>
            <div class="stat-label">Стоимость представленных объектов недвижимости</div>
          </div>
          <div class="stat-decoration featured-decoration"></div>
        </div>

        <!-- ROI Stat -->
        <div ref="stat6Ref" class="stat-card card-3d featured">
          <div class="stat-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div 
              ref="counter6Ref" 
              class="stat-number large featured-number"
              data-target="20"
            >0</div>
            <div class="stat-currency">+%</div>
            <div class="stat-label">Средний ROI</div>
            <div class="stat-description">
              любого объекта недвижимости представленного на выставке
            </div>
          </div>
          <div class="stat-decoration featured-decoration"></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div ref="ctaRef" class="stats-cta">
        <h3 class="cta-title">
          Станьте частью уникального мероприятия, 
          <span class="gradient-text">аналогов которому в мире еще не было.</span>
        </h3>
        <button @click="openModal" class="btn btn-primary btn-large ripple">
          Получить билет
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'StatsSection',
  emits: ['open-modal'],
  setup(props, { emit }) {
    const sectionRef = ref(null)
    const stat1Ref = ref(null)
    const stat2Ref = ref(null)
    const stat3Ref = ref(null)
    const stat4Ref = ref(null)
    const stat5Ref = ref(null)
    const stat6Ref = ref(null)
    const ctaRef = ref(null)
    
    const counter1Ref = ref(null)
    const counter2Ref = ref(null)
    const counter3Ref = ref(null)
    const counter4Ref = ref(null)
    const counter5Ref = ref(null)
    const counter6Ref = ref(null)

    const openModal = () => {
      emit('open-modal')
    }

    const animateCounter = (element, target, duration = 2) => {
      if (!element) return

      const isDecimal = target.toString().includes('.')
      
      gsap.to({}, {
        duration,
        ease: 'power2.out',
        onUpdate: function() {
          const progress = this.progress()
          const currentValue = progress * target
          
          if (isDecimal) {
            element.textContent = currentValue.toFixed(1)
          } else {
            element.textContent = Math.floor(currentValue).toLocaleString('ru-RU')
          }
        },
        onComplete: () => {
          if (isDecimal) {
            element.textContent = target.toString()
          } else {
            element.textContent = target.toLocaleString('ru-RU')
          }
        }
      })
    }

    const setupScrollAnimations = () => {
      // Animate stats cards
      const statCards = [stat1Ref, stat2Ref, stat3Ref, stat4Ref, stat5Ref, stat6Ref]
      const counters = [counter1Ref, counter2Ref, counter3Ref, counter4Ref, counter5Ref, counter6Ref]
      
      statCards.forEach((statRef, index) => {
        if (statRef.value) {
          gsap.fromTo(statRef.value, 
            {
              y: 100,
              opacity: 0,
              rotationX: 90,
              scale: 0.8
            },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: statRef.value,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              },
              onComplete: () => {
                // Animate counter when card is visible
                const counterElement = counters[index]?.value
                if (counterElement) {
                  const target = parseFloat(counterElement.getAttribute('data-target'))
                  animateCounter(counterElement, target)
                }
              }
            }
          )
        }
      })

      // Animate intro
      if (sectionRef.value) {
        gsap.fromTo('.stats-intro', 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stats-intro',
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Animate CTA
      if (ctaRef.value) {
        gsap.fromTo(ctaRef.value, 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ctaRef.value,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    const setupHoverEffects = () => {
      const statCards = [stat1Ref, stat2Ref, stat3Ref, stat4Ref, stat5Ref, stat6Ref]
      
      statCards.forEach(statRef => {
        if (statRef.value) {
          const card = statRef.value
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              duration: 0.4,
              y: -10,
              rotationX: 5,
              rotationY: 5,
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.stat-decoration'), {
              duration: 0.4,
              scale: 1.2,
              opacity: 0.8,
              ease: 'power2.out'
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              duration: 0.4,
              y: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.stat-decoration'), {
              duration: 0.4,
              scale: 1,
              opacity: 0.6,
              ease: 'power2.out'
            })
          })
        }
      })
    }

    onMounted(() => {
      setupScrollAnimations()
      setupHoverEffects()
    })

    onBeforeUnmount(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

    return {
      sectionRef,
      stat1Ref,
      stat2Ref,
      stat3Ref,
      stat4Ref,
      stat5Ref,
      stat6Ref,
      ctaRef,
      counter1Ref,
      counter2Ref,
      counter3Ref,
      counter4Ref,
      counter5Ref,
      counter6Ref,
      openModal
    }
  }
}
</script>

<style lang="scss" scoped>
.stats-section {
  background: linear-gradient(135deg, $dark 0%, lighten($dark, 5%) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba($red, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
}

.stats-intro {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  .stats-description {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: rgba($white, 0.9);
    line-height: 1.6;
    font-weight: 400;
  }

  @media (max-width: $mobile) {
    margin-bottom: 3rem;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
}

.stat-card {
  position: relative;
  background: rgba($white, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba($white, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  overflow: hidden;

  &.featured {
    background: rgba($red, 0.1);
    border-color: rgba($red, 0.3);
    
    .stat-number {
      background: $gradient-red;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &:hover {
    border-color: rgba($red, 0.4);
    background: rgba($white, 0.08);
  }
}

.stat-icon {
  margin-bottom: 1.5rem;
  
  svg {
    color: $red;
    width: 48px;
    height: 48px;
  }
}

.stat-content {
  position: relative;
  z-index: 2;
}

.stat-number {
  display: inline-block;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  color: $red;
  line-height: 1;
  margin-bottom: 0.5rem;

  &.large {
    font-size: clamp(2.5rem, 6vw, 5rem);
  }

  &.featured-number {
    font-size: clamp(3rem, 7vw, 6rem);
  }
}

.stat-plus,
.stat-currency {
  display: inline-block;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 900;
  color: $red;
  margin-left: 0.2em;
  vertical-align: top;
}

.stat-label {
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 600;
  color: $white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.stat-description {
  font-size: 0.9rem;
  color: rgba($white, 0.7);
  line-height: 1.5;
}

.stat-decoration {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba($red, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.6;
  transition: all 0.4s ease;

  &.featured-decoration {
    background: radial-gradient(circle, rgba($red, 0.3) 0%, transparent 70%);
    width: 140px;
    height: 140px;
  }
}

.stats-cta {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  .cta-title {
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 700;
    color: $white;
    margin-bottom: 2rem;
    line-height: 1.4;

    .gradient-text {
      background: $gradient-red;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .btn-large {
    padding: 1.25rem 2.5rem;
    font-size: 1rem;
    min-width: 250px;

    @media (max-width: $mobile) {
      width: 100%;
      min-width: auto;
    }
  }
}

// Ripple effect
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

// Animation keyframes for counter
@keyframes countUp {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

.stat-number.counting {
  animation: countUp 0.1s ease-out;
}
</style>