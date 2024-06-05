import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="fping" tabindex="-1"><a class="header-anchor" href="#fping" aria-hidden="true">#</a> fping</h1><p>fping检测主机是否存在</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>fping命令</strong> fping类似于ping，但比ping强大。与ping要等待某一主机连接超时或发回反馈信息不同，fping给一个主机发送完数据包后，马上给下一个主机发送数据包，实现多主机同时ping，fping还可以在命令行中指定要ping的主机数量范围。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fping<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span>  <span class="token comment"># 显示存活的主机</span>
<span class="token parameter variable">-b</span>  <span class="token comment"># ping 数据包的大小。（默认为56）</span>
<span class="token parameter variable">-c</span>  <span class="token comment"># ping每个目标的次数 (默认为1)</span>
<span class="token parameter variable">-f</span>  <span class="token comment"># 从文件获取目标列表(不能与 -g 同时使用)</span>
<span class="token parameter variable">-l</span>  <span class="token comment"># 循环发送ping</span>
<span class="token parameter variable">-g</span>  <span class="token comment"># 通过指定开始和结束地址来生成目标列表,可以使网段</span>
<span class="token parameter variable">-u</span>  <span class="token comment"># 显示不可到达的目标</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>安装fping命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先安装epel源：</span>
yum <span class="token function">install</span> epel* <span class="token parameter variable">-y</span>
<span class="token comment"># 安装fping包：</span>
yum <span class="token function">install</span> fping <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选择性ping指定ip：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~<span class="token punctuation">]</span><span class="token comment"># fping 192.168.0.1 192.168.0.125 192.168.0.126 2&gt;/dev/null</span>
<span class="token number">192.168</span>.0.1 is alive
<span class="token number">192.168</span>.0.125 is alive
<span class="token number">192.168</span>.0.126 is unreachable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ping整个网段：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~<span class="token punctuation">]</span><span class="token comment"># fping -g 192.168.0.0/24 2&gt;/dev/null</span>
<span class="token number">192.168</span>.0.1 is alive
<span class="token number">192.168</span>.0.103 is alive
<span class="token punctuation">..</span>.
<span class="token number">192.168</span>.0.253 is unreachable
<span class="token number">192.168</span>.0.254 is unreachable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ping整个网段，只显示存活的主机：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~<span class="token punctuation">]</span><span class="token comment"># fping -ag 192.168.0.0/24 2&gt;/dev/null</span>
<span class="token number">192.168</span>.0.1
<span class="token number">192.168</span>.0.103
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ping某一段ip：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~<span class="token punctuation">]</span><span class="token comment"># fping -ag 192.168.0.5 192.168.0.130 2&gt;/dev/null</span>
<span class="token number">192.168</span>.0.103
<span class="token punctuation">..</span>.
<span class="token number">192.168</span>.0.125
<span class="token number">192.168</span>.0.130
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[l];function c(d,r){return a(),s("div",null,p)}const u=n(i,[["render",c],["__file","fping.html.vue"]]);export{u as default};
