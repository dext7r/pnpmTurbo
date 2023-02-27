import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './settings'

export default defineConfig({
  outDir: '../dist',

  lang: 'zh-CN',
  title: '前端物语',
  description: '每一个不曾起舞的日子,都是对生命的辜负!',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: 'https://h7ml.cn/logo.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/h7ml/pnpmTurbo' }],

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
