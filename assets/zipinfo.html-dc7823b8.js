import{_ as n,p as a,q as e,a1 as i}from"./framework-5866ffd3.js";const s={},d=i(`<h1 id="zipinfo" tabindex="-1"><a class="header-anchor" href="#zipinfo" aria-hidden="true">#</a> zipinfo</h1><p>用来列出压缩文件信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>zipinfo命令</strong> 用来列出压缩文件信息。执行zipinfo指令可得知zip压缩文件的详细信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zipinfo<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-1：只列出文件名称；
-2：此参数的效果和指定“-1”参数类似，但可搭配“-h”，“-t”和“-z”参数使用；
-h：只列出压缩文件的文件名称；
-l：此参数的效果和指定“-m”参数类似，但会列出原始文件的大小而非每个文件的压缩率；
-m：此参数的效果和指定“-s”参数类似，但多会列出每个文件的压缩率；
-M：若信息内容超过一个画面，则采用类似more指令的方式列出信息；
-s：用类似执行“ls-l”指令的效果列出压缩文件内容；
-t：只列出压缩文件内所包含的文件数目，压缩前后的文件大小及压缩率；
-T：将压缩文件内每个文件的日期时间用年，月，日，时，分，秒的顺序列出；
-v：详细显示压缩文件内每一个文件的信息；
-x<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：不列出符合条件的文件的信息；
-z：如果压缩文件内含有注释，就将注释显示出来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定zip格式的压缩包。</p>`,10),r=[d];function l(c,t){return a(),e("div",null,r)}const h=n(s,[["render",l],["__file","zipinfo.html.vue"]]);export{h as default};
