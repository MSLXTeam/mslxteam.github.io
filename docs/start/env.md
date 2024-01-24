# 环境配置指南

## 前提要求

- 理解每条命令的含义和后果
- 遇到问题时保持冷静，先尝试自行解决

## Python 环境配置

::: code-group
```shell [debian]
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11
```

```shell [CentOS Stream]
sudo dnf install epel-release
sudo dnf config-manager --set-enabled powertools # CentOS8无需这一条,9需要
sudo dnf install python3.11
```

```shell [Fedora]
sudo dnf update
sudo dnf install python3.11
```

```shell [archlinux]
sudo pacman -Syu
sudo pacman -S python
```

```shell [Apline]
apk update
apk add python3
```
:::

## 项目部署

::: code-group
```shell [Poetry]
git clone https://github.com/MSLXTeam/MSL-X.git
cd MSL-X
poetry install
poetry run start
```

```shell [venv]
git clone https://github.com/MSLXTeam/MSL-X.git
cd MSL-X
python3 -m venv mslx
source mslx/bin/activate
pip install -r requirements.txt -U
python3 main.py
```
:::

环境配置完成。