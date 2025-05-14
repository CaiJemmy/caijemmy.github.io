---
title: kubeadm部署单Master节点kubernetes集群
description: kubeadm部署单Master节点kubernetes集群 1.28
slug: kubeadm部署单Master节点kubernetes集群
date: 2024-07-22 00:00:00+0000
image: cover.jpg
categories:
    - 云原生
tags:
    - K8S
weight: 10
---

# kubeadm部署单Master节点kubernetes集群

## kubernetes 1.28.15 部署环境准备

### 主机操作系统说明

| 序号 |         操作系统及版本         |             备注              |
| :--: | :----------------------------: | :---------------------------: |
|  1   | Debian GNU/Linux 12 (bookworm) | Debian 6.1.135-1 (2025-04-25) |



### 主机硬件配置说明

| 需求 | CPU  | 内存 | 硬盘  | 角色         | 主机名       |
| ---- | ---- | ---- | ----- | ------------ | ------------ |
| 值   | 4C   | 4G   | 100GB | master       | k8s-master01 |
| 值   | 4C   | 4G   | 100GB | worker(node) | k8s-worker01 |
| 值   | 4C   | 4G   | 100GB | worker(node) | k8s-worker02 |

### 主机配置

#### 配置root 账号可以直接登录

```shell
# 虚机配置过程，已经提炼为shell脚本，参考 VM/init_vm.sh

# vim /etc/ssh/sshd_config
PermitRootLogin yes
systemctl restart ssh
```

#### 主机名配置

```shell
# master节点,名称为k8s-master01
hostnamectl set-hostname k8s-master01

# worker1节点,名称为k8s-worker01
hostnamectl set-hostname k8s-worker01

# worker2节点,名称为k8s-worker02
hostnamectl set-hostname k8s-worker02
```

#### 主机IP地址配置

NetworkManager 的配置文件位于 /etc/NetworkManager/system-connections/ 目录下。可以通过编辑配置文件来设置静态 IP。

```shell
# 方式1：修改以下部分：
cd /etc/NetworkManager/system-connections/
mv "Wired connection 1" master01_ens33.nmconnection

[ipv4]
method=manual
address1=192.168.52.129/24,192.168.52.2
dns=192.168.52.2;8.8.8.8;

# 运行以下命令重新加载配置：
sudo nmcli connection reload
sudo nmcli connection down master01_ens33
sudo nmcli connection up master01_ens33

# 方式2：命令修改以下部分：
cd /etc/NetworkManager/system-connections/
mv "Wired connection 1" master01_ens33.nmconnection
sudo nmcli connection reload

sudo nmcli connection modify master01_ens33 \
    ipv4.method manual \
    ipv4.addresses 192.168.52.129/24 \
    ipv4.gateway 192.168.52.2 \
    ipv4.dns "192.168.52.2 8.8.8.8"

# 激活连接
sudo nmcli connection down master01_ens33
sudo nmcli connection up master01_ens33
sudo nmcli connection down master01_ens33 && sudo nmcli connection up master01_ens33
```

#### 主机名与IP地址解析

```shell
# 所有集群主机均需要进行配置。
# cat /etc/hosts
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.52.129 k8s-master01
192.168.52.140 k8s-worker01
192.168.52.141 k8s-worker02
# 验证： ping -c 4 k8s-master01 && ping -c 4 k8s-worker01 && ping -c 4 k8s-worker02
```

#### 防火墙配置

```shell
# 所有主机均需要操作。
# 在 Debian 12 中，默认的防火墙工具是 nftables（替代了之前的 iptables）。以下是关闭防火墙和查看防火墙状态的命令：
# 检查 nftables 状态
sudo nft list ruleset

# 检查 firewalld 状态（如果安装了）
sudo firewall-cmd --state

# 检查 ufw 状态（如果安装了）
sudo ufw status

systemctl status nftables.service
```

#### SELINUX配置

```shell
# 所有主机均需要操作。修改SELinux配置需要重启操作系统。
# sed -ri 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config
# 在 Debian 系统中，默认不安装 SELinux。
sudo aa-status
# 如果输出显示 apparmor module is loaded，表示 AppArmor 正在运行。
# 在 Debian 系统上安装 Kubernetes 时，通常不需要关闭 AppArmor。AppArmor 与 Kubernetes 和常见容器运行时兼容，
# 并提供额外的安全性。只有在特定情况下（如配置不当或兼容性问题）才需要关闭 AppArmor。
```

