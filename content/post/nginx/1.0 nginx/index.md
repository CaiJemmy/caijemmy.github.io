---
title: 1.0 nginx
description: nginx 入门介绍
slug: 1.0 nginx
date: 2024-07-24 00:00:00+0000
image: cover.jpg
categories:
    - 中间件
tags:
    - nginx
weight: 10       # You can add weight to some posts to override the default sorting (date descending)
---



## nginx 安装

常用版本4大阵营

- Nginx开源版本：[nginx](https://nginx.org/)
- Nginx plus 商业版：[Welcome to F5 NGINX](https://www.f5.com/go/product/welcome-to-nginx)
- openresty：[OpenResty® - 开源官方站](https://openresty.org/cn/)
- Tengine：[The Tengine Web Server](https://tengine.taobao.org/)



安装参考链接：[nginx：Linux 软件包](https://nginx.org/en/linux_packages.html#Debian)

```shell
# 前提条件
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring

# 导入官方 nginx 签名密钥
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
    
# 验证下载的文件是否包含正确的密钥
root@debian:~# gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
pub   rsa4096 2024-05-29 [SC]
      8540A6F18833A80E9C1653A42FD21310B49F6B46
uid                      nginx signing key <signing-key-2@nginx.com>

pub   rsa2048 2011-08-19 [SC] [expires: 2027-05-24]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key <signing-key@nginx.com>

pub   rsa4096 2024-05-29 [SC]
      9E9BE90EACBCDE69FE9B204CBCDCD8A38D88A2B3
uid                      nginx signing key <signing-key-3@nginx.com>

# 为稳定的 nginx 软件包设置 apt 存储库
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# 安装 nginx
sudo apt update
sudo apt install nginx
```

## nginx 启动及验证

```shell
# 启动
root@debian:~# /usr/sbin/nginx
root@debian:~# ps -ef|grep nginx | grep -v grep
root        6683       1  0 19:54 ?        00:00:00 nginx: master process /usr/sbin/nginx
nginx       6684    6683  0 19:54 ?        00:00:00 nginx: worker process
nginx       6685    6683  0 19:54 ?        00:00:00 nginx: worker process
nginx       6686    6683  0 19:54 ?        00:00:00 nginx: worker process
nginx       6687    6683  0 19:54 ?        00:00:00 nginx: worker process
```



- vmware 上配置本地端口到虚机端口的映射
- 虚机上如果有防火墙，注意防火墙的配置

![image-nginx服务启动成功](image-nginx服务启动成功.png)

### 配置启动服务

```shell
# 查看/lib/systemd/system/nginx.service 或 /usr/lib/systemd/system/nginx.service 文件是否存在
# 注意安装路径的修改

[Unit]
Description=nginx - high performance web server
Documentation=https://nginx.org/en/docs/
After=network-online.target remote-fs.target nss-lookup.target
Wants=network-online.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
Environment="CONFFILE=/etc/nginx/nginx.conf"
EnvironmentFile=-/etc/default/nginx
ExecStart=/usr/sbin/nginx -c ${CONFFILE}
ExecReload=/bin/sh -c "/bin/kill -s HUP $(/bin/cat /run/nginx.pid)"
ExecStop=/bin/sh -c "/bin/kill -s TERM $(/bin/cat /run/nginx.pid)"
ExecQuit=/bin/sh -c "/bin/kill -s QUIT $(/bin/cat /run/nginx.pid)"

[Install]
WantedBy=multi-user.target

# 查看服务是否可用，开机自启动
systemctl daemon-reload
systemctl status nginx
systemctl enable nginx
```



## nginx 常用命令

```shell
# 查看版本
root@debian:~# nginx -v
nginx version: nginx/1.28.0

# 停止命令
root@debian:~# nginx -s stop
root@debian:~# ps -ef|grep nginx | grep -v grep

# 启动命令
root@debian:~# /usr/sbin/nginx
root@debian:~# ps -ef|grep nginx | grep -v grep
root        6797       1  0 20:21 ?        00:00:00 nginx: master process /usr/sbin/nginx
nginx       6798    6797  0 20:21 ?        00:00:00 nginx: worker process
nginx       6799    6797  0 20:21 ?        00:00:00 nginx: worker process
nginx       6800    6797  0 20:21 ?        00:00:00 nginx: worker process
nginx       6801    6797  0 20:21 ?        00:00:00 nginx: worker process

# 配置重新加载
root@debian:~# /usr/sbin/nginx -s reload
root@debian:~# ps -ef|grep nginx | grep -v grep
root        6797       1  0 20:21 ?        00:00:00 nginx: master process /usr/sbin/nginx
nginx       6809    6797  0 20:23 ?        00:00:00 nginx: worker process
nginx       6810    6797  0 20:23 ?        00:00:00 nginx: worker process
nginx       6811    6797  0 20:23 ?        00:00:00 nginx: worker process
nginx       6812    6797  0 20:23 ?        00:00:00 nginx: worker process

# 配置默认路径
root@debian:~# ls -l /etc/nginx/
total 28
drwxr-xr-x 2 root root 4096 May 17 19:39 conf.d
-rw-r--r-- 1 root root 1007 Apr 23 07:48 fastcgi_params
-rw-r--r-- 1 root root 5349 Apr 23 07:48 mime.types
lrwxrwxrwx 1 root root   22 Apr 23 08:39 modules -> /usr/lib/nginx/modules
-rw-r--r-- 1 root root  644 Apr 23 08:39 nginx.conf
-rw-r--r-- 1 root root  636 Apr 23 07:48 scgi_params
-rw-r--r-- 1 root root  664 Apr 23 07:48 uwsgi_params
```

### 停止nginx的其他方式

参考链接：[Beginner’s Guide](https://nginx.org/en/docs/beginners_guide.html)

```shell
# to stop nginx processes with waiting for the worker processes to finish serving current requests
nginx -s quit

# 通过 kill 命令
[ -f /var/run/nginx.pid ] && cat /var/run/nginx.pid | xargs kill -s QUIT

# 查看nginx资源使用情况
ps axw -o pid,ppid,user,%cpu,vsz,wchan,command | egrep '(nginx|PID)'
```

