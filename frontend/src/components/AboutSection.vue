<template>
  <div class="about">
    <div class="left" data-aos="fade-right">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/u/0?v=4" alt="avatar" />
      </div>
    </div>
    <div class="right" data-aos="fade-left">
      <h2>关于我</h2>
      <p>
        我是一名专注于交互与性能优化的前端工程师，对 AI 与数据可视化充满兴趣。
      </p>
      <div class="skills">
        <div class="chip">Vue</div>
        <div class="chip">JavaScript</div>
        <div class="chip">Python</div>
        <div class="chip">AI</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.about { display: grid; grid-template-columns: 1fr 1.5fr; gap: 24px; align-items: center; }
@media (max-width: 900px) { .about { grid-template-columns: 1fr; } }
.avatar {
  width: 180px; height: 180px; border-radius: 50%;
  margin: 0 auto; padding: 8px;
  background: conic-gradient(from 0deg, rgba(99,102,241,0.5), rgba(16,185,129,0.5));
  animation: breathe 4s ease-in-out infinite;
}
.avatar img { width: 100%; height: 100%; border-radius: 50%; display: block; }
@keyframes breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.03); } }
.right h2 { margin: 0 0 8px; }
.right p { color: #a1b6c9; }
.skills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; }
.chip { padding: 6px 10px; border-radius: 999px; background: rgba(121,192,255,0.15); color: #cfe7ff; border: 1px solid rgba(121,192,255,0.3); }
</style>