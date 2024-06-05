import{_ as i,M as c,p as r,q as t,R as n,t as s,N as e,a1 as l}from"./framework-5866ffd3.js";const m={},o=l(`<h1 id="centos平台安装与卸载mysql" tabindex="-1"><a class="header-anchor" href="#centos平台安装与卸载mysql" aria-hidden="true">#</a> Centos平台安装与卸载MySQL</h1><p>这里简单的介绍几种Linux平台(Centos)/Mac安装MySQL，基本上大同小异，通过一些平台的软件管理工具来快速安装MySQL。</p><p>在 Centos6 中直接使用 yum 命令去安装 mysql，极为简单，接下来介绍在Centos6中 通过 yum工具安装 mysql 的步骤。</p><h3 id="检查是否已安装" tabindex="-1"><a class="header-anchor" href="#检查是否已安装" aria-hidden="true">#</a> 检查是否已安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查 MySQL 是否已安装</span>
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> mysql
yum list installed mysql*

<span class="token comment"># 查看当前 mysql 版本，看是否已安装</span>
mysql <span class="token parameter variable">--version</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新安装源" tabindex="-1"><a class="header-anchor" href="#更新安装源" aria-hidden="true">#</a> 更新安装源</h3>`,6),d={href:"http://dev.mysql.com/downloads/repo/yum/",target:"_blank",rel:"noopener noreferrer"},p={href:"http://repo.mysql.com/yum/",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"vim /etc/yum.repos.d/mysql-community.repo",-1),v=n("code",null,"enabled",-1),b=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装如果上面编辑前没有看到你想要的版本</span>
<span class="token comment"># 可以更新源</span>
<span class="token comment"># ===== CentOS6 =====</span>
<span class="token comment"># wget http://dev.mysql.com/get/mysql57-community-release-el6-8.noarch.rpm</span>
<span class="token comment"># ===== CentOS7 =====</span>
<span class="token function">wget</span> http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
yum localinstall mysql-community-release-el7-5.noarch.rpm

