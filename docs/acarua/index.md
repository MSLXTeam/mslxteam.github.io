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
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #228ec7, rgba(188,102,236,0.98));

  --vp-home-hero-image-background-image: linear-gradient(#4eb4f8 40%, rgba(197,123,238,0.98) 50%);
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
