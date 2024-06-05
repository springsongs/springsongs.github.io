import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h1><p>将许多文件一起保存至一个单独的磁带或磁盘归档，并能从归档中单独还原所需文件。</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>tar命令</strong> 可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。</p><p>首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。</p><p>为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（gzip bzip2命令）。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token punctuation">[</span>选项<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-A, --catenate, <span class="token parameter variable">--concatenate</span>   追加 <span class="token function">tar</span> 文件至归档
-c, <span class="token parameter variable">--create</span>               创建一个新归档
-d, --diff, <span class="token parameter variable">--compare</span>      找出归档和文件系统的差异
    <span class="token parameter variable">--delete</span>               从归档<span class="token punctuation">(</span>非磁带！<span class="token punctuation">)</span>中删除
-r, <span class="token parameter variable">--append</span>               追加文件至归档结尾
-t, <span class="token parameter variable">--list</span>                 列出归档内容
    --test-label           测试归档卷标并退出
-u, <span class="token parameter variable">--update</span>               仅追加比归档中副本更新的文件
-x, --extract, <span class="token parameter variable">--get</span>       从归档中解出文件

操作修饰符:

      --check-device         当创建增量归档时检查设备号<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
  -g, --listed-incremental<span class="token operator">=</span>FILE   处理新式的 GNU 格式的增量备份
  -G, <span class="token parameter variable">--incremental</span>          处理老式的 GNU 格式的增量备份
      --ignore-failed-read
                             当遇上不可读文件时不要以非零值退出
      <span class="token parameter variable">--level</span><span class="token operator">=</span>NUMBER         所创建的增量列表归档的输出级别
  -n, <span class="token parameter variable">--seek</span>                 归档可检索
      --no-check-device      当创建增量归档时不要检查设备号
      --no-seek              归档不可检索
      --occurrence<span class="token punctuation">[</span><span class="token operator">=</span>NUMBER<span class="token punctuation">]</span>  仅处理归档中每个文件的第 NUMBER
                             个事件；仅当与以下子命令 --delete,
                             --diff, <span class="token parameter variable">--extract</span> 或是 <span class="token parameter variable">--list</span>
                             中的一个联合使用时，此选项才有效。而且不管文件列表是以命令行形式给出或是通过
                             <span class="token parameter variable">-T</span> 选项指定的；NUMBER 值默认为 <span class="token number">1</span>
      --sparse-version<span class="token operator">=</span>MAJOR<span class="token punctuation">[</span>.MINOR<span class="token punctuation">]</span>
                             设置所用的离散格式版本<span class="token punctuation">(</span>隐含
                             --sparse<span class="token punctuation">)</span>
  -S, <span class="token parameter variable">--sparse</span>               高效处理离散文件

 重写控制:

  -k, --keep-old-files       don<span class="token string">&#39;t replace existing files when extracting,
                             treat them as errors
      --keep-directory-symlink   preserve existing symlinks to directories when
                             extracting
      --keep-newer-files
                             不要替换比归档中副本更新的已存在的文件
      --no-overwrite-dir     保留已存在目录的元数据
      --overwrite            解压时重写存在的文件
      --overwrite-dir        解压时重写已存在目录的元数据(默认)

      --recursive-unlink     解压目录之前先清除目录层次
      --remove-files         在添加文件至归档后删除它们
      --skip-old-files       don&#39;</span>t replace existing files when extracting,
                             silently skip over them
  -U, --unlink-first         在解压要重写的文件之前先删除它们
  -W, <span class="token parameter variable">--verify</span>               在写入以后尝试校验归档

 选择输出流:

      --ignore-command-error 忽略子进程的退出代码
      --no-ignore-command-error
                             将子进程的非零退出代码认为发生错误
  -O, --to-stdout            解压文件至标准输出
      --to-command<span class="token operator">=</span>COMMAND
                             将解压的文件通过管道传送至另一个程序

 操作文件属性:

      --atime-preserve<span class="token punctuation">[</span><span class="token operator">=</span>METHOD<span class="token punctuation">]</span>
                             在输出的文件上保留访问时间，要么通过在读取<span class="token punctuation">(</span>默认
                             <span class="token assign-left variable">METHOD</span><span class="token operator">=</span>‘replace’<span class="token punctuation">)</span>后还原时间，要不就不要在第一次<span class="token punctuation">(</span>METHOD<span class="token operator">=</span>‘system’<span class="token punctuation">)</span>设置时间
      --delay-directory-restore
                             直到解压结束才设置修改时间和所解目录的权限
      <span class="token parameter variable">--group</span><span class="token operator">=</span>名称         强制将 NAME
                             作为所添加的文件的组所有者
      <span class="token parameter variable">--mode</span><span class="token operator">=</span>CHANGES         强制将所添加的文件<span class="token punctuation">(</span>符号<span class="token punctuation">)</span>更改为权限
                             CHANGES
      <span class="token parameter variable">--mtime</span><span class="token operator">=</span>DATE-OR-FILE   从 DATE-OR-FILE 中为添加的文件设置
                             mtime
  -m, <span class="token parameter variable">--touch</span>                不要解压文件的修改时间
      --no-delay-directory-restore
                             取消 --delay-directory-restore 选项的效果
      --no-same-owner
                             将文件解压为您所有<span class="token punctuation">(</span>普通用户默认此项<span class="token punctuation">)</span>
      --no-same-permissions
                             从归档中解压权限时使用用户的掩码位<span class="token punctuation">(</span>默认为普通用户服务<span class="token punctuation">)</span>
      --numeric-owner        总是以数字代表用户/组的名称
      <span class="token parameter variable">--owner</span><span class="token operator">=</span>名称         强制将 NAME
                             作为所添加的文件的所有者
  -p, --preserve-permissions, --same-permissions
                             解压文件权限信息<span class="token punctuation">(</span>默认只为超级用户服务<span class="token punctuation">)</span>
      <span class="token parameter variable">--preserve</span>             与 <span class="token parameter variable">-p</span> 和 <span class="token parameter variable">-s</span> 一样
      --same-owner
                             尝试解压时保持所有者关系一致<span class="token punctuation">(</span>超级用户默认此项<span class="token punctuation">)</span>
  -s, --preserve-order, --same-order
                             member arguments are listed <span class="token keyword">in</span> the same order as
                             the files <span class="token keyword">in</span> the archive

 Handling of extended <span class="token function">file</span> attributes:

      <span class="token parameter variable">--acls</span>                 Enable the POSIX ACLs support
      --no-acls              Disable the POSIX ACLs support
      --no-selinux           Disable the SELinux context support
      --no-xattrs            Disable extended attributes support
      <span class="token parameter variable">--selinux</span>              Enable the SELinux context support
      <span class="token parameter variable">--xattrs</span>               Enable extended attributes support
      --xattrs-exclude<span class="token operator">=</span>MASK  specify the exclude pattern <span class="token keyword">for</span> xattr keys
      --xattrs-include<span class="token operator">=</span>MASK  specify the include pattern <span class="token keyword">for</span> xattr keys

 设备选择和切换:

  -f, <span class="token parameter variable">--file</span><span class="token operator">=</span>ARCHIVE         使用归档文件或 ARCHIVE 设备
      --force-local
                             即使归档文件存在副本还是把它认为是本地归档
  -F, --info-script<span class="token operator">=</span>名称, --new-volume-script<span class="token operator">=</span>名称
                             在每卷磁带最后运行脚本<span class="token punctuation">(</span>隐含 -M<span class="token punctuation">)</span>
  -L, --tape-length<span class="token operator">=</span>NUMBER   写入 NUMBER × <span class="token number">1024</span> 字节后更换磁带
  -M, --multi-volume         创建/列出/解压多卷归档文件
      --rmt-command<span class="token operator">=</span>COMMAND  使用指定的 rmt COMMAND 代替 rmt
      --rsh-command<span class="token operator">=</span>COMMAND  使用远程 COMMAND 代替 rsh
      --volno-file<span class="token operator">=</span>FILE      使用/更新 FILE 中的卷数

 设备分块:

  -b, --blocking-factor<span class="token operator">=</span>BLOCKS   每个记录 BLOCKS x <span class="token number">512</span> 字节
  -B, --read-full-records    读取时重新分块<span class="token punctuation">(</span>只对 <span class="token number">4</span>.2BSD 管道有效<span class="token punctuation">)</span>
  -i, --ignore-zeros         忽略归档中的零字节块<span class="token punctuation">(</span>即文件结尾<span class="token punctuation">)</span>
      --record-size<span class="token operator">=</span>NUMBER   每个记录的字节数 NUMBER，乘以 <span class="token number">512</span>

 选择归档格式:

  -H, <span class="token parameter variable">--format</span><span class="token operator">=</span>FORMAT        创建指定格式的归档

 FORMAT 是以下格式中的一种:

    gnu                      GNU <span class="token function">tar</span> <span class="token number">1.13</span>.x 格式
    oldgnu                   GNU 格式 as per <span class="token function">tar</span> <span class="token operator">&lt;=</span> <span class="token number">1.12</span>
    pax                      POSIX <span class="token number">1003.1</span>-2001 <span class="token punctuation">(</span>pax<span class="token punctuation">)</span> 格式
    posix                    等同于 pax
    ustar                    POSIX <span class="token number">1003.1</span>-1988 <span class="token punctuation">(</span>ustar<span class="token punctuation">)</span> 格式
    v7                       old V7 <span class="token function">tar</span> 格式

      --old-archive, <span class="token parameter variable">--portability</span>
                             等同于 <span class="token parameter variable">--format</span><span class="token operator">=</span>v7
      --pax-option<span class="token operator">=</span>关键字<span class="token punctuation">[</span><span class="token punctuation">[</span>:<span class="token punctuation">]</span><span class="token operator">=</span>值<span class="token punctuation">]</span><span class="token punctuation">[</span>,关键字<span class="token punctuation">[</span><span class="token punctuation">[</span>:<span class="token punctuation">]</span><span class="token operator">=</span>值<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">..</span>.
                             控制 pax 关键字
      <span class="token parameter variable">--posix</span>                等同于 <span class="token parameter variable">--format</span><span class="token operator">=</span>posix
  -V, <span class="token parameter variable">--label</span><span class="token operator">=</span>TEXT           创建带有卷名 TEXT
                             的归档；在列出/解压时，使用 TEXT
                             作为卷名的模式串

 压缩选项:

  -a, --auto-compress        使用归档后缀名来决定压缩程序
  -I, --use-compress-program<span class="token operator">=</span>PROG
                             通过 PROG 过滤<span class="token punctuation">(</span>必须是能接受 <span class="token parameter variable">-d</span>
                             选项的程序<span class="token punctuation">)</span>
  -j, <span class="token parameter variable">--bzip2</span>                通过 <span class="token function">bzip2</span> 过滤归档
  -J, <span class="token parameter variable">--xz</span>                   通过 xz 过滤归档
      <span class="token parameter variable">--lzip</span>                 通过 lzip 过滤归档
      <span class="token parameter variable">--lzma</span>                 通过 lzma 过滤归档
      <span class="token parameter variable">--lzop</span>
      --no-auto-compress     不使用归档后缀名来决定压缩程序
  -z, --gzip, --gunzip, <span class="token parameter variable">--ungzip</span>   通过 <span class="token function">gzip</span> 过滤归档
  -Z, --compress, <span class="token parameter variable">--uncompress</span>   通过 compress 过滤归档

 本地文件选择:

      --add-file<span class="token operator">=</span>FILE        添加指定的 FILE 至归档<span class="token punctuation">(</span>如果名字以 -
                             开始会很有用的<span class="token punctuation">)</span>
      --backup<span class="token punctuation">[</span><span class="token operator">=</span>CONTROL<span class="token punctuation">]</span>     在删除前备份，选择 CONTROL 版本
  -C, <span class="token parameter variable">--directory</span><span class="token operator">=</span>DIR        改变至目录 DIR
      <span class="token parameter variable">--exclude</span><span class="token operator">=</span>PATTERN      排除以 PATTERN 指定的文件
      --exclude-backups      排除备份和锁文件
      --exclude-caches       除标识文件本身外，排除包含
                             CACHEDIR.TAG 的目录中的内容
      --exclude-caches-all   排除包含 CACHEDIR.TAG 的目录
      --exclude-caches-under 排除包含 CACHEDIR.TAG 的目录中所有内容

      --exclude-tag<span class="token operator">=</span>FILE     除 FILE 自身外，排除包含 FILE
                             的目录中的内容
      --exclude-tag-all<span class="token operator">=</span>FILE 排除包含 FILE 的目录
      --exclude-tag-under<span class="token operator">=</span>FILE   排除包含 FILE 的目录中的所有内容
      --exclude-vcs          排除版本控制系统目录
  -h, <span class="token parameter variable">--dereference</span>
                             跟踪符号链接；将它们所指向的文件归档并输出
      --hard-dereference
                             跟踪硬链接；将它们所指向的文件归档并输出
  -K, --starting-file<span class="token operator">=</span>MEMBER-NAME
                             begin at member MEMBER-NAME when reading the
                             archive
      --newer-mtime<span class="token operator">=</span>DATE     当只有数据改变时比较数据和时间
      --no-null              禁用上一次的效果 <span class="token parameter variable">--null</span> 选项
      --no-recursion         避免目录中的自动降级
      --no-unquote           不以 <span class="token parameter variable">-T</span> 读取的文件名作为引用结束
      <span class="token parameter variable">--null</span>                 <span class="token parameter variable">-T</span> 读取以空终止的名字，-C 禁用
  -N, <span class="token parameter variable">--newer</span><span class="token operator">=</span>DATE-OR-FILE, --after-date<span class="token operator">=</span>DATE-OR-FILE
                             只保存比 DATE-OR-FILE 更新的文件
      --one-file-system      创建归档时保存在本地文件系统中
  -P, --absolute-names       不要从文件名中清除引导符‘/’
      <span class="token parameter variable">--recursion</span>            目录递归<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
      <span class="token parameter variable">--suffix</span><span class="token operator">=</span>STRING        在删除前备份，除非被环境变量
                             SIMPLE_BACKUP_SUFFIX
                             覆盖，否则覆盖常用后缀<span class="token punctuation">(</span>‘’<span class="token punctuation">)</span>
  -T, --files-from<span class="token operator">=</span>FILE      从 FILE
                             中获取文件名来解压或创建文件
      <span class="token parameter variable">--unquote</span>              以 <span class="token parameter variable">-T</span>
                             读取的文件名作为引用结束<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
  -X, --exclude-from<span class="token operator">=</span>FILE    排除 FILE 中列出的模式串

 文件名变换:

      --strip-components<span class="token operator">=</span>NUMBER   解压时从文件名中清除 NUMBER
                             个引导部分
      <span class="token parameter variable">--transform</span><span class="token operator">=</span>EXPRESSION, <span class="token parameter variable">--xform</span><span class="token operator">=</span>EXPRESSION
                             使用 <span class="token function">sed</span> 代替 EXPRESSION
                             来进行文件名变换

 文件名匹配选项<span class="token punctuation">(</span>同时影响排除和包括模式串<span class="token punctuation">)</span>:

      <span class="token parameter variable">--anchored</span>             模式串匹配文件名头部
      --ignore-case          忽略大小写
      --no-anchored          模式串匹配任意‘/’后字符<span class="token punctuation">(</span>默认对
                             exclusion 有效<span class="token punctuation">)</span>
      --no-ignore-case       匹配大小写<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
      --no-wildcards         逐字匹配字符串
      --no-wildcards-match-slash   通配符不匹配‘/’
      <span class="token parameter variable">--wildcards</span>            use wildcards <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
      --wildcards-match-slash
                             通配符匹配‘/’<span class="token punctuation">(</span>默认对排除操作有效<span class="token punctuation">)</span>

 提示性输出:

      --checkpoint<span class="token punctuation">[</span><span class="token operator">=</span>NUMBER<span class="token punctuation">]</span>  每隔 NUMBER
                             个记录显示进度信息<span class="token punctuation">(</span>默认为 <span class="token number">10</span> 个<span class="token punctuation">)</span>
      --checkpoint-action<span class="token operator">=</span>ACTION   在每个检查点上执行 ACTION
      --full-time            print <span class="token function">file</span> <span class="token function">time</span> to its full resolution
      --index-file<span class="token operator">=</span>FILE      将详细输出发送至 FILE
  -l, --check-links
                             只要不是所有链接都被输出就打印信息
      --no-quote-chars<span class="token operator">=</span>STRING   禁用来自 STRING 的字符引用
      --quote-chars<span class="token operator">=</span>STRING   来自 STRING 的额外的引用字符
      --quoting-style<span class="token operator">=</span>STYLE  设置名称引用风格；有效的 STYLE
                             值请参阅以下说明
  -R, --block-number         每个信息都显示归档内的块数
      --show-defaults        显示 <span class="token function">tar</span> 默认选项
      --show-omitted-dirs
                             列表或解压时，列出每个不匹配查找标准的目录
      --show-transformed-names, --show-stored-names
                             显示变换后的文件名或归档名
      --totals<span class="token punctuation">[</span><span class="token operator">=</span>SIGNAL<span class="token punctuation">]</span>      处理归档后打印出总字节数；当此
                             SIGNAL 被触发时带参数 -
                             打印总字节数；允许的信号为:
                             SIGHUP，SIGQUIT，SIGINT，SIGUSR1 和
                             SIGUSR2；同时也接受不带 SIG
                             前缀的信号名称
      <span class="token parameter variable">--utc</span>                  以 UTC 格式打印文件修改时间
  -v, <span class="token parameter variable">--verbose</span>              详细地列出处理的文件
      <span class="token parameter variable">--warning</span><span class="token operator">=</span>KEYWORD      警告控制:
  -w, --interactive, <span class="token parameter variable">--confirmation</span>
                             每次操作都要求确认

 兼容性选项:

  <span class="token parameter variable">-o</span>                         创建归档时，相当于
                             --old-archive；展开归档时，相当于
                             --no-same-owner

 其它选项:

  -?, <span class="token parameter variable">--help</span>                 显示此帮助列表
      <span class="token parameter variable">--restrict</span>             禁用某些潜在的有危险的选项
      <span class="token parameter variable">--usage</span>                显示简短的用法说明
      <span class="token parameter variable">--version</span>              打印程序版本

长选项和相应短选项具有相同的强制参数或可选参数。

除非以 <span class="token parameter variable">--suffix</span> 或 SIMPLE_BACKUP_SUFFIX
设置备份后缀，否则备份后缀就是“~”。
可以用 <span class="token parameter variable">--backup</span> 或 VERSION_CONTROL 设置版本控制，可能的值为：

  none, off	   从不做备份
  t, numbered     进行编号备份
  nil, existing
如果编号备份存在则进行编号备份，否则进行简单备份
  never, simple   总是使用简单备份

--quoting-style 选项的有效参数为:

  literal
  shell
  shell-always
  c
  c-maybe
  escape
  locale
  clocale

此 <span class="token function">tar</span> 默认为:
<span class="token parameter variable">--format</span><span class="token operator">=</span>gnu -f- <span class="token parameter variable">-b20</span> --quoting-style<span class="token operator">=</span>escape --rmt-command<span class="token operator">=</span>/etc/rmt
--rsh-command<span class="token operator">=</span>/usr/bin/ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件或目录：指定要打包的文件或目录列表。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>- z：有gzip属性的
- j：有bz2属性的
- Z：有compress属性的
- v：显示所有过程
- O：将文件解开到标准输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cf</span> archive.tar foo bar  <span class="token comment"># 从文件 foo 和 bar 创建归档文件 archive.tar。</span>
<span class="token function">tar</span> <span class="token parameter variable">-tvf</span> archive.tar         <span class="token comment"># 详细列举归档文件 archive.tar 中的所有文件。</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> archive.tar          <span class="token comment"># 展开归档文件 archive.tar 中的所有文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的参数-f是必须的</p><p>-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cf</span> all.tar *.jpg
<span class="token comment"># 这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。</span>

<span class="token function">tar</span> <span class="token parameter variable">-rf</span> all.tar *.gif
<span class="token comment"># 这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。</span>

<span class="token function">tar</span> <span class="token parameter variable">-uf</span> all.tar logo.gif
<span class="token comment"># 这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。</span>

<span class="token function">tar</span> <span class="token parameter variable">-tf</span> all.tar
<span class="token comment"># 这条命令是列出all.tar包中所有文件，-t是列出文件的意思</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> archive.tar foo bar  <span class="token comment"># 从文件foo和bar创建archive.tar。</span>
<span class="token function">tar</span> <span class="token parameter variable">-tvf</span> archive.tar         <span class="token comment"># 详细列出archive.tar中的所有文件。</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> archive.tar          <span class="token comment"># 从archive.tar提取所有文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zip格式" tabindex="-1"><a class="header-anchor" href="#zip格式" aria-hidden="true">#</a> zip格式</h4><p>压缩： zip -r [目标文件名].zip [原文件/目录名]<br> 解压： unzip [原文件名].zip<br> 注：-r参数代表递归</p><h4 id="tar格式-该格式仅仅打包-不压缩" tabindex="-1"><a class="header-anchor" href="#tar格式-该格式仅仅打包-不压缩" aria-hidden="true">#</a> tar格式（该格式仅仅打包，不压缩）</h4><p>打包：tar -cvf [目标文件名].tar [原文件名/目录名]<br> 解包：tar -xvf [原文件名].tar<br> 注：c参数代表create（创建），x参数代表extract（解包），v参数代表verbose（详细信息），f参数代表filename（文件名），所以f后必须接文件名。</p><h4 id="tar-gz格式" tabindex="-1"><a class="header-anchor" href="#tar-gz格式" aria-hidden="true">#</a> tar.gz格式</h4><p>方式一：利用前面已经打包好的tar文件，直接用压缩命令。</p><p>压缩：gzip [原文件名].tar<br> 解压：gunzip [原文件名].tar.gz</p><p>方式二：一次性打包并压缩、解压并解包</p><p>打包并压缩： tar -zcvf [目标文件名].tar.gz [原文件名/目录名]<br> 解压并解包： tar -zxvf [原文件名].tar.gz<br> 注：z代表用gzip算法来压缩/解压。</p><h4 id="tar-bz2格式" tabindex="-1"><a class="header-anchor" href="#tar-bz2格式" aria-hidden="true">#</a> tar.bz2格式</h4><p>方式一：利用已经打包好的tar文件，直接执行压缩命令：</p><p>压缩：bzip2 [原文件名].tar<br> 解压：bunzip2 [原文件名].tar.bz2<br> 方式二：一次性打包并压缩、解压并解包</p><p>打包并压缩： tar -jcvf [目标文件名].tar.bz2 [原文件名/目录名]<br> 解压并解包： tar -jxvf [原文件名].tar.bz2<br> 注：小写j代表用bzip2算法来压缩/解压。</p><h4 id="tar-xz格式" tabindex="-1"><a class="header-anchor" href="#tar-xz格式" aria-hidden="true">#</a> tar.xz格式</h4><p>方式一：利用已经打包好的tar文件，直接用压缩命令：</p><p>压缩：xz [原文件名].tar<br> 解压：unxz [原文件名].tar.xz<br> 方式二：一次性打包并压缩、解压并解包</p><p>打包并压缩： tar -Jcvf [目标文件名].tar.xz [原文件名/目录名]<br> 解压并解包： tar -Jxvf [原文件名].tar.xz<br> 注：大写J代表用xz算法来压缩/解压。</p><h4 id="tar-z格式-已过时" tabindex="-1"><a class="header-anchor" href="#tar-z格式-已过时" aria-hidden="true">#</a> tar.Z格式（已过时）</h4><p>方式一：利用已经打包好的tar文件，直接用压缩命令：</p><p>压缩：compress [原文件名].tar<br> 解压：uncompress [原文件名].tar.Z<br> 方式二：一次性打包并压缩、解压并解包</p><p>打包并压缩： tar -Zcvf [目标文件名].tar.Z [原文件名/目录名]<br> 解压并解包： tar -Zxvf [原文件名].tar.Z<br> 注：大写Z代表用ncompress算法来压缩/解压。另，ncompress是早期Unix系统的压缩格式，但由于ncompress的压缩率太低，现已过时。</p><h4 id="jar格式" tabindex="-1"><a class="header-anchor" href="#jar格式" aria-hidden="true">#</a> jar格式</h4><p>压缩：jar -cvf [目标文件名].jar [原文件名/目录名]<br> 解压：jar -xvf [原文件名].jar</p><p>注：如果是打包的是Java类库，并且该类库中存在主类，那么需要写一个META-INF/MANIFEST.MF配置文件，内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Manifest-Version: <span class="token number">1.0</span>
Created-By: <span class="token number">1.6</span>.0_27 <span class="token punctuation">(</span>Sun Microsystems Inc.<span class="token punctuation">)</span>
Main-class: the_name_of_the_main_class_should_be_put_here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后用如下命令打包：</p><p>jar -cvfm [目标文件名].jar META-INF/MANIFEST.MF [原文件名/目录名]<br> 这样以后就能用“java -jar [文件名].jar”命令直接运行主类中的public static void main方法了。</p><h4 id="_7z格式" tabindex="-1"><a class="header-anchor" href="#_7z格式" aria-hidden="true">#</a> 7z格式</h4><p>压缩：7z a [目标文件名].7z [原文件名/目录名]<br> 解压：7z x [原文件名].7z<br> 注：这个7z解压命令支持rar格式，即：</p><p>7z x [原文件名].rar</p><h4 id="其它例子" tabindex="-1"><a class="header-anchor" href="#其它例子" aria-hidden="true">#</a> 其它例子</h4><p><strong>将文件全部打包成tar包</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> log.tar log2012.log    仅打包，不压缩！
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> log.tar.gz log2012.log   打包后，以 <span class="token function">gzip</span> 压缩
<span class="token function">tar</span> <span class="token parameter variable">-jcvf</span> log.tar.bz2 log2012.log  打包后，以 <span class="token function">bzip2</span> 压缩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在选项<code>f</code>之后的文件档名是自己取的，我们习惯上都用 .tar 来作为辨识。 如果加<code>z</code>选项，则以.tar.gz或.tgz来代表gzip压缩过的tar包；如果加<code>j</code>选项，则以.tar.bz2来作为tar包名。</p><p><strong>解压目录</strong></p><p>去掉第一层目录结构，要出除第二层，--strip-components 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> portal-web-v2.0.0.tar --strip-components <span class="token number">1</span>  <span class="token parameter variable">-C</span> 指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查阅上述tar包内有哪些文件</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-ztvf</span> log.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于我们使用 gzip 压缩的log.tar.gz，所以要查阅log.tar.gz包内的文件时，就得要加上<code>z</code>这个选项了。</p><p><strong>将tar包解压缩</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /opt/soft/test/log.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在预设的情况下，我们可以将压缩档在任何地方解开的</p><p><strong>只将tar内的部分文件解压出来</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /opt/soft/test/log30.tar.gz log2013.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我可以透过<code>tar -ztvf</code>来查阅 tar 包内的文件名称，如果单只要一个文件，就可以透过这个方式来解压部分文件！</p><p><strong>文件备份下来，并且保存其权限</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zcvpf</span> log31.tar.gz log2014.log log2015.log log2016.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个<code>-p</code>的属性是很重要的，尤其是当您要保留原本文件的属性时。</p><p><strong>在文件夹当中，比某个日期新的文件才备份</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-N</span> <span class="token string">&quot;2012/11/13&quot;</span> <span class="token parameter variable">-zcvf</span> log17.tar.gz <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>备份文件夹内容是排除部分文件：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">--exclude</span> scf/service <span class="token parameter variable">-zcvf</span> scf.tar.gz scf/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>打包文件之后删除源文件：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> test.tar <span class="token builtin class-name">test</span> --remove-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>其实最简单的使用 tar 就只要记忆底下的方式即可：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>压　缩：tar <span class="token parameter variable">-jcv</span> <span class="token parameter variable">-f</span> filename.tar.bz2 要被压缩的文件或目录名称
查　询：tar <span class="token parameter variable">-jtv</span> <span class="token parameter variable">-f</span> filename.tar.bz2
解压缩：tar <span class="token parameter variable">-jxv</span> <span class="token parameter variable">-f</span> filename.tar.bz2 <span class="token parameter variable">-C</span> 欲解压缩的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),r=[l];function t(p,c){return a(),s("div",null,r)}const v=n(i,[["render",t],["__file","tar.html.vue"]]);export{v as default};
