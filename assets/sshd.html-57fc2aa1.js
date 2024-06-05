import{_ as e,p as s,q as n,a1 as a}from"./framework-5866ffd3.js";const i={},d=a(`<h1 id="sshd" tabindex="-1"><a class="header-anchor" href="#sshd" aria-hidden="true">#</a> sshd</h1><p>openssh软件套件中的服务器守护进程</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>sshd命令</strong> 是openssh软件套件中的服务器守护进程。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sshd<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-4：强制使用IPv4地址；
-6：强制使用IPv6地址；
-D：以后台守护进程方式运行服务器；
-d：调试模式；
-e：将错误发送到标准错误设备，而不是将其发送到系统日志；
-f：指定服务器的配置文件；
-g：指定客户端登录时的过期时间，如果在此期限内，用户没有正确认证，则服务器断开次客户端的连接；
-h：指定读取主机key文件；
-i：ssh以inetd方式运行；
-o：指定ssh的配置选项；
-p：静默模式，没有任何信息写入日志；
-t：测试模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[d];function l(c,h){return s(),n("div",null,r)}const v=e(i,[["render",l],["__file","sshd.html.vue"]]);export{v as default};
