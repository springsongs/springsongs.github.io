import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="lpr" tabindex="-1"><a class="header-anchor" href="#lpr" aria-hidden="true">#</a> lpr</h1><p>将文件发送给指定打印机进行打印</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lpr命令</strong> 用于将文件发送给指定打印机进行打印，如果不指定目标打印机，则使用默认打印机。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lpr<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-E：与打印服务器连接时强制使用加密；
-H：指定可选的打印服务器；
-C：指定打印任务的名称；
-P：指定接受打印任务的目标打印机；
-U：指定可选的用户名；
-<span class="token comment">#：指定打印的份数；</span>
-h：关闭banner打印；
-m：打印完成后发送E-mail；
-r：打印完成后删除文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：需打印的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将man1和man2送到打印机lp进行打印：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lpr</span> <span class="token parameter variable">-P</span> lp man1 man2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),r=[d];function l(c,t){return e(),n("div",null,r)}const p=a(i,[["render",l],["__file","lpr.html.vue"]]);export{p as default};
