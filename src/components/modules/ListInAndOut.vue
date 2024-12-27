<template>
  <div class="scroll-fade-container">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="fade-item"
      v-scroll-fade
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <div class="item-details">
        <span class="badge">类别: {{ item.category }}</span>
        <span class="badge">日期: {{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 生成富有内容的假数据
const generateLoremIpsum = (sentences = 3) => {
  const loremTexts = [
    '在这个数字化的时代，技术不断演进，为我们的生活带来前所未有的变革。',
    '创新是推动社会进步的关键引擎，它不仅改变了我们的工作方式，也重塑了我们思考问题的方式。',
    '人工智能、区块链和量子计算正在重新定义可能的边界，让我们对未来充满期待。',
    '可持续发展已经成为全球共识，每个人都在为创造更美好的地球生态系统而努力。',
    '跨文化沟通和全球化趋势正在模糊传统的地理和文化界限。',
    '教育和终身学习已经成为适应快速变化世界的关键策略。'
  ]

  return Array.from({ length: sentences }, () =>
    loremTexts[Math.floor(Math.random() * loremTexts.length)]
  ).join(' ')
}

const generateItems = (count) => Array.from({ length: count }, (_, i) => ({
  title: `项目 ${i + 1}: ${['创新解决方案', '技术前沿', '未来趋势', '行业洞察'][Math.floor(Math.random() * 4)]}`,
  description: generateLoremIpsum(3 + Math.floor(Math.random() * 3)),
  category: ['科技', '创新', '管理', '设计'][Math.floor(Math.random() * 4)],
  date: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toLocaleDateString()
}))
// 模拟数据

const items = ref(generateItems(20))

// 自定义滚动淡入指令
const vScrollFade = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1 // 当元素至少10%可见时触发
      }
    )

    observer.observe(el)

    // 存储观察者以便后续卸载
    el._observer = observer
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect()
    }
  }
}
</script>

<style scoped>
.scroll-fade-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.fade-item {
  opacity: 0;
  transform: translateX(-50px); /* 初始位置在左侧 */
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  margin-bottom: 30px;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 偶数项从右侧进入 */
.fade-item:nth-child(even) {
  transform: translateX(50px);
}

.fade-item h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  font-size: 1.5em;
}

.fade-item p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.item-details {
  display: flex;
  justify-content: space-between;
}

.badge {
  background-color: #e9ecef;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.85em;
  color: #495057;
}

.fade-item.is-visible {
  opacity: 1;
  transform: translateX(0);
}
</style>