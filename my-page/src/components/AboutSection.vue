<template>
  <section class="about-section">
    <div class="about-content">
      <h2 class="about-title">关于我</h2>
      <p class="about-description">
        我是一名热衷于前端开发的工程师，专注于构建高性能、用户友好的Web应用程序。我擅长使用Vue.js、React等现代前端框架，并对用户体验和界面设计有深入的理解。
      </p>
      <p class="about-description">
        在我的职业生涯中，我参与了多个项目的开发，从概念设计到最终部署，积累了丰富的实践经验。我乐于接受挑战，并不断学习新的技术，以保持在行业前沿。
      </p>
    </div>
  </section>
</template>

<script setup>
// About Section 的逻辑
</script>

<style scoped>
.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a; /* 深色背景 */
  color: #ffffff;
  text-align: center;
  padding: 0 20px;
}

.about-content {
  max-width: 800px;
}

.about-title {
  font-size: 3em;
  margin-bottom: 30px;
  /* 标题字体后续会调整 */
}

.about-description {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>