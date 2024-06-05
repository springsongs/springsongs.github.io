import{_ as e,p as a,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="rpmsign" tabindex="-1"><a class="header-anchor" href="#rpmsign" aria-hidden="true">#</a> rpmsign</h1><p>使用RPM软件包的签名管理工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>rpmsign命令</strong> 使用rpm软件包的签名管理工具。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rpmsign<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--addsign：为自动软件包添加签名；
--checksig：验证软件包签名；
--delsign：删除软件包签名；
--import：导入公钥；
--resign：重新签名软件包；
--nodigest：不验证软件包摘要；
--nosignature：不验证软件包签名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[d];function c(l,t){return a(),n("div",null,r)}const o=e(i,[["render",c],["__file","rpmsign.html.vue"]]);export{o as default};
