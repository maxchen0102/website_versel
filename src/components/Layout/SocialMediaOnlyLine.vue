<!-- SocialSidebar.vue -->
<template>
  <div class="social-sidebar">
    <div class="d-flex flex-column gap-2">

      <!-- LINE -->
      <a :href="lineUrl" class="social-icon bg-success rounded-circle">
        <i class="bi bi-line custom-icon "></i>
      </a>

    </div>
  </div>
</template>ㄌ

<script setup>ㄌ
// Component logic can be added here if needed
import { ref } from 'vue'

// 變數區域
// LINE 官方帳號連結
const lineUrl = ref('https://line.me/ti/p/1234567890')


</script>

<style scoped>
.social-sidebar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.social-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.2s;
}

.custom-icon {
  font-size: 32px;  /* 你可以調整這個值來改變圖標大小 */
}

.social-icon:hover {
  transform: scale(1.1);
  color: white;
}

/* 自定義圖標顏色 */
.bg-success {
  background-color: #00B900 !important; /* LINE 的綠色 */
}
</style>