import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="ipcalc" tabindex="-1"><a class="header-anchor" href="#ipcalc" aria-hidden="true">#</a> ipcalc</h1><p>简单的IP地址计算器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>ipcalc命令</strong> 是一个简单的ip地址计算器，可以完成简单的IP地址计算任务。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ipcalc<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b：由给定的IP地址和网络掩码计算出广播地址；
-h：显示给定UP地址所对应的主机名；
-m：由给定的IP地址计算器网络掩码；
-p：显示给定的掩码或IP地址的前缀；
-n：由给定的IP地址和网络掩码计算网络地址；
-s：安静模式；
--help：显示帮助信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -p 192.168.2.1 255.255.255.0</span>
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -n 192.168.2.1 255.255.255.0</span>
<span class="token assign-left variable">NETWORK</span><span class="token operator">=</span><span class="token number">192.168</span>.2.0

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -h 127.0.0.1</span>
<span class="token assign-left variable">hostname</span><span class="token operator">=</span>localhost.localdomain

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -m 192.168.2.1</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -pnbm 192.168.2.1 255.255.255.0</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>
<span class="token assign-left variable">BROADCAST</span><span class="token operator">=</span><span class="token number">192.168</span>.2.255
<span class="token assign-left variable">NETWORK</span><span class="token operator">=</span><span class="token number">192.168</span>.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[l];function t(p,o){return n(),s("div",null,c)}const d=a(i,[["render",t],["__file","ipcalc.html.vue"]]);export{d as default};
