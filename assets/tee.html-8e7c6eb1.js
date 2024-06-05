import{_ as a,p as n,q as e,a1 as s}from"./framework-5866ffd3.js";const i={},r=s(`<h1 id="tee" tabindex="-1"><a class="header-anchor" href="#tee" aria-hidden="true">#</a> tee</h1><p>从标准输入读取数据并重定向到标准输出和文件。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tee</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>需要同时查看数据内容并输出到文件时使用。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>FILE（可选）：要输出的文件，可以为一或多个。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>长选项与短选项等价

-a, <span class="token parameter variable">--append</span>               追加到文件中而不是覆盖。
-i, --ignore-interrupts    忽略中断信号（Ctrl+c中断操作无效）。
<span class="token parameter variable">-p</span>                         诊断写入非管道的错误。
--output-error<span class="token punctuation">[</span><span class="token operator">=</span>MODE<span class="token punctuation">]</span>      设置写错误时的行为，请查看下方的MODE部分。
<span class="token parameter variable">--help</span>                     显示帮助信息并退出。
<span class="token parameter variable">--version</span>                  显示版本信息并退出。

MODE决定了当出现写错误时的输出行为，可用的MODE如下：

<span class="token string">&#39;warn&#39;</span>           当写入到任何输出报错时诊断。
<span class="token string">&#39;warn-nopipe&#39;</span>    当写入到任何输出（而不是管道）报错时诊断。
<span class="token string">&#39;exit&#39;</span>           当写入到任何输出报错时退出。
<span class="token string">&#39;exit-nopipe&#39;</span>    当写入到任何输出（而不是管道）报错时退出。

-p选项的指定的默认MODE为<span class="token string">&#39;warn-nopipe&#39;</span>。
当<span class="token string">&#39;--output-error&#39;</span>没有在选项中时，默认的操作是当写入到管道报错时立刻退出，诊断错误信息并写入到非管道输出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回状态为成功除非给出了非法选项或非法参数。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将进程信息通过管道输出到标准输出（终端）并覆盖写入到文件中。</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">tee</span> info_a.log info_b.log

<span class="token comment"># 将进程信息通过管道输出到标准输出（终端）并追加写入到文件中。</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">tee</span> <span class="token parameter variable">-a</span> info_a.log info_b.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 tee</code>或<code>info coreutils &#39;tee invocation&#39;</code>。</li><li>存在缓存机制，每1024个字节将输出一次。若从管道接收输入数据，应该是缓冲区满，才将数据转存到指定的文件中。若文件内容不到1024个字节，则接收从标准输入设备读入的数据后，将刷新一次缓冲区，并转存数据到指定文件。</li></ol>`,16),l=[r];function t(d,c){return n(),e("div",null,l)}const p=a(i,[["render",t],["__file","tee.html.vue"]]);export{p as default};
