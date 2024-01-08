<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/MojaveHao.png',
    name: 'Mojave Hao',
    title: '主要开发者',
    links: [
      { icon: 'github', link: 'https://github.com/MojaveHao' },
    ]
  },
  {
    avatar: 'https://www.github.com/MemoryShadow.png',
    name: 'MemoryShadow',
    title: '无敌压缩机',
    links: [
      { icon: 'github', link: 'https://github.com/MemoryShadow' },
    ]
  },
  {
    avatar: 'https://www.github.com/yuyi2439.png',
    name: 'Yuyi2439',
    title: '工具人/开发者',
    links: [
      { icon: 'github', link: 'https://github.com/yuyi2439' },
    ]
  },
]
</script>

# 开发人员名单

下面是项目的主要开发者:

<VPTeamMembers size="small" :members="members" />

感谢下面的贡献者:

<a href="https://github.com/MSLXTeam/MSL-X/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MSLXTeam/MSL-X" />
</a>
