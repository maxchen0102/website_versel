// FaqList.vue
<template>
  <!-- FAQ 容器：設置最大寬度並置中 -->
  <div class="faq-container">
    <!-- 遍歷 FAQ 列表，為每個項目創建一個卡片 -->
    <div
      class="faq-item"
      v-for="(item, index) in faqList"
      :key="index"
      :class="{ 'is-open': item.isOpen }"
    >
      <!-- 問題區域：包含問題文本和切換按鈕 -->
      <div class="faq-question" @click="toggleFaq(index)">
        <div class="question-content">
          <!-- 序號徽章 -->
          <span class="question-number">{{ index + 1 }}</span>
          <!-- 問題文本 -->
          <span class="question-text">{{ item.question }}</span>
        </div>
        <!-- 自定義加減號圖標 -->
        <div class="toggle-icon" :class="{ 'is-open': item.isOpen }">
          <span class="icon-line"></span>
          <span class="icon-line"></span>
        </div>
      </div>
      <!-- 答案區域：使用 transition 組件實現動畫效果 -->
      <transition name="fade">
        <div class="faq-answer" v-if="item.isOpen">
          <p>{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// FAQ 數據列表
const faqList = ref([
  {
    question: '申請塔位使用時，需要準備哪些資料？',
    answer: '需要準備申請人身份證明文件、戶籍證明等相關文件',
    isOpen: false  // 控制展開/收起狀態
  },
  {
    question: '如何選擇塔位坐向？',
    answer: '可根據風水師建議或個人喜好選擇適合的方位',
    isOpen: false
  },
  {
    question: '申辰年(113年)年籌方位',
    answer: '請諮詢專業人員獲取具體建議',
    isOpen: false
  },
  {
    question: '家裡不方便安奉牌位，應該怎麼辦？',
    answer: '可以考慮選擇寺廟或靈骨塔等專業場所安奉',
    isOpen: false
  }
])

// 切換 FAQ 項目的展開/收起狀態
const toggleFaq = (index) => {
  faqList.value = faqList.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false  // 點擊的項目切換狀態，其他項目收起
  }))
}
</script>

<style scoped>
/* 主容器樣式 */
.faq-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 20px;
}

/* FAQ 項目卡片樣式 */
.faq-item {
  background: #ffffff;
  border-radius: 12px;  /* 圓角效果 */
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  /* 陰影效果 */
  transition: all 0.3s ease;  /* 過渡動畫 */
}

/* 卡片懸停效果 */
.faq-item:hover {
  transform: translateY(-2px);  /* 輕微上浮 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);  /* 更深的陰影 */
}

/* 問題區域樣式 */
.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;  /* 防止文字被選中 */
}

/* 問題內容布局 */
.question-content {
  display: flex;
  align-items: center;
  gap: 1rem;  /* 序號和文字之間的間距 */
}

/* 序號圓形徽章樣式 */
.question-number {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);  /* 漸變背景 */
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
}

/* 問題文字樣式 */
.question-text {
  font-size: 1.1rem;
  color: #1f2937;
  font-weight: 500;
}

/* 加減號圖標容器 */
.toggle-icon {
  position: relative;
  width: 20px;
  height: 20px;
}

/* 加減號圖標的線條 */
.icon-line {
  position: absolute;
  background-color: #6366f1;  /* 圖標顏色 */
  height: 2px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
}

/* 垂直線條（形成加號） */
.icon-line:last-child {
  transform: translateY(-50%) rotate(90deg);
}

/* 當展開時，垂直線條旋轉為水平（形成減號） */
.toggle-icon.is-open .icon-line:last-child {
  transform: translateY(-50%) rotate(0);
}

/* 答案區域樣式 */
.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #4b5563;
  line-height: 1.6;
}

.faq-answer p {
  margin: 0;
}

/* 展開/收起動畫效果 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  max-height: 200px;
  opacity: 1;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  max-height: 0;
  opacity: 0;
}

/* 響應式設計：適配移動端 */
@media (max-width: 640px) {
  .faq-container {
    padding: 0 1rem;
  }

  .question-text {
    font-size: 1rem;  /* 移動端字體稍小 */
  }

  .faq-question {
    padding: 1.2rem;  /* 移動端內邊距稍小 */
  }
}
</style>