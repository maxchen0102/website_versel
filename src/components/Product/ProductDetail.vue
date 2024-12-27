<!-- ProductDetail.vue -->
<template>
  <div class="product-container">
    <div class="container py-5">
      <div class="row">
        <!-- 左側圖片區域 -->
        <div class="col-lg-7">
          <div
            class="main-image-container mb-4"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <img :src="selectedImage" alt="小蝙蝠耳環" class="main-image">
            <!-- 手機版滑動指示器 -->
            <div class="swipe-indicators d-lg-none">
              <div
                v-for="(_, index) in productImages"
                :key="index"
                class="indicator"
                :class="{ active: selectedImageIndex === index }"
              ></div>
            </div>
          </div>
          <!-- 在桌面版顯示縮圖 -->
          <div class="thumbnail-container d-none d-lg-flex">
            <div v-for="(image, index) in productImages"
                 :key="index"
                 class="thumbnail-item"
                 :class="{ 'active': selectedImageIndex === index }"
                 @click="selectImage(index)">
              <img :src="image" :alt="'小蝙蝠耳環視圖' + (index + 1)" class="thumbnail">
            </div>
          </div>
        </div>

        <!-- 右側商品信息 -->
        <div class="col-lg-5">
          <div class="product-info">
            <h1 class="product-title">小蝙蝠</h1>

            <!-- 活動信息 -->
            <div class="promotion-info">
              <p class="promotion-text">
                <span class="promotion-icon">🎉</span>
                全店，滿$2900享台灣本島【免運贈送】
              </p>
              <p class="promotion-text">
                <span class="promotion-icon">🎄</span>
                全店，🎄聖誕獻禮🎄單筆滿$4200贈【雙面兩用防潑水托特包】
              </p>
            </div>

            <!-- 價格 -->
            <div class="price-section">
              <h2 class="price">NT$1,888</h2>
            </div>

            <!-- 產品款式 -->
            <div class="style-section">
              <h3 class="style-title">產品款式：{{ selectedStyle }}</h3>
              <div class="style-options">
                <button
                  v-for="style in styles"
                  :key="style"
                  class="style-btn"
                  :class="{ active: selectedStyle === style }"
                  @click="selectedStyle = style"
                >
                  {{ style }}
                </button>
              </div>
            </div>

            <!-- 購買按鈕 -->
            <div class="purchase-section">
              <div class="contact-info">
                <p class="contact-text">購買請加入官方LINE客服洽詢</p>
                <button class="contact-btn" @click="contactLine">
                  <i class="line-icon">💬</i>
                  LINE 聯絡我們
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 商品圖片數組
const productImages = [
  'https://picsum.photos/id/1/500/500',
  'https://picsum.photos/id/2/500/500',
  'https://picsum.photos/id/3/500/500',
  'https://picsum.photos/id/4/500/500'
]

// 選中的圖片索引
const selectedImageIndex = ref(0)
const selectedImage = ref(productImages[0])

// 觸摸事件相關變量
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 30 // 最小滑動距離

// 處理觸摸開始
const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX
}

// 處理觸摸移動
const handleTouchMove = (event) => {
  touchEndX.value = event.touches[0].clientX
}

// 處理觸摸結束
const handleTouchEnd = () => {
  const swipeDistance = touchEndX.value - touchStartX.value

  if (Math.abs(swipeDistance) >= minSwipeDistance) {
    if (swipeDistance > 0 && selectedImageIndex.value > 0) {
      // 向右滑動，顯示上一張
      selectImage(selectedImageIndex.value - 1)
    } else if (swipeDistance < 0 && selectedImageIndex.value < productImages.length - 1) {
      // 向左滑動，顯示下一張
      selectImage(selectedImageIndex.value + 1)
    }
  }
}

// 選擇圖片方法
const selectImage = (index) => {
  selectedImageIndex.value = index
  selectedImage.value = productImages[index]
}

// 產品款式
const styles = ['金色', '銀色']
const selectedStyle = ref('金色')

// LINE 聯絡方法
const contactLine = () => {
  // 實際使用時替換為您的 LINE ID
  window.open('https://line.me/your-line-id')
}
</script>

<style scoped>
.product-container {
  background-color: #ffffff;
}

.main-image-container {
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding-top: 100%;
  touch-action: pan-y pinch-zoom;
}

.main-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
}

/* 滑動指示器樣式 */
.swipe-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: #e77c7c;
  transform: scale(1.2);
}

.thumbnail-container {
  display: flex;
  gap: 10px;
  margin-top: 1rem;
}

.thumbnail-item {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.thumbnail-item.active {
  border-color: #e77c7c;
}

.thumbnail-item:hover {
  border-color: #e77c7c;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

.product-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.promotion-info {
  background: linear-gradient(to right, #fff5f5, #fff0f0);
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.promotion-text {
  margin-bottom: 0.8rem;
  color: #666;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.promotion-text:last-child {
  margin-bottom: 0;
}

.promotion-icon {
  font-size: 1.2rem;
}

.price-section {
  margin: 1.5rem 0;
}

.price {
  color: #e77c7c;
  font-size: 1.8rem;
  font-weight: 600;
}

.style-section {
  margin-bottom: 2rem;
}

.style-title {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.style-options {
  display: flex;
  gap: 1rem;
}

.style-btn {
  padding: 0.5rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: white;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.style-btn.active {
  background: #e77c7c;
  color: white;
  border-color: #e77c7c;
}

.style-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-info {
  text-align: center;
  margin-bottom: 1rem;
}

.contact-text {
  color: #666;
  margin-bottom: 1rem;
}

.contact-btn {
  width: 100%;
  padding: 1rem;
  background: #06c755;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: #05b54a;
  transform: translateY(-2px);
}

@media (max-width: 992px) {
  .product-info {
    margin-top: 2rem;
  }

  .thumbnail-item {
    width: 60px;
    height: 60px;
  }
}
</style>