---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Acacia"
  text: "为Minecraft PE而生的编程语言"
  actions:
    - theme: brand
      text: 开始使用
      link: /acacia/start
    - theme: alt
      text: Github
      link: https://github.com/CBerJun/AcaciaMC

features:
  - title: 专注于编程
    details: 不用管理一堆函数文件、看冗长的命令了:Acacia代码十分简洁.
  - title: 独特的实体系统
    details: 不用捣鼓实体标签了!
  - title: 变量系统
    details: 不用捣鼓计分板了!
  - title: 编译时常量内容丰富
    details: 包括数字、字符串、列表、映射表、甚至坐标等,使作品更加灵活.
---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(90deg, #10ACFA, rgba(16,232,213,0.98));

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