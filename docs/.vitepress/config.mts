import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'

export default defineConfig({
  title: '产品技术文档中心',
  description: '面向团队的统一产品文档与技术知识库',
  base: '/docs/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/overview' },
      { text: '架构', link: '/architecture/overview' },
      { text: '部署', link: '/deployment/deploy-guide' },
      { text: 'API', link: '/api/auth' },
      { text: '前端', link: '/frontend/components' },
      
      { text: '更新日志', link: '/changelog/2025-01' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/repo' }
    ],
    search: {
      provider: 'local'
    },
    outline: [2, 3], // 标题导航层级
  },
})
