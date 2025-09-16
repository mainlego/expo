<template>
  <section ref="sectionRef" class="contact-form-section section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Свяжитесь с нами</h2>
        <p class="section-subtitle">
          Оставьте заявку и наши специалисты свяжутся с вами 
          в ближайшее время для консультации
        </p>
      </div>

      <div class="contact-content">
        <!-- Contact Form -->
        <div class="form-container">
          <form ref="formRef" @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-name" class="form-label">Ваше имя *</label>
                <input
                  id="contact-name"
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  :class="{ error: errors.name }"
                  placeholder="Введите ваше имя"
                  required
                />
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="contact-phone" class="form-label">Телефон *</label>
                <input
                  id="contact-phone"
                  v-model="formData.phone"
                  type="tel"
                  class="form-input"
                  :class="{ error: errors.phone }"
                  placeholder="+7(999)-999-00-00"
                  required
                />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="contact-email" class="form-label">Ваш e-mail *</label>
                <input
                  id="contact-email"
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  :class="{ error: errors.email }"
                  placeholder="example@mail.ru"
                  required
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="contact-organization" class="form-label">Название организации</label>
                <input
                  id="contact-organization"
                  v-model="formData.organization"
                  type="text"
                  class="form-input"
                  placeholder="Название вашей организации"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label">Комментарий</label>
              <textarea
                id="contact-message"
                v-model="formData.message"
                class="form-textarea"
                placeholder="Опишите ваши потребности или задайте вопрос"
                rows="5"
              ></textarea>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input
                  v-model="formData.consent"
                  type="checkbox"
                  class="form-checkbox"
                  :class="{ error: errors.consent }"
                  required
                />
                <span class="checkbox-custom"></span>
                <span class="checkbox-text">
                  Я согласен на обработку персональных данных.
                </span>
              </label>
              <span v-if="errors.consent" class="error-message">{{ errors.consent }}</span>
            </div>

            <button 
              type="submit" 
              class="btn btn-primary btn-large form-submit ripple"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Отправить</span>
              <span v-else class="loading-dots">
                Отправка<span></span><span></span><span></span>
              </span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="success-overlay">
            <div class="success-content">
              <div class="success-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Спасибо за заявку!</h3>
              <p>Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
              <button @click="resetForm" class="btn btn-outline">
                Отправить еще одну заявку
              </button>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-card">
            <h3 class="info-title">Контактная информация</h3>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <div class="info-label">Email</div>
                  <div class="info-value">
                    <a href="mailto:org@exporealestate.ru">org@exporealestate.ru</a>
                  </div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <div class="info-label">Телефон</div>
                  <div class="info-value">
                    <a href="tel:+74993500006">+7 (499) 35 0000 6</a>
                  </div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <div class="info-label">Адрес</div>
                  <div class="info-value">
                    Деловой Центр Москва-Сити<br>
                    Пресненская набережная, 2
                  </div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v16.5c0 .83-.67 1.5-1.5 1.5H8c-.83 0-1.5-.67-1.5-1.5V4H5V2h4.5V1c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H19.5z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <div class="info-label">Дата проведения</div>
                  <div class="info-value highlight">
                    Весна 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Benefits List -->
          <div class="benefits-list">
            <h4>Что вы получите:</h4>
            <ul>
              <li>Персональную консультацию эксперта</li>
              <li>Доступ к эксклюзивным предложениям</li>
              <li>Информацию о лучших инвестиционных возможностях</li>
              <li>Приоритетное размещение на выставке</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Background decorations -->
    <div class="form-decorations">
      <div class="decoration decoration-1"></div>
      <div class="decoration decoration-2"></div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ContactForm',
  emits: ['form-submit'],
  setup(props, { emit }) {
    const sectionRef = ref(null)
    const formRef = ref(null)
    
    const formData = reactive({
      name: '',
      phone: '',
      email: '',
      organization: '',
      message: '',
      consent: false
    })

    const errors = reactive({})
    const isSubmitting = ref(false)
    const showSuccess = ref(false)

    const validateForm = () => {
      const newErrors = {}

      // Name validation
      if (!formData.name.trim()) {
        newErrors.name = 'Имя обязательно для заполнения'
      } else if (formData.name.length < 2) {
        newErrors.name = 'Имя должно содержать минимум 2 символа'
      }

      // Phone validation
      const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/
      if (!formData.phone.trim()) {
        newErrors.phone = 'Телефон обязателен для заполнения'
      } else if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = 'Некорректный формат телефона'
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email.trim()) {
        newErrors.email = 'Email обязателен для заполнения'
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Некорректный формат email'
      }

      // Consent validation
      if (!formData.consent) {
        newErrors.consent = 'Необходимо согласие на обработку персональных данных'
      }

      Object.assign(errors, newErrors)
      return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
      // Clear previous errors
      Object.keys(errors).forEach(key => {
        delete errors[key]
      })

      if (!validateForm()) {
        // Animate error fields
        const errorFields = document.querySelectorAll('.form-input.error, .form-checkbox.error')
        gsap.fromTo(errorFields, 
          { x: 0 },
          { 
            x: [-10, 10, -10, 10, 0],
            duration: 0.5,
            ease: 'power2.inOut'
          }
        )
        return
      }

      isSubmitting.value = true

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        emit('form-submit', { ...formData })
        
        // Show success message
        showSuccess.value = true
        
        // Animate success overlay
        gsap.fromTo('.success-overlay', 
          {
            opacity: 0,
            scale: 0.8
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }
        )

      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    const resetForm = () => {
      Object.keys(formData).forEach(key => {
        if (key === 'consent') {
          formData[key] = false
        } else {
          formData[key] = ''
        }
      })
      Object.keys(errors).forEach(key => {
        delete errors[key]
      })
      showSuccess.value = false

      // Animate form back in
      gsap.fromTo('.contact-form .form-group', 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }
      )
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
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animate form
      gsap.fromTo('.form-container', 
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
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animate contact info
      gsap.fromTo('.contact-info', 
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
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animate form fields
      gsap.fromTo('.form-group', 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    onMounted(() => {
      setupScrollAnimations()
    })

    onBeforeUnmount(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

    return {
      sectionRef,
      formRef,
      formData,
      errors,
      isSubmitting,
      showSuccess,
      handleSubmit,
      resetForm
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form-section {
  background: linear-gradient(135deg, lighten($dark, 2%) 0%, $dark 100%);
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

.contact-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.form-container {
  position: relative;
}

.contact-form {
  background: rgba($white, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba($white, 0.1);
  border-radius: 25px;
  padding: 2.5rem;

  @media (max-width: $mobile) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.form-group {
  margin-bottom: 1.5rem;

  &.checkbox-group {
    margin-bottom: 2rem;
  }
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: $white;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba($white, 0.05);
  border: 1px solid rgba($white, 0.2);
  border-radius: 12px;
  color: $white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba($white, 0.5);
  }

  &:focus {
    outline: none;
    border-color: $red;
    background: rgba($white, 0.08);
    box-shadow: 0 0 0 3px rgba($red, 0.1);
  }

  &.error {
    border-color: #ff4757;
    background: rgba(#ff4757, 0.1);
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  display: block;
  font-size: 0.75rem;
  color: #ff4757;
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: rgba($white, 0.8);
  line-height: 1.5;

  .form-checkbox {
    display: none;

    &:checked + .checkbox-custom::after {
      opacity: 1;
      transform: scale(1);
    }

    &.error + .checkbox-custom {
      border-color: #ff4757;
      background: rgba(#ff4757, 0.1);
    }
  }

  .checkbox-custom {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border: 2px solid rgba($white, 0.3);
    border-radius: 4px;
    background: rgba($white, 0.05);
    transition: all 0.3s ease;
    position: relative;
    margin-top: 2px;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 10px;
      border: solid $red;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg) scale(0);
      opacity: 0;
      transition: all 0.2s ease;
    }

    &:hover {
      border-color: rgba($white, 0.5);
    }
  }
}

.form-submit {
  width: 100%;
  padding: 1.25rem;
  font-size: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.success-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($dark, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.success-content {
  text-align: center;
  padding: 2rem;

  .success-icon {
    margin-bottom: 1.5rem;

    svg {
      width: 64px;
      height: 64px;
      color: #2ed573;
    }
  }

  h3 {
    font-size: 1.75rem;
    color: $white;
    margin-bottom: 1rem;
  }

  p {
    color: rgba($white, 0.8);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.contact-info {
  .info-card {
    background: rgba($white, 0.03);
    backdrop-filter: blur(15px);
    border: 1px solid rgba($white, 0.1);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .info-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: $white;
    margin-bottom: 2rem;
  }

  .info-items {
    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .info-icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      background: rgba($red, 0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 24px;
        height: 24px;
        color: $red;
      }
    }

    .info-content {
      flex: 1;

      .info-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: rgba($white, 0.6);
        margin-bottom: 0.25rem;
        text-transform: uppercase;
      }

      .info-value {
        font-size: 1rem;
        color: $white;
        line-height: 1.5;

        a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: $red;
          }
        }

        &.highlight {
          color: $red;
          font-weight: 600;
        }
      }
    }
  }

  .benefits-list {
    background: rgba($red, 0.05);
    border: 1px solid rgba($red, 0.2);
    border-radius: 15px;
    padding: 1.5rem;

    h4 {
      color: $red;
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
        color: rgba($white, 0.9);
        font-size: 0.875rem;
        line-height: 1.4;

        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: $red;
          font-weight: bold;
        }
      }
    }
  }
}

.form-decorations {
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
    opacity: 0.05;

    &.decoration-1 {
      top: 20%;
      left: -10%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, $red 0%, transparent 70%);
    }

    &.decoration-2 {
      bottom: 10%;
      right: -10%;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, $white 0%, transparent 70%);
    }
  }
}

// Loading dots animation
.loading-dots {
  span {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    margin: 0 2px;
    animation: loadingDots 1.4s infinite ease-in-out both;

    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
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