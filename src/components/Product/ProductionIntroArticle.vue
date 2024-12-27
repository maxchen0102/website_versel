<!-- ProductStory.vue -->
<template>
  <div class="story-container">
    <div class="container py-5">
      <article class="story-content">
        <h2 class="story-title">
          商品描述
          <div class="title-underline"></div>
        </h2>

        <div class="story-body">
          <!-- 引言區 -->
          <div class="quote-section">
            <p class="quote-text">" 勇敢探索未知，展翅高飞 🦋✨ "</p>
          </div>

          <!-- 主要內容區 -->
          <div class="content-section">
            <div class="paragraph-group">
              <h3 class="section-subtitle">夜行性的小蝙蝠</h3>
              <p>能在黑暗中找到自己的方向，穩健地飛行</p>
              <p>更象徵：轉變與重生</p>
              <p>特別以黑白配色線條展現</p>
              <p>象徵著轉變中的平衡與保護及好運</p>
            </div>

            <div class="paragraph-group">
              <h3 class="section-subtitle">當你戴上代表著堅韌和智慧的小蝙蝠</h3>
              <p>能更有能量，去發現生活中的神奇</p>
              <p>並持之以恆地追求夢想 💫</p>
            </div>

            <div class="paragraph-group">
              <h3 class="section-subtitle">將印象中會令人害怕的蝙蝠</h3>
              <p>透過手繪線條勾勒</p>
              <p>圓弧的輪廓與樣貌呈現小蝙蝠的可愛樣貌</p>
              <p>融合甜酷風格</p>
              <p>在萬聖節非常應景</p>
              <p>日常中也能靈活搭配任何服裝</p>
            </div>

            <!-- 品牌區塊 -->
            <div class="brand-section">
              <h3 class="brand-title">品牌識別</h3>
              <p>將品牌識別使用上特規雷射切割，呈現出細緻的漸層線條</p>
            </div>

            <!-- 設計理念 -->
            <div class="design-section">
              <h3 class="design-title">輕量化設計</h3>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
// 如果需要添加互動功能可以在這裡擴展
</script>

<style scoped>
.story-container {
  background-color: #fafafa;
  min-height: 50vh;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.story-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  font-weight: 600;
}

.title-underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #d1356d, #e66465);
  margin: 1rem auto 0;
  border-radius: 2px;
}

.quote-section {
  margin: 2rem 0 3rem;
  text-align: center;
}

.quote-text {
  font-size: 1.4rem;
  color: #2c3e50;
  font-style: italic;
  line-height: 1.6;
}

.content-section {
  color: #4a5568;
  line-height: 1.8;
}

.paragraph-group {
  margin-bottom: 2.5rem;
}

.section-subtitle {
  color: #2c3e50;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.brand-section,
.design-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.brand-title,
.design-title {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

p {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .story-content {
    margin: 0 1rem;
    padding: 2rem;
  }

  .story-title {
    font-size: 1.6rem;
  }

  .quote-text {
    font-size: 1.2rem;
  }

  .section-subtitle {
    font-size: 1.15rem;
  }

  p {
    font-size: 1rem;
  }
}

/* 優雅的懸停效果 */
.story-content {
  transition: transform 0.3s ease;
}

.story-content:hover {
  transform: translateY(-5px);
}

/* 漸變背景 */
.story-container {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}
</style>