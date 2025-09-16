<template>
  <div id="app">
    <!-- Custom Cursor -->
    <div ref="cursorRef" class="cursor"></div>

    <!-- Scroll Progress Indicator -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Header -->
    <AppHeader @open-modal="openModal" />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection @open-modal="openModal" />

      <!-- Stats Section -->
      <StatsSection @open-modal="openModal" />

      <!-- Benefits Section -->
      <BenefitsSection @open-modal="openModal" />

      <!-- Slider Section for "Why Visit" -->
      <section class="slider-section section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Почему стоит посетить?</h2>
            <p class="section-subtitle">
              На выставке show room недвижимости ERE Вы найдете перспективные и наиболее доходные объекты для инвестиций, 
              получите консультации экспертов, индивидуальные предложения по кредитованию и бонусы от участников, 
              а также сможете заключить любую сделку за день в рамках выставки.
            </p>
          </div>

          <Slider 
            :slides="sliderData" 
            :autoplay="true" 
            :interval="5000"
            @slide-change="handleSlideChange"
          />
        </div>
      </section>

      <!-- Categories Section -->
      <CategoriesSection @open-modal="openModal" />

      <!-- Advantages Section -->
      <section class="advantages-section section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Преимущества</h2>
          </div>

          <div class="advantages-grid">
            <div v-for="(advantage, index) in advantagesData" :key="index" class="advantage-card">
              <div class="advantage-icon">
                <component :is="advantage.icon" />
              </div>
              <h3 class="advantage-title">{{ advantage.title }}</h3>
              <p class="advantage-description">{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Investment Types Section -->
      <section class="investment-section section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Виды инвестирования в недвижимость</h2>
          </div>

          <div class="investment-grid">
            <div v-for="(type, index) in investmentTypes" :key="index" class="investment-card">
              <div class="investment-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <h3 class="investment-title">{{ type.title }}</h3>
              <p class="investment-description">{{ type.description }}</p>
              <div v-if="type.roi" class="investment-roi">
                Доходность: <span class="roi-value">{{ type.roi }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Location Section -->
      <section class="location-section section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Премиальная площадка - Москва Сити</h2>
          </div>

          <div class="location-content">
            <div class="location-image">
              <img 
                src="/images/moscow-city-premium.jpg" 
                alt="Moscow City Premium Location"
                loading="lazy"
              />
              <div class="image-overlay"></div>
            </div>

            <div class="location-features">
              <div v-for="(feature, index) in locationFeatures" :key="index" class="feature-item">
                <div class="feature-marker">{{ String(index + 1).padStart(2, '0') }}</div>
                <p class="feature-text">{{ feature }}</p>
              </div>
            </div>
          </div>

          <div class="location-cta">
            <button @click="openModal" class="btn btn-primary btn-large">
              Участвовать
            </button>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <ContactForm @form-submit="handleFormSubmit" />

      <!-- Gallery Section -->
      <section class="gallery-section section">
        <div class="container">
          <h2 class="section-title">Галерея выставки</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="/images/exhibition-hall-1.jpg" alt="Exhibition Hall" loading="lazy" />
              <div class="gallery-overlay">
                <h3>Выставочный зал</h3>
              </div>
            </div>
            <div class="gallery-item">
              <img src="/images/vip-negotiation-room.jpg" alt="VIP Room" loading="lazy" />
              <div class="gallery-overlay">
                <h3>VIP переговорная</h3>
              </div>
            </div>
            <div class="gallery-item">
              <img src="/images/investment-opportunities.jpg" alt="Investment Zone" loading="lazy" />
              <div class="gallery-overlay">
                <h3>Инвестиционная зона</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Partners Section -->
      <section class="partners-section section">
        <div class="container">
          <h2 class="section-title">Наши партнеры</h2>
          <div class="partners-carousel">
            <!-- Partners logos would go here -->
            <div class="partner-placeholder" v-for="i in 6" :key="i">
              <div class="partner-logo">Partner {{ i }}</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <div class="footer-logo">
              <span class="brand">
                EXPO <span class="red">REAL</span> ESTATE
              </span>
              <div class="brand-year">2025</div>
            </div>
            
            <div class="footer-contacts">
              <h3>Контакты и адрес</h3>
              <div class="contact-item">
                <strong>Деловой Центр Москва-Сити</strong><br>
                Москва, Пресненская набережная, 2
              </div>
              <div class="contact-item">
                <strong>E-MAIL:</strong> 
                <a href="mailto:org@exporealestate.ru">org@exporealestate.ru</a>
              </div>
              <div class="contact-item">
                <strong>Тел.:</strong> 
                <a href="tel:+74993500006">+7 (499) 35 0000 6</a>
              </div>
            </div>
          </div>

          <div class="footer-map">
            <!-- Placeholder for Yandex Maps -->
            <div class="map-placeholder">
              <p>Интерактивная карта</p>
              <p>Деловой Центр Москва-Сити</p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 EXPO REAL ESTATE. Все права защищены.</p>
        </div>
      </div>
    </footer>

    <!-- Modal -->
    <Modal 
      :isVisible="isModalOpen" 
      @close="closeModal"
      @submit="handleModalSubmit"
    />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed, h } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import CategoriesSection from './components/CategoriesSection.vue'
import ContactForm from './components/ContactForm.vue'
import Modal from './components/Modal.vue'
import Slider from './components/Slider.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    StatsSection,
    BenefitsSection,
    CategoriesSection,
    ContactForm,
    Modal,
    Slider
  },
  setup() {
    const cursorRef = ref(null)
    const isModalOpen = ref(false)
    const scrollProgress = ref(0)

    // Slider data for "Why Visit" section
    const sliderData = ref([
      {
        title: 'Получить консультации по налогам, инвестициям, доходам и рискам',
        description: 'Экспертная поддержка по всем вопросам инвестирования',
        price: '100',
        priceSymbol: '< ',
        icon: () => h('svg', { width: 64, height: 64, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
        ])
      },
      {
        title: 'Выбрать наиболее выгодное предложение от банка-партнера со ставкой от 3%',
        description: 'Эксклюзивные финансовые предложения только для участников',
        price: '100',
        priceSymbol: '< ',
        icon: () => h('svg', { width: 64, height: 64, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z' })
        ])
      },
      {
        title: 'Получить индивидуальное предложение от ведущих банков по ипотечному кредитованию',
        description: 'Персональные условия кредитования недвижимости',
        price: '20',
        priceSymbol: '< ',
        icon: () => h('svg', { width: 64, height: 64, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })
        ])
      },
      {
        title: 'Провести сразу несколько сделок по инвестициям в рамках выставки',
        description: 'Максимальная эффективность времени и ресурсов',
        priceSymbol: '₽',
        icon: () => h('svg', { width: 64, height: 64, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' })
        ])
      },
      {
        title: 'Заказать полное юридическое сопровождение сделки',
        description: 'Профессиональная правовая поддержка на всех этапах',
        priceSymbol: '₽',
        icon: () => h('svg', { width: 64, height: 64, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
        ])
      }
    ])

    // Advantages data
    const advantagesData = ref([
      {
        title: 'Эксклюзивные предложения',
        description: 'Вы будете первыми кто сможет ознакомиться с самыми интересными предложениями на рынке зарубежной недвижимости и стать инвестором в перспективном проекте.',
        icon: () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
        ])
      },
      {
        title: 'Переговоры с первыми лицами',
        description: 'На выставке вы напрямую обсудите и получите выгодные предложения от представителей компаний по инвестиционным доходам, способам инвестирования, возможным рискам.',
        icon: () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.26-.78-.95-1.37-1.78-1.37H17c-.83 0-1.54.5-1.85 1.22L13.5 13.5l-2.5-2.5V8c0-.55-.45-1-1-1s-1 .45-1 1v3l2.5 2.5 1.5 6H15v-2h3v4h2z' })
        ])
      },
      {
        title: 'Приватность',
        description: 'Уникальный формат выставки show room позволяет проводить переговоры с экспонентами и партнерами выставки в специально отведенных переговорных комнатах.',
        icon: () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z' })
        ])
      },
      {
        title: 'Индивидуальный подбор',
        description: 'Выставка show-room предоставляет своим посетителям возможность зарезервировать VIP переговорную, в которой при помощи новейших технологий и персонального менеджера, Вам подберут интересующие вас объекты для инвестиций.',
        icon: () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'currentColor' }, [
          h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
        ])
      }
    ])

    // Investment types data
    const investmentTypes = ref([
      {
        title: 'Инвестирование путем ипотечного кредитования без собственных вложений',
        description: 'Возможность инвестировать в недвижимость с минимальными начальными затратами',
        roi: 'от 4% в первый же месяц'
      },
      {
        title: 'Покупка жилой недвижимости для аренды',
        description: 'Стабильный доход от сдачи недвижимости в аренду'
      },
      {
        title: 'Коммерческая недвижимость',
        description: 'Инвестиции в офисные здания, торговые центры и другие коммерческие объекты'
      },
      {
        title: 'Инвестирование в строительство дома по договору подряда',
        description: 'Участие в строительных проектах на этапе планирования'
      },
      {
        title: 'Покупка недвижимости с аукциона',
        description: 'Приобретение объектов по выгодным ценам на аукционах'
      }
    ])

    // Location features
    const locationFeatures = ref([
      'VIP уровень выставочного комплекса',
      'Самый центр бизнеса в Москве',
      'Аккумулируется крупнейший капитал страны',
      'Уникальный и единственный в мире формат проекта «выставка show room»',
      'Дополнительная лояльность к бренду на рынке и возможность презентовать свой продукт внутри выставки',
      'Высокий уровень инвесторов и предпринимателей',
      'Премиум сегмент как партнеров, так и участников',
      'Постоянный трафик высокопоставленных гостей',
      'Широкое освещение в СМИ',
      'PR и продвижение бренда в рекламной кампании ERE',
      'Возможность аренды постоянной экспозиции',
      'Возможность продавать и предлагать свои услуги/товары «до», «во время» и «после» мероприятия',
      'Колоссальные охваты бренда в более чем 15 странах мира'
    ])

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const handleModalSubmit = (data) => {
      console.log('Modal form submitted:', data)
      // Handle modal form submission
    }

    const handleFormSubmit = (data) => {
      console.log('Contact form submitted:', data)
      // Handle contact form submission
    }

    const handleSlideChange = (data) => {
      console.log('Slide changed:', data)
      // Handle slide change
    }

    const setupCustomCursor = () => {
      if (!cursorRef.value) return

      const cursor = cursorRef.value
      let mouseX = 0
      let mouseY = 0
      let cursorX = 0
      let cursorY = 0

      const updateCursor = () => {
        const diffX = mouseX - cursorX
        const diffY = mouseY - cursorY
        cursorX += diffX * 0.1
        cursorY += diffY * 0.1

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
        requestAnimationFrame(updateCursor)
      }

      const handleMouseMove = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
      }

      const handleMouseEnter = (e) => {
        if (e.target.matches('a, button, .btn, [role="button"]')) {
          cursor.classList.add('hover')
        }
      }

      const handleMouseLeave = () => {
        cursor.classList.remove('hover')
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseenter', handleMouseEnter, true)
      document.addEventListener('mouseleave', handleMouseLeave, true)

      updateCursor()

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseenter', handleMouseEnter, true)
        document.removeEventListener('mouseleave', handleMouseLeave, true)
      }
    }

    const setupScrollProgress = () => {
      const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = (window.scrollY / scrollHeight) * 100
        scrollProgress.value = Math.min(100, Math.max(0, scrolled))
      }

      window.addEventListener('scroll', updateScrollProgress)
      updateScrollProgress()

      return () => {
        window.removeEventListener('scroll', updateScrollProgress)
      }
    }

    onMounted(() => {
      const cleanupCursor = setupCustomCursor()
      const cleanupScroll = setupScrollProgress()

      // Initialize GSAP animations
      ScrollTrigger.refresh()

      onBeforeUnmount(() => {
        cleanupCursor?.()
        cleanupScroll?.()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      })
    })

    return {
      cursorRef,
      isModalOpen,
      scrollProgress,
      sliderData,
      advantagesData,
      investmentTypes,
      locationFeatures,
      openModal,
      closeModal,
      handleModalSubmit,
      handleFormSubmit,
      handleSlideChange
    }
  }
}
</script>

