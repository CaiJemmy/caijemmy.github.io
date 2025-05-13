---
title: K8S Node管理
description: Kubernetes集群Node管理
slug: K8S Node管理
date: 2022-07-23 00:00:00+0000
image: cover.jpg
categories:
    - 云原生
tags:
    - K8S
weight: 10       # You can add weight to some posts to override the default sorting (date descending)
---

## worker node节点管理集群

* **如果是kubeasz安装，所有节点(包括master与node)都已经可以对集群进行管理**



* 如果是kubeadm安装，在node节点上管理时会报如下错误

```shell
[root@k8s-worker1 ~]# kubectl get nodes
The connection to the server localhost:8080 was refused - did you specify the right host or port?
```

 只要把master上的管理文件`/etc/kubernetes/admin.conf`拷贝到node节点的`$HOME/.kube/config`就可以让node节点也可以实现kubectl命令管理

1, 在node节点的用户家目录创建`.kube`目录

```shell
[root@k8s-worker1 ~]# mkdir /root/.kube
```

2, 在master节点做如下操作

```shell
[root@k8s-worker1 ~]# scp /etc/kubernetes/admin.conf node1:/root/.kube/config
```

3, 在worker node节点验证

```shell
[root@k8s-worker1 ~]# kubectl get nodes
NAME          STATUS   ROLES    AGE     VERSION
k8s-master1   Ready    <none>   2d20h   v1.21.10
k8s-master2   Ready    <none>   2d20h   v1.21.10
k8s-master3   Ready    <none>   2d20h   v1.21.10
k8s-worker1   Ready    <none>   2d20h   v1.21.10
```

