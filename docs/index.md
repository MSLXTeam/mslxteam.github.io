---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MSL-X"
  text: "轻量级开服工具"
  actions:
    - theme: brand
      text: 开始使用
      link: /start/before
    - theme: alt
      text: 开发文档
      link: /develop/plugin
    - theme: alt
      text: Github
      link: https://github.com/MSLXTeam/MSL-X
  image: 
      src: /logo.png
      

features:
  - title: 跨平台
    details: Windows, macOS, Linux三端都能用,网页访问也可以
  - title: 自由的插件系统
    details: 想干啥就干啥
  - title: Material Design风格
    details: 看着爽就对了

---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #1AFEFF 40%, #3792FF);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #1AFEFF 40%, #3792FF 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}
</style>