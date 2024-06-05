import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h1 id="od" tabindex="-1"><a class="header-anchor" href="#od" aria-hidden="true">#</a> od</h1><p>输出文件的八进制、十六进制等格式编码的字节</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>od命令</strong> 用于输出文件的八进制、十六进制或其它格式编码的字节，通常用于显示或查看文件中不能直接显示在终端的字符。</p><p>常见的文件为文本文件和二进制文件。此命令主要用来查看保存在二进制文件中的值。比如，程序可能输出大量的数据记录，每个数据是一个单精度浮点数。这些数据记录存放在一个文件中，如果想查看下这个数据，这时候od命令就派上用场了。在我看来，od命令主要用来格式化输出文件数据，即对文件中的数据进行无二义性的解释。不管是IEEE754格式的浮点数还是ASCII码，od命令都能按照需求输出它们的值。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>od<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：此参数的效果和同时指定“-ta”参数相同；
-A：<span class="token operator">&lt;</span>字码基数<span class="token operator">&gt;</span>：选择以何种基数计算字码；
-b：此参数的效果和同时指定“-toC”参数相同；
-c：此参数的效果和同时指定“-tC”参数相同；
-d：此参数的效果和同时指定“-tu2”参数相同；
-f：此参数的效果和同时指定“-tfF”参数相同；
-h：此参数的效果和同时指定“-tx2”参数相同；
-i：此参数的效果和同时指定“-td2”参数相同；
-j<span class="token operator">&lt;</span>字符数目<span class="token operator">&gt;</span>或--skip-bytes<span class="token operator">=</span><span class="token operator">&lt;</span>字符数目<span class="token operator">&gt;</span>：略过设置的字符数目；
-l：此参数的效果和同时指定“-td4”参数相同；
-N<span class="token operator">&lt;</span>字符数目<span class="token operator">&gt;</span>或--read-bytes<span class="token operator">=</span><span class="token operator">&lt;</span>字符数目<span class="token operator">&gt;</span>：到设置的字符树目为止；
-o：此参数的效果和同时指定“-to2”参数相同；
-s<span class="token operator">&lt;</span>字符串字符数<span class="token operator">&gt;</span>或--strings<span class="token operator">=</span><span class="token operator">&lt;</span>字符串字符数<span class="token operator">&gt;</span>：只显示符合指定的字符数目的字符串；
-t<span class="token operator">&lt;</span>输出格式<span class="token operator">&gt;</span>或--format<span class="token operator">=</span><span class="token operator">&lt;</span>输出格式<span class="token operator">&gt;</span>：设置输出格式；
-v或--output-duplicates：输出时不省略重复的数据；
-w<span class="token operator">&lt;</span>每列字符数<span class="token operator">&gt;</span>或--width<span class="token operator">=</span><span class="token operator">&lt;</span>每列字符数<span class="token operator">&gt;</span>：设置每列的最大字符数；
-x：此参数的效果和同时指定“-h”参数相同；
--help：在线帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定要显示的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> abcdef g <span class="token operator">&gt;</span> tmp
<span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> tmp
abcdef g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：先准备一个tmp文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-b</span> tmp
0000000 <span class="token number">141</span> <span class="token number">142</span> <span class="token number">143</span> <span class="token number">144</span> <span class="token number">145</span> <span class="token number">146</span> 040 <span class="token number">147</span> 012
0000011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：使用单字节八进制解释进行输出，注意左侧的默认地址格式为八字节</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-c</span> tmp
0000000   a   b   c   d   e   f       g  <span class="token punctuation">\\</span>n
0000011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：使用ASCII码进行输出，注意其中包括转义字符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-t</span> d1 tmp
0000000   <span class="token number">97</span>   <span class="token number">98</span>   <span class="token number">99</span>  <span class="token number">100</span>  <span class="token number">101</span>  <span class="token number">102</span>   <span class="token number">32</span>  <span class="token number">103</span>   <span class="token number">10</span>
0000011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：使用单字节十进制进行解释</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-A</span> d <span class="token parameter variable">-c</span> tmp
0000000   a   b   c   d   e   f       g  <span class="token punctuation">\\</span>n
0000009
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：设置地址格式为十进制。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-A</span> x <span class="token parameter variable">-c</span> tmp
000000   a   b   c   d   e   f       g  <span class="token punctuation">\\</span>n
000009
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：设置地址格式为十六进制</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-j</span> <span class="token number">2</span> <span class="token parameter variable">-c</span> tmp
0000002   c   d   e   f       g  <span class="token punctuation">\\</span>n
0000011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：跳过开始的两个字节</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-N</span> <span class="token number">2</span> <span class="token parameter variable">-j</span> <span class="token number">2</span> <span class="token parameter variable">-c</span> tmp
0000002   c   d
0000004
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：跳过开始的两个字节，并且仅输出两个字节</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-w1</span> <span class="token parameter variable">-c</span> tmp
0000000   a
0000001   b
0000002   c
0000003   d
0000004   e
0000005   f
0000006   
0000007   g
0000010  <span class="token punctuation">\\</span>n
0000011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：每行仅输出1个字节</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-w2</span> <span class="token parameter variable">-c</span> tmp
0000000   a   b
0000002   c   d
0000004   e   f
0000006       g
0000010  <span class="token punctuation">\\</span>n
0000011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：每行输出两个字节</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ od <span class="token parameter variable">-w3</span> <span class="token parameter variable">-b</span> tmp
0000000 <span class="token number">141</span> <span class="token number">142</span> <span class="token number">143</span>
0000003 <span class="token number">144</span> <span class="token number">145</span> <span class="token number">146</span>
0000006 040 <span class="token number">147</span> 012
0000011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：每行输出3个字节，并使用八进制单字节进行解释</p>`,34),p=[i];function t(d,c){return n(),s("div",null,p)}const o=a(l,[["render",t],["__file","od.html.vue"]]);export{o as default};
