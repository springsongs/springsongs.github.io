import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h1 id="unset" tabindex="-1"><a class="header-anchor" href="#unset" aria-hidden="true">#</a> unset</h1><p>删除指定的shell变量或函数。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">unset</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token punctuation">[</span>name <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>删除一到多个shell变量（不包括只读变量）。</li><li>删除一到多个shell函数。</li><li>删除一到多个具有引用属性的变量（如果-n选项存在）。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-f：仅删除函数。
-v：仅删除变量（不包括只读变量）。
-n：删除具有引用属性的变量名（如果该选项存在）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>name（可选）：要删除的变量或函数。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回成功除非选项错误或要删除的变量或函数有只读属性。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除变量。</span>
<span class="token builtin class-name">declare</span> <span class="token assign-left variable">paper_size</span><span class="token operator">=</span><span class="token string">&#39;B5&#39;</span>
<span class="token builtin class-name">unset</span> <span class="token parameter variable">-v</span> paper_size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除函数。</span>
<span class="token keyword">function</span> <span class="token function-name function">show_result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Last Command Return: $?&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token builtin class-name">unset</span> <span class="token parameter variable">-f</span> show_result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当不指定选项时，优先删除变量，如果失败则删除函数。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">aa</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function-name function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token builtin class-name">unset</span> aa
<span class="token comment"># 变量&#39;aa&#39;已被删除。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> aa
<span class="token comment"># 函数&#39;aa&#39;存在。</span>
<span class="token builtin class-name">declare</span> -F<span class="token operator">|</span><span class="token function">grep</span> aa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 演示unset使用-n选项，name指定了引用变量时的情况。</span>
<span class="token builtin class-name">declare</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token comment"># 定义引用变量</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-n</span> <span class="token assign-left variable">b</span><span class="token operator">=</span>a
<span class="token comment"># 查看属性，显示declare -n b=&quot;a&quot;</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> b
<span class="token comment"># 显示3</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${b}</span>
<span class="token comment"># 显示a</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">!</span>b}</span>
<span class="token comment"># 指定-n选项时</span>
<span class="token builtin class-name">unset</span> <span class="token parameter variable">-n</span> b
<span class="token comment"># 引用变量b已被删除</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> b
<span class="token comment"># 被引用的变量a未被删除</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 演示unset不使用-n选项，name指定了引用变量时的情况。</span>
<span class="token builtin class-name">declare</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token comment"># 定义引用变量</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-n</span> <span class="token assign-left variable">b</span><span class="token operator">=</span>a
<span class="token comment"># 查看属性，显示declare -n b=&quot;a&quot;</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> b
<span class="token comment"># 显示3</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${b}</span>
<span class="token comment"># 显示a</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">!</span>b}</span>
<span class="token comment"># 不指定-n选项时</span>
<span class="token builtin class-name">unset</span> b
<span class="token comment"># 引用变量b未被删除，显示declare -n b=&quot;a&quot;</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> b
<span class="token comment"># 被引用的变量a被删除</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,20),c=[i];function t(p,r){return n(),s("div",null,c)}const o=a(l,[["render",t],["__file","unset.html.vue"]]);export{o as default};
