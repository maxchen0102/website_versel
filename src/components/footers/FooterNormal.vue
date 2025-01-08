<template>
  <footer class="bg-dark text-light py-4 mt-auto">
    <div class="container">
      <div class="row">
        <!-- 公司信息 -->
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="mb-3">關於我們</h5>
          <p class="mb-4">我們致力於提供最優質的服務與產品，為客戶創造價值。</p>
          <h5>辦公時間</h5>
          <p class="mb-1">周一到週五：上午九點～下午六點</p>
          <p class="mb-4">週六、週日：公休</p>
        </div>

        <!-- 快速連結 -->
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="mb-3">快速連結</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#" class="text-light text-decoration-none hover-link">首頁</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-light text-decoration-none hover-link">產品</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-light text-decoration-none hover-link">服務</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-light text-decoration-none hover-link">聯絡我們</a>
            </li>
          </ul>
        </div>

        <!-- 社交媒體 -->
        <div class="col-md-4">
          <h5 class="mb-3">關注我們</h5>
          <div class="d-flex gap-3">
            <a href="#" class="text-light fs-4">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-light fs-4">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="text-light fs-4">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-light fs-4">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- 版權信息 -->
      <div class="row mt-4">
        <div class="col-12 text-center">
          <hr class="bg-light">
          <p class="mb-0">
            © {{ currentYear }} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.hover-link:hover {
  opacity: 0.8;
  text-decoration: underline !important;
}

/* 確保 footer 永遠在底部 */
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>