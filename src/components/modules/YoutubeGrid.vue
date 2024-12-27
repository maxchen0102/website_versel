<!-- YoutubeSection.vue -->
<template>
  <section class="youtube-section py-5">
    <div class="container">
      <!-- 標題區域 -->
      <div class="text-center mb-5">
        <h2 class="section-title">YouTube 頻道</h2>
        <div class="title-underline"></div>
      </div>

      <!-- 影片網格 -->
      <div class="video-grid">
        <div v-for="video in videos" :key="video.id" class="video-item">
          <!-- 影片容器 -->
          <div class="video-container">
            <iframe
              :src="'https://www.youtube.com/embed/' + video.videoId"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="video-frame"
            ></iframe>
          </div>
          <!-- 影片標題 -->
          <h3 class="video-title">{{ video.title }}</h3>
          <!-- 影片描述 -->
          <p class="video-description">{{ video.description }}</p>
        </div>
      </div>

      <!-- 查看更多按鈕 -->
      <div class="text-center mt-5">
        <a href="https://www.youtube.com/@DrChiangDDS" target="_blank" class="view-more-btn">
          觀看更多影片
          <i class="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'YoutubeSection',
  data() {
    return {
      videos: [
        {
          id: 1,
          videoId: 'BKPmfL2r-fQ', // 如果要更換影片，只要更改這裡就好
          title: '全口數位化植牙｜歐仕美植牙中心',
          description: '數位化全口重建的專業治療過程與成果展示'
        },
        {
          id: 2,
          videoId: 'BKPmfL2r-fQ',
          title: '全口重建案例分享｜數位微笑設計',
          description: '透過數位科技打造完美微笑'
        },
        {
          id: 3,
          videoId: 'BKPmfL2r-fQ',
          title: '植牙新技術介紹｜即拔即種植牙',
          description: '即時植牙技術的優勢與應用'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 區塊基本樣式 */
.youtube-section {
  background-color: #ffffff;
  padding: 60px 0;
}

/* 標題樣式 */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

/* 標題底線 */
.title-underline {
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #3498db, #2980b9);
  margin: 0 auto;
}

/* 影片網格布局 */
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

/* 影片項目容器 */
.video-item {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding-bottom: 15px;
}

.video-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* 影片容器 */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 寬高比 */
  height: 0;
  overflow: hidden;
}

/* 影片框架 */
.video-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* 影片標題 */
.video-title {
  padding: 15px 15px 5px 15px;
  margin: 0;
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: 600;
}

/* 影片描述 */
.video-description {
  padding: 0 15px;
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

/* 查看更多按鈕 */
.view-more-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 30px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-more-btn:hover {
  background: linear-gradient(135deg, #2980b9, #2573a7);
  transform: translateY(-2px);
  color: white;
}

.view-more-btn i {
  transition: transform 0.3s ease;
}

.view-more-btn:hover i {
  transform: translateX(5px);
}

/* 響應式設計 */
@media (max-width: 992px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .video-grid {
    grid-template-columns: 1fr;
  }

  .video-title {
    font-size: 1rem;
  }

  .video-description {
    font-size: 0.85rem;
  }
}
</style>