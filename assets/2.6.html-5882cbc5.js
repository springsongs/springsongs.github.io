import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const i={},l=a(`<h1 id="mysql-配置修改" tabindex="-1"><a class="header-anchor" href="#mysql-配置修改" aria-hidden="true">#</a> MySQL 配置修改</h1><p>安装完了之后更改配置的需求比较少，所以你需要根据实际使用过程中来修改 MySQL 配置参数，MySQL提供了两个更改配置的方式。</p><ul><li>通过配置想来修改，听说在windows上面有个配置工具(MySQL server instance config) 提供了自动配置服务，真嗨皮。</li><li>另一种是手工修改配置文件来修改。</li></ul><p>对于初学者刚接触MySQL来说，使用工具来修改配置是非常好的，但是在 Mac 系统下面没有找到这样的工具，如果你部署到Linux下面好像没有这种工具，所以在真正的生产环境还是得修改配置来更改 MySQL 配置。接下来只讲解配置文件来修改，为你将来在 Mac 或者 Linux ，包括windows平台系统下容易配置做点准备吧，通过配置文件来配置，让你做跨平台玩儿 MySQL ，让你逼格更高一点，哈哈。</p><h2 id="mysql安装目录说明" tabindex="-1"><a class="header-anchor" href="#mysql安装目录说明" aria-hidden="true">#</a> MySQL安装目录说明</h2><p>MySQL 不同的版本安装目录会有一点不一致，但是大致会差不多，会有一点差异，我这个是 Mac OS X 系统中的安装目录，在这里<code>/usr/local/mysql</code></p><table><thead><tr><th>目录</th><th>目录内容</th></tr></thead><tbody><tr><td>bin/</td><td>客户端程序和mysqld服务器，相关命令</td></tr><tr><td>data/</td><td></td></tr><tr><td>docs/</td><td></td></tr><tr><td>include/</td><td>包含头文件</td></tr><tr><td>lib/</td><td>库</td></tr><tr><td>man/</td><td></td></tr><tr><td>share/</td><td></td></tr><tr><td>support-files/</td><td>存在一些默认配置文件，如<code>my-default.cnf</code></td></tr></tbody></table><h2 id="配置文件的位置" tabindex="-1"><a class="header-anchor" href="#配置文件的位置" aria-hidden="true">#</a> 配置文件的位置</h2><p>从命令行终端运行此命令，将在寻找Linux/BSD / OS X系统中的MySQL配置文件 my.cnf 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">--help</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;Default options&#39;</span> <span class="token parameter variable">-A</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令执行后，会有这样的输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Default options are <span class="token builtin class-name">read</span> from the following files <span class="token keyword">in</span> the given order:
/etc/my.cnf /etc/mysql/my.cnf /usr/local/etc/my.cnf ~/.my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，可以检查你正在使用的 my.cnf 文件是否存在。在 Mac OS X 中默认式没有 my.cnf 文件的。你可以从这个地方复制一份过去 <code>/usr/local/mysql/support-files/my-default.cnf</code> 每个版本都不一样，你只需要找到一个 <code>.cnf</code> 后缀结尾的文件即可。复制到<code>/etc/</code>目录下并重新命名为 <code>my.cnf</code></p><h2 id="windows系统配置文件读取" tabindex="-1"><a class="header-anchor" href="#windows系统配置文件读取" aria-hidden="true">#</a> Windows系统配置文件读取</h2><p>在Windows上，MySQL的程序读取从下表中显示的文件，按照指定的顺序启动配置选项（顶部文件首先被读取，文件读取后优先）。</p><table><thead><tr><th>文件名字</th><th>作用</th></tr></thead><tbody><tr><td><strong>%PROGRAMDATA%</strong>\\MySQL\\MySQL Server 5.6\\my.ini, <strong>%PROGRAMDATA%</strong>\\MySQL\\MySQL Server 5.6\\my.cnf</td><td>全局配置</td></tr><tr><td>%WINDIR%\\my.ini, %WINDIR%\\my.cnf</td><td>全局配置</td></tr><tr><td>C:\\my.ini, C:\\my.cnf</td><td>全局配置</td></tr><tr><td><strong>BASEDIR</strong>\\my.ini, <strong>BASEDIR</strong>\\my.cnf</td><td>全局配置</td></tr><tr><td>defaults-extra-file</td><td>如果有的话指定该文件<code>--defaults-extra-file=文件名字</code></td></tr><tr><td>%APPDATA%\\MySQL.mylogin.cnf</td><td>登录路径选项（仅适用于客户端）</td></tr></tbody></table><ul><li><strong>%PROGRAMDATA%</strong> 这个路径默认为 <code>C:\\ProgramData</code> 老版本的Windows系统， 默认在 <code> C:\\Documents and Settings\\All Users\\Application Data\\MySQL</code></li><li><strong>%WINDIR%</strong> 表示Windows的目录位置。使用下面的命令从windir环境变量的值确定其精确位置 <code>C:\\&gt; echo %WINDIR%</code></li><li><strong>BASEDIR</strong> 表示MySQL的安装目录。</li><li><strong>%APPDATA%</strong> 表示Windows的目录位置。使用下面的命令从windir环境变量的值确定其精确位置 <code>C:\\&gt; echo %WINDIR%</code></li></ul><p>MySQL 提供的二进制安装代码所创建的默认目录，在Windows中，默认安装路径是<code>C:\\Program Files\\MySQL\\MySQL Server 5.7</code></p><h2 id="linux系统配置文件读取" tabindex="-1"><a class="header-anchor" href="#linux系统配置文件读取" aria-hidden="true">#</a> Linux系统配置文件读取</h2><table><thead><tr><th>文件名字</th><th>作用</th></tr></thead><tbody><tr><td>/etc/my.cnf</td><td>全局配置</td></tr><tr><td>/etc/mysql/my.cnf</td><td>全局配置</td></tr><tr><td>SYSCONFDIR/my.cnf</td><td>全局配置</td></tr><tr><td>$MYSQL_HOME/my.cnf</td><td>Server-specific 服务器特定的选项 (仅适用于服务端)</td></tr><tr><td>defaults-extra-file</td><td>如果有的话指定该文件<code>--defaults-extra-file=文件名字</code></td></tr><tr><td>~/.my.cnf</td><td>Server-specific 服务器特定的选项</td></tr><tr><td>~/.mylogin.cnf</td><td>User-specific 登录路径选择 （仅适用于客户端）</td></tr></tbody></table><ul><li><strong>$HOME</strong> 上表中表示用户的主目录，即用户的根目录。</li><li><strong>SYSCONFDIR</strong> 代表指定的目录与SYSCONFDIR配置文件的安装路径，默认情况这个是位于安装目录里面的目录。</li><li><strong>$MYSQL_HOME</strong> 是包含在该服务器的具体my.cnf文件所在的目录的路径环境变量。如果 $MYSQL_HOME 没有设置，你启动服务器使用mysqld_safe程序，mysqld_safe试图设置 $MYSQL_HOME</li></ul><p>工具 <strong>mysqld_safe</strong> 使用注意：</p><ul><li>让BASEDIR和DATADIR分别代表MySQL的基本目录和数据目录的路径名。</li><li>如果my.cnf文件在DATADIR但不是在BASEDIR中，mysqld_safe设置MYSQL_HOME到DATADIR。</li><li>否则，如果MYSQL_HOME未设置并且在DATADIR没有my.cnf文件，mysqld_safe设置MYSQL_HOME到BASEDIR。</li></ul><h2 id="配置文件内容" tabindex="-1"><a class="header-anchor" href="#配置文件内容" aria-hidden="true">#</a> 配置文件内容</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 以下选项会被MySQL客户端应用读取。</span>
<span class="token comment"># 注意只有MySQL附带的客户端应用程序保证可以读取这段内容。</span>
<span class="token comment"># 如果你想你自己的MySQL应用程序获取这些值。</span>
<span class="token comment"># 需要在MySQL客户端库初始化的时候指定这些选项。</span>

<span class="token comment"># For advice on how to change settings please see</span>
<span class="token comment"># http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html</span>
<span class="token comment"># *** DO NOT EDIT THIS FILE. It&#39;s a template which will be copied to the</span>
<span class="token comment"># *** default location during install, and will be replaced if you</span>
<span class="token comment"># *** upgrade to a newer version of MySQL.</span>

<span class="token comment"># mysqld程序</span>

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>

<span class="token comment"># Remove leading # and set to the amount of RAM for the most important data</span>
<span class="token comment"># cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.</span>
<span class="token comment"># innodb_buffer_pool_size = 128M</span>

<span class="token comment"># ★★★这里很重要️能让MySQL登陆链接变快速</span>
skip-name-resolve

<span class="token comment"># Remove leading # to turn on a very important data integrity option: logging</span>
<span class="token comment"># changes to the binary log between backups.</span>
<span class="token comment"># log_bin</span>

<span class="token comment"># These are commonly set, remove the # and set as required.</span>
<span class="token comment"># 使用给定目录作为根目录(安装目录)。</span>
<span class="token comment"># basedir = .....</span>
<span class="token comment"># 从给定目录读取数据库文件。</span>
<span class="token comment"># datadir = .....</span>
<span class="token comment"># 为mysqld程序指定一个存放进程ID的文件(仅适用于UNIX/Linux系统);</span>
<span class="token comment"># pid-file = .....</span>
<span class="token comment"># 指定MsSQL侦听的端口</span>
<span class="token comment"># port = .....</span>
<span class="token comment"># server_id = .....</span>
<span class="token comment"># 为MySQL客户程序与服务器之间的本地通信指定一个套接字文件(Linux下默认是/var/lib/mysql/mysql.sock文件)</span>
<span class="token comment"># socket = .....</span>


<span class="token assign-left variable">sql_mode</span><span class="token operator">=</span>NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

<span class="token comment"># 一般配置选项</span>
basedir <span class="token operator">=</span> /data/apps/mysql
datadir <span class="token operator">=</span> /data/appData/mysql
port <span class="token operator">=</span> <span class="token number">3306</span>
socket <span class="token operator">=</span> /var/run/mysqld/mysqld.sock
<span class="token comment"># 设置</span>
character-set-server<span class="token operator">=</span>utf8


<span class="token comment"># 指定MySQL可能的连接数量。</span>
<span class="token comment"># 当MySQL主线程在很短时间内接收到非常多的连接请求，该参数生效，主线程花费很短时间检查连接并且启动一个新线程。</span>
<span class="token comment"># back_log参数的值指出在MySQL暂时停止响应新请求之前的短时间内多少个请求可以被存在堆栈中。</span>
<span class="token comment"># 如果系统在一个短时间内有很多连接，则需要增大该参数的值，该参数值指定到来的TCP/IP连接的侦听队列的大小。</span>
<span class="token comment"># 试图设定back_log高于你的操作系统的限制将是无效的。默认值为50。对于Linux系统推荐设置为小于512的整数。</span>

<span class="token comment"># back_log 是操作系统在监听队列中所能保持的连接数,</span>
<span class="token comment"># 队列保存了在 MySQL 连接管理器线程处理之前的连接.</span>
<span class="token comment"># 如果你有非常高的连接率并且出现 “connection refused” 报错,</span>
<span class="token comment"># 你就应该增加此处的值.</span>
<span class="token comment"># 检查你的操作系统文档来获取这个变量的最大值.</span>
<span class="token comment"># 如果将back_log设定到比你操作系统限制更高的值，将会没有效果</span>
back_log <span class="token operator">=</span> <span class="token number">300</span>

<span class="token comment"># 不在 TCP/IP 端口上进行监听.</span>
<span class="token comment"># 如果所有的进程都是在同一台服务器连接到本地的 mysqld,</span>
<span class="token comment"># 这样设置将是增强安全的方法</span>
<span class="token comment"># 所有 mysqld 的连接都是通过 Unix Sockets 或者命名管道进行的.</span>
<span class="token comment"># 注意在 Windows下如果没有打开命名管道选项而只是用此项</span>
<span class="token comment"># (通过 “enable-named-pipe” 选项) 将会导致 MySQL 服务没有任何作用!</span>
<span class="token comment">#skip-networking</span>

<span class="token comment"># MySQL 服务所允许的同时会话数的上限</span>
<span class="token comment"># 其中一个连接将被 SUPER 权限保留作为管理员登录.</span>
<span class="token comment"># 即便已经达到了连接数的上限.</span>
max_connections <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token comment"># 每个客户端连接最大的错误允许数量,如果达到了此限制.</span>
<span class="token comment"># 这个客户端将会被 MySQL 服务阻止直到执行了 “FLUSH HOSTS” 或者服务重启</span>
<span class="token comment"># 非法的密码以及其他在链接时的错误会增加此值.</span>
<span class="token comment"># 查看 “Aborted_connects” 状态来获取全局计数器.</span>
max_connect_errors <span class="token operator">=</span> <span class="token number">50</span>

<span class="token comment"># 所有线程所打开表的数量.</span>
<span class="token comment"># 增加此值就增加了 mysqld 所需要的文件描述符的数量</span>
<span class="token comment"># 这样你需要确认在 [mysqld_safe] 中 “open-files-limit” 变量设置打开文件数量允许至少等于 table_cache 的值</span>
table_open_cache <span class="token operator">=</span> <span class="token number">4096</span>

<span class="token comment"># 允许外部文件级别的锁. 打开文件锁会对性能造成负面影响</span>
<span class="token comment"># 所以只有在你在同样的文件上运行多个数据库实例时才使用此选项(注意仍会有其他约束!)</span>
<span class="token comment"># 或者你在文件层面上使用了其他一些软件依赖来锁定 MyISAM 表</span>
<span class="token comment">#external-locking</span>

<span class="token comment"># 服务所能处理的请求包的最大大小以及服务所能处理的最大的请求大小(当与大的 BLOB 字段一起工作时相当必要)</span>
<span class="token comment"># 每个连接独立的大小，大小动态增加</span>
max_allowed_packet <span class="token operator">=</span> 32M

<span class="token comment"># 在一个事务中 binlog 为了记录 SQL 状态所持有的 cache 大小</span>
<span class="token comment"># 如果你经常使用大的,多声明的事务,你可以增加此值来获取更大的性能.</span>
<span class="token comment"># 所有从事务来的状态都将被缓冲在 binlog 缓冲中然后在提交后一次性写入到 binlog 中</span>
<span class="token comment"># 如果事务比此值大, 会使用磁盘上的临时文件来替代.</span>
<span class="token comment"># 此缓冲在每个连接的事务第一次更新状态时被创建</span>
binlog_cache_size <span class="token operator">=</span> 4M

<span class="token comment"># 独立的内存表所允许的最大容量。</span>
<span class="token comment"># 此选项为了防止意外创建一个超大的内存表导致永尽所有的内存资源。</span>
max_heap_table_size <span class="token operator">=</span> 128M

<span class="token comment"># 随机读取数据缓冲区使用内存(read_rnd_buffer_size)：和顺序读取相对应，</span>
<span class="token comment"># 当 MySQL 进行非顺序读取（随机读取）数据块的时候，会利用&gt;这个缓冲区暂存读取的数据</span>
<span class="token comment"># 如根据索引信息读取表数据，根据排序后的结果集与表进行 Join 等等</span>
<span class="token comment"># 总的来说，就是当数据块的读取需要满足&gt;一定的顺序的情况下，MySQL 就需要产生随机读取，进而使用到 read_rnd_buffer_size 参数所设置的内存缓冲区</span>
read_rnd_buffer_size <span class="token operator">=</span> 16M

<span class="token comment"># 排序缓冲被用来处理类似 ORDER BY 以及 GROUP BY 队列所引起的排序</span>
<span class="token comment"># 如果排序后的数据无法放入排序缓冲,一个用来替代的基于磁盘的合并分类会被使用</span>
<span class="token comment"># 查看 “Sort_merge_passes” 状态变量。</span>
<span class="token comment"># 在排序发生时由每个线程分配</span>
<span class="token comment"># 每个需要进行排序的线程分配该大小的一个缓冲区。增加这值加速ORDER BY或GROUP BY操作。</span>
<span class="token comment"># 注意：该参数对应的分配内存是每连接独占！如果有100个连接，那么实际分配的总共排序缓冲区大小为100×6=600MB</span>
sort_buffer_size <span class="token operator">=</span> 16M

<span class="token comment"># 此缓冲被使用来优化全联合(FULL JOINS 不带索引的联合)。</span>
<span class="token comment"># 类似的联合在极大多数情况下有非常糟糕的性能表现,但是将此值设大能够减轻性能影响。</span>
<span class="token comment"># 通过 “Select_full_join” 状态变量查看全联合的数量</span>
<span class="token comment"># 当全联合发生时,在每个线程中分配</span>
join_buffer_size <span class="token operator">=</span> 16M

<span class="token comment"># 缓存可重用的线程数</span>
<span class="token comment"># thread_cache = 8</span>

<span class="token comment"># 避免MySQL的外部锁定，减少出错几率增强稳定性。</span>
<span class="token comment"># skip-locking                 </span>

<span class="token comment"># 我们在 cache 中保留多少线程用于重用</span>
<span class="token comment"># 当一个客户端断开连接后,如果 cache 中的线程还少于 thread_cache_size,则客户端线程被放入cache 中。</span>
<span class="token comment"># 这可以在你需要大量新连接的时候极大的减少线程创建的开销</span>
<span class="token comment"># (一般来说如果你有好的线程模型的话,这不会有明显的性能提升。)</span>
thread_cache_size <span class="token operator">=</span> <span class="token number">16</span>

<span class="token comment"># 此允许应用程序给予线程系统一个提示在同一时间给予渴望被运行的线程的数量。</span>
<span class="token comment"># 此值只对于支持 thread_concurrency() 函数的系统有意义( 例如Sun Solaris)。</span>
<span class="token comment"># 你可可以尝试使用 [CPU数量]*(2..4) 来作为 thread_concurrency 的值</span>
<span class="token comment">#****(此属性对当前环境无效)****</span>
<span class="token comment"># thread_concurrency = 8</span>

<span class="token comment"># 查询缓冲常被用来缓冲 SELECT 的结果并且在下一次同样查询的时候不再执行直接返回结果。</span>
<span class="token comment"># 打开查询缓冲可以极大的提高服务器速度, 如果你有大量的相同的查询并且很少修改表。</span>
<span class="token comment"># 查看 “Qcache_lowmem_prunes” 状态变量来检查是否当前值对于你的负载来说是否足够高。</span>
<span class="token comment"># 注意: 在你表经常变化的情况下或者如果你的查询原文每次都不同,</span>
<span class="token comment"># 查询缓冲也许引起性能下降而不是性能提升。</span>
query_cache_size <span class="token operator">=</span> 128M

<span class="token comment"># 只有小于此设定值的结果才会被缓冲</span>
<span class="token comment"># 此设置用来保护查询缓冲,防止一个极大的结果集将其他所有的查询结果都覆盖。</span>
query_cache_limit <span class="token operator">=</span> 4M

<span class="token comment"># 被全文检索索引的最小的字长。</span>
<span class="token comment"># 你也许希望减少它，如果你需要搜索更短字的时候。</span>
<span class="token comment"># 注意在你修改此值之后，你需要重建你的 FULLTEXT 索引</span>
ft_min_word_len <span class="token operator">=</span> <span class="token number">8</span>

<span class="token comment"># 如果你的系统支持 memlock() 函数，你也许希望打开此选项用以让运行中的 mysql 在在内存高度紧张的时候，数据在内存中保持锁定并且防止可能被 swapping out</span>
<span class="token comment"># 此选项对于性能有益</span>
<span class="token comment">#memlock</span>

<span class="token comment"># 当创建新表时作为默认使用的表类型，</span>
<span class="token comment"># 如果在创建表示没有特别执行表类型，将会使用此值</span>
<span class="token comment">#****(此属性对当前环境无效)****</span>
<span class="token comment">#default_table_type = InnoDB</span>

<span class="token comment"># 线程使用的堆大小. 此容量的内存在每次连接时被预留.</span>
<span class="token comment"># MySQL 本身常不会需要超过 64K 的内存</span>
<span class="token comment"># 如果你使用你自己的需要大量堆的 UDF 函数或者你的操作系统对于某些操作需要更多的堆，你也许需要将其设置的更高一点.</span>
thread_stack <span class="token operator">=</span> 512K

<span class="token comment"># 设定默认的事务隔离级别.可用的级别如下:</span>
<span class="token comment"># READ-UNCOMMITTED， READ-COMMITTED， REPEATABLE-READ， SERIALIZABLE</span>
transaction_isolation <span class="token operator">=</span> REPEATABLE-READ

<span class="token comment"># 内部(内存中)临时表的最大大小</span>
<span class="token comment"># 如果一个表增长到比此值更大，将会自动转换为基于磁盘的表。</span>
<span class="token comment"># 此限制是针对单个表的，而不是总和。</span>
tmp_table_size <span class="token operator">=</span> 128M

<span class="token comment"># 打开二进制日志功能。</span>
<span class="token comment"># 在复制(replication)配置中，作为 MASTER 主服务器必须打开此项</span>
<span class="token comment"># 如果你需要从你最后的备份中做基于时间点的恢复，你也同样需要二进制日志。</span>
log-bin<span class="token operator">=</span>mysql-bin

<span class="token comment"># 如果你在使用链式从服务器结构的复制模式 (A-&gt;B-&gt;C)，</span>
<span class="token comment"># 你需要在服务器B上打开此项。</span>
<span class="token comment"># 此选项打开在从线程上重做过的更新的日志， 并将其写入从服务器的二进制日志。</span>
<span class="token comment">#log_slave_updates</span>

<span class="token comment"># 打开全查询日志。 所有的由服务器接收到的查询 (甚至对于一个错误语法的查询)</span>
<span class="token comment"># 都会被记录下来。 这对于调试非常有用， 在生产环境中常常关闭此项。</span>
<span class="token comment">#log</span>

<span class="token comment"># 将警告打印输出到错误 log 文件。 如果你对于 MySQL 有任何问题</span>
<span class="token comment"># 你应该打开警告 log 并且仔细审查错误日志，查出可能的原因。</span>
<span class="token comment">#log_warnings</span>

<span class="token comment"># 记录慢速查询。 慢速查询是指消耗了比 “long_query_time” 定义的更多时间的查询。</span>
<span class="token comment"># 如果 log_long_format 被打开，那些没有使用索引的查询也会被记录。</span>
<span class="token comment"># 如果你经常增加新查询到已有的系统内的话。 一般来说这是一个好主意，</span>
<span class="token comment">#log_slow_queries</span>

<span class="token comment"># 有的使用了比这个时间(以秒为单位)更多的查询会被认为是慢速查询。</span>
<span class="token comment"># 不要在这里使用“1″, 否则会导致所有的查询,甚至非常快的查询页被记录下来(由于 MySQL 目前时间的精确度只能达到秒的级别)。</span>
long_query_time <span class="token operator">=</span> <span class="token number">6</span>

<span class="token comment"># 在慢速日志中记录更多的信息。</span>
<span class="token comment"># 一般此项最好打开。</span>
<span class="token comment"># 打开此项会记录使得那些没有使用索引的查询也被作为到慢速查询附加到慢速日志里</span>
<span class="token comment">#log_long_format</span>

<span class="token comment"># 此目录被MySQL用来保存临时文件。例如,</span>
<span class="token comment"># 它被用来处理基于磁盘的大型排序,和内部排序一样。</span>
<span class="token comment"># 以及简单的临时表。</span>
<span class="token comment"># 如果你不创建非常大的临时文件,将其放置到 swapfs/tmpfs 文件系统上也许比较好</span>
<span class="token comment"># 另一种选择是你也可以将其放置在独立的磁盘上。</span>
<span class="token comment"># 你可以使用”;”来放置多个路径</span>
<span class="token comment"># 他们会按照 roud-robin 方法被轮询使用。</span>
<span class="token comment">#tmpdir = /tmp</span>

<span class="token comment"># *** 主从复制相关的设置</span>

<span class="token comment"># 唯一的服务辨识号,数值位于 1 到 2^32-1之间。</span>
<span class="token comment"># 此值在master和slave上都需要设置。</span>
<span class="token comment"># 如果 “master-host” 没有被设置,则默认为1, 但是如果忽略此选项,MySQL不会作为master生效。</span>
server-id <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># 复制的Slave (去掉master段的注释来使其生效)</span>
<span class="token comment">#</span>
<span class="token comment"># 为了配置此主机作为复制的slave服务器,你可以选择两种方法:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) 使用 CHANGE MASTER TO 命令 (在我们的手册中有完整描述) -</span>
<span class="token comment"># 语法如下:</span>
<span class="token comment">#</span>
<span class="token comment"># CHANGE MASTER TO MASTER_HOST=, MASTER_PORT=,</span>
<span class="token comment"># MASTER_USER=, MASTER_PASSWORD= ;</span>
<span class="token comment">#</span>
<span class="token comment"># 你需要替换掉，等被尖括号包围的字段以及使用master的端口号替换 (默认3306)。</span>
<span class="token comment">#</span>
<span class="token comment"># 例子:</span>
<span class="token comment">#</span>
<span class="token comment"># CHANGE MASTER TO MASTER_HOST=’125.564.12.1′, MASTER_PORT=3306,</span>
<span class="token comment"># MASTER_USER=’joe’, MASTER_PASSWORD=’secret’;</span>
<span class="token comment">#</span>
<span class="token comment"># 或者</span>
<span class="token comment">#</span>
<span class="token comment"># 2) 设置以下的变量. 不论如何, 在你选择这种方法的情况下， 然后第一次启动复制(甚至不成功的情况下，</span>
<span class="token comment"># 例如如果你输入错密码在master-password字段并且slave无法连接)，</span>
<span class="token comment"># slave会创建一个 master.info 文件，并且之后任何对于包含在此文件内的参数的变化都会被忽略</span>
<span class="token comment"># 并且由 master.info 文件内的内容覆盖， 除非你关闭slave服务， 删除 master.info 并且重启slave 服务。</span>
<span class="token comment"># 由于这个原因，你也许不想碰一下的配置(注释掉的) 并且使用 CHANGE MASTER TO (查看上面) 来代替</span>
<span class="token comment">#</span>
<span class="token comment"># 所需要的唯一id号位于 2 和 2^32 – 1之间</span>
<span class="token comment"># (并且和master不同)</span>
<span class="token comment"># 如果master-host被设置了.则默认值是2</span>
<span class="token comment"># 但是如果省略,则不会生效</span>
<span class="token comment">#server-id = 2</span>
<span class="token comment">#</span>
<span class="token comment"># 复制结构中的master – 必须</span>
<span class="token comment">#master-host =</span>
<span class="token comment">#</span>
<span class="token comment"># 当连接到master上时slave所用来认证的用户名 – 必须</span>
<span class="token comment">#master-user =</span>
<span class="token comment">#</span>
<span class="token comment"># 当连接到master上时slave所用来认证的密码 – 必须</span>
<span class="token comment">#master-password =</span>
<span class="token comment">#</span>
<span class="token comment"># master监听的端口.</span>
<span class="token comment"># 可选 – 默认是3306</span>
<span class="token comment">#master-port =</span>

<span class="token comment"># 使得slave只读。只有用户拥有SUPER权限和在上面的slave线程能够修改数据。</span>
<span class="token comment"># 你可以使用此项去保证没有应用程序会意外的修改slave而不是master上的数据</span>
<span class="token comment">#read_only</span>

<span class="token comment">#*** MyISAM 相关选项</span>

<span class="token comment"># 关键词缓冲的大小， 一般用来缓冲 MyISAM 表的索引块。</span>
<span class="token comment"># 不要将其设置大于你可用内存的30%，</span>
<span class="token comment"># 因为一部分内存同样被OS用来缓冲行数据</span>
<span class="token comment"># 甚至在你并不使用 MyISAM 表的情况下， 你也需要仍旧设置起 8-64M 内存由于它同样会被内部临时磁盘表使用。</span>
<span class="token comment"># key_buffer_size = 128M</span>

<span class="token comment"># 用来做 MyISAM 表全表扫描的缓冲大小.</span>
<span class="token comment"># 当全表扫描需要时,在对应线程中分配.</span>
<span class="token comment"># read_buffer_size = 8M</span>

<span class="token comment"># 当在排序之后,从一个已经排序好的序列中读取行时,行数据将从这个缓冲中读取来防止磁盘寻道.</span>
<span class="token comment"># 如果你增高此值,可以提高很多 ORDER BY 的性能.</span>
<span class="token comment"># 当需要时由每个线程分配</span>
<span class="token comment"># read_rnd_buffer_size = 64M</span>

<span class="token comment"># MyISAM 使用特殊的类似树的 cache 来使得突发插入</span>
<span class="token comment"># (这些插入是,INSERT … SELECT, INSERT … VALUES (…), (…), …, 以及 LOAD DATA INFILE) 更快.</span>
<span class="token comment"># 此变量限制每个进程中缓冲树的字节数.</span>
<span class="token comment"># 设置为 0 会关闭此优化.</span>
<span class="token comment"># 为了最优化不要将此值设置大于 “key_buffer_size”.</span>
<span class="token comment"># 当突发插入被检测到时此缓冲将被分配.</span>
<span class="token comment"># bulk_insert_buffer_size = 256M</span>

<span class="token comment"># 此缓冲当 MySQL 需要在 REPAIR, OPTIMIZE, ALTER 以及 LOAD DATA INFILE 到一个空表中引起重建索引时被分配.</span>
<span class="token comment"># 这在每个线程中被分配.所以在设置大值时需要小心.</span>
<span class="token comment"># myisam_sort_buffer_size = 256M</span>

<span class="token comment"># MySQL 重建索引时所允许的最大临时文件的大小 (当 REPAIR, ALTER TABLE 或者 LOAD DATA INFILE).</span>
<span class="token comment"># 如果文件大小比此值更大,索引会通过键值缓冲创建(更慢)</span>
<span class="token comment"># myisam_max_sort_file_size = 10G</span>

<span class="token comment"># 如果被用来更快的索引创建索引所使用临时文件大于制定的值,那就使用键值缓冲方法.</span>
<span class="token comment"># 这主要用来强制在大表中长字串键去使用慢速的键值缓冲方法来创建索引.</span>
<span class="token comment"># myisam_max_extra_sort_file_size = 10G</span>

<span class="token comment"># 如果一个表拥有超过一个索引, MyISAM 可以通过并行排序使用超过一个线程去修复他们.</span>
<span class="token comment"># 这对于拥有多个 CPU 以及大量内存情况的用户,是一个很好的选择.</span>
<span class="token comment"># myisam_repair_threads = 1</span>

<span class="token comment"># 自动检查和修复没有适当关闭的 MyISAM 表.</span>
<span class="token comment"># myisam_recover</span>

<span class="token comment"># 默认关闭 Federated</span>
<span class="token comment"># skip-federated</span>

<span class="token comment"># *** BDB 相关选项 ***</span>

<span class="token comment"># 如果你运行的MySQL服务有BDB支持但是你不准备使用的时候使用此选项. 这会节省内存并且可能加速一些事.</span>
<span class="token comment">#****(此属性对当前环境无效)****</span>
<span class="token comment">#skip-bdb</span>

<span class="token comment"># *** INNODB 相关选项 ***</span>

<span class="token comment"># 如果你的 MySQL 服务包含 InnoDB 支持但是并不打算使用的话,</span>
<span class="token comment"># 使用此选项会节省内存以及磁盘空间,并且加速某些部分</span>
<span class="token comment">#skip-innodb</span>

<span class="token comment"># 附加的内存池被 InnoDB 用来保存 metadata 信息(5.6中不再推荐使用)</span>
<span class="token comment"># 如果 InnoDB 为此目的需要更多的内存,它会开始从 OS 这里申请内存.</span>
<span class="token comment"># 由于这个操作在大多数现代操作系统上已经足够快, 你一般不需要修改此值.</span>
<span class="token comment"># SHOW INNODB STATUS 命令会显示当先使用的数量.</span>
<span class="token comment">#****(此属性对当前环境无效)****</span>
<span class="token comment">#innodb_additional_mem_pool_size = 64M</span>

<span class="token comment"># InnoDB使用一个缓冲池来保存索引和原始数据, 不像 MyISAM.</span>
<span class="token comment"># 这里你设置越大,这能保证你在大多数的读取操作时使用的是内存而不是硬盘,在存取表里面数据时所需要的磁盘 I/O 越少.</span>
<span class="token comment"># 在一个独立使用的数据库服务器上,你可以设置这个变量到服务器物理内存大小的80%</span>
<span class="token comment"># 不要设置过大,否则,由于物理内存的竞争可能导致操作系统的换页颠簸.</span>
<span class="token comment"># 注意在32位系统上你每个进程可能被限制在 2-3.5G 用户层面内存限制,</span>
<span class="token comment"># 所以不要设置的太高.</span>
innodb_buffer_pool_size <span class="token operator">=</span> 6G

<span class="token comment"># InnoDB 将数据保存在一个或者多个数据文件中成为表空间.</span>
<span class="token comment"># 如果你只有单个逻辑驱动保存你的数据,一个单个的自增文件就足够好了.</span>
<span class="token comment"># 其他情况下.每个设备一个文件一般都是个好的选择.</span>
<span class="token comment"># 你也可以配置 InnoDB 来使用裸盘分区 – 请参考手册来获取更多相关内容</span>
innodb_data_file_path <span class="token operator">=</span> ibdata1:10M:autoextend

<span class="token comment"># 设置此选项如果你希望InnoDB表空间文件被保存在其他分区.</span>
<span class="token comment"># 默认保存在MySQL的datadir中.</span>
<span class="token comment">#innodb_data_home_dir =</span>

<span class="token comment"># 用来同步IO操作的IO线程的数量.</span>
<span class="token comment"># 此值在Unix下被硬编码为8,但是在Windows磁盘I/O可能在一个大数值下表现的更好.</span>
<span class="token comment">#innodb_file_io_threads = 8</span>

<span class="token comment"># 如果你发现 InnoDB 表空间损坏, 设置此值为一个非零值可能帮助你导出你的表.</span>
<span class="token comment"># 从1开始并且增加此值知道你能够成功的导出表.</span>
<span class="token comment">#innodb_force_recovery=1</span>

<span class="token comment"># 在 InnoDb 核心内的允许线程数量.</span>
<span class="token comment"># 最优值依赖于应用程序,硬件以及操作系统的调度方式.</span>
<span class="token comment"># 过高的值可能导致线程的互斥颠簸.</span>
innodb_thread_concurrency <span class="token operator">=</span> <span class="token number">16</span>

<span class="token comment"># 如果设置为1 ,InnoDB 会在每次提交后刷新(fsync)事务日志到磁盘上,</span>
<span class="token comment"># 这提供了完整的 ACID 行为.</span>
<span class="token comment"># 如果你愿意对事务安全折衷, 并且你正在运行一个小的事物, 你可以设置此值到0或者2来减少由事务日志引起的磁盘I/O</span>
<span class="token comment"># 0代表日志只大约每秒写入日志文件并且日志文件刷新到磁盘.</span>
<span class="token comment"># 2代表日志写入日志文件在每次提交后,但是日志文件只有大约每秒才会刷新到磁盘上.</span>
innodb_flush_log_at_trx_commit <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment">#（说明：如果是游戏服务器，建议此值设置为2；如果是对数据安全要求极高的应用，建议设置为1；</span>
<span class="token comment">#设置为0性能最高，但如果发生故障，数据可能会有丢失的危险！</span>
<span class="token comment">#默认值1的意思是每一次事务提交或事务外的指令都需要把日志写入（flush）硬盘，这是很费时的。</span>
<span class="token comment">#特别是使用电池供电缓存（Battery backed up cache）时。</span>
<span class="token comment">#设成2对于很多运用，特别是从MyISAM表转过来的是可以的，它的意思是不写入硬盘而是写入系统缓存。</span>
<span class="token comment">#日志仍然会每秒flush到硬盘，所以你一般不会丢失超过1-2秒的更新。</span>
<span class="token comment">#设成0会更快一点，但安全方面比较差，即使MySQL挂了也可能会丢失事务的数据。而值2只会在整个操作系统挂了时才可能丢数据。）</span>

<span class="token comment"># 加速 InnoDB 的关闭. 这会阻止 InnoDB 在关闭时做全清除以及插入缓冲合并.</span>
<span class="token comment"># 这可能极大增加关机时间, 但是取而代之的是 InnoDB 可能在下次启动时做这些操作.</span>
<span class="token comment">#innodb_fast_shutdown</span>

<span class="token comment"># 用来缓冲日志数据的缓冲区的大小.</span>
<span class="token comment"># 当此值快满时, InnoDB 将必须刷新数据到磁盘上.</span>
<span class="token comment"># 由于基本上每秒都会刷新一次,所以没有必要将此值设置的太大(甚至对于长事务而言)</span>
innodb_log_buffer_size <span class="token operator">=</span> 16M

<span class="token comment"># 在日志组中每个日志文件的大小.</span>
<span class="token comment"># 你应该设置日志文件总合大小到你缓冲池大小的25%~100%</span>
<span class="token comment"># 来避免在日志文件覆写上不必要的缓冲池刷新行为.</span>
<span class="token comment"># 不论如何, 请注意一个大的日志文件大小会增加恢复进程所需要的时间.</span>
innodb_log_file_size <span class="token operator">=</span> 512M

<span class="token comment"># 在日志组中的文件总数.</span>
<span class="token comment"># 通常来说2~3是比较好的.</span>
innodb_log_files_in_group <span class="token operator">=</span> <span class="token number">3</span>

<span class="token comment"># InnoDB 的日志文件所在位置. 默认是 MySQL 的 datadir.</span>
<span class="token comment"># 你可以将其指定到一个独立的硬盘上或者一个RAID1卷上来提高其性能</span>
<span class="token comment">#innodb_log_group_home_dir</span>

<span class="token comment"># 在 InnoDB 缓冲池中最大允许的脏页面的比例.</span>
<span class="token comment"># 如果达到限额, InnoDB 会开始刷新他们防止他们妨碍到干净数据页面.</span>
<span class="token comment"># 这是一个软限制,不被保证绝对执行.</span>
innodb_max_dirty_pages_pct <span class="token operator">=</span> <span class="token number">90</span>

<span class="token comment"># InnoDB 用来刷新日志的方法.</span>
<span class="token comment"># 表空间总是使用双重写入刷新方法</span>
<span class="token comment"># 默认值是 “fdatasync”, 另一个是 “O_DSYNC”.</span>
<span class="token comment"># 一般来说，如果你有硬件 RAID 控制器，并且其独立缓存采用 write-back 机制，并有着电池断电保护，那么应该设置配置为 O_DIRECT</span>
<span class="token comment"># 否则，大多数情况下应将其设为 fdatasync</span>
<span class="token comment">#innodb_flush_method=fdatasync</span>

<span class="token comment"># 在被回滚前,一个 InnoDB 的事务应该等待一个锁被批准多久.</span>
<span class="token comment"># InnoDB 在其拥有的锁表中自动检测事务死锁并且回滚事务.</span>
<span class="token comment"># 如果你使用 LOCK TABLES 指令, 或者在同样事务中使用除了 InnoDB 以外的其他事务安全的存储引擎</span>
<span class="token comment"># 那么一个死锁可能发生而 InnoDB 无法注意到.</span>
<span class="token comment"># 这种情况下这个 timeout 值对于解决这种问题就非常有帮助.</span>
innodb_lock_wait_timeout <span class="token operator">=</span> <span class="token number">120</span>

<span class="token comment"># 这项设置告知InnoDB是否需要将所有表的数据和索引存放在共享表空间里（innodb_file_per_table = OFF） 或者为每张表的数据单独放在一个.ibd文件（innodb_file_per_table = ON）</span>
<span class="token comment"># 每张表一个文件允许你在drop、truncate或者rebuild表时回收磁盘空间</span>
<span class="token comment"># 这对于一些高级特性也是有必要的，比如数据压缩,但是它不会带来任何性能收益</span>
innodb_file_per_table <span class="token operator">=</span> on

<span class="token punctuation">[</span>mysqldump<span class="token punctuation">]</span>
<span class="token comment"># 不要在将内存中的整个结果写入磁盘之前缓存. 在导出非常巨大的表时需要此项</span>
quick

max_allowed_packet <span class="token operator">=</span> 32M

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
no-auto-rehash
default-character-set<span class="token operator">=</span>utf8
<span class="token comment"># 仅仅允许使用键值的 UPDATEs 和 DELETEs .</span>
safe-updates

<span class="token punctuation">[</span>myisamchk<span class="token punctuation">]</span>
key_buffer <span class="token operator">=</span> 16M
sort_buffer_size <span class="token operator">=</span> 16M
read_buffer <span class="token operator">=</span> 8M
write_buffer <span class="token operator">=</span> 8M

<span class="token punctuation">[</span>mysqlhotcopy<span class="token punctuation">]</span>
interactive-timeout

<span class="token punctuation">[</span>mysqld_safe<span class="token punctuation">]</span>
<span class="token comment"># 增加每个进程的可打开文件数量.</span>
<span class="token comment"># 警告: 确认你已经将全系统限制设定的足够高!</span>
<span class="token comment"># 打开大量表需要将此值设大</span>
open-files-limit <span class="token operator">=</span> <span class="token number">8192</span>

<span class="token comment">#</span>
<span class="token comment"># MySQL 服务端</span>
<span class="token comment">#</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好定制配置文件 my.cnf 之后需要初始化一下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqld <span class="token parameter variable">--initialize</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化之后需要重启服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启服务</span>
mysql.server restart

<span class="token comment"># Linux 这么运行，启动服务</span>
<span class="token function">service</span> mysqld start
<span class="token comment"># Mac 运行去掉 service</span>
mysqld start

<span class="token comment"># Linux 查看服务运行的状态</span>
<span class="token function">service</span> mysqld status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),c=[l];function m(d,t){return s(),e("div",null,c)}const v=n(i,[["render",m],["__file","2.6.html.vue"]]);export{v as default};
