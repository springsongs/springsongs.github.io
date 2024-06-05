import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="mkinitrd" tabindex="-1"><a class="header-anchor" href="#mkinitrd" aria-hidden="true">#</a> mkinitrd</h1><p>建立要载入ramdisk的映像文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mkinitrd命令</strong> 建立要载入ramdisk的映像文件，以供Linux开机时载入ramdisk。</p><p>这个是重新封包核心的命令，例如你自己修改了一个设备的驱动，如果这个驱动要加入核心级别的话，就需要对核心进行重新封包，把新加的配置编译到核心内部去！</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkinitrd<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-f：若指定的映像问家名称与现有文件重复，则覆盖现有的文件；
-v：执行时显示详细的信息；
--omit-scsi-modules：不要载入SCSI模块；
<span class="token parameter variable">--preload</span><span class="token operator">=</span><span class="token operator">&lt;</span>模块名称<span class="token operator">&gt;</span>：指定要载入的模块；
<span class="token parameter variable">--with</span><span class="token operator">=</span><span class="token operator">&lt;</span>模块名称<span class="token operator">&gt;</span>：指定要载入的模块；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>映像文件：指定要创建的映像文件；</li><li>内核版本：指定内核版本。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># mkinitrd -v -f myinitrd.img $(uname -r)</span>
Creating initramfs
WARNING: using /tmp <span class="token keyword">for</span> temporary files
Looking <span class="token keyword">for</span> deps of module ide-disk
Looking <span class="token keyword">for</span> deps of module ext3  jbd
Looking <span class="token keyword">for</span> deps of module jbd
Using modules:  ./kernel/fs/jbd/jbd.ko ./kernel/fs/ext3/ext3.ko
/sbin/nash -<span class="token operator">&gt;</span> /tmp/initrd.Vz3928/bin/nash
/sbin/insmod.static -<span class="token operator">&gt;</span> /tmp/initrd.Vz3928/bin/insmod
/sbin/udev.static -<span class="token operator">&gt;</span> /tmp/initrd.Vz3928/sbin/udev
/etc/udev/udev.conf -<span class="token operator">&gt;</span> /tmp/initrd.Vz3928/etc/udev/udev.conf
copy from /lib/modules/2.6.9-5.EL/./kernel/fs/jbd/jbd.ko<span class="token punctuation">(</span>elf32-i386<span class="token punctuation">)</span> to /tmp/initrd.Vz3928/lib/jbd.ko<span class="token punctuation">(</span>elf32-i386<span class="token punctuation">)</span>
copy from /lib/modules/2.6.9-5.EL/./kernel/fs/ext3/ext3.ko<span class="token punctuation">(</span>elf32-i386<span class="token punctuation">)</span> to /tmp/initrd.Vz3928/lib/ext3.ko<span class="token punctuation">(</span>elf32-i386<span class="token punctuation">)</span>
Loading module jbd
Loading module ext3

<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># file myinitrd.img</span>
myinitrd.img: <span class="token function">gzip</span> compressed data, from Unix, max compression

<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># mv myinitrd.img  myinitrd.img.gz</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># gzip -d myinitrd.img.gz</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># file myinitrd.img</span>
myinitrd.img: ASCII cpio archive <span class="token punctuation">(</span>SVR4 with no CRC<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function d(l,r){return s(),a("div",null,o)}const c=n(i,[["render",d],["__file","mkinitrd.html.vue"]]);export{c as default};
