<template>
  <section class="contact-section">
    <div class="contact-content">
      <h2 class="contact-title">联系我</h2>
      <p class="contact-description">如果您有任何问题或合作意向，欢迎通过以下方式联系我：</p>
      <div class="contact-info">
        <p>邮箱：your.email@example.com</p>
        <p>LinkedIn：linkedin.com/in/yourprofile</p>
        <p>GitHub：github.com/yourusername</p>
      </div>
      <form class="contact-form">
        <input type="text" placeholder="您的姓名" />
        <input type="email" placeholder="您的邮箱" />
        <textarea placeholder="您的留言"></textarea>
        <button type="submit" class="submit-button">发送</button>
      </form>
    </div>
  </section>
</template>

<script setup>
// Contact Section 的逻辑
</script>

<style scoped>
.contact-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a; /* 深色背景 */
  color: #ffffff;
  text-align: center;
  padding: 0 20px;
}

.contact-content {
  max-width: 600px;
}

.contact-title {
  font-size: 3em;
  margin-bottom: 30px;
  /* 标题字体后续会调整 */
}

.contact-description {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.contact-info p {
  font-size: 1.1em;
  margin-bottom: 10px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form input,
.contact-form textarea {
  padding: 15px;
  border: 1px solid #00ffff; /* 霓虹边框 */
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #ffffff;
  font-size: 1em;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #aaa;
}

.submit-button {
  background: linear-gradient(90deg, #8a2be2, #00ffff); /* 渐变霓虹色 */
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.submit-button:hover {
  transform: scale(1.05);
}
</style>