---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/Waheal.png',
    name: 'Waheal',
    title: '创始人',
    links: [
      { icon: 'github', link: 'https://github.com/Waheal' },
    ]
  },
  {
    avatar: 'https://www.github.com/MojaveHao.png',
    name: 'MojaveHao',
    title: '打工人/全栈(?)',
    links: [
        { icon: 'github', link: 'https://github.com/MojaveHao' },
    ]
  },
  {
    avatar: 'https://www.github.com/luluxiaoyu.png',
    name: 'Xiaoyu',
    title: '打工人/后端',
    links: [
        { icon: 'github', link: 'https://github.com/luluxiaoyu' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      MSLTeam
    </template>
    <template #lead>
      MSLTeam是一个年轻的(划掉)团队,下面是主要成员:
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>