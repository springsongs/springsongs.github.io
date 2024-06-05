import{_ as a,p as s,q as n,a1 as e}from"./framework-5866ffd3.js";const t={},l=e(`<h1 id="lha" tabindex="-1"><a class="header-anchor" href="#lha" aria-hidden="true">#</a> lha</h1><p>压缩或解压缩lzh格式文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lha命令</strong> 是从lharc演变而来的压缩程序，文件经它压缩后，会另外产生具有<code>.lzh</code>扩展名的压缩文件。</p><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a或a：压缩文件，并加入到压缩文件内。
-a<span class="token operator">&lt;</span><span class="token number">0</span>/1/<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/u<span class="token operator">&lt;</span>/0/1/<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>   压缩文件时，采用不同的文件头。
-c或c：压缩文件，重新建构新的压缩文件后，再将其加入。
-d或d：从压缩文件内删除指定的文件。
-<span class="token operator">&lt;</span>a/c/u<span class="token operator">&gt;</span>d或<span class="token operator">&lt;</span>a/c/u<span class="token operator">&gt;</span>d：压缩文件，然后将其加入，重新建构，更新压缩文件或，删除原始文件，也就是把文件移到压缩文件中。
-e或e：解开压缩文件。
-f或f：强制执行lha命令，在解压时会直接覆盖已有的文件而不加以询问。
-g或g：使用通用的压缩格式，便于解决兼容性的问题。
-<span class="token operator">&lt;</span>e/x<span class="token operator">&gt;</span>i或<span class="token operator">&lt;</span>e/x<span class="token operator">&gt;</span>i：解开压缩文件时，忽略保存在压缩文件内的文件路径，直接将其解压后存放在现行目录下或是指定的目录中。
-l或l：列出压缩文件的相关信息。
-m或m：此选项的效果和同时指定<span class="token string">&quot;-ad&quot;</span>选项相同。
-n或n：不执行指令，仅列出实际执行会进行的动作。
-<span class="token operator">&lt;</span>a/u<span class="token operator">&gt;</span>o或<span class="token operator">&lt;</span>a/u<span class="token operator">&gt;</span>o：采用lharc兼容格式，将压缩后的文件加入，更新压缩文件。
-p或p：从压缩文件内输出到标准输出设备。
-q或q：不显示指令执行过程。
-t或t：检查备份文件内的每个文件是否正确无误。
-u或u：更换较新的文件到压缩文件内。
-u<span class="token operator">&lt;</span>/0/1/<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>或u<span class="token operator">&lt;</span>/0/1/<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>：在文件压缩时采用不同的文件头，然后更新到压缩文件内。
-v或v：详细列出压缩文件的相关信息。
-<span class="token operator">&lt;</span>e/x<span class="token operator">&gt;</span>w<span class="token operator">=</span><span class="token operator">&lt;</span>目的目录<span class="token operator">&gt;</span>或<span class="token operator">&lt;</span>e/x<span class="token operator">&gt;</span>w<span class="token operator">=</span><span class="token operator">&lt;</span>目的目录<span class="token operator">&gt;</span>：指定解压缩的目录。
-x或x：解开压缩文件。
-<span class="token operator">&lt;</span>a/u<span class="token operator">&gt;</span>z或<span class="token operator">&lt;</span>a/u<span class="token operator">&gt;</span>z：不压缩文件，直接把它加入，更新压缩文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lha <span class="token parameter variable">-a</span> abc.lhz a.b         <span class="token comment">#压缩a.b文件，压缩后生成 abc.lhz 文件</span>
lha <span class="token parameter variable">-a</span> abc2 /home/hnlinux  <span class="token comment">#压缩目录</span>
lha <span class="token parameter variable">-xiw</span><span class="token operator">=</span>agis abc          <span class="token comment">#解压文件abc，到当前目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[l];function o(p,i){return s(),n("div",null,r)}const d=a(t,[["render",o],["__file","lha.html.vue"]]);export{d as default};
