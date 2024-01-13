# 使用Nginx进行反向代理

## 什么是Nginx

Nginx 是一个高性能的HTTP服务器和反向代理，也可用作IMAP/POP3代理服务器。它以其稳定性、丰富的功能集、简单的配置和低资源消耗而著称。

## 安装Nginx

### 使用apt安装

```bash
sudo apt install nginx
sudo systemctl status nginx
```

### 编译安装

#### 安装编译依赖

```bash
sudo apt install build-essential libpcre3 libpcre3-dev zlib1g-dev unzip git openssl libssl-dev
```

#### 下载Nginx源码

```bash
curl -O https://nginx.org/download/nginx-1.25.2.tar.gz
tar -zxvf nginx-1.25.2.tar.gz
```

#### 可选组件

- OpenSSL

```bash
curl -O https://www.openssl.org/source/openssl-3.1.2.tar.gz
tar -zxvf openssl-3.1.2.tar.gz
```

- Brotli

```bash
git clone https://github.com/google/ngx_brotli.git
cd ngx_brotli
git submodule update --init
cd ..
```

#### 编译Nginx

```bash
cd nginx-1.25.2
./configure --user=www-data --group=www-data --add-module=../ngx_brotli --with-openssl=../openssl-3.1.2 --with-openssl-opt='enable-tls1_3' --with-http_v2_module --with-http_ssl_module --with-http_gzip_static_module --with-http_realip_module --with-http_stub_status_module --with-stream
sudo make && sudo make install
```

## Arch特编

### 使用Pacman安装

```bash
sudo pacman -S nginx-mainline
sudo systemctl status nginx
sudo systemctl start nginx
sudo systemctl enable nginx
nginx -V
```

### 编译安装

Archlinux下的编译安装步骤与Debian相似。

启动Nginx：

```bash
cd /usr/local/nginx/sbin
./nginx
```

配置完成后，Nginx将可以作为反向代理服务器使用。