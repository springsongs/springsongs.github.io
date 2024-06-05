import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="uname" tabindex="-1"><a class="header-anchor" href="#uname" aria-hidden="true">#</a> uname</h1><p>打印系统信息。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>打印机器和操作系统的信息。</li><li>当没有选项时，默认启用 <code>-s</code> 选项。</li><li>如果给出多个选项或 <code>-a</code> 选项时，输出信息按以下字段排序：内核名称 主机名称 内核release 内核版本 机器名称 处理器 硬件平台 操作系统。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a, <span class="token parameter variable">--all</span>                  按顺序打印全部信息，如果 <span class="token parameter variable">-p</span> 和 <span class="token parameter variable">-i</span> 的信息是未知，那么省略。
-s, --kernel-name          打印内核名称。
-n, <span class="token parameter variable">--nodename</span>             打印网络节点主机名称。
-r, --kernel-release       打印内核release。
-v, --kernel-version       打印内核版本。
-m, <span class="token parameter variable">--machine</span>              打印机器名称。
-p, <span class="token parameter variable">--processor</span>            打印处理器名称。
-i, --hardware-platform    打印硬件平台名称。
-o, --operating-system     打印操作系统名称。
<span class="token parameter variable">--help</span>                     显示帮助信息并退出。
<span class="token parameter variable">--version</span>                  显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单独使用uname命令时相当于uname -s</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname</span>
Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看全部信息</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -a</span>
Linux localhost <span class="token number">2.6</span>.18-348.6.1.el5 <span class="token comment">#1 SMP Tue May 21 15:34:22 EDT 2013 i686 i686 i386 GNU/Linux</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 分别列出信息</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -m</span>
i686

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -n</span>
localhost

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -r</span>
<span class="token number">2.6</span>.18-4-686

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -s</span>
Linux

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -v</span>
<span class="token comment">#1 SMP Tue May 21 15:34:22 EDT 2013</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -p</span>
i686

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -i</span>
i386

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -o</span>
GNU/Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 uname</code>，<code>info coreutils &#39;uname invocation&#39;</code>。</li></ol>`,16),c=[l];function t(o,d){return a(),s("div",null,c)}const u=n(i,[["render",t],["__file","uname.html.vue"]]);export{u as default};
