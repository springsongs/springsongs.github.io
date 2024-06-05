import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},l=e(`<h1 id="pssh" tabindex="-1"><a class="header-anchor" href="#pssh" aria-hidden="true">#</a> pssh</h1><p>批量管理执行</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>pssh命令</strong> 是一个python编写可以在多台服务器上执行命令的工具，同时支持拷贝文件，是同类工具中很出色的，类似pdsh，个人认为相对pdsh更为简便，使用必须在各个服务器上配置好密钥认证访问。</p><h3 id="安装pssh" tabindex="-1"><a class="header-anchor" href="#安装pssh" aria-hidden="true">#</a> 安装pssh</h3><p>在CentOS系统环境下，介绍yum的安装和源码安装的方式：</p><p><strong>yum方法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> pssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>编译安装</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://parallel-ssh.googlecode.com/files/pssh-2.3.1.tar.gz
<span class="token function">tar</span> xf pssh-2.3.1.tar.gz
<span class="token builtin class-name">cd</span> pssh-2.3.1/
python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--version：查看版本
--help：查看帮助，即此信息
-h：主机文件列表，内容格式”<span class="token punctuation">[</span>user@<span class="token punctuation">]</span>host<span class="token punctuation">[</span>:port<span class="token punctuation">]</span>”
-H：主机字符串，内容格式”<span class="token punctuation">[</span>user@<span class="token punctuation">]</span>host<span class="token punctuation">[</span>:port<span class="token punctuation">]</span>”
-：登录使用的用户名
-p：并发的线程数【可选】
-o：输出的文件目录【可选】
-e：错误输入文件【可选】
-t：TIMEOUT 超时时间设置，0无限制【可选】
-O：SSH的选项
-v：详细模式
-A：手动输入密码模式
-x：额外的命令行参数使用空白符号，引号，反斜线处理
-X：额外的命令行参数，单个参数模式，同-x
-i：每个服务器内部处理信息输出
-P：打印出服务器返回信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>获取每台服务器的uptime：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pssh -h ip.txt -i uptime</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">11</span>:15:03 <span class="token punctuation">[</span>SUCCESS<span class="token punctuation">]</span> Mar.mars.he
<span class="token number">11</span>:15:11 up <span class="token number">4</span> days, <span class="token number">16</span>:25,  <span class="token number">1</span> user,  load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">11</span>:15:03 <span class="token punctuation">[</span>SUCCESS<span class="token punctuation">]</span> Jan.mars.he
<span class="token number">11</span>:15:12 up <span class="token number">3</span> days, <span class="token number">23</span>:26,  <span class="token number">0</span> users,  load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">11</span>:15:03 <span class="token punctuation">[</span>SUCCESS<span class="token punctuation">]</span> Feb.mars.he
<span class="token number">11</span>:15:12 up <span class="token number">4</span> days, <span class="token number">16</span>:26,  <span class="token number">2</span> users,  load average: <span class="token number">0.08</span>, <span class="token number">0.02</span>, <span class="token number">0.01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看每台服务器上mysql复制IO/SQL线程运行状态信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pssh -h IP.txt -i &quot;/usr/local/mysql/bin/mysql -e &#39;show slave status \\G&#39;&quot;|grep Running:</span>
             Slave_IO_Running: <span class="token function">yes</span>
            Slave_SQL_Running: Yes
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存每台服务器运行的结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pssh -h IP.txt -i -o /tmp/pssh/ uptime</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">11</span>:19:47 <span class="token punctuation">[</span>SUCCESS<span class="token punctuation">]</span> Feb.mars.he
<span class="token number">11</span>:19:55 up <span class="token number">4</span> days, <span class="token number">16</span>:31,  <span class="token number">2</span> users,  load average: <span class="token number">0.02</span>, <span class="token number">0.03</span>, <span class="token number">0.00</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">11</span>:19:47 <span class="token punctuation">[</span>SUCCESS<span class="token punctuation">]</span> Jan.mars.he
<span class="token number">11</span>:19:56 up <span class="token number">3</span> days, <span class="token number">23</span>:30,  <span class="token number">0</span> users,  load average: <span class="token number">0.01</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">11</span>:19:47 <span class="token punctuation">[</span>SUCCESS<span class="token punctuation">]</span> Mar.mars.he
<span class="token number">11</span>:19:56 up <span class="token number">4</span> days, <span class="token number">16</span>:30,  <span class="token number">1</span> user,  load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来看一下/tmp/pssh/下的文件及其内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ll /tmp/pssh/</span>
总用量 <span class="token number">12</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">70</span> <span class="token number">12</span>月  <span class="token number">1</span> <span class="token number">11</span>:19 Feb.mars.he
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">70</span> <span class="token number">12</span>月  <span class="token number">1</span> <span class="token number">11</span>:19 Jan.mars.he
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">69</span> <span class="token number">12</span>月  <span class="token number">1</span> <span class="token number">11</span>:19 Mar.mars.he

<span class="token comment"># cat /tmp/pssh/*</span>
<span class="token number">11</span>:19:55 up <span class="token number">4</span> days, <span class="token number">16</span>:31,  <span class="token number">2</span> users,  load average: <span class="token number">0.02</span>, <span class="token number">0.03</span>, <span class="token number">0.00</span>
<span class="token number">11</span>:19:56 up <span class="token number">3</span> days, <span class="token number">23</span>:30,  <span class="token number">0</span> users,  load average: <span class="token number">0.01</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
<span class="token number">11</span>:19:56 up <span class="token number">4</span> days, <span class="token number">16</span>:30,  <span class="token number">1</span> user,  load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面介绍的是pssh命令很少的一部分，大家可以将其用到适合自己的场景，发挥它的最大功效。</p>`,22),t=[l];function i(u,c){return n(),a("div",null,t)}const o=s(p,[["render",i],["__file","pssh.html.vue"]]);export{o as default};
