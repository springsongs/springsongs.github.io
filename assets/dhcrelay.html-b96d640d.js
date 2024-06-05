import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const r={},i=s(`<h1 id="dhcrelay" tabindex="-1"><a class="header-anchor" href="#dhcrelay" aria-hidden="true">#</a> dhcrelay</h1><p>使用dhcrelay命令可以提供中继DHCP和BOOTP请求</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>dhcrelay命令</strong> 使用dhcrelay命令可以提供中继DHCP和BOOTP请求，从一个没有DHCP服务器的子网直接连接到其它子网内的一个或多个DHCP服务器。该命令在DHCP中继服务器上使用，同时支持DHCPv4/BOOTP和DHCPv6协议。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dhcrelay <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>DHCP服务器<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>跳数<span class="token operator">&gt;</span> 当转发数据包时，dhcrelay丢弃已经达到一个最大跳数的数据包。默认值是10，最大值是255
<span class="token parameter variable">-4</span> 运行dhcrelay命令作为DHCPv4/BOOTP中继代理。这是默认操作模式
<span class="token parameter variable">-6</span> 运行dhcrelay命令作为DHCPv6中继代理
<span class="token parameter variable">-q</span> 安静模式
<span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>端口<span class="token operator">&gt;</span> 监听和发送端口。DHCPv4/BOOTP默认端口是67，DHCPv6默认端口是547
<span class="token parameter variable">-A</span> <span class="token operator">&lt;</span>长度<span class="token operator">&gt;</span> 指定发送到DHCP服务器的最大数据包大小
<span class="token parameter variable">-d</span> 强制dhcrelay命令作为前台进程运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><p>指定DHCP服务器的位置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dhcrelay 192.168.0.2</span>
Internet Systems Consortium DHCP Relay Agent4.1.1-P1
Copyright <span class="token number">2004</span>-2010 Internet SystemsConsortium.
All rights reserved.
For info, please visithttps://www.isc.org/software/dhcp/
Listening on LPF/eth1/00:0c:29:fc:2f:ef
Sending on  LPF/eth1/00:0c:29:fc:2f:ef
Listening on LPF/eth0/00:0c:27:fc:25:ec
Sending on  LPF/eth0/00:0c:27:fc:25:ec
Sending on  Socket/fallback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[i];function d(t,c){return e(),n("div",null,l)}const p=a(r,[["render",d],["__file","dhcrelay.html.vue"]]);export{p as default};
