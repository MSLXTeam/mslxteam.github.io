import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MSL-X Document",
  description: "MSL-X Document,but uses Vitepress",
  lang: "zh-Hans",
  cleanUrls: true,
  head: [
    [ 'link', { rel: 'icon', href: 'favicon.ico' } ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用文档', link: '/start/before' },
      { text: '开发文档', link: '/develop/plugin' },
      { text: '开发人员名单', link: '/developers' },
    ],

    sidebar: {
      '/start/': [
          {
            text: '开始使用',
            collapsed: false,
            items:[
                { text: '开始使用', link: '/start/before' },
                { text: '更多功能', link: '/start/adv' },
                { text: 'nginx反代', link: '/start/nginx' },
                { text: '关于', link: '/start/about' }
            ]
          },
      ],
      '/develop/': [
        {
          text: '开发文档',
          collapsed: false,
          items:[
            { text: '插件本体', link: '/develop/plugin' },
            { text: '事件系统', link: '/develop/event' },
            { text: '命令系统', link: '/develop/command' },
            { text: '杂项', link: '/develop/other' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MSLXTeam/MSL-X' }
    ],

    footer: {
      message: 'Released under the GNU GPLv3 License.',
      copyright: 'Copyleft 2023 Mojave Hao'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    logo: '/logo.png',

    editLink: {pattern: 'https://github.com/MSLXTeam/mslxteam.github.io'},
  }
})
