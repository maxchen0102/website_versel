<!-- ProductsPage.vue -->
<template>
  <div class="products-page">
    <div class="container py-5">
      <!-- 頁面標題 -->
      <div class="title-section mb-5">
        <h1 class="main-title">
          產品介紹
          <span class="sub-title">PRODUCTS</span>
        </h1>
      </div>

      <div class="row">
        <!-- 左側分類欄 -->
        <div class="col-lg-3">
          <div class="category-sidebar">
            <!-- 分類列表 -->
            <div class="category-list">
              <div
                class="category-item"
                :class="{ active: selectedCategory === 'all' }"
                @click="selectCategory('all')"
              >
                所有產品
              </div>
              <div
                v-for="category in categories"
                :key="category.id"
                class="category-item"
                :class="{ active: selectedCategory === category.id }"
                @click="selectCategory(category.id)"
              >
                {{ category.name }}
              </div>
            </div>
          </div>
        </div>

        <!-- 右側產品列表 -->
        <div class="col-lg-9">
          <div class="row g-4">
            <!-- 產品卡片 -->
            <div v-for="product in filteredProducts"
                 :key="product.id"
                 class="col-6 col-md-6 col-lg-4 d-flex">
              <div class="product-card w-100">
                <div class="product-image">
                  <img :src="product.image" :alt="product.name" class="img-fluid">
                  <!-- 產品標籤 -->
                  <div class="product-tags">
                    <span v-for="tag in product.tags"
                          :key="tag"
                          class="product-tag"
                          :class="getTagClass(tag)">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-title">{{ product.name }}</h3>
                  <p class="product-subtitle">{{ product.subtitle }}</p>
                  <p v-if="product.flavor" class="product-flavor">{{ product.flavor }}</p>
                  <!-- 新增查看詳情按鈕 -->
                  <div class="product-action">
                    <a :href="getProductDetailUrl(product.id)" class="btn btn-primary w-100">查看詳情</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 產品數據
import { products } from './ProductsData.js'

// 選中的分類
const selectedCategory = ref('all')

// 路由基礎路徑配置
const baseRoutes = {
  productDetail: '#/product/' // 這裡可以根據實際路由配置修改
}

// 獲取產品詳情頁面URL的方法
const getProductDetailUrl = (productId) => {
  return `${baseRoutes.productDetail}${productId}`
}

// 分類數據
const categories = [
  { id: 'implant', name: '植體相關' },
  { id: 'oral', name: '口腔保健' },
  { id: 'dental', name: '牙體復形' },
  { id: 'root', name: '根管治療' },
  { id: 'equipment', name: '器械儀器設備' }
]


// 選擇分類方法
const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId
}

// 根據選中的分類篩選產品
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products
  }
  return products.filter(product => product.categoryId === selectedCategory.value)
})

// 根據標籤類型返回對應的樣式類名
const getTagClass = (tag) => {
  switch (tag) {
    case '熱銷':
      return 'tag-hot'
    case '新品':
      return 'tag-new'
    default:
      return 'tag-default'
  }
}
</script>

<style scoped>
.products-page {
  background-color: #f8f9fa;
  min-height: 100vh;
}

/* 標題樣式 */
.title-section {
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.main-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sub-title {
  font-size: 1rem;
  color: #6c757d;
  font-weight: normal;
  letter-spacing: 2px;
}

/* 分類側邊欄樣式 */
.category-sidebar {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
}

.category-item {
  padding: 0.8rem 1rem;
  color: #495057;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.category-item:hover {
  background: #f8f9fa;
  color: #2c3e50;
}

.category-item.active {
  background: #e9ecef;
  color: #2c3e50;
  font-weight: 500;
}

/* 產品卡片樣式 */
.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  position: relative;
  overflow: hidden;
  padding-top: 75%;
  flex-shrink: 0;
}

.product-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* 產品標籤樣式 */
.product-tags {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.product-tag {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
}

.tag-hot {
  background-color: #ff6b6b;
}

.tag-new {
  background-color: #4dabf7;
}

.tag-default {
  background-color: #748ffc;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1); /* 增加陰影效果 */
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

/* 增加標題顏色變化效果 */
.product-card:hover .product-title {
  color: #4dabf7; /* 使用與按鈕相同的藍色 */
}

/* 增加按鈕懸浮效果 */
.product-card:hover .btn-primary {
  background-color: #3793dd;
  border-color: #3793dd;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(77, 171, 247, 0.2);
}

.product-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.product-subtitle {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.product-flavor {
  font-size: 0.85rem;
  color: #495057;
  margin-bottom: 0;
  margin-top: auto;
}

/* 產品操作區域樣式 */
.product-action {
  margin-top: auto;
  padding-top: 1rem;
}

.product-action .btn {
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.product-action .btn-primary {
  background-color: #4dabf7;
  border-color: #4dabf7;
}

.product-action .btn-primary:hover {
  background-color: #3793dd;
  border-color: #3793dd;
  transform: translateY(-2px);
}

/* 響應式調整 */
@media (max-width: 991.98px) {
  .category-sidebar {
    margin-bottom: 2rem;
  }
}

/* 手機版樣式調整 */
@media (max-width: 767.98px) {
  .product-action {
    padding-top: 0.75rem;
  }

  .product-action .btn {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }

  .product-info {
    padding: 0.75rem;
  }

  .product-title {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  .product-subtitle {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }

  .product-tag {
    padding: 2px 6px;
    font-size: 0.7rem;
  }

  .product-flavor {
    font-size: 0.75rem;
  }

  .product-tags {
    top: 5px;
    left: 5px;
    gap: 3px;
  }
}

/* 動畫效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card {
  animation: fadeIn 0.5s ease forwards;
   transition: all 0.3s ease; /* 修改為 all 使所有效果都有過渡 */
}
</style>