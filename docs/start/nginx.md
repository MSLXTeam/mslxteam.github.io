# 使用Nginx进行反向代理

## 什么是Nginx

Nginx 是一个高性能的HTTP服务器和反向代理，也可用作IMAP/POP3代理服务器。它以其稳定性、丰富的功能集、简单的配置和低资源消耗而著称。

## 安装Nginx

### 使用包管理器 {#install_nginx_with_package_manager}

::: code-group

```shell [debian]
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

```shell [CentOS Stream]
sudo dnf install epel-release
sudo dnf install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

```shell [Fedora]
sudo dnf install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

```shell [archlinux]
sudo pacman -Syu
sudo pacman -S nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

```shell [Alpine]
sudo apk update
sudo apk add nginx
sudo rc-service nginx start
sudo rc-update add nginx default
```

:::

### 编译安装 {#install_nginx_manually}

#### 安装编译依赖

::: code-group

```shell [debian]
sudo apt update
sudo apt install build-essential libpcre3 libpcre3-dev zlib1g zlib1g-dev libssl-dev
```

```shell [CentOS Stream & Fedora]
sudo dnf install gcc-c++ pcre-devel zlib-devel make openssl-devel

```

```shell [archlinux]
sudo pacman -Sy gcc make zlib pcre openssl
```

```shell [Alpine]
sudo apk add build-base pcre-dev zlib-dev openssl-dev
```

:::

#### 下载Nginx源码

> 此处以1.20.1作示例

```shell
wget http://nginx.org/download/nginx-1.20.1.tar.gz
tar zxvf nginx-1.20.1.tar.gz
cd nginx-1.20.1
```

#### 编译Nginx

::: details 常用编译选项列表

| 编译选项                                | 描述                             |
|-------------------------------------|--------------------------------|
| `--prefix=PATH`                     | 设置 Nginx 安装目录，例如 `/opt/nginx`。 |
| `--sbin-path=PATH`                  | 设置 Nginx 可执行文件的路径。             |
| `--conf-path=PATH`                  | 设置 Nginx 配置文件的路径。              |
| `--error-log-path=PATH`             | 设置错误日志文件的路径。                   |
| `--http-log-path=PATH`              | 设置访问日志文件的路径。                   |
| `--pid-path=PATH`                   | 设置存储主进程 PID 文件的路径。             |
| `--lock-path=PATH`                  | 设置 Nginx 锁文件的路径。               |
| `--http-client-body-temp-path=PATH` | 设置存储客户端请求体临时文件的路径。             |
| `--http-proxy-temp-path=PATH`       | 设置存储代理临时文件的路径。                 |
| `--http-fastcgi-temp-path=PATH`     | 设置存储 FastCGI 临时文件的路径。          |
| `--http-uwsgi-temp-path=PATH`       | 设置存储 uWSGI 临时文件的路径。            |
| `--http-scgi-temp-path=PATH`        | 设置存储 SCGI 临时文件的路径。             |
| `--user=NAME`                       | 设置启动 Nginx 时使用的用户。             |
| `--group=NAME`                      | 设置启动 Nginx 时使用的组。              |
| `--with-http_ssl_module`            | 启用 SSL 模块。用于 HTTPS。            |
| `--with-http_v2_module`             | 启用 HTTP/2 模块。                  |
| `--with-http_gzip_static_module`    | 启用在服务器上预压缩文件的支持。               |
| `--with-http_stub_status_module`    | 启用用于提供基本状态信息的模块。               |
| `--with-pcre`                       | 启用 PCRE 库。用于处理正则表达式。           |
| `--with-pcre-jit`                   | 启用 PCRE 的 JIT 编译。提高正则表达式的处理性能。 |
| `--with-ipv6`                       | 启用 IPv6 支持。                    |
| `--with-mail`                       | 启用邮件代理模块。                      |
| `--with-mail_ssl_module`            | 启用邮件代理模块的 SSL 支持。              |
| `--with-stream`                     | 启用 TCP/UDP 代理模块。               |
| `--with-stream_ssl_module`          | 启用 TCP/UDP 代理模块的 SSL 支持。       |
| `--with-debug`                      | 启用调试日志。对于排除故障非常有用，但会影响性能。      |
:::

```bash
# 下面的配置只是一个示例,你完全可以根据自己的需要自定义这些配置
./configure --with-openssl-opt='enable-tls1_3' --with-http_v2_module --with-http_ssl_module --with-http_gzip_static_module --with-http_realip_module --with-http_stub_status_module --with-stream
sudo make && sudo make install
```