#### 时间同步配置

```shell
# 所有主机均需要操作。最小化安装系统需要安装ntpdate软件。
# apt -y install ntpdate
crontab -l
0 */1 * * * /usr/sbin/ntpdate time1.aliyun.com
```

#### 升级操作系统内核

```shell
# 所有主机均需要操作。
sudo apt update
sudo apt upgrade
```

#### 配置内核转发及网桥过滤

```shell
# 所有主机均需要操作。
# 添加网桥过滤及内核转发配置文件
# cat /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
vm.swappiness = 0

# 加载br_netfilter模块
modprobe br_netfilter

# 查看是否加载
# lsmod | grep br_netfilter
br_netfilter           22256  0
bridge                151336  1 br_netfilter


# 加载网桥过滤及内核转发配置文件
# sysctl -p /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
vm.swappiness = 0
```

#### 安装ipset及ipvsadm

```shell
# 所有主机均需要操作。主要用于实现service转发。
# 安装ipset及ipvsadm
apt -y install ipset ipvsadm

# 配置ipvsadm模块加载方式
# 添加需要加载的模块，这里需要把br_netfilter也加上，减少一个配置内核转发及网桥过滤的单独服务。
cat > /etc/ipvsadm.rules <<EOF
#!/bin/bash
modprobe -- br_netfilter
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack
EOF

# 授权、运行、检查是否加载
chmod 755 /etc/ipvsadm.rules && bash /etc/ipvsadm.rules && lsmod | grep -e ip_vs -e nf_conntrack

vim /etc/systemd/system/ipvsadm.service
# 将启动内容拷贝
[Unit]
Description=IPVS Load Balancer
After=network.target

[Service]
Type=oneshot
ExecStart=/bin/bash /etc/ipvsadm.rules
ExecStop=/sbin/ipvsadm -C
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target

sudo systemctl enable ipvsadm
sudo systemctl start ipvsadm

sudo systemctl status ipvsadm
```

#### 关闭SWAP分区

```shell
# 修改完成后需要重启操作系统，如不重启，可临时关闭，命令为swapoff -a

# 永远关闭swap分区，需要重启操作系统
# cat /etc/fstab
......

# /dev/mapper/centos-swap swap                    swap    defaults        0 0

# 在上一行中行首添加#
```

### Docker准备



## 环境准备过程中问题排查

### IP地址配置的问题

**/etc/network/interfaces  这个下面不要做配置，不生效.**

使用界面做的配置
Debian 12 默认使用 NetworkManager 或 systemd-networkd 管理网络，而不是传统的 ifupdown 工具。
如果 NetworkManager 或 systemd-networkd 正在管理网络接口，/etc/network/interfaces 的配置会被忽略。

以下是排查过程
NetworkManager 正在管理该接口

```shell
root@master01:~# nmcli device status
DEVICE  TYPE      STATE                   CONNECTION
ens33   ethernet  connected               Wired connection 1
lo      loopback  connected (externally)  lo

# 查看 systemd-networkd 是否启用
root@master01:~# systemctl status systemd-networkd
○ systemd-networkd.service - Network Configuration
     Loaded: loaded (/lib/systemd/system/systemd-networkd.service; disabled; preset: enabled)
     Active: inactive (dead)
TriggeredBy: ○ systemd-networkd.socket
       Docs: man:systemd-networkd.service(8)
             man:org.freedesktop.network1(5)
```

### 虚机重启后，ipvs和br_netfilter未被加载

虚机重启后，需要重新加载`br_netfilter`模块。

将 modprobe -- br_netfilter 命令加入到 /etc/ipvsadm.rules

```shell
vim /etc/systemd/system/ipvsadm.service
# 将启动内容拷贝
[Unit]
Description=IPVS Load Balancer
After=network.target

[Service]
Type=oneshot
# 启动时不能执行这条命令：/sbin/ipvsadm-restore < /etc/ipvsadm.rules
# 应该使用bash执行相应的规则文件
ExecStart=/bin/bash /etc/ipvsadm.rules
ExecStop=/sbin/ipvsadm -C
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```
