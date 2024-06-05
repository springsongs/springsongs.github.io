import{_ as a,p as s,q as e,a1 as n}from"./framework-5866ffd3.js";const i={},r=n(`<h1 id="mke2fs" tabindex="-1"><a class="header-anchor" href="#mke2fs" aria-hidden="true">#</a> mke2fs</h1><p>创建磁盘分区上的“etc2/etc3”文件系统</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mke2fs命令</strong> 被用于创建磁盘分区上的“etc2/etc3”文件系统。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mke2fs<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b<span class="token operator">&lt;</span>区块大小<span class="token operator">&gt;</span>：指定区块大小，单位为字节；
-c；检查是否有损坏的区块；
-f<span class="token operator">&lt;</span>不连续区段大小<span class="token operator">&gt;</span>：指定不连续区段的大小，单位为字节；
-F：不管指定的设备为何，强制执行mke2fs；
-i<span class="token operator">&lt;</span>字节<span class="token operator">&gt;</span>：指定<span class="token string">&quot;字节/inode&quot;</span>的比例；
-N<span class="token operator">&lt;</span>inode数<span class="token operator">&gt;</span>：指定要建立的inode数目；
-l<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：从指定的文件中，读取文件西中损坏区块的信息；
-L<span class="token operator">&lt;</span>标签<span class="token operator">&gt;</span>：设置文件系统的标签名称；
-m<span class="token operator">&lt;</span>百分比值<span class="token operator">&gt;</span>：指定给管理员保留区块的比例，预设为5%；
-M：记录最后一次挂入的目录；
-q：执行时不显示任何信息；
-r：指定要建立的ext2文件系统版本；
<span class="token parameter variable">-R</span><span class="token operator">=</span><span class="token operator">&lt;</span>区块数<span class="token operator">&gt;</span>：设置磁盘阵列参数；
-S：仅写入superblock与group descriptors，而不更改inode able inode bitmap以及block bitmap；
-v：执行时显示详细信息；
-V：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>设备文件：指定要创建的文件系统的分区设备文件名；</li><li>块数：指定要创建的文件系统的磁盘块数量。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>创建指定的ext2文件系统。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mke2fs</span> <span class="token parameter variable">-q</span> /dev/hda1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),t=[r];function l(d,o){return s(),e("div",null,t)}const p=a(i,[["render",l],["__file","mke2fs.html.vue"]]);export{p as default};
