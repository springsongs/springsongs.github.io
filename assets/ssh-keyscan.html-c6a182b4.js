import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="ssh-keyscan" tabindex="-1"><a class="header-anchor" href="#ssh-keyscan" aria-hidden="true">#</a> ssh-keyscan</h1><p>收集主机公钥的使用工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>ssh-keyscan命令</strong> 是一个收集大量主机公钥的使用工具。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keyscan<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-4：强制使用IPv4地址；
-6：强制使用IPv6地址；
-f：从指定文件中读取“地址列表/名字列表”；
-p：指定连接远程主机的端口；
-T：指定连接尝试的超时时间；
-t：指定要创建的密钥类型；
-v：信息模式，打印调试信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>主机列表：指定要收集公钥的主机列表。</p>`,10),c=[d];function r(t,h){return e(),s("div",null,c)}const o=a(i,[["render",r],["__file","ssh-keyscan.html.vue"]]);export{o as default};
