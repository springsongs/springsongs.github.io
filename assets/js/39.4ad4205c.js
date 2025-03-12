(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{333:function(s,a,e){"use strict";e.r(a);var v=e(4),_=Object(v.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"命令提示符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令提示符"}},[s._v("#")]),s._v(" 命令提示符")]),s._v(" "),a("blockquote",[a("p",[s._v("作者："),a("a",{attrs:{href:"https://wangdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("来自网道项目"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("本站地址："),a("a",{attrs:{href:"http://springsongs.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://springsongs.cn"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("用户进入 Bash 以后，Bash 会显示一个命令提示符，用来提示用户在该位置后面输入命令。")]),s._v(" "),a("h2",{attrs:{id:"环境变量-ps1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-ps1"}},[s._v("#")]),s._v(" 环境变量 PS1")]),s._v(" "),a("p",[s._v("命令提示符通常是美元符号"),a("code",[s._v("$")]),s._v("，对于根用户则是井号"),a("code",[s._v("#")]),s._v("。这个符号是环境变量"),a("code",[s._v("PS1")]),s._v("决定的，执行下面的命令，可以看到当前命令提示符的定义。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PS1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Bash 允许用户自定义命令提示符，只要改写这个变量即可。改写后的"),a("code",[s._v("PS1")]),s._v("，可以放在用户的 Bash 配置文件"),a("code",[s._v(".bashrc")]),s._v("里面，以后新建 Bash 对话时，新的提示符就会生效。要在当前窗口看到修改后的提示符，可以执行下面的命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命令提示符的定义，可以包含特殊的转义字符，表示特定内容。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("\\a")]),s._v("：响铃，计算机发出一记声音。")]),s._v(" "),a("li",[a("code",[s._v("\\d")]),s._v("：以星期、月、日格式表示当前日期，例如“Mon May 26”。")]),s._v(" "),a("li",[a("code",[s._v("\\h")]),s._v("：本机的主机名。")]),s._v(" "),a("li",[a("code",[s._v("\\H")]),s._v("：完整的主机名。")]),s._v(" "),a("li",[a("code",[s._v("\\j")]),s._v("：运行在当前 Shell 会话的工作数。")]),s._v(" "),a("li",[a("code",[s._v("\\l")]),s._v("：当前终端设备名。")]),s._v(" "),a("li",[a("code",[s._v("\\n")]),s._v("：一个换行符。")]),s._v(" "),a("li",[a("code",[s._v("\\r")]),s._v("：一个回车符。")]),s._v(" "),a("li",[a("code",[s._v("\\s")]),s._v("：Shell 的名称。")]),s._v(" "),a("li",[a("code",[s._v("\\t")]),s._v("：24小时制的"),a("code",[s._v("hours:minutes:seconds")]),s._v("格式表示当前时间。")]),s._v(" "),a("li",[a("code",[s._v("\\T")]),s._v("：12小时制的当前时间。")]),s._v(" "),a("li",[a("code",[s._v("\\@")]),s._v("：12小时制的"),a("code",[s._v("AM/PM")]),s._v("格式表示当前时间。")]),s._v(" "),a("li",[a("code",[s._v("\\A")]),s._v("：24小时制的"),a("code",[s._v("hours:minutes")]),s._v("表示当前时间。")]),s._v(" "),a("li",[a("code",[s._v("\\u")]),s._v("：当前用户名。")]),s._v(" "),a("li",[a("code",[s._v("\\v")]),s._v("：Shell 的版本号。")]),s._v(" "),a("li",[a("code",[s._v("\\V")]),s._v("：Shell 的版本号和发布号。")]),s._v(" "),a("li",[a("code",[s._v("\\w")]),s._v("：当前的工作路径。")]),s._v(" "),a("li",[a("code",[s._v("\\W")]),s._v("：当前目录名。")]),s._v(" "),a("li",[a("code",[s._v("\\!")]),s._v("：当前命令在命令历史中的编号。")]),s._v(" "),a("li",[a("code",[s._v("\\#")]),s._v("：当前 shell 会话中的命令数。")]),s._v(" "),a("li",[a("code",[s._v("\\$")]),s._v("：普通用户显示为"),a("code",[s._v("$")]),s._v("字符，根用户显示为"),a("code",[s._v("#")]),s._v("字符。")]),s._v(" "),a("li",[a("code",[s._v("\\[")]),s._v("：非打印字符序列的开始标志。")]),s._v(" "),a("li",[a("code",[s._v("\\]")]),s._v("：非打印字符序列的结束标志。")])]),s._v(" "),a("p",[s._v("举例来说，"),a("code",[s._v("[\\u@\\h \\W]\\$")]),s._v("这个提示符定义，显示出来就是"),a("code",[s._v("[user@host ~]$")]),s._v("（具体的显示内容取决于你的系统）。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PS1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("u@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("h "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("W"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("改写"),a("code",[s._v("PS1")]),s._v("变量，就可以改变这个命令提示符。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\A \\h \\$ "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":33 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" $\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注意，"),a("code",[s._v("$")]),s._v("后面最好跟一个空格，这样的话，用户的输入与提示符就不会连在一起。")]),s._v(" "),a("h2",{attrs:{id:"颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色"}},[s._v("#")]),s._v(" 颜色")]),s._v(" "),a("p",[s._v("默认情况下，命令提示符是显示终端预定义的颜色。Bash 允许自定义提示符颜色。")]),s._v(" "),a("p",[s._v("使用下面的代码，可以设定其后文本的颜色。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("\\033[0;30m")]),s._v("：黑色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;30m")]),s._v("：深灰色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;31m")]),s._v("：红色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;31m")]),s._v("：浅红色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;32m")]),s._v("：绿色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;32m")]),s._v("：浅绿色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;33m")]),s._v("：棕色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;33m")]),s._v("：黄色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;34m")]),s._v("：蓝色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;34m")]),s._v("：浅蓝色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;35m")]),s._v("：粉红")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;35m")]),s._v("：浅粉色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;36m")]),s._v("：青色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;36m")]),s._v("：浅青色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;37m")]),s._v("：浅灰色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;37m")]),s._v("：白色")])]),s._v(" "),a("p",[s._v("举例来说，如果要将提示符设为红色，可以将"),a("code",[s._v("PS1")]),s._v("设成下面的代码。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\033[0;31m\\]<\\u@\\h \\W>\\$'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是，上面这样设置以后，用户在提示符后面输入的文本也是红色的。为了解决这个问题， 可以在结尾添加另一个特殊代码"),a("code",[s._v("\\[\\033[00m\\]")]),s._v("，表示将其后的文本恢复到默认颜色。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\033[0;31m\\]<\\u@\\h \\W>\\$\\[\\033[00m\\]'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("除了设置前景颜色，Bash 还允许设置背景颜色。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("\\033[0;40m")]),s._v("：蓝色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;44m")]),s._v("：黑色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;41m")]),s._v("：红色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;45m")]),s._v("：粉红")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;42m")]),s._v("：绿色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;46m")]),s._v("：青色")]),s._v(" "),a("li",[a("code",[s._v("\\033[0;43m")]),s._v("：棕色")]),s._v(" "),a("li",[a("code",[s._v("\\033[1;47m")]),s._v("：浅灰色")])]),s._v(" "),a("p",[s._v("下面是一个带有红色背景的提示符。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\033[0;41m\\]<\\u@\\h \\W>\\$\\[\\033[0m\\] '")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"环境变量-ps2-ps3-ps4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-ps2-ps3-ps4"}},[s._v("#")]),s._v(" 环境变量 PS2，PS3，PS4")]),s._v(" "),a("p",[s._v("除了"),a("code",[s._v("PS1")]),s._v("，Bash 还提供了提示符相关的另外三个环境变量。")]),s._v(" "),a("p",[s._v("环境变量"),a("code",[s._v("PS2")]),s._v("是命令行折行输入时系统的提示符，默认为"),a("code",[s._v(">")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello\n> world"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面命令中，输入"),a("code",[s._v("hello")]),s._v("以后按下回车键，系统会提示继续输入。这时，第二行显示的提示符就是"),a("code",[s._v("PS2")]),s._v("定义的"),a("code",[s._v(">")]),s._v("。")]),s._v(" "),a("p",[s._v("环境变量"),a("code",[s._v("PS3")]),s._v("是使用"),a("code",[s._v("select")]),s._v("命令时，系统输入菜单的提示符。")]),s._v(" "),a("p",[s._v("环境变量"),a("code",[s._v("PS4")]),s._v("默认为"),a("code",[s._v("+")]),s._v("。它是使用 Bash 的"),a("code",[s._v("-x")]),s._v("参数执行脚本时，每一行命令在执行前都会先打印出来，并且在行首出现的那个提示符。")]),s._v(" "),a("p",[s._v("比如下面是脚本"),a("code",[s._v("test.sh")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("使用"),a("code",[s._v("-x")]),s._v("参数执行这个脚本。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" test.sh\n+ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),s._v("\nhello world\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面例子中，输出的第一行前面有一个"),a("code",[s._v("+")]),s._v("，这就是变量"),a("code",[s._v("PS4")]),s._v("定义的。")])])}),[],!1,null,null,null);a.default=_.exports}}]);