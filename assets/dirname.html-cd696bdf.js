import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="dirname" tabindex="-1"><a class="header-anchor" href="#dirname" aria-hidden="true">#</a> dirname</h1><p>去除文件名中的非目录部分</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>dirname命令</strong> 去除文件名中的非目录部分，仅显示与目录有关的内容。dirname命令读取指定路径名保留最后一个<code>/</code>及其后面的字符，删除其他部分，并写结果到标准输出。如果最后一个<code>/</code>后无字符，dirname 命令使用倒数第二个<code>/</code>，并忽略其后的所有字符。dirname 和 basename 通常在 shell 内部命令替换使用，以指定一个与指定输入文件名略有差异的输出文件名。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dirname<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--help：显示帮助；
--version：显示版本号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dirname</span> //
结果为 /

<span class="token function">dirname</span> /a/b/
结果为：/a

<span class="token function">dirname</span> a
结果为 <span class="token builtin class-name">.</span>

<span class="token function">dirname</span> a/b
结果为路径名 a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[d];function c(l,t){return e(),n("div",null,r)}const u=a(i,[["render",c],["__file","dirname.html.vue"]]);export{u as default};
