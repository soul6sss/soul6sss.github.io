<template>
  <header :class="{ 'scrolled': isScrolled }">
    <nav>
      <div class="logo">我的作品集</div>
      <ul v-if="!isMobile" class="nav-links">
        <li v-for="link in links" :key="link.id" :class="{ active: activeSection === link.id }" @click="scrollToSection(link.id)">
          {{ link.label }}
        </li>
      </ul>
      <div v-else class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul v-if="isMobile && menuOpen" class="nav-links mobile">
        <li v-for="link in links" :key="link.id" :class="{ active: activeSection === link.id }" @click="scrollToSection(link.id); toggleMenu()">
          {{ link.label }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobile = ref(window.innerWidth <= 768);
const menuOpen = ref(false);
const activeSection = ref('home');
const links = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
}, { threshold: 0.5 });

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  links.forEach(link => {
    const section = document.getElementById(link.id);
    if (section) observer.observe(section);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  observer.disconnect();
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.3s ease;
  z-index: 1000;
}
header.scrolled {
  background-color: rgba(0, 0, 0, 0.5);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
.nav-links {
  display: flex;
  list-style: none;
}
.nav-links li {
  margin: 0 1rem;
  cursor: pointer;
}
.nav-links li.active {
  color: #00ffcc; /* Neon color for active */
  font-weight: bold;
}
.hamburger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 4px 0;
}
.nav-links.mobile {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  flex-direction: column;
  align-items: center;
}
</style>