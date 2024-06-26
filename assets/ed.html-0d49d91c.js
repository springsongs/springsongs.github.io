import{_ as e,p as a,q as n,a1 as s}from"./framework-5866ffd3.js";const d={},i=s(`<h1 id="ed" tabindex="-1"><a class="header-anchor" href="#ed" aria-hidden="true">#</a> ed</h1><p>单行纯文本编辑器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>ed命令</strong> 是单行纯文本编辑器，它有命令模式（command mode）和输入模式（input mode）两种工作模式。ed命令支持多个内置命令，常见内置命令如下：</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ed<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>A <span class="token comment"># 切换到输入模式，在文件的最后一行之后输入新的内容；</span>
C <span class="token comment"># 切换到输入模式，用输入的内容替换掉最后一行的内容；</span>
i <span class="token comment"># 切换到输入模式，在当前行之前加入一个新的空行来输入内容；</span>
d <span class="token comment"># 用于删除最后一行文本内容；</span>
n <span class="token comment"># 用于显示最后一行的行号和内容；</span>
w <span class="token comment"># &lt;文件名&gt;：一给定的文件名保存当前正在编辑的文件；</span>
q <span class="token comment"># 退出ed编辑器。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-G或——traditional：提供兼容的功能；
-p<span class="token operator">&lt;</span>字符串<span class="token operator">&gt;</span>：指定ed在command mode的提示字符；
-s，-，--quiet或——silent：不执行开启文件时的检查功能；
--help：显示帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：待编辑的文件。</p>`,11),c=[i];function t(l,r){return a(),n("div",null,c)}const p=e(d,[["render",t],["__file","ed.html.vue"]]);export{p as default};
