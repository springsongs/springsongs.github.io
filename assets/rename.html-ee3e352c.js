import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="rename" tabindex="-1"><a class="header-anchor" href="#rename" aria-hidden="true">#</a> rename</h1><p>用字符串替换的方式批量改变文件名</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p>rename命令存在两个版本用法上有所区别</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C语言版本, 支持通配符
<span class="token punctuation">[</span>常用通配符说明<span class="token punctuation">]</span>
?    表示一个任意字符
*    表示一个或一串任意字符

Perl版本, 支持正则表达式
<span class="token punctuation">[</span>常用正则表达式符号说明<span class="token punctuation">]</span>
^    匹配输入的开始位置
$    匹配输入的结尾
<span class="token builtin class-name">.</span>    匹配除换行符外的任意字符
+    匹配前一个字符一次或多次 例如，<span class="token string">&quot;zo+&quot;</span>可以匹配<span class="token string">&quot;zoo&quot;</span>,但不匹配<span class="token string">&quot;z&quot;</span>
<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>    表示某个范围内的字符，例如，<span class="token string">&quot;[a-z]&quot;</span>匹配<span class="token string">&quot;a&quot;</span>与<span class="token string">&quot;z&quot;</span>之间的任何一个小写字母字符。
<span class="token punctuation">[</span>^m-z<span class="token punctuation">]</span>    否定的字符区间。与不在指定区间内的字符匹配。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区分方法: <code>rename --version</code></p><p>如果返回结果中包含 <strong>util-linux</strong> , 说明是C语言版本, 反之是Perl版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Perl版本 | Ubuntu(18),Mint(20)默认的是Perl版本</span>
$ <span class="token function">rename</span> <span class="token parameter variable">--version</span>
/usr/bin/rename using File::Rename version <span class="token number">1.10</span>

<span class="token comment"># C语言版本 | Centos(7)默认的是C语言版本</span>
$ <span class="token function">rename</span> <span class="token parameter variable">--version</span>
rename，来自 util-linux <span class="token number">2.23</span>.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Perl版本</span>
<span class="token function">rename</span> <span class="token punctuation">[</span> -h<span class="token operator">|</span>-m<span class="token operator">|</span>-V <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-v</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-0</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> -e<span class="token operator">|</span>-E perlexpr<span class="token punctuation">]</span>*<span class="token operator">|</span>perlexpr <span class="token punctuation">[</span> files <span class="token punctuation">]</span>

<span class="token comment"># C语言版本</span>
<span class="token function">rename</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 表达式 替换的字符 文件<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Perl版本</span>
-v, <span class="token parameter variable">--verbose</span>
        详细：成功重命名的文件的打印名称。

-0, <span class="token parameter variable">--null</span>
        从STDIN读取时，请使用<span class="token punctuation">\\</span><span class="token number">0</span>作为记录分隔符

-n, <span class="token parameter variable">--nono</span>
        不执行任何操作：打印要重命名的文件名，但不重命名。

-f, <span class="token parameter variable">--force</span>
        覆盖：允许覆盖现有文件

--path, <span class="token parameter variable">--fullpath</span>
        重命名完整路径：包括任何目录组件。默认

-d, --filename, --nopath, <span class="token parameter variable">--nofullpath</span>
        不重命名目录：仅重命名路径的文件名部分

-h, <span class="token parameter variable">--help</span>
        帮助：打印提要和选项。

-m, <span class="token parameter variable">--man</span>
        手册: 打印手册页.

-V, <span class="token parameter variable">--version</span>
        版本: 显示版本号.

<span class="token parameter variable">-e</span>      表达: 作用于文件名的代码.

        可以重复来构建代码（比如“perl-e”）。如果没有-e，则第一个参数用作代码。

<span class="token parameter variable">-E</span>      语句：对文件名执行操作的代码，如-e，但终止于 <span class="token string">&#39;;&#39;</span><span class="token builtin class-name">.</span>


<span class="token comment"># C语言版本</span>
-v, <span class="token parameter variable">--verbose</span>
        提供视觉反馈，其中重命名了哪些文件（如果有的话）

-V, <span class="token parameter variable">--version</span>
        显示版本信息并退出。

-s, <span class="token parameter variable">--symlink</span>
        在符号链接目标上执行重命名

-h, <span class="token parameter variable">--help</span>
        显示帮助文本并退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><hr><h4 id="perl版本" tabindex="-1"><a class="header-anchor" href="#perl版本" aria-hidden="true">#</a> Perl版本</h4><p>将1.txt 2.txt重命名为1.log 2.log</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rename</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;s/txt/log/g&quot;</span> <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token number">1</span>.txt renamed as <span class="token number">1</span>.log
<span class="token number">2</span>.txt renamed as <span class="token number">2</span>.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改文件的后缀</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rename</span> <span class="token string">&quot;s//.html//.php/&quot;</span> *     <span class="token comment"># 把.html 后缀的改成 .php后缀</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>批量添加文件后缀</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rename</span> <span class="token string">&quot;s/$//.txt/&quot;</span> *  <span class="token comment"># 把所有的文件名都以txt结尾</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>批量删除文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rename</span> <span class="token string">&quot;s//.txt//&quot;</span> *   <span class="token comment"># 把所有以.txt结尾的文件名的.txt删掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h5 id="c语言版本" tabindex="-1"><a class="header-anchor" href="#c语言版本" aria-hidden="true">#</a> C语言版本</h5><p>将1.txt 2.txt重命名为1.log 2.log</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rename</span> <span class="token parameter variable">-v</span> txt log <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token variable"><span class="token variable">\`</span><span class="token number">1</span>.txt&#39; -<span class="token operator">&gt;</span> <span class="token variable">\`</span></span><span class="token number">1</span>.log<span class="token string">&#39;
\`2.txt&#39;</span> -<span class="token operator">&gt;</span> \`2.log&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件夹中有这些文件foo1, ..., foo9, foo10, ..., foo278</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 把foo1到foo9的文件重命名为foo01到foo09，重命名的文件只是有4个字符长度名称的文件，文件名中的foo被替换为foo0。</span>
<span class="token function">rename</span> foo foo0 foo?

<span class="token comment"># foo01到foo99的所有文件都被重命名为foo001到foo099，只重命名5个字符长度名称的文件，文件名中的foo被替换为foo0。</span>
<span class="token function">rename</span> foo foo0 foo??

<span class="token comment"># foo001到foo278的所有文件都被重命名为foo0001到foo0278，所有以foo开头的文件都被重命名。</span>
<span class="token function">rename</span> foo foo0 foo*

<span class="token comment"># 从foo0200到foo0278的所有文件都被重命名为foo200到foo278，文件名中的foo0被替换为foo。</span>
<span class="token function">rename</span> foo0 foo foo0<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),t=[l];function o(r,p){return s(),a("div",null,t)}const d=n(i,[["render",o],["__file","rename.html.vue"]]);export{d as default};
