var relearn_searchindex = [
  {
    "breadcrumb": "暮鼓晨钟",
    "content": "记录日常生活中的感悟、趣事。\n日常感悟\r记录日常感悟、生活感悟。",
    "description": "记录日常生活中的感悟、趣事。",
    "tags": [],
    "title": "日常拾趣",
    "uri": "/%E6%97%A5%E5%B8%B8%E6%8B%BE%E8%B6%A3/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 日常拾趣 \u003e 日常感悟 \u003e 亲子",
    "content": "后来我也当上了爸爸，我站在爸爸的角度审视着我的儿子，我想告诉他，要听爸爸的话，别走爸爸走过的弯路，可我才发现，儿子就像小时候的自己，贪玩，爱拖延，明明说了很多遍的问题，他还是会犯，那一刻我才发现，我管教的何止是儿子，还有曾经的自己……\n其实我们犯的最大的错误就是，试图让一个几岁，十几岁的孩子，去理解我们用了三四十年才感悟出来的人生道理，其实我并不是接受不了孩子的平庸，而是担心他的以后会和我一样，用尽了全力，却吃尽了生活的苦和累。",
    "description": "管教的何止是孩子，还有曾经的自己……",
    "tags": [
      "感悟"
    ],
    "title": "管孩子",
    "uri": "/%E6%97%A5%E5%B8%B8%E6%8B%BE%E8%B6%A3/%E6%97%A5%E5%B8%B8%E6%84%9F%E6%82%9F/%E4%BA%B2%E5%AD%90/%E7%AE%A1%E5%AD%A9%E5%AD%90/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 日常拾趣 \u003e 日常感悟 \u003e 感悟",
    "content": "一般孩子不可能同时具备的3个优点！\n聪明 又 听话 = 大概率“演”给家长看 聪明 又 努力 = 一般就不太听话（倔） 听话 又 努力 = 一般就不太聪明",
    "description": "一般孩子不可能同时具备的3个优点。",
    "tags": [
      "感悟"
    ],
    "title": "聪明、听话、努力",
    "uri": "/%E6%97%A5%E5%B8%B8%E6%8B%BE%E8%B6%A3/%E6%97%A5%E5%B8%B8%E6%84%9F%E6%82%9F/%E6%84%9F%E6%82%9F/%E8%81%AA%E6%98%8E%E5%90%AC%E8%AF%9D%E5%8A%AA%E5%8A%9B/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟",
    "content": "",
    "description": "",
    "tags": [],
    "title": "书香笔记",
    "uri": "/%E4%B9%A6%E9%A6%99%E7%AC%94%E8%AE%B0/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟",
    "content": "C++\rC++ 语言特性及项目。\rCMake\rC++ 项目构建工具。\rshell\r核心命令及shell脚本总结。",
    "description": "C++\rC++ 语言特性及项目。\rCMake\rC++ 项目构建工具。\rshell\r核心命令及shell脚本总结。",
    "tags": [],
    "title": "程序员技能",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能 \u003e C++",
    "content": "结构化绑定\n结构化绑定是C++17引入的一种语法特性，允许将一个复合对象（如pair、tuple、结构体、数组）的成员自动解构到多个变量中。它的设计目的是消除‘解包-使用-丢弃’的冗余代码模式。",
    "description": "C++17 核心特性：结构化绑定, std::optional, std::string_view, 带初始化的if/switch, std::variant, 文件系统, 并行算法等。",
    "tags": [],
    "title": "C++17",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/c++/c++17/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能 \u003e shell \u003e shell编程技巧",
    "content": "严格模式模板 1#!/usr/bin/env bash 2 3# 严格模式 4set -euo pipefail 5IFS=$'\\n\\t' 6 7# 调试模式（取消注释启用） 8# set -x 9 10set -o errtrace 11# 错误处理 12trap 'echo \"Error on line $LINENO. Exit code: $?\" \u003e\u00262' ERR 13 14# 退出清理 15cleanup() { 16 # 清理临时文件等 17 echo \"cleanup ... ...\" 18 rm -f \"${TEMP_FILE:-}\" 19} 20trap cleanup EXIT 21 22# 主逻辑 23main() { 24 # ... 25 fake 26} 27 28main \"$@\" 严格模式详解 命令返回非零状态时立即退出 set -e (errexit)\n1set -e 2 3echo \"开始\" 4false # 返回1，脚本立即退出 5echo \"这行不会执行\" 但要注意，有些情况下 -e 不生效：\n1#!/bin/bash 2set -e 3 4# 1. 失败命令在条件语句中 5if ls /不存在的目录; then 6 echo \"条件中失败不会退出\" 7fi 8 9# 2. 失败命令在逻辑或 || 之后 10ls /不存在的目录 || echo \"命令失败，但继续执行\" 11 12# 3. 失败命令在管道中（除了最后一部分） 13ls /不存在的目录 | wc -l # 管道中非最后部分的失败不会退出 set -o errexit\n这是 set -e 的长格式写法，功能完全相同。\nset +e\n关闭错误退出模式：\n1#!/bin/bash 2set -e # 开启错误退出 3 4# 临时关闭 5set +e 6ls /不存在的目录 7set -e # 重新开启 8 9echo \"这行会执行\" 使用未定义变量时报错退出 1set -u 2 3echo \"$UNDEFINED_VAR\" # 报错：UNDEFINED_VAR: unbound variable 处理可选变量的方式\n1set -u 2 3# 提供默认值 4echo \"${OPTIONAL_VAR:-default_value}\" 5 6# 检查变量是否设置 7if [[ -v OPTIONAL_VAR ]]; then 8 echo \"变量已设置: $OPTIONAL_VAR\" 9fi 10 11# 数组的特殊处理 12declare -a my_array=() 13echo \"${my_array[@]:-}\" # 避免空数组报错 管道中任何命令失败，整个管道返回失败 1set -o pipefail 2 3# 现在第一个命令的失败会被检测到 4cat /nonexistent | grep pattern 5echo $? # 返回1，而不是0 修改字段分隔符，避免空格引起的问题 1# 默认IFS包含空格 2IFS=$' \\t\\n' 3files=\"file 1.txt file2.txt\" 4for f in $files; do 5 echo \"-\u003e $f\" 6done 7# 输出3行，因为空格也是分隔符 8 9# 修改IFS 10IFS=$'\\n\\t' 11for f in $files; do 12 echo \"-\u003e $f\" 13done 14# 输出1行 trap 详细介绍 一、trap 的核心概念 trap 是一个 shell 内置命令，用来指定当“某些信号到来”或“某些 shell 事件发生”时要执行的命令序列。 常见用途包括：在脚本退出前做清理、对特定信号做优雅处理、在调试时记录执行信息等。 重要点：不同的 Shell 对某些事件的支持不完全一致。Bash 支持的事件比 POSIX sh 更丰富（如 EXIT、ERR、DEBUG、RETURN 等特殊事件）。 二、基本语法 语法形式 trap ‘commands’ SIGNALS… trap “commands” SIGNALS… trap -p # 打印当前已有的 trap trap -l # 列出系统信号及编号 重置/清除陷阱 trap - SIGNAL # 将该 SIGNAL 的 trap 重置为默认处理 trap -p # 可以用于查看当前的 trap 设置 与退出相关的特殊事件（Bash 支持，POSIX sh 通常不支持） trap ‘commands’ EXIT # 在脚本结束时执行 trap ‘commands’ ERR # 命令返回非零时执行（通常在 set -e 时配合使用） trap ‘commands’ DEBUG # 每条命令执行前执行 trap ‘commands’ RETURN # 函数返回时执行 注意 SIGKILL 和 SIGSTOP 不能被捕获、阻塞或忽略。 POSIX sh 在很多实现里不一定支持 EXIT/ERR/DEBUG/RETURN 等 Bash 专有事件，务必分环境测试。 三、常见的信号类型（用于 trap 的 SIGNALS…） SIGINT（中断，通常 Ctrl+C） SIGTERM（请求终止，较友好地结束进程） SIGQUIT SIGHUP（挂起/终端退出时的信号，常用于重新加载配置） SIGPIPE（管道破裂，写入一个已经读取端关闭的管道时产生） SIGKILL、SIGSTOP（不能捕获，系统强制终止或暂停） 用户自定义信号：SIGUSR1、SIGUSR2 等 以及其他常见信号：例如 SIGABRT、SIGCHLD、SIGALRM 等，具体按系统信号表为准",
    "description": "避免最常见的Shell陷阱，让脚本fail-fast。",
    "tags": [
      "Shell"
    ],
    "title": "01.严格模式",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/shell/shell%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7/01.%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能 \u003e CMake",
    "content": "1 单个源文件生成可执行文件\nHello World！",
    "description": "开启CMake之旅。",
    "tags": [],
    "title": "01.从可执行文件到库",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/cmake/01.%E4%BB%8E%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6%E5%88%B0%E5%BA%93/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能 \u003e shell \u003e shell编程技巧",
    "content": "getopts 参数处理 什么是 getopts？ getopts 是 Bash shell 内置的命令行参数解析器，用于处理脚本的命令行选项和参数。\n基本语法 1getopts optstring name [args] optstring：选项字符串，定义脚本接受的选项 name：存储当前选项的变量名 args：可选，要解析的参数列表（默认是 \"$@\"） 工作原理 optstring 以冒号开头或不以冒号开头 如果 optstring 以冒号开头：\n当遇到无效选项，getopts 返回 ‘?’，OPTARG 为无效选项字母。\n当遇到需要参数但未提供参数，getopts 返回 ‘:’，OPTARG 为该选项字母。\n如果 optstring 不以冒号开头：\n遇到无效选项，getopts 返回 ‘?’，并自动输出错误信息（到标准错误）。 遇到需要参数但未提供参数，getopts 会输出错误信息，并返回 ‘?’。 注释 实践中多以冒号开头，手动处理错误。\n特殊变量$OPTARG 存储当前选项的参数值（仅当选项需要参数时）\n特殊变量$OPTIND 下一个要处理的参数的索引\ngetopts脚本模板 支持长选项模板 ​ getopts 参数解析 1#!/bin/bash 2# script_template.sh 3 4# 默认值 5verbose=false 6output_file=\"output.txt\" 7recursive=false 8dry_run=false 9exclude_pattern=\"\" 10 11# 显示帮助信息 12show_help() { 13 cat \u003c\u003c EOF 14使用方法: $0 [选项] [文件...] 15 16选项: 17 -h, --help 显示此帮助信息 18 -v, --verbose 启用详细输出 19 -o FILE 指定输出文件 (默认: output.txt) 20 -r, --recursive 递归处理目录 21 -n, --dry-run 试运行，不实际修改文件 22 -e PATTERN 排除匹配 PATTERN 的文件 23 --version 显示版本信息 24 25示例: 26 $0 -v -o results.txt *.txt 27 $0 -r -e \"*.bak\" /path/to/dir 28EOF 29} 30 31# 解析参数 32while getopts \"hvo:rne:-:\" opt; do 33 case $opt in 34 h) 35 show_help 36 exit 0 37 ;; 38 v) 39 verbose=true 40 ;; 41 o) 42 output_file=\"$OPTARG\" 43 ;; 44 r) 45 recursive=true 46 ;; 47 n) 48 dry_run=true 49 ;; 50 e) 51 exclude_pattern=\"$OPTARG\" 52 ;; 53 -) # 处理长选项 54 case \"$OPTARG\" in 55 help) 56 show_help 57 exit 0 58 ;; 59 verbose) 60 verbose=true 61 ;; 62 recursive) 63 recursive=true 64 ;; 65 dry-run) 66 dry_run=true 67 ;; 68 version) 69 echo \"$0 版本 1.0.0\" 70 exit 0 71 ;; 72 *) 73 echo \"错误：未知的长选项 --$OPTARG\" \u003e\u00262 74 exit 1 75 ;; 76 esac 77 ;; 78 \\?) 79 echo \"错误：无效选项 -$OPTARG\" \u003e\u00262 80 show_help 81 exit 1 82 ;; 83 :) 84 echo \"错误：选项 -$OPTARG 需要参数\" \u003e\u00262 85 exit 1 86 ;; 87 esac 88done 89 90# 跳过已处理的选项 91shift $((OPTIND - 1)) 92 93# 检查必要参数 94if [ $# -eq 0 ] \u0026\u0026 [ \"$recursive\" = false ]; then 95 echo \"错误：需要指定文件或目录\" \u003e\u00262 96 show_help 97 exit 1 98fi 99 100# 处理文件/目录 101process_items() { 102 if [ \"$recursive\" = true ]; then 103 find \"$@\" -type f ! -name \"$exclude_pattern\" 104 else 105 for item in \"$@\"; do 106 if [ -f \"$item\" ]; then 107 echo \"$item\" 108 fi 109 done 110 fi 111} 112 113# 主逻辑 114echo \"配置信息：\" 115echo \" 详细模式: $verbose\" 116echo \" 输出文件: $output_file\" 117echo \" 递归模式: $recursive\" 118echo \" 试运行: $dry_run\" 119echo \" 排除模式: $exclude_pattern\" 120echo \" 处理的项目: $# 个\" 121 122if [ \"$dry_run\" = true ]; then 123 echo \"试运行模式，不实际执行操作\" 124 process_items \"$@\" 125else 126 echo \"开始处理...\" 127 # 实际处理逻辑 128fi 带子命令的复杂脚本 1#!/bin/bash 2# multi_command.sh 3 4# 显示帮助 5show_help() { 6 cat \u003c\u003c EOF 7数据库管理工具 8 9用法: $0 \u003c命令\u003e [选项] 10 11命令: 12 backup 备份数据库 13 restore 恢复数据库 14 query 执行查询 15 status 查看状态 16 17使用 '$0 \u003c命令\u003e --help' 查看具体命令的帮助 18EOF 19} 20 21# 备份命令 22backup_command() { 23 local compress=false 24 local output=\"backup.sql\" 25 26 while getopts \"co:h\" opt; do 27 case $opt in 28 c) 29 compress=true 30 ;; 31 o) 32 output=\"$OPTARG\" 33 ;; 34 h) 35 cat \u003c\u003c EOF 36备份数据库 37 38用法: $0 backup [选项] 39 40选项: 41 -c 压缩备份文件 42 -o FILE 指定输出文件名 (默认: backup.sql) 43 -h 显示此帮助信息 44EOF 45 exit 0 46 ;; 47 \\?) 48 exit 1 49 ;; 50 esac 51 done 52 53 shift $((OPTIND - 1)) 54 55 echo \"执行备份...\" 56 echo \"输出文件: $output\" 57 echo \"压缩: $compress\" 58 59 # 实际备份逻辑 60} 61 62# 主脚本逻辑 63if [ $# -eq 0 ]; then 64 show_help 65 exit 1 66fi 67 68command=\"$1\" 69shift # 移除命令名 70 71case \"$command\" in 72 backup) 73 backup_command \"$@\" 74 ;; 75 restore|query|status) 76 echo \"执行 $command 命令\" 77 # 其他命令的实现 78 ;; 79 -h|--help|help) 80 show_help 81 ;; 82 *) 83 echo \"错误：未知命令 '$command'\" 84 show_help 85 exit 1 86 ;; 87esac getopts的可选参数（不建议使用） a: 表示选项 a 必须带一个参数（如 -a value 或 -avalue）。 a:: 表示选项 a 可以带一个可选的参数：要么提供参数，要么不提供。 双冒号的作用就是“参数是可选的”，如果给出了参数就把它作为 OPTARG；没有参数时，OPTARG 为空或未设置，取决于具体实现和调用方式。 在 getopts 的实现中： 对于必选参数（如 a:）：下一个参数必须是参数值，无论是否以 - 开头 对于可选参数（如 a::）：下一个参数如果存在，总是被当作参数值，无论是否以 - 开头 1#!/bin/bash 2# optional_args.sh 3 4# 处理可选参数需要一些技巧 5# 这个脚本还有一些潜在的问题 6process_option_with_optional_arg() { 7 local next=\"$2\" 8 9 if [[ -n \"$next\" \u0026\u0026 \"$next\" != -* ]]; then 10 echo \"选项 $1 有参数: $next\" 11 # 跳过这个参数 12 shift 13 else 14 echo \"选项 $1 使用默认参数\" 15 fi 16} 17 18while getopts \"a::b::\" opt; do 19 case $opt in 20 a) 21 # 处理可选参数 22 if [[ -n \"$OPTARG\" ]]; then 23 echo \"选项 -a 参数: $OPTARG\" 24 else 25 echo \"选项 -a 无参数\" 26 fi 27 ;; 28 b) 29 # 另一种方式 30 process_option_with_optional_arg \"-b\" \"${!OPTIND}\" 31 ;; 32 esac 33done getopt 参数处理 什么是 getopt？ getopt 是 Bash shell 外部程序（util-linux 包）的命令行参数解析器，用于处理脚本的命令行选项和参数。\ngetopt 与 getopts 的区别 特性 getopts（内置） getopt（外部命令） 类型 Bash 内置命令 外部程序（util-linux 包） 长选项 不支持 支持 可选参数 有限支持 支持 错误处理 简单 更灵活 跨平台 所有 Bash 都支持 需要安装 参数重排 不支持 支持（自动重排） 基本语法 1# 基本语法 2getopt [options] -o 短选项 -l 长选项 -- \"$@\" 3 4# 常用选项 5getopt -o 短选项字符串 -l 长选项列表 -- \"$@\" 选项字符串语法\n格式 含义 示例 a: a 必须有参数 -a value 或 -avalue a:: a 可以有可选参数 -a 或 -avalue a a 无参数 -a abc a,b,c 都无参数 -a -b -c 或 -abc --long 无参数长选项 --help --long: 必须有参数 --verbose=3 或 --verbose 3 --long:: 可选参数 --output=file 或 --output 基本用法 1#!/bin/bash 2# getopt_long.sh 3 4echo \"原始参数: $@\" 5# 定义选项：短选项和长选项 6args=$(getopt -o hv:o:: -l help,verbose:,output:: -- \"$@\") || exit 1 7 8eval set -- \"$args\" 9echo \"重排后参数: $@\" 10 11while true; do 12 case \"$1\" in 13 -h|--help) 14 echo \"用法: $0 [选项] [文件...]\" 15 echo \"选项:\" 16 echo \" -h, --help 显示帮助信息\" 17 echo \" -v, --verbose 详细模式（必须有参数）\" 18 echo \" -o, --output 输出文件（可选参数）\" 19 exit 0 20 ;; 21 -v|--verbose) 22 echo \"详细级别: $2\" 23 shift 2 24 ;; 25 -o|--output) 26 if [[ -n \"$2\" \u0026\u0026 \"$2\" != \"--\" ]]; then 27 echo \"输出文件: $2\" 28 shift 2 29 else 30 echo \"输出到标准输出 $2\" 31 shift 2 32 fi 33 ;; 34 --) 35 shift 36 break 37 ;; 38 *) 39 echo \"错误: 未知选项 $1\" \u003e\u00262 40 exit 1 41 ;; 42 esac 43done 44 45# 处理剩余的非选项参数 46for file in \"$@\"; do 47 echo \"处理文件: $file\" 48done 可选参数的坑 对于可选参数，没有参数时，getopt 解析时$2是空串，代码处理逻辑要是shift 2，否则参数处理报错。 对于可选参数，调用时传参要注意。 ​ 测试脚本 1./xxx.sh -v 3 -o output.txt file1.txt file2.txt 2# 输出： 3# 详细级别: 3 4# 输出到标准输出 5# 处理文件: output.txt 6# 处理文件: file1.txt 7# 处理文件: file2.txt getopt 的语法要求：如果可选参数存在，必须紧跟在选项后面，中间不能有空格\n解决方案：\n推荐：使用 -ovalue 或 --output=value 格式 备选：自己实现参数预处理逻辑 最简单：不使用 getopt，自己手动解析参数 参数解析模板 1#!/usr/bin/env bash 2# 3# 参数解析最佳实践模板 4# 5 6set -euo pipefail 7 8# 版本信息 9readonly VERSION=\"1.0.0\" 10readonly SCRIPT_NAME=\"$(basename \"$0\")\" 11 12# 配置变量 13declare -A CONFIG=( 14 [environment]=\"staging\" 15 [version]=\"\" 16 [config_file]=\"\" 17 [dry_run]=\"false\" 18 [verbose]=\"false\" 19 [log_level]=\"info\" 20) 21 22# 位置参数 23declare -a TARGETS=() 24 25die() { 26 echo \"Error: $*\" \u003e\u00262 27 exit 1 28} 29 30usage() { 31 cat \u003c\u003c EOF 32$SCRIPT_NAME v$VERSION - 自动化部署工具 33 34Usage: 35 $SCRIPT_NAME [OPTIONS] [TARGETS...] 36 37Options: 38 -e, --env ENV 目标环境 (staging|production) [默认: staging] 39 -v, --version VER 部署版本号（必填） 40 -c, --config FILE 配置文件路径 41 -n, --dry-run 干运行模式，只打印将执行的操作 42 --verbose 详细输出 43 --log-level LEVEL 日志级别 (debug|info|warn|error) [默认: info] 44 -h, --help 显示帮助信息 45 --Version 显示版本信息 46 47Environment Variables: 48 DEPLOY_ENV 等同于 --env 49 DEPLOY_CONFIG 等同于 --config 50 51Examples: 52 # 部署到staging环境 53 $SCRIPT_NAME -v 1.2.3 54 55 # 部署到production，只处理指定服务器 56 $SCRIPT_NAME -e production -v 1.2.3 server1 server2 57 58 # 干运行模式 59 $SCRIPT_NAME -v 1.2.3 --dry-run --verbose 60EOF 61} 62 63parse_args() { 64 while [[ $# -gt 0 ]]; do 65 case \"$1\" in 66 -e|--env) 67 [[ $# -lt 2 ]] \u0026\u0026 die \"Option $1 requires an argument\" 68 CONFIG[environment]=\"$2\" 69 shift 2 70 ;; 71 -v|--version) 72 [[ $# -lt 2 ]] \u0026\u0026 die \"Option $1 requires an argument\" 73 CONFIG[version]=\"$2\" 74 shift 2 75 ;; 76 -c|--config) 77 [[ $# -lt 2 ]] \u0026\u0026 die \"Option $1 requires an argument\" 78 CONFIG[config_file]=\"$2\" 79 shift 2 80 ;; 81 -n|--dry-run) 82 CONFIG[dry_run]=\"true\" 83 shift 84 ;; 85 --verbose) 86 CONFIG[verbose]=\"true\" 87 shift 88 ;; 89 --log-level) 90 [[ $# -lt 2 ]] \u0026\u0026 die \"Option $1 requires an argument\" 91 CONFIG[log_level]=\"$2\" 92 shift 2 93 ;; 94 -h|--help) 95 usage 96 exit 0 97 ;; 98 --Version) 99 echo \"$SCRIPT_NAME v$VERSION\" 100 exit 0 101 ;; 102 --) 103 shift 104 TARGETS+=(\"$@\") 105 break 106 ;; 107 -*) 108 die \"Unknown option: $1\" 109 ;; 110 *) 111 TARGETS+=(\"$1\") 112 shift 113 ;; 114 esac 115 done 116 117 # 从环境变量读取默认值 118 : \"${CONFIG[environment]:=${DEPLOY_ENV:-staging}}\" 119 : \"${CONFIG[config_file]:=${DEPLOY_CONFIG:-}}\" 120} 121 122validate_args() { 123 # 必填参数检查 124 [[ -z \"${CONFIG[version]}\" ]] \u0026\u0026 die \"Version is required. Use -v or --version\" 125 126 # 环境值验证 127 [[ ! \"${CONFIG[environment]}\" =~ ^(staging|production)$ ]] \u0026\u0026 \\ 128 die \"Invalid environment: ${CONFIG[environment]}. Must be 'staging' or 'production'\" 129 130 # 版本格式验证（语义化版本） 131 [[ ! \"${CONFIG[version]}\" =~ ^[0-9]+\\.[0-9]+\\.[0-9]+(-[a-zA-Z0-9.]+)?$ ]] \u0026\u0026 \\ 132 die \"Invalid version format: ${CONFIG[version]}. Expected semantic versioning (e.g., 1.2.3)\" 133 134 # 配置文件验证 135 if [[ -n \"${CONFIG[config_file]}\" ]]; then 136 [[ ! -f \"${CONFIG[config_file]}\" ]] \u0026\u0026 die \"Config file not found: ${CONFIG[config_file]}\" 137 fi 138 139 # 日志级别验证 140 [[ ! \"${CONFIG[log_level]}\" =~ ^(debug|info|warn|error)$ ]] \u0026\u0026 die \"Invalid log level: ${CONFIG[log_level]}\" 141 142 return 0 143} 144 145print_config() { 146 echo \"=== Configuration ===\" 147 for key in \"${!CONFIG[@]}\"; do 148 printf \" %-15s: %s\\n\" \"$key\" \"${CONFIG[$key]}\" 149 done 150 echo \" targets : ${TARGETS[*]:-\u003call\u003e}\" 151} 152 153main() { 154 parse_args \"$@\" 155 validate_args 156 157 if [[ \"${CONFIG[verbose]}\" == \"true\" ]]; then 158 print_config 159 fi 160 161 # 主逻辑... 162 # echo \"${CONFIG[@]}\" 163} 164 165main \"$@\"",
    "description": "命令行参数解析是每个脚本都要面对的问题。",
    "tags": [
      "Shell"
    ],
    "title": "02.参数解析",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/shell/shell%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7/02.%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能 \u003e CMake \u003e 01.从可执行文件到库",
    "content": "项目结构 CMakeLists.txt hello_world.cpp 注释 文件的名称区分大小写，必须命名为CMakeLists.txt，CMake才能够解 析。\nCPP源文件 ​ hello_world.cpp 1#include \u003ciostream\u003e 2#include \u003cstring\u003e 3 4std::string SayHello() { 5 return \"Hello, CMake World!\"; 6} 7 8int main() { 9 std::cout \u003c\u003c SayHello() \u003c\u003c std::endl; 10 return 0; 11} CMake文件 ​ CMakeLists.txt 1cmake_minimum_required(VERSION 3.25 FATAL_ERROR) 2 3project(hello-world LANGUAGES CXX) 4 5add_executable( 6 ${PROJECT_NAME} 7 hello_world.cpp 8) 注释 CMake语言不区分大小写，但是参数区分大小写。\n提示 CMake中，C++是默认的编程语言。不过在实际编写代码过程中，仍建议使用LANGUAGES选项在project命令中显示地声明项目的语言。\n构建 生成CMake相关文件 ​ 生成CMake文件命令 1mkdir build 2cd build 3cmake .. 4# 或 5cmake -H. -Bbuild 注释 -H 和 -B 为CLI选项。 -H 表示当前目录中搜索根CMakeLists.txt文件。-Bbuild告诉CMake在一个名为build的目录中生成所有的文件。\n​ 命令结果输出 1-- The CXX compiler identification is GNU 12.2.0 2-- Detecting CXX compiler ABI info 3-- Detecting CXX compiler ABI info - done 4-- Check for working CXX compiler: /usr/bin/c++ - skipped 5-- Detecting CXX compile features 6-- Detecting CXX compile features - done 7-- Configuring done 8-- Generating done 9-- Build files have been written to: /root/cmake/01/build ​ build目录下文件 1root@debian:~/cmake/01/build# ll 2total 32 3-rw-r--r-- 1 root root 12334 Feb 3 09:23 CMakeCache.txt 4drwxr-xr-x 6 root root 4096 Feb 3 09:23 CMakeFiles 5-rw-r--r-- 1 root root 1604 Feb 3 09:23 cmake_install.cmake 6-rw-r--r-- 1 root root 5275 Feb 3 09:23 Makefile GNU/Linux上，CMake默认生成Unix Makefile来构建项目：\nMakefile: make将运行指令来构建项目。 CMakefile：包含临时文件的目录，CMake用于检测操作系统、编译器等。此外，根据所选的生成器，它还包含特定的文件。 cmake_install.cmake：处理安装规则的CMake脚本，在项目安装时使用。 CMakeCache.txt：如文件名所示，CMake缓存。CMake在重新运行配置时使用这个文件。 生成可执行文件 ​ 构建可执行文件 1cmake --build . 2# 或 3cmake --build build 提示 一条命令：cmake -H. -Bbuild \u0026\u0026 cmake --build build",
    "description": "Hello World！",
    "tags": [
      "CMake"
    ],
    "title": "1 单个源文件生成可执行文件",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/cmake/01.%E4%BB%8E%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6%E5%88%B0%E5%BA%93/1-%E5%8D%95%E4%B8%AA%E6%BA%90%E6%96%87%E4%BB%B6%E7%94%9F%E6%88%90%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: C++",
    "uri": "/tags/c++/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能",
    "content": "C++17\nC++17 核心特性：结构化绑定, std::optional, std::string_view, 带初始化的if/switch, std::variant, 文件系统, 并行算法等。",
    "description": "C++ 语言特性及项目。",
    "tags": [],
    "title": "C++",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/c++/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟",
    "content": "",
    "description": "",
    "tags": [],
    "title": "类别",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: CMake",
    "uri": "/tags/cmake/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能",
    "content": "本次cmake学习之旅是结合《CMake Cookbook》一书以及本人在具体项目工程需求中的具体实践，将Modern CMake所有性能以代码和笔记的形式呈现！\n01.从可执行文件到库\n开启CMake之旅。",
    "description": "C++ 项目构建工具。",
    "tags": [],
    "title": "CMake",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/cmake/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能",
    "content": "shell编程技巧\rshell编程中的一些技巧总结。",
    "description": "核心命令及shell脚本总结。",
    "tags": [],
    "title": "shell",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/shell/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Shell",
    "uri": "/tags/shell/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能 \u003e shell",
    "content": "01.严格模式\n避免最常见的Shell陷阱，让脚本fail-fast。\n02.参数解析\n命令行参数解析是每个脚本都要面对的问题。",
    "description": "shell编程中的一些技巧总结。",
    "tags": [],
    "title": "shell编程技巧",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/shell/shell%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 日常拾趣 \u003e 日常感悟",
    "content": "管孩子\n管教的何止是孩子，还有曾经的自己……",
    "description": "和孩子相关。",
    "tags": [],
    "title": "亲子",
    "uri": "/%E6%97%A5%E5%B8%B8%E6%8B%BE%E8%B6%A3/%E6%97%A5%E5%B8%B8%E6%84%9F%E6%82%9F/%E4%BA%B2%E5%AD%90/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 类别",
    "content": "",
    "description": "",
    "tags": [],
    "title": "类别 :: 工程",
    "uri": "/categories/%E5%B7%A5%E7%A8%8B/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 感悟",
    "uri": "/tags/%E6%84%9F%E6%82%9F/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 日常拾趣 \u003e 日常感悟",
    "content": "聪明、听话、努力\n一般孩子不可能同时具备的3个优点。",
    "description": "记录日常感悟、生活感悟。",
    "tags": [],
    "title": "感悟",
    "uri": "/%E6%97%A5%E5%B8%B8%E6%8B%BE%E8%B6%A3/%E6%97%A5%E5%B8%B8%E6%84%9F%E6%82%9F/%E6%84%9F%E6%82%9F/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 类别",
    "content": "",
    "description": "",
    "tags": [],
    "title": "类别 :: 日常",
    "uri": "/categories/%E6%97%A5%E5%B8%B8/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 日常拾趣",
    "content": "亲子\r和孩子相关。\r感悟\r记录日常感悟、生活感悟。",
    "description": "记录日常感悟、生活感悟。",
    "tags": [],
    "title": "日常感悟",
    "uri": "/%E6%97%A5%E5%B8%B8%E6%8B%BE%E8%B6%A3/%E6%97%A5%E5%B8%B8%E6%84%9F%E6%82%9F/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 程序员技能 \u003e C++ \u003e C++17",
    "content": "基础概念解析 什么是结构化绑定？ 结构化绑定是C++17引入的一种语法特性，允许你将一个复合对象（如pair、tuple、结构体、数组）的成员自动解构到多个变量中。它的设计目的是消除\"解包-使用-丢弃\"的冗余代码模式。\n核心优势 相比传统的访问方式（如std::pair的.first/.second），结构化绑定的核心优势在于：\n语义清晰：变量名直接反映数据含义，而非泛泛的\"first/second\" 代码简洁：一行声明替代多行解包代码 零运行时开销：编译期展开，不引入任何性能代价 通用性：统一处理数组、结构体、tuple等复合类型 ​ 对比示例 1// 传统方式 - 语义模糊 2std::pair\u003cstd::string, int\u003e getUserData() { return {\"Alice\", 25}; } 3auto data = getUserData(); 4std::string name = data.first; 5int age = data.second; 6 7// 结构化绑定 - 语义清晰 8auto [name, age] = getUserData(); 语法与使用场景 基础语法 1auto [变量1, 变量2, ...] = 表达式; // 拷贝绑定 2auto\u0026 [变量1, 变量2, ...] = 表达式; // 引用绑定 3const auto\u0026 [变量1, 变量2, ...] = 表达式; // 常引用绑定 实用场景示例 场景1：遍历关联容器（C++17+） ​ 遍历关联容器 1#include \u003ciostream\u003e 2#include \u003cmap\u003e 3#include \u003cstring\u003e 4 5int main() { 6 std::map\u003cstd::string, int\u003e scores = { 7 {\"张三\", 95}, {\"李四\", 87}, {\"王五\", 92} 8 }; 9 10 // 传统方式 11 for (const auto\u0026 score : scores) { 12 std::cout \u003c\u003c score.first \u003c\u003c \": \" \u003c\u003c score.second \u003c\u003c \"\\n\"; 13 } 14 15 // 结构化绑定 16 for (const auto\u0026 [name, score] : scores) { 17 std::cout \u003c\u003c name \u003c\u003c \": \" \u003c\u003c score \u003c\u003c \"\\n\"; 18 } 19 20 return 0; 21} 场景2：解构多返回值（C++17+） ​ 解构多返回值 1#include \u003ctuple\u003e 2#include \u003cstring\u003e 3#include \u003ciostream\u003e 4 5// 返回多个值：学生姓名、成绩、排名 6std::tuple\u003cstd::string, double, int\u003e getStudentInfo(int id) { 7 return std::make_tuple(\"赵六\", 88.5, 3); 8} 9 10int main() { 11 // 传统解包方式 12 const auto\u0026 info = getStudentInfo(1); 13 std::string name = std::get\u003c0\u003e(info); 14 double score = std::get\u003c1\u003e(info); 15 int rank = std::get\u003c2\u003e(info); 16 17 // 结构化绑定 - 直观明了 18 const auto\u0026 [name2, score2, rank2] = getStudentInfo(1); 19 std::cout \u003c\u003c name2 \u003c\u003c \" - Score: \" \u003c\u003c score2 \u003c\u003c \", Rank: \" \u003c\u003c rank2 \u003c\u003c \"\\n\"; 20 21 return 0; 22} 场景3：处理结构体数据（C++17+） ​ 处理结构体数据 1#include \u003ciostream\u003e 2#include \u003cvector\u003e 3 4struct Point { 5 double x; 6 double y; 7 double z; 8}; 9 10std::vector\u003cPoint\u003e getPoints() { 11 return {{1.0, 2.0, 3.0}, {4.0, 5.0, 6.0}}; 12} 13 14int main() { 15 // 传统方式 - 冗长 16 const auto\u0026 points = getPoints(); 17 for (const auto\u0026 p : points) { 18 std::cout \u003c\u003c \"point (\" \u003c\u003c p.x \u003c\u003c \", \" \u003c\u003c p.y \u003c\u003c \", \" \u003c\u003c p.z \u003c\u003c \")\\n\"; 19 } 20 21 // 结构化绑定 - 简洁 22 for (const auto\u0026 [x, y, z] : getPoints()) { 23 std::cout \u003c\u003c \"point (\" \u003c\u003c x \u003c\u003c \", \" \u003c\u003c y \u003c\u003c \", \" \u003c\u003c z \u003c\u003c \")\\n\"; 24 } 25 26 return 0; 27} 场景4：数组解构（C++17+） ​ 数组解构 1#include \u003ciostream\u003e 2 3int main() { 4 int coordinates[3] = {10, 20, 30}; 5 6 // 解构数组元素 7 auto [x, y, z] = coordinates; 8 9 std::cout \u003c\u003c \"X: \" \u003c\u003c x \u003c\u003c \", Y: \" \u003c\u003c y \u003c\u003c \", Z: \" \u003c\u003c z \u003c\u003c \"\\n\"; 10 11 return 0; 12} 场景5：引用绑定修改原数据（C++17+） ​ 引用绑定修改原数据 1#include \u003ciostream\u003e 2#include \u003carray\u003e 3 4void modifyArray() { 5 std::array\u003cint, 3\u003e arr = {1, 2, 3}; 6 7 // 使用引用绑定直接修改元素 8 auto\u0026 [first, second, third] = arr; 9 first *= 10; 10 second *= 10; 11 third *= 10; 12 13 std::cout \u003c\u003c \"Modified: \" \u003c\u003c arr[0] \u003c\u003c \", \" 14 \u003c\u003c arr[1] \u003c\u003c \", \" \u003c\u003c arr[2] \u003c\u003c \"\\n\"; 15 // 输出: Modified: 10, 20, 30 16} 17 18int main() { 19 modifyArray(); 20 return 0; 21} 与if constexpr的协同应用 if constexpr的编译期条件判断 if constexpr是C++17的另一项重要特性，它在编译期评估条件，根据结果选择要编译的代码分支，未被选择的分支在编译时会被完全忽略。\n案例1：类型安全的统一接口（C++17+） ​ 类型安全的统一接口 1#include \u003ciostream\u003e 2#include \u003cvariant\u003e 3#include \u003cstring\u003e 4#include \u003cvector\u003e 5 6// 处理不同类型的容器，编译期选择最优算法 7template\u003ctypename T\u003e 8void processContainer(const T\u0026 container) { 9 if constexpr (std::is_same_v\u003cT, std::vector\u003cint\u003e\u003e) { 10 std::cout \u003c\u003c \"Processing vector\u003cint\u003e with optimized algorithm\\n\"; 11 auto [size, capacity] = std::make_pair( 12 container.size(), 13 container.capacity() 14 ); 15 std::cout \u003c\u003c \"Size: \" \u003c\u003c size \u003c\u003c \", Capacity: \" \u003c\u003c capacity \u003c\u003c \"\\n\"; 16 } 17 else if constexpr (std::is_same_v\u003cT, std::vector\u003cstd::string\u003e\u003e) { 18 std::cout \u003c\u003c \"Processing vector\u003cstring\u003e with string-specific logic\\n\"; 19 for (const auto\u0026 str : container) { 20 std::cout \u003c\u003c \"String length: \" \u003c\u003c str.length() \u003c\u003c \"\\n\"; 21 } 22 } 23 else { 24 std::cout \u003c\u003c \"Processing generic container\\n\"; 25 for (const auto\u0026 item : container) { 26 std::cout \u003c\u003c \"Item: \" \u003c\u003c item \u003c\u003c \"\\n\"; 27 } 28 } 29} 30 31int main() { 32 std::vector\u003cint\u003e intVec = {1, 2, 3}; 33 std::vector\u003cstd::string\u003e strVec = {\"Hello\", \"World\"}; 34 35 processContainer(intVec); // 编译期选择第一个分支 36 processContainer(strVec); // 编译期选择第二个分支 37 38 return 0; 39} 案例2：可变参数模板的类型分发（C++17+） 1#include \u003ciostream\u003e 2#include \u003ctuple\u003e 3#include \u003cstring\u003e 4 5// 递归展开参数包 6template\u003ctypename... Args\u003e 7void printArgs(Args... args) { 8 ([\u0026](auto\u0026\u0026 arg) { 9 if constexpr (std::is_integral_v\u003cstd::decay_t\u003cdecltype(arg)\u003e\u003e) { 10 std::cout \u003c\u003c \"Integer: \" \u003c\u003c arg \u003c\u003c \"\\n\"; 11 } 12 else if constexpr (std::is_floating_point_v\u003cstd::decay_t\u003cdecltype(arg)\u003e\u003e) { 13 std::cout \u003c\u003c \"Float: \" \u003c\u003c arg \u003c\u003c \"\\n\"; 14 } 15 else if constexpr (std::is_same_v\u003cstd::decay_t\u003cdecltype(arg)\u003e, std::string\u003e) { 16 std::cout \u003c\u003c \"String: \" \u003c\u003c arg \u003c\u003c \"\\n\"; 17 } 18 else { 19 std::cout \u003c\u003c \"Other type\\n\"; 20 } 21 }(args), ...); 22} 23 24// 结合结构化绑定处理返回的tuple 25template\u003ctypename Func, typename... Args\u003e 26auto invokeAndLog(Func func, Args... args) { 27 auto result = func(args...); 28 29 if constexpr (std::is_tuple_v\u003cdecltype(result)\u003e) { 30 std::cout \u003c\u003c \"Function returned tuple:\\n\"; 31 std::apply([](auto\u0026\u0026... parts) { 32 printArgs(parts...); 33 }, result); 34 } else { 35 std::cout \u003c\u003c \"Function returned: \" \u003c\u003c result \u003c\u003c \"\\n\"; 36 } 37 38 return result; 39} 40 41int main() { 42 // 测试可变参数 43 printArgs(42, 3.14, std::string(\"Hello\"), 'A'); 44 45 // 测试返回tuple的函数 46 auto divide = [](int a, int b) { 47 return std::make_tuple(a / b, a % b, static_cast\u003cdouble\u003e(a) / b); 48 }; 49 50 invokeAndLog(divide, 17, 5); 51 52 return 0; 53} 组合优势分析 结构化绑定与if constexpr的组合能够：\n提升可读性：代码意图一目了然，无需复杂的模板元编程技巧 执行效率：所有条件判断在编译期完成，零运行时开销 类型安全：编译期类型检查，避免运行时错误 代码简洁：相比SFINAE和类型traits的传统写法，代码量大幅减少 注意事项与最佳实践 常见陷阱及规避方法 陷阱1：误用拷贝绑定导致性能损失 1// 错误：对大对象使用拷贝绑定 2std::vector\u003cint\u003e largeVector = generateLargeVector(); 3auto [begin, end] = largeVector; // 意外的拷贝！ 4 5// 正确：使用引用绑定 6auto\u0026 [begin, end] = largeVector; // 零拷贝 规避方法：默认使用引用绑定（auto\u0026或const auto\u0026），仅在确实需要拷贝时使用默认的拷贝绑定。\n陷阱2：作用域理解错误 1struct Data { int x, y; }; 2Data getData() { return {1, 2}; } 3 4void example() { 5 if (true) { 6 auto [x, y] = getData(); 7 } 8 // 错误：x和y在此处不可访问 9 // std::cout \u003c\u003c x; // 编译错误 10} 规避方法：牢记结构化绑定的变量具有局部作用域，其生命周期从声明点开始，到所在块结束。\n陷阱3：修改绑定变量不影响原对象 1std::pair\u003cint, int\u003e p = {1, 2}; 2 3// 错误：拷贝绑定，修改不影响原对象 4auto [x, y] = p; 5x = 10; // 只修改了局部变量x，p.first仍为1 6 7// 正确：引用绑定，修改影响原对象 8auto\u0026 [x_ref, y_ref] = p; 9x_ref = 20; // p.first变为20 规避方法：根据是否需要修改原对象，明确选择拷贝绑定或引用绑定。\n陷阱4：与const修饰符的交互 1const std::pair\u003cint, int\u003e p = {1, 2}; 2 3// 正确：自动推导为const引用 4auto\u0026 [x, y] = p; 5// x = 10; // 编译错误：不能修改const对象 6 7// 正确：显式声明为const引用 8const auto\u0026 [cx, cy] = p; 编码建议 变量命名规范 1// 好的命名：语义清晰 2auto [userName, userId, userScore] = getUserInfo(); 3for (const auto\u0026 [city, population] : cityData) { 4 // ... 5} 6 7// 差的命名：失去结构化绑定的意义 8auto [a, b, c] = getUserInfo(); 9for (const auto\u0026 [x, y] : cityData) { 10 // ... 11} 作用域控制 1// 推荐：最小化作用域 2void processUserData() { 3 auto [name, age, score] = getUserData(); 4 // 仅在需要的地方使用这些变量 5 if (age \u003e 18) { 6 processAdult(name, score); 7 } 8} 9 10// 避免：不必要的扩大作用域 11auto [name, age, score] = getUserData(); 12// 大量无关代码... 13if (age \u003e 18) { 14 processAdult(name, score); 15} 版本兼容性处理 C++17之前的替代方案 1// C++17：结构化绑定 2auto [x, y] = getPair(); 3 4// C++14：std::tie 5int x, y; 6std::tie(x, y) = getPair(); 7 8// C++11：手动解包 9auto p = getPair(); 10int x = p.first; 11int y = p.second; 版本检测与条件编译 1#if __cplusplus \u003e= 201703L 2 // C++17及以上：使用结构化绑定 3 auto [name, age] = getPerson(); 4#else 5 // C++14及以下：使用传统方式 6 auto person = getPerson(); 7 auto\u0026 name = person.name; 8 auto\u0026 age = person.age; 9#endif",
    "description": "结构化绑定是C++17引入的一种语法特性，允许将一个复合对象（如pair、tuple、结构体、数组）的成员自动解构到多个变量中。它的设计目的是消除‘解包-使用-丢弃’的冗余代码模式。",
    "tags": [
      "C++"
    ],
    "title": "结构化绑定",
    "uri": "/%E6%8A%80%E6%9C%AF%E6%8A%80%E8%83%BD/c++/c++17/%E7%BB%93%E6%9E%84%E5%8C%96%E7%BB%91%E5%AE%9A/index.html"
  },
  {
    "breadcrumb": "暮鼓晨钟 \u003e 类别",
    "content": "",
    "description": "",
    "tags": [],
    "title": "类别 :: 编程",
    "uri": "/categories/%E7%BC%96%E7%A8%8B/index.html"
  }
]
