import {defineConfig} from 'vitepress'
// @ts-ignore
import { qq } from "./icon.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MSL-X Document",
    description: "MSL-X Document,but uses Vitepress",
    lang: "zh-Hans",
    cleanUrls: true,
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    markdown:{
        lineNumbers: true,
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        darkModeSwitchTitle: "切换到深色模式",
        lightModeSwitchTitle: "切换到浅色模式",
        returnToTopLabel: "回到顶部",
        outline: {label: "在这一页上"},
        search: {provider: 'local'},
        logo: '/logo.png',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/MSLXTeam/MSL-X'},
            {icon: { svg: qq },link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=0g7MTLvlroHibBCHjh8dYMk0XprLYwwg&authKey=qrci4eHySM8Er8Dz83FhQxcDQTxB38keH2IVlMYahbuvM%2FpKEwmdpD1IunYhIblu&noverify=0&group_code=189836239'}
        ],
        footer: {
            message: 'Released under the GNU GPLv3 License & Powered by <a href="https://vitepress.dev/">VitePress</a>.',
            copyright: 'Copyleft 2023-2024 Mojave Hao'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: 'https://github.com/MSLXTeam/mslxteam.github.io/edit/main/docs/:path',
            text: "在Github上编辑此页"
        },

        nav: [
            {text: '主页', link: '/'},
            {text: '使用文档', link: '/start/env'},
            {text: '开发文档', link: '/develop/plugin'},
            {text: '开发人员名单', link: '/developers'},
        ],

        sidebar: {
            '/start/': [
                {
                    text: '开始使用',
                    collapsed: false,
                    items: [
                        {text: 'Q&A', link: '/start/qa'},
                        {text: '环境配置', link: '/start/env'},
                        {text: '更多功能', link: '/start/adv'},
                        {text: 'nginx反代', link: '/start/nginx', collapsed: false,
                            items: [
                                {text: '使用包管理器安装', link: '/start/nginx#install_nginx_with_package_manager'},
                                {text: '编译安装', link: '/start/nginx#install_nginx_manually'}
                            ]
                        },
                        {text: '关于', link: '/start/about'}
                    ]
                },
            ],
            '/develop/': [
                {
                    text: '开发文档',
                    collapsed: false,
                    items: [
                        {text: '插件本体', link: '/develop/plugin'},
                        {text: '事件系统', link: '/develop/event'},
                        {text: '命令系统', link: '/develop/command'},
                        {text: '杂项', link: '/develop/other'},
                    ]
                }
            ]
        },
    }
})
