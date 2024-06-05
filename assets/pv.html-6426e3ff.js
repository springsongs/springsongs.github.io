import{_ as e,M as p,p as t,q as i,R as n,t as a,N as l,a1 as r}from"./framework-5866ffd3.js";const o={},c=r(`<h1 id="pv" tabindex="-1"><a class="header-anchor" href="#pv" aria-hidden="true">#</a> pv</h1><p>显示当前在命令行执行的命令的进度信息，管道查看器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>pv命令</strong> Pipe Viewer 的简称，由Andrew Wood 开发。意思是通过管道显示数据处理进度的信息。这些信息包括已经耗费的时间，完成的百分比(通过进度条显示)，当前的速度，全部传输的数据，以及估计剩余的时间。</p><h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装" aria-hidden="true">#</a> 下载安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Debian 系的操作系统，如 Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">pv</span>

<span class="token comment"># RedHat系的则这样：</span>
yum <span class="token function">install</span> <span class="token function">pv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pv<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
<span class="token function">pv</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span> <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-p, <span class="token parameter variable">--progress</span>           显示进度条
-t, <span class="token parameter variable">--timer</span>              显示已用时间
-e, <span class="token parameter variable">--eta</span>                显示预计到达时间 <span class="token punctuation">(</span>完成<span class="token punctuation">)</span>
-I, <span class="token parameter variable">--fineta</span>             显示绝对估计到达时间
                         <span class="token punctuation">(</span>完成<span class="token punctuation">)</span>
-r, <span class="token parameter variable">--rate</span>               显示数据传输速率计数器
-a, --average-rate       显示数据传输平均速率计数器
-b, <span class="token parameter variable">--bytes</span>              显示传输的字节数
-T, --buffer-percent     显示正在使用的传输缓冲区百分比
-A, --last-written NUM   显示上次写入的字节数
-F, <span class="token parameter variable">--format</span> FORMAT      将输出格式设置为FORMAT
-n, <span class="token parameter variable">--numeric</span>            输出百分比
-q, <span class="token parameter variable">--quiet</span>              不输出任何信息

-W, <span class="token parameter variable">--wait</span>               在传输第一个字节之前不显示任何内容
-D, --delay-start SEC    在SEC秒过去之前不显示任何内容
-s, <span class="token parameter variable">--size</span> SIZE          将估算的数据大小设置为SIZE字节
-l, --line-mode          计算行数而不是字节数 
-0, <span class="token parameter variable">--null</span>               行以零结尾
-i, <span class="token parameter variable">--interval</span> SEC       每SEC秒更新一次
-w, <span class="token parameter variable">--width</span> WIDTH        假设终端的宽度为WIDTH个字符 
-H, <span class="token parameter variable">--height</span> HEIGHT      假设终端高度为HEIGHT行
-N, <span class="token parameter variable">--name</span> NAME          在可视信息前面加上名称
-f, <span class="token parameter variable">--force</span>              将标准错误输出到终端
-c, <span class="token parameter variable">--cursor</span>             使用光标定位转义序列

-L, --rate-limit RATE    将传输限制为每秒RATE字节
-B, --buffer-size BYTES  使用BYTES的缓冲区大小
-C, --no-splice          从不使用splice<span class="token punctuation">(</span><span class="token punctuation">)</span>，始终使用读/写
-E, --skip-errors        跳过输入中的读取错误
-S, --stop-at-size       传输--size字节后停止
-R, <span class="token parameter variable">--remote</span> PID         更新过程PID的设置

-P, <span class="token parameter variable">--pidfile</span> FILE       将进程ID保存在FILE中 

-d, <span class="token parameter variable">--watchfd</span> PID<span class="token punctuation">[</span>:FD<span class="token punctuation">]</span>   监视进程PID,打开的文件FD

-h, <span class="token parameter variable">--help</span>               显示帮助
-V, <span class="token parameter variable">--version</span>            显示版本信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>我们（在 linux 上使用命令行的用户）的大多数使用场景都会用到的命令是从一个 USB 驱动器拷贝电影文件到你的电脑。如果你使用 cp 来完成上面的任务，你会什么情况都不清楚，直到整个复制过程结束或者出错。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 复制文件会有进度</span>
linux <span class="token punctuation">[</span>master●<span class="token punctuation">]</span> % <span class="token function">pv</span> ~/Downloads/CentOS-7-x86_64-Minimal-1511.iso <span class="token operator">&gt;</span> ~/Desktop/CentOS-7-x86_64-Minimal-1511.iso
<span class="token comment"># 下面输入信息</span>
552MiB <span class="token number">0</span>:00:02 <span class="token punctuation">[</span> 212MiB/s<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">&gt;</span>           <span class="token punctuation">]</span> <span class="token number">91</span>% ETA <span class="token number">0</span>:00:00

<span class="token comment"># -L 可以让你修改 pv 命令的传输速率。</span>
<span class="token comment"># 使用 -L 选项来限制传输速率为2MB/s。</span>
<span class="token function">pv</span> <span class="token parameter variable">-L</span> 2m /media/himanshu/1AC2-A8E3/fNf.mkv <span class="token operator">&gt;</span> ./Desktop/fnf.mkv 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 字符一个个匀速在命令行中显示出来</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Tecmint[dot]com is a community of Linux Nerds and Geeks&quot;</span> <span class="token operator">|</span> <span class="token function">pv</span> <span class="token parameter variable">-qL</span> <span class="token number">10</span>

<span class="token comment"># 压缩文件展示进度信息</span>
<span class="token function">pv</span> /media/himanshu/1AC2-A8E3/fnf.mkv <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> ./Desktop/fnf.log.gz 


<span class="token comment"># 用 dd 命令将 iso 写入磁盘，pv来实现进度条的显示</span>
<span class="token function">sudo</span> <span class="token function">pv</span> <span class="token parameter variable">-cN</span> <span class="token builtin class-name">source</span> <span class="token operator">&lt;</span> /Users/kacperwang/Downloads/CentOS-7-x86_64-Everything-1511.iso <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/disk2 <span class="token assign-left variable">bs</span><span class="token operator">=</span>4m
<span class="token comment">## 显示下面进度</span>
source:  <span class="token number">5</span>.2GiB <span class="token number">5</span>:11:41 <span class="token punctuation">[</span> 503KiB/s<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span>       <span class="token punctuation">]</span> <span class="token number">71</span>% ETA <span class="token number">2</span>:01:56
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在linux上, 如果执行的一些命令或者一些脚本需要花费很长时间, 但又不能拿出更多的精力反复盯着有没有执行结束, 这时候可以用pv监听PID, 任务完成后通过网络通知到微信或者钉钉, 这样就可以腾出来精力做其他的事, 是不是很棒</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">pv</span> <span class="token parameter variable">-d</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;&lt;脚本或命令的关键字&gt;&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>这里执行发通知脚本或者命令,脚本或命令需要提前调试好<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>`,17),d=n("li",null,[a('选项"-d, --watchfd PID[:FD]", 是在1.6.6版本中才有的参数,如果使用需要'),n("code",null,"pv"),a("升级到大于等于1.6.6的版本")],-1),u=n("code",null,"pv",-1),v={href:"http://www.rpmfind.net/linux/rpm2html/search.php?query=pv&submit=Search+...&system=EPEL&arch=",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"rpm -ivh pv-1.6.6-7.el8.x86_64.rpm -U",-1);function k(b,h){const s=p("ExternalLinkIcon");return t(),i("div",null,[c,n("ol",null,[d,n("li",null,[a("CentOS7的Yum仓库里"),u,a("最新的是1.4.6版本,1.6.6版本是发布在CentOS8里面的,如果需要,可以将CentOS8里的pv下载到本地电脑上或者本地的Yum私服里, 这个是"),n("a",v,[a("下载地址"),l(s)]),a(", 可以根据自己不同的架构下载, 1.6.6的安装: "),m])])])}const g=e(o,[["render",k],["__file","pv.html.vue"]]);export{g as default};
