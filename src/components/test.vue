<!-- USMap.vue -->
<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">美國地圖</h2>
    <div class="row">
      <div class="col-md-9">
        <div class="map-container">
          <svg viewBox="0 0 959 593" class="us-map">
            <path
              v-for="state in statesData"
              :key="state.id"
              :d="state.path"
              :class="['state', { active: selectedStates.includes(state.id) }]"
              @click="toggleState(state.id)"
              @mouseover="showTooltip(state)"
              @mouseleave="hideTooltip"
            />
          </svg>
          <!-- 工具提示 -->
          <div
            v-if="tooltip.show"
            class="tooltip-custom"
            :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }"
          >
            {{ tooltip.content }}
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-header bg-primary text-white">
            已選擇的州 ({{ selectedStates.length }})
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li
                v-for="stateId in selectedStates"
                :key="stateId"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {{ stateNames[stateId] }}
                <button
                  class="btn btn-sm btn-danger"
                  @click="toggleState(stateId)"
                >
                  移除
                </button>
              </li>
            </ul>
            <button
              v-if="selectedStates.length > 0"
              class="btn btn-warning mt-3 w-100"
              @click="clearSelection"
            >
              清除所有選擇
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedStates = ref([])
const tooltip = ref({
  show: false,
  x: 0,
  y: 0,
  content: ''
})

// 州名對照表
const stateNames = {
  'AL': '阿拉巴馬',
  'AK': '阿拉斯加',
  'AZ': '亞利桑那',
  'AR': '阿肯色',
  'CA': '加利福尼亞',
  'CO': '科羅拉多',
  'CT': '康乃狄克',
  'DE': '德拉瓦',
  'FL': '佛羅里達',
  'GA': '喬治亞',
  'HI': '夏威夷',
  'ID': '愛達荷',
  'IL': '伊利諾',
  'IN': '印第安納',
  'IA': '愛荷華',
  'KS': '堪薩斯',
  'KY': '肯塔基',
  'LA': '路易斯安那',
  'ME': '緬因',
  'MD': '馬里蘭',
  'MA': '麻薩諸塞',
  'MI': '密歇根',
  'MN': '明尼蘇達',
  'MS': '密西西比',
  'MO': '密蘇里',
  'MT': '蒙大拿',
  'NE': '內布拉斯加',
  'NV': '內華達',
  'NH': '新罕布什爾',
  'NJ': '新澤西',
  'NM': '新墨西哥',
  'NY': '紐約',
  'NC': '北卡羅來納',
  'ND': '北達科他',
  'OH': '俄亥俄',
  'OK': '奧克拉荷馬',
  'OR': '俄勒岡',
  'PA': '賓夕法尼亞',
  'RI': '羅德島',
  'SC': '南卡羅來納',
  'SD': '南達科他',
  'TN': '田納西',
  'TX': '德克薩斯',
  'UT': '猶他',
  'VT': '佛蒙特',
  'VA': '維吉尼亞',
  'WA': '華盛頓',
  'WV': '西維吉尼亞',
  'WI': '威斯康星',
  'WY': '懷俄明'
}

// 州的數據（包含路徑數據）
const statesData = [
  {
    id: 'AK',
    path: 'M161.1 453.7l-0.3 85.4 1.6 1 3.1 0.2 1.5-1.1h2.6l0.2 2.9 7 6.8 0.5 2.6 3.4-1.9 0.6-0.2 0.3-3.1 1.5-1.6 1.1-0.2 1.9-1.5 3.1 2.1 0.6 2.9 1.9 1.1 1.1 2.4 3.9 1.8 3.4 6 2.7 3.9 2.3 2.7 1.5 3.7 5 1.8 5.2 2.1 1 4.4 0.5 3.1-1 3.4-1.8 2.3-1.6-0.8-1.5-3.1-2.7-1.5-1.8-1.1-0.8 0.8 1.5 2.7 0.2 3.7-1.1 0.5-1.9-1.9-2.1-1.3 0.5 1.6 1.3 1.1-0.3 2.7-1.5 1.8-3.2 1.8-1.8 1.1-3.7 1.1-2.4-0.2-0.8-2.1-2.6-2.9-2.9-0.6-3.7-3.6-2.4-1-2.4-1.1-2.7-0.2c0 0-0.3-1.3-0.8-1.8s-2.9-1.5-2.9-1.5l-2.4-1.6-2.1-0.2-1-1.6-2.1-0.5-0.6 1.1-1-2.7-1.8-0.5-1.8-1.1-0.3-2.1-1.6-3.7-2.1-1.5-2.7-1.8-2.9-2.7-2.4-3.7-2.4-2.9-1.8-0.8-4.2-0.3-4-2.9-1.6-2.9-1.6-1.1v-2.3l2.3-1 2.4-2.9 2.7-2.7 1.8-3.7 1.1-3.4-0.3-2.4-1.3-2.9-2.3-2.3-1.3-2.4 0.3-4.4-0.3-3.4-1.1-2.9-1-0.3-0.8 0.5-0.2 0.5v1.1l-1.3 1.3-2.3-0.6-1.3-1.3-1.3-1.8-0.3-2.4-2.1-1-0.3-0.5 0.5-1.6-0.8-1.8-0.6-1.5 0.5-0.5 1.5-0.5 0.5-2.4-2.1-2.9 1.1-3.1 1.1-0.5 0.8 1.3 1.3 0.3h0.9l0.8-1.1-1.1-1.8v-1l1.8-0.8 2.3-2.9 0.3-1.6 2.3-1.6 1.6-0.8 2.9-0.8h3.1l1.3 0.5 1.5 4.5 0.3 4.7 2.6 3.9 1.9 2.7 2.7 0.3z'
  },
  // ... 其他州的數據 ...
]

// 方法
const toggleState = (stateId) => {
  const index = selectedStates.value.indexOf(stateId)
  if (index === -1) {
    selectedStates.value.push(stateId)
  } else {
    selectedStates.value.splice(index, 1)
  }
}

const clearSelection = () => {
  selectedStates.value = []
}

const showTooltip = (state) => {
  tooltip.value = {
    show: true,
    x: event.clientX + 10,
    y: event.clientY + 10,
    content: stateNames[state.id]
  }
}

const hideTooltip = () => {
  tooltip.value.show = false
}
</script>

<style scoped>
.map-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.us-map {
  width: 100%;
  height: auto;
}

.state {
  fill: #ddd;
  stroke: #fff;
  stroke-width: 1;
  transition: all 0.3s ease;
  cursor: pointer;
}

.state:hover {
  fill: #aaa;
  transform: scale(1.02);
  transform-origin: center;
}

.state.active {
  fill: #007bff;
}

.tooltip-custom {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  pointer-events: none;
  z-index: 1000;
}

.card {
  position: sticky;
  top: 20px;
}

.list-group-item {
  transition: background-color 0.3s ease;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}
</style>