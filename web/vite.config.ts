/* @/web/vite.config.ts - 前端开发与构建配置
 * - ./tsconfig.json
 * - ../core/tauri.conf.json */

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  clearScreen: false, // 保留 Tauri 日志输出
  server: {
    port: 5173, // 与 tauri.conf.json 的 devUrl 对应
    strictPort: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist', // 与 tauri.conf.json 的 frontendDist 对应
  },
});
