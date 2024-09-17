---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Tea Panel"
  text: "基于Next.js的\n可拓展Jamctl前端"
  actions:
    - theme: alt
      text: Jamctl
      link: /
    - theme: alt
      text: Github
      link: https://github.com/MSLXTeam/teapanel
  image: 
      src: /logo.png

---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, rgb(29,184,29) 40%, rgb(43, 52, 64));

  --vp-home-hero-image-background-image: linear-gradient(45deg, rgb(29,184,29) 40%, #10ACFA 50%);
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
