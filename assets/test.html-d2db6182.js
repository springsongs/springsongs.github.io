import{_ as r,M as l,p as t,q as i,R as a,t as e,N as s,a1 as p}from"./framework-5866ffd3.js";const c={},d=p(`<h1 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h1><p>执行条件表达式。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">test</span> <span class="token punctuation">[</span>expr<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>执行条件表达式。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="文件操作符" tabindex="-1"><a class="header-anchor" href="#文件操作符" aria-hidden="true">#</a> 文件操作符：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span> FILE    如果文件存在，则为true。
<span class="token parameter variable">-b</span> FILE    如果文件是块特殊的，则为true。
<span class="token parameter variable">-c</span> FILE    如果文件是特殊字符，则为true。
<span class="token parameter variable">-d</span> FILE    如果文件是目录，则为true。
<span class="token parameter variable">-e</span> FILE    如果文件存在，则为true。
<span class="token parameter variable">-f</span> FILE    如果文件存在并且是常规文件，则为true。
<span class="token parameter variable">-g</span> FILE    如果文件是set-group-id，则为true。
<span class="token parameter variable">-h</span> FILE    如果文件是符号链接，则为true。
<span class="token parameter variable">-L</span> FILE    如果文件是符号链接，则为true。
<span class="token parameter variable">-k</span> FILE    如果文件的粘滞位（sticky）设置了，则为true。
<span class="token parameter variable">-p</span> FILE    如果文件是命名管道，则为true。
<span class="token parameter variable">-r</span> FILE    如果您可以读取文件，则为true。
<span class="token parameter variable">-s</span> FILE    如果文件存在且不为空，则为true。
<span class="token parameter variable">-S</span> FILE    如果文件是套接字，则为true。
<span class="token parameter variable">-t</span> FD      如果在终端上打开FD，则为True。
<span class="token parameter variable">-u</span> FILE    如果文件是set-user-id，则为true。
<span class="token parameter variable">-w</span> FILE    如果文件可写，则为true。
<span class="token parameter variable">-x</span> FILE    如果您可以执行文件，则为true。
<span class="token parameter variable">-O</span> FILE    如果文件有效地归您所有，则为true。
<span class="token parameter variable">-G</span> FILE    如果文件有效地归您的组所有，则为true。
<span class="token parameter variable">-N</span> FILE    如果文件自上次读取以来已被修改，则为true。
    
FILE1 <span class="token parameter variable">-nt</span> FILE2    根据修改日期，如果 file1 比 file2 新，则为true。
FILE1 <span class="token parameter variable">-ot</span> FILE2    根据修改日期，如果 file1 比 file2 旧，则为true。
FILE1 <span class="token parameter variable">-ef</span> FILE2    如果 file1 为 file2 的硬链接，则为true。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串运算符" tabindex="-1"><a class="header-anchor" href="#字符串运算符" aria-hidden="true">#</a> 字符串运算符：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-z</span> STRING              如果字符串为空，则为true。
<span class="token parameter variable">-n</span> STRING              如果字符串不为空，则为true。
STRING                 如果字符串不为空，则为true。
STRING1 <span class="token operator">=</span> STRING2      如果字符串相等，则为true。
STRING1 ！<span class="token operator">=</span> STRING2    如果字符串不相等，则为true。
STRING1 <span class="token operator">&lt;</span> STRING2      如果 STRING1 的字典排序在 STRING2 之前，则为true。
STRING1 <span class="token operator">&gt;</span> STRING2      如果 STRING1 在字典排序在 STRING2 之后，则为true。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他运算符" tabindex="-1"><a class="header-anchor" href="#其他运算符" aria-hidden="true">#</a> 其他运算符：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-o</span> OPTION         如果启用了shell选项OPTION，则为true。
<span class="token parameter variable">-v</span> VAR            如果设置了shell变量VAR，则为true。
<span class="token parameter variable">-R</span> VAR            如果设置了shell变量VAR并且是变量引用，则为true。
！EXPR            如果expr为假，则为true。
EXPR1 <span class="token parameter variable">-a</span> EXPR2    如果expr1和expr2都为true，则为true。
EXPR1 <span class="token parameter variable">-o</span> EXPR2    如果expr1或expr2为true，则为true。
arg1 OP arg2      算术表达式测试； OP是 -eq，-ne，-lt，-le，-gt，-ge 中的一个；算术表达式为真时返回true。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>如果表达式执行结果为成功时返回0，当表达式执行结果为失败或给出非法参数时返回1。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行条件表达式并显示返回值。</span>
<span class="token punctuation">[</span>root@pc root<span class="token punctuation">]</span>$ <span class="token builtin class-name">test</span> <span class="token operator">!</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">==</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>

<span class="token comment"># 等价形式，注意：方括号 [ 后面的空格以及方括号 ] 前面的空格。</span>
<span class="token punctuation">[</span>root@pc root<span class="token punctuation">]</span>$ <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">==</span> <span class="token number">123</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>

<span class="token punctuation">[</span>root@pc root<span class="token punctuation">]</span>$ <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">==</span> <span class="token number">123</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令等价于 <code>[</code>。</li><li>编写 bash 条件表达式可用内建命令 <code>test</code>， <code>[</code> ，组合命令 <code>[[</code>；</li></ol>`,19),o={href:"http://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html#Bash-Conditional-Expressions",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.gnu.org/software/bash/manual/html_node/Builtin-Index.html#Builtin-Index",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.gnu.org/software/bash/manual/html_node/Reserved-Word-Index.html#Reserved-Word-Index",target:"_blank",rel:"noopener noreferrer"},b=a("ol",{start:"3"},[a("li",null,[e("该命令是bash内建命令，相关的帮助信息请查看"),a("code",null,"help"),e("命令。")])],-1);function m(h,k){const n=l("ExternalLinkIcon");return t(),i("div",null,[d,a("blockquote",null,[a("ul",null,[a("li",null,[e("关于条件表达式可以查看"),a("a",o,[e("这里"),s(n)]),e("；")]),a("li",null,[e("关于内建命令的索引可以查看"),a("a",u,[e("这里"),s(n)]),e("；")]),a("li",null,[e("关于组合命令的索引可以查看"),a("a",v,[e("这里"),s(n)])])])]),b])}const g=r(c,[["render",m],["__file","test.html.vue"]]);export{g as default};
