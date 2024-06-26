import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const d={},l=e(`<h1 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h1><p>显示磁盘的相关信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>df命令</strong> 用于显示磁盘分区上的可使用的磁盘空间。默认显示单位为KB。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>df<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a或--all：包含全部的文件系统；
--block-size<span class="token operator">=</span><span class="token operator">&lt;</span>区块大小<span class="token operator">&gt;</span>：以指定的区块大小来显示区块数目；
-h或--human-readable：以可读性较高的方式来显示信息；
-H或--si：与-h参数相同，但在计算时是以1000 Bytes为换算单位而非1024 Bytes；
-i或--inodes：显示inode的信息；
-k或--kilobytes：指定区块大小为1024字节；
-l或--local：仅显示本地端的文件系统；
-m或--megabytes：指定区块大小为1048576字节；
--no-sync：在取得磁盘使用信息前，不要执行sync指令，此为预设值；
-P或--portability：使用POSIX的输出格式；
--sync：在取得磁盘使用信息前，先执行sync指令；
-t<span class="token operator">&lt;</span>文件系统类型<span class="token operator">&gt;</span>或--type<span class="token operator">=</span><span class="token operator">&lt;</span>文件系统类型<span class="token operator">&gt;</span>：仅显示指定文件系统类型的磁盘信息；
-T或--print-type：显示文件系统的类型；
-x<span class="token operator">&lt;</span>文件系统类型<span class="token operator">&gt;</span>或--exclude-type<span class="token operator">=</span><span class="token operator">&lt;</span>文件系统类型<span class="token operator">&gt;</span>：不要显示指定文件系统类型的磁盘信息；
--help：显示帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定文件系统上的文件。</p><h3 id="大小格式" tabindex="-1"><a class="header-anchor" href="#大小格式" aria-hidden="true">#</a> 大小格式</h3><p>显示值以 <code>--block-size</code> 和 <code>DF_BLOCK_SIZE</code>，<code>BLOCK_SIZE</code> 和 <code>BLOCKSIZE</code> 环境变量中的第一个可用 <code>SIZE</code> 为单位。 否则，单位默认为 <code>1024</code> 个字节（如果设置 <code>POSIXLY_CORRECT</code>，则为<code>512</code>）。</p><p>SIZE是一个整数和可选单位（例如：10M是10 * 1024 * 1024）。 单位是K，M，G，T，P，E，Z，Y（1024的幂）或KB，MB，...（1000的幂）。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>查看系统磁盘设备，默认是KB为单位：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@LinServ-1 ~<span class="token punctuation">]</span><span class="token comment"># df</span>
文件系统               1K-块        已用     可用 已用% 挂载点
/dev/sda2            <span class="token number">146294492</span>  <span class="token number">28244432</span> <span class="token number">110498708</span>  <span class="token number">21</span>% /
/dev/sda1              <span class="token number">1019208</span>     <span class="token number">62360</span>    <span class="token number">904240</span>   <span class="token number">7</span>% /boot
tmpfs                  <span class="token number">1032204</span>         <span class="token number">0</span>   <span class="token number">1032204</span>   <span class="token number">0</span>% /dev/shm
/dev/sdb1            <span class="token number">2884284108</span> <span class="token number">218826068</span> <span class="token number">2518944764</span>   <span class="token number">8</span>% /data1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>-h</code>选项以KB以上的单位来显示，可读性高：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@LinServ-1 ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
文件系统              容量  已用 可用 已用% 挂载点
/dev/sda2             140G   27G  106G  <span class="token number">21</span>% /
/dev/sda1             996M   61M  884M   <span class="token number">7</span>% /boot
tmpfs                1009M     <span class="token number">0</span> 1009M   <span class="token number">0</span>% /dev/shm
/dev/sdb1             <span class="token number">2</span>.7T  209G  <span class="token number">2</span>.4T   <span class="token number">8</span>% /data1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看全部文件系统：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@LinServ-1 ~<span class="token punctuation">]</span><span class="token comment"># df -a</span>
文件系统               1K-块        已用     可用 已用% 挂载点
/dev/sda2            <span class="token number">146294492</span>  <span class="token number">28244432</span> <span class="token number">110498708</span>  <span class="token number">21</span>% /
proc                         <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>   -  /proc
sysfs                        <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>   -  /sys
devpts                       <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>   -  /dev/pts
/dev/sda1              <span class="token number">1019208</span>     <span class="token number">62360</span>    <span class="token number">904240</span>   <span class="token number">7</span>% /boot
tmpfs                  <span class="token number">1032204</span>         <span class="token number">0</span>   <span class="token number">1032204</span>   <span class="token number">0</span>% /dev/shm
/dev/sdb1            <span class="token number">2884284108</span> <span class="token number">218826068</span> <span class="token number">2518944764</span>   <span class="token number">8</span>% /data1
none                         <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>   -  /proc/sys/fs/binfmt_misc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示 <code>public</code> 目录中的可用空间量，如以下输出中所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> public
<span class="token comment"># Filesystem     1K-blocks     Used Available Use% Mounted on</span>
<span class="token comment"># /dev/loop0      18761008 15246924   2554392  86% /d Avail</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),i=[l];function p(c,r){return n(),a("div",null,i)}const t=s(d,[["render",p],["__file","df.html.vue"]]);export{t as default};
