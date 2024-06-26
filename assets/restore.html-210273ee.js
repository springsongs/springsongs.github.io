import{_ as e,p as a,q as s,a1 as n}from"./framework-5866ffd3.js";const r={},i=n(`<h1 id="restore" tabindex="-1"><a class="header-anchor" href="#restore" aria-hidden="true">#</a> restore</h1><p>所进行的操作和dump指令相反</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>restore命令</strong> 是dump命令的逆过程，用于还原dump命令生成的备份文件。倾倒操作可用来备份文件，而还原操作则是写回这些已备份的文件。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>restore<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b<span class="token operator">&lt;</span>区块大小<span class="token operator">&gt;</span>：设置区块大小，单位为Byte；
-c：不检查倾倒操作的备份格式，仅准许读取使用旧格式的备份文件；
-C：使用对比模式，将备份的文件与现行的文件相互对比；
-D<span class="token operator">&lt;</span>文件系统<span class="token operator">&gt;</span>：允许用户指定文件系统的名称；
-f<span class="token operator">&lt;</span>备份文件<span class="token operator">&gt;</span>：从指定的文件中读取备份数据，进行还原操作；
-h：仅解除目录而不包括与该目录相关的所有文件；
-i：使用互动模式，在进行还原操作时，restore指令将依序询问用户；
-m：解开符合指定的inode编号的文件或目录而非用文件名称指定；
-r：进行还原操作；
-R：全面还原文件系统时，检查应从何处开始进行；
-s<span class="token operator">&lt;</span>文件编号<span class="token operator">&gt;</span>：当备份数据超过一卷磁带时，用户可以指定备份文件的编号；
-t：指定文件名称，若该文件已存在备份文件中，则列出它们的名称；
-v：显示指令执行过程；
-x：设置文件名称，且从指定的存储媒体里读入它们，若该文件已存在在备份文件中，则将其还原到文件系统内；
-y：不询问任何问题，一律以同意回答并继续执行指令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dump <span class="token parameter variable">-9</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-f</span> /dev/hda3 /home/frank/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用restore命令来恢复备份：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>restore rf /dev/hda3 /home/frank
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用restore命令来查看备份文件里的文件列表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>restore ft /dev/hda3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),d=[i];function l(t,c){return a(),s("div",null,d)}const v=e(r,[["render",l],["__file","restore.html.vue"]]);export{v as default};
