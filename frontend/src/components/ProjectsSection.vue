<template>
  <div class="projects">
    <div class="toolbar">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">全部</button>
      <button :class="{ active: filter === 'frontend' }" @click="filter = 'frontend'">前端</button>
      <button :class="{ active: filter === 'ai' }" @click="filter = 'ai'">AI</button>
      <button :class="{ active: filter === 'tool' }" @click="filter = 'tool'">工具</button>
    </div>
    <div class="grid">
      <article v-for="p in filtered" :key="p.id" class="card" data-aos="zoom-in">
        <img :src="p.image" :alt="p.name" />
        <div class="card-body">
          <h3>{{ p.name }}</h3>
          <p class="desc">{{ p.description }}</p>
          <div class="tags">
            <span class="tag" v-for="t in p.tech" :key="t">{{ t }}</span>
          </div>
          <div class="actions">
            <a v-if="p.github" :href="p.github" target="_blank">GitHub</a>
            <a v-if="p.demo" :href="p.demo" target="_blank">Demo</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import type { Project } from '../data/projects'
import { sampleProjects } from '../data/projects'

const projects = ref<Project[]>([])
const filter = ref<'all' | 'frontend' | 'ai' | 'tool'>('all')

const filtered = computed(() => {
  if (filter.value === 'all') return projects.value
  return projects.value.filter((p) => p.category === filter.value)
})

onMounted(async () => {
  const base = import.meta.env.VITE_API_BASE_URL
  try {
    if (base) {
      const res = await fetch(`${base}/api/projects`)
      if (res.ok) {
        projects.value = await res.json()
        return
      }
    }
  } catch {}
  projects.value = sampleProjects
})
</script>

<style scoped>
.toolbar { display: flex; gap: 10px; margin-bottom: 16px; }
.toolbar button { background: rgba(33, 40, 62, 0.8); color: #cdd9e5; border: 1px solid rgba(121,192,255,0.3); border-radius: 8px; padding: 6px 12px; }
.toolbar button.active { background: rgba(121,192,255,0.2); color: #e6edf3; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
@media (max-width: 1000px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 680px) { .grid { grid-template-columns: 1fr; } }
.card { background: rgba(17, 25, 40, 0.85); border: 1px solid rgba(121,192,255,0.2); border-radius: 14px; overflow: hidden; transition: transform .2s ease, box-shadow .2s ease; }
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(121,192,255,.15); }
.card img { width: 100%; height: 160px; object-fit: cover; }
.card-body { padding: 12px; }
.desc { color: #9fb7cd; }
.tags { display: flex; gap: 8px; margin-top: 8px; }
.tag { font-size: 12px; padding: 3px 8px; border-radius: 999px; border: 1px solid rgba(121,192,255,0.3); background: rgba(121,192,255,0.12); color: #cfe7ff; }
.actions { display: flex; gap: 12px; margin-top: 10px; }
.actions a { color: #79c0ff; }
</style>