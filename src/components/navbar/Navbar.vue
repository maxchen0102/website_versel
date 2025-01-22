<!-- Navbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <!-- Logo/Brand -->
      <router-link class="navbar-brand" to="/">Logo</router-link>

      <!-- 漢堡選單按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        ref="navbarToggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 導航項目 -->
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        ref="navbarCollapse"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="closeMenu">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click="closeMenu">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/service" @click="closeMenu">服務</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" @click="closeMenu">聯絡我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/question" @click="closeMenu">相關問題Q&A</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/test" @click="closeMenu">客戶版面選擇</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- 添加導航欄間隔元素 -->
  <div class="navbar-spacer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Collapse } from 'bootstrap'


// 參考到 DOM 元素
const navbarCollapse = ref(null)
const navbarToggler = ref(null)
let bsCollapse = null



// 關閉選單方法
const closeMenu = () => {
  if (bsCollapse && window.innerWidth < 992) {
    bsCollapse.hide()
  }
}

// 監聽點擊事件，當點擊外部時關閉選單
const handleOutsideClick = (event) => {
  if (
    bsCollapse &&
    window.innerWidth < 992 &&
    navbarCollapse.value &&
    !navbarCollapse.value.contains(event.target) &&
    !navbarToggler.value.contains(event.target)
  ) {
    bsCollapse.hide()
  }
}

// 監聽滾動事件
const handleScroll = () => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

onMounted(() => {
  // 初始化 Bootstrap collapse
  if (navbarCollapse.value) {
    bsCollapse = new Collapse(navbarCollapse.value, {
      toggle: false
    })
  }

  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<style scoped>
.navbar-spacer {
  height: 76px;
}

.navbar {
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
}

.navbar.scrolled {
  padding: 0.8rem 2rem;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
}

.navbar-brand {
  font-weight: 600;
  font-size: 1.5rem;
  color: #333;
}

.nav-link {
  color: #555 !important;
  font-weight: 500;
  padding: 0.5rem 1.2rem !important;
  margin: 0 0.2rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #ff6b6b !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #ff6b6b;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}

.navbar-toggler {
  border: none;
  padding: 0.5rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

@media (max-width: 991.98px) {
  .navbar-spacer {
    height: 68px;
  }

  .navbar-collapse {
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    padding: 0.8rem 1.2rem !important;
    text-align: center;
  }

  .nav-link::after {
    display: none;
  }
}

@supports (-webkit-touch-callout: none) {
  .navbar {
    position: -webkit-sticky;
    position: sticky;
  }
}
</style>