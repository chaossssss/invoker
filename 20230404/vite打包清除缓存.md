vue3+vite中如何打包添加随机号解决页面缓存更新不及时问题

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const **Timestamp** = new Date().getTime();//随机时间戳

export default defineConfig({
  plugins: [vue()],
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量样式，
        如果引入多个文件，可以使用格式:
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
         */
        additionalData: '@import "@/assets/scss/globalVariable.scss";',
      },
    },
  },
  resolve: {
    alias: {
      //设置别名以便src下的文件可以使用@找到
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000, // 启动端口
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    hmr: true, // 禁用或配置HMR连接
    // 设置 https 代理
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\api/, ''),
      },
    },
  },
  // 打包配置
  base: '', // 静态资源基础路径
  build: {
    sourcemap: false, // 输出.map文件,默认是false
    rollupOptions: {
      output: {
        chunkFileNames: `static/js/[name].[hash]${Timestamp}.js`,
        entryFileNames: `static/js/[name].[hash]${Timestamp}.js`,
        assetFileNames: `static/[ext]/[name].[hash]${Timestamp}.[ext]`,
      },
    }
  },
})
