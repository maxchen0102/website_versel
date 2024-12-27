<!-- ProductDescription.vue -->
<template>
  <div class="product-container">
    <div class="container py-5">
      <div class="product-card">
        <h2 class="main-title">商品描述</h2>

        <!-- 產品名稱和主要描述 -->
        <div class="product-header">
          <h3 class="product-name">【微膨泡泡香水】</h3>
        </div>

        <!-- 香水特點描述 -->
        <div class="fragrance-features">
          <div
            v-for="(feature, index) in fragranceFeatures"
            :key="index"
            class="feature-item"
          >
            <div class="feature-icon">✧</div>
            <p class="feature-text">{{ feature }}</p>
          </div>
        </div>

        <!-- 產品特色列表 -->
        <div class="product-details">
          <div
            v-for="(detail, index) in productDetails"
            :key="index"
            class="detail-item"
          >
            <div class="detail-icon">•</div>
            <p class="detail-text">{{ detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fragranceFeatures = ref([
  '揉合了溫柔、淡淡的奶香',
  '把女孩的肌膚與成熟綜合恰到好處',
  '有點若隱若現的小奧味氣息',
  '會異名的讓人想湊近多聞幾下'
])

const productDetails = ref([
  '使用歐盟Ecocert認證天然胺基酸',
  '敏感肌也可以安心使用',
  '維生素B3保濕修護',
  '低敏溫和、不刺激',
  '肌膚與微膨泡泡香氣的完美融合'
])
</script>

<style scoped>
.product-container {
  background-color: #fefefe;
  min-height: 50vh;
  padding: 2rem 0;
}

.product-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.main-title {
  text-align: center;
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  position: relative;
  padding-bottom: 1rem;
}

.main-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #e66465, #fda085);
  border-radius: 2px;
}

.product-header {
  margin-bottom: 2rem;
  text-align: center;
}

.product-name {
  color: #2c3e50;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.fragrance-features {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(145deg, #fff5f5, #fff8f0);
  border-radius: 12px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.feature-icon {
  color: #e66465;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.feature-text {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.product-details {
  padding: 0 1rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.detail-icon {
  color: #fda085;
  margin-right: 1rem;
  font-weight: bold;
}

.detail-text {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .product-card {
    margin: 0 1rem;
    padding: 1.5rem;
  }

  .main-title {
    font-size: 1.5rem;
  }

  .product-name {
    font-size: 1.2rem;
  }

  .feature-text,
  .detail-text {
    font-size: 1rem;
  }
}
</style>