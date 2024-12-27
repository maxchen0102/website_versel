
<!-- ContactInfo.vue -->
<template>
  <div class="contact-section py-5">
    <div class="container">
      <div class="row g-4">
        <!-- 左側地圖卡片 -->
        <div class="col-md-6">
          <div class="map-card">
            <div class="map-container">
              <div ref="mapElement" style="width: 100%; height: 100%;"></div>
            </div>
            <div class="map-info">
              <h4 class="clinic-name">星晴心理治療所</h4>
              <div class="rating-container">
                <span class="rating-score">5.0</span>
                <div class="stars">
                  <i class="bi bi-star-fill" v-for="n in 5" :key="n"></i>
                </div>
                <span class="review-count">14 篇評論</span>
              </div>
              <button class="map-detail-btn" @click="showDetailMap">
                <i class="bi bi-map me-2"></i>顯示詳細地圖
              </button>
            </div>
          </div>
        </div>

        <!-- 右側聯絡資訊（保持不變） -->
        <div class="col-md-6">
          <div class="contact-card">
            <!-- 聯絡資訊內容保持不變 -->
            <div class="contact-header">
              <h3 class="contact-title">聯絡我們</h3>
              <div class="title-underline"></div>
            </div>

            <p class="contact-description">
              星晴心理治療所鄰近高鐵停一停車場、新竹高鐵站，
              若欲預約評估與治療，請加line與我們聯繫，
              也歡迎關注我們的臉書粉絲專頁！
            </p>

            <div class="contact-list">
              <a href="tel:03-6578690" class="contact-item">
                <div class="icon-circle">
                  <i class="bi bi-telephone"></i>
                </div>
                <div class="contact-text">
                  <span class="label">電話號碼</span>
                  <span class="value">03-6578690</span>
                </div>
              </a>

              <div class="contact-item">
                <div class="icon-circle">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="contact-text">
                  <span class="label">地址</span>
                  <span class="value">新竹縣竹北市光明六路東二段268號</span>
                </div>
              </div>

              <a href="#" class="contact-item">
                <div class="icon-circle">
                  <i class="bi bi-facebook"></i>
                </div>
                <div class="contact-text">
                  <span class="label">Facebook</span>
                  <span class="value">星晴心理治療所</span>
                </div>
              </a>

              <div class="contact-item">
                <div class="icon-circle">
                  <i class="bi bi-line"></i>
                </div>
                <div class="contact-text">
                  <span class="label">Line ID</span>
                  <span class="value">xinching.psy</span>
                </div>
              </div>
            </div>

            <div class="social-buttons">
              <button class="social-btn facebook">
                <i class="bi bi-facebook"></i>追蹤我們
              </button>
              <button class="social-btn line">
                <i class="bi bi-line"></i>加入好友
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      marker: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      if (window.google && window.google.maps) {
        this.map = new google.maps.Map(this.$refs.mapElement, {
          center: { lat: 24.839, lng: 121.023 },
          zoom: 15
        })

        this.marker = new google.maps.Marker({
          position: { lat: 24.839, lng: 121.023 },
          map: this.map,
          title: '星晴心理治療所'
        })
      }
    },
    showDetailMap() {
      window.open('https://maps.google.com/?q=新竹縣竹北市光明六路東二段268號', '_blank')
    }
  }
}
</script>



<style scoped>

.contact-section {
  background-color: #f8f9fa;
}

/* 地圖卡片樣式 */
.map-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}



.map-card:hover {
  transform: translateY(-5px);
}

.map-container {
  height: 300px;
  overflow: hidden;
}

.map-info {
  padding: 1.5rem;
}

.clinic-name {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.rating-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.rating-score {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
}

.stars {
  color: #ffd700;
  display: flex;
  gap: 2px;
}

.review-count {
  color: #6c757d;
  font-size: 0.9rem;
}

.map-detail-btn {
  background: none;
  border: none;
  color: #007bff;
  padding: 0;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.map-detail-btn:hover {
  color: #0056b3;
}

/* 聯絡資訊卡片樣式 */
.contact-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.contact-header {
  margin-bottom: 1.5rem;
}

.contact-title {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.title-underline {
  width: 50px;
  height: 3px;
  background: #007bff;
  border-radius: 2px;
}

.contact-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.icon-circle {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007bff;
  flex-shrink: 0;
}

.contact-text {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 0.2rem;
}

.value {
  color: #2c3e50;
  font-weight: 500;
}

/* 社群按鈕樣式 */
.social-buttons {
  display: flex;
  gap: 1rem;
}

.social-btn {
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.social-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.social-btn.facebook {
  background: #1877f2;
}

.social-btn.line {
  background: #00c300;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .contact-card {
    padding: 1.5rem;
  }

  .social-buttons {
    flex-direction: column;
  }
}
</style>