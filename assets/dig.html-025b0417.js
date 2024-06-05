import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h1 id="dig" tabindex="-1"><a class="header-anchor" href="#dig" aria-hidden="true">#</a> dig</h1><p>域名查询工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>dig命令</strong> 是常用的域名查询工具，可以用来测试域名系统工作是否正常。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dig<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@<span class="token operator">&lt;</span>服务器地址<span class="token operator">&gt;</span>：指定进行域名解析的域名服务器；
-b<span class="token operator">&lt;</span>ip地址<span class="token operator">&gt;</span>：当主机具有多个IP地址，指定使用本机的哪个IP地址向域名服务器发送域名查询请求；
-f<span class="token operator">&lt;</span>文件名称<span class="token operator">&gt;</span>：指定dig以批处理的方式运行，指定的文件中保存着需要批处理查询的DNS任务信息；
-P：指定域名服务器所使用端口号；
-t<span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span>：指定要查询的DNS数据类型；
-x<span class="token operator">&lt;</span>IP地址<span class="token operator">&gt;</span>：执行逆向域名查询；
-4：使用IPv4；
-6：使用IPv6；
-h：显示指令帮助信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>主机：指定要查询域名主机；</li><li>查询类型：指定DNS查询的类型；</li><li>查询类：指定查询DNS的class；</li><li>查询选项：指定查询选项。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dig www.jsdig.com</span>

<span class="token punctuation">;</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> DiG <span class="token number">9.3</span>.6-P1-RedHat-9.3.6-20.P1.el5_8.1 <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> www.jsdig.com
<span class="token punctuation">;</span><span class="token punctuation">;</span> global options:  printcmd
<span class="token punctuation">;</span><span class="token punctuation">;</span> Got answer:
<span class="token punctuation">;</span><span class="token punctuation">;</span> -<span class="token operator">&gt;&gt;</span>HEADER<span class="token operator">&lt;&lt;-</span> opcode: QUERY, status: NOERROR, id: <span class="token number">2115</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> flags: qr rd ra<span class="token punctuation">;</span> QUERY: <span class="token number">1</span>, ANSWER: <span class="token number">2</span>, AUTHORITY: <span class="token number">2</span>, ADDITIONAL: <span class="token number">0</span>

<span class="token punctuation">;</span><span class="token punctuation">;</span> QUESTION SECTION:
<span class="token punctuation">;</span>www.jsdig.com.               IN      A

<span class="token punctuation">;</span><span class="token punctuation">;</span> ANSWER SECTION:
www.jsdig.com.        <span class="token number">0</span>       IN      CNAME   host.1.jsdig.com.
host.1.jsdig.com.     <span class="token number">0</span>       IN      A       <span class="token number">100.42</span>.212.8

<span class="token punctuation">;</span><span class="token punctuation">;</span> AUTHORITY SECTION:
jsdig.com.            <span class="token number">8</span>       IN      NS      f1g1ns2.dnspod.net.
jsdig.com.            <span class="token number">8</span>       IN      NS      f1g1ns1.dnspod.net.

<span class="token punctuation">;</span><span class="token punctuation">;</span> Query time: <span class="token number">0</span> msec
<span class="token punctuation">;</span><span class="token punctuation">;</span> SERVER: <span class="token number">202.96</span>.104.15<span class="token comment">#53(202.96.104.15)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> WHEN: Thu Dec <span class="token number">26</span> <span class="token number">11</span>:14:37 <span class="token number">2013</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> MSG SIZE  rcvd: <span class="token number">121</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","dig.html.vue"]]);export{r as default};
