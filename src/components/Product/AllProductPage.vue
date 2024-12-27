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
                 class="col-md-6 col-lg-4 d-flex">
              <div class="product-card w-100">
                <div class="product-image">
                  <img :src="product.image" :alt="product.name" class="img-fluid">
                  <div class="product-overlay">
                    <button class="btn btn-light btn-sm">查看詳情</button>
                  </div>
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

// 選中的分類
const selectedCategory = ref('all')

// 分類數據
const categories = [
  { id: 'implant', name: '植體相關' },
  { id: 'oral', name: '口腔保健' },
  { id: 'dental', name: '牙體復形' },
  { id: 'root', name: '根管治療' },
  { id: 'equipment', name: '器械儀器設備' }
]

// 產品數據
const products = [
  // 植體相關產品
  {
    id: 1,
    name: 'NeoGen® PTFE membrane',
    subtitle: '衛部醫器輸字第032501號',
    image: 'https://picsum.photos/400/300?random=1',
    tags: ['熱銷', '植體相關'],
    categoryId: 'implant'
  },
  {
    id: 2,
    name: 'Implant Driver Kit',
    subtitle: '衛部醫器輸字第032502號',
    image: 'https://picsum.photos/400/300?random=2',
    tags: ['新品', '植體相關'],
    categoryId: 'implant'
  },
  {
    id: 3,
    name: 'Healing Abutment',
    subtitle: '衛部醫器輸字第032503號',
    image: 'https://picsum.photos/400/300?random=3',
    tags: ['植體相關'],
    categoryId: 'implant'
  },
  {
    id: 4,
    name: 'Tissue Punch',
    subtitle: '衛部醫器輸字第032504號',
    image: 'https://picsum.photos/400/300?random=4',
    tags: ['植體相關', '熱銷'],
    categoryId: 'implant'
  },
  {
    id: 5,
    name: 'Surgical Kit',
    subtitle: '衛部醫器輸字第032505號',
    image: 'https://picsum.photos/400/300?random=5',
    tags: ['植體相關', '新品'],
    categoryId: 'implant'
  },
  {
    id: 6,
    name: 'Implant Analog',
    subtitle: '衛部醫器輸字第032506號',
    image: 'https://picsum.photos/400/300?random=6',
    tags: ['植體相關'],
    categoryId: 'implant'
  },

  // 口腔保健產品
  {
    id: 7,
    name: 'Profluorid Varnish',
    subtitle: '衛署醫器輸字第024794號',
    flavor: '哈密瓜/焦糖/櫻桃/薄荷/熱帶水果',
    image: 'https://picsum.photos/400/300?random=7',
    tags: ['口腔保健', '熱銷'],
    categoryId: 'oral'
  },
  {
    id: 8,
    name: 'GC Tooth Mousse',
    subtitle: '衛署醫器輸字第024795號',
    image: 'https://picsum.photos/400/300?random=8',
    tags: ['口腔保健', '新品'],
    categoryId: 'oral'
  },
  {
    id: 9,
    name: 'MI Paste Plus',
    subtitle: '衛署醫器輸字第024796號',
    image: 'https://picsum.photos/400/300?random=9',
    tags: ['口腔保健'],
    categoryId: 'oral'
  },
  {
    id: 10,
    name: 'Fluoride Gel',
    subtitle: '衛署醫器輸字第024797號',
    image: 'https://picsum.photos/400/300?random=10',
    tags: ['口腔保健', '熱銷'],
    categoryId: 'oral'
  },
  {
    id: 11,
    name: 'Tooth Cleaning Kit',
    subtitle: '衛署醫器輸字第024798號',
    image: 'https://picsum.photos/400/300?random=11',
    tags: ['口腔保健'],
    categoryId: 'oral'
  },
  {
    id: 12,
    name: 'Dental Floss Pro',
    subtitle: '衛署醫器輸字第024799號',
    image: 'https://picsum.photos/400/300?random=12',
    tags: ['口腔保健', '新品'],
    categoryId: 'oral'
  },

  // 牙體復形產品
  {
    id: 13,
    name: 'BEAUTIFIL Flow Plus X F00',
    subtitle: '衛部醫器輸字第032507號',
    image: 'https://picsum.photos/400/300?random=13',
    tags: ['熱銷', '牙體復形'],
    categoryId: 'dental'
  },
  {
    id: 14,
    name: 'Universal Bond',
    subtitle: '衛部醫器輸字第032508號',
    image: 'https://picsum.photos/400/300?random=14',
    tags: ['新品', '牙體復形'],
    categoryId: 'dental'
  },
  {
    id: 15,
    name: 'Composite Resin',
    subtitle: '衛部醫器輸字第032509號',
    image: 'https://picsum.photos/400/300?random=15',
    tags: ['牙體復形'],
    categoryId: 'dental'
  },
  {
    id: 16,
    name: 'Glass Ionomer',
    subtitle: '衛部醫器輸字第032510號',
    image: 'https://picsum.photos/400/300?random=16',
    tags: ['牙體復形', '熱銷'],
    categoryId: 'dental'
  },
  {
    id: 17,
    name: 'Temporary Filling',
    subtitle: '衛部醫器輸字第032511號',
    image: 'https://picsum.photos/400/300?random=17',
    tags: ['牙體復形'],
    categoryId: 'dental'
  },
  {
    id: 18,
    name: 'Core Build-up',
    subtitle: '衛部醫器輸字第032512號',
    image: 'https://picsum.photos/400/300?random=18',
    tags: ['牙體復形', '新品'],
    categoryId: 'dental'
  },

  // 根管治療產品
  {
    id: 19,
    name: 'NiTi Files',
    subtitle: '衛部醫器輸字第032513號',
    image: 'https://picsum.photos/400/300?random=19',
    tags: ['根管治療', '熱銷'],
    categoryId: 'root'
  },
  {
    id: 20,
    name: 'Root Canal Sealer',
    subtitle: '衛部醫器輸字第032514號',
    image: 'https://picsum.photos/400/300?random=20',
    tags: ['根管治療', '新品'],
    categoryId: 'root'
  },
  {
    id: 21,
    name: 'Gutta Percha',
    subtitle: '衛部醫器輸字第032515號',
    image: 'https://picsum.photos/400/300?random=21',
    tags: ['根管治療'],
    categoryId: 'root'
  },
  {
    id: 22,
    name: 'Paper Points',
    subtitle: '衛部醫器輸字第032516號',
    image: 'https://picsum.photos/400/300?random=22',
    tags: ['根管治療'],
    categoryId: 'root'
  },
  {
    id: 23,
    name: 'Irrigation Solution',
    subtitle: '衛部醫器輸字第032517號',
    image: 'https://picsum.photos/400/300?random=23',
    tags: ['根管治療', '熱銷'],
    categoryId: 'root'
  },
  {
    id: 24,
    name: 'Apex Locator Tips',
    subtitle: '衛部醫器輸字第032518號',
    image: 'https://picsum.photos/400/300?random=24',
    tags: ['根管治療', '新品'],
    categoryId: 'root'
  },

  // 器械儀器設備
  {
    id: 25,
    name: 'EYESPECIAL C-V',
    subtitle: '數位預約介紹試用',
    image: 'https://picsum.photos/400/300?random=25',
    tags: ['新品', '器械儀器'],
    categoryId: 'equipment'
  },
  {
    id: 26,
    name: 'Digital X-Ray',
    subtitle: '衛部醫器輸字第032519號',
    image: 'https://picsum.photos/400/300?random=26',
    tags: ['器械儀器', '熱銷'],
    categoryId: 'equipment'
  },
  {
    id: 27,
    name: 'Dental Chair Unit',
    subtitle: '衛部醫器輸字第032520號',
    image: 'https://picsum.photos/400/300?random=27',
    tags: ['器械儀器'],
    categoryId: 'equipment'
  },
  {
    id: 28,
    name: 'Autoclave Sterilizer',
    subtitle: '衛部醫器輸字第032521號',
    image: 'https://picsum.photos/400/300?random=28',
    tags: ['器械儀器', '新品'],
    categoryId: 'equipment'
  },
  {
    id: 29,
    name: 'Ultrasonic Scaler',
    subtitle: '衛部醫器輸字第032522號',
    image: 'https://picsum.photos/400/300?random=29',
    tags: ['器械儀器', '熱銷'],
    categoryId: 'equipment'
  },
  {
    id: 30,
    name: 'Curing Light LED',
    subtitle: '衛部醫器輸字第032523號',
    image: 'https://picsum.photos/400/300?random=30',
    tags: ['器械儀器'],
    categoryId: 'equipment'
  }
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
}

.product-card:hover .product-image img {
  transform: scale(1.1);
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

/* 響應式調整 */
@media (max-width: 991.98px) {
  .category-sidebar {
    margin-bottom: 2rem;
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
}
</style>