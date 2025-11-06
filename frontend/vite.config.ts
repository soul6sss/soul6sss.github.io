import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 设置 base 以兼容 GitHub Pages 项目页部署
  // 用户页仓库（<user>.github.io）应为 '/'；项目页仓库应为 '/<repo>/'。
  base: process.env.VITE_BASE_PATH || '/',
})
