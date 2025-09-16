<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div 
        v-if="isVisible" 
        ref="modalRef"
        class="modal-overlay" 
        @click="handleOverlayClick"
        @keydown.esc="closeModal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        tabindex="-1"
      >
        <div class="modal-container" @click.stop>
          <!-- Close Button -->
          <button 
            class="modal-close" 
            @click="closeModal"
            aria-label="Закрыть модальное окно"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>

          <!-- Modal Content -->
          <div class="modal-content">
            <!-- Header -->
            <div class="modal-header">
              <div class="modal-logo">
                <span class="brand">
                  EXPO <span class="red">REAL</span> ESTATE
                </span>
                <div class="brand-year">2025</div>
              </div>
              <h2 :id="titleId" class="modal-title">
                Спасибо что выбрали нас!
              </h2>
              <p class="modal-subtitle">
                Заполните форму и мы свяжемся с Вами, хорошего дня.
              </p>
            </div>

            <!-- Form -->
            <form ref="formRef" @submit.prevent="handleSubmit" class="modal-form">
              <!-- Name Field -->
              <div class="form-group">
                <label for="name" class="form-label">Ваше имя</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  :class="{ error: errors.name }"
                  placeholder="Введите ваше имя"
                  required
                />
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <!-- Phone Field -->
              <div class="form-group">
                <label for="phone" class="form-label">Телефон</label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="form-input"
                  :class="{ error: errors.phone }"
                  placeholder="+7(999)-999-00-00"
                  required
                />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>

              <!-- Email Field -->
              <div class="form-group">
                <label for="email" class="form-label">Ваш e-mail</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  :class="{ error: errors.email }"
                  placeholder="example@mail.ru"
                  required
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <!-- Organization Field -->
              <div class="form-group">
                <label for="organization" class="form-label">Название организации</label>
                <input
                  id="organization"
                  v-model="formData.organization"
                  type="text"
                  class="form-input"
                  placeholder="Название вашей организации"
                />
              </div>

              <!-- Message Field -->
              <div class="form-group">
                <label for="message" class="form-label">Комментарий</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-textarea"
                  placeholder="Ваше сообщение"
                  rows="4"
                ></textarea>
              </div>

              <!-- Consent Checkbox -->
              <div class="form-group">
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

              <!-- Submit Button -->
              <button 
                type="submit" 
                class="btn btn-primary btn-large form-submit"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Отправить</span>
                <span v-else class="loading-dots">
                  Отправка<span></span><span></span><span></span>
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="success-message">
              <div class="success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Спасибо за заявку!</h3>
              <p>Мы свяжемся с вами в ближайшее время.</p>
            </div>
          </div>

          <!-- Background Decorations -->
          <div class="modal-decorations">
            <div class="decoration decoration-1"></div>
            <div class="decoration decoration-2"></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { ref, reactive, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'Modal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'submit'],
  setup(props, { emit }) {
    const modalRef = ref(null)
    const formRef = ref(null)
    const titleId = `modal-title-${Math.random().toString(36).substr(2, 9)}`
    
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

    const closeModal = () => {
      emit('close')
    }

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        closeModal()
      }
    }

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
        
        emit('submit', { ...formData })
        
        // Show success message
        showSuccess.value = true
        
        // Auto-close after success
        setTimeout(() => {
          closeModal()
          resetForm()
        }, 3000)

      } catch (error) {
        console.error('Form submission error:', error)
        // Handle error (show error message, etc.)
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
    }

    const animateModal = () => {
      if (!props.isVisible) return

      nextTick(() => {
        // Animate modal container
        gsap.fromTo('.modal-container', 
          {
            scale: 0.8,
            opacity: 0,
            y: 50
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
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
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
          }
        )

        // Focus first input
        const firstInput = formRef.value?.querySelector('input')
        if (firstInput) {
          setTimeout(() => firstInput.focus(), 300)
        }
      })
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    watch(() => props.isVisible, (newValue) => {
      if (newValue) {
        animateModal()
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', handleKeyDown)
      } else {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleKeyDown)
        resetForm()
      }
    })

    onMounted(() => {
      if (props.isVisible) {
        animateModal()
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', handleKeyDown)
      }
    })

    onBeforeUnmount(() => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    })

    return {
      modalRef,
      formRef,
      titleId,
      formData,
      errors,
      isSubmitting,
      showSuccess,
      closeModal,
      handleOverlayClick,
      handleSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($black, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $z-index-modal;
  padding: 1rem;
}

.modal-container {
  position: relative;
  background: $dark;
  border-radius: 25px;
  border: 1px solid rgba($white, 0.1);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba($black, 0.5);

  @media (max-width: $mobile) {
    max-width: 95%;
    border-radius: 20px;
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba($white, 0.1);
  border: 1px solid rgba($white, 0.2);
  border-radius: 50%;
  color: $white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    background: $red;
    border-color: $red;
    transform: scale(1.1);
  }
}

.modal-content {
  padding: 2.5rem;
  position: relative;
  z-index: 5;

  @media (max-width: $mobile) {
    padding: 2rem 1.5rem;
  }
}

.modal-header {
  text-align: center;
  margin-bottom: 2rem;

  .modal-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .brand {
      font-size: 1.25rem;
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

  .modal-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    color: $white;
    margin-bottom: 1rem;
  }

  .modal-subtitle {
    color: rgba($white, 0.8);
    font-size: 1rem;
    line-height: 1.5;
  }
}

.modal-form {
  .form-group {
    margin-bottom: 1.5rem;

    &:last-of-type {
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
    min-height: 100px;
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
        transform: translate(-50%, -50%) scale(0);
        width: 6px;
        height: 10px;
        border: solid $red;
        border-width: 0 2px 2px 0;
        transform-origin: center;
        opacity: 0;
        transition: all 0.2s ease;
        transform: translate(-50%, -50%) rotate(45deg) scale(0);
      }

      &:hover {
        border-color: rgba($white, 0.5);
      }
    }

    .checkbox-text {
      flex: 1;
    }
  }

  .form-submit {
    width: 100%;
    padding: 1.25rem;
    font-size: 1rem;
    margin-top: 1rem;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
}

.success-message {
  text-align: center;
  padding: 2rem 0;

  .success-icon {
    margin-bottom: 1rem;

    svg {
      width: 48px;
      height: 48px;
      color: #2ed573;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: $white;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba($white, 0.8);
  }
}

.modal-decorations {
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
      top: -50px;
      right: -50px;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, $red 0%, transparent 70%);
    }

    &.decoration-2 {
      bottom: -30px;
      left: -30px;
      width: 100px;
      height: 100px;
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

// Modal transitions
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container {
  transition: all 0.3s ease;
}

.modal-enter-from .modal-container {
  transform: scale(0.8);
  opacity: 0;
}

// Scrollbar
.modal-container::-webkit-scrollbar {
  width: 6px;
}

.modal-container::-webkit-scrollbar-track {
  background: rgba($white, 0.1);
  border-radius: 3px;
}

.modal-container::-webkit-scrollbar-thumb {
  background: $red;
  border-radius: 3px;
  
  &:hover {
    background: lighten($red, 10%);
  }
}
</style>