#### 加入systemd全家桶

编辑新文件:

```shell
sudo vim /etc/systemd/system/nginx.service
```

加入下面的内容:

```ini{6}
[Unit]
Description=Nginx - high performance web server
After=network.target

[Service]
Environment="NGINX_PATH=/opt/nginx" # 把此处的/opt/nginx换成你的nginx安装路径 // [!code focus]
Type=forking
PIDFile=$NGINX_PATH/logs/nginx.pid
ExecStartPre=$NGINX_PATH/sbin/nginx -t -q -g 'daemon on; master_process on;'
ExecStart=$NGINX_PATH/sbin/nginx -g 'daemon on; master_process on;'
ExecReload=$NGINX_PATH/sbin/nginx -g 'daemon on; master_process on;' -s reload
ExecStop=-/sbin/start-stop-daemon --quiet --stop --retry QUIT/5 --pidfile /opt/nginx/logs/nginx.pid
TimeoutStopSec=5
KillMode=mixed

[Install]
WantedBy=multi-user.target
```

重新加载Systemd管理器配置和启用nginx服务:

```shell
sudo systemctl daemon-reload
sudo systemctl start nginx
sudo systemctl enable nginx
```

:::danger 喜报
您自己的nginx现已加入systemd全家桶套餐!
:::

#### 其他较老的初始化系统配置指南

:::details Upstart

> 你怎么还在用这么老的初始化系统啊?赶紧换新系统吧

编辑新文件:
```shell
sudo vim /etc/init/nginx.conf
```

添加下面的内容:

```ini{11-12,17-18}
description "nginx web server"

start on (filesystem and net-device-up IFACE=lo)
stop on runlevel [!2345]

respawn
respawn limit 10 5
expect fork

script
    NGINX_PATH=/opt/nginx/sbin/nginx # 替换成你自己的nginx安装路径,下同 // [!code focus:2]
    PID=/opt/nginx/logs/nginx.pid
    $NGINX_PATH -g 'daemon on; master_process on;'
end script

pre-stop script
    NGINX_PATH=/opt/nginx/sbin/nginx # 替换成你自己的nginx安装路径,下同 // [!code focus:2]
    PID=/opt/nginx/logs/nginx.pid
    $NGINX_PATH -s quit
end script
```

启动nginx:

```shell
sudo start nginx
```
:::

:::details SysV

> 你怎么还在用这么老的初始化系统啊?赶紧换新系统吧

编辑新文件:
```shell
sudo vim /etc/init.d/nginx
```

添加下面的内容:

```ini{11-12,17-18}
#!/bin/sh
# chkconfig: - 85 15
# description: Nginx is an HTTP(S) server, HTTP(S) reverse \
#              proxy and IMAP/POP3 proxy server

NGINX_PATH=/opt/nginx/sbin/nginx # 替换成你自己的nginx安装路径,下同 // [!code focus：2]
PID=/opt/nginx/logs/nginx.pid

start() {
    echo -n "Starting nginx: "
    $NGINX_PATH
}

stop() {
    echo -n "Stopping nginx: "
    $NGINX_PATH -s quit
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        stop
        start
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
esac

exit 0
```

启动nginx:

```shell
sudo chmod +x /etc/init.d/nginx
sudo chkconfig --add nginx
sudo chkconfig nginx on
sudo service nginx start
```
:::

### 编写配置文件

创建新的配置文件并编辑:

```shell
sudo mkdir -p /etc/nginx/streams # 根据操作系统和安装方式把/etc/nginx换成你自己的nginx配置文件路径,下同
sudo vim /etc/nginx/streams/minecraft.conf
```

加入下面的内容:

```nginx {6}
upstream minecraft_server {
    server minecraft_server_ip:minecraft_port;
}

server {
    listen 25565; # 服务器端口 // [!code focus]
    proxy_pass minecraft_server;
    proxy_connect_timeout 1s;
    proxy_timeout 3s;
}
```

编辑主配置文件:

```shell
sudo vim /etc/nginx/nginx.conf
```

在http块末尾,events块之外加上下面这一行来添加引用:

```nginx
include /etc/nginx/streams/minecraft.conf; # 换成上面的配置文件的路径
```

重新加载nginx配置

:::code-group

```shell [使用Nginx命令]
sudo nginx -s reload
```

```shell [使用Systemctl]
sudo systemctl reload nginx
```

:::