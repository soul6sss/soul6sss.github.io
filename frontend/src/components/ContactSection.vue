<template>
  <div class="contact">
    <div class="info" data-aos="fade-right">
      <h2>联系我</h2>
      <ul class="ways">
        <li><a href="mailto:you@example.com">邮箱</a></li>
        <li><a href="https://github.com/" target="_blank">GitHub</a></li>
        <li><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
    <form class="form" @submit.prevent="onSubmit" data-aos="fade-left">
      <div class="row">
        <input v-model="name" type="text" placeholder="姓名" required />
        <input v-model="email" type="email" placeholder="邮箱" required />
      </div>
      <textarea v-model="message" rows="4" placeholder="留言" required></textarea>
      <button type="submit" :disabled="loading">{{ loading ? '提交中...' : '提交' }}</button>
      <p v-if="success" class="tip">已提交成功，感谢留言！</p>
      <p v-if="error" class="error">提交失败，请稍后再试。</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const success = ref(false)
const error = ref(false)

const onSubmit = async () => {
  loading.value = true
  success.value = false
  error.value = false
  try {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
    if (formId) {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
      })
      if (res.ok) {
        success.value = true
        name.value = ''
        email.value = ''
        message.value = ''
        return
      }
    }
    // fallback: log only
    console.log('Message:', { name: name.value, email: email.value, message: message.value })
    success.value = true
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media (max-width: 900px) { .contact { grid-template-columns: 1fr; } }
.ways { list-style: none; padding: 0; }
.ways li a { color: #79c0ff; }
.form { background: rgba(17,25,40,.8); border: 1px solid rgba(121,192,255,.25); border-radius: 12px; padding: 16px; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 680px) { .row { grid-template-columns: 1fr; } }
input, textarea {
  background: rgba(33,40,62,.6);
  color: #e6edf3;
  border: 1px solid rgba(121,192,255,.25);
  border-radius: 8px;
  padding: 10px;
}
button { margin-top: 12px; padding: 10px 16px; border-radius: 10px; border: 1px solid rgba(121,192,255,.35); background: linear-gradient(90deg, rgba(99,102,241,.35), rgba(16,185,129,.35)); color: #e6edf3; }
.tip { color: #7bd88f; }
.error { color: #ff7b7b; }
</style>