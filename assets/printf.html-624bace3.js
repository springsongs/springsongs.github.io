import{_ as t,M as l,p as c,q as p,R as n,t as s,N as e,a1 as i}from"./framework-5866ffd3.js";const r={},o=i(`<h1 id="printf" tabindex="-1"><a class="header-anchor" href="#printf" aria-hidden="true">#</a> printf</h1><p>格式化并输出结果。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><a href="#%E5%86%85%E5%BB%BA%E5%91%BD%E4%BB%A4">bash内建命令</a></li><li><a href="#%E5%A4%96%E9%83%A8%E5%91%BD%E4%BB%A4">GNU coreutils中的命令</a></li></ul><h2 id="内建命令" tabindex="-1"><a class="header-anchor" href="#内建命令" aria-hidden="true">#</a> 内建命令</h2><h4 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">printf</span> <span class="token punctuation">[</span>-v var<span class="token punctuation">]</span> <span class="token function">format</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h4><ul><li>格式化参数并输出。</li></ul><h4 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-v</span> var：将结果输出到变量var中而不是输出到标准输出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><p>format：输出格式。</p><p>arguments：一到多个参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>转义序列：除了支持printf<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>和printf<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>的转义序列，内建printf还支持以下转义序列：

%b       展开参数中的反斜杠转义字符。
%q       将参数扩起以用作shell输入。
%<span class="token punctuation">(</span>fmt<span class="token punctuation">)</span>T  根据strftime<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>中的转义字符来输出日期时间字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><p>返回状态为成功除非给出了非法选项、写错误、赋值错误。</p><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># %-5s 格式为左对齐且宽度为5的字符串代替（&#39;-&#39;表示左对齐），不使用则默认右对齐。</span>
<span class="token comment"># %-4.2f 格式为左对齐宽度为4，保留两位小数。</span>

<span class="token builtin class-name">printf</span> <span class="token string">&quot;%-5s %-10s %-4s<span class="token entity" title="\\n">\\n</span>&quot;</span> NO Name Mark
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%-5s %-10s %-4.2f<span class="token entity" title="\\n">\\n</span>&quot;</span> 01 Tom <span class="token number">90.3456</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%-5s %-10s %-4.2f<span class="token entity" title="\\n">\\n</span>&quot;</span> 02 Jack <span class="token number">89.2345</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%-5s %-10s %-4.2f<span class="token entity" title="\\n">\\n</span>&quot;</span> 03 Jeff <span class="token number">98.4323</span>

<span class="token comment"># 输出</span>
NO    Name       Mark
01    Tom        <span class="token number">90.35</span>
02    Jack       <span class="token number">89.23</span>
03    Jeff       <span class="token number">98.43</span>


<span class="token comment"># %b %q %(fmt)T 的例子。</span>
<span class="token comment"># see it again with a newline.</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%s<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token comment"># 展开换行符，和上面的结果一样。</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%b&quot;</span> <span class="token string">&#39;hello world\\n&#39;</span>

<span class="token builtin class-name">printf</span> <span class="token string">&#39;%q\\n&#39;</span> <span class="token string">&#39;a b c&#39;</span>
<span class="token comment"># 输出</span>
a<span class="token punctuation">\\</span> b<span class="token punctuation">\\</span> c

<span class="token comment"># %z为时区，%n为换行符。</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%(%F %T %z%n)T&quot;</span>
<span class="token comment"># 输出</span>
<span class="token number">2019</span>-09-10 01:48:07 +0000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><ol><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol><h2 id="外部命令" tabindex="-1"><a class="header-anchor" href="#外部命令" aria-hidden="true">#</a> 外部命令</h2><h4 id="概要-1" tabindex="-1"><a class="header-anchor" href="#概要-1" aria-hidden="true">#</a> 概要</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">printf</span> FORMAT <span class="token punctuation">[</span>ARGUMENT<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token builtin class-name">printf</span> OPTION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="主要用途-1" tabindex="-1"><a class="header-anchor" href="#主要用途-1" aria-hidden="true">#</a> 主要用途</h4><ul><li>格式化参数并输出。</li></ul><h4 id="选项-1" tabindex="-1"><a class="header-anchor" href="#选项-1" aria-hidden="true">#</a> 选项</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--help</span> 显示帮助信息并退出。
<span class="token parameter variable">--version</span> 显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h4><p>format：输出格式。</p><p>arguments：一到多个参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>在这里忽略了（%b %q），如果你安装的coreutils版本支持它们，那么请参考上面的例子。
支持的转义序列：

<span class="token punctuation">\\</span>&quot;          双引号
<span class="token punctuation">\\</span><span class="token punctuation">\\</span>          反斜杠
<span class="token punctuation">\\</span>a          响铃
<span class="token punctuation">\\</span>b          退格
<span class="token punctuation">\\</span>c          截断输出
<span class="token punctuation">\\</span>e          退出
<span class="token punctuation">\\</span>f          翻页
<span class="token punctuation">\\</span>n          换行
<span class="token punctuation">\\</span>r          回车
<span class="token punctuation">\\</span>t          水平制表符
<span class="token punctuation">\\</span>v          竖直制表符
<span class="token punctuation">\\</span>NNN        八进制数 <span class="token punctuation">(</span><span class="token number">1</span>到3位数字<span class="token punctuation">)</span>
<span class="token punctuation">\\</span>xHH        十六进制数 <span class="token punctuation">(</span><span class="token number">1</span>到2位数字<span class="token punctuation">)</span>
<span class="token punctuation">\\</span>uHHHH      Unicode字符附加4位十六进制数字
<span class="token punctuation">\\</span>UHHHHHHHH  Unicode字符附加8位十六进制数字
%%          百分号

以及<span class="token string">&#39;diouxXfeEgGcs&#39;</span>中的一个结尾的C格式规范，将被转换为正确的类型并处理可变宽度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1" aria-hidden="true">#</a> 例子</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 /usr/bin/printf 确保调用的不是内建命令。</span>
<span class="token comment"># 当然，在你关闭内建printf以及确认当前环境没有printf函数的情况下，可直接使用printf，详见末尾&quot;注意&quot;的链接。</span>

<span class="token comment"># 按行打印数组和关联数组的下标及值。</span>

<span class="token comment"># 声明数组可以不加&#39;declare -a&#39;或&#39;local -a&#39;（在函数内声明的局部变量）。</span>
<span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;line1&#39;</span> <span class="token string">&#39;line2&#39;</span><span class="token punctuation">)</span>
/usr/bin/printf <span class="token string">&quot;%s<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token variable">\${<span class="token operator">!</span>arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># 输出下标</span>
<span class="token number">0</span>
<span class="token number">1</span>
/usr/bin/printf <span class="token string">&quot;%s<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># 输出值</span>
line1
line2

<span class="token comment">#声明关联数组（也就是字典）必须加&#39;declare -A&#39;或&#39;local -A&#39;（在函数内声明的局部变量）。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">assoc_arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;value1&#39;</span> <span class="token punctuation">[</span><span class="token string">&#39;key2&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span>
/usr/bin/printf <span class="token string">&quot;%s<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token variable">\${<span class="token operator">!</span>assoc_arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># 输出键。</span>
key2
key1
/usr/bin/printf <span class="token string">&quot;%s<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token variable">\${assoc_arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># 输出值。</span>
value2
value1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a> 返回值</h4><p>返回状态为成功除非给出了非法选项等。</p><h4 id="注意-1" tabindex="-1"><a class="header-anchor" href="#注意-1" aria-hidden="true">#</a> 注意</h4>`,37),d=i("<li><p>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 printf</code>或<code>info coreutils &#39;pwd invocation&#39;</code>。</p></li><li><p>启动或关闭内建命令请查看<code>enable</code>命令，关于同名优先级的问题请查看<code>builtin</code>命令的例子部分的相关讨论。</p></li>",2),u=n("p",null,[s("我通过和"),n("code",null,"bug-bash@gnu.org"),s("的交流，得到了关于这几个格式说明符"),n("code",null,"%b %q %(fmt)T"),s("的解释：")],-1),v=n("blockquote",null,[n("p",null,"printf(1)中的%b格式说明符是printf(3)支持的格式之外增加的一个POSIX特性。"),n("p",null,"%q和%T说明符是非标准的，并且不受所有独立实现的printf的支持。")],-1),m=n("p",null,"更多细节请参考链接：",-1),b={href:"https://pubs.opengroup.org/onlinepubs/9699919799/utilities/printf.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"APPLICATION USAGE",-1),k={href:"https://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"Description",-1);function g(_,x){const a=l("ExternalLinkIcon");return c(),p("div",null,[o,n("ol",null,[d,n("li",null,[u,v,m,n("ul",null,[n("li",null,[n("a",b,[s("POSIX printf"),e(a)]),h,s("段落的第五节。")]),n("li",null,[n("a",k,[s("POSIX printf格式说明符"),e(a)]),s(" 的"),f,s("段落。")])])])])])}const N=t(r,[["render",g],["__file","printf.html.vue"]]);export{N as default};
