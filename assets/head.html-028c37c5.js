import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h1><p>显示文件的开头部分。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">head</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>在未指定行数时默认显示前10行。</li><li>处理多个文件时会在各个文件之前附加含有文件名的行。</li><li>当没有文件或文件为<code>-</code>时，读取标准输入。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-c, <span class="token parameter variable">--bytes</span><span class="token operator">=</span><span class="token punctuation">[</span>-<span class="token punctuation">]</span>NUM       显示前NUM字节；如果NUM前有<span class="token string">&quot;-&quot;</span>，那么会打印除了文件末尾的NUM字节以外的其他内容。
-n, <span class="token parameter variable">--lines</span><span class="token operator">=</span><span class="token punctuation">[</span>-<span class="token punctuation">]</span>NUM       显示前NUM行而不是默认的10行；如果NUM前有<span class="token string">&quot;-&quot;</span>，那么会打印除了文件末尾的NUM行以外的其他行。
-q, --quiet, <span class="token parameter variable">--silent</span>    不打印文件名行。
-v, <span class="token parameter variable">--verbose</span>            总是打印文件名行。
-z, --zero-terminated    行终止符为NUL而不是换行符。
<span class="token parameter variable">--help</span>                   显示帮助信息并退出。
<span class="token parameter variable">--version</span>                显示版本信息并退出。

NUM可以有一个乘数后缀：
b <span class="token number">512</span>
kB <span class="token number">1000</span>
k <span class="token number">1024</span>
MB <span class="token number">1000</span>*1000
M <span class="token number">1024</span>*1024
GB <span class="token number">1000</span>*1000*1000
G <span class="token number">1024</span>*1024*1024
T、P、E、Z、Y等以此类推。

也可以使用二进制前缀：
<span class="token assign-left variable">KiB</span><span class="token operator">=</span>K
<span class="token assign-left variable">MiB</span><span class="token operator">=</span>M
以此类推。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>FILE（可选）：要处理的文件，可以为一或多个。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看历史文件的前6行：</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">6</span> ~/.bash_history
<span class="token comment">#1575425555</span>
<span class="token builtin class-name">cd</span> ~
<span class="token comment">#1575425558</span>
<span class="token function">ls</span> <span class="token parameter variable">-lh</span>
<span class="token comment">#1575425562</span>
<span class="token function">vi</span> ~/Desktop/ZhuangZhu-74.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看多个文件：</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">head</span> <span class="token parameter variable">-n</span> ~/.bash_history ~/.bashrc
<span class="token operator">==</span><span class="token operator">&gt;</span> /allhome/user2/.bash_history <span class="token operator">&lt;=</span><span class="token operator">=</span>
<span class="token comment">#1575425555</span>
<span class="token builtin class-name">cd</span> ~
<span class="token comment">#1575425558</span>
<span class="token function">ls</span> <span class="token parameter variable">-lh</span>
<span class="token comment">#1575425562</span>
<span class="token function">vi</span> ~/Desktop/ZhuangZhu-74.txt
<span class="token comment">#1575425566</span>
<span class="token function">uptime</span>
<span class="token comment">#1575425570</span>
<span class="token function">find</span> ~/ <span class="token parameter variable">-maxdepth</span> <span class="token number">3</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;test.sh&#39;</span> <span class="token parameter variable">-exec</span> lh <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>

<span class="token operator">==</span><span class="token operator">&gt;</span> /allhome/user2/.bashrc <span class="token operator">&lt;=</span><span class="token operator">=</span>
<span class="token comment"># .bashrc</span>

<span class="token comment"># forbid use Ctrl+D to exit shell.</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> ignoreeof

<span class="token comment"># Source global definitions.</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 head</code>，<code>info coreutils &#39;head invocation&#39;</code>。</li></ol>`,17),t=[l];function c(p,r){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","head.html.vue"]]);export{d as default};
