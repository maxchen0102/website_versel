<!-- SocialSidebar.vue -->
<template>
  <div class="social-sidebar">
    <div class="d-flex flex-column gap-2">

      <!-- LINE -->
      <a href="#" class="social-icon bg-success rounded-circle">
        <i class="bi bi-line"></i>
      </a>

      <!-- Facebook -->
      <a href="#" class="social-icon bg-primary rounded-circle">
        <i class="bi bi-facebook"></i>
      </a>

      <!-- Instagram -->
      <a href="#" class="social-icon bg-danger rounded-circle">
        <i class="bi bi-instagram"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.social-sidebar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.2s;
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