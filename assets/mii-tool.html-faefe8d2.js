import{_ as a,p as s,q as n,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="mii-tool" tabindex="-1"><a class="header-anchor" href="#mii-tool" aria-hidden="true">#</a> mii-tool</h1><p>配置网络设备协商方式的工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mii-tool命令</strong> 是用于查看、管理介质的网络接口的状态，有时网卡需要配置协商方式，比如10/100/1000M的网卡半双工、全双工、自动协商的配置。但大多数的网络设备是不用我们来修改协商，因为大多数网络设置接入的时候，都采用自动协商来解决相互通信的问题。不过自动协商也不是万能的，有时也会出现错误，比如丢包率比较高，这时就要我们来指定网卡的协商方式。mii-tool就是能指定网卡的协商方式。下面我们说一说mii-tool的用法。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>usage: mii-tool <span class="token punctuation">[</span>-VvRrwl<span class="token punctuation">]</span> <span class="token punctuation">[</span>-A media,<span class="token punctuation">..</span>. <span class="token operator">|</span> <span class="token parameter variable">-F</span> media<span class="token punctuation">]</span> <span class="token punctuation">[</span>interface <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-V</span> 显示版本信息；
<span class="token parameter variable">-v</span> 显示网络接口的信息；
<span class="token parameter variable">-R</span> 重设MII到开启状态；
<span class="token parameter variable">-r</span> 重启自动协商模式；
<span class="token parameter variable">-w</span> 查看网络接口连接的状态变化；
<span class="token parameter variable">-l</span> 写入事件到系统日志；
<span class="token parameter variable">-A</span> 指令特定的网络接口；
<span class="token parameter variable">-F</span> 更改网络接口协商方式；

media: 100baseT4, 100baseTx-FD, 100baseTx-HD, 10baseT-FD, 10baseT-HD,
        <span class="token punctuation">(</span>to advertise both HD and FD<span class="token punctuation">)</span> 100baseTx, 10baseT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>查看网络接口的协商状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mii-tool -v eth0</span>
eth0: negotiated 100baseTx-FD, <span class="token function">link</span> ok
  product info: vendor 00:50:ef, model <span class="token number">60</span> <span class="token function">rev</span> <span class="token number">8</span>
  basic mode:   autonegotiation enabled
  basic status: autonegotiation complete, <span class="token function">link</span> ok
  capabilities: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
  advertising:  100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD flow-control
  <span class="token function">link</span> partner: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：上面的例子，我们可以看得到是自动协商，注意红字的部份。</p><p>更改网络接口协商方式：</p><p>更改网络接口的协商方式，我们要用到<code>-F</code>选项，后面可以接100baseT4, 100baseTx-FD, 100baseTx-HD, 10baseT-FD, 10baseT-HD等参数；</p><p>如果我们想把网络接口eth0改为1000Mb/s全双工的模式应该怎么办呢？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mii-tool -F 100baseTx-FD</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mii-tool -v eth0</span>
eth0: <span class="token number">100</span> Mbit, full duplex, <span class="token function">link</span> ok
  product info: vendor 00:00:00, model <span class="token number">0</span> <span class="token function">rev</span> <span class="token number">0</span>
  basic mode:   <span class="token number">100</span> Mbit, full duplex
  basic status: <span class="token function">link</span> ok
  capabilities: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
  advertising:  100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：是不是已经改过来了？当然，我们也一样用ethtool工具来更改，比如执行下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ethtool -s eth0 speed 100 duplex full</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),t=[l];function o(c,d){return s(),n("div",null,t)}const r=a(i,[["render",o],["__file","mii-tool.html.vue"]]);export{r as default};
