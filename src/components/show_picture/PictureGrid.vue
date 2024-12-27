<!-- ImageGallery.vue -->
<template>
  <section class="gallery-section">
    <div class="container py-5">
      <!-- 標題區域 -->
      <div class="text-center mb-5">
        <h6 class="text-secondary text-uppercase mb-2">PRODUCTS</h6>
        <h2 class="section-title">熱門產品</h2>
      </div>

      <!-- 圖片牆網格 -->
      <div class="image-grid">
        <!-- 單個圖片項目 -->
        <div v-for="(item, index) in galleryItems"
             :key="index"
             class="gallery-item">
          <div class="item-inner">
            <!-- 圖片 -->
            <img :src="item.image" :alt="item.title" class="gallery-image">

            <!-- 懸停效果層 -->
            <div class="hover-overlay">
              <div class="overlay-content">
                <h3 class="item-title">{{ item.title }}</h3>
                <p class="item-description">{{ item.description }}</p>
                <a href="#" class="view-more">了解更多</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      galleryItems: [
        {
          image: '/path-to-image/business-card.jpg',
          title: '名片',
          description: '專業設計，展現品味'
        },
        {
          image: '/path-to-image/dm.jpg',
          title: 'DM海報',
          description: '創意行銷，吸引目光'
        },
        {
          image: '/path-to-image/sticker.jpg',
          title: '數位貼紙',
          description: '個性化表達'
        },
        {
          image: '/path-to-image/bag.jpg',
          title: '帆布袋',
          description: '環保時尚'
        },
        {
          image: '/path-to-image/tshirt.jpg',
          title: 'T恤訂製',
          description: '穿出自我風格'
        },
        {
          image: '/path-to-image/neon.jpg',
          title: '霓虹燈箱',
          description: '打造獨特氛圍'
        },
        {
          image: '/path-to-image/lightbox.jpg',
          title: '燈箱廣告',
          description: '吸睛展示'
        },
        {
          image: '/path-to-image/design.jpg',
          title: '客製設計',
          description: '實現創意想法'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 區塊基本樣式 */
.gallery-section {
  background-color: #f8f9fa;
  padding: 40px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
}

/* 圖片牆網格布局 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 20px;
}

/* 單個圖片項目容器 */
.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

/* 內部容器 */
.item-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

/* 圖片樣式 */
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* 懸停效果層 */
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.8)
  );
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* 懸停內容 */
.overlay-content {
  text-align: center;
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  padding: 20px;
}

/* 標題樣式 */
.item-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* 描述文字樣式 */
.item-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

/* 查看更多按鈕 */
.view-more {
  display: inline-block;
  padding: 8px 20px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-more:hover {
  background-color: white;
  color: #333;
}

/* 懸停效果 */
.gallery-item:hover .hover-overlay {
  opacity: 1;
}

.gallery-item:hover .overlay-content {
  transform: translateY(0);
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .image-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .image-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .section-title {
    font-size: 2rem;
  }

  .item-title {
    font-size: 1.25rem;
  }
}
</style>