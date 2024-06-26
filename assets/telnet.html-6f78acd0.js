import{_ as n,p as e,q as s,a1 as a}from"./framework-5866ffd3.js";const i={},l=a(`<h1 id="telnet" tabindex="-1"><a class="header-anchor" href="#telnet" aria-hidden="true">#</a> telnet</h1><p>登录远程主机和管理(测试ip端口是否连通)</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>telnet命令</strong> 用于登录远程主机，对远程主机进行管理。telnet因为采用明文传送报文，安全性不好，很多Linux服务器都不开放telnet服务，而改用更安全的ssh方式了。但仍然有很多别的系统可能采用了telnet方式来提供远程登录，因此弄清楚telnet客户端的使用方式仍是很有必要的。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>telnet<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-8：允许使用8位字符资料，包括输入与输出；
-a：尝试自动登入远端系统；
-b<span class="token operator">&lt;</span>主机别名<span class="token operator">&gt;</span>：使用别名指定远端主机名称；
-c：不读取用户专属目录里的.telnetrc文件；
-d：启动排错模式；
-e<span class="token operator">&lt;</span>脱离字符<span class="token operator">&gt;</span>：设置脱离字符；
-E：滤除脱离字符；
-f：此参数的效果和指定<span class="token string">&quot;-F&quot;</span>参数相同；
-F：使用Kerberos V5认证时，加上此参数可把本地主机的认证数据上传到远端主机；
-k<span class="token operator">&lt;</span>域名<span class="token operator">&gt;</span>：使用Kerberos认证时，加上此参数让远端主机采用指定的领域名，而非该主机的域名；
-K：不自动登入远端主机；
-l<span class="token operator">&lt;</span>用户名称<span class="token operator">&gt;</span>：指定要登入远端主机的用户名称；
-L：允许输出8位字符资料；
-n<span class="token operator">&lt;</span>记录文件<span class="token operator">&gt;</span>：指定文件记录相关信息；
-r：使用类似rlogin指令的用户界面；
-S<span class="token operator">&lt;</span>服务类型<span class="token operator">&gt;</span>：设置telnet连线所需的ip TOS信息；
-x：假设主机有支持数据加密的功能，就使用它；
-X<span class="token operator">&lt;</span>认证形态<span class="token operator">&gt;</span>：关闭指定的认证形态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>远程主机：指定要登录进行管理的远程主机；</li><li>端口：指定TELNET协议使用的端口号。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ telnet <span class="token number">192.168</span>.2.10
Trying <span class="token number">192.168</span>.2.10<span class="token punctuation">..</span>.
Connected to <span class="token number">192.168</span>.2.10 <span class="token punctuation">(</span><span class="token number">192.168</span>.2.10<span class="token punctuation">)</span>.
Escape character is <span class="token string">&#39;^]&#39;</span><span class="token builtin class-name">.</span>

    localhost <span class="token punctuation">(</span>Linux release <span class="token number">2.6</span>.18-274.18.1.el5 <span class="token comment">#1 SMP Thu Feb 9 12:45:44 EST 2012) (1)</span>

login: root
Password:
Login incorrect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下不允许root从远程登录，可以先用普通账号登录，然后再用su -切到root用户。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ telnet <span class="token number">192.168</span>.188.132
Trying <span class="token number">192.168</span>.188.132<span class="token punctuation">..</span>.
telnet: connect to address <span class="token number">192.168</span>.188.132: Connection refused
telnet: Unable to connect to remote <span class="token function">host</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理这种情况方法：</p><ol><li>确认ip地址是否正确？</li><li>确认ip地址对应的主机是否已经开机？</li><li>如果主机已经启动，确认路由设置是否设置正确？（使用route命令查看）</li><li>如果主机已经启动，确认主机上是否开启了telnet服务？（使用netstat命令查看，TCP的23端口是否有LISTEN状态的行）</li><li>如果主机已经启动telnet服务，确认防火墙是否放开了23端口的访问？（使用iptables-save查看）</li></ol><p><strong>启动telnet服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> xinetd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置参数，通常的配置如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> telnet
<span class="token punctuation">{</span>
    disable <span class="token operator">=</span> no <span class="token comment">#启用</span>
    flags <span class="token operator">=</span> REUSE <span class="token comment">#socket可重用</span>
    socket_type <span class="token operator">=</span> stream <span class="token comment">#连接方式为TCP</span>
    <span class="token function">wait</span> <span class="token operator">=</span> no <span class="token comment">#为每个请求启动一个进程</span>
    user <span class="token operator">=</span> root <span class="token comment">#启动服务的用户为root</span>
    server <span class="token operator">=</span> /usr/sbin/in.telnetd <span class="token comment">#要激活的进程</span>
    log_on_failure <span class="token operator">+=</span> USERID <span class="token comment">#登录失败时记录登录用户名</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要配置允许登录的客户端列表，加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>only_from = 192.168.0.2 #只允许192.168.0.2登录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要配置禁止登录的客户端列表，加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>no_access = 192.168.0.{2,3,4} #禁止192.168.0.2、192.168.0.3、192.168.0.4登录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要设置开放时段，加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>access_times = 9:00-12:00 13:00-17:00 # 每天只有这两个时段开放服务（我们的上班时间：P）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你有两个IP地址，一个是私网的IP地址如192.168.0.2，一个是公网的IP地址如218.75.74.83，如果你希望用户只能从私网来登录telnet服务，那么加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bind = 192.168.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>各配置项具体的含义和语法可参考xined配置文件属性说明（man xinetd.conf）</p><p>配置端口，修改services文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vi /etc/services</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到以下两句</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>telnet <span class="token number">23</span>/tcp
telnet <span class="token number">23</span>/udp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果前面有#字符，就去掉它。telnet的默认端口是23，这个端口也是黑客端口扫描的主要对象，因此最好将这个端口修改掉，修改的方法很简单，就是将23这个数字修改掉，改成大一点的数字，比如61123。注意，1024以下的端口号是internet保留的端口号，因此最好不要用，还应该注意不要与其它服务的端口冲突。</p><p>启动服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service xinetd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),t=[l];function d(r,c){return e(),s("div",null,t)}const p=n(i,[["render",d],["__file","telnet.html.vue"]]);export{p as default};
