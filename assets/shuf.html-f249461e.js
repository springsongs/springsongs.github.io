import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="shuf" tabindex="-1"><a class="header-anchor" href="#shuf" aria-hidden="true">#</a> shuf</h1><p>产生随机的排列。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">shuf</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>
<span class="token function">shuf</span> <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>ARG<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token function">shuf</span> <span class="token parameter variable">-i</span> LO-HI <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>将输入的内容随机排列并输出。</li><li>当没有文件或文件为<code>-</code>时，读取标准输入。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-e, <span class="token parameter variable">--echo</span>                  将每个ARG视为输入行。
-i, --input-range<span class="token operator">=</span>LO-HI     将数字范围LO（最低）到HI（最高）之间的作为输入行。
-n, --head-count<span class="token operator">=</span>COUNT      只输出前COUNT行。
-o, <span class="token parameter variable">--output</span><span class="token operator">=</span>FILE           将结果写入到文件而不是标准输出。
    --random-source<span class="token operator">=</span>FILE    将FILE中内容作为随机数据源。
-r, <span class="token parameter variable">--repeat</span>                输出行可以重复。
-z, --zero-terminated       行终止符为NUL（空字符）而不是默认的换行符。
<span class="token parameter variable">--help</span>                      显示帮助信息并退出。
<span class="token parameter variable">--version</span>                   显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>FILE（可选）：要处理的文件，可以为任意数量。</p><p>ARG（可选）：作为输入行的字符串，可以为任意数量。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 模拟硬币抛掷，获取前10个结果：</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">head</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;正面&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;反面&quot;</span>
反面
正面
正面
正面
反面
反面
反面
正面
正面
正面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">shuf</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>-35 <span class="token parameter variable">-n</span> <span class="token number">5</span><span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token operator">&amp;&amp;</span> <span class="token function">shuf</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>-12 <span class="token parameter variable">-n</span> <span class="token number">2</span><span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-n</span>
<span class="token number">4</span>
<span class="token number">17</span>
<span class="token number">20</span>
<span class="token number">29</span>
<span class="token number">31</span>
<span class="token number">6</span>
<span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，更多详细的帮助信息请查看<code>man -s 1 shuf</code>，<code>info coreutils &#39;shuf invocation&#39;</code>。</li></ol>`,18),r=[l];function p(t,c){return n(),s("div",null,r)}const d=a(i,[["render",p],["__file","shuf.html.vue"]]);export{d as default};
