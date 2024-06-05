import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="as" tabindex="-1"><a class="header-anchor" href="#as" aria-hidden="true">#</a> as</h1><p>汇编语言编译器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>as命令</strong> GNU组织推出的一款汇编语言编译器，它支持多种不同类型的处理器。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>as<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-ac：忽略失败条件；
-ad：忽略调试指令；
-ah：包括高级源；
-al：包括装配；
-am：包括宏扩展；
-an：忽略形式处理；
-as：包括符号；
<span class="token operator">=</span>file：设置列出文件的名字；
--alternate：以交互宏模式开始；
-f：跳过空白和注释预处理；
-g：产生调试信息；
-J：对于有符号溢出不显示警告信息；
-L：在符号表中保留本地符号；
-o：指定要生成的目标文件；
--statistics：打印汇编所用的最大空间和总时间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>汇编文件：指定要汇编的源文件。</p>`,10),r=[d];function l(c,t){return e(),n("div",null,r)}const u=a(i,[["render",l],["__file","as.html.vue"]]);export{u as default};
