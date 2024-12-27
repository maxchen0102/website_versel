<!-- QualityPolicy.vue -->
<template>
  <section class="quality-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="quality-header mb-5">
            <h2 class="quality-title">
              <span class="text-uppercase">Quality Policy</span>
              <span class="ms-3 text-muted">專業認證</span>
            </h2>
            <div class="title-underline"></div>
          </div>

          <div class="row g-4">
            <!-- 左側認證列表 -->
            <div class="col-md-7">
              <div class="certification-list">
                <div v-for="cert in certifications"
                     :key="cert.year"
                     class="certification-item">
                  <div class="year">{{ cert.year }}</div>
                  <div class="content">{{ cert.description }}</div>
                </div>
              </div>
            </div>

            <!-- 右側圖片 -->
            <div class="col-md-5">
              <div class="award-image-container">
                <img
                  src="https://placehold.co/500x500"
                  alt="榮獲第25屆國家品質獎 卓越經營獎"
                  class="award-image"
                >
                <div class="image-caption text-center mt-3">
                  榮獲第25屆國家品質獎 卓越經營獎
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

const certifications = ref([
  {
    year: '1994',
    description: '取得ISO 9001品質管理系統認證'
  },
  {
    year: '1999',
    description: '取得QS 9000品質管理系統認證'
  },
  {
    year: '2004',
    description: '取得ISO/TS 16949品質管理系統認證、ISO 14001環境管理系統認證'
  },
  {
    year: '2007',
    description: '取得OHSAS 18001安衛管理系統認證'
  },
  {
    year: '2018',
    description: '榮獲第25屆「國家品質獎 卓越經營獎」'
  },
  {
    year: '2019',
    description: '榮獲經濟部第5屆「卓越中堅企業」'
  }
])
</script>

<style scoped>
.quality-section {
  background-color: #ffffff;
}

.quality-title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.title-underline {
  width: 80px;
  height: 3px;
  background-color: #007bff;
  margin-bottom: 2rem;
}

.certification-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.certification-item {
  display: flex;
  gap: 2rem;
  position: relative;
  padding-left: 1rem;
}

.certification-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #e9ecef;
}

.certification-item:hover::before {
  background-color: #007bff;
  width: 3px;
  transition: all 0.3s ease;
}

.year {
  font-weight: 600;
  color: #007bff;
  min-width: 60px;
}

.content {
  color: #495057;
  flex: 1;
}

.award-image-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.award-image-container:hover {
  transform: translateY(-5px);
}

.award-image {
  width: 100%;
  height: auto;
  display: block;
}

.image-caption {
  color: #6c757d;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .certification-item {
    gap: 1rem;
  }

  .year {
    min-width: 50px;
  }

  .quality-title {
    font-size: 1.5rem;
  }
}
</style>