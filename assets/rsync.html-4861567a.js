import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},c=e(`<h1 id="rsync" tabindex="-1"><a class="header-anchor" href="#rsync" aria-hidden="true">#</a> rsync</h1><p>远程数据同步工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>rsync命令</strong> 是一个远程数据同步工具，可通过LAN/WAN快速同步多台主机间的文件。rsync使用所谓的“rsync算法”来使本地和远程两个主机之间的文件达到同步，这个算法只传送两个文件的不同部分，而不是每次都整份传送，因此速度相当快。 rsync是一个功能非常强大的工具，其命令也有很多功能特色选项，我们下面就对它的选项一一进行分析说明。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SRC DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SRC <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>host:DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST:SRC DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST::SRC DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SRC <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST::DEST
<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. rsync://<span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span>/SRC <span class="token punctuation">[</span>DEST<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应于以上六种命令格式，rsync有六种不同的工作模式：</p><ol><li>拷贝本地文件。当SRC和DES路径信息都不包含有单个冒号&quot;:&quot;分隔符时就启动这种工作模式。如：<code>rsync -a /data /backup</code></li><li>使用一个远程shell程序(如rsh、ssh)来实现将本地机器的内容拷贝到远程机器。当DST路径地址包含单个冒号&quot;:&quot;分隔符时启动该模式。如：<code>rsync -avz *.c foo:src</code></li><li>使用一个远程shell程序(如rsh、ssh)来实现将远程机器的内容拷贝到本地机器。当SRC地址路径包含单个冒号&quot;:&quot;分隔符时启动该模式。如：<code>rsync -avz foo:src/bar /data</code></li><li>从远程rsync服务器中拷贝文件到本地机。当SRC路径信息包含&quot;::&quot;分隔符时启动该模式。如：<code>rsync -av root@192.168.78.192::www /databack</code></li><li>从本地机器拷贝文件到远程rsync服务器中。当DST路径信息包含&quot;::&quot;分隔符时启动该模式。如：<code>rsync -av /databack root@192.168.78.192::www</code></li><li>列远程机的文件列表。这类似于rsync传输，不过只要在命令中省略掉本地机信息即可。如：<code>rsync -v rsync://192.168.78.192/www</code></li></ol><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-v, <span class="token parameter variable">--verbose</span> 详细模式输出。
-q, <span class="token parameter variable">--quiet</span> 精简输出模式。
-c, <span class="token parameter variable">--checksum</span> 打开校验开关，强制对文件传输进行校验。
-a, <span class="token parameter variable">--archive</span> 归档模式，表示以递归方式传输文件，并保持所有文件属性，等于-rlptgoD。
-r, <span class="token parameter variable">--recursive</span> 对子目录以递归模式处理。
-R, <span class="token parameter variable">--relative</span> 使用相对路径信息。
-b, <span class="token parameter variable">--backup</span> 创建备份，也就是对于目的已经存在有同样的文件名时，将老的文件重新命名为~filename。可以使用--suffix选项来指定不同的备份文件前缀。
--backup-dir 将备份文件<span class="token punctuation">(</span>如~filename<span class="token punctuation">)</span>存放在在目录下。
<span class="token parameter variable">-suffix</span><span class="token operator">=</span>SUFFIX 定义备份文件前缀。
-u, <span class="token parameter variable">--update</span> 仅仅进行更新，也就是跳过所有已经存在于DST，并且文件时间晚于要备份的文件，不覆盖更新的文件。
-l, <span class="token parameter variable">--links</span> 保留软链结。
-L, --copy-links 想对待常规文件一样处理软链结。
--copy-unsafe-links 仅仅拷贝指向SRC路径目录树以外的链结。
--safe-links 忽略指向SRC路径目录树以外的链结。
-H, --hard-links 保留硬链结。
-p, <span class="token parameter variable">--perms</span> 保持文件权限。
-o, <span class="token parameter variable">--owner</span> 保持文件属主信息。
-g, <span class="token parameter variable">--group</span> 保持文件属组信息。
-D, <span class="token parameter variable">--devices</span> 保持设备文件信息。
-t, <span class="token parameter variable">--times</span> 保持文件时间信息。
-S, <span class="token parameter variable">--sparse</span> 对稀疏文件进行特殊处理以节省DST的空间。
-n, --dry-run现实哪些文件将被传输。
-w, --whole-file 拷贝文件，不进行增量检测。
-x, --one-file-system 不要跨越文件系统边界。
-B, --block-size<span class="token operator">=</span>SIZE 检验算法使用的块尺寸，默认是700字节。
-e, <span class="token parameter variable">--rsh</span><span class="token operator">=</span>command 指定使用rsh、ssh方式进行数据同步。
--rsync-path<span class="token operator">=</span><span class="token environment constant">PATH</span> 指定远程服务器上的rsync命令所在路径信息。
-C, --cvs-exclude 使用和CVS一样的方法自动忽略文件，用来排除那些不希望传输的文件。
<span class="token parameter variable">--existing</span> 仅仅更新那些已经存在于DST的文件，而不备份那些新创建的文件。
<span class="token parameter variable">--delete</span> 删除那些DST中SRC没有的文件。
--delete-excluded 同样删除接收端那些被该选项指定排除的文件。
--delete-after 传输结束以后再删除。
--ignore-errors 及时出现IO错误也进行删除。
--max-delete<span class="token operator">=</span>NUM 最多删除NUM个文件。
<span class="token parameter variable">--partial</span> 保留那些因故没有完全传输的文件，以是加快随后的再次传输。
<span class="token parameter variable">--force</span> 强制删除目录，即使不为空。
--numeric-ids 不将数字的用户和组id匹配为用户名和组名。
<span class="token parameter variable">--timeout</span><span class="token operator">=</span>time ip超时时间，单位为秒。
-I, --ignore-times 不跳过那些有同样的时间和长度的文件。
--size-only 当决定是否要备份文件时，仅仅察看文件大小而不考虑文件时间。
--modify-window<span class="token operator">=</span>NUM 决定文件是否时间相同时使用的时间戳窗口，默认为0。
<span class="token parameter variable">-T</span> --temp-dir<span class="token operator">=</span>DIR 在DIR中创建临时文件。
--compare-dest<span class="token operator">=</span>DIR 同样比较DIR中的文件来决定是否需要备份。
<span class="token parameter variable">-P</span> 等同于 --partial。
<span class="token parameter variable">--progress</span> 显示备份过程。
-z, <span class="token parameter variable">--compress</span> 对备份的文件在传输时进行压缩处理。
<span class="token parameter variable">--exclude</span><span class="token operator">=</span>PATTERN 指定排除不需要传输的文件模式。
<span class="token parameter variable">--include</span><span class="token operator">=</span>PATTERN 指定不排除而需要传输的文件模式。
--exclude-from<span class="token operator">=</span>FILE 排除FILE中指定模式的文件。
--include-from<span class="token operator">=</span>FILE 不排除FILE指定模式匹配的文件。
<span class="token parameter variable">--version</span> 打印版本信息。
<span class="token parameter variable">--address</span> 绑定到特定的地址。
<span class="token parameter variable">--config</span><span class="token operator">=</span>FILE 指定其他的配置文件，不使用默认的rsyncd.conf文件。
<span class="token parameter variable">--port</span><span class="token operator">=</span>PORT 指定其他的rsync服务端口。
--blocking-io 对远程shell使用阻塞IO。
<span class="token parameter variable">-stats</span> 给出某些文件的传输状态。
<span class="token parameter variable">--progress</span> 在传输时显示传输过程。
--log-format<span class="token operator">=</span>formAT 指定日志文件格式。
--password-file<span class="token operator">=</span>FILE 从FILE中得到密码。
<span class="token parameter variable">--bwlimit</span><span class="token operator">=</span>KBPS 限制I/O带宽，KBytes per second。
-h, <span class="token parameter variable">--help</span> 显示帮助信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p><strong>SSH方式</strong></p><p>首先在服务端启动ssh服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> sshd start
启动 sshd： <span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用rsync进行同步</strong></p><p>接下来就可以在客户端使用rsync命令来备份服务端上的数据了，SSH方式是通过系统用户来进行备份的，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token parameter variable">-vzrtopg</span> <span class="token parameter variable">--progress</span> <span class="token parameter variable">-e</span> <span class="token function">ssh</span> <span class="token parameter variable">--delete</span> work@172.16.78.192:/www/* /databack/experiment/rsync
work@172.16.78.192&#39;s password:
receiving <span class="token function">file</span> list <span class="token punctuation">..</span>.
<span class="token number">5</span> files to consider
test/
a
<span class="token number">0</span> <span class="token number">100</span>% <span class="token number">0</span>.00kB/s <span class="token number">527</span>:35:41 <span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">20.0</span>% of <span class="token number">5</span><span class="token punctuation">)</span>
b
<span class="token number">67</span> <span class="token number">100</span>% <span class="token number">65</span>.43kB/s <span class="token number">0</span>:00:00 <span class="token punctuation">(</span><span class="token number">2</span>, <span class="token number">40.0</span>% of <span class="token number">5</span><span class="token punctuation">)</span>
c
<span class="token number">0</span> <span class="token number">100</span>% <span class="token number">0</span>.00kB/s <span class="token number">527</span>:35:41 <span class="token punctuation">(</span><span class="token number">3</span>, <span class="token number">60.0</span>% of <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token function">dd</span>
<span class="token number">100663296</span> <span class="token number">100</span>% <span class="token number">42</span>.22MB/s <span class="token number">0</span>:00:02 <span class="token punctuation">(</span><span class="token number">4</span>, <span class="token number">80.0</span>% of <span class="token number">5</span><span class="token punctuation">)</span>
sent <span class="token number">96</span> bytes received <span class="token number">98190</span> bytes <span class="token number">11563.06</span> bytes/sec
total size is <span class="token number">100663363</span> speedup is <span class="token number">1024.19</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的信息描述了整个的备份过程，以及总共备份数据的大小。</p><p><strong>后台服务方式</strong></p><p>启动rsync服务，编辑<code>/etc/xinetd.d/rsync</code>文件，将其中的<code>disable=yes</code>改为<code>disable=no</code>，并重启xinetd服务，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/xinetd.d/rsync

<span class="token comment">#default: off</span>
<span class="token comment"># description: The rsync server is a good addition to an ftp server, as it \\</span>
<span class="token comment"># allows crc checksumming etc.</span>
<span class="token function">service</span> <span class="token function">rsync</span> <span class="token punctuation">{</span>
disable <span class="token operator">=</span> no
socket_type <span class="token operator">=</span> stream
<span class="token function">wait</span> <span class="token operator">=</span> no
user <span class="token operator">=</span> root
server <span class="token operator">=</span> /usr/bin/rsync
server_args <span class="token operator">=</span> <span class="token parameter variable">--daemon</span>
log_on_failure <span class="token operator">+=</span> USERID
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/init.d/xinetd restart
停止 xinetd： <span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
启动 xinetd： <span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建配置文件，默认安装好rsync程序后，并不会自动创建rsync的主配置文件，需要手工来创建，其主配置文件为“/etc/rsyncd.conf”，创建该文件并插入如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/rsyncd.conf

<span class="token assign-left variable">uid</span><span class="token operator">=</span>root
<span class="token assign-left variable">gid</span><span class="token operator">=</span>root
max <span class="token assign-left variable">connections</span><span class="token operator">=</span><span class="token number">4</span>
log <span class="token assign-left variable">file</span><span class="token operator">=</span>/var/log/rsyncd.log
pid <span class="token assign-left variable">file</span><span class="token operator">=</span>/var/run/rsyncd.pid
lock <span class="token assign-left variable">file</span><span class="token operator">=</span>/var/run/rsyncd.lock
secrets <span class="token assign-left variable">file</span><span class="token operator">=</span>/etc/rsyncd.passwd
hosts <span class="token assign-left variable">deny</span><span class="token operator">=</span><span class="token number">172.16</span>.78.0/22

<span class="token punctuation">[</span>www<span class="token punctuation">]</span>
<span class="token assign-left variable">comment</span><span class="token operator">=</span> backup web
<span class="token assign-left variable">path</span><span class="token operator">=</span>/www
<span class="token builtin class-name">read</span> only <span class="token operator">=</span> no
<span class="token assign-left variable">exclude</span><span class="token operator">=</span>test
auth <span class="token assign-left variable">users</span><span class="token operator">=</span>work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建密码文件，采用这种方式不能使用系统用户对客户端进行认证，所以需要创建一个密码文件，其格式为“username:password”，用户名可以和密码可以随便定义，最好不要和系统帐户一致，同时要把创建的密码文件权限设置为600，这在前面的模块参数做了详细介绍。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;work:abc123&quot;</span> <span class="token operator">&gt;</span> /etc/rsyncd.passwd
<span class="token function">chmod</span> <span class="token number">600</span> /etc/rsyncd.passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>备份，完成以上工作，现在就可以对数据进行备份了，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token parameter variable">-avz</span> <span class="token parameter variable">--progress</span> <span class="token parameter variable">--delete</span> work@172.16.78.192::www /databack/experiment/rsync

Password:
receiving <span class="token function">file</span> list <span class="token punctuation">..</span>.
<span class="token number">6</span> files to consider
./ files<span class="token punctuation">..</span>.
a
<span class="token number">0</span> <span class="token number">100</span>% <span class="token number">0</span>.00kB/s <span class="token number">528</span>:20:41 <span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">50.0</span>% of <span class="token number">6</span><span class="token punctuation">)</span>
b
<span class="token number">67</span> <span class="token number">100</span>% <span class="token number">65</span>.43kB/s <span class="token number">0</span>:00:00 <span class="token punctuation">(</span><span class="token number">2</span>, <span class="token number">66.7</span>% of <span class="token number">6</span><span class="token punctuation">)</span>
c
<span class="token number">0</span> <span class="token number">100</span>% <span class="token number">0</span>.00kB/s <span class="token number">528</span>:20:41 <span class="token punctuation">(</span><span class="token number">3</span>, <span class="token number">83.3</span>% of <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token function">dd</span>
<span class="token number">100663296</span> <span class="token number">100</span>% <span class="token number">37</span>.49MB/s <span class="token number">0</span>:00:02 <span class="token punctuation">(</span><span class="token number">4</span>, <span class="token number">100.0</span>% of <span class="token number">6</span><span class="token punctuation">)</span>
sent <span class="token number">172</span> bytes received <span class="token number">98276</span> bytes <span class="token number">17899.64</span> bytes/sec
total size is <span class="token number">150995011</span> speedup is <span class="token number">1533.75</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复，当服务器的数据出现问题时，那么这时就需要通过客户端的数据对服务端进行恢复，但前提是服务端允许客户端有写入权限，否则也不能在客户端直接对服务端进行恢复，使用rsync对数据进行恢复的方法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token parameter variable">-avz</span> <span class="token parameter variable">--progress</span> /databack/experiment/rsync/ work@172.16.78.192::www

Password:
building <span class="token function">file</span> list <span class="token punctuation">..</span>.
<span class="token number">6</span> files to consider
./
a
b
<span class="token number">67</span> <span class="token number">100</span>% <span class="token number">0</span>.00kB/s <span class="token number">0</span>:00:00 <span class="token punctuation">(</span><span class="token number">2</span>, <span class="token number">66.7</span>% of <span class="token number">6</span><span class="token punctuation">)</span>
c
sent <span class="token number">258</span> bytes received <span class="token number">76</span> bytes <span class="token number">95.43</span> bytes/sec
total size is <span class="token number">150995011</span> speedup is <span class="token number">452080.87</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将源目录同步到目标目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-r</span> <span class="token builtin class-name">source</span> destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>-r</code> 表示递归，即包含子目录。注意，<code>-r</code>是必须的，否则 <code>rsync</code> 运行不会成功。<code>source</code> 目录表示源目录，<code>destination</code> 表示目标目录。</p><p><strong>多个文件或目录同步</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-r</span> source1 source2 destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>source1</code>、<code>source2</code> 都会被同步到 <code>destination</code> 目录。</p><p><strong>同步元信息</strong></p><p><code>-a</code> 参数可以替代 <code>-r</code>，除了可以递归同步以外，还可以同步元信息（比如修改时间、权限等）。由于 <code>rsync</code> 默认使用文件大小和修改时间决定文件是否需要更新，所以 <code>-a</code> 比 <code>-r</code> 更有用。下面的用法才是常见的写法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-a</span> <span class="token builtin class-name">source</span> destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目标目录 <code>destination</code> 如果不存在，<code>rsync</code> 会自动创建。执行上面的命令后，源目录 <code>source</code> 被完整地复制到了目标目录 <code>destination</code> 下面，即形成了 <code>destination/source</code> 的目录结构。</p><p>如果只想同步源目录 <code>source</code> 里面的内容到目标目录 <code>destination</code> ，则需要在源目录后面加上斜杠。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-a</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令执行后，<code>source</code> 目录里面的内容，就都被复制到了 <code>destination</code> 目录里面，并不会在 <code>destination</code> 下面创建一个 <code>source</code> 子目录。</p><p><strong>模拟执行的结果</strong></p><p>如果不确定 <code>rsync</code> 执行后会产生什么结果，可以先用 <code>-n</code> 或 <code>--dry-run</code> 参数模拟执行的结果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-anv</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>-n</code> 参数模拟命令执行的结果，并不真的执行命令。<code>-v</code> 参数则是将结果输出到终端，这样就可以看到哪些内容会被同步。</p><p><strong>目标目录成为源目录的镜像副本</strong></p><p>默认情况下，<code>rsync</code> 只确保源目录的所有内容（明确排除的文件除外）都复制到目标目录。它不会使两个目录保持相同，并且不会删除文件。如果要使得目标目录成为源目录的镜像副本，则必须使用 <code>--delete</code> 参数，这将删除只存在于目标目录、不存在于源目录的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--delete</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>--delete</code> 参数会使得 <code>destination</code> 成为 <code>source</code> 的一个镜像。</p><p><strong>排除文件</strong></p><p>有时，我们希望同步时排除某些文件或目录，这时可以用--exclude参数指定排除模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&#39;*.txt&#39;</span> source/ destination
<span class="token comment"># 或者</span>
$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--exclude</span> <span class="token string">&#39;*.txt&#39;</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令排除了所有 <code>TXT</code> 文件。</p><p>注意，<code>rsync</code> 会同步以&quot;点&quot;开头的隐藏文件，如果要排除隐藏文件，可以这样写 <code>--exclude=&quot;.*&quot;</code>。</p><p>如果要排除某个目录里面的所有文件，但不希望排除目录本身，可以写成下面这样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--exclude</span> <span class="token string">&#39;dir1/*&#39;</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多个排除模式，可以用多个 <code>--exclude</code> 参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--exclude</span> <span class="token string">&#39;file1.txt&#39;</span> <span class="token parameter variable">--exclude</span> <span class="token string">&#39;dir1/*&#39;</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多个排除模式也可以利用 Bash 的大扩号的扩展功能，只用一个 <code>--exclude</code> 参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;file1.txt&#39;</span>,<span class="token string">&#39;dir1/*&#39;</span><span class="token punctuation">}</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果排除模式很多，可以将它们写入一个文件，每个模式一行，然后用 <code>--exclude-from</code> 参数指定这个文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> --exclude-from<span class="token operator">=</span><span class="token string">&#39;exclude-file.txt&#39;</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>指定必须同步的文件模式</strong></p><p><code>--include</code> 参数用来指定必须同步的文件模式，往往与 <code>--exclude</code> 结合使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&#39;*&#39;</span> source/ destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令指定同步时，排除所有文件，但是会包括 <code>TXT</code> 文件。</p>`,68),l=[c];function p(r,t){return n(),a("div",null,l)}const d=s(i,[["render",p],["__file","rsync.html.vue"]]);export{d as default};