<style lang="scss">
// Import all styles
@import './assets/styles/main.scss';
@import './assets/styles/typography.scss';
@import './assets/styles/animations.scss';

#app {
  min-height: 100vh;
  background: $dark;
  color: $white;
}

// Scroll progress indicator
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: $gradient-red;
  z-index: 9999;
  transform-origin: left;
  transition: width 0.1s ease;
}

// Custom cursor
.cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background: $red;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
  display: none; // Temporarily disable custom cursor
  
  &.hover {
    transform: scale(2);
    background: $white;
  }

  @media (max-width: $tablet) {
    display: none;
  }
}

// Slider section
.slider-section {
  background: lighten($dark, 3%);

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    .section-title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      background: $gradient-red;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .section-subtitle {
      font-size: clamp(1rem, 2vw, 1.25rem);
      color: rgba($white, 0.8);
      line-height: 1.6;
    }
  }
}

// Advantages section
.advantages-section {
  background: $dark;

  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .advantage-card {
    background: rgba($white, 0.03);
    backdrop-filter: blur(15px);
    border: 1px solid rgba($white, 0.1);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-10px);
      border-color: rgba($red, 0.4);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .advantage-icon {
      margin-bottom: 1.5rem;

      svg {
        color: $red;
        width: 48px;
        height: 48px;
      }
    }

    .advantage-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: $white;
      margin-bottom: 1rem;
    }

    .advantage-description {
      color: rgba($white, 0.8);
      line-height: 1.6;
    }
  }
}

