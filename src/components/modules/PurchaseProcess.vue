<!-- ProcessFlow.vue -->
<template>
  <section class="process-section py-5">
    <div class="container">
      <!-- 標題區域 -->
      <div class="text-center mb-5">
        <h6 class="text-secondary text-uppercase mb-2">PROCESS</h6>
        <h2 class="section-title">合作流程</h2>
      </div>

      <!-- 流程步驟 -->
      <div class="process-flow">
        <!-- 步驟 1 -->
        <div class="process-item">
          <div class="process-icon">
            <!-- 圖片容器 -->
            <div class="image-placeholder">
              <img v-if="step1Image" :src="step1Image" alt="產品選擇" class="step-image">
            </div>
          </div>
          <div class="step-number">01</div>
          <h5>產品選擇</h5>
        </div>

        <!-- 連接線 -->
        <div class="process-connector"></div>

        <!-- 步驟 2 -->
        <div class="process-item">
          <div class="process-icon">
            <div class="image-placeholder">
              <img v-if="step2Image" :src="step2Image" alt="線上詢問" class="step-image">
            </div>
          </div>
          <div class="step-number">02</div>
          <h5>線上詢問</h5>
        </div>

        <!-- 連接線 -->
        <div class="process-connector"></div>

        <!-- 步驟 3 -->
        <div class="process-item">
          <div class="process-icon">
            <div class="image-placeholder">
              <img v-if="step3Image" :src="step3Image" alt="設計校稿" class="step-image">
            </div>
          </div>
          <div class="step-number">03</div>
          <h5>設計校稿</h5>
        </div>

        <!-- 連接線 -->
        <div class="process-connector"></div>

        <!-- 步驟 4 -->
        <div class="process-item">
          <div class="process-icon">
            <div class="image-placeholder">
              <img v-if="step4Image" :src="step4Image" alt="開始製作" class="step-image">
            </div>
          </div>
          <div class="step-number">04</div>
          <h5>開始製作</h5>
        </div>

        <!-- 連接線 -->
        <div class="process-connector"></div>

        <!-- 步驟 5 -->
        <div class="process-item">
          <div class="process-icon">
            <div class="image-placeholder">
              <img v-if="step5Image" :src="step5Image" alt="交貨付款" class="step-image">
            </div>
          </div>
          <div class="step-number">05</div>
          <h5>交貨付款</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcessFlow',
  props: {
    // 為每個步驟提供圖片路徑的屬性
    step1Image: {
      type: String,
      default: ''
    },
    step2Image: {
      type: String,
      default: ''
    },
    step3Image: {
      type: String,
      default: ''
    },
    step4Image: {
      type: String,
      default: ''
    },
    step5Image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/*
 * 流程區塊的基本樣式
 * 使用淺灰色背景增加區分度
 * 上下添加充足的內邊距營造空間感
 */
.process-section {
  background-color: #f8f9fa;  /* 設置背景色為淺灰色 */
  padding: 80px 0;           /* 上下各添加 80px 的內邊距 */
}

/*
 * 區塊標題的樣式
 * 使用較大的字體突出顯示
 * 加粗字體增加視覺重量
 */
.section-title {
  font-size: 2.5rem;         /* 設置字體大小為 40px (2.5 * 16px) */
  font-weight: 700;          /* 設置字體粗細為粗體 */
  margin-bottom: 3rem;       /* 下方添加 48px (3 * 16px) 的間距 */
  color: #333;               /* 設置字體顏色為深灰色 */
}

/*
 * 流程步驟的容器樣式
 * 使用 flex 布局實現水平排列
 * 自動換行支持響應式設計
 */
.process-flow {
  display: flex;              /* 啟用 flex 布局 */
  justify-content: center;    /* 水平居中對齊 */
  align-items: center;        /* 垂直居中對齊 */
  flex-wrap: wrap;           /* 允許內容換行 */
  gap: 15px;                 /* 設置元素間距為 15px */
  padding: 20px 0;           /* 上下添加 20px 的內邊距 */
}

/*
 * 單個流程項目的樣式
 * 垂直排列內容
 * 固定寬度確保一致性
 */
.process-item {
  display: flex;              /* 啟用 flex 布局 */
  flex-direction: column;     /* 垂直排列子元素 */
  align-items: center;        /* 水平居中對齊 */
  text-align: center;         /* 文字居中對齊 */
  width: 140px;              /* 固定寬度為 140px */
  position: relative;         /* 設置為相對定位，作為子元素的定位參考 */
}

/*
 * 圖片圖標的容器樣式
 * 使用圓角方形設計
 * 添加陰影效果增加層次感
 */
.process-icon {
  width: 80px;               /* 設置寬度為 80px */
  height: 80px;              /* 設置高度為 80px */
  background: #ffffff;        /* 設置背景為白色 */
  border-radius: 16px;       /* 設置圓角為 16px */
  display: flex;             /* 啟用 flex 布局 */
  align-items: center;       /* 垂直居中對齊 */
  justify-content: center;   /* 水平居中對齊 */
  margin-bottom: 1rem;       /* 下方添加 16px 的間距 */
  position: relative;        /* 設置為相對定位 */
  transition: transform 0.3s ease;  /* 添加變換動畫效果 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* 添加陰影效果 */
  overflow: hidden;          /* 隱藏溢出的內容 */
}

/*
 * 圖片預留位置的樣式
 * 使用淺灰色背景
 * 居中對齊內容
 */
.image-placeholder {
  width: 100%;               /* 寬度撐滿容器 */
  height: 100%;              /* 高度撐滿容器 */
  background-color: #f0f0f0; /* 設置背景為淺灰色 */
  display: flex;             /* 啟用 flex 布局 */
  align-items: center;       /* 垂直居中對齊 */
  justify-content: center;   /* 水平居中對齊 */
}

/*
 * 步驟圖片的樣式
 * 使用 cover 模式確保圖片填滿容器
 */
.step-image {
  width: 100%;              /* 寬度撐滿容器 */
  height: 100%;             /* 高度撐滿容器 */
  object-fit: cover;        /* 圖片覆蓋模式設為 cover */
}

/*
 * 圖標懸停效果
 * 添加上浮動畫增加交互感
 */
.process-icon:hover {
  transform: translateY(-5px);  /* 懸停時向上移動 5px */
}

/*
 * 步驟編號的樣式
 * 使用絕對定位
 * 添加紫色背景和陰影
 */
.step-number {
  position: absolute;         /* 絕對定位 */
  top: -10px;                /* 向上偏移 10px */
  right: 10px;               /* 向右偏移 10px */
  background: #764ba2;        /* 設置紫色背景 */
  color: white;              /* 文字顏色為白色 */
  font-size: 0.8rem;         /* 字體大小設為 12.8px */
  font-weight: bold;         /* 字體加粗 */
  padding: 4px 8px;          /* 設置內邊距 */
  border-radius: 12px;       /* 設置圓角 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  /* 添加陰影效果 */
}

/*
 * 步驟標題樣式
 * 使用適中的字體大小
 * 添加適當的間距
 */
.process-item h5 {
  margin-top: 0.5rem;        /* 上方添加 8px 的間距 */
  font-size: 1rem;           /* 字體大小設為 16px */
  color: #333;               /* 文字顏色為深灰色 */
  font-weight: 600;          /* 字體設為半粗體 */
}

/*
 * 步驟之間的連接線
 * 使用漸層色增加視覺效果
 */
.process-connector {
  flex-grow: 1;              /* 自動填充剩餘空間 */
  height: 2px;               /* 高度設為 2px */
  background: linear-gradient(90deg,
    rgba(102,126,234,0.3) 0%,
    rgba(118,75,162,0.3) 100%
  );                         /* 設置漸層背景 */
  position: relative;        /* 設置為相對定位 */
  max-width: 50px;           /* 最大寬度限制為 50px */
  margin-top: -40px;         /* 向上偏移 40px */
}

/*
 * 連接線的箭頭樣式
 * 使用邊框創建三角形
 */
.process-connector::after {
  content: '';               /* 添加空內容 */
  position: absolute;        /* 絕對定位 */
  right: -1px;              /* 向右偏移 1px */
  top: 50%;                 /* 垂直居中 */
  transform: translateY(-50%);  /* 精確垂直居中 */
  width: 0;                 /* 寬度設為 0 */
  height: 0;                /* 高度設為 0 */
  border-left: 6px solid rgba(118,75,162,0.3);  /* 左邊框設置顏色 */
  border-top: 4px solid transparent;    /* 上邊框透明 */
  border-bottom: 4px solid transparent;  /* 下邊框透明 */
}

/*
 * 響應式布局：平板尺寸
 * 調整為垂直布局
 */
@media (max-width: 992px) {
  .process-flow {
    flex-direction: column;    /* 改為垂直排列 */
    gap: 30px;                /* 增加間距至 30px */
  }

  .process-connector {
    width: 2px;               /* 寬度改為 2px */
    height: 30px;             /* 高度改為 30px */
    max-width: none;          /* 取消最大寬度限制 */
    margin: 0;                /* 清除外邊距 */
  }

  /* 垂直方向的箭頭樣式 */
  .process-connector::after {
    right: 50%;               /* 水平居中 */
    top: 100%;               /* 位於底部 */
    transform: translateX(50%);  /* 精確水平居中 */
    border-left: 4px solid transparent;    /* 左邊框透明 */
    border-right: 4px solid transparent;   /* 右邊框透明 */
    border-top: 6px solid rgba(118,75,162,0.3);  /* 上邊框設置顏色 */
    border-bottom: none;      /* 移除下邊框 */
  }
}

/*
 * 響應式布局：手機尺寸
 * 縮小元素尺寸
 */
@media (max-width: 576px) {
  .section-title {
    font-size: 2rem;          /* 減小標題字體至 32px */
  }

  .process-icon {
    width: 60px;              /* 減小圖標寬度至 60px */
    height: 60px;             /* 減小圖標高度至 60px */
  }
}

</style>