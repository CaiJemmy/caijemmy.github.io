---
title: 1.0 keepalived
description: keepalived入门介绍
slug: 1.0 keepalived
date: 2024-06-24 00:00:00+0000
image: cover.jpg
categories:
    - 运维
tags:
    - High Availability
weight: 10       # You can add weight to some posts to override the default sorting (date descending)
---

## 什么是 Keepalived？

官网地址：https://keepalived.org/

Keepalived 是一个基于 **VRRP（Virtual Router Redundancy Protocol，虚拟路由器冗余协议）** 的高可用性解决方案，主要用于实现 **IP 故障转移** 和 **负载均衡**。它通过将多个服务器组成一个虚拟路由器组，确保在主服务器故障时，备用服务器可以接管其 IP 地址和服务，从而实现高可用性。


## Keepalived 的核心功能

1. IP 故障转移（Failover）：

   - 当主服务器故障时，备用服务器会自动接管其 IP 地址，确保服务不中断。

2. 健康检查（Health Check）：

   - 支持对后端服务（如 Nginx、Apache、MySQL 等）进行健康检查，确保只有健康的服务器才会接管 IP 地址。

3. 负载均衡：

   - 支持基于 Layer 4（传输层）的负载均衡，可以将请求分发到多个后端服务器。


## Keepalived 的工作原理

1. VRRP 协议：

   - Keepalived 使用 VRRP 协议在多个服务器之间同步状态。
   - 每个服务器在 VRRP 组中有一个优先级（Priority），优先级最高的服务器成为主服务器（Master），其他服务器成为备用服务器（Backup）。
   - 主服务器负责持有虚拟 IP 地址（VIP），备用服务器处于待命状态。
   
2. 故障检测：

   - Keepalived 通过健康检查机制检测主服务器的状态。
   - 如果主服务器故障，备用服务器中优先级最高的服务器会接管 VIP，成为新的主服务器。
   
3. 状态切换：

   - 当主服务器恢复后，可以根据配置决定是否重新接管 VIP。

## Keepalived 的典型应用场景

1. 高可用性集群：

   - 用于实现 Web 服务器（如 Nginx、Apache）、数据库（如 MySQL）、负载均衡器（如 HAProxy）等的高可用性。

2. 负载均衡：

   - 通过 Keepalived 和 IPVS（IP Virtual Server）实现基于 Layer 4 的负载均衡。

3. 网络冗余：

   - 用于确保关键网络服务（如网关、防火墙）的高可用性。


## Keepalived 的安装与配置

### 1. 安装 Keepalived

在基于 Debian/Ubuntu 的系统上：

```shell
sudo apt update
sudo apt install keepalived
```

在基于 CentOS/RHEL 的系统上：

```shell
sudo yum install keepalived
```

### 2. 配置 Keepalived

Keepalived 的配置文件通常位于 `/etc/keepalived/keepalived.conf`。

#### 示例配置：高可用性 Web 服务器

假设有两台服务器：

- **主服务器**：192.168.1.101
- **备用服务器**：192.168.1.102
- **虚拟 IP 地址（VIP）**：192.168.1.100

**主服务器配置**：

```shell
vrrp_instance VI_1 {
    state MASTER          # 主服务器
    interface eth0        # 使用的网卡
    virtual_router_id 51  # VRRP 组 ID，范围 0-255
    priority 100          # 优先级，主服务器优先级最高
    advert_int 1          # VRRP 广播间隔（秒）

    authentication {
        auth_type PASS    # 认证类型
        auth_pass 1234    # 认证密码
    }

    virtual_ipaddress {
        192.168.1.100     # 虚拟 IP 地址
    }
}
```

**备用服务器配置**：

```shell
vrrp_instance VI_1 {
    state BACKUP          # 备用服务器
    interface eth0        # 使用的网卡
    virtual_router_id 51  # VRRP 组 ID，与主服务器一致
    priority 90           # 优先级，低于主服务器
    advert_int 1          # VRRP 广播间隔（秒）

    authentication {
        auth_type PASS    # 认证类型
        auth_pass 1234    # 认证密码
    }

    virtual_ipaddress {
        192.168.1.100     # 虚拟 IP 地址
    }
}
```

### 3. 启动 Keepalived

在主服务器和备用服务器上启动 Keepalived：

```shell
sudo systemctl start keepalived
sudo systemctl enable keepalived
```

### 4. 测试故障转移

1. 在主服务器上停止 Keepalived：

   ```shell
   sudo systemctl stop keepalived
   ```

2. 检查备用服务器是否接管了 VIP：

   ```shell
   ip addr show eth0
   ```

3. 恢复主服务器，检查 VIP 是否重新接管。


## Keepalived 的健康检查

Keepalived 支持对后端服务进行健康检查，确保只有健康的服务器才会接管 VIP。

### 示例：Nginx 健康检查

```shell
vrrp_script chk_nginx {
    script "/usr/bin/pgrep nginx"  # 检查 Nginx 是否运行
    interval 2                     # 检查间隔（秒）
    weight 2                       # 优先级增减值
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 100
    advert_int 1

    authentication {
        auth_type PASS
        auth_pass 1234
    }

    virtual_ipaddress {
        192.168.1.100
    }

    track_script {
        chk_nginx  # 引用健康检查脚本
    }
}
```


## Keepalived 的日志

Keepalived 的日志默认输出到 `/var/log/syslog`（Debian/Ubuntu）或 `/var/log/messages`（CentOS/RHEL）。可以通过以下命令查看日志：

```shell
tail -f /var/log/syslog | grep keepalived
```

