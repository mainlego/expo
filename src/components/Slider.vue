<template>
  <div ref="sliderRef" class="slider-container">
    <div class="slider-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <div class="slide-content">
          <div class="slide-icon">
            <component :is="slide.icon" />
          </div>
          <h3 class="slide-title">{{ slide.title }}</h3>
          <p class="slide-description">{{ slide.description }}</p>
          <div v-if="slide.price" class="slide-price">
            <span class="price-symbol">{{ slide.priceSymbol }}</span>
            <span class="price-value">{{ slide.price }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="slider-dots">
      <button 
        v-for="(slide, index) in slides" 
        :key="`dot-${index}`"
        class="dot"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

    <!-- Navigation Arrows -->
    <button 
      class="slider-arrow slider-arrow-prev"
      @click="previousSlide"
      :disabled="currentSlide === 0"
      aria-label="Previous slide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </button>

    <button 
      class="slider-arrow slider-arrow-next"
      @click="nextSlide"
      :disabled="currentSlide === slides.length - 1"
      aria-label="Next slide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
      </svg>
    </button>

    <!-- Progress Bar -->
    <div class="slider-progress">
      <div 
        class="progress-bar" 
        :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'Slider',
  props: {
    slides: {
      type: Array,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    infinite: {
      type: Boolean,
      default: true
    }
  },
  emits: ['slide-change'],
  setup(props, { emit }) {
    const sliderRef = ref(null)
    const currentSlide = ref(0)
    const isPlaying = ref(props.autoplay)
    let autoplayInterval = null

    const totalSlides = computed(() => props.slides.length)

    const goToSlide = (index) => {
      if (index >= 0 && index < totalSlides.value) {
        const previousSlide = currentSlide.value
        currentSlide.value = index
        
        emit('slide-change', {
          current: index,
          previous: previousSlide,
          slide: props.slides[index]
        })

        animateSlideTransition()
      }
    }

    const nextSlide = () => {
      if (currentSlide.value < totalSlides.value - 1) {
        goToSlide(currentSlide.value + 1)
      } else if (props.infinite) {
        goToSlide(0)
      }
    }

    const previousSlide = () => {
      if (currentSlide.value > 0) {
        goToSlide(currentSlide.value - 1)
      } else if (props.infinite) {
        goToSlide(totalSlides.value - 1)
      }
    }

    const startAutoplay = () => {
      if (props.autoplay && !autoplayInterval) {
        autoplayInterval = setInterval(() => {
          nextSlide()
        }, props.interval)
        isPlaying.value = true
      }
    }

    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
        autoplayInterval = null
        isPlaying.value = false
      }
    }

    const animateSlideTransition = () => {
      // Animate slide content
      gsap.fromTo('.slide.active .slide-content > *', 
        {
          y: 30,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out'
        }
      )

      // Animate slide icon
      gsap.fromTo('.slide.active .slide-icon', 
        {
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.7)'
        }
      )
    }

    const setupTouchEvents = () => {
      if (!sliderRef.value) return

      let startX = 0
      let endX = 0

      const handleTouchStart = (e) => {
        startX = e.touches[0].clientX
        stopAutoplay()
      }

      const handleTouchMove = (e) => {
        endX = e.touches[0].clientX
      }

      const handleTouchEnd = () => {
        const diffX = startX - endX
        const minSwipeDistance = 50

        if (Math.abs(diffX) > minSwipeDistance) {
          if (diffX > 0) {
            nextSlide()
          } else {
            previousSlide()
          }
        }

        startAutoplay()
      }

      sliderRef.value.addEventListener('touchstart', handleTouchStart)
      sliderRef.value.addEventListener('touchmove', handleTouchMove)
      sliderRef.value.addEventListener('touchend', handleTouchEnd)
    }

    const setupKeyboardNavigation = () => {
      const handleKeyDown = (e) => {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault()
            previousSlide()
            break
          case 'ArrowRight':
            e.preventDefault()
            nextSlide()
            break
          case ' ':
            e.preventDefault()
            isPlaying.value ? stopAutoplay() : startAutoplay()
            break
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      
      // Cleanup function
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }

    onMounted(() => {
      startAutoplay()
      setupTouchEvents()
      const cleanupKeyboard = setupKeyboardNavigation()
      
      // Pause autoplay on hover
      if (sliderRef.value) {
        sliderRef.value.addEventListener('mouseenter', stopAutoplay)
        sliderRef.value.addEventListener('mouseleave', startAutoplay)
      }

      // Initial animation
      setTimeout(() => {
        animateSlideTransition()
      }, 100)

      // Cleanup on unmount
      onBeforeUnmount(() => {
        stopAutoplay()
        cleanupKeyboard()
      })
    })

    onBeforeUnmount(() => {
      stopAutoplay()
    })

    return {
      sliderRef,
      currentSlide,
      totalSlides,
      isPlaying,
      goToSlide,
      nextSlide,
      previousSlide
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  background: rgba($white, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba($white, 0.1);

  @media (max-width: $mobile) {
    height: 350px;
    border-radius: 15px;
  }
}

.slider-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide {
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;

  @media (max-width: $mobile) {
    padding: 1.5rem;
  }
}

.slide-content {
  text-align: center;
  max-width: 500px;
  
  > * {
    opacity: 0;
    transform: translateY(30px);
  }
}

.slide-icon {
  margin-bottom: 1.5rem;
  
  svg {
    width: 64px;
    height: 64px;
    color: $red;
    
    @media (max-width: $mobile) {
      width: 48px;
      height: 48px;
    }
  }
}

.slide-title {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 700;
  color: $white;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.slide-description {
  font-size: clamp(0.875rem, 2vw, 1rem);
  color: rgba($white, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.slide-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;

  .price-symbol {
    font-size: 1rem;
    color: $red;
    font-weight: 600;
  }

  .price-value {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 900;
    color: $red;
  }
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba($white, 0.3);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba($white, 0.6);
      transform: scale(1.1);
    }

    &.active {
      background: $red;
      border-color: $red;
      transform: scale(1.2);
    }
  }
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba($dark, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba($white, 0.2);
  border-radius: 50%;
  color: $white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: rgba($red, 0.8);
    border-color: $red;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.slider-arrow-prev {
    left: 20px;
  }

  &.slider-arrow-next {
    right: 20px;
  }

  @media (max-width: $mobile) {
    width: 40px;
    height: 40px;
    
    &.slider-arrow-prev {
      left: 15px;
    }

    &.slider-arrow-next {
      right: 15px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.slider-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba($white, 0.1);

  .progress-bar {
    height: 100%;
    background: $gradient-red;
    transition: width 0.8s ease;
    border-radius: 0 2px 2px 0;
  }
}

// Animations
.slide.active .slide-content > * {
  animation: slideInUp 0.8s ease-out forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Touch feedback
.slider-container {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

// Accessibility
.slider-arrow:focus,
.dot:focus {
  outline: 2px solid $red;
  outline-offset: 2px;
}

// Reduced motion
@media (prefers-reduced-motion: reduce) {
  .slider-wrapper {
    transition: none;
  }
  
  .slide-content > * {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>