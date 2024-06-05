import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> host</h1><p>常用的分析域名查询工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>host命令</strong> 是常用的分析域名查询工具，可以用来测试域名系统工作是否正常。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>host<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：显示详细的DNS信息；
-c<span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span>：指定查询类型，默认值为“IN“；
-C：查询指定主机的完整的SOA记录；
-r：在查询域名时，不使用递归的查询方式；
-t<span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span>：指定查询的域名信息类型；
-v：显示指令执行的详细信息；
-w：如果域名服务器没有给出应答信息，则总是等待，直到域名服务器给出应答；
-W<span class="token operator">&lt;</span>时间<span class="token operator">&gt;</span>：指定域名查询的最长时间，如果在指定时间内域名服务器没有给出应答信息，则退出指令；
-4：使用IPv4；
-6：使用IPv6.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>主机：指定要查询信息的主机信息。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># host www.jsdig.com </span>
www.jsdig.com is an <span class="token builtin class-name">alias</span> <span class="token keyword">for</span> host.1.jsdig.com.
host.1.jsdig.com has address <span class="token number">100.42</span>.212.8

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># host -a www.jsdig.com</span>
Trying <span class="token string">&quot;www.jsdig.com&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> -<span class="token operator">&gt;&gt;</span>HEADER<span class="token operator">&lt;&lt;-</span> opcode: QUERY, status: NOERROR, id: <span class="token number">34671</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> flags: qr rd ra<span class="token punctuation">;</span> QUERY: <span class="token number">1</span>, ANSWER: <span class="token number">1</span>, AUTHORITY: <span class="token number">0</span>, ADDITIONAL: <span class="token number">0</span>

<span class="token punctuation">;</span><span class="token punctuation">;</span> QUESTION SECTION:
<span class="token punctuation">;</span>www.jsdig.com.               IN      ANY

<span class="token punctuation">;</span><span class="token punctuation">;</span> ANSWER SECTION:
www.jsdig.com.        <span class="token number">463</span>     IN      CNAME   host.1.jsdig.com.

Received <span class="token number">54</span> bytes from <span class="token number">202.96</span>.104.15<span class="token comment">#53 in 0 ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[t];function o(l,d){return n(),a("div",null,c)}const r=s(i,[["render",o],["__file","host.html.vue"]]);export{r as default};
