import{_ as a,M as e,p as l,q as i,R as s,t,N as r,a1 as o}from"./framework-5866ffd3.js";const d={},c=o(`<h1 id="mysql修改密码" tabindex="-1"><a class="header-anchor" href="#mysql修改密码" aria-hidden="true">#</a> MySQL修改密码</h1><h2 id="mysqld-safe不存在修改密码" tabindex="-1"><a class="header-anchor" href="#mysqld-safe不存在修改密码" aria-hidden="true">#</a> mysqld_safe不存在修改密码</h2><ol><li>停止 MySQL:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>设置MySQL环境选项</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl set-environment <span class="token assign-left variable">MYSQLD_OPTS</span><span class="token operator">=</span><span class="token string">&quot;--skip-grant-tables&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>使用您刚才设置的选项启动MySQL</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>以root身份登录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>使用这些MySQL命令更新root用户密码</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> UPDATE mysql.user SET authentication_string <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;MyNewPassword&#39;</span><span class="token punctuation">)</span>
    -<span class="token operator">&gt;</span> WHERE User <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span> AND Host <span class="token operator">=</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> FLUSH PRIVILEGES<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>停止mysql</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>取消设置MySQL环境选项，以便下次启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl unset-environment MYSQLD_OPTS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>正常启动MySQL：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9"><li>尝试使用您的新密码登录：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动修改丢失的mysql单实例root密码方法" tabindex="-1"><a class="header-anchor" href="#启动修改丢失的mysql单实例root密码方法" aria-hidden="true">#</a> 启动修改丢失的mysql单实例root密码方法</h2><ol><li>首先停止mysql</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /etc/init.d/mysql stop

<span class="token comment"># 或者下面</span>
<span class="token function">sudo</span> /usr/local/mysql/bin/mysql stop

<span class="token comment"># 或者 </span>
<span class="token function">service</span> mysqld stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用--skip-grant-tables启动mysql，忽略授权登录验证，服务不要停止，新开窗口做接下来的操作。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysqld_safe --skip-grant-tables <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token comment"># 提示：在启动时加--skip-grant-tables 参数，表示忽略授权验证</span>
<span class="token comment"># 或者下面</span>
<span class="token function">sudo</span> /usr/local/mysql/bin/mysqld_safe  --skip-grant-tables <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>进入数据库系统</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在终端中运行</span>
mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改mysqlroot密码：update</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 终端进入MySQL数据中运行</span>
mysql<span class="token operator">&gt;</span> update mysql.user <span class="token builtin class-name">set</span> <span class="token assign-left variable">password</span><span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span> and <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>

<span class="token comment"># 终端中运行</span>
mysqladmin <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>重新启动mysql</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 终端中运行</span>
/etc/init.d/mysql start
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mac下重置mysql的root密码" tabindex="-1"><a class="header-anchor" href="#mac下重置mysql的root密码" aria-hidden="true">#</a> Mac下重置MySQL的root密码</h2><p>以前的老版本root的默认密码为空，Mysql 5.6及以后版本出处于安全考虑，root密码已经不为空了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 表示没有生成root的临时密码</span>
ERROR <span class="token number">1045</span> <span class="token punctuation">(</span><span class="token number">28000</span><span class="token punctuation">)</span>: Access denied <span class="token keyword">for</span> user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> <span class="token punctuation">(</span>using password: NO<span class="token punctuation">)</span>

<span class="token comment"># 表示生成了root的临时密码</span>
ERROR <span class="token number">1045</span> <span class="token punctuation">(</span><span class="token number">28000</span><span class="token punctuation">)</span>: Access denied <span class="token keyword">for</span> user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> <span class="token punctuation">(</span>using password: YES<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>mysql -uroot -p</code> 登录进去。</p><p>1、停止 mysql server</p><p>在 Mac 中可以使用GUI停止 MySQL 服务，步骤：<code>系统偏好设置</code> &gt; <code>MySQL</code> &gt; <code>Stop MySQL Server</code>。您也可以使用命令行来停止服务，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Mac OS 里面可以这种方式</span>
<span class="token function">sudo</span> /usr/local/mysql/support-files/mysql.server stop

<span class="token comment"># centos 停止mysql数据库</span>
<span class="token function">sudo</span> /etc/init.d/mysqld stop 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、终端，输入进入安全模式，运行之后进程保持挂载。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/mysql/bin/mysqld_safe --skip-grant-tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、新开终端，输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/mysql/bin/mysql <span class="token parameter variable">-u</span> root
<span class="token comment"># 输入 Mac 系统用户密码后，</span>
<span class="token comment"># 直接敲回车进入 mysql 终端，输入：</span>
mysql<span class="token operator">&gt;</span> FLUSH PRIVILEGES<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;MyNewPass&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 输入 \\q 退出 mysql 终端</span>
<span class="token punctuation">\\</span>q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、重启MySQL.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过上面命令查看进程编号。</li><li>通过<code>sudo kill 93</code>杀掉<code>mysql</code>进程</li><li>启动服务<code>系统偏好设置</code> &gt; <code>MySQL</code> &gt; <code>Start MySQL Server</code></li></ul><p>命令行中更快捷的重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/mysql/support-files/mysql.server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="不重启mysqld修改密码的方法" tabindex="-1"><a class="header-anchor" href="#不重启mysqld修改密码的方法" aria-hidden="true">#</a> 不重启mysqld修改密码的方法</h2><p>1、首先得有一个可以拥有修改权限的mysql数据库账号，当前的mysql实例账号（较低权限的账号，比如可以修改test数据库）或者其他相同版本实例的账号。把data/mysql目录下面的user表相关的文件复制到data/test目录下面。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost mysql]# cp mysql/user.* test/
[root@localhost mysql]# chown mysql.mysql test/user.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、使用另一个较低权限的账号链接数据库，设置test数据库中的user存储的密码数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost mysql]# mysql -utest -p12345
Welcome to the MySQL monitor.  Commands end with ; or \\g.
Your MySQL connection id is 17
Server version: 5.5.25a-log Source distribution

Copyright (c) 2000, 2011, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.

mysql&gt; use test
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql&gt; update user set password=password(&#39;yayun&#39;) where user=&#39;root&#39;;
Query OK, 0 rows affected (0.00 sec)
Rows matched: 5  Changed: 0  Warnings: 0

mysql&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、把修改后的user.MYD和user.MYI复制到mysql目录下，记得备份之前的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> mysql/user.MYD mysql/user.MYD.bak
<span class="token function">mv</span> mysql/user.MYI mysql/user.MYI.bak
<span class="token function">cp</span> test/user.MY* mysql/
<span class="token function">chown</span> mysql.mysql mysql/user.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、查找mysql进程号，并且发送SIGHUP信号，重新加载权限表。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost mysql]# pgrep -n mysql
2184
[root@localhost mysql]#
[root@localhost mysql]# kill -SIGHUP 2184
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、登陆测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># mysql -uroot -pyayun</span>
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">20</span>
Server version: <span class="token number">5.5</span>.25a-log Source distribution

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2011</span>, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官网参考" tabindex="-1"><a class="header-anchor" href="#官网参考" aria-hidden="true">#</a> 官网参考</h2>`,59),p={href:"http://dev.mysql.com/doc/refman/5.7/en/resetting-permissions.html",target:"_blank",rel:"noopener noreferrer"};function u(m,v){const n=e("ExternalLinkIcon");return l(),i("div",null,[c,s("ul",null,[s("li",null,[s("a",p,[t("How to Reset the Root Password"),r(n)])])])])}const h=a(d,[["render",u],["__file","17.3.html.vue"]]);export{h as default};
