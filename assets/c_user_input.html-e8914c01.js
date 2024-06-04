import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},c=e(`<h1 id="c-用户输入-user-input" tabindex="-1"><a class="header-anchor" href="#c-用户输入-user-input" aria-hidden="true">#</a> C 用户输入 User Input</h1><p>C 语言中的 I/O (输入/输出) 通常使用 printf() 和 scanf() 两个函数。</p><p>您已经了解到 <code>printf()</code> 用于在 <code>C</code> 中输出值。</p><p>要获取用户输入，您可以使用 <code>scanf()</code> 函数</p><h2 id="用户输入" tabindex="-1"><a class="header-anchor" href="#用户输入" aria-hidden="true">#</a> 用户输入</h2><p>输出用户输入的数字</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个整数变量来存储我们从用户那里得到的数字</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>

  <span class="token comment">// 要求用户输入一个数字</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个数字: \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 获取并保存用户输入的号码</span>
  <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>myNum<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 输出用户输入的数字</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的数字: %d&quot;</span><span class="token punctuation">,</span> myNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>scanf()</code> 函数有两个参数：变量的格式说明符（上例中的 <code>%d</code>）和引用运算符（<code>&amp;myNum</code>），它存储变量的内存地址。</p><h2 id="用户输入字符串" tabindex="-1"><a class="header-anchor" href="#用户输入字符串" aria-hidden="true">#</a> 用户输入字符串</h2><p>您还可以获取用户输入的字符串：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个字符串</span>
  <span class="token keyword">char</span> firstName<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 要求用户输入一些文本</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;输入您的名字: \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 获取并保存文本</span>
  <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 输出文本</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello %s.&quot;</span><span class="token punctuation">,</span> firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，您必须指定字符串/数组的大小（我们使用了一个非常高的数字，30，但至少我们确定它将为名字存储足够的字符），并且您不必指定引用运算符 (<code>&amp;</code>) 在 <code>scanf()</code> 中处理字符串时。</p>`,12),p=[c];function i(o,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","c_user_input.html.vue"]]);export{d as default};
