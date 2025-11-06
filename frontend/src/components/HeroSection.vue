<template>
  <section class="hero">
    <div class="bg-gradient"></div>
    <div class="hero-content" data-aos="fade-up">
      <h1 class="name" @mouseover="hover = true" @mouseleave="hover = false">
        Zhan Yu
      </h1>
      <p class="title">前端开发者 · AI 爱好者</p>
      <button class="cta" @click="$emit('scroll-next')">查看更多</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const hover = ref(false)
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(600px 300px at 20% 20%, rgba(99, 102, 241, 0.35), transparent),
              radial-gradient(600px 300px at 80% 40%, rgba(16, 185, 129, 0.35), transparent);
  filter: blur(30px);
  opacity: 0.6;
}
.hero-content { position: relative; text-align: center; }
.name {
  font-size: 56px;
  font-weight: 900;
  letter-spacing: 1px;
  text-shadow: 0 0 18px rgba(121, 192, 255, 0.5);
}
.title { margin-top: 10px; color: #9fb7cd; }
.cta {
  margin-top: 24px;
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid rgba(121, 192, 255, 0.35);
  background: linear-gradient(90deg, rgba(99,102,241,0.35), rgba(16,185,129,0.35));
  color: #e6edf3;
}
.cta:hover { filter: brightness(1.2); }
</style>