import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h1 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h1><p>比 netstat 好用的socket统计信息，iproute2 包附带的另一个工具，允许你查询 socket 的有关统计信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>ss命令</strong> 用来显示处于活动状态的套接字信息。ss命令可以用来获取socket统计信息，它可以显示和netstat类似的内容。但ss的优势在于它能够显示更多更详细的有关TCP和连接状态的信息，而且比netstat更快速更高效。</p><p>当服务器的socket连接数量变得非常大时，无论是使用netstat命令还是直接<code>cat /proc/net/tcp</code>，执行速度都会很慢。可能你不会有切身的感受，但请相信我，当服务器维持的连接达到上万个的时候，使用netstat等于浪费 生命，而用ss才是节省时间。</p><p>天下武功唯快不破。ss快的秘诀在于，它利用到了TCP协议栈中tcp_diag。tcp_diag是一个用于分析统计的模块，可以获得Linux 内核中第一手的信息，这就确保了ss的快捷高效。当然，如果你的系统中没有tcp_diag，ss也可以正常运行，只是效率会变得稍慢。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ss <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
ss <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>过滤<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h, <span class="token parameter variable">--help</span>      帮助信息
-V, <span class="token parameter variable">--version</span>   程序版本信息
-n, <span class="token parameter variable">--numeric</span>   不解析服务名称
-r, <span class="token parameter variable">--resolve</span>   解析主机名
-a, <span class="token parameter variable">--all</span>       显示所有套接字（sockets）
-l, <span class="token parameter variable">--listening</span> 显示监听状态的套接字（sockets）
-o, <span class="token parameter variable">--options</span>   显示计时器信息
-e, <span class="token parameter variable">--extended</span>  显示详细的套接字（sockets）信息
-m, <span class="token parameter variable">--memory</span>    显示套接字（socket）的内存使用情况
-p, <span class="token parameter variable">--processes</span> 显示使用套接字（socket）的进程
-i, <span class="token parameter variable">--info</span>      显示 TCP内部信息
-s, <span class="token parameter variable">--summary</span>   显示套接字（socket）使用概况
-4, <span class="token parameter variable">--ipv4</span>      仅显示IPv4的套接字（sockets）
-6, <span class="token parameter variable">--ipv6</span>      仅显示IPv6的套接字（sockets）
-0, <span class="token parameter variable">--packet</span>    显示 PACKET 套接字（socket）
-t, <span class="token parameter variable">--tcp</span>       仅显示 TCP套接字（sockets）
-u, <span class="token parameter variable">--udp</span>       仅显示 UCP套接字（sockets）
-d, <span class="token parameter variable">--dccp</span>      仅显示 DCCP套接字（sockets）
-w, <span class="token parameter variable">--raw</span>       仅显示 RAW套接字（sockets）
-x, <span class="token parameter variable">--unix</span>      仅显示 Unix套接字（sockets）
-f, <span class="token parameter variable">--family</span><span class="token operator">=</span>FAMILY  显示 FAMILY类型的套接字（sockets），FAMILY可选，支持  unix, inet, inet6, link, netlink
-A, <span class="token parameter variable">--query</span><span class="token operator">=</span>QUERY, <span class="token parameter variable">--socket</span><span class="token operator">=</span>QUERY
      QUERY :<span class="token operator">=</span> <span class="token punctuation">{</span>all<span class="token operator">|</span>inet<span class="token operator">|</span>tcp<span class="token operator">|</span>udp<span class="token operator">|</span>raw<span class="token operator">|</span>unix<span class="token operator">|</span>packet<span class="token operator">|</span>netlink<span class="token punctuation">}</span><span class="token punctuation">[</span>,QUERY<span class="token punctuation">]</span>
