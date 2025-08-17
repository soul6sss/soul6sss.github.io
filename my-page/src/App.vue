<template>
  <HeaderNav />
  <div class="scroll-container">
    <!-- 占位首页区块，替代 HeroSection -->
    <div class="section" id="home">
      <div class="home-placeholder">
        <h1>欢迎来到我的科技世界</h1>
        <p>这里是首页区块内容，占位替代 HeroSection</p>
      </div>
    </div>

    <div class="section" id="about">
      <AboutSection />
    </div>

    <div class="section" id="projects">
      <ProjectsSection />
    </div>

    <div class="section" id="contact">
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<style scoped>
.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 首页占位样式 */
.home-placeholder {
  text-align: center;
  color: #ffffff;
}

.home-placeholder h1 {
  font-size: 3em;
  margin-bottom: 1em;
}

.home-placeholder p {
  font-size: 1.5em;
  color: #cccccc;
}
</style>