// Investment section
.investment-section {
  background: lighten($dark, 2%);

  .investment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .investment-card {
    background: rgba($white, 0.03);
    backdrop-filter: blur(15px);
    border: 1px solid rgba($white, 0.1);
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-5px);
      border-color: rgba($red, 0.4);
    }

    .investment-number {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      font-weight: 900;
      color: rgba($red, 0.3);
    }

    .investment-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: $white;
      margin-bottom: 1rem;
      line-height: 1.3;
      padding-right: 3rem;
    }

    .investment-description {
      color: rgba($white, 0.8);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .investment-roi {
      font-weight: 600;
      color: $white;

      .roi-value {
        color: $red;
      }
    }
  }
}

// Location section
.location-section {
  background: $dark;

  .location-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .location-image {
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 4/3;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba($dark, 0.6) 0%, rgba($red, 0.3) 100%);
    }
  }

  .location-features {
    .feature-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;

      .feature-marker {
        flex-shrink: 0;
        width: 30px;
        height: 30px;
        background: $red;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
        color: $white;
      }

      .feature-text {
        flex: 1;
        color: rgba($white, 0.9);
        line-height: 1.5;
        margin: 0;
      }
    }
  }

  .location-cta {
    text-align: center;

    .btn-large {
      padding: 1.25rem 2.5rem;
      font-size: 1rem;
      min-width: 200px;
    }
  }
}

