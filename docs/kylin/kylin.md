---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Kylin JVM"
  text: "面向渗透测试的新生编程语言"
  actions:
    - theme: brand
      text: 快速上手
      link: /kylin/start
    - theme: alt
      text: Gitee
      link: https://gitee.com/LinWin-Cloud/kylin-language/
---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #945dff, #9b613a);

  --vp-home-hero-image-background-image: linear-gradient(rgba(148,93,255,0.78) 40%, rgba(155,97,58,0.78) 50%);
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