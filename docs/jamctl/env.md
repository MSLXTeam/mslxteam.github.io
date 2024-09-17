# Jamctl开发环境配置

## 需要准备的软件包

- gcc(推荐)
- cmake
- git(推荐,用于签出储存库)
- vcpkg(推荐,否则将需要手动安装库)

## 前提要求

- 理解每条命令的含义和后果
- 遇到问题时保持冷静，先尝试自行解决

## 准备开发环境

### 下载必需软件包

::: code-group
```shell [debian apt]
sudo apt update && sudo apt upgrade
sudo apt install cmake build-essential git ninja-build
cd ~ # 或者其他任何一个风水宝地,马上就要开始安装vcpkg了
git clone https://github.com/microsoft/vcpkg
./vcpkg/bootstrap-vcpkg.sh
./vcpkg --version # 检查一下有没有问题
export VCPKG_FORCE_SYSTEM_BINARIES=1 # 如果上面--version报错了就执行这个, 没报错就不用,如果需要最好加进bashrc等配置文件里
```

```shell [archlinux paru]
# 不是,哥们,arch用户来看这个说明你不合格了
# 啥?manjaro?AUR?滚出去,现在,立刻,马上!
paru -Syu vcpkg gcc cmake # 你都装上paru了想必一定有git了吧
```
:::

### 使用vcpkg安装库

::: warning
你要是没装vcpkg说明你得自己装库了
:::

::: code-group
```shell [any vcpkg]
sudo vcpkg install jsoncpp zlib libpq libqxx yaml-cpp drogon[core,ctl,postgres,orm] spdlog tomlplusplus
```
:::
