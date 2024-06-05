import{_ as e,p as a,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="mtools" tabindex="-1"><a class="header-anchor" href="#mtools" aria-hidden="true">#</a> mtools</h1><p>显示mtools支持的指令</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mtools命令</strong> 显示mtools支持的指令，mtools为MS-DOS文件系统的工具程序，可模拟许多MS-DOS的指令。这些指令都是mtools的符号连接，因此会有一些共同的特性。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mtools<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：长文件名重复时自动更改目标文件的长文件名；
-A：短文件名重复但长文件名不同时自动更改目标文件的短文件名；
-o：长文件名重复时，将目标文件覆盖现有的文件；
-O：短文件名重复但长文件名不同时，将目标文件覆盖现有的文件；
-r：长文件名重复时，要求用户更改目标文件的长文件名；
-R：短文件名重复但长文件名不同时，要求用户更改目标文件的短文件名；
-s：长文件名重复时，则不处理该目标文件；
-S：短文件名重复但长文件名不同时，则不处理该目标文件；
-v：执行时显示详细的说明；
-V：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>使用mtools命令显示其支持的所有的指令，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mtools     #显示所有支持的指令名称</span>
Supported commands:
mattrib, mbadblocks, mcat, mcd, mclasserase, mcopy, mdel, mdeltree
mdir, mdoctorfat, mdu, mformat, minfo, mlabel, mmd, mmount
mpartition, mrd, mread, mmove, mren, mshowfat, mtoolstest, mtype
mwrite, mzip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，其显示的所有命令均为mtools工具所支持的。</p>`,12),l=[d];function o(r,t){return a(),s("div",null,l)}const c=e(i,[["render",o],["__file","mtools.html.vue"]]);export{c as default};
