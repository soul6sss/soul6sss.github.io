<template>
  <section class="projects-section">
    <div class="projects-content">
      <h2 class="projects-title">我的项目</h2>
      <div class="project-grid">
        <div class="project-item">
          <h3>项目一：智能家居控制系统</h3>
          <p>基于Vue.js和Node.js开发的智能家居控制平台，实现设备远程控制、数据可视化等功能。</p>
        </div>
        <div class="project-item">
          <h3>项目二：AI驱动的图像识别应用</h3>
          <p>利用Python和TensorFlow构建的图像识别应用，能够识别并分类多种物体。</p>
        </div>
        <div class="project-item">
          <h3>项目三：区块链投票系统</h3>
          <p>基于以太坊智能合约的去中心化投票系统，确保投票过程的透明和不可篡改。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Projects Section 的逻辑
</script>

<style scoped>
.projects-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a; /* 深色背景 */
  color: #ffffff;
  text-align: center;
  padding: 0 20px;
}

.projects-content {
  max-width: 1200px;
}

.projects-title {
  font-size: 3em;
  margin-bottom: 50px;
  /* 标题字体后续会调整 */
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-item {
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* 霓虹效果 */
  transition: transform 0.3s ease;
}

.project-item:hover {
  transform: translateY(-10px);
}

.project-item h3 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #00ffff; /* 霓虹色 */
}

.project-item p {
  font-size: 1.1em;
  line-height: 1.5;
}
</style>