<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface Props {
  images: string[];
  alt: string;
}

const props = defineProps<Props>();
const { t } = useI18n();

const activeIndex = ref(0);

const hasMultipleImages = computed(() => props.images.length > 1);

function goToPrevious(): void {
  activeIndex.value =
    (activeIndex.value - 1 + props.images.length) % props.images.length;
}

function goToNext(): void {
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
}

function goToSlide(index: number): void {
  activeIndex.value = index;
}

function getScreenshotLabel(index: number): string {
  return t('slider.screenshot', { n: index + 1 });
}
</script>

<template>
  <div class="portfolio-slider">
    <div class="portfolio-slider__viewport">
      <img
        :src="images[activeIndex]"
        :alt="getScreenshotLabel(activeIndex)"
        class="portfolio-slider__image"
      />

      <button
        v-if="hasMultipleImages"
        type="button"
        class="portfolio-slider__nav portfolio-slider__nav--prev"
        :aria-label="t('slider.prev')"
        @click="goToPrevious"
      >
        ‹
      </button>

      <button
        v-if="hasMultipleImages"
        type="button"
        class="portfolio-slider__nav portfolio-slider__nav--next"
        :aria-label="t('slider.next')"
        @click="goToNext"
      >
        ›
      </button>
    </div>

    <div v-if="hasMultipleImages" class="portfolio-slider__dots">
      <button
        v-for="(_, index) in images"
        :key="index"
        type="button"
        class="portfolio-slider__dot"
        :class="{ 'portfolio-slider__dot--active': index === activeIndex }"
        :aria-label="getScreenshotLabel(index)"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-slider {
  margin-top: 14px;

  > .portfolio-slider__viewport {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background: var(--bg-surface-card);
    min-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .portfolio-slider__viewport > .portfolio-slider__image {
    width: 100%;
    max-height: 420px;
    object-fit: contain;
    display: block;
  }

  > .portfolio-slider__viewport > .portfolio-slider__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: var(--bg-slider-nav);
    color: var(--accent);
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    box-shadow: var(--shadow-slider-nav);
    transition: background 0.2s ease;

    &:hover {
      background: var(--bg-slider-nav-hover);
    }

    &--prev {
      left: 10px;
    }

    &--next {
      right: 10px;
    }
  }

  > .portfolio-slider__dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 14px;

    > .portfolio-slider__dot {
      width: 8px;
      height: 8px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: var(--slider-dot);
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;

      &--active {
        background: var(--accent);
        transform: scale(1.2);
      }
    }
  }
}
</style>
