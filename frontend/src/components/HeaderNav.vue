<template>
  <header :class="['header', { 'header--scrolled': scrolled }]">
    <nav class="nav">
      <div class="brand">Z.Y</div>
      <button class="burger" @click="toggleMenu" aria-label="menu">
        <span></span><span></span><span></span>
      </button>
      <ul :class="['links', { open: menuOpen }]">
        <li v-for="link in links" :key="link.id">
          <a
            href="#"
            :class="{ active: activeSection === link.id }"
            @click.prevent="$emit('navigate', link.id)"
          >{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

defineProps<{ activeSection: 'home' | 'about' | 'projects' | 'contact' }>()

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(6px);
  background: transparent;
  transition: background 0.3s ease;
}
.header--scrolled {
  background: rgba(0, 0, 0, 0.5);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px;
}
.brand {
  font-weight: 800;
  letter-spacing: 0.6px;
}
.links {
  display: flex;
  gap: 20px;
  list-style: none;
}
.links a {
  color: #cdd9e5;
  text-decoration: none;
  font-weight: 600;
}
.links a.active {
  color: #79c0ff;
  text-shadow: 0 0 8px rgba(121, 192, 255, 0.6);
}
.burger {
  display: none;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
}
.burger span {
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px auto;
  background: #cdd9e5;
}
@media (max-width: 768px) {
  .burger { display: block; }
  .links {
    position: absolute;
    top: 56px;
    right: 16px;
    flex-direction: column;
    background: rgba(12, 18, 32, 0.9);
    padding: 12px 16px;
    border-radius: 8px;
    display: none;
  }
  .links.open { display: flex; }
}
</style>