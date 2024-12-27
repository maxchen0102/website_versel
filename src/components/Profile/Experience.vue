<!-- Resume.vue -->
<template>
  <div class="resume-container">
    <!-- 背景裝飾 -->
    <div class="background-decoration"></div>

    <div class="container py-5">
      <!-- 檢察官經歷描述 -->
      <div class="experience-summary mb-5">
        <div class="card hover-effect">
          <div class="card-body">
            <p class="text-secondary lh-lg">
              前臺北、彰化地檢署檢察官<br>
              曾偵辦諸多詐欺/侵占/背信/家庭暴力/過失致死/醫療糾紛/妨害自由/<br>
              恐嚇取財/強盜/銀行法/證券交易法/營業秘密法/廢棄物清理法/水污<br>
              染防治法/空氣污染防制法/毒品/性侵害/人口販運/智慧財產等案件，<br>
              於檢察官在職期間偵辦約五千餘件案件，經驗極為豐富。
            </p>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <!-- 左側區塊 -->
        <div class="col-md-4">
          <!-- 學歷 -->
          <div class="section-card mb-4">
            <h2 class="section-title">學歷</h2>
            <div class="content-box">
              <p class="school-name">國立陽明交通大學</p>
              <p class="degree">科技法律研究所碩士</p>
            </div>
          </div>

          <!-- 專業證照 -->
          <div class="section-card mb-4">
            <h2 class="section-title">專業證照</h2>
            <div class="content-box">
              <ul class="certificate-list">
                <li>司法官考試及格</li>
                <li>律師高考及格</li>
                <li>兒童或心智障礙之性侵害被害人訊問專業證照</li>
                <li>司法人員營業秘密專業課程及認證班證照</li>
                <li>司法人員環保案件專業課程及認證班證照</li>
                <li>法務部財務金融專業課程訓練證照</li>
              </ul>
            </div>
          </div>

          <!-- 專長 -->
          <div class="section-card">
            <h2 class="section-title">專長</h2>
            <div class="content-box">
              <p class="specialties">刑事訴訟、民事訴訟、訴願、行政訴訟、契約撰</p>
            </div>
          </div>
        </div>

        <!-- 右側區塊 -->
        <div class="col-md-8">
          <!-- 現職 -->
          <div class="section-card mb-4">
            <h2 class="section-title">現職</h2>
            <div class="content-box">
              <p class="current-position">鴻山國際法律事務所 資深顧問律師(合署)</p>
            </div>
          </div>

          <!-- 經歷 -->
          <div class="section-card">
            <h2 class="section-title">經歷</h2>
            <div class="content-box">
              <div class="timeline">
                <div class="timeline-item" v-for="(experience, index) in experiences" :key="index">
                  <div class="timeline-content">
                    <h3 class="timeline-title">• {{ experience.period }}</h3>
                    <p class="timeline-description" v-if="experience.description">
                      {{ experience.description }}
                    </p>
                  </div>
                </div>
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

const experiences = ref([
  {
    period: '101.9-107.8 臺灣臺北地方檢察署檢察官',
    description: '歷任組織犯罪、公訴、婦幼保護、醫療、毒品專組'
  },
  {
    period: '107.8-110.8 臺灣彰化地方檢察署檢察官',
    description: '歷任智財、經濟、環保犯罪、婦幼保護、醫療、重大刑案、毒品專組'
  },
  {
    period: '臺灣彰化地方檢察署數位採證室副執行秘書'
  },
  {
    period: '109年行政院環保署環境執法先鋒營講師'
  },
  {
    period: '110年行政院環保署精進環境執法策略會議講師'
  },
  {
    period: '112年行政院環保署不法利得計算查宣委員'
  },
  {
    period: '112年苗栗縣環保局環保犯罪查緝課程講師'
  },
  {
    period: '112年台中市環保局法律顧問'
  },
  {
    period: '112海巡署中部分署法律顧問'
  }
])
</script>

<style scoped>
.resume-container {
  position: relative;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.background-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(147, 112, 219, 0.1), rgba(147, 112, 219, 0.05));
  border-radius: 0 0 0 100%;
  z-index: 0;
}

.section-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.section-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #6a3cc9;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(147, 112, 219, 0.2);
}

.content-box {
  padding: 0.5rem 0;
}

.school-name {
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.degree {
  color: #666;
}

.certificate-list {
  list-style: none;
  padding: 0;
}

.certificate-list li {
  margin-bottom: 0.8rem;
  padding-left: 1.2rem;
  position: relative;
}

.certificate-list li::before {
  content: "•";
  color: #6a3cc9;
  position: absolute;
  left: 0;
}

.timeline-item {
  margin-bottom: 1.2rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #6a3cc9;
}

.timeline-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.timeline-description {
  color: #666;
  padding-left: 1rem;
  font-size: 0.95rem;
}

.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .background-decoration {
    width: 150px;
    height: 150px;
  }

  .section-card {
    margin-bottom: 1rem;
  }
}
</style>