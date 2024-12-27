<!-- Footer.vue -->
<template>
  <footer class="modern-footer">
    <div class="footer-background">
      <div class="geometric-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>

    <div class="container position-relative">
      <!-- Logo 區域 -->
      <div class="text-center mb-5">
        <h3 class="company-logo">Your Brand</h3>
        <p class="company-slogan">創新設計・卓越品質</p>
      </div>

      <div class="row g-4">
        <!-- 公司簡介 -->
        <div class="col-lg-4">
          <div class="footer-section">
            <h5 class="footer-title">關於我們</h5>
            <p class="footer-description">
              致力於提供創新的解決方案，
              為客戶創造非凡的價值。
              讓我們一起開創美好的未來。
            </p>
            <div class="contact-info mt-4">
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-geo-alt-fill me-2"></i>
                <span>台北市信義區信義路五段7號</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-envelope-fill me-2"></i>
                <span>contact@yourbrand.com</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-telephone-fill me-2"></i>
                <span>02-2345-6789</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 快速連結 -->
        <div class="col-lg-4">
          <div class="footer-section">
            <h5 class="footer-title">探索更多</h5>
            <div class="row">
              <div class="col-6">
                <ul class="footer-links">
                  <li><a href="#" class="footer-link">首頁</a></li>
                  <li><a href="#" class="footer-link">關於我們</a></li>
                  <li><a href="#" class="footer-link">服務項目</a></li>
                  <li><a href="#" class="footer-link">最新消息</a></li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="footer-links">
                  <li><a href="#" class="footer-link">產品展示</a></li>
                  <li><a href="#" class="footer-link">技術支援</a></li>
                  <li><a href="#" class="footer-link">聯絡我們</a></li>
                  <li><a href="#" class="footer-link">常見問題</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 社群媒體區域 -->
        <div class="col-lg-4">
          <div class="footer-section">
            <h5 class="footer-title">關注我們</h5>
            <p class="footer-description">
              跟隨我們的社群媒體，掌握第一手資訊，
              了解更多優質內容及活動消息。
            </p>

            <!-- 社群媒體連結 -->
            <div class="social-media-section">
              <div class="social-grid">
                <a href="#" class="social-link" title="Facebook">
                  <i class="bi bi-facebook"></i>
                  <span>Facebook</span>
                </a>
                <a href="#" class="social-link" title="Instagram">
                  <i class="bi bi-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a href="#" class="social-link" title="LinkedIn">
                  <i class="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="#" class="social-link" title="YouTube">
                  <i class="bi bi-youtube"></i>
                  <span>YouTube</span>
                </a>
                <a href="#" class="social-link" title="Twitter">
                  <i class="bi bi-twitter"></i>
                  <span>Twitter</span>
                </a>
                <a href="#" class="social-link" title="Line">
                  <i class="bi bi-line"></i>
                  <span>Line</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 分隔線 -->
      <div class="footer-divider my-4"></div>

      <!-- 版權資訊 -->
      <div class="copyright-section">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="copyright-text">
              © {{ currentYear }} Your Brand. All Rights Reserved.
            </p>
          </div>
          <div class="col-md-6">
            <ul class="policy-links">
              <li><a href="#">隱私權政策</a></li>
              <li><a href="#">使用條款</a></li>
              <li><a href="#">Cookie 政策</a></li>
            </ul>
          </div>
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
.modern-footer {
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  padding: 80px 0 40px;
  overflow: hidden;
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.geometric-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffffff20, #ffffff10);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.company-logo {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.company-slogan {
  font-size: 1.1rem;
  color: #b0b0b0;
  letter-spacing: 2px;
}

.footer-section {
  padding: 20px;
  height: 100%;
  transition: transform 0.3s ease;
}

.footer-section:hover {
  transform: translateY(-5px);
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #ffffff 0%, #ffffff40 100%);
}

.footer-description {
  color: #b0b0b0;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: #b0b0b0;
  text-decoration: none;
  display: block;
  padding: 8px 0;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateX(5px);
}

.contact-info {
  color: #b0b0b0;
}

.contact-info i {
  width: 20px;
  color: #ffffff;
}

.social-media-section {
  margin-top: 25px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link i {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.social-link span {
  font-size: 0.8rem;
  color: #b0b0b0;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  color: #ffffff;
}

.social-link:hover span {
  color: #ffffff;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.2) 50%,
    rgba(255,255,255,0) 100%
  );
}

.copyright-section {
  color: #808080;
}

.copyright-text {
  margin: 0;
}

.policy-links {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.policy-links a {
  color: #808080;
  text-decoration: none;
  transition: color 0.3s ease;
}

.policy-links a:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .modern-footer {
    padding: 60px 0 30px;
  }

  .social-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .policy-links {
    justify-content: center;
    margin-top: 20px;
  }

  .copyright-text {
    text-align: center;
  }
}
</style>