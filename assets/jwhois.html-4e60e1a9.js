import{_ as s,p as a,q as n,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="jwhois" tabindex="-1"><a class="header-anchor" href="#jwhois" aria-hidden="true">#</a> jwhois</h1><p>whois 客户端服务</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>jwhois</strong> searches Whois servers for the object on the command line.The host to query is taken from a global configuration file, a configuration file specified on the command line, or selected directly on the command line.</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jwhois <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--version</span>                  display version number and patch level
<span class="token parameter variable">--help</span>                     display this <span class="token builtin class-name">help</span>
-v, <span class="token parameter variable">--verbose</span>              verbose debug output
<span class="token parameter variable">-c</span> FILE, <span class="token parameter variable">--config</span><span class="token operator">=</span>FILE     use FILE as configuration <span class="token function">file</span>
<span class="token parameter variable">-h</span> HOST, <span class="token parameter variable">--host</span><span class="token operator">=</span>HOST       explicitly query HOST
-n, --no-redirect          disable content redirection
-s, --no-whoisservers      disable whois-servers.net <span class="token function">service</span> support
-a, <span class="token parameter variable">--raw</span>                  disable reformatting of the query
-i, --display-redirections display all redirects instead of hiding them
<span class="token parameter variable">-p</span> PORT, <span class="token parameter variable">--port</span><span class="token operator">=</span>PORT       use port number PORT <span class="token punctuation">(</span>in conjunction with HOST<span class="token punctuation">)</span>
-r, <span class="token parameter variable">--rwhois</span>               force an rwhois query to be made
--rwhois-display<span class="token operator">=</span><span class="token environment constant">DISPLAY</span>   sets the display option <span class="token keyword">in</span> rwhois queries
--rwhois-limit<span class="token operator">=</span>LIMIT       sets the maximum number of matches to <span class="token builtin class-name">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：以上英文部分寻求网友协助翻译，翻译结果可发送至 sa(at)linuxde.net，谢谢！</p></blockquote><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>显示指定用户信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> jwhois root

<span class="token comment"># 查找root用户信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询域名信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> jwhois linuxde.net
<span class="token punctuation">[</span>Querying whois.verisign-grs.com<span class="token punctuation">]</span>
<span class="token punctuation">[</span>Redirected to whois.west263.com<span class="token punctuation">]</span>
<span class="token punctuation">[</span>Querying whois.west263.com<span class="token punctuation">]</span>
<span class="token punctuation">[</span>whois.west263.com<span class="token punctuation">]</span>
Domain Name: linuxde.net                   
Registry Domain id: whois protect
Registrar WHOIS Server: whois.west263.com

<span class="token punctuation">..</span>.省略部分内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[t];function o(l,c){return a(),n("div",null,r)}const p=s(i,[["render",o],["__file","jwhois.html.vue"]]);export{p as default};