// Gallery section
.gallery-section {
  background: lighten($dark, 2%);

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .gallery-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 4/3;
    cursor: pointer;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.02);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .gallery-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba($dark, 0.9));
      padding: 2rem 1.5rem 1.5rem;
      transform: translateY(100%);
      transition: transform 0.4s ease;

      h3 {
        color: $white;
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0;
      }
    }

    &:hover {
      img {
        transform: scale(1.05);
      }

      .gallery-overlay {
        transform: translateY(0);
      }
    }
  }
}

// Partners section
.partners-section {
  background: lighten($dark, 3%);

  .partners-carousel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    .partner-placeholder {
      background: rgba($white, 0.05);
      border: 1px solid rgba($white, 0.1);
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      aspect-ratio: 16/9;
      display: flex;
      align-items: center;
      justify-content: center;

      .partner-logo {
        color: rgba($white, 0.5);
        font-weight: 600;
      }
    }
  }
}

// Footer
.footer {
  background: $dark;
  border-top: 1px solid rgba($white, 0.1);
  padding: 3rem 0 1rem;

  .footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 2rem;

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

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

    .brand-year {
      font-size: 0.875rem;
      font-weight: 700;
      color: $red;
      background: rgba($red, 0.1);
      padding: 0.25rem 0.5rem;
      border-radius: 10px;
      border: 1px solid rgba($red, 0.3);
    }
  }

  .footer-contacts {
    h3 {
      color: $white;
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }

    .contact-item {
      margin-bottom: 1rem;
      color: rgba($white, 0.8);
      line-height: 1.6;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: $red;
        }
      }

      strong {
        color: $white;
      }
    }
  }

  .map-placeholder {
    background: rgba($white, 0.05);
    border: 1px solid rgba($white, 0.1);
    border-radius: 15px;
    padding: 3rem;
    text-align: center;
    color: rgba($white, 0.6);
    aspect-ratio: 16/9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-bottom {
    border-top: 1px solid rgba($white, 0.1);
    padding-top: 1rem;
    text-align: center;
    color: rgba($white, 0.6);
  }
}
</style>