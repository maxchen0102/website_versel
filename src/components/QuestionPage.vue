// FaqList.vue
<template>
  <div class="faq-container">
    <div
      class="faq-item"
      v-for="(item, index) in faqList"
      :key="index"
    >
      <div class="faq-question" @click="toggleFaq(index)">
        <div class="question-content">
          <span class="question-number">{{ index + 1 }}</span>
          <span class="question-text">{{ item.question }}</span>
        </div>
        <!-- 優化加減號動畫 -->
        <div class="toggle-icon" :class="{ 'is-open': item.isOpen }">
          <span class="icon-line"></span>
          <span class="icon-line"></span>
        </div>
      </div>
      <!-- 使用 v-show 替代 v-if 來保持 DOM 結構 -->
      <div
        class="faq-answer"
        :class="{ 'is-open': item.isOpen }"
        v-show="item.isOpen"
      >
        <div class="answer-content">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqList = ref([
  {
    question: '申請塔位使用時，需要準備哪些資料？',
    answer: '需要準備申請人身份證明文件、戶籍證明等相關文件',
    isOpen: false
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

const toggleFaq = (index) => {
  faqList.value = faqList.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false
  }))
}
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 20px;
}

.faq-item {
  background: #ffffff;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden; /* 確保內容不會溢出 */
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.question-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.question-number {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
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

.question-text {
  font-size: 1.1rem;
  color: #1f2937;
  font-weight: 500;
}

/* 優化加減號動畫 */
.toggle-icon {
  position: relative;
  width: 20px;
  height: 20px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-icon .icon-line {
  position: absolute;
  background-color: #6366f1;
  height: 2px;
  width: 100%;
  left: 0;
  top: 50%;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-icon .icon-line:first-child {
  transform: translateY(-50%);
}

.toggle-icon .icon-line:last-child {
  transform: translateY(-50%) rotate(90deg);
}

.toggle-icon.is-open .icon-line:last-child {
  transform: translateY(-50%) rotate(0);
}

/* 優化答案區域動畫 */
.faq-answer {
  max-height: 0;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.faq-answer.is-open {
  max-height: 500px; /* 設置一個足夠大的值 */
  opacity: 1;
}

.answer-content {
  padding: 0 1.5rem 1.5rem;
  color: #4b5563;
  line-height: 1.6;
}

.answer-content p {
  margin: 0;
}

@media (max-width: 640px) {
  .faq-container {
    padding: 0 1rem;
  }

  .question-text {
    font-size: 1rem;
  }

  .faq-question {
    padding: 1.2rem;
  }
}
</style>