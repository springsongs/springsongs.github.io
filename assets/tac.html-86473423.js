import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},c=e(`<h1 id="tac" tabindex="-1"><a class="header-anchor" href="#tac" aria-hidden="true">#</a> tac</h1><p>连接多个文件并以行为单位反向打印到标准输出。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tac</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>按行为单位反向显示文件内容，如果没有文件或文件为<code>-</code>则读取标准输入。</li><li>处理多个文件时，依次将每个文件反向显示，而不是将所有文件连在一起再反向显示。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>FILE（可选）：要处理的文件，可以为一或多个。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>长选项与短选项等价

-b, <span class="token parameter variable">--before</span>              在之前而不是之后连接分隔符。
-r, <span class="token parameter variable">--regex</span>               将分隔符作为基础正则表达式（BRE）处理。
-s, <span class="token parameter variable">--separator</span><span class="token operator">=</span>STRING    使用STRING作为分隔符代替默认的换行符。
<span class="token parameter variable">--help</span>                    显示帮助信息并退出。
<span class="token parameter variable">--version</span>                 显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回状态为成功除非给出了非法选项或非法参数。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 选自官方info文档的例子：</span>
<span class="token comment"># 一个接着一个字符的反转一个文件：</span>
<span class="token function">tac</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;x\\|[^x]&#39;</span> test.log

<span class="token comment"># 关于-b选项：</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">3</span> <span class="token operator">|</span><span class="token function">tac</span>
<span class="token comment"># 输出</span>
<span class="token number">3</span>
<span class="token number">2</span>
<span class="token number">1</span>
<span class="token comment"># 使用-b选项：</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">3</span> <span class="token operator">|</span><span class="token function">tac</span> <span class="token parameter variable">-b</span>
<span class="token comment"># 输出，注意21后面没有换行符：</span>


<span class="token number">3</span>
<span class="token number">21</span>
<span class="token comment"># 前一个例子相当于将 &#39;1\\n2\\n3\\n&#39; 转换为 &#39;3\\n2\\n1\\n&#39;</span>
<span class="token comment"># 前一个例子相当于将 &#39;1\\n2\\n3\\n&#39; 转换为 &#39;\\n\\n3\\n21&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 tac</code>或<code>info coreutils &#39;tac invocation&#39;</code>。</li><li>关于基础正则表达式（BRE）的内容，详见<code>man -s 1 grep</code>的<code>REGULAR EXPRESSIONS</code>段落。</li></ol>`,16),l=[c];function r(d,t){return a(),s("div",null,l)}const p=n(i,[["render",r],["__file","tac.html.vue"]]);export{p as default};
