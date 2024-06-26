import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},l=e(`<h1 id="stat" tabindex="-1"><a class="header-anchor" href="#stat" aria-hidden="true">#</a> stat</h1><p>用于显示文件的状态信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>stat命令</strong> 用于显示文件的状态信息。stat命令的输出信息比ls命令的输出信息要更详细。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>stat<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-L：支持符号连接；
-f：显示文件系统状态而非文件状态；
-t：以简洁方式输出信息；
--help：显示指令的帮助信息；
--version：显示指令的版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定要显示信息的普通文件或者文件系统对应的设备文件名。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l myfile</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">2010</span>-10-09 myfile

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># stat myfile</span>
file: “myfile”
Size: <span class="token number">0</span>               Blocks: <span class="token number">8</span>          IO Block: <span class="token number">4096</span>   一般空文件
Device: fd00h/64768d    Inode: <span class="token number">194805815</span>   Links: <span class="token number">1</span>
Access: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span>  Uid: <span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>   Gid: <span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>
Access: <span class="token number">2010</span>-12-12 <span class="token number">12</span>:22:35.000000000 +0800
Modify: <span class="token number">2010</span>-10-09 <span class="token number">20</span>:44:21.000000000 +0800
Change: <span class="token number">2010</span>-10-09 <span class="token number">20</span>:44:21.000000000 +0800

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># stat -f myfile</span>
File: <span class="token string">&quot;myfile&quot;</span>
id: <span class="token number">0</span>        Namelen: <span class="token number">255</span>     type: ext2/ext3
Block size: <span class="token number">4096</span>       Fundamental block size: <span class="token number">4096</span>
Blocks: Total: <span class="token number">241555461</span>  free: <span class="token number">232910771</span>  Available: <span class="token number">220442547</span>
Inodes: Total: <span class="token number">249364480</span>  Free: <span class="token number">249139691</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># stat -t myfile</span>
myfile <span class="token number">0</span> <span class="token number">8</span> 81a4 <span class="token number">0</span> <span class="token number">0</span> fd00 <span class="token number">194805815</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">1292127755</span> <span class="token number">1286628261</span> <span class="token number">1286628261</span> <span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[l];function c(p,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","stat.html.vue"]]);export{d as default};