<span class="token comment"># 卸载方法</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> mysql-community-common-5.7.16-1.el6.x86_64

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查是否下载成功" tabindex="-1"><a class="header-anchor" href="#检查是否下载成功" aria-hidden="true">#</a> 检查是否下载成功</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum repolist enabled | grep &quot;mysql.*-community.*&quot;</span>
mysql-connectors-community/x86_64       MySQL Connectors Community           <span class="token number">36</span>
mysql-tools-community/x86_64            MySQL Tools Community                <span class="token number">47</span>
mysql56-community/x86_64                MySQL <span class="token number">5.6</span> Community Server          <span class="token number">327</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本" aria-hidden="true">#</a> 查看版本</h3><p>选择要启用 MySQL 版本查看 MySQL 版本，执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum repolist all <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到 5.5， 5.7 版本是默认禁用的，因为现在最新的稳定版是 5.6</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum repolist all | grep mysql</span>
mysql-connectors-community/x86_64 MySQL Connectors Community      enabled:    <span class="token number">36</span>
mysql-connectors-community-source MySQL Connectors Community - So disabled
mysql-tools-community/x86_64      MySQL Tools Community           enabled:    <span class="token number">47</span>
mysql-tools-community-source      MySQL Tools Community - Source  disabled
mysql55-community/x86_64          MySQL <span class="token number">5.5</span> Community Server      disabled
mysql55-community-source          MySQL <span class="token number">5.5</span> Community Server - So disabled
mysql56-community/x86_64          MySQL <span class="token number">5.6</span> Community Server      enabled:   <span class="token number">327</span>
mysql56-community-source          MySQL <span class="token number">5.6</span> Community Server - So disabled
mysql57-community-dmr/x86_64      MySQL <span class="token number">5.7</span> Community Server Deve disabled
mysql57-community-dmr-source      MySQL <span class="token number">5.7</span> Community Server Deve disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动指定版本" tabindex="-1"><a class="header-anchor" href="#启动指定版本" aria-hidden="true">#</a> 启动指定版本</h3><p>可以通过类似下面的语句来启动某些版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager <span class="token parameter variable">--disable</span> mysql56-community
yum-config-manager <span class="token parameter variable">--enable</span> mysql57-community-dmr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者通过修改 <code>/etc/yum.repos.d/mysql-community.repo</code> 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Note: MySQL 5.7 is currently in development. For use at your own risk.</span>
<span class="token comment"># Please read with sub pages: https://dev.mysql.com/doc/relnotes/mysql/5.7/en/</span>
<span class="token punctuation">[</span>mysql57-community-dmr<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>MySQL <span class="token number">5.7</span> Community Server Development Milestone Release
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://repo.mysql.com/yum/mysql-5.7-community/el/7/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:/etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>enabled=0</code> 是指禁用，<code>enabled=1</code> 指启用。<br> 注意： 任何时候，只能启用一个版本。</p><p>查看当前启用的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum repolist enabled | grep mysql</span>
mysql-connectors-community/x86_64 MySQL Connectors Community                 <span class="token number">36</span>
mysql-tools-community/x86_64      MySQL Tools Community                      <span class="token number">47</span>
mysql57-community-dmr/x86_64      MySQL <span class="token number">5.7</span> Community Server Development    <span class="token number">187</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装MySQL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> mysql-server

Retrieving key from file:/etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Importing GPG key 0x5072E1F5:
 Userid     <span class="token builtin class-name">:</span> <span class="token string">&quot;MySQL Release Engineering &lt;mysql-build@oss.oracle.com&gt;&quot;</span>
 Fingerprint: a4a9 <span class="token number">4068</span> 76fc bd3c <span class="token number">4567</span> 70c8 8c71 8d3b <span class="token number">5072</span> e1f5
 Package    <span class="token builtin class-name">:</span> mysql-community-release-el7-5.noarch <span class="token punctuation">(</span>installed<span class="token punctuation">)</span>
 From       <span class="token builtin class-name">:</span> file:/etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Is this ok <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>: y

<span class="token comment">## 遇到上述提示，输入 y 继续，执行完成会提示“完毕！”。此时MySQL 安装完成，它包含了 mysql-community-server、mysql-community-client、mysql-community-common、mysql-community-libs 四个包。</span>

<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

Installed:
  mysql-community-libs.x86_64 <span class="token number">0</span>:5.7.18-1.el7  mysql-community-libs-compat.x86_64 <span class="token number">0</span>:5.7.18-1.el7  mysql-community-server.x86_64 <span class="token number">0</span>:5.7.18-1.el7

Dependency Installed:
  mysql-community-client.x86_64 <span class="token number">0</span>:5.7.18-1.el7   mysql-community-common.x86_64 <span class="token number">0</span>:5.7.18-1.el7   net-tools.x86_64 <span class="token number">0</span>:2.0-0.17.20131004git.el7

Replaced:
  mariadb-libs.x86_64 <span class="token number">1</span>:5.5.44-2.el7.centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qi</span> mysql-community-server.x86_64 <span class="token number">0</span>:5.6.24-3.el7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看安装目录" tabindex="-1"><a class="header-anchor" href="#查看安装目录" aria-hidden="true">#</a> 查看安装目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">whereis</span> mysql

mysql: /usr/bin/mysql /usr/lib64/mysql /usr/share/mysql /usr/share/man/man1/mysql.1.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 MySQL 的安装目录是 /usr/bin/</p><h3 id="mariadb切换mysql" tabindex="-1"><a class="header-anchor" href="#mariadb切换mysql" aria-hidden="true">#</a> MariaDB切换MySQL</h3><p>Centos7 上面默认是 MariaDB 不是MySQL了，所以 Centos6 安装会报错。在 Centos7 中，运行下面命令安装就不会有错误了，但是你的数据库被换成了MariaDB，MariaDB登录链接SQL语句等几乎一样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 mariadb-server</span>
yum <span class="token function">install</span> mariadb-server <span class="token parameter variable">-y</span>

<span class="token comment"># 启动 mariadb</span>
systemctl start mariadb.service
systemctl <span class="token builtin class-name">enable</span> mariadb.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那在 Centos7 中默认安装 MySQL 会报错误，大概是我下面这样样子：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--<span class="token operator">&gt;</span> 正在处理依赖关系 libmysqlclient.so.18<span class="token punctuation">(</span>libmysqlclient_18<span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>，它被软件包 <span class="token number">2</span>:postfix-2.10.1-6.el7.x86_64 需要
---<span class="token operator">&gt;</span> 软件包 mysql-community-libs.x86_64.0.5.7.16-1.el6 将被 舍弃
--<span class="token operator">&gt;</span> 解决依赖关系完成
错误：软件包：2:postfix-2.10.1-6.el7.x86_64 <span class="token punctuation">(</span>@anaconda<span class="token punctuation">)</span>
          需要：libmysqlclient.so.18<span class="token punctuation">(</span>libmysqlclient_18<span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>
          正在删除: <span class="token number">1</span>:mariadb-libs-5.5.50-1.el7_2.x86_64 <span class="token punctuation">(</span>@updates<span class="token punctuation">)</span>
              libmysqlclient.so.18<span class="token punctuation">(</span>libmysqlclient_18<span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>
          取代，由: mysql-community-libs-5.7.16-1.el6.x86_64 <span class="token punctuation">(</span>mysql57-community<span class="token punctuation">)</span>
             <span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你非要用 MySQL 那你先卸载 <strong>yum remove mariadb</strong> 和 <strong>yum remove mysql-libs</strong> 重新进行安装 <strong>yum install mysql-server</strong> 或许可解决 Centos7 安装mysql报上面错误的问题，具体问题还得具体看。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载 mariadb 和 mysql-libs</span>
yum remove mariadb
yum remove mysql-libs
<span class="token comment"># 安装mysql</span>
yum <span class="token function">install</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装发生依赖错误</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--<span class="token operator">&gt;</span> Finished Dependency Resolution
Error: Package: mysql-community-server-5.7.19-1.el6.x86_64 <span class="token punctuation">(</span>mysql57-community<span class="token punctuation">)</span>
           Requires: libsasl2.so.2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>
 You could try using --skip-broken to work around the problem
 You could try running: <span class="token function">rpm</span> <span class="token parameter variable">-Va</span> <span class="token parameter variable">--nofiles</span> <span class="token parameter variable">--nodigest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过更新来解决</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum update
<span class="token comment"># 通过提示来解决错误，80%软件不能用，或者部分功能不能用</span>
<span class="token comment"># 不建议下面方式解决</span>
yum <span class="token function">install</span> mysql-server --skip-broken
<span class="token function">rpm</span> <span class="token parameter variable">-Va</span> <span class="token parameter variable">--nofiles</span> <span class="token parameter variable">--nodiges</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载-mysql-软件" tabindex="-1"><a class="header-anchor" href="#卸载-mysql-软件" aria-hidden="true">#</a> 卸载 MySQL 软件</h2><h3 id="卸载mysql" tabindex="-1"><a class="header-anchor" href="#卸载mysql" aria-hidden="true">#</a> 卸载mysql</h3><p>通过下面这条命令查看本地mysql安装包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Linux查看</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql

<span class="token comment"># 输出结果</span>
perl-DBD-MySQL-4.013-3.el6.x86_64
mysql-community-libs-5.6.33-2.el6.x86_64
mysql-community-release-el6-5.noarch
mysql-community-client-5.6.33-2.el6.x86_64
compat-mysql51-5.1.54-1.el6.remi.x86_64
mysql-community-server-5.6.33-2.el6.x86_64
mysql-community-common-5.6.33-2.el6.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你下面命令将它删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-e</span> mysql-community-server-5.6.33-2.el6.x86_64
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> compat-mysql51-5.1.54-1.el6.remi.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除mysql服务" tabindex="-1"><a class="header-anchor" href="#删除mysql服务" aria-hidden="true">#</a> 删除mysql服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
<span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除分散mysql文件夹" tabindex="-1"><a class="header-anchor" href="#删除分散mysql文件夹" aria-hidden="true">#</a> 删除分散mysql文件夹</h3><p>清空相关mysql的所有目录以及文件，<code>whereis mysql</code> 或者 <code>find / -name mysql</code> 找到所有文件夹。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/share/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function y(h,k){const a=c("ExternalLinkIcon");return r(),t("div",null,[o,n("p",null,[s("经过查看你可以开始安装了，直接使用 yum 命令去安装 mysql，按之前可以先看一下源的版本，如果源的版本过低，可以在"),n("a",d,[s("这里下载"),e(a)]),s("开发版新的源，发布吧源"),n("a",p,[s("在这里"),e(a)]),s("更新，在安装的过程可以编辑"),u,s("选择发布系列版本，编辑如下，其中参数"),v,s("的值为 0 的表示禁用，更改为 1 的时候你就可以默认安装 5.7，否则安装的将是 5.6 版。")]),b])}const q=i(m,[["render",y],["__file","2.2.html.vue"]]);export{q as default};
