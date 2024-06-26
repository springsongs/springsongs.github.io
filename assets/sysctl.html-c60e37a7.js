import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h1 id="sysctl" tabindex="-1"><a class="header-anchor" href="#sysctl" aria-hidden="true">#</a> sysctl</h1><p>时动态地修改内核的运行参数</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>sysctl命令</strong> 被用于在内核运行时动态地修改内核的运行参数，可用的内核参数在目录<code>/proc/sys</code>中。它包含一些TCP/ip堆栈和虚拟内存系统的高级选项， 这可以让有经验的管理员提高引人注目的系统性能。用sysctl可以读取设置超过五百个系统变量。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sysctl<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-n：打印值时不打印关键字；
-e：忽略未知关键字错误；
-N：仅打印名称；
-w：当改变sysctl设置时使用此项；
-p：从配置文件“/etc/sysctl.conf”加载内核参数设置；
-a：打印当前所有可用的内核参数变量和值；
-A：以表格方式打印当前所有可用的内核参数变量和值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>变量=值：设置内核参数对应的变量值。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>查看所有可读变量：</p><p>sysctl -a</p><p>读一个指定的变量，例如<code>kern.maxproc</code>：</p><p>sysctl kern.maxproc kern.maxproc: 1044</p><p>要设置一个指定的变量，直接用<code>variable=value</code>这样的语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token assign-left variable">kern.maxfiles</span><span class="token operator">=</span><span class="token number">5000</span>
kern.maxfiles: <span class="token number">2088</span> -<span class="token operator">&gt;</span> <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用sysctl修改系统变量，也可以通过编辑sysctl.conf文件来修改系统变量。sysctl.conf看起来很像rc.conf。它用<code>variable=value</code>的形式来设定值。指定的值在系统进入多用户模式之后被设定。并不是所有的变量都可以在这个模式下设定。</p><p>sysctl变量的设置通常是字符串、数字或者布尔型。（布尔型用 1 来表示&#39;yes&#39;，用 0 来表示&#39;no&#39;）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">kernel.sysrq</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">kernel.core_uses_pid</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.conf.default.accept_redirects</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.conf.default.accept_source_route</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.conf.default.rp_filter</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_syncookies</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_max_syn_backlog</span><span class="token operator">=</span><span class="token number">2048</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_fin_timeout</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_synack_retries</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_keepalive_time</span><span class="token operator">=</span><span class="token number">3600</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_window_scaling</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_sack</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置sysctl" tabindex="-1"><a class="header-anchor" href="#配置sysctl" aria-hidden="true">#</a> 配置sysctl</h3><p>编辑此文件：<code>/etc/sysctl.conf</code></p><p>如果该文件为空，则输入以下内容，否则请根据情况自己做调整：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Controls source route verification</span>
<span class="token comment"># Default should work for all interfaces</span>
net.ipv4.conf.default.rp_filter <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># net.ipv4.conf.all.rp_filter = 1</span>
<span class="token comment"># net.ipv4.conf.lo.rp_filter = 1</span>
<span class="token comment"># net.ipv4.conf.eth0.rp_filter = 1</span>

<span class="token comment"># Disables IP source routing</span>
<span class="token comment"># Default should work for all interfaces</span>
net.ipv4.conf.default.accept_source_route <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment"># net.ipv4.conf.all.accept_source_route = 0</span>
<span class="token comment"># net.ipv4.conf.lo.accept_source_route = 0</span>
<span class="token comment"># net.ipv4.conf.eth0.accept_source_route = 0</span>

<span class="token comment"># Controls the System Request debugging functionality of the kernel</span>
kernel.sysrq <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment"># Controls whether core dumps will append the PID to the core filename.</span>
<span class="token comment"># Useful for debugging multi-threaded applications.</span>
kernel.core_uses_pid <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># Increase maximum amount of memory allocated to shm</span>
<span class="token comment"># Only uncomment if needed!</span>
<span class="token comment"># kernel.shmmax = 67108864</span>

<span class="token comment"># Disable ICMP Redirect Acceptance</span>
<span class="token comment"># Default should work for all interfaces</span>
net.ipv4.conf.default.accept_redirects <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment"># net.ipv4.conf.all.accept_redirects = 0</span>
<span class="token comment"># net.ipv4.conf.lo.accept_redirects = 0</span>
<span class="token comment"># net.ipv4.conf.eth0.accept_redirects = 0</span>

