import {defineConfig} from 'vitepress'

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
            {icon: { svg: `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" ></path></svg>` },link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=0g7MTLvlroHibBCHjh8dYMk0XprLYwwg&authKey=qrci4eHySM8Er8Dz83FhQxcDQTxB38keH2IVlMYahbuvM%2FpKEwmdpD1IunYhIblu&noverify=0&group_code=189836239'}
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
            {text: '其他文档', items: [
                    {text: "MSL", link: "/msl/index"},
                    {text: "Acacia", link: "/acacia/index"},
                    {text: "Acarua", link: "/acarua/index"},
                    {text: "Kylin JVM", link: "/kylin/kylin"}
                ]}
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
            ],
            '/msl/': [
                {
                    text: 'MSL | 使用文档',
                    collapsed: false,
                    items: [
                        {text: '使用协议', link: '/msl/eula'},
                        {text: '使用MSL开服', link: '/msl/start'},
                        {text: '进行服务器配置', link: '/msl/config'},
                        {text: '内网穿透配置', collapsed: true,
                            items: [
                                {text: 'MSL自带', link: '/msl/frpc#msl自带'},
                                {text: 'OpenFrp', link: '/msl/frpc#使用openfrp'}
                            ]
                        },
                        {text: '使用MSL联机', link: '/msl/p2p'},
                        {text: '软件本体配置', link: '/msl/software'},
                        {text: '开发人员名单', link: '/msl/info'}
                    ]
                }
            ],
            '/acarua/': [
                {
                    text: 'Acarua文档',
                    items: [
                        {text: '通用内容', collapsed: false,
                            items: [
                                {text: '开始使用', link: '/acarua/start'}
                            ]
                        },
                        {text: 'AcaruaMC特有内容', collapsed: false,
                            items: [
                                {text: '数据类型介绍', link: '/acarua/mc/datatypes'},
                                {text: '标准库介绍', link: '/acarua/mc/stdlib'}
                            ]
                        }
                    ]
                }
            ],
            '/kylin/': [
                {
                    text: 'Kylin JVM文档',
                    items: [
                        {text: '基础语法', link: '/kylin/start'},
                        {text: '内置调用运行函数', link: '/kylin/builtin_funcs'},
                        {text: '基础运行函数', link: '/kylin/base_funcs'},
                        {text: '基础类库', link: '/kylin/stdlibs'}
                    ]
                }
            ]
        },
    }
})
