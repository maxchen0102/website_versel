<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 創建 Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // 當元素進入視窗
       // 當元素進入視窗時添加 show class
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          // 當元素離開視窗時移除 show class
          entry.target.classList.remove('show')
        }
      })
    },
    { threshold: 0.1 ,// 當元素出現 10% 就觸發
     rootMargin: '0px' }
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

    <div class="row featurette fade">
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

    <div class="row featurette fade">
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

    <div class="row featurette fade">
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

.fade {
  opacity: 0;
  transform: translateY(20px);  /* 添加初始位移效果 */
  transition: opacity 1s ease, transform 1s ease;  /* 同時設置透明度和位移的過渡效果 */
}

.fade.show {
  opacity: 1;
  transform: translateY(0);  /* 恢復原位 */
}
</style>