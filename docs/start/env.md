# 环境配置指南

## 前提要求

- 理解每条命令的含义和后果
- 遇到问题时保持冷静，先尝试自行解决

## Python 环境配置

::: code-group
```shell [debian]
# 下面是编译安装的过程
sudo apt update
sudo apt install wget build-essential libncursesw5-dev libssl-dev \
libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev  
wget https://www.python.org/ftp/python/3.12.1/Python-3.12.1.tgz -o py312.tgz
tar -zxvf py312.tgz
cd Python-3.12.1
./configure --enable-optimizations
sudo make install
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