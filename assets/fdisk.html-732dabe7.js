import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},l=e(`<h1 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk" aria-hidden="true">#</a> fdisk</h1><p>查看磁盘使用情况和磁盘分区</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>fdisk命令</strong> 用于观察硬盘实体使用情况，也可对硬盘分区。它采用传统的问答式界面，而非类似DOS fdisk的cfdisk互动式操作界面，因此在使用上较为不便，但功能却丝毫不打折扣。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fdisk<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>大小<span class="token operator">&gt;</span>             扇区大小<span class="token punctuation">(</span><span class="token number">512</span>、1024、2048或4096<span class="token punctuation">)</span>
 -c<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>模式<span class="token operator">&gt;</span><span class="token punctuation">]</span>           兼容模式：“dos”或“nondos”<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
 <span class="token parameter variable">-h</span>                    打印此帮助文本
 -u<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>单位<span class="token operator">&gt;</span><span class="token punctuation">]</span>           显示单位：“cylinders”<span class="token punctuation">(</span>柱面<span class="token punctuation">)</span>或“sectors”<span class="token punctuation">(</span>扇区，默认<span class="token punctuation">)</span>
 <span class="token parameter variable">-v</span>                    打印程序版本
 <span class="token parameter variable">-C</span> <span class="token operator">&lt;</span>数字<span class="token operator">&gt;</span>             指定柱面数
 <span class="token parameter variable">-H</span> <span class="token operator">&lt;</span>数字<span class="token operator">&gt;</span>             指定磁头数
 <span class="token parameter variable">-S</span> <span class="token operator">&lt;</span>数字<span class="token operator">&gt;</span>             指定每个磁道的扇区数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>设备文件：指定要进行分区或者显示分区的硬盘设备文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>首先选择要进行操作的磁盘：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fdisk /dev/sdb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入<code>m</code>列出可以执行的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: m
Command action
   a   toggle a bootable flag
   b   edit bsd disklabel
   c   toggle the dos compatibility flag
   d   delete a partition
   l   list known partition types
   m   print this menu
   n   <span class="token function">add</span> a new partition
   o   create a new empty DOS partition table
   p   print the partition table
   q   quit without saving changes
   s   create a new empty Sun disklabel
   t   change a partition&#39;s system <span class="token function">id</span>
   u   change display/entry <span class="token function">units</span>
   <span class="token function">v</span>   verify the partition table
   w   <span class="token function">write</span> table to disk and <span class="token builtin class-name">exit</span>
   x   extra functionality <span class="token punctuation">(</span>experts only<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>p</code>列出磁盘目前的分区情况：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p

Disk /dev/sdb: <span class="token number">3221</span> MB, <span class="token number">3221225472</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">391</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               <span class="token number">1</span>           <span class="token number">1</span>        <span class="token number">8001</span>   8e  Linux LVM
/dev/sdb2               <span class="token number">2</span>          <span class="token number">26</span>      <span class="token number">200812</span>+  <span class="token number">83</span>  Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>d</code>然后选择分区，删除现有分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: d
Partition number <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>: <span class="token number">1</span>

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: d
Selected partition <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看分区情况，确认分区已经删除：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: print

Disk /dev/sdb: <span class="token number">3221</span> MB, <span class="token number">3221225472</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">391</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes

   Device Boot      Start         End      Blocks   Id  System

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>n</code>建立新的磁盘分区，首先建立两个主磁盘分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Command action
   e   extended
   p   primary partition <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>
p    //建立主分区
Partition number <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>: <span class="token number">1</span>  //分区号
First cylinder <span class="token punctuation">(</span><span class="token number">1</span>-391, default <span class="token number">1</span><span class="token punctuation">)</span>:  //分区起始位置
Using default value <span class="token number">1</span>
last cylinder or +size or +sizeM or +sizeK <span class="token punctuation">(</span><span class="token number">1</span>-391, default <span class="token number">391</span><span class="token punctuation">)</span>: <span class="token number">100</span>  //分区结束位置，单位为扇区

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n  //再建立一个分区
Command action
   e   extended
   p   primary partition <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>
p 
Partition number <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>: <span class="token number">2</span>  //分区号为2
First cylinder <span class="token punctuation">(</span><span class="token number">101</span>-391, default <span class="token number">101</span><span class="token punctuation">)</span>:
Using default value <span class="token number">101</span>
Last cylinder or +size or +sizeM or +sizeK <span class="token punctuation">(</span><span class="token number">101</span>-391, default <span class="token number">391</span><span class="token punctuation">)</span>: +200M  //分区结束位置，单位为M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确认分区建立成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p

Disk /dev/sdb: <span class="token number">3221</span> MB, <span class="token number">3221225472</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">391</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               <span class="token number">1</span>         <span class="token number">100</span>      <span class="token number">803218</span>+  <span class="token number">83</span>  Linux
/dev/sdb2             <span class="token number">101</span>         <span class="token number">125</span>      <span class="token number">200812</span>+  <span class="token number">83</span>  Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再建立一个逻辑分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Command action
   e   extended
   p   primary partition <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>
e  //选择扩展分区
Partition number <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>: <span class="token number">3</span>
First cylinder <span class="token punctuation">(</span><span class="token number">126</span>-391, default <span class="token number">126</span><span class="token punctuation">)</span>:
Using default value <span class="token number">126</span>
Last cylinder or +size or +sizeM or +sizeK <span class="token punctuation">(</span><span class="token number">126</span>-391, default <span class="token number">391</span><span class="token punctuation">)</span>:
Using default value <span class="token number">391</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确认扩展分区建立成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p

Disk /dev/sdb: <span class="token number">3221</span> MB, <span class="token number">3221225472</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">391</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               <span class="token number">1</span>         <span class="token number">100</span>      <span class="token number">803218</span>+  <span class="token number">83</span>  Linux
/dev/sdb2             <span class="token number">101</span>         <span class="token number">125</span>      <span class="token number">200812</span>+  <span class="token number">83</span>  Linux
/dev/sdb3             <span class="token number">126</span>         <span class="token number">391</span>     <span class="token number">2136645</span>    <span class="token number">5</span>  Extended
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在扩展分区上建立两个逻辑分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Command action
   l   logical <span class="token punctuation">(</span><span class="token number">5</span> or over<span class="token punctuation">)</span>
   p   primary partition <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>
l //选择逻辑分区
First cylinder <span class="token punctuation">(</span><span class="token number">126</span>-391, default <span class="token number">126</span><span class="token punctuation">)</span>:
Using default value <span class="token number">126</span>
Last cylinder or +size or +sizeM or +sizeK <span class="token punctuation">(</span><span class="token number">126</span>-391, default <span class="token number">391</span><span class="token punctuation">)</span>: +400M    

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Command action
   l   logical <span class="token punctuation">(</span><span class="token number">5</span> or over<span class="token punctuation">)</span>
   p   primary partition <span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>
l
First cylinder <span class="token punctuation">(</span><span class="token number">176</span>-391, default <span class="token number">176</span><span class="token punctuation">)</span>:
Using default value <span class="token number">176</span>
Last cylinder or +size or +sizeM or +sizeK <span class="token punctuation">(</span><span class="token number">176</span>-391, default <span class="token number">391</span><span class="token punctuation">)</span>:
Using default value <span class="token number">391</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确认逻辑分区建立成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p

Disk /dev/sdb: <span class="token number">3221</span> MB, <span class="token number">3221225472</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">391</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               <span class="token number">1</span>         <span class="token number">100</span>      <span class="token number">803218</span>+  <span class="token number">83</span>  Linux
/dev/sdb2             <span class="token number">101</span>         <span class="token number">125</span>      <span class="token number">200812</span>+  <span class="token number">83</span>  Linux
/dev/sdb3             <span class="token number">126</span>         <span class="token number">391</span>     <span class="token number">2136645</span>    <span class="token number">5</span>  Extended
/dev/sdb5             <span class="token number">126</span>         <span class="token number">175</span>      <span class="token number">401593</span>+  <span class="token number">83</span>  Linux
/dev/sdb6             <span class="token number">176</span>         <span class="token number">391</span>     <span class="token number">1734988</span>+  <span class="token number">83</span>  Linux

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的结果我们可以看到，在硬盘sdb我们建立了2个主分区（sdb1，sdb2），1个扩展分区（sdb3），2个逻辑分区（sdb5，sdb6）</p><p>注意：主分区和扩展分区的磁盘号位1-4，也就是说最多有4个主分区或者扩展分区，逻辑分区开始的磁盘号为5，因此在这个实验中试没有sdb4的。</p><p>最后对分区操作进行保存：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: w
The partition table has been altered<span class="token operator">!</span>

Calling ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> to re-read partition table.
Syncing disks.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建立好分区之后我们还需要对分区进行格式化才能在系统中使用磁盘。</p><p>在sdb1上建立ext2分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext2 /dev/sdb1</span>
<span class="token function">mke2fs</span> <span class="token number">1.39</span> <span class="token punctuation">(</span><span class="token number">29</span>-May-2006<span class="token punctuation">)</span>
Filesystem <span class="token assign-left variable">label</span><span class="token operator">=</span>
OS type: Linux
Block <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
Fragment <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">100576</span> inodes, <span class="token number">200804</span> blocks
<span class="token number">10040</span> blocks <span class="token punctuation">(</span><span class="token number">5.00</span>%<span class="token punctuation">)</span> reserved <span class="token keyword">for</span> the super user
First data <span class="token assign-left variable">block</span><span class="token operator">=</span><span class="token number">0</span>
Maximum filesystem <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">209715200</span>
<span class="token number">7</span> block <span class="token function">groups</span>
<span class="token number">32768</span> blocks per group, <span class="token number">32768</span> fragments per group
<span class="token number">14368</span> inodes per group
Superblock backups stored on blocks:
        <span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>

Writing inode tables: <span class="token keyword">done</span>                           
Writing superblocks and filesystem accounting information: <span class="token keyword">done</span>

This filesystem will be automatically checked every <span class="token number">32</span> mounts or
<span class="token number">180</span> days, whichever comes first.  Use tune2fs <span class="token parameter variable">-c</span> or <span class="token parameter variable">-i</span> to override.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在sdb6上建立ext3分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext3 /dev/sdb6</span>
<span class="token function">mke2fs</span> <span class="token number">1.39</span> <span class="token punctuation">(</span><span class="token number">29</span>-May-2006<span class="token punctuation">)</span>
Filesystem <span class="token assign-left variable">label</span><span class="token operator">=</span>
OS type: Linux
Block <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
Fragment <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">217280</span> inodes, <span class="token number">433747</span> blocks
<span class="token number">21687</span> blocks <span class="token punctuation">(</span><span class="token number">5.00</span>%<span class="token punctuation">)</span> reserved <span class="token keyword">for</span> the super user
First data <span class="token assign-left variable">block</span><span class="token operator">=</span><span class="token number">0</span>
Maximum filesystem <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">444596224</span>
<span class="token number">14</span> block <span class="token function">groups</span>
<span class="token number">32768</span> blocks per group, <span class="token number">32768</span> fragments per group
<span class="token number">15520</span> inodes per group
Superblock backups stored on blocks:
        <span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>, <span class="token number">294912</span>

Writing inode tables: <span class="token keyword">done</span>                           
Creating journal <span class="token punctuation">(</span><span class="token number">8192</span> blocks<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Writing superblocks and filesystem accounting information: <span class="token keyword">done</span>

This filesystem will be automatically checked every <span class="token number">32</span> mounts or
<span class="token number">180</span> days, whichever comes first.  Use tune2fs <span class="token parameter variable">-c</span> or <span class="token parameter variable">-i</span> to override.
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建立两个目录<code>/oracle</code>和<code>/web</code>，将新建好的两个分区挂载到系统：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir /oracle</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir /web</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdb1 /oracle</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdb6 /web</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看分区挂载情况：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
文件系统              容量  已用 可用 已用% 挂载点
/dev/mapper/VolGroup00-LogVol00
                      <span class="token number">6</span>.7G  <span class="token number">2</span>.8G  <span class="token number">3</span>.6G  <span class="token number">44</span>% /
/dev/sda1              99M   12M   82M  <span class="token number">13</span>% /boot
tmpfs                 125M     <span class="token number">0</span>  125M   <span class="token number">0</span>% /dev/shm
/dev/sdb1             773M  808K  733M   <span class="token number">1</span>% /oracle
/dev/sdb6             <span class="token number">1</span>.7G   35M  <span class="token number">1</span>.6G   <span class="token number">3</span>% /web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要每次开机自动挂载则需要修改<code>/etc/fstab</code>文件，加入两行配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/fstab</span>

/dev/VolGroup00/LogVol00 /                       ext3    defaults        <span class="token number">1</span> <span class="token number">1</span>
<span class="token assign-left variable">LABEL</span><span class="token operator">=</span>/boot             /boot                   ext3    defaults        <span class="token number">1</span> <span class="token number">2</span>
tmpfs                   /dev/shm                tmpfs   defaults        <span class="token number">0</span> <span class="token number">0</span>
devpts                  /dev/pts                devpts  <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">5</span>,mode<span class="token operator">=</span><span class="token number">620</span>  <span class="token number">0</span> <span class="token number">0</span>
sysfs                   /sys                    sysfs   defaults        <span class="token number">0</span> <span class="token number">0</span>
proc                    /proc                   proc    defaults        <span class="token number">0</span> <span class="token number">0</span>
/dev/VolGroup00/LogVol01 swap                    swap    defaults        <span class="token number">0</span> <span class="token number">0</span>
/dev/sdb1               /oracle                 ext2    defaults        <span class="token number">0</span> <span class="token number">0</span>
/dev/sdb6               /web                    ext3    defaults        <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),i=[l];function t(c,o){return s(),a("div",null,i)}const u=n(p,[["render",t],["__file","fdisk.html.vue"]]);export{u as default};
