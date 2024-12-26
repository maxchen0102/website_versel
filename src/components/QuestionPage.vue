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
/* FAQ 主容器：控制整個 FAQ 列表的寬度和位置 */
.faq-container {
  max-width: 800px;  /* 設置最大寬度，避免在大螢幕上過寬 */
  margin: 2rem auto;  /* 上下邊距 2rem，左右自動居中 */
  padding: 0 20px;  /* 左右內邊距，確保在小螢幕上有適當留白 */
}

/* FAQ 單個項目的卡片樣式 */
.faq-item {
  background: #ffffff;  /* 設置白色背景 */
  border-radius: 12px;  /* 圓角效果，使卡片更現代化 */
  margin-bottom: 1rem;  /* 卡片之間的間距 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  /* 陰影效果：水平偏移 2px，垂直偏移 8px，模糊度 8px */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* 所有屬性變化時使用平滑過渡，使用貝塞爾曲線讓動畫更自然 */
  overflow: hidden;  /* 隱藏超出卡片範圍的內容 */
}

/* 卡片懸停效果 */
.faq-item:hover {
  transform: translateY(-2px);  /* 上移 2px，製造懸浮效果 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);  /* 懸停時陰影更深更大，強化視覺層次 */
}

/* 問題區域樣式 */
.faq-question {
  padding: 1.5rem;  /* 內部留白 */
  display: flex;  /* 使用彈性布局 */
  justify-content: space-between;  /* 問題文字和圖標分別靠左靠右 */
  align-items: center;  /* 垂直居中對齊 */
  cursor: pointer;  /* 滑鼠變成手指形狀，提示可點擊 */
  user-select: none;  /* 防止文字被選中 */
}

/* 問題內容區域（包含序號和問題文字） */
.question-content {
  display: flex;  /* 使用彈性布局 */
  align-items: center;  /* 垂直居中對齊 */
  gap: 1rem;  /* 序號和文字之間的間距 */
}

/* 序號圓形徽章樣式 */
.question-number {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);  /* 漸變背景色 */
  color: white;  /* 文字顏色 */
  width: 28px;  /* 圓形寬度 */
  height: 28px;  /* 圓形高度 */
  border-radius: 50%;  /* 圓形效果 */
  display: flex;  /* 使用彈性布局 */
  align-items: center;  /* 垂直居中 */
  justify-content: center;  /* 水平居中 */
  font-size: 0.9rem;  /* 文字大小 */
  font-weight: 500;  /* 文字粗細 */
}

/* 問題文字樣式 */
.question-text {
  font-size: 1.1rem;  /* 文字大小 */
  color: #1f2937;  /* 文字顏色 */
  font-weight: 500;  /* 文字粗細 */
}

/* 加減號圖標容器 */
.toggle-icon {
  position: relative;  /* 相對定位，作為內部線條的參考點 */
  width: 20px;  /* 圖標寬度 */
  height: 20px;  /* 圖標高度 */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* 旋轉動畫效果 */
}

/* 加減號的線條基本樣式 */
.toggle-icon .icon-line {
  position: absolute;  /* 絕對定位，相對於容器 */
  background-color: #6366f1;  /* 線條顏色 */
  height: 2px;  /* 線條粗細 */
  width: 100%;  /* 線條寬度 */
  left: 0;  /* 靠左對齊 */
  top: 50%;  /* 垂直居中 */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* 旋轉動畫效果 */
}

/* 第一條線（橫線） */
.toggle-icon .icon-line:first-child {
  transform: translateY(-50%);  /* 垂直居中定位 */
}

/* 第二條線（豎線，形成加號） */
.toggle-icon .icon-line:last-child {
  transform: translateY(-50%) rotate(90deg);  /* 垂直居中並旋轉 90 度 */
}

/* 展開時第二條線旋轉為橫線（形成減號） */
.toggle-icon.is-open .icon-line:last-child {
  transform: translateY(-50%) rotate(0);  /* 旋轉回 0 度 */
}

/* 答案區域的基本樣式（收起狀態） */
.faq-answer {
  max-height: 0;  /* 初始高度為 0 */
  opacity: 0;  /* 完全透明 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* 高度和透明度的過渡動畫 */
  overflow: hidden;  /* 隱藏超出部分 */
}

/* 答案區域展開狀態 */
.faq-answer.is-open {
  max-height: 500px;  /* 展開後的最大高度 */
  opacity: 1;  /* 完全不透明 */
}

/* 答案內容區域的樣式 */
.answer-content {
  padding: 0 1.5rem 1.5rem;  /* 左右和底部內邊距 */
  color: #4b5563;  /* 文字顏色 */
  line-height: 1.6;  /* 行高 */
}

/* 答案文字段落樣式 */
.answer-content p {
  margin: 0;  /* 移除段落的預設邊距 */
}

/* 響應式設計：螢幕寬度小於 640px 時的樣式 */
@media (max-width: 640px) {
  .faq-container {
    padding: 0 1rem; /* 縮小容器左右內邊距 */
  }

  .question-text {
    font-size: 1rem; /* 縮小問題文字大小 */
  }

  .faq-question {
    padding: 1.2rem; /* 縮小問題區域的內邊距 */
  }
}
</style>