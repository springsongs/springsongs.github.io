import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h1 id="iftop" tabindex="-1"><a class="header-anchor" href="#iftop" aria-hidden="true">#</a> iftop</h1><p>一款实时流量监控工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>iftop命令</strong> 是一款实时流量监控工具，监控TCP/IP连接等，缺点就是无报表功能。必须以root身份才能运行。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iftop<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iftop: display bandwidth usage on an interface by <span class="token function">host</span>

Synopsis: iftop <span class="token parameter variable">-h</span> <span class="token operator">|</span> <span class="token punctuation">[</span>-npblNBP<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i interface<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f filter code<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>-F net/mask<span class="token punctuation">]</span> <span class="token punctuation">[</span>-G net6/mask6<span class="token punctuation">]</span>

   <span class="token parameter variable">-h</span>                  display this message
   <span class="token parameter variable">-n</span>                  don<span class="token string">&#39;t do hostname lookups
   -N                  don&#39;</span>t convert port numbers to services
   <span class="token parameter variable">-p</span>                  run <span class="token keyword">in</span> promiscuous mode <span class="token punctuation">(</span>show traffic between other
                       hosts on the same network segment<span class="token punctuation">)</span>
   <span class="token parameter variable">-b</span>                  don&#39;t display a bar graph of traffic
   <span class="token parameter variable">-B</span>                  Display bandwidth <span class="token keyword">in</span> bytes
   <span class="token parameter variable">-i</span> interface        listen on named interface
   <span class="token parameter variable">-f</span> filter code      use filter code to <span class="token keyword">select</span> packets to count
                      <span class="token punctuation">(</span>default: none, but only IP packets are counted<span class="token punctuation">)</span>
   <span class="token parameter variable">-F</span> net/mask         show traffic flows in/out of IPv4 network
   <span class="token parameter variable">-G</span> net6/mask6       show traffic flows in/out of IPv6 network
   <span class="token parameter variable">-l</span>                  display and count link-local IPv6 traffic <span class="token punctuation">(</span>default: off<span class="token punctuation">)</span>
   <span class="token parameter variable">-P</span>                  show ports as well as hosts
   <span class="token parameter variable">-m</span> limit            sets the upper limit <span class="token keyword">for</span> the bandwidth scale
   <span class="token parameter variable">-c</span> config <span class="token function">file</span>      specifies an alternative configuration <span class="token function">file</span>
   <span class="token parameter variable">-t</span>                  use text interface without ncurses
   
   Sorting orders:
   <span class="token parameter variable">-o</span> 2s                Sort by first <span class="token function">column</span> <span class="token punctuation">(</span>2s traffic average<span class="token punctuation">)</span>
   <span class="token parameter variable">-o</span> 10s               Sort by second <span class="token function">column</span> <span class="token punctuation">(</span>10s traffic average<span class="token punctuation">)</span> <span class="token punctuation">[</span>default<span class="token punctuation">]</span>
   <span class="token parameter variable">-o</span> 40s               Sort by third <span class="token function">column</span> <span class="token punctuation">(</span>40s traffic average<span class="token punctuation">)</span>
   <span class="token parameter variable">-o</span> <span class="token builtin class-name">source</span>            Sort by <span class="token builtin class-name">source</span> address
   <span class="token parameter variable">-o</span> destination       Sort by destination address
   
   The following options are only available <span class="token keyword">in</span> combination with <span class="token parameter variable">-t</span>
   <span class="token parameter variable">-s</span> num              print one single text output afer num seconds, <span class="token keyword">then</span> quit
   <span class="token parameter variable">-L</span> num              number of lines to print
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="界面说明" tabindex="-1"><a class="header-anchor" href="#界面说明" aria-hidden="true">#</a> 界面说明</h3><blockquote><p>第一行为带宽，这里为1Mbit,不是字节哦. 连接列表，最后三列分别是2秒，10秒和40秒的平均流量 <code>=&gt;</code> 代表发送<br><code>&lt;=</code> 代表接收 最后三行表示发送，接收和全部的流量， 第二列为你运行iftop到目前流量，第三列为高峰值，第四列为平均值。</p></blockquote><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iftop           <span class="token comment"># 默认是监控第一块网卡的流量</span>
iftop <span class="token parameter variable">-i</span> eth1   <span class="token comment"># 监控eth1</span>
iftop <span class="token parameter variable">-n</span>        <span class="token comment"># 直接显示IP, 不进行DNS反解析</span>
iftop <span class="token parameter variable">-N</span>        <span class="token comment"># 直接显示连接埠编号, 不显示服务名称</span>
iftop <span class="token parameter variable">-F</span> <span class="token number">192.168</span>.1.0/24 or <span class="token number">192.168</span>.1.0/255.255.255.0  <span class="token comment"># 显示某个网段进出封包流量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[i];function o(p,r){return n(),s("div",null,l)}const d=a(t,[["render",o],["__file","iftop.html.vue"]]);export{d as default};
