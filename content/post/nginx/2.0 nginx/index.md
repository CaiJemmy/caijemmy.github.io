---
title: 2.0 nginx
description: nginx 进阶
slug: 2.0 nginx
date: 2024-07-24 00:00:00+0000
image: cover.jpg
categories:
    - 中间件
tags:
    - nginx
weight: 10       # You can add weight to some posts to override the default sorting (date descending)
---

## servername的多种匹配方式

### 同一端口配置不同域名

#### 提前准备

本地主机配置hosts文件

```shell
C:\Windows\System32\drivers\etc\hosts
# nginx验证同一端口配置不同域名
192.168.52.60 cainiao1.com
192.168.52.60 cainiao2.com
```

虚拟主机做以下配置

```shell
root@debian:/var/www# mkdir cainiao1 cainiao2
root@debian:/var/www# echo 'this is <br> cainiao1' > cainiao1/index.html
root@debian:/var/www# echo 'this is <br> cainiao2' > cainiao2/index.html
```

#### 配置nginx

```shell
# 将以下内容防止配置文件http模块最后
root@debian:~# vim /etc/nginx/nginx.conf
    server {
        listen 80;
        server_name cainiao1.com;

        location / {
            root /var/www/cainiao1;
            index  index.html index.htm;
            expires 30d;
        }
    }
    server {
        listen 80;
        server_name cainiao2.com;

        location / {
            root /var/www/cainiao2;
            index  index.html index.htm;
            expires 30d;
        }
    }

# 重新加载配置
root@debian:~# systemctl reload nginx.service
```

#### 验证

![image-nginx验证同一端口配置不同域名1](image-nginx验证同一端口配置不同域名1.png)

![image-nginx验证同一端口配置不同域名2](image-nginx验证同一端口配置不同域名2.png)

### 不同域名指向同一访问路径

#### 提前准备

本地主机配置hosts文件

```shell
C:\Windows\System32\drivers\etc\hosts
# nginx验证同一端口配置不同域名
192.168.52.60 cainiao1.com
192.168.52.60 cainiao2.com
192.168.52.60 xxoo.cainiao1.com
192.168.52.60 xx.cainiao1.com
192.168.52.60 oo.cainiao1.com
192.168.52.60 cainiao2.org
192.168.52.60 cainiao2.net
```

#### 配置nginx

**注意：server_name配置域名时，域名间有空格**

```shell
root@debian:~# vim /etc/nginx/nginx.conf
    server {
        listen 80;
        # server_name cainiao1.com xxoo.cainiao1.com xx.cainiao1.com oo.cainiao1.com;
        server_name cainiao1.com *.cainiao1.com;  # 可以使用*通配符

        location / {
            root /var/www/cainiao1;
            index  index.html index.htm;
            expires 30d;
        }
    }
    server {
        listen 80;
        server_name cainiao2.*;

        location / {
            root /var/www/cainiao2;
            expires 30d;
        }
    }
    
# 重新加载配置
root@debian:~# systemctl reload nginx.service
```

#### 验证

![image-nginx验证同一端口配置不同域名3](image-nginx验证同一端口配置不同域名3.png)

![image-nginx验证同一端口配置不同域名4](image-nginx验证同一端口配置不同域名4.png)



