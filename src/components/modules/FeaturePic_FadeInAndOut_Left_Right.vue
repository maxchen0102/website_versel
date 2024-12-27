<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },
    { threshold: 0.1 }
  )

  // 觀察所有 featurette 區塊
  document.querySelectorAll('.featurette').forEach(block => {
    observer.observe(block)
  })
})
</script>

<template>
  <div class="container">
    <hr class="featurette-divider">

    <!-- 直接在 HTML 中指定方向 -->
    <div class="row featurette fade-left">
      <div class="col-md-7 d-flex align-items-center justify-content-center">
        <div>
          <h2 class="featurette-heading fw-normal lh-1">First featurette heading. </h2>
          <h2 class="text-muted">It'll blow your mind.</h2>
          <p class="lead">Some great placeholder content for the first featurette here.</p>
        </div>
      </div>
      <div class="col-md-5">
        <img src="https://fakeimg.pl/500x500/000000/" class="d-block w-100" alt="...">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette fade-right">
      <div class="col-md-7 order-md-2 d-flex align-items-center justify-content-center">
        <div>
          <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it's that good. </h2>
          <h2 class="text-muted">It'll blow your mind.</h2>
          <p class="lead">Another featurette? Of course. More placeholder content here.</p>
        </div>
      </div>
      <div class="col-md-5 order-md-1">
        <img src="https://fakeimg.pl/500x500/000000/" class="d-block w-100" alt="...">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette fade-left">
      <div class="col-md-7 d-flex align-items-center justify-content-center">
        <div>
          <h2 class="featurette-heading fw-normal lh-1">And lastly, this one.</h2>
          <h2 class="text-muted">It'll blow your mind.</h2>
          <p class="lead">And yes, this is the last block of representative placeholder content.</p>
        </div>
      </div>
      <div class="col-md-5">
        <img src="https://fakeimg.pl/500x500/000000/" class="d-block w-100" alt="...">
      </div>
    </div>

    <hr class="featurette-divider">
  </div>
</template>

<style scoped>
.featurette {
  padding: 2rem 0;
}

.featurette-heading {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}

.text-muted {
  color: #6c757d;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

/* 從左邊進入的動畫 */
.fade-left {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1s ease, transform 1s ease;
}

/* 從右邊進入的動畫 */
.fade-right {
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 1s ease, transform 1s ease;
}

/* 顯示狀態 */
.fade-left.show,
.fade-right.show {
  opacity: 1;
  transform: translateX(0);
}
</style>