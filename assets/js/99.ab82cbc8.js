(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{394:function(s,a,e){"use strict";e.r(a);var t=e(4),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rsync-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsync-命令"}},[s._v("#")]),s._v(" rsync 命令")]),s._v(" "),a("blockquote",[a("p",[s._v("作者："),a("a",{attrs:{href:"https://wangdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("来自网道项目"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("本站地址："),a("a",{attrs:{href:"http://springsongs.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://springsongs.cn"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("rsync 是一个常用的 Linux 应用程序，用于文件同步。")]),s._v(" "),a("p",[s._v("它可以在本地计算机与远程计算机之间，或者两个本地目录之间同步文件（但不支持两台远程计算机之间的同步）。它也可以当作文件复制工具，替代"),a("code",[s._v("cp")]),s._v("和"),a("code",[s._v("mv")]),s._v("命令。")]),s._v(" "),a("p",[s._v("它名称里面的"),a("code",[s._v("r")]),s._v("指的是 remote，rsync 其实就是“远程同步”（remote sync）的意思。与其他文件传输工具（如 FTP 或 scp）不同，rsync 的最大特点是会检查发送方和接收方已有的文件，仅传输有变动的部分（默认规则是文件大小或修改时间有变动）。")]),s._v(" "),a("p",[s._v("虽然 rsync 不是 SSH 工具集的一部分，但因为也涉及到远程操作，所以放在这里一起介绍。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("如果本机或者远程计算机没有安装 rsync，可以用下面的命令安装。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debian")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Red Hat")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Arch Linux")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("注意，传输的双方都必须安装 rsync。")]),s._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),a("p",[s._v("rsync 可以用于本地计算机的两个目录之间的同步。下面就用本地同步举例，顺便讲解 rsync 几个主要参数的用法。")]),s._v(" "),a("h3",{attrs:{id:"r参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r参数"}},[s._v("#")]),s._v(" "),a("code",[s._v("-r")]),s._v("参数")]),s._v(" "),a("p",[s._v("本机使用 rsync 命令时，可以作为"),a("code",[s._v("cp")]),s._v("和"),a("code",[s._v("mv")]),s._v("命令的替代方法，将源目录拷贝到目标目录。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("-r")]),s._v("表示递归，即包含子目录。注意，"),a("code",[s._v("-r")]),s._v("是必须的，否则 rsync 运行不会成功。"),a("code",[s._v("source")]),s._v("目录表示源目录，"),a("code",[s._v("destination")]),s._v("表示目标目录。上面命令执行以后，目标目录下就会出现"),a("code",[s._v("destination/source")]),s._v("这个子目录。")]),s._v(" "),a("p",[s._v("如果有多个文件或目录需要同步，可以写成下面这样。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" source1 source2 destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("source1")]),s._v("、"),a("code",[s._v("source2")]),s._v("都会被同步到"),a("code",[s._v("destination")]),s._v("目录。")]),s._v(" "),a("h3",{attrs:{id:"a参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a参数"}},[s._v("#")]),s._v(" "),a("code",[s._v("-a")]),s._v("参数")]),s._v(" "),a("p",[a("code",[s._v("-a")]),s._v("参数可以替代"),a("code",[s._v("-r")]),s._v("，除了可以递归同步以外，还可以同步元信息（比如修改时间、权限等）。由于 rsync 默认使用文件大小和修改时间决定文件是否需要更新，所以"),a("code",[s._v("-a")]),s._v("比"),a("code",[s._v("-r")]),s._v("更有用。下面的用法才是常见的写法。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("目标目录"),a("code",[s._v("destination")]),s._v("如果不存在，rsync 会自动创建。执行上面的命令后，源目录"),a("code",[s._v("source")]),s._v("被完整地复制到了目标目录"),a("code",[s._v("destination")]),s._v("下面，即形成了"),a("code",[s._v("destination/source")]),s._v("的目录结构。")]),s._v(" "),a("p",[s._v("如果只想同步源目录"),a("code",[s._v("source")]),s._v("里面的内容到目标目录"),a("code",[s._v("destination")]),s._v("，则需要在源目录后面加上斜杠。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令执行后，"),a("code",[s._v("source")]),s._v("目录里面的内容，就都被复制到了"),a("code",[s._v("destination")]),s._v("目录里面，并不会在"),a("code",[s._v("destination")]),s._v("下面创建一个"),a("code",[s._v("source")]),s._v("子目录。")]),s._v(" "),a("h3",{attrs:{id:"n参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#n参数"}},[s._v("#")]),s._v(" "),a("code",[s._v("-n")]),s._v("参数")]),s._v(" "),a("p",[s._v("如果不确定 rsync 执行后会产生什么结果，可以先用"),a("code",[s._v("-n")]),s._v("或"),a("code",[s._v("--dry-run")]),s._v("参数模拟执行的结果。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-anv")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("-n")]),s._v("参数模拟命令执行的结果，并不真的执行命令。"),a("code",[s._v("-v")]),s._v("参数则是将结果输出到终端，这样就可以看到哪些内容会被同步。")]),s._v(" "),a("h3",{attrs:{id:"delete参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete参数"}},[s._v("#")]),s._v(" "),a("code",[s._v("--delete")]),s._v("参数")]),s._v(" "),a("p",[s._v("默认情况下，rsync 只确保源目录的所有内容（明确排除的文件除外）都复制到目标目录。它不会使两个目录保持相同，并且不会删除文件。如果要使得目标目录成为源目录的镜像副本，则必须使用"),a("code",[s._v("--delete")]),s._v("参数，这将删除只存在于目标目录、不存在于源目录的文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("--delete")]),s._v("参数会使得"),a("code",[s._v("destination")]),s._v("成为"),a("code",[s._v("source")]),s._v("的一个镜像。")]),s._v(" "),a("h2",{attrs:{id:"排除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排除文件"}},[s._v("#")]),s._v(" 排除文件")]),s._v(" "),a("h3",{attrs:{id:"exclude参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exclude参数"}},[s._v("#")]),s._v(" "),a("code",[s._v("--exclude")]),s._v("参数")]),s._v(" "),a("p",[s._v("有时，我们希望同步时排除某些文件或目录，这时可以用"),a("code",[s._v("--exclude")]),s._v("参数指定排除模式。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.txt'")]),s._v(" source/ destination\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.txt'")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面命令排除了所有 TXT 文件。")]),s._v(" "),a("p",[s._v("注意，rsync 会同步以“点”开头的隐藏文件，如果要排除隐藏文件，可以这样写"),a("code",[s._v('--exclude=".*"')]),s._v("。")]),s._v(" "),a("p",[s._v("如果要排除某个目录里面的所有文件，但不希望排除目录本身，可以写成下面这样。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dir1/*'")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("多个排除模式，可以用多个"),a("code",[s._v("--exclude")]),s._v("参数。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file1.txt'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dir1/*'")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("多个排除模式也可以利用 Bash 的大扩号的扩展功能，只用一个"),a("code",[s._v("--exclude")]),s._v("参数。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file1.txt'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dir1/*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果排除模式很多，可以将它们写入一个文件，每个模式一行，然后用"),a("code",[s._v("--exclude-from")]),s._v("参数指定这个文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" --exclude-from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exclude-file.txt'")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"include参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include参数"}},[s._v("#")]),s._v(" "),a("code",[s._v("--include")]),s._v("参数")]),s._v(" "),a("p",[a("code",[s._v("--include")]),s._v("参数用来指定必须同步的文件模式，往往与"),a("code",[s._v("--exclude")]),s._v("结合使用。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--include")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v(" source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令指定同步时，排除所有文件，但是会包括 TXT 文件。")]),s._v(" "),a("h2",{attrs:{id:"远程同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程同步"}},[s._v("#")]),s._v(" 远程同步")]),s._v(" "),a("h3",{attrs:{id:"ssh-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-协议"}},[s._v("#")]),s._v(" SSH 协议")]),s._v(" "),a("p",[s._v("rsync 除了支持本地两个目录之间的同步，也支持远程同步。它可以将本地内容，同步到远程服务器。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" source/ username@remote_host:destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以将远程内容同步到本地。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" username@remote_host:source/ destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("rsync 默认使用 SSH 进行远程登录和数据传输。")]),s._v(" "),a("p",[s._v("由于早期 rsync 不使用 SSH 协议，需要用"),a("code",[s._v("-e")]),s._v("参数指定协议，后来才改的。所以，下面"),a("code",[s._v("-e ssh")]),s._v("可以省略。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" source/ user@remote_host:/destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是，如果 ssh 命令有附加的参数，则必须使用"),a("code",[s._v("-e")]),s._v("参数指定所要执行的 SSH 命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ssh -p 2234'")]),s._v(" source/ user@remote_host:/destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("-e")]),s._v("参数指定 SSH 使用2234端口。")]),s._v(" "),a("h3",{attrs:{id:"rsync-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsync-协议"}},[s._v("#")]),s._v(" rsync 协议")]),s._v(" "),a("p",[s._v("除了使用 SSH，如果另一台服务器安装并运行了 rsync 守护程序，则也可以用"),a("code",[s._v("rsync://")]),s._v("协议（默认端口873）进行传输。具体写法是服务器与目标目录之间使用双冒号分隔"),a("code",[s._v("::")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" source/ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".122.32::module/destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意，上面地址中的"),a("code",[s._v("module")]),s._v("并不是实际路径名，而是 rsync 守护程序指定的一个资源名，由管理员分配。")]),s._v(" "),a("p",[s._v("如果想知道 rsync 守护程序分配的所有 module 列表，可以执行下面命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" rsync://192.168.122.32\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("rsync 协议除了使用双冒号，也可以直接用"),a("code",[s._v("rsync://")]),s._v("协议指定地址。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" source/ rsync://192.168.122.32/module/destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"增量备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增量备份"}},[s._v("#")]),s._v(" 增量备份")]),s._v(" "),a("p",[s._v("rsync 的最大特点就是它可以完成增量备份，也就是默认只复制有变动的文件。")]),s._v(" "),a("p",[s._v("除了源目录与目标目录直接比较，rsync 还支持使用基准目录，即将源目录与基准目录之间变动的部分，同步到目标目录。")]),s._v(" "),a("p",[s._v("具体做法是，第一次同步是全量备份，所有文件在基准目录里面同步一份。以后每一次同步都是增量备份，只同步源目录与基准目录之间有变动的部分，将这部分保存在一个新的目标目录。这个新的目标目录之中，也是包含所有文件，但实际上，只有那些变动过的文件是存在于该目录，其他没有变动的文件都是指向基准目录文件的硬链接。")]),s._v(" "),a("p",[a("code",[s._v("--link-dest")]),s._v("参数用来指定同步时的基准目录。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" --link-dest /compare/path /source/path /target/path\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("--link-dest")]),s._v("参数指定基准目录"),a("code",[s._v("/compare/path")]),s._v("，然后源目录"),a("code",[s._v("/source/path")]),s._v("跟基准目录进行比较，找出变动的文件，将它们拷贝到目标目录"),a("code",[s._v("/target/path")]),s._v("。那些没变动的文件则会生成硬链接。这个命令的第一次备份时是全量备份，后面就都是增量备份了。")]),s._v(" "),a("p",[s._v("下面是一个脚本示例，备份用户的主目录。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A script to perform incremental backups using rsync")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" errexit\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" nounset\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" pipefail\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SOURCE_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BACKUP_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/mnt/data/backups"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATETIME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y-%m-%d_%H:%M:%S'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BACKUP_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BACKUP_DIR}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DATETIME}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LATEST_LINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BACKUP_DIR}")]),s._v('/latest"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BACKUP_DIR}")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCE_DIR}")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --link-dest "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LATEST_LINK}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".cache"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BACKUP_PATH}")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LATEST_LINK}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BACKUP_PATH}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LATEST_LINK}")]),s._v('"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("上面脚本中，每一次同步都会生成一个新目录"),a("code",[s._v("${BACKUP_DIR}/${DATETIME}")]),s._v("，并将软链接"),a("code",[s._v("${BACKUP_DIR}/latest")]),s._v("指向这个目录。下一次备份时，就将"),a("code",[s._v("${BACKUP_DIR}/latest")]),s._v("作为基准目录，生成新的备份目录。最后，再将软链接"),a("code",[s._v("${BACKUP_DIR}/latest")]),s._v("指向新的备份目录。")]),s._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("p",[a("code",[s._v("-a")]),s._v("、"),a("code",[s._v("--archive")]),s._v("参数表示存档模式，保存所有的元数据，比如修改时间（modification time）、权限、所有者等，并且软链接也会同步过去。")]),s._v(" "),a("p",[a("code",[s._v("--append")]),s._v("参数指定文件接着上次中断的地方，继续传输。")]),s._v(" "),a("p",[a("code",[s._v("--append-verify")]),s._v("参数跟"),a("code",[s._v("--append")]),s._v("参数类似，但会对传输完成后的文件进行一次校验。如果校验失败，将重新发送整个文件。")]),s._v(" "),a("p",[a("code",[s._v("-b")]),s._v("、"),a("code",[s._v("--backup")]),s._v("参数指定在删除或更新目标目录已经存在的文件时，将该文件更名后进行备份，默认行为是删除。更名规则是添加由"),a("code",[s._v("--suffix")]),s._v("参数指定的文件后缀名，默认是"),a("code",[s._v("~")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("--backup-dir")]),s._v("参数指定文件备份时存放的目录，比如"),a("code",[s._v("--backup-dir=/path/to/backups")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("--bwlimit")]),s._v("参数指定带宽限制，默认单位是 KB/s，比如"),a("code",[s._v("--bwlimit=100")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("-c")]),s._v("、"),a("code",[s._v("--checksum")]),s._v("参数改变"),a("code",[s._v("rsync")]),s._v("的校验方式。默认情况下，rsync 只检查文件的大小和最后修改日期是否发生变化，如果发生变化，就重新传输；使用这个参数以后，则通过判断文件内容的校验和，决定是否重新传输。")]),s._v(" "),a("p",[a("code",[s._v("--delete")]),s._v("参数删除只存在于目标目录、不存在于源目标的文件，即保证目标目录是源目标的镜像。")]),s._v(" "),a("p",[a("code",[s._v("-e")]),s._v("参数指定使用 SSH 协议传输数据。")]),s._v(" "),a("p",[a("code",[s._v("--exclude")]),s._v("参数指定排除不进行同步的文件，比如"),a("code",[s._v('--exclude="*.iso"')]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("--exclude-from")]),s._v("参数指定一个本地文件，里面是需要排除的文件模式，每个模式一行。")]),s._v(" "),a("p",[a("code",[s._v("--existing")]),s._v("、"),a("code",[s._v("--ignore-non-existing")]),s._v("参数表示不同步目标目录中不存在的文件和目录。")]),s._v(" "),a("p",[a("code",[s._v("-h")]),s._v("参数表示以人类可读的格式输出。")]),s._v(" "),a("p",[a("code",[s._v("-h")]),s._v("、"),a("code",[s._v("--help")]),s._v("参数返回帮助信息。")]),s._v(" "),a("p",[a("code",[s._v("-i")]),s._v("参数表示输出源目录与目标目录之间文件差异的详细情况。")]),s._v(" "),a("p",[a("code",[s._v("--ignore-existing")]),s._v("参数表示只要该文件在目标目录中已经存在，就跳过去，不再同步这些文件。")]),s._v(" "),a("p",[a("code",[s._v("--include")]),s._v("参数指定同步时要包括的文件，一般与"),a("code",[s._v("--exclude")]),s._v("结合使用。")]),s._v(" "),a("p",[a("code",[s._v("--link-dest")]),s._v("参数指定增量备份的基准目录。")]),s._v(" "),a("p",[a("code",[s._v("-m")]),s._v("参数指定不同步空目录。")]),s._v(" "),a("p",[a("code",[s._v("--max-size")]),s._v("参数设置传输的最大文件的大小限制，比如不超过200KB（"),a("code",[s._v("--max-size='200k'")]),s._v("）。")]),s._v(" "),a("p",[a("code",[s._v("--min-size")]),s._v("参数设置传输的最小文件的大小限制，比如不小于10KB（"),a("code",[s._v("--min-size=10k")]),s._v("）。")]),s._v(" "),a("p",[a("code",[s._v("-n")]),s._v("参数或"),a("code",[s._v("--dry-run")]),s._v("参数模拟将要执行的操作，而并不真的执行。配合"),a("code",[s._v("-v")]),s._v("参数使用，可以看到哪些内容会被同步过去。")]),s._v(" "),a("p",[a("code",[s._v("-P")]),s._v("参数是"),a("code",[s._v("--progress")]),s._v("和"),a("code",[s._v("--partial")]),s._v("这两个参数的结合。")]),s._v(" "),a("p",[a("code",[s._v("--partial")]),s._v("参数允许恢复中断的传输。不使用该参数时，"),a("code",[s._v("rsync")]),s._v("会删除传输到一半被打断的文件；使用该参数后，传输到一半的文件也会同步到目标目录，下次同步时再恢复中断的传输。一般需要与"),a("code",[s._v("--append")]),s._v("或"),a("code",[s._v("--append-verify")]),s._v("配合使用。")]),s._v(" "),a("p",[a("code",[s._v("--partial-dir")]),s._v("参数指定将传输到一半的文件保存到一个临时目录，比如"),a("code",[s._v("--partial-dir=.rsync-partial")]),s._v("。一般需要与"),a("code",[s._v("--append")]),s._v("或"),a("code",[s._v("--append-verify")]),s._v("配合使用。")]),s._v(" "),a("p",[a("code",[s._v("--progress")]),s._v("参数表示显示进展。")]),s._v(" "),a("p",[a("code",[s._v("-r")]),s._v("参数表示递归，即包含子目录。")]),s._v(" "),a("p",[a("code",[s._v("--remove-source-files")]),s._v("参数表示传输成功后，删除发送方的文件。")]),s._v(" "),a("p",[a("code",[s._v("--size-only")]),s._v("参数表示只同步大小有变化的文件，不考虑文件修改时间的差异。")]),s._v(" "),a("p",[a("code",[s._v("--suffix")]),s._v("参数指定文件名备份时，对文件名添加的后缀，默认是"),a("code",[s._v("~")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("-u")]),s._v("、"),a("code",[s._v("--update")]),s._v("参数表示同步时跳过目标目录中修改时间更新的文件，即不同步这些有更新的时间戳的文件。")]),s._v(" "),a("p",[a("code",[s._v("-v")]),s._v("参数表示输出细节。"),a("code",[s._v("-vv")]),s._v("表示输出更详细的信息，"),a("code",[s._v("-vvv")]),s._v("表示输出最详细的信息。")]),s._v(" "),a("p",[a("code",[s._v("--version")]),s._v("参数返回 rsync 的版本。")]),s._v(" "),a("p",[a("code",[s._v("-z")]),s._v("参数指定同步时压缩数据。")]),s._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps",target:"_blank",rel:"noopener noreferrer"}},[s._v("How To Use Rsync to Sync Local and Remote Directories on a VPS"),a("OutboundLink")],1),s._v(", Justin Ellingwood")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.howtoforge.com/mirroring_with_rsync",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mirror Your Web Site With rsync"),a("OutboundLink")],1),s._v(", Falko Timme")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://linuxconfig.org/examples-on-how-to-use-rsync-for-local-and-remote-data-backups-and-synchonization",target:"_blank",rel:"noopener noreferrer"}},[s._v("Examples on how to use Rsync"),a("OutboundLink")],1),s._v(", Egidio Docile")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://linuxconfig.org/how-to-create-incremental-backups-using-rsync-on-linux",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to create incremental backups using rsync on Linux"),a("OutboundLink")],1),s._v(", Egidio Docile")])])])}),[],!1,null,null,null);a.default=r.exports}}]);