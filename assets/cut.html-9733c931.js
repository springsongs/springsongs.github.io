import{_ as n,p as s,q as a,Q as e,a1 as i}from"./framework-5866ffd3.js";const l={},t=i(`<h1 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h1><p>连接文件并打印到标准输出设备上</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>cut 命令</strong> 用来显示行中的指定部分，删除文件中指定字段。cut 经常用来显示文件的内容，类似于 type 命令。</p><p>说明：该命令有两项功能，其一是用来显示文件的内容，它依次读取由参数 file 所指 明的文件，将它们的内容输出到标准输出上；其二是连接两个或多个文件，如<code>cut fl f2 &gt; f3</code>将把文件 fl 和 f2 的内容合并起来，然后通过输出重定向符“&gt;”的作用，将它们放入文件 f3 中。</p><p>当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。因此，一般用 more 等命令分屏显示。为了控制滚屏，可以按 Ctrl+S 键，停止滚屏；按 Ctrl+Q 键可以恢复滚屏。按 Ctrl+C（中断）键可以终止该命令的执行，并且返回 Shell 提示符状态。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cut（选项）（参数）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b：仅显示行中指定直接范围的内容；
-c：仅显示行中指定范围的字符；
-d：指定字段的分隔符，默认的字段分隔符为“TAB”；
-f：显示指定字段的内容；
-n：与“-b”选项连用，不分割多字节字符；
--complement：补足被选择的字节、字符或字段；
--out-delimiter<span class="token operator">=</span> 字段分隔符：指定输出内容是的字段分割符；
--help：显示指令的帮助信息；
--version：显示指令的版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定要进行内容过滤的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>例如有一个学生报表信息，包含 No、Name、Mark、Percent：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cat test.txt</span>
No Name Mark Percent
01 tom <span class="token number">69</span> <span class="token number">91</span>
02 jack <span class="token number">71</span> <span class="token number">87</span>
03 alex <span class="token number">68</span> <span class="token number">98</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <strong>-f</strong> 选项提取指定字段（这里的 f 参数可以简单记忆为 <code>--fields</code>的缩写）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cut -f 1 test.txt</span>
No
01
02
03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cut -f2,3 test.txt</span>
Name Mark
tom <span class="token number">69</span>
jack <span class="token number">71</span>
alex <span class="token number">68</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>--complement</strong> 选项提取指定字段之外的列（打印除了第二列之外的列）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cut -f2 --complement test.txt</span>
No Mark Percent
01 <span class="token number">69</span> <span class="token number">91</span>
02 <span class="token number">71</span> <span class="token number">87</span>
03 <span class="token number">68</span> <span class="token number">98</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <strong>-d</strong> 选项指定字段分隔符：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cat test2.txt</span>
No<span class="token punctuation">;</span>Name<span class="token punctuation">;</span>Mark<span class="token punctuation">;</span>Percent
01<span class="token punctuation">;</span>tom<span class="token punctuation">;</span><span class="token number">69</span><span class="token punctuation">;</span><span class="token number">91</span>
02<span class="token punctuation">;</span>jack<span class="token punctuation">;</span><span class="token number">71</span><span class="token punctuation">;</span><span class="token number">87</span>
03<span class="token punctuation">;</span>alex<span class="token punctuation">;</span><span class="token number">68</span><span class="token punctuation">;</span><span class="token number">98</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cut -f2 -d&quot;;&quot; test2.txt</span>
Name
tom
jack
alex

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定字段的字符或者字节范围" tabindex="-1"><a class="header-anchor" href="#指定字段的字符或者字节范围" aria-hidden="true">#</a> 指定字段的字符或者字节范围</h3><p>cut 命令可以将一串字符作为列来显示，字符字段的记法：</p><ul><li><strong>N-</strong> ：从第 N 个字节、字符、字段到结尾；</li><li><strong>N-M</strong> ：从第 N 个字节、字符、字段到第 M 个（包括 M 在内）字节、字符、字段；</li><li><strong>-M</strong> ：从第 1 个字节、字符、字段到第 M 个（包括 M 在内）字节、字符、字段。</li></ul><p>上面是记法，结合下面选项将摸个范围的字节、字符指定为字段：</p><ul><li><strong>-b</strong> 表示字节；</li><li><strong>-c</strong> 表示字符；</li><li><strong>-f</strong> 表示定义字段。</li></ul><p><strong>示例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cat test.txt</span>
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印第 1 个到第 3 个字符：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cut -c1-3 test.txt</span>
abc
abc
abc
abc
abc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印前 2 个字符：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cut -c-2 test.txt</span>
ab
ab
ab
ab
ab

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印从第 5 个字符开始到结尾：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cut -c5- test.txt</span>
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function c(d,r){return s(),a("div",null,[t,e(" Linux 命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ ")])}const o=n(l,[["render",c],["__file","cut.html.vue"]]);export{o as default};