-D, <span class="token parameter variable">--diag</span><span class="token operator">=</span>FILE     将原始TCP套接字（sockets）信息转储到文件
 -F, <span class="token parameter variable">--filter</span><span class="token operator">=</span>FILE  从文件中都去过滤器信息
       FILTER :<span class="token operator">=</span> <span class="token punctuation">[</span> state TCP-STATE <span class="token punctuation">]</span> <span class="token punctuation">[</span> EXPRESSION <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ss <span class="token parameter variable">-t</span> <span class="token parameter variable">-a</span>    <span class="token comment"># 显示TCP连接</span>
ss <span class="token parameter variable">-s</span>       <span class="token comment"># 显示 Sockets 摘要</span>
ss <span class="token parameter variable">-l</span>       <span class="token comment"># 列出所有打开的网络连接端口</span>
ss <span class="token parameter variable">-pl</span>      <span class="token comment"># 查看进程使用的socket</span>
ss <span class="token parameter variable">-lp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">3306</span>  <span class="token comment"># 找出打开套接字/端口应用程序</span>
ss <span class="token parameter variable">-u</span> <span class="token parameter variable">-a</span>    显示所有UDP Sockets
ss <span class="token parameter variable">-o</span> state established <span class="token string">&#39;( dport = :smtp or sport = :smtp )&#39;</span> <span class="token comment"># 显示所有状态为established的SMTP连接</span>
ss <span class="token parameter variable">-o</span> state established <span class="token string">&#39;( dport = :http or sport = :http )&#39;</span> <span class="token comment"># 显示所有状态为Established的HTTP连接</span>
ss <span class="token parameter variable">-o</span> state fin-wait-1 <span class="token string">&#39;( sport = :http or sport = :https )&#39;</span> dst <span class="token number">193.233</span>.7/24  <span class="token comment"># 列举出处于 FIN-WAIT-1状态的源端口为 80或者 443，目标网络为 193.233.7/24所有 tcp套接字</span>

<span class="token comment"># ss 和 netstat 效率对比</span>
<span class="token function">time</span> <span class="token function">netstat</span> <span class="token parameter variable">-at</span>
<span class="token function">time</span> ss

<span class="token comment"># 匹配远程地址和端口号</span>
<span class="token comment"># ss dst ADDRESS_PATTERN</span>
ss dst <span class="token number">192.168</span>.1.5
ss dst <span class="token number">192.168</span>.119.113:http
ss dst <span class="token number">192.168</span>.119.113:smtp
ss dst <span class="token number">192.168</span>.119.113:443

<span class="token comment"># 匹配本地地址和端口号</span>
<span class="token comment"># ss src ADDRESS_PATTERN</span>
ss src <span class="token number">192.168</span>.119.103
ss src <span class="token number">192.168</span>.119.103:http
ss src <span class="token number">192.168</span>.119.103:80
ss src <span class="token number">192.168</span>.119.103:smtp
ss src <span class="token number">192.168</span>.119.103:25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将本地或者远程端口和一个数比较</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ss dport OP PORT 远程端口和一个数比较；</span>
<span class="token comment"># ss sport OP PORT 本地端口和一个数比较</span>
<span class="token comment"># OP 可以代表以下任意一个:</span>
<span class="token comment"># &lt;= or le : 小于或等于端口号</span>
<span class="token comment"># &gt;= or ge : 大于或等于端口号</span>
<span class="token comment"># == or eq : 等于端口号</span>
<span class="token comment"># != or ne : 不等于端口号</span>
<span class="token comment"># &lt; or gt : 小于端口号</span>
<span class="token comment"># &gt; or lt : 大于端口号</span>
ss  sport <span class="token operator">=</span> :http
ss  dport <span class="token operator">=</span> :http
ss  dport <span class="token punctuation">\\</span><span class="token operator">&gt;</span> :1024
ss  sport <span class="token punctuation">\\</span><span class="token operator">&gt;</span> :1024
ss sport <span class="token punctuation">\\</span><span class="token operator">&lt;</span> :32000
ss  sport eq :22
ss  dport <span class="token operator">!=</span> :22
ss  state connected sport <span class="token operator">=</span> :http
ss <span class="token punctuation">\\</span><span class="token punctuation">(</span> sport <span class="token operator">=</span> :http or sport <span class="token operator">=</span> :https <span class="token punctuation">\\</span><span class="token punctuation">)</span>
ss <span class="token parameter variable">-o</span> state fin-wait-1 <span class="token punctuation">\\</span><span class="token punctuation">(</span> sport <span class="token operator">=</span> :http or sport <span class="token operator">=</span> :https <span class="token punctuation">\\</span><span class="token punctuation">)</span> dst <span class="token number">192.168</span>.1/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>用TCP 状态过滤Sockets</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ss <span class="token parameter variable">-4</span> state closing
<span class="token comment"># ss -4 state FILTER-NAME-HERE</span>
<span class="token comment"># ss -6 state FILTER-NAME-HERE</span>
<span class="token comment"># FILTER-NAME-HERE 可以代表以下任何一个：</span>
<span class="token comment"># established、 syn-sent、 syn-recv、 fin-wait-1、 fin-wait-2、 time-wait、 closed、 close-wait、 last-ack、 listen、 closing、</span>
<span class="token comment"># all : 所有以上状态</span>
<span class="token comment"># connected : 除了listen and closed的所有状态</span>
<span class="token comment"># synchronized :所有已连接的状态除了syn-sent</span>
<span class="token comment"># bucket : 显示状态为maintained as minisockets,如：time-wait和syn-recv.</span>
<span class="token comment"># big : 和bucket相反.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>显示ICP连接</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss -t -a</span>
State       Recv-Q Send-Q                            Local Address:Port                                Peer Address:Port
LISTEN      <span class="token number">0</span>      <span class="token number">0</span>                                             *:3306                                           *:*
LISTEN      <span class="token number">0</span>      <span class="token number">0</span>                                             *:http                                           *:*
LISTEN      <span class="token number">0</span>      <span class="token number">0</span>                                             *:ssh                                            *:*
LISTEN      <span class="token number">0</span>      <span class="token number">0</span>                                     <span class="token number">127.0</span>.0.1:smtp                                           *:*
ESTAB       <span class="token number">0</span>      <span class="token number">0</span>                                <span class="token number">112.124</span>.15.130:42071                              <span class="token number">42.156</span>.166.25:http
ESTAB       <span class="token number">0</span>      <span class="token number">0</span>                                <span class="token number">112.124</span>.15.130:ssh                              <span class="token number">121.229</span>.196.235:33398
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>显示 Sockets 摘要</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss -s</span>
Total: <span class="token number">172</span> <span class="token punctuation">(</span>kernel <span class="token number">189</span><span class="token punctuation">)</span>
TCP:   <span class="token number">10</span> <span class="token punctuation">(</span>estab <span class="token number">2</span>, closed <span class="token number">4</span>, orphaned <span class="token number">0</span>, synrecv <span class="token number">0</span>, timewait <span class="token number">0</span>/0<span class="token punctuation">)</span>, ports <span class="token number">5</span>

Transport Total     <span class="token function">ip</span>        IPv6
*         <span class="token number">189</span>       -         -
RAW       <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>
UDP       <span class="token number">5</span>         <span class="token number">5</span>         <span class="token number">0</span>
TCP       <span class="token number">6</span>         <span class="token number">6</span>         <span class="token number">0</span>
INET      <span class="token number">11</span>        <span class="token number">11</span>        <span class="token number">0</span>
FRAG      <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列出当前的established, closed, orphaned and waiting TCP sockets</p><p><strong>列出所有打开的网络连接端口</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss -l</span>
Recv-Q Send-Q                                 Local Address:Port                                     Peer Address:Port
<span class="token number">0</span>      <span class="token number">0</span>                                                  *:3306                                                *:*
<span class="token number">0</span>      <span class="token number">0</span>                                                  *:http                                                *:*
<span class="token number">0</span>      <span class="token number">0</span>                                                  *:ssh                                                 *:*
<span class="token number">0</span>      <span class="token number">0</span>                                          <span class="token number">127.0</span>.0.1:smtp                                                *:*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看进程使用的socket</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss -pl</span>
Recv-Q Send-Q                                          Local Address:Port                                              Peer Address:Port
<span class="token number">0</span>      <span class="token number">0</span>                                                           *:3306                                                         *:*        users:<span class="token variable"><span class="token punctuation">((</span>&quot;mysqld&quot;<span class="token punctuation">,</span><span class="token number">1718</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">))</span></span>
<span class="token number">0</span>      <span class="token number">0</span>                                                           *:http                                                         *:*        users:<span class="token variable"><span class="token punctuation">((</span>&quot;nginx&quot;<span class="token punctuation">,</span><span class="token number">13312</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>&quot;nginx&quot;<span class="token punctuation">,</span><span class="token number">13333</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">))</span></span>
<span class="token number">0</span>      <span class="token number">0</span>                                                           *:ssh                                                          *:*        users:<span class="token variable"><span class="token punctuation">((</span>&quot;sshd&quot;<span class="token punctuation">,</span><span class="token number">1379</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">))</span></span>
<span class="token number">0</span>      <span class="token number">0</span>                                                   <span class="token number">127.0</span>.0.1:smtp                                                         *:*        us
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>找出打开套接字/端口应用程序</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss -pl | grep 3306</span>
<span class="token number">0</span>      <span class="token number">0</span>                            *:3306                          *:*        users:<span class="token variable"><span class="token punctuation">((</span>&quot;mysqld&quot;<span class="token punctuation">,</span><span class="token number">1718</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>显示所有UDP Sockets</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss -u -a</span>
State       Recv-Q Send-Q                                     Local Address:Port                                         Peer Address:Port
UNCONN      <span class="token number">0</span>      <span class="token number">0</span>                                                      *:syslog                                                  *:*
UNCONN      <span class="token number">0</span>      <span class="token number">0</span>                                         <span class="token number">112.124</span>.15.130:ntp                                                     *:*
UNCONN      <span class="token number">0</span>      <span class="token number">0</span>                                            <span class="token number">10.160</span>.7.81:ntp                                                     *:*
UNCONN      <span class="token number">0</span>      <span class="token number">0</span>                                              <span class="token number">127.0</span>.0.1:ntp                                                     *:*
UNCONN      <span class="token number">0</span>      <span class="token number">0</span>                                                      *:ntp                                                     *:*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>出所有端口为 22（ssh）的连接</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss state all sport = :ssh</span>
Netid State      Recv-Q Send-Q     Local Address:Port                      Peer Address:Port
tcp   LISTEN     <span class="token number">0</span>      <span class="token number">128</span>                    *:ssh                                  *:*
tcp   ESTAB      <span class="token number">0</span>      <span class="token number">0</span>          <span class="token number">192.168</span>.0.136:ssh                      <span class="token number">192.168</span>.0.102:46540
tcp   LISTEN     <span class="token number">0</span>      <span class="token number">128</span>                   :::ssh                                 :::*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看TCP的连接状态</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ss  -tan|awk &#39;NR&gt;1{++S[$1]}END{for (a in S) print a,S[a]}&#39;</span>
LISTEN <span class="token number">7</span>
ESTAB <span class="token number">31</span>
TIME-WAIT <span class="token number">28</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),l=[p];function i(c,o){return n(),a("div",null,l)}const d=s(t,[["render",i],["__file","ss.html.vue"]]);export{d as default};
