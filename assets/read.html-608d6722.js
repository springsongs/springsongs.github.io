import{_ as a,p as s,q as e,a1 as n}from"./framework-5866ffd3.js";const i={},l=n(`<h1 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h1><p>从键盘读取变量值</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>read命令</strong> 从键盘读取变量的值，通常用在shell脚本中与用户进行交互的场合。该命令可以一次读取多个变量的值，变量和输入的值都需要使用空格隔开。在read命令后面，如果没有指定变量名，读取的数据将被自动赋值给特定的变量REPLY</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>read<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-p：指定读取值时的提示符；
-t：指定读取值时等待的时间（秒）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>变量：指定读取值的变量名。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>下面的列表给出了read命令的常用方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> 1987name
从标准输入读取输入并赋值给变量1987name。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> first last
从标准输入读取输入到第一个空格或者回车，将输入的第一个单词放到变量first中，并将该行其他的输入放在变量last中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span>
从标准输入读取一行并赋值给特定变量<span class="token environment constant">REPLY</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-a</span> arrayname
把单词清单读入arrayname的数组里。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;text&quot;</span>
打印提示（text），等待输入，并将输入存储在<span class="token environment constant">REPLY</span>中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> line
允许输入包含反斜杠。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">3</span>
指定读取等待时间为3秒。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-n</span> <span class="token number">2</span> var
从输入中读取两个字符并存入变量var，不需要按回车读取。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;:&quot;</span> var
用定界符“:”结束输入行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="read命令示例" tabindex="-1"><a class="header-anchor" href="#read命令示例" aria-hidden="true">#</a> read命令示例</h2><p>从标准输入读取输入并赋值给变量1987name。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#read 1987name        #等待读取输入，直到回车后表示输入完毕，并将输入赋值给变量answer</span>
HelloWorld            <span class="token comment">#控制台输入Hello</span>

<span class="token comment">#echo $1987name       #打印变量</span>
HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等待一组输入，每个单词之间使用空格隔开，直到回车结束，并分别将单词依次赋值给这三个读入变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#read one two three</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>                   <span class="token comment">#在控制台输入1 2 3，它们之间用空格隔开。</span>

<span class="token comment">#echo &quot;one = $one, two = $two, three = $three&quot;</span>
one <span class="token operator">=</span> <span class="token number">1</span>, two <span class="token operator">=</span> <span class="token number">2</span>, three <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>REPLY示例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#read                  #等待控制台输入，并将结果赋值给特定内置变量REPLY。</span>
This is <span class="token environment constant">REPLY</span>          <span class="token comment">#在控制台输入该行。 </span>

<span class="token comment">#echo $REPLY           #打印输出特定内置变量REPLY，以确认是否被正确赋值。</span>

This is <span class="token environment constant">REPLY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-p选项示例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#read -p &quot;Enter your name: &quot;            #输出文本提示，同时等待输入，并将结果赋值给REPLY。</span>
Enter you name: stephen                 <span class="token comment">#在提示文本之后输入stephen</span>

<span class="token comment">#echo $REPLY</span>
stephen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等待控制台输入，并将输入信息视为数组，赋值给数组变量friends，输入信息用空格隔开数组的每个元素。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#read -a friends</span>
Tim Tom Helen

<span class="token comment">#echo &quot;They are \${friends[0]}, \${friends[1]} and \${friends[2]}.&quot;</span>
They are Tim, Tom and Helen.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充一个终端输入密码时候，不让密码显示出来的例子。</strong></p><p>方法1：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;输入密码：&quot;</span> <span class="token parameter variable">-s</span> <span class="token builtin class-name">pwd</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> password read, is <span class="token string">&quot;<span class="token variable">$pwd</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
stty <span class="token parameter variable">-echo</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;输入密码：&quot;</span> <span class="token builtin class-name">pwd</span>
stty <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> 输入完毕。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，选项<code>-echo</code>禁止将输出发送到终端，而选项<code>echo</code>则允许发送输出。</p><p>使用read命令从键盘读取变量值，并且将值赋给指定的变量，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> v1 v3          <span class="token comment">#读取变量值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的指令以后，要求键入两个数据，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Linux c+            <span class="token comment">#输入数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完成之后，可以使用echo命令将指定的变量值输出查看，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">$v1</span> <span class="token variable">$v3</span>       <span class="token comment">#输出变量的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行输出变量值的命令以后，将显示用户所输入的数据值，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Linux c+           <span class="token comment">#输出变量值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：使用echo命令输出变量值时，必须在变量名前添加符号<code>$</code>。否则，echo将直接输出变量名。</p>`,47),d=[l];function r(c,t){return s(),e("div",null,d)}const o=a(i,[["render",r],["__file","read.html.vue"]]);export{o as default};
