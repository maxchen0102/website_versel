<!-- ContactInfo.vue -->
<template>
  <div class="contact-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <!-- 左側診所照片和資訊卡片 -->
        <div class="col-md-6 mb-4">
          <div class="card h-100 border-0 shadow-sm rounded-4">
            <div class="clinic-image-container">
              <img
                :src="clinicImage"
                alt="星晴心理治療所外觀"
                class="clinic-image"
                @error="handleImageError"
              >
            </div>
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <h4 class="clinic-name fw-bold mb-3">星晴心理治療所</h4>
              </div>

              <div class="clinic-info">
                <div class="d-flex align-items-start gap-3 mb-3">
                  <i class="bi bi-clock fs-5 text-primary"></i>
                  <div>
                    <h6 class="fw-bold mb-2">營業時間</h6>
                    <p class="text-muted mb-0">週一至週五：09:00 - 18:00</p>
                    <p class="text-muted mb-0">週六：09:00 - 13:00</p>
                  </div>
                </div>

                <div class="d-flex align-items-start gap-3">
                  <i class="bi bi-pin-map fs-5 text-primary"></i>
                  <div>
                    <h6 class="fw-bold mb-2">交通資訊</h6>
                    <p class="text-muted mb-0">鄰近高鐵停一停車場、新竹高鐵站</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右側聯絡資訊 -->
        <div class="col-md-6 mb-4">
          <div class="card h-100 border-0 shadow-sm rounded-4">
            <div class="card-body p-4">
              <div class="mb-4">
                <h3 class="fw-bold mb-2">聯絡我們</h3>
                <div class="title-underline bg-primary"></div>
              </div>

              <p class="text-muted mb-4">
                若欲預約評估與治療，請加line與我們聯繫，
                也歡迎關注我們的臉書粉絲專頁！
              </p>

              <div class="contact-list">
                <a href="tel:03-6578690" class="contact-item text-decoration-none">
                  <div class="icon-circle bg-primary bg-opacity-10">
                    <i class="bi bi-telephone text-primary"></i>
                  </div>
                  <div>
                    <small class="text-muted d-block">電話號碼</small>
                    <span class="text-dark fw-medium">03-6578690</span>
                  </div>
                </a>

                <div class="contact-item">
                  <div class="icon-circle bg-primary bg-opacity-10">
                    <i class="bi bi-geo-alt text-primary"></i>
                  </div>
                  <div>
                    <small class="text-muted d-block">地址</small>
                    <span class="text-dark fw-medium">新竹縣竹北市光明六路東二段268號</span>
                  </div>
                </div>

                <a href="#" class="contact-item text-decoration-none">
                  <div class="icon-circle bg-primary bg-opacity-10">
                    <i class="bi bi-facebook text-primary"></i>
                  </div>
                  <div>
                    <small class="text-muted d-block">Facebook</small>
                    <span class="text-dark fw-medium">星晴心理治療所</span>
                  </div>
                </a>

                <div class="contact-item">
                  <div class="icon-circle bg-primary bg-opacity-10">
                    <i class="bi bi-line text-primary"></i>
                  </div>
                  <div>
                    <small class="text-muted d-block">Line ID</small>
                    <span class="text-dark fw-medium">xinching.psy</span>
                  </div>
                </div>
              </div>

              <div class="d-grid gap-2 d-sm-flex mt-4">
                <button class="btn btn-primary flex-fill">
                  <i class="bi bi-facebook me-2"></i>追蹤我們
                </button>
                <button class="btn btn-success flex-fill">
                  <i class="bi bi-line me-2"></i>加入好友
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clinicImage = ref('https://placehold.co/500x500')

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = '/placeholder-image.jpg'
}

</script>

<style scoped>
.contact-section {
  background-color: #f8f9fa;
}

.title-underline {
  width: 50px;
  height: 3px;
  border-radius: 2px;
}

.clinic-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}

.clinic-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.card:hover .clinic-image {
  transform: scale(1.05);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* 響應式調整 */
@media (max-width: 576px) {
  .card-body {
    padding: 1.25rem;
  }

  .clinic-image-container {
    height: 200px;
  }
}
</style>