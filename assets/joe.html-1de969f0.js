import{_ as n,p as e,q as a,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="joe" tabindex="-1"><a class="header-anchor" href="#joe" aria-hidden="true">#</a> joe</h1><p>强大的纯文本编辑器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>joe命令</strong> 是一款功能强大的纯文本编辑器，拥有众多编写程序和文本的优良特性。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>joe<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-force：强制在最后一行的结尾处加上换行符号；
-lines<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>：设置行数；
-lightoff：选取的区块在执行完区块命令后，就会恢复成原来的状态；
-autoindent：自动缩排；
-backpath：<span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>：指定备份文件的目录；
-beep：编辑时，若有错误即发出哔声；
-columns<span class="token operator">&lt;</span>栏位<span class="token operator">&gt;</span>：设置栏数；
-csmode：可执行连续查找模式；
-dopadding：是程序跟tty间存在缓冲区；
-exask：在程序中，执行“Ctrl+k+x”时，会先确认是否要保存文件；
-force：强制在最后一行的结尾处加上换行符号；
-help：执行程序时一并显示帮助；
-keepup：在进入程序后，画面上方为状态列；
-marking：在选取区块时，反白区块会随着光标移动；
-mid：当光标移出画面时，即自动卷页，使光标回到中央；
-nobackups：不建立备份文件；
-nonotice：程序执行时，不显示版本信息；
-nosta：程序执行时，不显示状态列；
-noxon：尝试取消“Ctrl+s”和“Ctrl+q”键的功能；
-orphan：若同时开启一个以上的文件，则其他文件会置于独立的缓冲区，而不会另外开启编辑区；
-pg<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>：按“PageUp”或“PageDown”换页时，所要保留前一页的行数；
-skiptop<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>：不使用屏幕上方指定的行数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定要编辑的文件。</p>`,10),r=[d];function l(t,o){return e(),a("div",null,r)}const p=n(i,[["render",l],["__file","joe.html.vue"]]);export{p as default};
