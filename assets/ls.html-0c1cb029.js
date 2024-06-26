import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const l={},r=e(`<h1 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h1><p>显示目录内容列表</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>ls命令</strong> 就是list的缩写，用来显示目标列表，在Linux中是使用率较高的命令。ls命令的输出信息可以进行彩色加亮显示，以分区不同类型的文件。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>-1abcdfgiklmnopqrstuxABCDFGLNQRSUX<span class="token punctuation">]</span> <span class="token punctuation">[</span>-w cols<span class="token punctuation">]</span> <span class="token punctuation">[</span>-T cols<span class="token punctuation">]</span> <span class="token punctuation">[</span>-I pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>--full-time<span class="token punctuation">]</span> 
   <span class="token punctuation">[</span>--format<span class="token operator">=</span><span class="token punctuation">{</span>long,verbose,commas,across,vertical,single-col‐umn<span class="token punctuation">}</span><span class="token punctuation">]</span> 
   <span class="token punctuation">[</span>--sort<span class="token operator">=</span><span class="token punctuation">{</span>none,time,size,extension<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--time<span class="token operator">=</span><span class="token punctuation">{</span>atime,access,use,ctime,status<span class="token punctuation">}</span><span class="token punctuation">]</span> 
   <span class="token punctuation">[</span>--color<span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">{</span>none,auto,always<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-C</span>     <span class="token comment"># 多列输出，纵向排序。</span>
<span class="token parameter variable">-F</span>     <span class="token comment"># 每个目录名加 &quot;/&quot; 后缀，每个 FIFO 名加 &quot;|&quot; 后缀， 每个可运行名加“ * ”后缀。</span>
<span class="token parameter variable">-R</span>     <span class="token comment"># 递归列出遇到的子目录。</span>
<span class="token parameter variable">-a</span>     <span class="token comment"># 列出所有文件，包括以 &quot;.&quot; 开头的隐含文件。</span>
<span class="token parameter variable">-c</span>     <span class="token comment"># 使用“状态改变时间”代替“文件修改时间”为依据来排序（使用“-t”选项时）或列出（使用“-l”选项时）。</span>
<span class="token parameter variable">-d</span>     <span class="token comment"># 将目录名像其它文件一样列出，而不是列出它们的内容。</span>
<span class="token parameter variable">-i</span>     <span class="token comment"># 输出文件前先输出文件系列号（即 i 节点号: i-node number）。 -l  列出（以单列格式）文件模式</span>
       <span class="token comment"># （file mode），文件的链接数，所有者名，组名，文件大小（以字节为单位），时间信息，及文件名。</span>
       <span class="token comment"># 缺省时，时间信息显示最近修改时间；可以以选项“-c”和“-u”选择显示其它两种时间信息。对于设备文件，</span>
       <span class="token comment"># 原先显示文件大小的区域通常显示的是主要和次要的信号（majorand minor device numbers）。</span>
<span class="token parameter variable">-q</span>     <span class="token comment"># 将文件名中的非打印字符输出为问号。（对于到终端的输出这是缺省的。）</span>
<span class="token parameter variable">-r</span>     <span class="token comment"># 逆序排列。</span>
<span class="token parameter variable">-t</span>     <span class="token comment"># 按时间信息排序。</span>
<span class="token parameter variable">-u</span>     <span class="token comment"># 使用最近访问时间代替最近修改时间为依据来排序（使用“-t”选项时）或列出（使用“-l”选项时）。</span>
<span class="token parameter variable">-1</span>     <span class="token comment"># 单列输出。</span>
-1, <span class="token parameter variable">--format</span><span class="token operator">=</span>single-column  <span class="token comment"># 一行输出一个文件（单列输出）。如标准输出不是到终端，此选项就是缺省选项。</span>
-a, <span class="token parameter variable">--all</span> <span class="token comment"># 列出目录中所有文件，包括以“.”开头的文件。</span>
-b, <span class="token parameter variable">--escape</span> <span class="token comment"># 把文件名中不可输出的字符用反斜杠加字符编号(就像在 C 语言里一样)的形式列出。</span>
-c, <span class="token parameter variable">--time</span><span class="token operator">=</span>ctime, <span class="token parameter variable">--time</span><span class="token operator">=</span>status
      <span class="token comment"># 按文件状态改变时间（i节点中的ctime）排序并输出目录内</span>
      <span class="token comment"># 容。如采用长格式输出（选项“-l”），使用文件的状态改</span>
      <span class="token comment"># 变时间取代文件修改时间。【译注：所谓文件状态改变（i节</span>
      <span class="token comment"># 点中以ctime标志），既包括文件被修改，又包括文件属性（ 如所有者、组、链接数等等）的变化】</span>
-d, <span class="token parameter variable">--directory</span>
      <span class="token comment"># 将目录名像其它文件一样列出，而不是列出它们的内容。</span>
<span class="token parameter variable">-f</span>    <span class="token comment"># 不排序目录内容；按它们在磁盘上存储的顺序列出。同时启 动“ -a ”选项，如果在“ -f ”之前存在“ -l”、</span>
      <span class="token comment"># “ - -color ”或“ -s ”，则禁止它们。</span>
<span class="token parameter variable">-g</span>    <span class="token comment"># 忽略，为兼容UNIX用。</span>
-i, <span class="token parameter variable">--inode</span>
      <span class="token comment"># 在每个文件左边打印  i  节点号（也叫文件序列号和索引号:  file  serial  number and index num‐</span>
      <span class="token comment"># ber）。i节点号在每个特定的文件系统中是唯一的。</span>
-k, <span class="token parameter variable">--kilobytes</span>
      <span class="token comment"># 如列出文件大小，则以千字节KB为单位。</span>
-l, <span class="token parameter variable">--format</span><span class="token operator">=</span>long, <span class="token parameter variable">--format</span><span class="token operator">=</span>verbose
      <span class="token comment"># 输出的信息从左到右依次包括文件名、文件类型、权限、硬链接数、所有者名、组名、大小（byte）</span>
      <span class="token comment"># 、及时间信息（如未指明是其它时间即指修改时间）。对于6个月以上的文件或超出未来</span>
      <span class="token comment"># 1小时的文件，时间信息中的时分将被年代取代。</span>
      <span class="token comment"># 每个目录列出前，有一行“总块数”显示目录下全部文件所占的磁盘空间。块默认是1024字节；</span>
      <span class="token comment"># 如果设置了 POSIXLY_CORRECT 的环境变量，除非用“-k”选项，则默认块大小是 512 字节。</span>
      <span class="token comment"># 每一个硬链接都计入总块数（因此可能重复计数），这无 疑是个缺点。</span>

<span class="token comment"># 列出的权限类似于以符号表示（文件）模式的规范。但是 ls</span>
      <span class="token comment"># 在每套权限的第三个字符中结合了多位（ multiple bits ） 的信息，如下： s 如果设置了  setuid</span>
      <span class="token comment"># 位或 setgid   位，而且也设置了相应的可执行位。 S 如果设置了 setuid 位或 setgid</span>
      <span class="token comment"># 位，但是没有设置相应的可执行位。 t 如果设置了  sticky  位，而且也设置了相应的可执行位。  T</span>
      <span class="token comment"># 如果设置了 sticky 位，但是没有设置相应的可执行位。              x</span>
      <span class="token comment"># 如果仅仅设置了可执行位而非以上四种情况。 - 其它情况（即可执行位未设置）。</span>
-m, <span class="token parameter variable">--format</span><span class="token operator">=</span>commas
      <span class="token comment"># 水平列出文件，每行尽可能多，相互用逗号和一个空格分隔。</span>
-n, --numeric-uid-gid
      <span class="token comment"># 列出数字化的 UID 和 GID 而不是用户名和组名。</span>
<span class="token parameter variable">-o</span>    <span class="token comment">#  以长格式列出目录内容，但是不显示组信息。等于使用“         --format=long          --no-group</span>
      <span class="token comment"># ”选项。提供此选项是为了与其它版本的 ls 兼容。</span>
<span class="token parameter variable">-p</span>    <span class="token comment">#  在每个文件名后附上一个字符以说明该文件的类型。类似“ -F ”选项但是不 标示可执行文件。</span>
-q, --hide-control-chars
      <span class="token comment"># 用问号代替文件名中非打印的字符。这是缺省选项。</span>
-r, <span class="token parameter variable">--reverse</span>
      <span class="token comment"># 逆序排列目录内容。</span>
-s, <span class="token parameter variable">--size</span>
      <span class="token comment"># 在每个文件名左侧输出该文件的大小，以    1024   字节的块为单位。如果设置了   POSIXLY_CORRECT</span>
      <span class="token comment"># 的环境变量，除非用“ -k ”选项，块大小是 512 字节。</span>
-t, <span class="token parameter variable">--sort</span><span class="token operator">=</span>time
      <span class="token comment"># 按文件最近修改时间（ i 节点中的 mtime ）而不是按文件名字典序排序，新文件 靠前。</span>
-u, <span class="token parameter variable">--time</span><span class="token operator">=</span>atime, <span class="token parameter variable">--time</span><span class="token operator">=</span>access, <span class="token parameter variable">--time</span><span class="token operator">=</span>use
      <span class="token comment"># 类似选项“    -t    ”，但是用文件最近访问时间（    i     节点中的     atime     ）取代文件修</span>
      <span class="token comment"># 改时间。如果使用长格式列出，打印的时间是最近访问时间。</span>
-w, <span class="token parameter variable">--width</span> cols
       <span class="token comment"># 假定屏幕宽度是      cols      （      cols     以实际数字取代）列。如未用此选项，缺省值是这</span>
       <span class="token comment"># 样获得的：如可能先尝试取自终端驱动，否则尝试取自环境变量          COLUMNS          （如果设</span>
       <span class="token comment"># 置了的话），都不行则取 80 。</span>

-x, <span class="token parameter variable">--format</span><span class="token operator">=</span>across, <span class="token parameter variable">--format</span><span class="token operator">=</span>horizontal
       <span class="token comment"># 多列输出，横向排序。</span>

-A, --almost-all
       <span class="token comment"># 显示除 &quot;.&quot; 和 &quot;..&quot; 外的所有文件。</span>

-B, --ignore-backups
       <span class="token comment"># 不输出以“ ~ ”结尾的备份文件，除非已经在命令行中给出。</span>

-C, <span class="token parameter variable">--format</span><span class="token operator">=</span>vertical
       <span class="token comment"># 多列输出，纵向排序。当标准输出是终端时这是缺省项。使用命令名 dir 和 d 时， 则总是缺省的。</span>

-D, <span class="token parameter variable">--dired</span>
       <span class="token comment"># 当采用长格式（“-l”选项）输出时，在主要输出后，额外打印一行：  //DIRED//  BEG1 END1 BEG2</span>
       <span class="token comment"># END2 ...</span>

<span class="token comment"># BEGn 和 ENDn 是无符号整数，记录每个文件名的起始、结束位置在输出中的位置（</span>
<span class="token comment">#        字节偏移量）。这使得          Emacs          易于找到文件名，即使文件名包含空格或换行等非正</span>
<span class="token comment">#        常字符也无需特异的搜索。</span>
<span class="token comment"># </span>
<span class="token comment"># 如果目录是递归列出的（“ -R ”选项），每个子目录后列出类似一行：</span>
       <span class="token comment"># //SUBDIRED//  BEG1 END1 ...  【译注：我测试了 TurboLinux4.0 和 RedHat6.1 ，发现它们都是在 “</span>
       <span class="token comment"># //DIRED//     BEG1...     ”之后列出“     //SUBDIRED//     BEG1     ...      ”，也即只有一个</span>
       <span class="token comment"># 而不是在每个子目录后都有。而且“ //SUBDIRED// BEG1 ... ”列出的是各个子目 录名的偏移。】</span>

-F, --classify, --file-type
       <span class="token comment"># 在每个文件名后附上一个字符以说明该文件的类型。“  * ”表示普通的可执行文件； “ / ”表示目录；“</span>
       <span class="token comment"># @ ”表示符号链接；“ | ”表示FIFOs；“ = ”表示套接字 (sockets) ；什么也没有则表示普通文件。</span>

-G, --no-group
       <span class="token comment"># 以长格式列目录时不显示组信息。</span>

-I, <span class="token parameter variable">--ignorepattern</span>
       <span class="token comment"># 除非在命令行中给定，不要列出匹配shell文件名匹配式（pattern ，不是指一般</span>
       <span class="token comment"># 表达式）的文件。在shell中，文件名以&quot;.&quot;起始的不与在文件名匹配式(pattern)</span>
       <span class="token comment"># 开头的通配符匹配。</span>

-L, <span class="token parameter variable">--dereference</span>
       <span class="token comment"># 列出符号链接指向的文件的信息，而不是符号链接本身。</span>

-N, <span class="token parameter variable">--literal</span>
       <span class="token comment"># 不要用引号引起文件名。</span>

-Q, --quote-name
       <span class="token comment"># 用双引号引起文件名，非打印字符以 C 语言的方法表示。</span>

-R, <span class="token parameter variable">--recursive</span>
       <span class="token comment"># 递归列出全部目录的内容。</span>

-S, <span class="token parameter variable">--sort</span><span class="token operator">=</span>size
       <span class="token comment"># 按文件大小而不是字典序排序目录内容，大文件靠前。</span>

-T, <span class="token parameter variable">--tabsize</span> cols
       <span class="token comment"># 假定每个制表符宽度是 cols 。缺省为 8。为求效率， ls 可能在输出中使用制表符。  若 cols 为</span>
       <span class="token number">0</span>，则不使用制表符。

-U, <span class="token parameter variable">--sort</span><span class="token operator">=</span>none
       <span class="token comment"># 不排序目录内容；按它们在磁盘上存储的顺序列出。（选项“-U”和“-f”的不</span>
       <span class="token comment"># 同是前者不启动或禁止相关的选项。）这在列很大的目录时特别有用，因为不加排序</span>
       <span class="token comment"># 能显著地加快速度。</span>

-X, <span class="token parameter variable">--sort</span><span class="token operator">=</span>extension
       <span class="token comment"># 按文件扩展名（由最后的 &quot;.&quot; 之后的字符组成）的字典序排序。没有扩展名的先列 出。</span>

--color<span class="token punctuation">[</span><span class="token operator">=</span>when<span class="token punctuation">]</span>
       <span class="token comment"># 指定是否使用颜色区别文件类别。环境变量  LS_COLORS  指定使用的颜色。如何设置 这个变量见 dir‐</span>
       <span class="token comment"># colors(1) 。 when 可以被省略，或是以下几项之一：</span>
none <span class="token comment"># 不使用颜色，这是缺省项。</span>
       <span class="token comment"># auto 仅当标准输出是终端时使用。 always 总是使用颜色。指定 --color 而且省略 when  时就等同于</span>
       <span class="token comment"># --color=always 。</span>

--full-time
       <span class="token comment"># 列出完整的时间，而不是使用标准的缩写。格式如同          date(1)          的缺省格式；此格式</span>
       <span class="token comment"># 是不能改变的，但是你可以用 cut(1) 取出其中的日期字串并将结果送至命令 “ date -d ”。</span>

<span class="token comment"># 输出的时间包括秒是非常有用的。（ Unix 文件系统储存文件的时间信息精确到秒，</span>
       <span class="token comment"># 因此这个选项已经给出了系统所知的全部信息。）例如，当你有一个         Makefile          文件</span>
       <span class="token comment"># 不能恰当地生成文件时，这个选项会提供帮助。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>目录：指定要显示列表的目录，也可以是具体的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>       <span class="token comment"># 仅列出当前目录可见文件</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>    <span class="token comment"># 列出当前目录可见文件详细信息</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-hl</span>   <span class="token comment"># 列出详细信息并以可读大小显示文件大小</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span>   <span class="token comment"># 列出所有文件（包括隐藏）的详细信息</span>
$ <span class="token function">ls</span> --human-readable <span class="token parameter variable">--size</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">-S</span> <span class="token parameter variable">--classify</span> <span class="token comment"># 按文件大小排序</span>
$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> * <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-h</span> <span class="token comment"># 按文件大小排序(同上)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示当前目录下包括影藏文件在内的所有文件列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -a</span>
<span class="token builtin class-name">.</span>   anaconda-ks.cfg  .bash_logout   .bashrc  install.log         .mysql_history  satools  .tcshrc   .vimrc
<span class="token punctuation">..</span>  .bash_history    .bash_profile  .cshrc   install.log.syslog  .rnd            .ssh     .viminfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出长格式列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -1</span>

anaconda-ks.cfg
install.log
install.log.syslog
satools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示文件的inode信息</p><p>索引节点（index inode简称为“inode”）是Linux中一个特殊的概念，具有相同的索引节点号的两个文本本质上是同一个文件（除文件名不同外）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -i -l anaconda-ks.cfg install.log</span>
<span class="token number">2345481</span> -rw------- <span class="token number">1</span> root root   <span class="token number">859</span> Jun <span class="token number">11</span> <span class="token number">22</span>:49 anaconda-ks.cfg
<span class="token number">2345474</span> -rw-r--r-- <span class="token number">1</span> root root <span class="token number">13837</span> Jun <span class="token number">11</span> <span class="token number">22</span>:49 install.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>水平输出文件列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -m</span>

bin, boot, data, dev, etc, home, lib, lost+found, media, misc, mnt, opt, proc, root, sbin, selinux, srv, sys, tmp, usr, var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改最后一次编辑的文件</p><p>最近修改的文件显示在最上面。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -t</span>

tmp  root  etc  dev  lib  boot  sys  proc  data  home  bin  sbin  usr  var  lost+found  media  mnt  opt  selinux  srv  misc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示递归文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -R</span>
.:
anaconda-ks.cfg  install.log  install.log.syslog  satools

./satools:
black.txt  freemem.sh  iptables.sh  lnmp.sh  mysql  php502_check.sh  ssh_safe.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印文件的UID和GID</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -n</span>

total <span class="token number">254</span>
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Jun <span class="token number">12</span> 04:03 bin
drwxr-xr-x   <span class="token number">4</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">1024</span> Jun <span class="token number">15</span> <span class="token number">14</span>:45 boot
drwxr-xr-x   <span class="token number">6</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 data
drwxr-xr-x  <span class="token number">10</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">3520</span> Sep <span class="token number">26</span> <span class="token number">15</span>:38 dev
drwxr-xr-x  <span class="token number">75</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Oct <span class="token number">16</span> 04:02 etc
drwxr-xr-x   <span class="token number">4</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 home
drwxr-xr-x  <span class="token number">14</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">12288</span> Jun <span class="token number">16</span> 04:02 lib
drwx------   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">16384</span> Jun <span class="token number">11</span> <span class="token number">22</span>:46 lost+found
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> media
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Nov  <span class="token number">8</span>  <span class="token number">2010</span> misc
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> mnt
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> opt
dr-xr-xr-x <span class="token number">232</span> <span class="token number">0</span> <span class="token number">0</span>     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 proc
drwxr-x---   <span class="token number">4</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Oct <span class="token number">15</span> <span class="token number">14</span>:43 root
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">12288</span> Jun <span class="token number">12</span> 04:03 sbin
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> selinux
drwxr-xr-x   <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> srv
drwxr-xr-x  <span class="token number">11</span> <span class="token number">0</span> <span class="token number">0</span>     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 sys
drwxrwxrwt   <span class="token number">3</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">98304</span> Oct <span class="token number">16</span> 08:45 tmp
drwxr-xr-x  <span class="token number">13</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 usr
drwxr-xr-x  <span class="token number">19</span> <span class="token number">0</span> <span class="token number">0</span>  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列出文件和文件夹的详细信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -l</span>

total <span class="token number">254</span>
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> 04:03 bin
drwxr-xr-x   <span class="token number">4</span> root root  <span class="token number">1024</span> Jun <span class="token number">15</span> <span class="token number">14</span>:45 boot
drwxr-xr-x   <span class="token number">6</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 data
drwxr-xr-x  <span class="token number">10</span> root root  <span class="token number">3520</span> Sep <span class="token number">26</span> <span class="token number">15</span>:38 dev
drwxr-xr-x  <span class="token number">75</span> root root  <span class="token number">4096</span> Oct <span class="token number">16</span> 04:02 etc
drwxr-xr-x   <span class="token number">4</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 home
drwxr-xr-x  <span class="token number">14</span> root root <span class="token number">12288</span> Jun <span class="token number">16</span> 04:02 lib
drwx------   <span class="token number">2</span> root root <span class="token number">16384</span> Jun <span class="token number">11</span> <span class="token number">22</span>:46 lost+found
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> media
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> Nov  <span class="token number">8</span>  <span class="token number">2010</span> misc
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> mnt
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> opt
dr-xr-xr-x <span class="token number">232</span> root root     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 proc
drwxr-x---   <span class="token number">4</span> root root  <span class="token number">4096</span> Oct <span class="token number">15</span> <span class="token number">14</span>:43 root
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">12288</span> Jun <span class="token number">12</span> 04:03 sbin
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> selinux
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> srv
drwxr-xr-x  <span class="token number">11</span> root root     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 sys
drwxrwxrwt   <span class="token number">3</span> root root <span class="token number">98304</span> Oct <span class="token number">16</span> 08:48 tmp
drwxr-xr-x  <span class="token number">13</span> root root  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 usr
drwxr-xr-x  <span class="token number">19</span> root root  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列出可读文件和文件夹详细信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -lh</span>

total 254K
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4</span>.0K Jun <span class="token number">12</span> 04:03 bin
drwxr-xr-x   <span class="token number">4</span> root root <span class="token number">1</span>.0K Jun <span class="token number">15</span> <span class="token number">14</span>:45 boot
drwxr-xr-x   <span class="token number">6</span> root root <span class="token number">4</span>.0K Jun <span class="token number">12</span> <span class="token number">10</span>:26 data
drwxr-xr-x  <span class="token number">10</span> root root <span class="token number">3</span>.5K Sep <span class="token number">26</span> <span class="token number">15</span>:38 dev
drwxr-xr-x  <span class="token number">75</span> root root <span class="token number">4</span>.0K Oct <span class="token number">16</span> 04:02 etc
drwxr-xr-x   <span class="token number">4</span> root root <span class="token number">4</span>.0K Jun <span class="token number">12</span> <span class="token number">10</span>:26 home
drwxr-xr-x  <span class="token number">14</span> root root  12K Jun <span class="token number">16</span> 04:02 lib
drwx------   <span class="token number">2</span> root root  16K Jun <span class="token number">11</span> <span class="token number">22</span>:46 lost+found
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4</span>.0K May <span class="token number">11</span>  <span class="token number">2011</span> media
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4</span>.0K Nov  <span class="token number">8</span>  <span class="token number">2010</span> misc
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4</span>.0K May <span class="token number">11</span>  <span class="token number">2011</span> mnt
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4</span>.0K May <span class="token number">11</span>  <span class="token number">2011</span> opt
dr-xr-xr-x <span class="token number">235</span> root root    <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 proc
drwxr-x---   <span class="token number">4</span> root root <span class="token number">4</span>.0K Oct <span class="token number">15</span> <span class="token number">14</span>:43 root
drwxr-xr-x   <span class="token number">2</span> root root  12K Jun <span class="token number">12</span> 04:03 sbin
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4</span>.0K May <span class="token number">11</span>  <span class="token number">2011</span> selinux
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4</span>.0K May <span class="token number">11</span>  <span class="token number">2011</span> srv
drwxr-xr-x  <span class="token number">11</span> root root    <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 sys
drwxrwxrwt   <span class="token number">3</span> root root  96K Oct <span class="token number">16</span> 08:49 tmp
drwxr-xr-x  <span class="token number">13</span> root root <span class="token number">4</span>.0K Jun <span class="token number">11</span> <span class="token number">23</span>:38 usr
drwxr-xr-x  <span class="token number">19</span> root root <span class="token number">4</span>.0K Jun <span class="token number">11</span> <span class="token number">23</span>:38 var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示文件夹信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -ld /etc/</span>

drwxr-xr-x <span class="token number">75</span> root root <span class="token number">4096</span> Oct <span class="token number">16</span> 04:02 /etc/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按时间列出文件和文件夹详细信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -lt</span>

total <span class="token number">254</span>
drwxrwxrwt   <span class="token number">3</span> root root <span class="token number">98304</span> Oct <span class="token number">16</span> 08:53 tmp
drwxr-xr-x  <span class="token number">75</span> root root  <span class="token number">4096</span> Oct <span class="token number">16</span> 04:02 etc
drwxr-x---   <span class="token number">4</span> root root  <span class="token number">4096</span> Oct <span class="token number">15</span> <span class="token number">14</span>:43 root
drwxr-xr-x  <span class="token number">10</span> root root  <span class="token number">3520</span> Sep <span class="token number">26</span> <span class="token number">15</span>:38 dev
drwxr-xr-x  <span class="token number">14</span> root root <span class="token number">12288</span> Jun <span class="token number">16</span> 04:02 lib
drwxr-xr-x   <span class="token number">4</span> root root  <span class="token number">1024</span> Jun <span class="token number">15</span> <span class="token number">14</span>:45 boot
drwxr-xr-x  <span class="token number">11</span> root root     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 sys
dr-xr-xr-x <span class="token number">232</span> root root     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 proc
drwxr-xr-x   <span class="token number">6</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 data
drwxr-xr-x   <span class="token number">4</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 home
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> 04:03 bin
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">12288</span> Jun <span class="token number">12</span> 04:03 sbin
drwxr-xr-x  <span class="token number">13</span> root root  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 usr
drwxr-xr-x  <span class="token number">19</span> root root  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 var
drwx------   <span class="token number">2</span> root root <span class="token number">16384</span> Jun <span class="token number">11</span> <span class="token number">22</span>:46 lost+found
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> media
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> mnt
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> opt
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> selinux
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> srv
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> Nov  <span class="token number">8</span>  <span class="token number">2010</span> misc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按修改时间列出文件和文件夹详细信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -ltr</span>

total <span class="token number">254</span>
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> Nov  <span class="token number">8</span>  <span class="token number">2010</span> misc
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> srv
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> selinux
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> opt
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> mnt
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> May <span class="token number">11</span>  <span class="token number">2011</span> media
drwx------   <span class="token number">2</span> root root <span class="token number">16384</span> Jun <span class="token number">11</span> <span class="token number">22</span>:46 lost+found
drwxr-xr-x  <span class="token number">19</span> root root  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 var
drwxr-xr-x  <span class="token number">13</span> root root  <span class="token number">4096</span> Jun <span class="token number">11</span> <span class="token number">23</span>:38 usr
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">12288</span> Jun <span class="token number">12</span> 04:03 sbin
drwxr-xr-x   <span class="token number">2</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> 04:03 bin
drwxr-xr-x   <span class="token number">4</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 home
drwxr-xr-x   <span class="token number">6</span> root root  <span class="token number">4096</span> Jun <span class="token number">12</span> <span class="token number">10</span>:26 data
dr-xr-xr-x <span class="token number">232</span> root root     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 proc
drwxr-xr-x  <span class="token number">11</span> root root     <span class="token number">0</span> Jun <span class="token number">15</span> <span class="token number">11</span>:04 sys
drwxr-xr-x   <span class="token number">4</span> root root  <span class="token number">1024</span> Jun <span class="token number">15</span> <span class="token number">14</span>:45 boot
drwxr-xr-x  <span class="token number">14</span> root root <span class="token number">12288</span> Jun <span class="token number">16</span> 04:02 lib
drwxr-xr-x  <span class="token number">10</span> root root  <span class="token number">3520</span> Sep <span class="token number">26</span> <span class="token number">15</span>:38 dev
drwxr-x---   <span class="token number">4</span> root root  <span class="token number">4096</span> Oct <span class="token number">15</span> <span class="token number">14</span>:43 root
drwxr-xr-x  <span class="token number">75</span> root root  <span class="token number">4096</span> Oct <span class="token number">16</span> 04:02 etc
drwxrwxrwt   <span class="token number">3</span> root root <span class="token number">98304</span> Oct <span class="token number">16</span> 08:54 tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照特殊字符对文件进行分类</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx-1.2.1<span class="token punctuation">]</span><span class="token comment"># ls -F</span>

auto/  CHANGES  CHANGES.ru  conf/  configure*  contrib/  html/  LICENSE  Makefile  man/  objs/  README  src/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列出文件并标记颜色分类</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx-1.2.1<span class="token punctuation">]</span><span class="token comment"># ls --color=auto</span>

auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  Makefile  <span class="token function">man</span>  objs  README  src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h2><h3 id="不同颜色代表的文件类型" tabindex="-1"><a class="header-anchor" href="#不同颜色代表的文件类型" aria-hidden="true">#</a> 不同颜色代表的文件类型</h3><ul><li><code>蓝色</code><!--rehype:style=background: blue;color:white;-->：目录</li><li><code>绿色</code><!--rehype:style=background: green;color:white;-->：可执行文件</li><li><code>白色</code><!--rehype:style=background: #efefef;-->：一般性文件，如文本文件，配置文件等</li><li><code>红色</code><!--rehype:style=background: red;color:white;-->：压缩文件或归档文件</li><li><code>浅蓝色</code><!--rehype:style=background: #c4c3ff;-->：链接文件</li><li>红色闪烁：链接文件存在问题</li><li>黄色：设备文件</li><li>青黄色：管道文件</li></ul>`,45),p=[r];function o(t,c){return s(),a("div",null,p)}const m=n(l,[["render",o],["__file","ls.html.vue"]]);export{m as default};
