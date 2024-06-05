import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h1><p>显示或设置键盘按键与其相关的功能</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>bind命令</strong> 用于显示和设置命令行的键盘序列绑定功能。通过这一命令，可以提高命令行中操作效率。您可以利用bind命令了解有哪些按键组合与其功能，也可以自行指定要用哪些按键组合。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bind<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-d：显示按键配置的内容；
-f<span class="token operator">&lt;</span>按键配置文件<span class="token operator">&gt;</span>：载入指定的按键配置文件；
-l：列出所有的功能；
-m<span class="token operator">&lt;</span>按键配置<span class="token operator">&gt;</span>：指定按键配置；
-q<span class="token operator">&lt;</span>功能<span class="token operator">&gt;</span>：显示指定功能的按键；
-v：列出目前的按键配置与其功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">bind</span> <span class="token parameter variable">-x</span> <span class="token string">&#39;&quot;\\C-l&quot;:ls -l&#39;</span>    <span class="token comment">#直接按 CTRL+L 就列出目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中keyseq可以使用<code>showkey -a</code>命令来获取：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>showkey <span class="token parameter variable">-a</span>

Press any keys - Ctrl-D will terminate this program

^<span class="token punctuation">[</span><span class="token punctuation">[</span>A     <span class="token number">27</span> 0033 0x1b  上
         <span class="token number">91</span> 0133 0x5b
         <span class="token number">65</span> 0101 0x41
^<span class="token punctuation">[</span><span class="token punctuation">[</span>B     <span class="token number">27</span> 0033 0x1b  下
         <span class="token number">91</span> 0133 0x5b
         <span class="token number">66</span> 0102 0x42
^<span class="token punctuation">[</span><span class="token punctuation">[</span>D     <span class="token number">27</span> 0033 0x1b  左
         <span class="token number">91</span> 0133 0x5b
         <span class="token number">68</span> 0104 0x44
^<span class="token punctuation">[</span><span class="token punctuation">[</span>C     <span class="token number">27</span> 0033 0x1b 右
         <span class="token number">91</span> 0133 0x5b
         <span class="token number">67</span> 0103 0x43
         <span class="token number">32</span> 0040 0x20
^M       <span class="token number">13</span> 0015 0x0d 字母M
^C        <span class="token number">3</span> 0003 0x03 Ctrl-C
^D        <span class="token number">4</span> 0004 0x04 Ctrl-D 退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function r(t,c){return s(),a("div",null,d)}const o=n(i,[["render",r],["__file","bind.html.vue"]]);export{o as default};
