<template>
  <div id="app" class="app">
    <HeaderNav :active-section="activeSection" @navigate="onNavigate" />

    <main>
      <section id="home" ref="homeRef" class="section">
        <HeroSection @scroll-next="() => onNavigate('about')" />
      </section>

      <section id="about" ref="aboutRef" class="section" data-aos="fade-up">
        <AboutSection />
      </section>

      <section id="projects" ref="projectsRef" class="section" data-aos="fade-up">
        <ProjectsSection />
      </section>

      <section id="contact" ref="contactRef" class="section" data-aos="fade-up">
        <ContactSection />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'

const activeSection = ref<'home' | 'about' | 'projects' | 'contact'>('home')
const homeRef = ref<HTMLElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)
const projectsRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

const onNavigate = (id: 'home' | 'about' | 'projects' | 'contact') => {
  const el = {
    home: homeRef.value,
    about: aboutRef.value,
    projects: projectsRef.value,
    contact: contactRef.value,
  }[id]
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  const sections = [
    { id: 'home', el: homeRef.value },
    { id: 'about', el: aboutRef.value },
    { id: 'projects', el: projectsRef.value },
    { id: 'contact', el: contactRef.value },
  ]

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).id as typeof activeSection.value
          activeSection.value = id
        }
      })
    },
    { root: null, threshold: 0.6 }
  )

  sections.forEach((s) => s.el && observer?.observe(s.el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.app {
  background: radial-gradient(1200px 600px at 10% 0%, rgba(69, 105, 255, 0.12), transparent),
              radial-gradient(800px 400px at 90% 10%, rgba(0, 255, 200, 0.12), transparent),
              #0b0f19;
  color: #e6edf3;
  min-height: 100vh;
}

.section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
