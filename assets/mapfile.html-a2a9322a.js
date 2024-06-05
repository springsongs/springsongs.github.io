import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h1 id="mapfile" tabindex="-1"><a class="header-anchor" href="#mapfile" aria-hidden="true">#</a> mapfile</h1><p>从标准输入读取行并赋值到数组。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">mapfile</span> <span class="token punctuation">[</span>-d delim<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n count<span class="token punctuation">]</span> <span class="token punctuation">[</span>-O origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s count<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u fd<span class="token punctuation">]</span> <span class="token punctuation">[</span>-C callback<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c quantum<span class="token punctuation">]</span> <span class="token punctuation">[</span>array<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>从标准输入或文件描述符读取行并赋值到数组。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-d</span> delim       将delim设为行分隔符，代替默认的换行符。
<span class="token parameter variable">-n</span> count       从标准输入中获取最多count行，如果count为零那么获取全部。
<span class="token parameter variable">-O</span> origin      从数组下标为origin的位置开始赋值，默认的下标为0。
<span class="token parameter variable">-s</span> count       跳过对前count行的读取。
<span class="token parameter variable">-t</span>             读取时移除行分隔符delim（默认为换行符）。
<span class="token parameter variable">-u</span> fd          从文件描述符fd中读取。
<span class="token parameter variable">-C</span> callback    每当读取了quantum行时，调用callback语句。
<span class="token parameter variable">-c</span> quantum     设定读取的行数为quantum。

如果使用-C时没有同时使用-c指定quantum的值，那么quantum默认为5000。
当callback语句执行时，将数组下一个要赋值的下标以及读取的行作为额外的参数传递给callback语句。
如果使用-O时没有提供起始位置，那么mapfile会在实际赋值之前清空该数组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>array（可选）：用于输出的数组名称。如果没有指定数组名称，那么会默认写入到变量名为MAPFILE的数组中。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回成功除非使用了非法选项、指定的数组是只读的、指定的数组不是下标数组。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 常见的读取形式。</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file target_array
<span class="token function">cat</span> source_file <span class="token operator">|</span><span class="token builtin class-name">mapfile</span> target_array
<span class="token builtin class-name">mapfile</span> <span class="token parameter variable">-u</span> fd target_array

<span class="token comment"># 只读取前5行。</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-n</span> <span class="token number">5</span> target_array

<span class="token comment"># 跳过前5行。</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-s</span> <span class="token number">5</span> target_array

<span class="token comment"># 在数组指定的下标开始赋值。</span>
<span class="token comment"># 请注意：这样做不会清空该数组。</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-O</span> <span class="token number">2</span> target_array

<span class="token comment"># 读取时设定行分隔符为tab。</span>
<span class="token comment"># 注意，第二行的tab在终端需要用ctrl+v tab输入；</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-d</span> <span class="token string">$&#39;<span class="token entity" title="\\t">\\t</span>&#39;</span> target_array
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-d</span> <span class="token string">&#39;	&#39;</span> target_array

<span class="token comment"># 读取时移除行分隔符（tab）。</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-d</span> <span class="token string">$&#39;<span class="token entity" title="\\t">\\t</span>&#39;</span> <span class="token parameter variable">-t</span> target_array
<span class="token comment"># 读取时移除行分隔符（换行符）。</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-t</span> target_array

<span class="token comment"># 每读取2行，执行一次语句（在这里是echo）。</span>
<span class="token builtin class-name">mapfile</span> <span class="token operator">&lt;</span> source_file <span class="token parameter variable">-C</span> <span class="token string">&quot;echo CALLBACK:&quot;</span> <span class="token parameter variable">-c</span> <span class="token number">2</span> target_array

<span class="token comment"># 遍历下标，依次显示数组的元素。</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">\${<span class="token operator">!</span>target_array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">printf</span> <span class="token string">&quot;%s&quot;</span> <span class="token variable">\${target_array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li><li>bash内建命令readarray是mapfile的同义词。</li></ol>`,16),t=[i];function p(c,r){return n(),s("div",null,t)}const d=a(l,[["render",p],["__file","mapfile.html.vue"]]);export{d as default};
