import{_ as a,p as s,q as e,a1 as n}from"./framework-5866ffd3.js";const i={},l=n(`<h1 id="centos6下升级mysql数据库" tabindex="-1"><a class="header-anchor" href="#centos6下升级mysql数据库" aria-hidden="true">#</a> Centos6下升级MySQL数据库</h1><h3 id="备份数据" tabindex="-1"><a class="header-anchor" href="#备份数据" aria-hidden="true">#</a> 备份数据</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mysqldump <span class="token parameter variable">-u</span> xxx <span class="token parameter variable">-h</span> xxx <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-p</span> --all-databases <span class="token operator">&gt;</span> databases.sql  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本" aria-hidden="true">#</a> 查看版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文件和配置文件备份" tabindex="-1"><a class="header-anchor" href="#文件和配置文件备份" aria-hidden="true">#</a> 文件和配置文件备份</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-R</span> /data/mysql mysql-5.1-data  
<span class="token function">cp</span> /etc/my.cnf my.cnf-5.1  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止服务" tabindex="-1"><a class="header-anchor" href="#停止服务" aria-hidden="true">#</a> 停止服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> mysqld stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>此方法下，我并未删除老的<code>MySQL</code>，然而我升级成功！不知有什么后遗症没有。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://dev.mysql.com/get/mysql57-community-release-el6-8.noarch.rpm
yum localinstall mysql57-community-release-el6-8.noarch.rpm
yum <span class="token function">install</span> mysql-server
mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql
<span class="token comment"># 找到密码 vi /var/log/mysqld.log</span>
<span class="token comment"># 修改密码 mysqladmin -uroot -p password</span>
<span class="token comment"># 采用拷贝粘贴，输入旧密码，设定新密码</span>
<span class="token function">chkconfig</span> mysqld on
<span class="token comment"># 重启</span>
<span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载旧版本的Mysql</span>
yum remove mysql mysql-*  

<span class="token comment"># 执行之后再看看是不是残余一些mysql-libs之类的</span>
<span class="token comment"># 查看是否有残余</span>
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> mysql  

<span class="token comment"># 如果有，并确认没用之后也可以删除。</span>
yum remove mysql-libs  

<span class="token comment"># 安装 这个要更新源的前提</span>
yum <span class="token function">install</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> mysqld start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),d=[l];function r(c,t){return s(),e("div",null,d)}const m=a(i,[["render",r],["__file","17.2.html.vue"]]);export{m as default};
