import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},o=e(`<h1 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h1><p>用于挂载Linux系统外的文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mount命令</strong> Linux mount命令是经常会使用到的命令，它用于挂载Linux系统外的文件。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mount</span> <span class="token punctuation">[</span>-hV<span class="token punctuation">]</span>
<span class="token function">mount</span> <span class="token parameter variable">-a</span> <span class="token punctuation">[</span>-fFnrsvw<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t vfstype<span class="token punctuation">]</span>
<span class="token function">mount</span> <span class="token punctuation">[</span>-fnrsvw<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o options <span class="token punctuation">[</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span> device <span class="token operator">|</span> <span class="token function">dir</span>
<span class="token function">mount</span> <span class="token punctuation">[</span>-fnrsvw<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t vfstype<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o options<span class="token punctuation">]</span> device <span class="token function">dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-V：显示程序版本
-h：显示辅助讯息
-v：显示较讯息，通常和 <span class="token parameter variable">-f</span> 用来除错。
-a：将 /etc/fstab 中定义的所有档案系统挂上。
-F：这个命令通常和 <span class="token parameter variable">-a</span> 一起使用，它会为每一个 <span class="token function">mount</span> 的动作产生一个行程负责执行。在系统需要挂上大量 NFS 档案系统时可以加快挂上的动作。
-f：通常用在除错的用途。它会使 <span class="token function">mount</span> 并不执行实际挂上的动作，而是模拟整个挂上的过程。通常会和 <span class="token parameter variable">-v</span> 一起使用。
-n：一般而言，mount 在挂上后会在 /etc/mtab 中写入一笔资料。但在系统中没有可写入档案系统存在的情况下可以用这个选项取消这个动作。
-s-r：等于 <span class="token parameter variable">-o</span> ro
-w：等于 <span class="token parameter variable">-o</span> rw
-L：将含有特定标签的硬盘分割挂上。
-U：将档案分割序号为 的档案系统挂下。-L 和 <span class="token parameter variable">-U</span> 必须在/proc/partition 这种档案存在时才有意义。
-t：指定档案系统的型态，通常不必指定。mount 会自动选择正确的型态。
<span class="token parameter variable">-o</span> async：打开非同步模式，所有的档案读写动作都会用非同步模式执行。
<span class="token parameter variable">-o</span> sync：在同步模式下执行。
<span class="token parameter variable">-o</span> atime、-o noatime：当 atime 打开时，系统会在每次读取档案时更新档案的『上一次调用时间』。当我们使用 flash 档案系统时可能会选项把这个选项关闭以减少写入的次数。
<span class="token parameter variable">-o</span> auto、-o noauto：打开/关闭自动挂上模式。
<span class="token parameter variable">-o</span> defaults:使用预设的选项 rw, suid, dev, exec, auto, nouser, and async.
<span class="token parameter variable">-o</span> dev、-o nodev-o exec、-o noexec允许执行档被执行。
<span class="token parameter variable">-o</span> suid、-o nosuid：
允许执行档在 root 权限下执行。
<span class="token parameter variable">-o</span> user、-o nouser：使用者可以执行 mount/umount 的动作。
<span class="token parameter variable">-o</span> remount：将一个已经挂下的档案系统重新用不同的方式挂上。例如原先是唯读的系统，现在用可读写的模式重新挂上。
<span class="token parameter variable">-o</span> ro：用唯读模式挂上。
<span class="token parameter variable">-o</span> rw：用可读写模式挂上。
<span class="token parameter variable">-o</span> <span class="token assign-left variable">loop</span><span class="token operator">=</span>：使用 loop 模式用来将一个档案当成硬盘分割挂上系统。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将 <code>/dev/hda1</code> 挂在 <code>/mnt</code> 之下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mount /dev/hda1 /mnt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code>/dev/hda1</code> 用唯读模式挂在 <code>/mnt</code> 之下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mount -o ro /dev/hda1 /mnt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code>/tmp/image.iso</code> 这个光碟的 <code>image</code> 档使用 <code>loop</code> 模式挂在 <code>/mnt/cdrom</code> 之下。用这种方法可以将一般网络上可以找到的 <code>Linux</code> 光 碟 ISO 档在不烧录成光碟的情况下检视其内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mount -o loop /tmp/image.iso /mnt/cdrom</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),t=[o];function c(l,d){return n(),s("div",null,t)}const p=a(i,[["render",c],["__file","mount.html.vue"]]);export{p as default};
