---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Acarua"
  text: "Let Minecraft Programming easier"
  actions:
    - theme: brand
      text: Let's Start
      link: /acarua/start
    - theme: alt
      text: Github
      link: https://github.com/CBerJun/AcaciaMC
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
