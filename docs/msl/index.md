---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Minecraft Server Launcher"
  text: "新一代服务器管理/       联机工具"
  actions:
    - theme: brand
      text: 立即下载
      link: https://msl.waheal.top/files/MSL.exe
    - theme: alt
      text: 使用文档
      link: /msl/server
    - theme: alt
      text: Github
      link: https://github.com/Waheal/Minecraft-Server-Launcher
  image: 
      src: ../msl.ico
      

features:
  - title: 一键式开服
    details: 只需简单操作即可创建一个属于你的Minecraft服务器
    link: /msl/start
  - title: 一键更改服务器设置
    details: 开服器配备服务器的基本信息选项，您可一键进行更改
    link: /msl/config
  - title: 内网穿透
    details: 开服器内置免费的内网映射，足够让您和您的小伙伴畅快联机
    link: /msl/frpc
  - title: 点对点联机
    details: 如果您既想联机又不想开服务器，不妨试一下此项新功能，无需服务器，通过P2P的方式进行局域网联机
    link: /msl/p2p

---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #0d96d7, rgba(180,59,241,0.98));

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