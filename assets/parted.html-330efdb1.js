import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h1 id="parted" tabindex="-1"><a class="header-anchor" href="#parted" aria-hidden="true">#</a> parted</h1><p>磁盘分区和分区大小调整工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>parted命令</strong> 是由GNU组织开发的一款功能强大的磁盘分区和分区大小调整工具，与fdisk不同，它支持调整分区的大小。作为一种设计用于Linux的工具，它没有构建成处理与fdisk关联的多种分区类型，但是，它可以处理最常见的分区格式，包括：ext2、ext3、fat16、fat32、NTFS、ReiserFS、JFS、XFS、UFS、HFS以及Linux交换分区。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>parted<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h：显示帮助信息；
-i：交互式模式；
-s：脚本模式，不提示用户；
-v：显示版本号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>设备：指定要分区的硬盘所对应的设备文件；</li><li>命令：要执行的parted命令。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>从串行技术出现以来，越来越多用户选择使用大容量的SATA硬盘创建磁盘阵列；特别是MD1000/MD3000，很轻易就突破2T的LUN，故在此给大家一些指引。</p><p>红帽企业 Linux 4 Update 4供对大于 2 terabytes（TB）的磁盘设备的支持。</p><p>请参考以下操作步骤：</p><p>注：</p><ul><li>绿色代表你需要使用的命令。</li><li>红色代表你需要注意到的输出信息，在后续需要使用。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fdisk -l</span>
Disk /dev/sda: <span class="token number">35.8</span> GB, <span class="token number">35862976512</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">4360</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes
   Device Boot      Start         End      Blocks   <span class="token function">id</span>  System
/dev/sda1   *           <span class="token number">1</span>          <span class="token number">13</span>      <span class="token number">104391</span>   <span class="token number">83</span>  Linux
/dev/sda2              <span class="token number">14</span>         <span class="token number">144</span>     <span class="token number">1052257</span>+  <span class="token number">82</span>  Linux swap
/dev/sda3             <span class="token number">145</span>        <span class="token number">4360</span>    <span class="token number">33865020</span>   <span class="token number">83</span>  Linux
Disk /dev/sdb: <span class="token number">2147</span> MB, <span class="token number">2147483648</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">261</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes
Disk /dev/sdb doesn&#39;t contain a valid partition table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># parted /dev/sdb</span>
GNU Parted Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">1998</span> - <span class="token number">2004</span> <span class="token function">free</span> Software Foundation, Inc.
This program is <span class="token function">free</span> software, covered by the GNU General Public License.
This program is distributed <span class="token keyword">in</span> the hope that it will be useful, but WITHOUT ANY
WARRANTY<span class="token punctuation">;</span> without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.  See the GNU General Public License <span class="token keyword">for</span> <span class="token function">more</span> details.
使用/dev/sdb
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span>mklabel gpt
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span>print
/dev/sdb的磁盘几何结构：0.000-2048.000兆字节
磁盘标签类型：gpt
Minor   起始点       终止点 文件系统   名称                 标志
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span>mkpart primary <span class="token number">0</span> <span class="token number">2048</span>  <span class="token operator">&lt;</span>-----上面print显示的数字
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span>print
/dev/sdb的磁盘几何结构：0.000-2048.000兆字节
磁盘标签类型：gpt
Minor   起始点       终止点 文件系统   名称                 标志
<span class="token number">1</span>          <span class="token number">0.017</span>   <span class="token number">2047.983</span>
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span>quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果必要，不要忘记更新<code>/etc/fstab</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fdisk -l</span>
Disk /dev/sda: <span class="token number">35.8</span> GB, <span class="token number">35862976512</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">4360</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           <span class="token number">1</span>          <span class="token number">13</span>      <span class="token number">104391</span>   <span class="token number">83</span>  Linux
/dev/sda2              <span class="token number">14</span>         <span class="token number">144</span>     <span class="token number">1052257</span>+  <span class="token number">82</span>  Linux swap
/dev/sda3             <span class="token number">145</span>        <span class="token number">4360</span>    <span class="token number">33865020</span>   <span class="token number">83</span>  Linux
WARNING: GPT <span class="token punctuation">(</span>GUID Partition Table<span class="token punctuation">)</span> detected on <span class="token string">&#39;/dev/sdb&#39;</span><span class="token operator">!</span> The util <span class="token function">fdisk</span> doesn&#39;t support GPT. Use GNU Parted.

Disk /dev/sdb: <span class="token number">2147</span> MB, <span class="token number">2147483648</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">261</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes
   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               <span class="token number">1</span>         <span class="token number">262</span>     <span class="token number">2097151</span>+  ee  EFI GPT
Partition <span class="token number">1</span> has different physical/logical beginnings <span class="token punctuation">(</span>non-Linux?<span class="token punctuation">)</span>:
     <span class="token assign-left variable">phys</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">1</span><span class="token punctuation">)</span> <span class="token assign-left variable">logical</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0,0</span>, <span class="token number">2</span><span class="token punctuation">)</span>
Partition <span class="token number">1</span> has different physical/logical endings:
     <span class="token assign-left variable">phys</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1023</span>, <span class="token number">254</span>, <span class="token number">63</span><span class="token punctuation">)</span> <span class="token assign-left variable">logical</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">261</span>, <span class="token number">21</span>, <span class="token number">16</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext3 /dev/sdb1</span>
<span class="token function">mke2fs</span> <span class="token number">1.35</span> <span class="token punctuation">(</span><span class="token number">28</span>-Feb-2004<span class="token punctuation">)</span>
Filesystem <span class="token assign-left variable">label</span><span class="token operator">=</span>
OS type: Linux
Block <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
Fragment <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">(</span>log<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">262144</span> inodes, <span class="token number">524279</span> blocks
<span class="token number">26213</span> blocks <span class="token punctuation">(</span><span class="token number">5.00</span>%<span class="token punctuation">)</span> reserved <span class="token keyword">for</span> the super user
First data <span class="token assign-left variable">block</span><span class="token operator">=</span><span class="token number">0</span>
Maximum filesystem <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">536870912</span>
<span class="token number">16</span> block <span class="token function">groups</span>
<span class="token number">32768</span> blocks per group, <span class="token number">32768</span> fragments per group
<span class="token number">16384</span> inodes per group
Superblock backups stored on blocks:
        <span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>, <span class="token number">294912</span>
Writing inode tables: <span class="token keyword">done</span>
Creating journal <span class="token punctuation">(</span><span class="token number">8192</span> blocks<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Writing superblocks and filesystem accounting information: <span class="token keyword">done</span>
This filesystem will be automatically checked every <span class="token number">28</span> mounts or
<span class="token number">180</span> days, whichever comes first.  Use tune2fs <span class="token parameter variable">-c</span> or <span class="token parameter variable">-i</span> to override.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdb1 /mnt</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
Filesystem            容量  已用 可用 已用% 挂载点
/dev/sda3              <span class="token operator">&lt;</span>?xml:namespace prefix <span class="token operator">=</span> st1 /<span class="token operator">&gt;</span>32G  <span class="token number">2</span>.6G   28G   <span class="token number">9</span>% /
/dev/sda1              99M   12M   82M  <span class="token number">13</span>% /boot
none                  252M     <span class="token number">0</span>  252M   <span class="token number">0</span>% /dev/shm
/dev/sdb1             <span class="token number">2</span>.0G   36M  <span class="token number">1</span>.9G   <span class="token number">2</span>% /mnt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[t];function i(o,c){return s(),a("div",null,l)}const d=n(p,[["render",i],["__file","parted.html.vue"]]);export{d as default};
