import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h1 id="bmodinfo" tabindex="-1"><a class="header-anchor" href="#bmodinfo" aria-hidden="true">#</a> bmodinfo</h1><p>显示给定模块的详细信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>bmodinfo命令</strong> 用于显示给定模块的详细信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bmodinfo<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：显示模块作者；
-d：显示模块的描述信息；
-l：显示模块的许可信息；
-p：显示模块的参数信息；
-n：显示模块对应的文字信息；
-0：用ASCII码的0字符分割字段值，而不使用新行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>模块名：要显示详细信息的模块名称。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>显示sg模块的信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># modinfo sg</span>
filename:    /lib/modules/2.6.9-42.ELsmp/kernel/drivers/scsi/sg.ko
author:     Douglas Gilbert
description:  SCSI generic <span class="token punctuation">(</span>sg<span class="token punctuation">)</span> driver
license:    GPL
version:    <span class="token number">3.5</span>.31 B0B0CB1BB59F0669A1F0D6B
parm:      def_reserved_size:size of buffer reserved <span class="token keyword">for</span> each fd
parm:      allow_dio:allow direct I/O <span class="token punctuation">(</span>default: <span class="token number">0</span> <span class="token punctuation">(</span>disallow<span class="token punctuation">))</span>
alias:     char-major-21-*
vermagic:    <span class="token number">2.6</span>.9-42.ELsmp SMP <span class="token number">686</span> REGPARM 4KSTACKS gcc-3.4
depends:    scsi_mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[d];function l(c,o){return a(),s("div",null,r)}const u=n(i,[["render",l],["__file","bmodinfo.html.vue"]]);export{u as default};
