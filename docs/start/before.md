# 环境配置指南

## 系统和工具约定

- debian,apt
- archlinux,pacman
- 拥有root权限的普通用户

## 前提要求

- 理解每条命令的含义和后果
- 遇到问题时保持冷静，先尝试自行解决

## Python 环境配置

1. 检查Python版本：
   ```bash
   python --version
   ```
   需要Python 3.10及以上版本。

2. 移除Python 2.x (如果已安装)：
   ```bash
   sudo apt remove --auto-remove python
   ```

3. 安装或升级到Python 3.10：
   ```bash
   sudo apt install python3.10
   ```

4. 更新软链接（可选）：
   ```bash
   sudo rm /usr/bin/python
   which python3
   sudo ln -s [上面的路径] /usr/bin/python
   ```

## 项目部署

### 使用Poetry（推荐）

1. 安装依赖：
   ```bash
   git clone https://github.com/MSLXTeam/MSL-X.git
   cd MSL-X
   poetry install
   ```

2. 启动项目：
   ```bash
   poetry run start
   ```

### 使用全局环境

1. 安装依赖：
   ```bash
   git clone https://github.com/MSLXTeam/MSL-X.git
   cd MSL-X
   sudo pip install -r requirements.txt -U
   ```

2. 启动项目：
   ```bash
   python main.py
   ```

### Arch特编

安装Python 3.11和pip：
```bash
sudo pacman -S python python-pip
```

## Java 环境配置

### 使用apt

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install openjdk-17-jdk -y
```

### 手动下载安装包

- Oracle官网：[Java Downloads Archive](https://www.oracle.com/java/technologies/downloads/archive/)

```bash
sudo dpkg -i [包名].deb
```

### Arch特编

安装Java环境：
```bash
paru -S jdk-openjdk
```

环境配置完成。

```

```