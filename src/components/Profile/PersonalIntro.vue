<!-- DoctorProfile.vue -->
<template>
  <section class="doctor-profile py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="profile-card">
            <div class="row g-0">
              <!-- 左側醫師照片 -->
              <div class="col-md-5">
                <div class="doctor-image-wrapper">
                  <img
                    :src="doctorImage"
                    :alt="doctorName"
                    class="doctor-image"
                  >
                </div>
              </div>

              <!-- 右側資訊 -->
              <div class="col-md-7">
                <div class="profile-content p-4 p-lg-5">
                  <!-- 專業領域標籤 -->
                  <div class="specialties mb-4">
                    <span v-for="specialty in specialties"
                          :key="specialty"
                          class="specialty-tag">
                      {{ specialty }}
                    </span>
                  </div>

                  <!-- 醫師姓名和職稱 -->
                  <div class="doctor-info mb-4">
                    <h2 class="doctor-name">{{ doctorName }}</h2>
                    <div class="doctor-title">{{ doctorTitle }}</div>
                  </div>

                  <!-- 資歷列表 -->
                  <div class="qualifications-list">
                    <div v-for="(qualification, index) in qualifications"
                         :key="index"
                         class="qualification-item">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      {{ qualification }}
                    </div>
                  </div>

                  <!-- 機構認證logo -->
                  <div class="certifications mt-4">
                    <div class="certifications-grid">
                      <div v-for="(cert, index) in certifications"
                           :key="index"
                           class="certification-logo">
                        <img :src="cert" alt="認證機構" class="cert-img">
                      </div>
                    </div>
                  </div>
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

const doctorImage = ref('https://placehold.co/500x500')
const doctorName = ref('康智為 院長')
const doctorTitle = ref('植牙專科醫師')

const specialties = ref([
  'All-on-4',
  'All-on-6',
  '一日植牙',
  '全口重建',
  '美學齒塑'
])

const qualifications = ref([
  '中華民國植牙學會專科醫師',
  '台灣美容植牙醫學會會員',
  '台灣口腔臨床植體學會會員',
  '亞太植牙美容醫學會植牙暨美容專科醫師',
  '瑞典 Nobel Biocare™ All-on-4® 認證醫師',
  '瑞士 Straumann® 植體講師',
  '台灣大學進階植牙專科訓練',
  '美國哈佛大學植牙專科訓練',
  '美國俄亥俄州立大學植牙專科訓練'
])

const certifications = ref([
  'https://placehold.co/100x50',
  'https://placehold.co/100x50',
  'https://placehold.co/100x50',
  'https://placehold.co/100x50',
  'https://placehold.co/100x50'
])
</script>

<style scoped>
.doctor-profile {
  background-color: #f8f9fa;
}

.profile-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.doctor-image-wrapper {
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.doctor-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.doctor-image:hover {
  transform: scale(1.03);
}

.specialty-tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: #e7f1ff;
  color: #0d6efd;
  border-radius: 30px;
  margin: 0.25rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.specialty-tag:hover {
  background-color: #0d6efd;
  color: white;
}

.doctor-name {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.doctor-title {
  color: #6c757d;
  font-size: 1.1rem;
}

.qualifications-list {
  margin-top: 2rem;
}

.qualification-item {
  margin-bottom: 1rem;
  color: #495057;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.qualification-item:hover {
  transform: translateX(5px);
}

.certifications {
  border-top: 1px solid #eee;
  padding-top: 2rem;
  margin-top: 2rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  align-items: center;
}

.certification-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.certification-logo:hover {
  opacity: 1;
}

.cert-img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .doctor-image-wrapper {
    min-height: 300px;
  }

  .doctor-name {
    font-size: 1.5rem;
  }

  .specialty-tag {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>