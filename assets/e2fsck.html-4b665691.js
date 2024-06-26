import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},l=n(`<h1 id="e2fsck" tabindex="-1"><a class="header-anchor" href="#e2fsck" aria-hidden="true">#</a> e2fsck</h1><p>用于检查第二扩展文件系统的完整性</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>e2fsck命令</strong> 用于检查第二扩展文件系统的完整性，通过适当的选项可以尝试修复出现的错误。</p><p>e2fsck执行后的传回值及代表意义如下：</p><ul><li>0 没有任何错误发生。</li><li>1 文件系统发生错误，并且已经修正。</li><li>2 文件系统发生错误，并且已经修正。</li><li>4 文件系统发生错误，但没有修正。</li><li>8 运作时发生错误。</li><li>16 使用的语法发生错误。</li><li>128 共享的函数库发生错误。</li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>e2fsck<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：不询问使用者意见，便自动修复文件系统；
-b<span class="token operator">&lt;</span>superblock<span class="token operator">&gt;</span>：指定superblock，而不使用预设的superblock；
-B<span class="token operator">&lt;</span>区块大小<span class="token operator">&gt;</span>：指定区块的大小，单位为字节；
-c：一并执行badblocks，以标示损坏的区块；
-C：将检查过程的信息完整记录在file descriptor中，使得整个检查过程都能完整监控；
-d：显示排错信息；
-f：即使文件系统没有错误迹象，仍强制地检查正确性；
-F：执行前先清除设备的缓冲区；
-l<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：将文件中指定的区块加到损坏区块列表；
-L<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：先清除损坏区块列表，再将文件中指定的区块加到损坏区块列表。因此损坏区块列表的区块跟文件中指定的区块是一样的；
-n：以只读模式开启文件系统，并采取非互动方式执行，所有的问题对话均设置以<span class="token string">&quot;no&quot;</span>回答；
-p：不询问使用者意见，便自动修复文件系统；
-r：此参数只为了兼容性而存在，并无实际作用；
-s：如果文件系统的字节顺序不适当，就交换字节顺序，否则不做任何动作；
-S：不管文件系统的字节顺序，一律交换字节顺序；
-t：显示时间信息；
-v：执行时显示详细的信息；
-V：显示版本信息；
-y：采取非互动方式执行，所有的问题均设置以<span class="token string">&quot;yes&quot;</span>回答。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件系统或者分区：指定文件系统或者分区所对应的设备文件名。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>检查<code>/dev/sda1</code>是否有问题，如发现问题便自动修复：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>e2fsck <span class="token parameter variable">-a</span> <span class="token parameter variable">-y</span> /dev/sda1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行e2fsck或fsck前请先umount partition，否则有机会令档案系统毁损。如果需要对根目录<code>/</code>进行检查及修复，便需要进入singal user mode执行。</p>`,16),d=[l];function r(c,t){return e(),s("div",null,d)}const p=a(i,[["render",r],["__file","e2fsck.html.vue"]]);export{p as default};
