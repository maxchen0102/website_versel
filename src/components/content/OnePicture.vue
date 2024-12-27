<!-- ImageDisplay.vue -->
<template>
  <div class="image-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 主標題 -->
          <div class="section-header text-center mb-5">
            <h2 class="section-title">
              <span class="ms-3 text-muted">了解更多</span>
            </h2>
            <div class="title-underline mx-auto"></div>
          </div>

          <!-- 圖片展示區 -->
          <div class="image-container">
            <div class="image-wrapper">
              <img
                :src="currentImage"
                :alt="imageAlt"
                class="display-image"
                @error="handleImageError"
              >

              <!-- 圖片疊加效果 -->
              <div class="image-overlay">
                <div class="overlay-content">
                  <h3 class="overlay-title">
                    {{ imageTitle }}
                  </h3>
                </div>
              </div>
            </div>

            <!-- 圖片說明 -->
            <div class="image-caption text-center mt-4">
              <p class="caption-text mb-0">
                {{ imageCaption }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentImage = ref('https://placehold.co/500x500')
const imageAlt = ref('專業認證展示')
const imageTitle = ref('榮獲第25屆國家品質獎')
const imageCaption = ref('榮獲第25屆國家品質獎 卓越經營獎')

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = 'https://placehold.co/500x500'
}
</script>

<style scoped>
.image-section {
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.title-underline {
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #007bff, #6610f2);
  border-radius: 2px;
}

.image-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.image-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.display-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s ease;
}

.image-wrapper:hover .display-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0;
  transition: all 0.4s ease;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.image-wrapper:hover .overlay-content {
  transform: translateY(0);
}

.overlay-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

.image-caption {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover + .image-caption {
  opacity: 1;
}

.caption-text {
  color: #495057;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .image-overlay {
    padding: 1rem;
  }

  .overlay-title {
    font-size: 1.2rem;
  }

  .caption-text {
    font-size: 1rem;
  }
}
</style>