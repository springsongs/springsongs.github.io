import{_ as n,M as e,p as i,q as l,R as a,t as r,N as t,Q as c,a1 as d}from"./framework-5866ffd3.js";const p={},o=d(`<h1 id="xargs" tabindex="-1"><a class="header-anchor" href="#xargs" aria-hidden="true">#</a> xargs</h1><p>给其他命令传递参数的一个过滤器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>xargs 命令</strong> 是给其他命令传递参数的一个过滤器，也是组合多个命令的一个工具。它擅长将标准输入数据转换成命令行参数，xargs 能够处理管道或者 stdin 并将其转换成特定命令的命令参数。xargs 也可以将单行或多行文本输入转换为其他格式，例如多行变单行，单行变多行。xargs 的默认命令是 echo，空格是默认定界符。这意味着通过管道传递给 xargs 的输入将会包含换行和空白，不过通过 xargs 的处理，换行和空白将被空格取代。xargs 是构建单行命令的重要组件之一。</p><h3 id="xargs-命令用法" tabindex="-1"><a class="header-anchor" href="#xargs-命令用法" aria-hidden="true">#</a> xargs 命令用法</h3><p>xargs 用作替换工具，读取输入数据重新格式化后输出。</p><p>定义一个测试文件，内有多行文本数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> test.txt

a b c d e f g
h i j k l m n
o p q
r s t
u <span class="token function">v</span> w x y z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行输入单行输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">xargs</span>

a b c d e f g h i j k l m n o p q r s t u <span class="token function">v</span> w x y z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-n-进行多行输出" tabindex="-1"><a class="header-anchor" href="#使用-n-进行多行输出" aria-hidden="true">#</a> 使用 -n 进行多行输出</h4><p><strong>-n 选项</strong> 多行输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n3</span>

a b c
d e f
g h i
j k l
m n o
p q r
s t u
<span class="token function">v</span> w x
y z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-d-分割输入" tabindex="-1"><a class="header-anchor" href="#使用-d-分割输入" aria-hidden="true">#</a> 使用 -d 分割输入</h4><p><strong>-d 选项</strong> 可以自定义一个定界符：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;nameXnameXnameXname&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-dX</span>

name name name name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合 <strong>-n 选项</strong> 使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;nameXnameXnameXname&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-dX</span> <span class="token parameter variable">-n2</span>

name name
name name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读取-stdin" tabindex="-1"><a class="header-anchor" href="#读取-stdin" aria-hidden="true">#</a> 读取 stdin</h4><p><strong>读取 stdin，将格式化后的参数传递给命令</strong></p><p>假设一个命令为 sk.sh 和一个保存参数的文件 arg.txt：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#sk.sh 命令内容，打印出所有参数。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>arg.txt 文件内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> arg.txt

aaa
bbb
ccc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结合-i-选项" tabindex="-1"><a class="header-anchor" href="#结合-i-选项" aria-hidden="true">#</a> 结合 -I 选项</h4><p>xargs 的一个 <strong>选项 -I</strong> ，使用 -I 指定一个替换字符串{}，这个字符串在 xargs 扩展时会被替换掉，当 -I 与 xargs 结合使用，每一个参数命令都会被执行一次：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> arg.txt <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> ./sk.sh <span class="token parameter variable">-p</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token parameter variable">-l</span>

<span class="token parameter variable">-p</span> aaa <span class="token parameter variable">-l</span>
<span class="token parameter variable">-p</span> bbb <span class="token parameter variable">-l</span>
<span class="token parameter variable">-p</span> ccc <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制所有图片文件到 /data/images 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> *.jpg <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> <span class="token parameter variable">-I</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /data/images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="结合-find-命令使用" tabindex="-1"><a class="header-anchor" href="#结合-find-命令使用" aria-hidden="true">#</a> 结合 find 命令使用</h4><p><strong>xargs 结合 find 使用</strong></p><p>用 rm 删除太多的文件时候，可能得到一个错误信息：<code>/bin/rm Argument list too long</code>. 用 <code>xargs</code> 去避免这个问题：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.log&quot;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>xargs -0 将 <code>\\0</code> 作为定界符。</p><p>统计一个源代码目录中所有 php 文件的行数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.php&quot;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找所有的 jpg 文件，并且压缩它们：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.jpg&quot;</span> <span class="token parameter variable">-print</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">tar</span> <span class="token parameter variable">-czvf</span> images.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="打印出执行的命令" tabindex="-1"><a class="header-anchor" href="#打印出执行的命令" aria-hidden="true">#</a> 打印出执行的命令</h4><p>结合 <code>-t</code> 选项可以打印出 <code>xargs</code> 执行的命令</p><pre><code>ls | xargs -t -I{} echo {}
</code></pre><p>会输出当前目录下的文件列表和执行的 echo 命令</p><h4 id="使用-p-选项确认执行的命令" tabindex="-1"><a class="header-anchor" href="#使用-p-选项确认执行的命令" aria-hidden="true">#</a> 使用 -p 选项确认执行的命令</h4><p><code>-p</code> 选项会在执行每一个命令时弹出确认，当你需要非常准确的确认每一次操作时可以使用 <code>-p</code> 参数，比如，查找当前目录下 <code>.log</code> 文件，每一次删除都需要确认：</p><pre><code>find . -maxdepth 1 -name &quot;*.log&quot; | xargs -p -I{} rm {}
</code></pre><h4 id="执行多个命令" tabindex="-1"><a class="header-anchor" href="#执行多个命令" aria-hidden="true">#</a> 执行多个命令</h4><p>使用 <code>-I</code> 选项可以让 <code>xargs</code> 执行多个命令</p><pre><code>cat foo.txt
one
two
three

cat foo.txt | xargs -I % sh -c &#39;echo %; mkdir %&#39;
one
two
three

ls
one two three
</code></pre><h4 id="其他应用" tabindex="-1"><a class="header-anchor" href="#其他应用" aria-hidden="true">#</a> 其他应用</h4><p><strong>xargs 其他应用</strong></p><p>假如你有一个文件包含了很多你希望下载的 URL，你能够使用 xargs 下载所有链接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> url-list.txt <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">wget</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="子-shell-subshells" tabindex="-1"><a class="header-anchor" href="#子-shell-subshells" aria-hidden="true">#</a> 子 Shell（Subshells）</h3><p>运行一个 shell 脚本时会启动另一个命令解释器.，就好像你的命令是在命令行提示下被解释的一样，类似于批处理文件里的一系列命令。每个 shell 脚本有效地运行在父 shell(parent shell) 的一个子进程里。这个父 shell 是指在一个控制终端或在一个 xterm 窗口中给你命令指示符的进程。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cmd1 <span class="token operator">|</span> <span class="token punctuation">(</span> cmd2<span class="token punctuation">;</span> cmd3<span class="token punctuation">;</span> cmd4 <span class="token punctuation">)</span> <span class="token operator">|</span> cmd5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果 cmd2 是 cd /，那么就会改变子 Shell 的工作目录，这种改变只是局限于子 shell 内部，cmd5 则完全不知道工作目录发生的变化。子 shell 是嵌在圆括号 () 内部的命令序列，子 Shell 内部定义的变量为局部变量。</p><p>子 shell 可用于为一组命令设定临时的环境变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COMMAND1
COMMAND2
COMMAND3
<span class="token punctuation">(</span>
  <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
  <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin
  <span class="token builtin class-name">unset</span> TERMINFO
  <span class="token builtin class-name">set</span> <span class="token parameter variable">-C</span>
  <span class="token builtin class-name">shift</span> <span class="token number">5</span>
  COMMAND4
  COMMAND5
  <span class="token builtin class-name">exit</span> <span class="token number">3</span> <span class="token comment"># 只是从子 shell 退出。</span>
<span class="token punctuation">)</span>
<span class="token comment"># 父 shell 不受影响，变量值没有更改。</span>
COMMAND6
COMMAND7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>`,59),u={href:"https://shapeshed.com/unix-xargs/",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=e("ExternalLinkIcon");return i(),l("div",null,[o,a("ul",null,[a("li",null,[a("a",u,[r("https://shapeshed.com/unix-xargs/"),t(s)])])]),c(" Linux 命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ ")])}const g=n(p,[["render",v],["__file","xargs.html.vue"]]);export{g as default};
