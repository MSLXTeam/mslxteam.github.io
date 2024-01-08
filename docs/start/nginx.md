### 使用Nginx进行反向代理

#### 什么是Nginx

Nginx (读作"engine X") 由Igor Sysoev(俄)
于2005年编写,是一个免费、开源、高性能的HTTP服务器和反向代理,也可以作为一个IMAP/POP3代理服务器.Nginx因为稳定,丰富的功能集,配置简单,资源占用低而闻名世界.

#### 安装

##### 使用apt安装

```bash
sudo apt install nginx
sudo systemctl status nginx
```

> 在安装完成后,请确认防火墙已放通需要的端口.云服务器还需要配置安全组策略.具体方法请自行搜索,此处不再赘述.

##### 使用编译方式

###### 下载依赖

- ``sudo apt install build-essential libpcre3 libpcre3-dev zlib1g-dev unzip git openssl libssl-dev``
- 访问[Nginx官网下载地址](https://nginx.org/en/download.html),下载最新Mainline版本的Nginx.截至这篇文章编写(2023/8/22)
  ,最新Mainline版本为1.25.2,本篇将以这个版本作示例.
- ```bash
  curl -O https://nginx.org/download/nginx-1.25.2.tar.gz &&  tar -zxvf nginx-1.25.2.tar.gz
  ```

  > 可选组件
  >

    - OpenSSL

  ```bash
  curl -O https://www.openssl.org/source/openssl-3.1.2.tar.gz && tar -zxvf openssl-3.1.2.tar.gz
  ```

    - Brotli

  ```bash
  git clone https://github.com/google/ngx_brotli.git
  cd ngx_brotli
  git submodule update --init
  cd ..
  ```

###### 开始编译

> 切换到nginx源码目录

```bash
cd nginx-1.25.2
```

> 查看可用编译选项

```bash
./configure --help
```

> 编译

> user和group分别为用户和用户组,需要自己根据本机情况替换.如果需要指定安装目录和配置文件目录可以分别指定 ``--prefix``
> 和 ``--conf-path``参数.
> Nginx默认的安装目录为/usr/local/nginx/,配置文件为/usr/local/nginx/conf/nginx.conf.

```bash
./configure --user=www-data --group=www-data --add-module=../ngx_brotli --with-openssl=../openssl-3.1.2  --with-openssl-opt='enable-tls1_3' --with-http_v2_module --with-http_ssl_module --with-http_gzip_static_module --with-http_realip_module --with-http_stub_status_module --with-stream && sudo make && sudo make install
```

#### Arch特编

##### 使用Pacman

```bash
pacman -S nginx-mainline
systemctl status nginx
```

> 如果未启动请务必启动

```bash
sudo systemctl start nginx
```

> 设置开机自启

```bash
sudo systemctl enable nginx
```

> 检查nginx版本,没有报错即为成功

```bash
nginx -V
```

##### 编译安装

Archlinux下编译安装的方法基本和Ubuntu一致.
可以这么启动nginx:

```bash
cd /usr/local/nginx/sbin && ./nginx
```
<!--
prev:
text: 'nginx反代'
link: '/start/nginx'
next: 
text: '关于'
link: '/start/about'
-->
