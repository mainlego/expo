<template>
  <section ref="sectionRef" class="benefits-section section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Выгода от участия</h2>
        <p class="section-subtitle">
          EXPO REAL ESTATE — не просто выставка, это инвестиция в будущее вашего бизнеса.<br>
          Вас ожидает целый ряд уникальных преимуществ:
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="benefits-grid">
        <!-- Personal Consultations -->
        <div ref="benefit1Ref" class="benefit-card card-3d">
          <div class="benefit-image">
            <img src="/images/investment-opportunities.jpg" alt="Investment Consultation" loading="lazy" />
            <div class="image-overlay"></div>
          </div>
          <div class="benefit-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h3 class="benefit-title">Персональные консультации</h3>
            <div class="benefit-items">
              <div class="benefit-item">
                <h4>Экспертный Совет:</h4>
                <p>консультации экспертов для оптимизации вашей инвестиционной стратегии и налогового планирования.</p>
              </div>
              <div class="benefit-item">
                <h4>Юридическая Поддержка:</h4>
                <p>открытие представительства вашего бизнеса за рубежом с полным юридическим сопровождением</p>
              </div>
            </div>
          </div>
          <div class="benefit-decoration"></div>
        </div>

        <!-- Comprehensive Approach -->
        <div ref="benefit2Ref" class="benefit-card card-3d">
          <div class="benefit-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h3 class="benefit-title">Комплексный подход к инвестициям</h3>
            <div class="benefit-items">
              <div class="benefit-item">
                <h4>Стратегическое Взаимодействие:</h4>
                <p>переговоры напрямую лидерами отрасли и опытными инвесторами, начните совместные проекты на EXPO REAL ESTATE.</p>
              </div>
              <div class="benefit-item">
                <h4>Инвестиционный Выбор:</h4>
                <p>полный доступ к подборке эксклюзивных, проверенных инвестиционных возможностей в премиальной недвижимости.</p>
              </div>
            </div>
          </div>
          <div class="benefit-decoration"></div>
        </div>

        <!-- Exclusive Investment Offers -->
        <div ref="benefit3Ref" class="benefit-card card-3d featured">
          <div class="benefit-image">
            <img src="/images/vip-negotiation-room.jpg" alt="VIP Negotiation Room" loading="lazy" />
            <div class="image-overlay"></div>
          </div>
          <div class="benefit-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h3 class="benefit-title">Эксклюзивные инвестиционные предложения</h3>
            <div class="benefit-items">
              <div class="benefit-item">
                <h4>Лучшие Условия Покупки:</h4>
                <p>лучшие предложения и полный доступ к специальным условиям покупки, предлагаемым только на EXPO REAL ESTATE.</p>
              </div>
              <div class="benefit-item">
                <h4>Партнерские Программы:</h4>
                <p>Воспользуйтесь специальными программами от банков-партнеров, предлагающих выгодные финансовые условия и ставки</p>
              </div>
            </div>
          </div>
          <div class="benefit-decoration featured-decoration"></div>
          <div class="featured-badge">VIP</div>
        </div>

        <!-- Efficiency and Multifunctionality -->
        <div ref="benefit4Ref" class="benefit-card card-3d">
          <div class="benefit-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v16.5c0 .83-.67 1.5-1.5 1.5H8c-.83 0-1.5-.67-1.5-1.5V4H5V2h4.5V1c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H19.5z"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h3 class="benefit-title">Эффективность и многофункциональность</h3>
            <div class="benefit-items">
              <div class="benefit-item">
                <h4>Оперативное Заключение Сделок:</h4>
                <p>множество инвестиционных сделок закроются непосредственно на площадке выставки, максимально реализуя время и ресурсы.</p>
              </div>
              <div class="benefit-item">
                <h4>Интеграция цифровых решений:</h4>
                <p>практические примеры применения цифровизации в управлении недвижимостью и оптимизации процессов</p>
              </div>
            </div>
          </div>
          <div class="benefit-decoration"></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div ref="ctaRef" class="benefits-cta">
        <h3 class="cta-title">
          Присоединяйтесь к EXPO REAL ESTATE и воплотите<br>
          в жизнь инвестиционные планы, открыв 
          <span class="gradient-text">новые горизонты для вашего капитала и бизнеса.</span>
        </h3>
        <button @click="openModal" class="btn btn-primary btn-large ripple">
          Получить консультацию
        </button>
      </div>
    </div>

    <!-- Background decorations -->
    <div class="section-decorations">
      <div class="decoration decoration-1"></div>
      <div class="decoration decoration-2"></div>
      <div class="decoration decoration-3"></div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'BenefitsSection',
  emits: ['open-modal'],
  setup(props, { emit }) {
    const sectionRef = ref(null)
    const benefit1Ref = ref(null)
    const benefit2Ref = ref(null)
    const benefit3Ref = ref(null)
    const benefit4Ref = ref(null)
    const ctaRef = ref(null)

    const openModal = () => {
      emit('open-modal')
    }

    const setupScrollAnimations = () => {
      // Animate section header
      gsap.fromTo('.section-header', 
        {
          y: 80,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-header',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animate benefit cards
      const benefitRefs = [benefit1Ref, benefit2Ref, benefit3Ref, benefit4Ref]
      
      benefitRefs.forEach((benefitRef, index) => {
        if (benefitRef.value) {
          gsap.fromTo(benefitRef.value, 
            {
              y: 100,
              opacity: 0,
              rotationX: 45,
              scale: 0.9
            },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              delay: index * 0.2,
              scrollTrigger: {
                trigger: benefitRef.value,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      })

      // Animate CTA
      if (ctaRef.value) {
        gsap.fromTo(ctaRef.value, 
          {
            y: 60,
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

      // Animate decorations
      gsap.to('.decoration-1', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      })

      gsap.to('.decoration-2', {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: 'none'
      })

      gsap.to('.decoration-3', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }

    const setupHoverEffects = () => {
      const benefitRefs = [benefit1Ref, benefit2Ref, benefit3Ref, benefit4Ref]
      
      benefitRefs.forEach(benefitRef => {
        if (benefitRef.value) {
          const card = benefitRef.value
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              duration: 0.4,
              y: -15,
              rotationX: 10,
              rotationY: 5,
              scale: 1.03,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.benefit-decoration'), {
              duration: 0.4,
              scale: 1.3,
              opacity: 0.9,
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.benefit-icon svg'), {
              duration: 0.4,
              scale: 1.1,
              rotation: 5,
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
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.benefit-decoration'), {
              duration: 0.4,
              scale: 1,
              opacity: 0.7,
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.benefit-icon svg'), {
              duration: 0.4,
              scale: 1,
              rotation: 0,
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
      benefit1Ref,
      benefit2Ref,
      benefit3Ref,
      benefit4Ref,
      ctaRef,
      openModal
    }
  }
}
</script>

<style lang="scss" scoped>
.benefits-section {
  background: linear-gradient(135deg, lighten($dark, 3%) 0%, $dark 100%);
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: $mobile) {
    margin-bottom: 3rem;
  }
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  background: $gradient-red;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: $gradient-red;
    border-radius: 2px;
  }
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba($white, 0.8);
  line-height: 1.6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
}

.benefit-card {
  position: relative;
  background: rgba($white, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba($white, 0.1);
  border-radius: 25px;
  padding: 2.5rem;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  overflow: hidden;

  &.featured {
    background: rgba($red, 0.08);
    border-color: rgba($red, 0.3);
    
    .benefit-title {
      color: $red;
    }

    .benefit-icon svg {
      color: $red;
    }
  }

  &:hover {
    border-color: rgba($red, 0.4);
  }
}

.benefit-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  border-radius: 25px 25px 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba($dark, 0.7) 0%, rgba($red, 0.4) 100%);
  }

  &:hover img {
    transform: scale(1.05);
  }
}

// Adjust card padding when image is present
.benefit-card:has(.benefit-image) {
  padding-top: 220px;
}

.benefit-icon {
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 3;
  
  svg {
    color: rgba($white, 0.8);
    width: 64px;
    height: 64px;
    transition: all 0.4s ease;
    background: rgba($dark, 0.8);
    padding: 10px;
    border-radius: 50%;
  }

  .benefit-card.featured & svg {
    background: rgba($red, 0.2);
  }
}

.benefit-content {
  position: relative;
  z-index: 2;
}

.benefit-title {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: $white;
  margin-bottom: 1.5rem;
  text-align: center;
}

.benefit-items {
  .benefit-item {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: $red;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.95rem;
      color: rgba($white, 0.8);
      line-height: 1.6;
      margin: 0;
    }
  }
}

.benefit-decoration {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba($white, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.4s ease;

  &.featured-decoration {
    background: radial-gradient(circle, rgba($red, 0.2) 0%, transparent 70%);
  }
}

.featured-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: $gradient-red;
  color: $white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.benefits-cta {
  text-align: center;
  max-width: 800px;
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
    min-width: 280px;

    @media (max-width: $mobile) {
      width: 100%;
      min-width: auto;
    }
  }
}

.section-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;

  .decoration {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;

    &.decoration-1 {
      top: 10%;
      left: 5%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, $red 0%, transparent 70%);
    }

    &.decoration-2 {
      bottom: 15%;
      right: 10%;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, $white 0%, transparent 70%);
    }

    &.decoration-3 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba($red, 0.3) 0%, transparent 70%);
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
</style>