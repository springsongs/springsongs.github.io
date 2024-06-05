import{_ as n,p as a,q as e,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="insmod" tabindex="-1"><a class="header-anchor" href="#insmod" aria-hidden="true">#</a> insmod</h1><p>将给定的模块加载到内核中</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>insmod命令</strong> 用于将给定的模块加载到内核中。Linux有许多功能是通过模块的方式，在需要时才载入kernel。如此可使kernel较为精简，进而提高效率，以及保有较大的弹性。这类可载入的模块，通常是设备驱动程序。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>insmod<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-f：不检查目前kernel版本与模块编译时的kernel版本是否一致，强制将模块载入；
-k：将模块设置为自动卸除；
-m：输出模块的载入信息；
-o<span class="token operator">&lt;</span>模块名称<span class="token operator">&gt;</span>：指定模块的名称，可使用模块文件的文件名；
-p：测试模块是否能正确地载入kernel；
-s：将所有信息记录在系统记录文件中；
-v：执行时显示详细的信息；
-x：不要汇出模块的外部符号；
-X：汇出模块所有的外部符号，此为预设置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>内核模块：指定要加载的内核模块文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>加载RAID1阵列级别模块，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost boot<span class="token punctuation">]</span><span class="token comment"># insmod /lib/modules/2.6.</span>
<span class="token number">18</span>-8.el5/kernel/drivers/md/raid1.ko  

<span class="token punctuation">[</span>root@localhost boot<span class="token punctuation">]</span><span class="token comment"># lsmod | grep raid1</span>
raid1                  <span class="token number">25153</span>  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从以上显示结果可知，RAID1模块已加载成功。只是在使用insmod命令加载模块时，需要使用绝对路径方能加载，且加载时无法自动解决依赖关系。</p>`,14),r=[d];function l(o,t){return a(),e("div",null,r)}const p=n(i,[["render",l],["__file","insmod.html.vue"]]);export{p as default};
