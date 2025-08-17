<template>
  <section class="hero-section">
    <!-- 粒子背景 -->
    <Particles id="tsparticles" :options="particlesOptions" />

    <!-- 内容层 -->
    <div class="hero-content">
      <h2 class="hero-name">您的姓名</h2>
      <h1 class="hero-title">欢迎来到我的科技世界</h1>
      <p class="hero-tags" ref="tags"></p>
      <button class="hero-button" @click="scrollToAbout">查看更多</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Typed from "typed.js";

const tags = ref(null);

// 粒子参数配置
const particlesOptions = {
  background: { color: { value: "#1a1a1a" } },
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      straight: false,
      outModes: "out",
    },
    links: { enable: true, color: "#ffffff" },
  },
};

// 平滑滚动
const scrollToAbout = () => {
  const element = document.getElementById("about");
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

// 打字机效果
onMounted(() => {
  new Typed(tags.value, {
    strings: ["前端开发者 / AI 爱好者"],
    typeSpeed: 50,
    loop: true,
  });
});
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  z-index: 1;
}

.hero-name {
  font-size: 2em;
  margin-bottom: 10px;
  transition: text-shadow 0.3s ease;
}

.hero-name:hover {
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
}

.hero-title {
  font-size: 4em;
  margin-bottom: 20px;
}

.hero-tags {
  font-size: 1.5em;
  margin-bottom: 40px;
  min-height: 1.5em;
}

.hero-button {
  background: linear-gradient(90deg, #8a2be2, #00ffff);
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hero-button:hover {
  transform: scale(1.05);
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
