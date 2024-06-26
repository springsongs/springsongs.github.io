import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const l={},p=e(`<h1 id="partprobe" tabindex="-1"><a class="header-anchor" href="#partprobe" aria-hidden="true">#</a> partprobe</h1><p>不重启的情况下重读分区</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>partprobe命令</strong> 用于重读分区表，当出现删除文件后，出现仍然占用空间。可以partprobe在不重启的情况下重读分区。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>partprobe<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-d：不更新内核；
-s：显示摘要和分区；
-h：显示帮助信息；
-v：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>设备：指定需要确认分区表改变的硬盘对应的设备文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>使用partprobe不重启系统添加新的磁盘分区，主机自带硬盘超过300GB，目前只划分使用了3个主分区，不到70GB，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df -h </span>
Filesystem Size Used Avail Use% Mounted on 
/dev/sda1 29G <span class="token number">3</span>.7G  24G <span class="token number">14</span>% / 
/dev/sda2 29G  22G <span class="token number">5</span>.2G <span class="token number">81</span>% /oracle 
tmpfs    <span class="token number">2</span>.0G    <span class="token number">0</span> <span class="token number">2</span>.0G  <span class="token number">0</span>% /dev/shm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/partitions</span>
major minor  <span class="token comment">#blocks  name</span>

   <span class="token number">8</span>     <span class="token number">0</span>  <span class="token number">311427072</span> sda
   <span class="token number">8</span>     <span class="token number">1</span>   <span class="token number">30716248</span> sda1
   <span class="token number">8</span>     <span class="token number">2</span>   <span class="token number">30716280</span> sda2
   <span class="token number">8</span>     <span class="token number">3</span>    <span class="token number">8193150</span> sda3
   <span class="token number">8</span>    <span class="token number">16</span>     <span class="token number">976896</span> sdb
   <span class="token number">8</span>    <span class="token number">32</span>     <span class="token number">976896</span> sdc

…省略其他
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在需要给系统添加1个100GB的空间存放数据文件，而又不影响现有系统上业务的运行，使用fdisk结合partprobe命令不重启系统添加一块新的磁盘分区。操作步骤如下：</p><p><strong>第1步 添加新的磁盘分区</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fdisk /dev/sda</span>
The number of cylinders <span class="token keyword">for</span> this disk is <span class="token builtin class-name">set</span> to <span class="token number">38770</span>.
There is nothing wrong with that, but this is larger than <span class="token number">1024</span>,
and could <span class="token keyword">in</span> certain setups cause problems with:
<span class="token number">1</span><span class="token punctuation">)</span> software that runs at boot <span class="token function">time</span> <span class="token punctuation">(</span>e.g., old versions of lilo<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> booting and partitioning software from other OSs
   <span class="token punctuation">(</span>e.g., DOS FDISK, OS/2 FDISK<span class="token punctuation">)</span>

<span class="token builtin class-name">command</span> <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p

Disk /dev/sda: <span class="token number">318.9</span> GB, <span class="token number">318901321728</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">38770</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes

   Device Boot      Start         End      Blocks   <span class="token function">id</span>  System
/dev/sda1   *           <span class="token number">1</span>        <span class="token number">3824</span>    <span class="token number">30716248</span>+  <span class="token number">83</span>  Linux
/dev/sda2            <span class="token number">3825</span>        <span class="token number">7648</span>    <span class="token number">30716280</span>   <span class="token number">83</span>  Linux
/dev/sda3            <span class="token number">7649</span>        <span class="token number">8668</span>     <span class="token number">8193150</span>   <span class="token number">82</span>  Linux swap / Solaris

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Command action
   e   extended
   p   primary partition <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>
p
Selected partition <span class="token number">4</span>
First cylinder <span class="token punctuation">(</span><span class="token number">8669</span>-38770, default <span class="token number">8669</span><span class="token punctuation">)</span>:
Using default value <span class="token number">8669</span>
last cylinder or +size or +sizeM or +sizeK <span class="token punctuation">(</span><span class="token number">8669</span>-38770, default <span class="token number">38770</span><span class="token punctuation">)</span>: +100G   
Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: w
The partition table has been altered<span class="token operator">!</span>

Calling ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> to re-read partition table.

WARNING: Re-reading the partition table failed with error <span class="token number">16</span>: 

Device or resource busy.
The kernel still uses the old table.
The new table will be used at the next reboot.
Syncing disks.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第2步 使用工具partprobe让kernel读取分区信息：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># partprobe</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用fdisk工具只是将分区信息写到磁盘，如果需要mkfs磁盘分区则需要重启系统，而使用partprobe则可以使kernel重新读取分区信息，从而避免重启系统。</p><p><strong>第3步 格式化文件系统：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext3 /dev/sda4</span>
<span class="token function">mke2fs</span> <span class="token number">1.39</span> <span class="token punctuation">(</span><span class="token number">29</span>-May-2006<span class="token punctuation">)</span>
Filesystem <span class="token assign-left variable">label</span><span class="token operator">=</span>
OS type: Linux
Block <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
Fragment <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">12222464</span> inodes, <span class="token number">24416791</span> blocks
<span class="token number">1220839</span> blocks <span class="token punctuation">(</span><span class="token number">5.00</span>%<span class="token punctuation">)</span> reserved <span class="token keyword">for</span> the super user
First data <span class="token assign-left variable">block</span><span class="token operator">=</span><span class="token number">0</span>
Maximum filesystem <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">4294967296</span>
<span class="token number">746</span> block <span class="token function">groups</span>
<span class="token number">32768</span> blocks per group, <span class="token number">32768</span> fragments per group
<span class="token number">16384</span> inodes per group
Superblock backups stored on blocks:
        <span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>, <span class="token number">294912</span>, <span class="token number">819200</span>, <span class="token number">884736</span>, <span class="token number">1605632</span>, 
　　　　<span class="token number">2654208</span>, <span class="token number">4096000</span>, <span class="token number">7962624</span>, <span class="token number">11239424</span>, <span class="token number">20480000</span>, <span class="token number">23887872</span>

Writing inode tables: <span class="token keyword">done</span>
Creating journal <span class="token punctuation">(</span><span class="token number">32768</span> blocks<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Writing superblocks and filesystem accounting information:

<span class="token keyword">done</span>

This filesystem will be automatically checked every <span class="token number">26</span> mounts or
<span class="token number">180</span> days, whichever comes first.  Use tune2fs <span class="token parameter variable">-c</span> or <span class="token parameter variable">-i</span> to override.
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第4步 mount新的分区<code>/dev/sda4</code>：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># e2label  /dev/sda4 /data</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir /data</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sda4 /data</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df</span>
Filesystem           1K-blocks      Used Available Use% Mounted on
/dev/sda1             <span class="token number">29753556</span>   <span class="token number">3810844</span>  <span class="token number">24406900</span>  <span class="token number">14</span>% /
/dev/sda2             <span class="token number">29753588</span>  <span class="token number">11304616</span>  <span class="token number">16913160</span>  <span class="token number">41</span>% /oracle
tmpfs                  <span class="token number">2023936</span>         <span class="token number">0</span>   <span class="token number">2023936</span>   <span class="token number">0</span>% /dev/shm
/dev/sda4             <span class="token number">96132968</span>    <span class="token number">192312</span>  <span class="token number">91057300</span>   <span class="token number">1</span>% /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用partprobe可以不用重启系统即可配合fdisk工具创建新的分区。</p>`,25),i=[p];function t(o,c){return s(),a("div",null,i)}const d=n(l,[["render",t],["__file","partprobe.html.vue"]]);export{d as default};