<span class="token comment"># enable Log Spoofed Packets, Source Routed Packets, Redirect Packets</span>
<span class="token comment"># Default should work for all interfaces</span>
net.ipv4.conf.default.log_martians <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># net.ipv4.conf.all.log_martians = 1</span>
<span class="token comment"># net.ipv4.conf.lo.log_martians = 1</span>
<span class="token comment"># net.ipv4.conf.eth0.log_martians = 1</span>

<span class="token comment"># Decrease the time default value for tcp_fin_timeout connection</span>
net.ipv4.tcp_fin_timeout <span class="token operator">=</span> <span class="token number">25</span>

<span class="token comment"># Decrease the time default value for tcp_keepalive_time connection</span>
net.ipv4.tcp_keepalive_time <span class="token operator">=</span> <span class="token number">1200</span>

<span class="token comment"># Turn on the tcp_window_scaling</span>
net.ipv4.tcp_window_scaling <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># Turn on the tcp_sack</span>
net.ipv4.tcp_sack <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># tcp_fack should be on because of sack</span>
net.ipv4.tcp_fack <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># Turn on the tcp_timestamps</span>
net.ipv4.tcp_timestamps <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># Enable TCP SYN Cookie Protection</span>
net.ipv4.tcp_syncookies <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># Enable ignoring broadcasts request</span>
net.ipv4.icmp_echo_ignore_broadcasts <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># Enable bad error message Protection</span>
net.ipv4.icmp_ignore_bogus_error_responses <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># make more local ports available</span>
<span class="token comment"># net.ipv4.ip_local_port_range = 1024 65000</span>

<span class="token comment"># set TCP Re-Ordering value in kernel to ‘5′</span>
net.ipv4.tcp_reordering <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment"># Lower syn retry rates</span>
net.ipv4.tcp_synack_retries <span class="token operator">=</span> <span class="token number">2</span>
net.ipv4.tcp_syn_retries <span class="token operator">=</span> <span class="token number">3</span>

<span class="token comment"># Set Max SYN Backlog to ‘2048′</span>
net.ipv4.tcp_max_syn_backlog <span class="token operator">=</span> <span class="token number">2048</span>

<span class="token comment"># Various Settings</span>
net.core.netdev_max_backlog <span class="token operator">=</span> <span class="token number">1024</span>

<span class="token comment"># Increase the maximum number of skb-heads to be cached</span>
net.core.hot_list_length <span class="token operator">=</span> <span class="token number">256</span>

<span class="token comment"># Increase the tcp-time-wait buckets pool size</span>
net.ipv4.tcp_max_tw_buckets <span class="token operator">=</span> <span class="token number">360000</span>

<span class="token comment"># This will increase the amount of memory available for socket input/output queues</span>
net.core.rmem_default <span class="token operator">=</span> <span class="token number">65535</span>
net.core.rmem_max <span class="token operator">=</span> <span class="token number">8388608</span>
net.ipv4.tcp_rmem <span class="token operator">=</span> <span class="token number">4096</span> <span class="token number">87380</span> <span class="token number">8388608</span>
net.core.wmem_default <span class="token operator">=</span> <span class="token number">65535</span>
net.core.wmem_max <span class="token operator">=</span> <span class="token number">8388608</span>
net.ipv4.tcp_wmem <span class="token operator">=</span> <span class="token number">4096</span> <span class="token number">65535</span> <span class="token number">8388608</span>
net.ipv4.tcp_mem <span class="token operator">=</span> <span class="token number">8388608</span> <span class="token number">8388608</span> <span class="token number">8388608</span>
net.core.optmem_max <span class="token operator">=</span> <span class="token number">40960</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望屏蔽别人 ping 你的主机，则加入以下代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Disable ping requests</span>
net.ipv4.icmp_echo_ignore_all <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑完成后，请执行以下命令使变动立即生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/sbin/sysctl <span class="token parameter variable">-p</span>
/sbin/sysctl <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.route.flush</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,28),t=[i];function c(p,r){return s(),a("div",null,t)}const d=n(l,[["render",c],["__file","sysctl.html.vue"]]);export{d as default};
