## 在开始之前

### 一些约定

#### 关于运行环境

操作系统(普通部分): **Ubuntu** 22.04 LTS

操作系统(适用于Arch特编部分): **Archlinux** / Manjaro

包管理器(普通部分): **apt** / dpkg

包管理器(适用于Arch特编部分): **pacman** / paru

用户身份(通用): 有root权限的**普通**用户

#### 关于你

在阅读这篇文档时,你大致需要做到以下几点:

1.**清楚地**了解每一条命令的意义以及可能带来的后果,我们**不会**对任何无脑行为负责

2.**在需要时**请在互联网上搜索你的问题并**尝试**自己解决

3.在问题发生时请保持**冷静**,这会有助于你解决问题

## 配置运行环境

### Python

- Linux(命令行安装,请准备好sudo/root权限)

  现在请您先输入```python --version```查看现存Python版本,3.10以下都不可以运行

- 如果您是Python2.x,请在终端输入```sudo apt remove --auto-remove python```来移除Python2
  ,然后按照Python3.x-Python3.10以下处理
- 如果您是Python3.x:

    - Python3.10及以上可以直接跳到下载运行环境一节

    - Python3.10以下可以选择按下面的方式**升级**到Python3.10

        - 下载

      ```bash
      sudo apt install python3.10
      ```

        - 将软链接指向python3.10(可选)

          > 删除原有链接
          ```bash
          rm /usr/bin/python
          ```

          > 找到python3的安装路径
          ```bash
          which python3
          ```

          > 建立新的软链接
          ```bash
          ln -s (上面的路径) /usr/bin/python
          ```

### 部署项目

#### Poetry方式(推荐)

- 安装依赖

```bash
git clone https://github.com/MSLXTeam/MSL-X.git
cd MSL-X
poetry install
```

- 启动

```bash
poetry run start
```

#### 全局

- 安装依赖

```bash
git clone https://github.com/MSLXTeam/MSL-X.git
cd MSL-X
sudo pip install -r requirements.txt -U
```

- 启动

```bash
python main.py
```

#### Arch特编

##### 您只需要运行以下命令,便可安装Python3.11和pip:

```bash
sudo pacman -S python python-pip
```

##### 其他

- 恭喜您选择了Arch Linux!
- 由于最新版本的Arch Linux已经停止了Python3.7以前版本的支持,本文不做说明


### 安装依赖

### Java

> 虽然MSLX本身并不需要Java,可Java是开服的必需品,所以在此一并列出其下载方式

#### 使用apt安装

- 更新下载源: ``sudo apt update && sudo apt upgrade -y``
- Java17: ``sudo apt install openjdk-17-jdk -y``
- Java16: ``sudo apt install openjdk-16-jdk -y``
- Java8: ``sudo apt install openjdk-8-jdk -y``
- Java7: ``sudo apt install openjdk-7-jdk -y``

#### 手动下载安装包

- [Oracle官网](https://www.oracle.com/java/technologies/downloads/archive/)
- [Deepin安装Java17示例](https://bbs.deepin.org/post/236160)
- [命令行安装deb包教程](https://blog.csdn.net/oMcLin/article/details/108725325)

#### Arch特编

> 希望不要滚挂

- JDK18(jdk18-openjdk)<sup>[AUR](https://aur.archlinux.org/packages/jdk18-openjdk) </sup>
- JDK17(jdk-openjdk)<sup>[AUR](https://aur.archlinux.org/packages/jdk17-temurin) </sup>
- JDK16(jdk16-openjdk)<sup>[AUR](https://aur.archlinux.org/packages/jdk16-openjdk) </sup>
- JDK8(jdk8-openjdk-shenandoah)<sup>[AUR](https://aur.archlinux.org/packages/jdk8-openjdk-shenandoah) </sup>
- 可使用 ``paru -s (括号里的内容,不要带上括号)``来安装对应版本

环境配置至此完成

<!--
prev: false
next:
    text: '高级用法'
    link: '/start/adv'
-->