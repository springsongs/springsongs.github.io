import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const i={},l=a(`<h1 id="wget" tabindex="-1"><a class="header-anchor" href="#wget" aria-hidden="true">#</a> wget</h1><p>Linux系统下载文件工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>wget命令</strong> 用来从指定的URL下载文件。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。</p><p>wget支持HTTP，HTTPS和FTP协议，可以使用HTTP代理。所谓的自动下载是指，wget可以在用户退出系统的之后在后台执行。这意味这你可以登录系统，启动一个wget下载任务，然后退出系统，wget将在后台执行直到任务完成，相对于其它大部分浏览器在下载大量数据时需要用户一直的参与，这省去了极大的麻烦。</p><p>用于从网络上下载资源，没有指定目录，下载资源回默认为当前目录。wget虽然功能强大，但是使用起来还是比较简单：</p><ol><li><strong>支持断点下传功能</strong> 这一点，也是网络蚂蚁和FlashGet当年最大的卖点，现在，Wget也可以使用此功能，那些网络不是太好的用户可以放心了；</li><li><strong>同时支持FTP和HTTP下载方式</strong> 尽管现在大部分软件可以使用HTTP方式下载，但是，有些时候，仍然需要使用FTP方式下载软件；</li><li><strong>支持代理服务器</strong> 对安全强度很高的系统而言，一般不会将自己的系统直接暴露在互联网上，所以，支持代理是下载软件必须有的功能；</li><li><strong>设置方便简单</strong> 可能，习惯图形界面的用户已经不是太习惯命令行了，但是，命令行在设置上其实有更多的优点，最少，鼠标可以少点很多次，也不要担心是否错点鼠标；</li><li><strong>程序小，完全免费</strong> 程序小可以考虑不计，因为现在的硬盘实在太大了；完全免费就不得不考虑了，即使网络上有很多所谓的免费软件，但是，这些软件的广告却不是我们喜欢的。</li></ol><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>URL地址<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>启动参数：

-V, –-version 显示wget的版本后退出
-h, –-help 打印语法帮助
-b, –-background 启动后转入后台执行
-e, –-execute<span class="token operator">=</span>COMMAND 执行 <span class="token variable"><span class="token variable">\`</span>.wgetrc’格式的命令，wgetrc格式参见/etc/wgetrc或~/.wgetrc

记录和输入文件参数：

-o, –-output-file<span class="token operator">=</span>FILE 把记录写到FILE文件中
-a, –-append-output<span class="token operator">=</span>FILE 把记录追加到FILE文件中
-d, –-debug 打印调试输出
-q, –-quiet 安静模式<span class="token punctuation">(</span>没有输出<span class="token punctuation">)</span>
-v, –-verbose 冗长模式<span class="token punctuation">(</span>这是缺省设置<span class="token punctuation">)</span>
-nv, –-non-verbose 关掉冗长模式，但不是安静模式
-i, –-input-file<span class="token operator">=</span>FILE 下载在FILE文件中出现的URLs
-F, –-force-html 把输入文件当作HTML格式文件对待
-B, –-base<span class="token operator">=</span>URL 将URL作为在-F -i参数指定的文件中出现的相对链接的前缀
–-sslcertfile<span class="token operator">=</span>FILE 可选客户端证书
–-sslcertkey<span class="token operator">=</span>KEYFILE 可选客户端证书的KEYFILE
–-egd-file<span class="token operator">=</span>FILE 指定EGD socket的文件名

下载参数：

–-bind-address<span class="token operator">=</span>ADDRESS 指定本地使用地址<span class="token punctuation">(</span>主机名或IP，当本地有多个IP或名字时使用<span class="token punctuation">)</span>
-t, –-tries<span class="token operator">=</span>NUMBER 设定最大尝试链接次数<span class="token punctuation">(</span><span class="token number">0</span> 表示无限制<span class="token punctuation">)</span>.
<span class="token parameter variable">-O</span> –-output-document<span class="token operator">=</span>FILE 把文档写到FILE文件中
-nc, –-no-clobber 不要覆盖存在的文件或使用.<span class="token comment">#前缀</span>
-c, –-continue 接着下载没下载完的文件
–progress<span class="token operator">=</span>TYPE 设定进程条标记
-N, –-timestamping 不要重新下载文件除非比本地文件新
-S, –-server-response 打印服务器的回应
–-spider 不下载任何东西
-T, –-timeout<span class="token operator">=</span><span class="token environment constant">SECONDS</span> 设定响应超时的秒数
-w, –-wait<span class="token operator">=</span><span class="token environment constant">SECONDS</span> 两次尝试之间间隔<span class="token environment constant">SECONDS</span>秒
–waitretry<span class="token operator">=</span><span class="token environment constant">SECONDS</span> 在重新链接之间等待1…<span class="token environment constant">SECONDS</span>秒
–random-wait 在下载之间等待0…2*WAIT秒
-Y, –-proxy<span class="token operator">=</span>on/off 打开或关闭代理
-Q, –-quota<span class="token operator">=</span>NUMBER 设置下载的容量限制
-–limit-rate<span class="token operator">=</span>RATE 限定下载输率

目录参数：

<span class="token parameter variable">-nd</span> –-no-directories 不创建目录
-x, –-force-directories 强制创建目录
-nH, –-no-host-directories 不创建主机目录
-P, –-directory-prefix<span class="token operator">=</span>PREFIX 将文件保存到目录 PREFIX/…
–cut-dirs<span class="token operator">=</span>NUMBER 忽略 NUMBER层远程目录

HTTP 选项参数：

-–http-user<span class="token operator">=</span><span class="token environment constant">USER</span> 设定HTTP用户名为 <span class="token environment constant">USER</span><span class="token builtin class-name">.</span>
-–http-passwd<span class="token operator">=</span>PASS 设定http密码为 PASS
-C, –-cache<span class="token operator">=</span>on/off 允许/不允许服务器端的数据缓存 <span class="token punctuation">(</span>一般情况下允许<span class="token punctuation">)</span>
-E, –-html-extension 将所有text/html文档以.html扩展名保存
-–ignore-length 忽略 <span class="token variable">\`</span></span>Content-Length’头域
-–header<span class="token operator">=</span>STRING 在headers中插入字符串 STRING
-–proxy-user<span class="token operator">=</span><span class="token environment constant">USER</span> 设定代理的用户名为 <span class="token environment constant">USER</span>
-–proxy-passwd<span class="token operator">=</span>PASS 设定代理的密码为 PASS
-–referer<span class="token operator">=</span>URL 在HTTP请求中包含 <span class="token variable"><span class="token variable">\`</span>Referer: URL’头
-s, –-save-headers 保存HTTP头到文件
-U, –-user-agent<span class="token operator">=</span>AGENT 设定代理的名称为 AGENT而不是 Wget/VERSION
-–no-http-keep-alive 关闭 HTTP活动链接 <span class="token punctuation">(</span>永远链接<span class="token punctuation">)</span>
–-cookies<span class="token operator">=</span>off 不使用 cookies
–-load-cookies<span class="token operator">=</span>FILE 在开始会话前从文件 FILE中加载cookie
-–save-cookies<span class="token operator">=</span>FILE 在会话结束后将 cookies保存到 FILE文件中

FTP 选项参数：

-nr, -–dont-remove-listing 不移走 <span class="token variable">\`</span></span>.listing’文件
-g, -–glob<span class="token operator">=</span>on/off 打开或关闭文件名的 globbing机制
-–passive-ftp 使用被动传输模式 <span class="token punctuation">(</span>缺省值<span class="token punctuation">)</span>.
-–active-ftp 使用主动传输模式
-–retr-symlinks 在递归的时候，将链接指向文件<span class="token punctuation">(</span>而不是目录<span class="token punctuation">)</span>

递归下载参数：

-r, -–recursive 递归下载－－慎用<span class="token operator">!</span>
-l, -–level<span class="token operator">=</span>NUMBER 最大递归深度 <span class="token punctuation">(</span>inf 或 <span class="token number">0</span> 代表无穷<span class="token punctuation">)</span>
–-delete-after 在现在完毕后局部删除文件
-k, –-convert-links 转换非相对链接为相对链接
-K, –-backup-converted 在转换文件X之前，将之备份为 X.orig
-m, –-mirror 等价于 <span class="token parameter variable">-r</span> <span class="token parameter variable">-N</span> <span class="token parameter variable">-l</span> inf <span class="token parameter variable">-nr</span>
-p, –-page-requisites 下载显示HTML文件的所有图片

递归下载中的包含和不包含<span class="token punctuation">(</span>accept/reject<span class="token punctuation">)</span>：

-A, –-accept<span class="token operator">=</span>LIST 分号分隔的被接受扩展名的列表
-R, –-reject<span class="token operator">=</span>LIST 分号分隔的不被接受的扩展名的列表
-D, –-domains<span class="token operator">=</span>LIST 分号分隔的被接受域的列表
–-exclude-domains<span class="token operator">=</span>LIST 分号分隔的不被接受的域的列表
–-follow-ftp 跟踪HTML文档中的FTP链接
–-follow-tags<span class="token operator">=</span>LIST 分号分隔的被跟踪的HTML标签的列表
-G, –-ignore-tags<span class="token operator">=</span>LIST 分号分隔的被忽略的HTML标签的列表
-H, –-span-hosts 当递归时转到外部主机
-L, –-relative 仅仅跟踪相对链接
-I, –-include-directories<span class="token operator">=</span>LIST 允许目录的列表
-X, –-exclude-directories<span class="token operator">=</span>LIST 不被包含目录的列表
-np, –-no-parent 不要追溯到父目录
<span class="token function">wget</span> <span class="token parameter variable">-S</span> –-spider url 不下载只显示过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>URL：下载指定的URL地址。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p><strong>使用wget下载单个文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://www.jsdig.com/testfile.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下的例子是从网络下载一个文件并保存在当前目录，在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。</p><p><strong>下载并以不同的文件名保存</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> wordpress.zip http://www.jsdig.com/download.aspx?id<span class="token operator">=</span><span class="token number">1080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>wget默认会以最后一个符合<code>/</code>的后面的字符来命令，对于动态链接的下载通常文件名会不正确。</p><p>错误：下面的例子会下载一个文件并以名称<code>download.aspx?id=1080</code>保存:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://www.jsdig.com/download?id<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即使下载的文件是zip格式，它仍然以<code>download.php?id=1080</code>命名。</p><p>正确：为了解决这个问题，我们可以使用参数<code>-O</code>来指定一个文件名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> wordpress.zip http://www.jsdig.com/download.aspx?id<span class="token operator">=</span><span class="token number">1080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>wget限速下载</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> --limit-rate<span class="token operator">=</span>300k http://www.jsdig.com/testfile.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你执行wget的时候，它默认会占用全部可能的宽带下载。但是当你准备下载一个大文件，而你还需要下载其它文件时就有必要限速了。</p><p><strong>使用wget断点续传</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-c</span> http://www.jsdig.com/testfile.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>wget -c</code>重新启动下载中断的文件，对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。需要继续中断的下载时可以使用<code>-c</code>参数。</p><p><strong>使用wget后台下载</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-b</span> http://www.jsdig.com/testfile.zip

Continuing <span class="token keyword">in</span> background, pid <span class="token number">1840</span>.
Output will be written to \`wget-log&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于下载非常大的文件的时候，我们可以使用参数<code>-b</code>进行后台下载，你可以使用以下命令来察看下载进度：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token parameter variable">-f</span> wget-log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>伪装代理名称下载</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> --user-agent<span class="token operator">=</span><span class="token string">&quot;Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16&quot;</span> http://www.jsdig.com/testfile.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有些网站能通过根据判断代理名称不是浏览器而拒绝你的下载请求。不过你可以通过<code>--user-agent</code>参数伪装。</p><p><strong>测试下载链接</strong></p><p>当你打算进行定时下载，你应该在预定时间测试下载链接是否有效。我们可以增加<code>--spider</code>参数进行检查。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">--spider</span> URL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果下载链接正确，将会显示:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Spider mode enabled. Check <span class="token keyword">if</span> remote <span class="token function">file</span> exists.
HTTP request sent, awaiting response<span class="token punctuation">..</span>. <span class="token number">200</span> OK
Length: unspecified <span class="token punctuation">[</span>text/html<span class="token punctuation">]</span>
Remote <span class="token function">file</span> exists and could contain further links,
but recursion is disabled -- not retrieving.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这保证了下载能在预定的时间进行，但当你给错了一个链接，将会显示如下错误:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">--spider</span> url
Spider mode enabled. Check <span class="token keyword">if</span> remote <span class="token function">file</span> exists.
HTTP request sent, awaiting response<span class="token punctuation">..</span>. <span class="token number">404</span> Not Found
Remote <span class="token function">file</span> does not exist -- broken link<span class="token operator">!</span><span class="token operator">!</span><span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在以下几种情况下使用<code>--spider</code>参数：</p><ul><li>定时下载之前进行检查</li><li>间隔检测网站是否可用</li><li>检查网站页面的死链接</li></ul><p><strong>增加重试次数</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">40</span> URL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果网络有问题或下载一个大文件也有可能失败。wget默认重试20次连接下载文件。如果需要，你可以使用<code>--tries</code>增加重试次数。</p><p><strong>下载多个文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-i</span> filelist.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先，保存一份下载链接文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> filelist.txt
url1
url2
url3
url4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着使用这个文件和参数<code>-i</code>下载。</p><p><strong>镜像网站</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">--mirror</span> <span class="token parameter variable">-p</span> --convert-links <span class="token parameter variable">-P</span> ./LOCAL URL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载整个网站到本地。</p><ul><li><code>--miror</code>开户镜像下载。</li><li><code>-p</code>下载所有为了html页面显示正常的文件。</li><li><code>--convert-links</code>下载后，转换成本地的链接。</li><li><code>-P ./LOCAL</code>保存所有文件和目录到本地指定目录。</li></ul><p><strong>过滤指定格式下载</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">--reject</span><span class="token operator">=</span>gif ur
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载一个网站，但你不希望下载图片，可以使用这条命令。</p><p><strong>把下载信息存入日志文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-o</span> download.log URL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不希望下载信息直接显示在终端而是在一个日志文件，可以使用。</p><p><strong>限制总下载文件大小</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-Q5m</span> <span class="token parameter variable">-i</span> filelist.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你想要下载的文件超过5M而退出下载，你可以使用。注意：这个参数对单个文件下载不起作用，只能递归下载时才有效。</p><p><strong>下载指定格式文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-A.pdf</span> url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以在以下情况使用该功能：</p><ul><li>下载一个网站的所有图片。</li><li>下载一个网站的所有视频。</li><li>下载一个网站的所有PDF文件。</li></ul><p><strong>FTP下载</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> ftp-url
<span class="token function">wget</span> --ftp-user<span class="token operator">=</span>USERNAME --ftp-password<span class="token operator">=</span>PASSWORD url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用wget来完成ftp链接的下载。</p><p>使用wget匿名ftp下载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> ftp-url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用wget用户名和密码认证的ftp下载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> --ftp-user<span class="token operator">=</span>USERNAME --ftp-password<span class="token operator">=</span>PASSWORD url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,79),t=[l];function r(d,p){return s(),e("div",null,t)}const c=n(i,[["render",r],["__file","wget.html.vue"]]);export{c as default};
