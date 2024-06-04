import{_ as p,M as c,p as o,q as i,R as s,t as n,N as u,V as l,Q as t,a1 as a}from"./framework-5866ffd3.js";const r={},d=s("h1",{id:"c-structures-structs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c-structures-structs","aria-hidden":"true"},"#"),n(" C Structures (structs)")],-1),k=s("p",null,[n("结构（也称为结构）是一种将多个相关变量组合到一个位置的方法。 结构中的每个变量都称为结构的"),s("strong",null,"成员"),n("。")],-1),m=a(`<h2 id="创建结构" tabindex="-1"><a class="header-anchor" href="#创建结构" aria-hidden="true">#</a> 创建结构</h2><p>您可以使用 <code>struct</code> 关键字创建结构，并在花括号内声明其每个成员：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">MyStructure</span> <span class="token punctuation">{</span>   <span class="token comment">// 结构声明</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>           <span class="token comment">// 成员（int 变量）</span>
  <span class="token keyword">char</span> myLetter<span class="token punctuation">;</span>       <span class="token comment">// 成员（char 变量）</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 用分号结束结构</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要访问该结构，您必须为其创建一个变量。</p><p>在 <code>main()</code> 方法中使用 <code>struct</code> 关键字，后跟结构的名称，然后是结构变量的名称：</p><p>创建一个名为 <code>s1</code> 的结构变量：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">myStructure</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myLetter<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问结构成员" tabindex="-1"><a class="header-anchor" href="#访问结构成员" aria-hidden="true">#</a> 访问结构成员</h2><p>要访问结构的成员，请使用点语法 (<code>.</code>)：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 创建一个名为 myStructure 的结构</span>
<span class="token keyword">struct</span> <span class="token class-name">myStructure</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myLetter<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个名为 **s1** 的 myStructure 结构变量</span>
  <span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1<span class="token punctuation">;</span>

  <span class="token comment">// 为 s1 的成员赋值</span>
  s1<span class="token punctuation">.</span>myNum <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
  s1<span class="token punctuation">.</span>myLetter <span class="token operator">=</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// 打印值</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;My number: %d\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;My letter: %c\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myLetter<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，您只需使用一个结构即可轻松创建具有不同值的多个结构变量：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 创建不同的结构变量</span>
<span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s2<span class="token punctuation">;</span>

<span class="token comment">// 为不同的结构变量赋值</span>
s1<span class="token punctuation">.</span>myNum <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
s1<span class="token punctuation">.</span>myLetter <span class="token operator">=</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">;</span>

s2<span class="token punctuation">.</span>myNum <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
s2<span class="token punctuation">.</span>myLetter <span class="token operator">=</span> <span class="token char">&#39;C&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构中的字符串呢" tabindex="-1"><a class="header-anchor" href="#结构中的字符串呢" aria-hidden="true">#</a> 结构中的字符串呢？</h2><p>请记住，C 中的字符串实际上是一个字符数组，不幸的是，您不能像这样为数组赋值：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">myStructure</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myLetter<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myString<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// String</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1<span class="token punctuation">;</span>

  <span class="token comment">// 试图为字符串赋值</span>
  s1<span class="token punctuation">.</span>myString <span class="token operator">=</span> <span class="token string">&quot;Some text&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// 尝试打印值</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;My string: %s&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myString<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),v=a(`<p>会出现错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>prog.c:12:15: error: assignment to expression with array <span class="token builtin class-name">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),b=a(`<p>但是，有一个解决方案！ 您可以使用 <code>strcpy()</code> 函数并将值分配给 <code>s1.myString</code>，如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">myStructure</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myLetter<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myString<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// String</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1<span class="token punctuation">;</span>

  <span class="token comment">// 使用 strcpy 函数为字符串赋值</span>
  <span class="token function">strcpy</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>myString<span class="token punctuation">,</span> <span class="token string">&quot;Some text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 打印值</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;My string: %s&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myString<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><p><code>My string: Some text</code></p><h2 id="更简单的语法" tabindex="-1"><a class="header-anchor" href="#更简单的语法" aria-hidden="true">#</a> 更简单的语法</h2><p>您还可以在声明时在一行中为结构变量的成员赋值。</p><p>只需将值插入花括号 <code>{}</code> 内的逗号分隔列表中。 请注意，您不必通过这种技术对字符串值使用 <code>strcpy()</code> 函数：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 创建结构</span>
<span class="token keyword">struct</span> <span class="token class-name">myStructure</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myLetter<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myString<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个结构变量并为其赋值</span>
  <span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Some text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 打印值</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %c %s&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myNum<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myLetter<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myString<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 插入值的顺序必须与结构中声明的变量类型的顺序相匹配（13 表示 int，&#39;B&#39; 表示 char 等）。</p><h2 id="复制结构" tabindex="-1"><a class="header-anchor" href="#复制结构" aria-hidden="true">#</a> 复制结构</h2><p>您还可以将一种结构分配给另一种结构。</p><p>在以下示例中，将 s1 的值复制到 s2：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Some text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s2<span class="token punctuation">;</span>
s2 <span class="token operator">=</span> s1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改值" tabindex="-1"><a class="header-anchor" href="#修改值" aria-hidden="true">#</a> 修改值</h2><p>如果要更改/修改值，可以使用点语法 (<code>.</code>)。</p><p>要修改字符串值，<code>strcpy()</code> 函数再次很有用：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">myStructure</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> myNum<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myLetter<span class="token punctuation">;</span>
  <span class="token keyword">char</span> myString<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个结构变量并为其赋值</span>
  <span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Some text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 修改值</span>
  s1<span class="token punctuation">.</span>myNum <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
  s1<span class="token punctuation">.</span>myLetter <span class="token operator">=</span> <span class="token char">&#39;C&#39;</span><span class="token punctuation">;</span>
  <span class="token function">strcpy</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>myString<span class="token punctuation">,</span> <span class="token string">&quot;Something else&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 打印值</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %c %s&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myNum<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myLetter<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myString<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当您复制结构值时，修改值特别有用：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 创建一个结构变量并为其赋值</span>
<span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Some text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建另一个结构变量</span>
<span class="token keyword">struct</span> <span class="token class-name">myStructure</span> s2<span class="token punctuation">;</span>

<span class="token comment">// 将 s1 值复制到 s2</span>
s2 <span class="token operator">=</span> s1<span class="token punctuation">;</span>

<span class="token comment">// 更改 s2 值</span>
s2<span class="token punctuation">.</span>myNum <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
s2<span class="token punctuation">.</span>myLetter <span class="token operator">=</span> <span class="token char">&#39;C&#39;</span><span class="token punctuation">;</span>
<span class="token function">strcpy</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>myString<span class="token punctuation">,</span> <span class="token string">&quot;Something else&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印值</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %c %s\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myNum<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myLetter<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>myString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %c %s\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">.</span>myNum<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>myLetter<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>myString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>好的，那么，结构如何有用？</strong></p><p>想象一下，您必须编写一个程序来存储有关汽车的不同信息，例如品牌、型号和年份。 结构的优点在于您可以创建一个“汽车模板”并将其用于您制造的每辆汽车。 请参阅下面的真实示例。</p><h2 id="现实生活中的例子" tabindex="-1"><a class="header-anchor" href="#现实生活中的例子" aria-hidden="true">#</a> 现实生活中的例子</h2><p>使用一个结构来存储关于 Cars 的不同信息：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token keyword">char</span> brand<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">char</span> model<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> year<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">struct</span> <span class="token class-name">Car</span> car1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;BMW&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X5&quot;</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Car</span> car2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Ford&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mustang&quot;</span><span class="token punctuation">,</span> <span class="token number">1969</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Car</span> car3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Toyota&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Corolla&quot;</span><span class="token punctuation">,</span> <span class="token number">2011</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s %d\\n&quot;</span><span class="token punctuation">,</span> car1<span class="token punctuation">.</span>brand<span class="token punctuation">,</span> car1<span class="token punctuation">.</span>model<span class="token punctuation">,</span> car1<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s %d\\n&quot;</span><span class="token punctuation">,</span> car2<span class="token punctuation">.</span>brand<span class="token punctuation">,</span> car2<span class="token punctuation">.</span>model<span class="token punctuation">,</span> car2<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s %d\\n&quot;</span><span class="token punctuation">,</span> car3<span class="token punctuation">.</span>brand<span class="token punctuation">,</span> car3<span class="token punctuation">.</span>model<span class="token punctuation">,</span> car3<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function y(g,h){const e=c("RouterLink");return o(),i("div",null,[d,k,s("p",null,[n("与 "),u(e,{to:"/C/c_arrays.html"},{default:l(()=>[n("array")]),_:1}),n(" 不同，结构可以包含许多不同的数据类型（int、float、char 等）。")]),m,t("rehype:style= background: #ff000036;"),v,t("rehype:style= background: #ff000036;"),b])}const f=p(r,[["render",y],["__file","c_structs.html.vue"]]);export{f as default};
