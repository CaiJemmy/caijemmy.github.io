---
title: 1.0 lua
description: lua入门介绍
slug: 1.0 lua
date: 2024-06-24 00:00:00+0000
image: cover.jpg
categories:
    - 运维
tags:
    - lua
weight: 10       # You can add weight to some posts to override the default sorting (date descending)

---

# lua入门

官网：[https://www.lua.org](https://www.lua.org/)

Lua 是一种轻量级、高效、可嵌入的脚本语言

教程参考：[https://www.runoob.com/lua/lua-tutorial.html](https://www.runoob.com/lua/lua-tutorial.html)

## 安装lua

- Linux 环境已安装 gcc、make。其他环境安装可以参考：[https://www.runoob.com/lua/lua-environment.html](https://www.runoob.com/lua/lua-environment.html)

```shell
root@debian:~# curl -L -R -O https://www.lua.org/ftp/lua-5.4.7.tar.gz
root@debian:~# tar zxf lua-5.4.7.tar.gz
root@debian:~# cd lua-5.4.7/
root@debian:~/lua-5.4.7# make all test
root@debian:~/lua-5.4.7# make install
cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.4 /usr/local/lib/lua/5.4
cd src && install -p -m 0755 lua luac /usr/local/bin
cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
cd src && install -p -m 0644 liblua.a /usr/local/lib
cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1

root@debian:~# echo 'print("Hello World!")' > HelloWorld.lua
root@debian:~# lua HelloWorld.lua
Hello World!
```

## 基本语法

### 交互式

```shell
root@debian:~# lua -i
Lua 5.4.7  Copyright (C) 1994-2024 Lua.org, PUC-Rio
> print("hello lua")
hello lua
> os.exit()           # 退出交互式
root@debian:~#
```

### 脚本式

```shell
root@debian:~# cat HelloWorld.lua
print("Hello World!")
root@debian:~# lua ./HelloWorld.lua
Hello World!
```

### 注释

#### 单行

```shell
root@debian:~# cat HelloWorld.lua
-- 这是注释
print("Hello World!")
root@debian:~# lua ./HelloWorld.lua
Hello World!
```

#### 多行

```shell
root@debian:~# cat HelloWorld.lua
--[[ 这是注释
这是多行注释
--]]
print("Hello World!")
root@debian:~# lua ./HelloWorld.lua
Hello World!
```

- 多行注释不支持嵌套

### 标识符

Lua 标识符用于定义一个变量，函数获取其他用户定义的项。标识符以一个字母 A 到 Z 或 a 到 z 或下划线 **_** 开头后加上 0 个或多个字母，下划线，数字（0 到 9）。

最好不要使用下划线加大写字母的标识符，因为Lua的保留字也是这样的。

Lua 不允许使用特殊字符如 **@**, **$**, 和 **%** 来定义标识符。 Lua 是一个区分大小写的编程语言。

### 关键词

以下列出了 Lua 的保留关键词。保留关键字不能作为常量或变量或其他用户自定义标示符：

| and      | break | do    | else   |
| -------- | ----- | ----- | ------ |
| elseif   | end   | false | for    |
| function | if    | in    | local  |
| nil      | not   | or    | repeat |
| return   | then  | true  | until  |
| while    | goto  |       |        |

一般约定，以下划线开头连接一串大写字母的名字（比如 _VERSION）被保留用于 Lua 内部全局变量。

### 全局变量

在默认情况下，变量总是认为是全局的。

全局变量不需要声明，给一个变量赋值后即创建了这个全局变量，访问一个没有初始化的全局变量也不会出错，只不过得到的结果是：nil。

如果你想删除一个全局变量，只需要将变量赋值为nil。换句话说, 当且仅当一个变量不等于nil时，这个变量即存在。

## 数据类型

Lua 是动态类型语言，变量不要类型定义,只需要为变量赋值。 值可以存储在变量中，作为参数传递或结果返回。

Lua 中有 8 个基本类型分别为：nil、boolean、number、string、userdata、function、thread 和 table。

| 数据类型 | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| nil      | 这个最简单，只有值nil属于该类，表示一个无效值（在条件表达式中相当于false）。 |
| boolean  | 包含两个值：false和true。                                    |
| number   | 表示双精度类型的实浮点数                                     |
| string   | 字符串由一对双引号或单引号来表示                             |
| function | 由 C 或 Lua 编写的函数                                       |
| userdata | 表示任意存储在变量中的C数据结构                              |
| thread   | 表示执行的独立线路，用于执行协同程序                         |
| table    | Lua 中的表（table）其实是一个"关联数组"（associative arrays），数组的索引可以是数字、字符串或表类型。在 Lua 里，table 的创建是通过"构造表达式"来完成，最简单构造表达式是{}，用来创建一个空表。 |

### nil（空）

- nil 类型表示一种没有任何有效值，它只有一个值 -- nil，例如打印一个没有赋值的变量，便会输出一个 nil 值
- 对于全局变量和 table，nil 还有一个"删除"作用，给全局变量或者 table 表里的变量赋一个 nil 值，等同于把它们删掉
- nil 作比较时应该加上双引号 "

```lua
-- 对保留字nil进行type运算，结果返回nil字符串
print(type(nil))
print(type(type(nil)))

-- 未定义变量返回的也是nil字符串
print(type(a))
print(type(type(a)))

-- 对于全局变量和 table，nil 起"删除"作用
xx = 'oo'
print(xx)
xx = nil
print(xx)

tab1 = { key1 = "val1", key2 = "val2" }
for k, v in pairs(tab1) do
    print(k .. " - " .. v)
end

tab1.key1 = nil
for k, v in pairs(tab1) do
    print(k .. " - " .. v)
end

-- nil 作比较时应该加上双引号 "
print(type(X)==nil)
print(type(X)=="nil")
```

```shell
# 运行结果
root@debian:/opt/lua# lua ./lua_type/test_nil.lua 
nil
string
nil
string
oo
nil
key1 - val1
key2 - val2
key2 - val2
false
true
```

### boolean（布尔）

boolean 类型只有两个可选值：true（真） 和 false（假），Lua 把 false 和 nil 看作是 false，其他的都为 true，数字 0 也是 true

```lua
print(type(true))
print(type(false))
print(type(nil))

if false or nil then
    print("至少有一个是 true")
else
    print("false 和 nil 都为 false")
end

if 0 then
    print("数字 0 是 true")
else
    print("数字 0 为 false")
end
```

```shell
root@debian:/opt/lua# lua ./lua_type/test_boolean.lua 
boolean
boolean
nil
false 和 nil 都为 false
数字 0 是 true
```

### number（数字）

Lua 默认只有一种 number 类型 -- double（双精度）类型（默认类型可以修改 luaconf.h 里的定义），以下几种写法都被看作是 number 类型

```lua
print(type(2))
print(type(2.2))
print(type(0.2))
print(type(2e+1))
print(type(0.2e-1))
print(type(7.8263692594256e-06))
```

```shell
root@debian:/opt/lua# lua ./lua_type/test_number.lua 
number
number
number
number
number
number
```

### string（字符串）

- 字符串由一对双引号或单引号来表示。
- 也可以用 2 个方括号 "[[]]" 来表示"一块"字符串，**不支持嵌套**。
- 在对一个数字字符串上进行算术操作时，Lua 会尝试将这个数字字符串转成一个数字，**数字字符串中有非数字时，报错**。
- 使用 # 来计算字符串的长度，放在字符串前面，**1汉字为3个长度**。
- 字符串连接使用的是 ..

```lua
-- 字符串中如果需要单引号或双引号，需根据字符串使用情况进行转义
string1 = "this is' '\"string1"
string2 = 'this is "string2\'"'
print(string1)
print(string2)

-- 块字符串不支持嵌套
html = [[
这是块字符串
块字符串不支持嵌套
]]
print(html)

-- 在对一个数字字符串上进行算术操作时，Lua 会尝试将这个数字字符串转成一个数字
print("2" + 6)
print("2" + "6")
print("2 + 6")
print("-2e2" * "6")
-- print("error" + 1)  -- attempt to add a 'string' with a 'number'
print("2.1" + 1)

-- 字符串连接
print("a" .. 'b')
print(157 .. 428)

-- 计算字符串的长度
len_test = "你好 世界"
print(#len_test)
print(#"你好 lua")
```

```shell
root@debian:/opt/lua# lua ./lua_type/test_string.lua 
this is' '"string1
this is "string2'"
这是块字符串
块字符串不支持嵌套

8
8
2 + 6
-1200.0
3.1
ab
157428
13
10
```

### table（表）

在 Lua 里，table 的创建是通过"构造表达式"来完成，最简单构造表达式是{}，用来创建一个空表。也可以在表里添加一些数据，直接初始化表。

Lua 中的表（table）其实是一个"关联数组"（associative arrays），数组的索引可以是数字或者是字符串。

```lua
-- 创建一个空的 table
local tbl1 = {}
for k, v in pairs(tbl1) do
    print(k .. " : " .. v)
end

-- 直接初始表
local tbl2 = {"apple", "pear", "orange", "grape"}
for k, v in pairs(tbl2) do
    print(k .. " : " .. v)
end
```

```shell
# 运行结果
root@debian:/opt/lua# lua ./lua_type/test_table.lua 
1 : apple
2 : pear
3 : orange
4 : grape
```

- 不同于其他语言的数组把 0 作为数组的初始索引，在 Lua 里表的默认初始索引一般以 1 开始。
- table 不会固定长度大小，有新数据添加时 table 长度会自动增长，没初始的 table 都是 nil。

### function（函数）

在 Lua 中，函数是被看作是"第一类值（First-Class Value）"，函数可以存在变量里:

```lua
function factorial1(n)
    if n == 0 then
        return 1
    else
        return n * factorial1(n - 1)
    end
end
print(factorial1(5))
factorial2 = factorial1
print(factorial2(5))
```

```shell
root@debian:/opt/lua# lua ./lua_type/test_func.lua 
120
120
```

#### 匿名函数（anonymous function）

```lua
function testFun(tab, fun)
    for k, v in pairs(tab) do
        print(fun(k, v));
    end
end

tab = { key1 = "val1", key2 = "val2" };
testFun(tab,
        function(key, val)
            --匿名函数
            return key .. "=" .. val;
        end
);
```

```shell
root@debian:/opt/lua# lua ./lua_type/test_func.lua 
120
120
key2=val2
key1=val1
```

### thread（线程）

在 Lua 里，最主要的线程是协同程序（coroutine）。它跟线程（thread）差不多，拥有自己独立的栈、局部变量和指令指针，可以跟其他协同程序共享全局变量和其他大部分东西。

线程跟协程的区别：线程可以同时多个运行，而协程任意时刻只能运行一个，并且处于运行状态的协程只有被挂起（suspend）时才会暂停。

### userdata（自定义类型）

userdata 是一种用户自定义数据，用于表示一种由应用程序或 C/C++ 语言库所创建的类型，可以将任意 C/C++ 的任意数据类型的数据（通常是 struct 和 指针）存储到 Lua 变量中调用。
