import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const i={},c=a(`<h1 id="free" tabindex="-1"><a class="header-anchor" href="#free" aria-hidden="true">#</a> free</h1><p>显示内存的使用情况</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>free命令</strong> 可以显示当前系统未使用的和已使用的内存数目，还可以显示被内核使用的内存缓冲区。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>free<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-b</span> <span class="token comment"># 以Byte为单位显示内存使用情况；</span>
<span class="token parameter variable">-k</span> <span class="token comment"># 以KB为单位显示内存使用情况；</span>
<span class="token parameter variable">-m</span> <span class="token comment"># 以MB为单位显示内存使用情况；</span>
<span class="token parameter variable">-g</span> <span class="token comment"># 以GB为单位显示内存使用情况。 </span>
<span class="token parameter variable">-o</span> <span class="token comment"># 不显示缓冲区调节列；</span>
-s<span class="token operator">&lt;</span>间隔秒数<span class="token operator">&gt;</span> <span class="token comment"># 持续观察内存使用状况；</span>
<span class="token parameter variable">-t</span> <span class="token comment"># 显示内存总和列；</span>
<span class="token parameter variable">-V</span> <span class="token comment"># 显示版本信息。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">free</span> <span class="token parameter variable">-t</span>    <span class="token comment"># 以总和的形式显示内存的使用信息</span>
<span class="token function">free</span> <span class="token parameter variable">-s</span> <span class="token number">10</span> <span class="token comment"># 周期性的查询内存使用信息，每10s 执行一次命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示内存使用情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">free</span> <span class="token parameter variable">-m</span>
             total       used       <span class="token function">free</span>     shared    buffers     cached
Mem:          <span class="token number">2016</span>       <span class="token number">1973</span>         <span class="token number">42</span>          <span class="token number">0</span>        <span class="token number">163</span>       <span class="token number">1497</span>
-/+ buffers/cache:        <span class="token number">312</span>       <span class="token number">1703</span>
Swap:         <span class="token number">4094</span>          <span class="token number">0</span>       <span class="token number">4094</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第一部分Mem行解释：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>total：内存总数；
used：已经使用的内存数；
free：空闲的内存数；
shared：当前已经废弃不用；
buffers Buffer：缓存内存数；
cached Page：缓存内存数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关系：total = used + free</p><p><strong>第二部分(-/+ buffers/cache)解释:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>-buffers/cache<span class="token punctuation">)</span> used内存数：第一部分Mem行中的 used – buffers – cached
<span class="token punctuation">(</span>+buffers/cache<span class="token punctuation">)</span> free内存数: 第一部分Mem行中的 <span class="token function">free</span> + buffers + cached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可见-buffers/cache反映的是被程序实实在在吃掉的内存，而+buffers/cache反映的是可以挪用的内存总数。</p><p>第三部分是指交换分区。</p><p>输出结果的第四行是交换分区SWAP的，也就是我们通常所说的虚拟内存。 区别：第二行(mem)的used/free与第三行(-/+ buffers/cache) used/free的区别。 这两个的区别在于使用的角度来看，第一行是从OS的角度来看，因为对于OS，buffers/cached 都是属于被使用，所以他的可用内存是2098428KB,已用内存是30841684KB,其中包括，内核（OS）使用+Application(X, oracle,etc)使用的+buffers+cached.</p><p>第三行所指的是从应用程序角度来看，对于应用程序来说，buffers/cached 是等于可用的，因为buffer/cached是为了提高文件读取的性能，当应用程序需在用到内存的时候，buffer/cached会很快地被回收。</p><p>所以从应用程序的角度来说，可用内存=系统free memory+buffers+cached。 如本机情况的可用内存为：</p><p>18007156=2098428KB+4545340KB+11363424KB</p><p>接下来解释什么时候内存会被交换，以及按什么方交换。</p><p>当可用内存少于额定值的时候，就会开会进行交换。如何看额定值：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/meminfo

MemTotal:       <span class="token number">16140816</span> kB
MemFree:          <span class="token number">816004</span> kB
MemAvailable:    <span class="token number">2913824</span> kB
Buffers:           <span class="token number">17912</span> kB
Cached:          <span class="token number">2239076</span> kB
SwapCached:            <span class="token number">0</span> kB
Active:         <span class="token number">12774804</span> kB
Inactive:        <span class="token number">1594328</span> kB
Active<span class="token punctuation">(</span>anon<span class="token punctuation">)</span>:   <span class="token number">12085544</span> kB
Inactive<span class="token punctuation">(</span>anon<span class="token punctuation">)</span>:    <span class="token number">94572</span> kB
Active<span class="token punctuation">(</span>file<span class="token punctuation">)</span>:     <span class="token number">689260</span> kB
Inactive<span class="token punctuation">(</span>file<span class="token punctuation">)</span>:  <span class="token number">1499756</span> kB
Unevictable:      <span class="token number">116888</span> kB
Mlocked:          <span class="token number">116888</span> kB
SwapTotal:       <span class="token number">8191996</span> kB
SwapFree:        <span class="token number">8191996</span> kB
Dirty:                <span class="token number">56</span> kB
Writeback:             <span class="token number">0</span> kB
AnonPages:      <span class="token number">12229228</span> kB
Mapped:           <span class="token number">117136</span> kB
Shmem:             <span class="token number">58736</span> kB
Slab:             <span class="token number">395568</span> kB
SReclaimable:     <span class="token number">246700</span> kB
SUnreclaim:       <span class="token number">148868</span> kB
KernelStack:       <span class="token number">30496</span> kB
PageTables:       <span class="token number">165104</span> kB
NFS_Unstable:          <span class="token number">0</span> kB
Bounce:                <span class="token number">0</span> kB
WritebackTmp:          <span class="token number">0</span> kB
CommitLimit:    <span class="token number">16262404</span> kB
Committed_AS:   <span class="token number">27698600</span> kB
VmallocTotal:   <span class="token number">34359738367</span> kB
VmallocUsed:      <span class="token number">311072</span> kB
VmallocChunk:   <span class="token number">34350899200</span> kB
HardwareCorrupted:     <span class="token number">0</span> kB
AnonHugePages:   <span class="token number">3104768</span> kB
HugePages_Total:       <span class="token number">0</span>
HugePages_Free:        <span class="token number">0</span>
HugePages_Rsvd:        <span class="token number">0</span>
HugePages_Surp:        <span class="token number">0</span>
Hugepagesize:       <span class="token number">2048</span> kB
DirectMap4k:      <span class="token number">225536</span> kB
DirectMap2M:    <span class="token number">13279232</span> kB
DirectMap1G:     <span class="token number">5242880</span> kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交换将通过三个途径来减少系统中使用的物理页面的个数：</p><ol><li>减少缓冲与页面cache的大小，</li><li>将系统V类型的内存页面交换出去，</li><li>换出或者丢弃页面。(Application 占用的内存页，也就是物理内存不足）。</li></ol><p>事实上，少量地使用swap是不是影响到系统性能的。</p><p>那buffers和cached都是缓存，两者有什么区别呢？</p><p>为了提高磁盘存取效率, Linux做了一些精心的设计, 除了对dentry进行缓存(用于VFS,加速文件路径名到inode的转换), 还采取了两种主要Cache方式：</p><p>Buffer Cache和Page Cache。前者针对磁盘块的读写，后者针对文件inode的读写。这些Cache有效缩短了 I/O系统调用(比如read,write,getdents)的时间。 磁盘的操作有逻辑级（文件系统）和物理级（磁盘块），这两种Cache就是分别缓存逻辑和物理级数据的。</p><p>Page cache实际上是针对文件系统的，是文件的缓存，在文件层面上的数据会缓存到page cache。文件的逻辑层需要映射到实际的物理磁盘，这种映射关系由文件系统来完成。当page cache的数据需要刷新时，page cache中的数据交给buffer cache，因为Buffer Cache就是缓存磁盘块的。但是这种处理在2.6版本的内核之后就变的很简单了，没有真正意义上的cache操作。</p><p>Buffer cache是针对磁盘块的缓存，也就是在没有文件系统的情况下，直接对磁盘进行操作的数据会缓存到buffer cache中，例如，文件系统的元数据都会缓存到buffer cache中。</p><p>简单说来，page cache用来缓存文件数据，buffer cache用来缓存磁盘数据。在有文件系统的情况下，对文件操作，那么数据会缓存到page cache，如果直接采用dd等工具对磁盘进行读写，那么数据会缓存到buffer cache。</p><p>所以我们看linux,只要不用swap的交换空间,就不用担心自己的内存太少.如果常常swap用很多,可能你就要考虑加物理内存了.这也是linux看内存是否够用的标准.</p><p>如果是应用服务器的话，一般只看第二行，+buffers/cache,即对应用程序来说free的内存太少了，也是该考虑优化程序或加内存了。</p>`,37),l=[c];function r(p,d){return s(),e("div",null,l)}const u=n(i,[["render",r],["__file","free.html.vue"]]);export{u as default};
