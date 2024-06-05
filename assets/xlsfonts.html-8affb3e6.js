import{_ as s,p as a,q as n,a1 as e}from"./framework-5866ffd3.js";const t={},l=e(`<h1 id="xlsfonts" tabindex="-1"><a class="header-anchor" href="#xlsfonts" aria-hidden="true">#</a> xlsfonts</h1><p>列出X Server使用的字体</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>xlsfonts命令</strong> 列出X Server使用的字体，也能使用范本样式仅列出的符合条件的字体。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xlsfonts<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-l：除字体名称外，同时列出字体的属性；
-ll：此参数的效果和指定<span class="token string">&quot;l&quot;</span>参数类似，但显示更详细的信息；
-lll：此参数的效果和指定<span class="token string">&quot;ll&quot;</span>参数类似，但显示更详细的信息；
-m：配合参数<span class="token string">&quot;-l&quot;</span>使用时，一并列出字体大小的上下限；
-n<span class="token operator">&lt;</span>显示栏位数<span class="token operator">&gt;</span>：设置每列显示的栏位数；
-o：以OpenFont的形式列出字体清单；
-u：列出字体清单时不依照其名称排序；
-w<span class="token operator">&lt;</span>每列字符数<span class="token operator">&gt;</span>：设置每列的最大字符数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[l];function r(d,o){return a(),n("div",null,i)}const u=s(t,[["render",r],["__file","xlsfonts.html.vue"]]);export{u as default};
