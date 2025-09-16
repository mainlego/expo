<template>
  <section ref="sectionRef" class="categories-section section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Категории участников</h2>
        <p class="section-subtitle">
          Станьте частью уникального события,<br>
          <span class="gradient-text">аналогов которому в мире еще не было!</span>
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="categories-grid">
        <!-- High-level Guests -->
        <div ref="category1Ref" class="category-card card-3d">
          <div class="category-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="category-content">
            <h3 class="category-title">Высокопоставленные гости</h3>
            <p class="category-description">
              крупные политические деятели, отвечающие за реализацию инициатив 
              в области и инвестиций и недвижимости
            </p>
          </div>
          <div class="category-decoration"></div>
          <div class="category-number">01</div>
        </div>

        <!-- Experienced Investors -->
        <div ref="category2Ref" class="category-card card-3d">
          <div class="category-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
          <div class="category-content">
            <h3 class="category-title">Опытные инвесторы</h3>
            <p class="category-description">
              знающие как важно получить одними из первых 
              самые выгодные предложения
            </p>
          </div>
          <div class="category-decoration"></div>
          <div class="category-number">02</div>
        </div>

        <!-- Entrepreneurs -->
        <div ref="category3Ref" class="category-card card-3d featured">
          <div class="category-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
          </div>
          <div class="category-content">
            <h3 class="category-title">Предприниматели, бизнесмены</h3>
            <p class="category-description">
              которые готовы вложить свои денежные средства в перспективные проекты 
              для сохранения и приумножения капитала
            </p>
          </div>
          <div class="category-decoration featured-decoration"></div>
          <div class="category-number">03</div>
          <div class="featured-badge">VIP</div>
        </div>

        <!-- Developers -->
        <div ref="category4Ref" class="category-card card-3d">
          <div class="category-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <div class="category-content">
            <h3 class="category-title">Девелоперы, застройщики</h3>
            <p class="category-description">
              презентующие свои проекты на элиту мира инвестиций
            </p>
          </div>
          <div class="category-decoration"></div>
          <div class="category-number">04</div>
        </div>
      </div>

      <!-- Geography Section -->
      <div ref="geographyRef" class="geography-section">
        <div class="geography-content">
          <div class="geography-image">
            <img 
              src="/images/geography-world-map.jpg" 
              alt="International Real Estate Geography"
              loading="lazy"
            />
            <div class="image-overlay"></div>
          </div>
          <div class="geography-text">
            <h3 class="geography-title">География участников</h3>
            <p class="geography-description">
              Expo Real Estate собирает в одном месте проверенных застройщиков, 
              агентства недвижимости, дизайнерские и архитектурные бюро из 
              <span class="highlight">более чем 15 стран мира</span>. 
              Это уникальная возможность изучить лучшие варианты для инвестирования 
              и получить выгодные предложения от застройщиков.
            </p>
            <button @click="openModal" class="btn btn-outline">
              Узнать больше о выставке
            </button>
          </div>
        </div>
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
  name: 'CategoriesSection',
  emits: ['open-modal'],
  setup(props, { emit }) {
    const sectionRef = ref(null)
    const category1Ref = ref(null)
    const category2Ref = ref(null)
    const category3Ref = ref(null)
    const category4Ref = ref(null)
    const geographyRef = ref(null)

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
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-header',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animate category cards with stagger
      const categoryRefs = [category1Ref, category2Ref, category3Ref, category4Ref]
      
      categoryRefs.forEach((categoryRef, index) => {
        if (categoryRef.value) {
          gsap.fromTo(categoryRef.value, 
            {
              y: 120,
              opacity: 0,
              rotationX: 60,
              scale: 0.8
            },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
              delay: index * 0.3,
              scrollTrigger: {
                trigger: categoryRef.value,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              }
            }
          )

          // Animate number with delay
          gsap.fromTo(categoryRef.value.querySelector('.category-number'), 
            {
              scale: 0,
              rotation: -180
            },
            {
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: 'back.out(2)',
              delay: index * 0.3 + 0.5,
              scrollTrigger: {
                trigger: categoryRef.value,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      })

      // Animate geography section
      if (geographyRef.value) {
        gsap.fromTo(geographyRef.value.querySelector('.geography-image'), 
          {
            x: -100,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: geographyRef.value,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        gsap.fromTo(geographyRef.value.querySelector('.geography-text'), 
          {
            x: 100,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.3,
            scrollTrigger: {
              trigger: geographyRef.value,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Animate decorations
      gsap.to('.decoration-1', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none'
      })

      gsap.to('.decoration-2', {
        rotation: -360,
        duration: 40,
        repeat: -1,
        ease: 'none'
      })

      gsap.to('.decoration-3', {
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }

    const setupHoverEffects = () => {
      const categoryRefs = [category1Ref, category2Ref, category3Ref, category4Ref]
      
      categoryRefs.forEach(categoryRef => {
        if (categoryRef.value) {
          const card = categoryRef.value
          const number = card.querySelector('.category-number')
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              duration: 0.5,
              y: -20,
              rotationX: 15,
              rotationY: 10,
              scale: 1.05,
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.category-decoration'), {
              duration: 0.5,
              scale: 1.4,
              opacity: 1,
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.category-icon svg'), {
              duration: 0.5,
              scale: 1.2,
              rotation: 10,
              ease: 'power2.out'
            })

            gsap.to(number, {
              duration: 0.3,
              scale: 1.3,
              color: '#E31E24',
              ease: 'power2.out'
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              duration: 0.5,
              y: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.category-decoration'), {
              duration: 0.5,
              scale: 1,
              opacity: 0.7,
              ease: 'power2.out'
            })

            gsap.to(card.querySelector('.category-icon svg'), {
              duration: 0.5,
              scale: 1,
              rotation: 0,
              ease: 'power2.out'
            })

            gsap.to(number, {
              duration: 0.3,
              scale: 1,
              color: 'rgba(255, 255, 255, 0.3)',
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
      category1Ref,
      category2Ref,
      category3Ref,
      category4Ref,
      geographyRef,
      openModal
    }
  }
}
</script>

<style lang="scss" scoped>
.categories-section {
  background: $dark;
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
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
  color: $white;
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

  .gradient-text {
    background: $gradient-red;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;

  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }
}

.category-card {
  position: relative;
  background: rgba($white, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba($white, 0.1);
  border-radius: 25px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.featured {
    background: rgba($red, 0.08);
    border-color: rgba($red, 0.3);
    
    .category-title {
      color: $red;
    }
  }

  &:hover {
    border-color: rgba($red, 0.4);
  }
}

.category-icon {
  margin-bottom: 1.5rem;
  
  svg {
    color: $red;
    width: 64px;
    height: 64px;
    transition: all 0.5s ease;

    @media (max-width: $mobile) {
      width: 48px;
      height: 48px;
    }
  }
}

.category-content {
  position: relative;
  z-index: 2;
}

.category-title {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: $white;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.category-description {
  font-size: 0.95rem;
  color: rgba($white, 0.8);
  line-height: 1.6;
}

.category-decoration {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba($white, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.5s ease;

  &.featured-decoration {
    background: radial-gradient(circle, rgba($red, 0.2) 0%, transparent 70%);
  }
}

.category-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  font-weight: 900;
  color: rgba($white, 0.3);
  transition: all 0.3s ease;
  z-index: 3;
}

.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: $gradient-red;
  color: $white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.geography-section {
  margin-top: 4rem;

  @media (max-width: $mobile) {
    margin-top: 3rem;
  }
}

.geography-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.geography-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba($dark, 0.6) 0%,
      rgba($red, 0.3) 100%
    );
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.geography-text {
  @media (max-width: $tablet) {
    text-align: center;
  }
}

.geography-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: $white;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.geography-description {
  font-size: 1.1rem;
  color: rgba($white, 0.9);
  line-height: 1.7;
  margin-bottom: 2rem;

  .highlight {
    color: $red;
    font-weight: 600;
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
    opacity: 0.08;

    &.decoration-1 {
      top: 20%;
      left: 5%;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, $red 0%, transparent 70%);
    }

    &.decoration-2 {
      bottom: 20%;
      right: 10%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, $white 0%, transparent 70%);
    }

    &.decoration-3 {
      top: 60%;
      left: 60%;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba($red, 0.5) 0%, transparent 70%);
    }
  }
}

// Responsive adjustments
@media (max-width: $mobile) {
  .category-card {
    padding: 2rem 1.5rem;
    min-height: 250px;
  }

  .geography-content {
    gap: 1.5rem;
  }
}
</style>