import{_ as e,p as a,q as n,a1 as i}from"./framework-5866ffd3.js";const s={},d=i(`<h1 id="squidclient" tabindex="-1"><a class="header-anchor" href="#squidclient" aria-hidden="true">#</a> squidclient</h1><p>squid服务器的客户端管理工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>squidclient命令</strong> 使用squid服务器的客户端管理工具，它可以查看squid服务器的详细运行信息和管理squid服务器。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>squidclient<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：不包含“accept:header”；
-r：强制缓存重新加载URL；
-s：安静模式，不输出信息到标准输出设备；
-h：从指定主机获取url
-l：指定一个本地ip地址进行绑定；
-p：端口号，默认为3128；
-m：指定发送请求的方法；
-u：代理认证用户名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>URL：指定操作缓存中的URL。</p>`,10),r=[d];function c(l,t){return a(),n("div",null,r)}const h=e(s,[["render",c],["__file","squidclient.html.vue"]]);export{h as default};
