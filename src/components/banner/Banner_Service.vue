<!-- ServiceSection.vue -->
<template>
  <section class="service-section py-5">
    <div class="container">
      <div class="text-center mb-5">
        <div class="d-flex align-items-center justify-content-center gap-2 mb-2">
          <img
            :src="heartIcon"
            alt="heart icon"
            class="service-icon"
            style="width: 32px; height: 32px;"
          >
          <span class="text-secondary fs-5">Our Service</span>
        </div>
        <h2 class="display-6 fw-bold mb-4">服務項目。</h2>
        <div class="title-underline mx-auto"></div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="service-card">
            <div class="row g-0">
              <!-- 左側圖片 -->
              <div class="col-md-5">
                <img
                  :src="clinicImage"
                  class="service-image"
                  alt="診所環境"
                  @error="handleImageError"
                >
              </div>
              <!-- 右側內容 -->
              <div class="col-md-7">
                <div class="service-content p-4 p-lg-5">
                  <h3 class="h4 mb-4 text-primary-emphasis">
                    貼近需求的心理健康服務
                  </h3>
                  <p class="text-muted mb-4">
                    全年齡、多元化的心理評估與治療服務，包括：
                  </p>
                  <div class="service-list">
                    <div v-for="(service, index) in services" :key="index" class="service-item">
                      <i class="bi bi-check2-circle text-primary me-2"></i>
                      {{ service }}
                    </div>
                  </div>
                  <button class="service-btn mt-4" @click="handleMoreClick">
                    MORE
                    <i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clinicImage = ref('https://placehold.co/500x500')
const heartIcon = ref('/heart-hand.svg') // 請確保有這個圖標

const services = ref([
  '早期療育',
  '個別心理治療',
  '團體心理治療',
  '婚姻/伴侶心理治療',
  '失眠認知行為治療',
  '自律神經檢測',
  '腦波注意力訓練'
])

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = '/placeholder-image.jpg'
}

const handleMoreClick = () => {
  console.log('More button clicked')
  // 可以加入更多處理邏輯
}
</script>

<style scoped>
.service-section {
  background-color: #f8f9fa;
}

.title-underline {
  width: 50px;
  height: 3px;
  background-color: var(--bs-primary);
  border-radius: 2px;
  margin-top: 1rem;
}

.service-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-list {
  display: grid;
  gap: 0.8rem;
}

.service-item {
  color: #4a5568;
  display: flex;
  align-items: center;
}

.service-btn {
  background: none;
  border: 2px solid var(--bs-primary);
  color: var(--bs-primary);
  padding: 0.5rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.service-btn:hover {
  background: var(--bs-primary);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .service-image {
    height: 300px;
  }

  .service-content {
    padding: 1.5rem !important;
  }
}
</style>