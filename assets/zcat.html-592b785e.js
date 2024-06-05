import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="zcat" tabindex="-1"><a class="header-anchor" href="#zcat" aria-hidden="true">#</a> zcat</h1><p>显示压缩包中文件的内容</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>zcat命令</strong> 用于不真正解压缩文件，就能显示压缩包中文件的内容的场合。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zcat<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-S：指定gzip格式的压缩包的后缀。当后缀不是标准压缩包后缀时使用此选项；
-c：将文件内容写到标注输出；
-d：执行解压缩操作；
-l：显示压缩包中文件的列表；
-L：显示软件许可信息；
-q：禁用警告信息；
-r：在目录上执行递归操作；
-t：测试压缩文件的完整性；
-V：显示指令的版本信息；
-l：更快的压缩速度；
-9：更高的压缩比。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定要显示其中文件内容的压缩包。</p>`,10),c=[d];function r(l,t){return e(),n("div",null,c)}const u=a(i,[["render",r],["__file","zcat.html.vue"]]);export{u as default};
