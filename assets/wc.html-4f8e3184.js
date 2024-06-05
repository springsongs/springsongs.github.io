import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const c={},l=e(`<h1 id="wc" tabindex="-1"><a class="header-anchor" href="#wc" aria-hidden="true">#</a> wc</h1><p>统计文件的字节数、字数、行数</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>wc命令</strong> 统计指定文件中的字节数、字数、行数，并将统计结果显示输出。利用wc指令我们可以计算文件的Byte数、字数或是列数，若不指定文件名称，或是所给予的文件名为“-”，则wc指令会从标准输入设备读取数据。wc同时也给出所指定文件的总统计数。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wc<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
<span class="token function">wc</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>文件<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token function">wc</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span><span class="token punctuation">..</span>. --files0-from<span class="token operator">=</span>F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> <span class="token comment"># 统计字节数，或--bytes或——chars：只显示Bytes数；。</span>
<span class="token parameter variable">-l</span> <span class="token comment"># 统计行数，或——lines：只显示列数；。</span>
<span class="token parameter variable">-m</span> <span class="token comment"># 统计字符数。这个标志不能与 -c 标志一起使用。</span>
<span class="token parameter variable">-w</span> <span class="token comment"># 统计字数，或——words：只显示字数。一个字被定义为由空白、跳格或换行字符分隔的字符串。</span>
<span class="token parameter variable">-L</span> <span class="token comment"># 打印最长行的长度。</span>
<span class="token parameter variable">-help</span>     <span class="token comment"># 显示帮助信息</span>
<span class="token parameter variable">--version</span> <span class="token comment"># 显示版本信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：需要统计的文件列表。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> <span class="token parameter variable">-l</span> *       <span class="token comment"># 统计当前目录下的所有文件行数及总计行数。</span>
<span class="token function">wc</span> <span class="token parameter variable">-l</span> *.js    <span class="token comment"># 统计当前目录下的所有 .js 后缀的文件行数及总计行数。</span>
<span class="token function">find</span>  <span class="token builtin class-name">.</span> * <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token comment"># 当前目录以及子目录的所有文件行数及总计行数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看文件的字节数、字数、行数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> test.txt
<span class="token comment"># 输出结果</span>
<span class="token number">7</span>     <span class="token number">8</span>     <span class="token number">70</span>     test.txt
<span class="token comment"># 行数 单词数 字节数 文件名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用wc命令怎么做到只打印统计数字不打印文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token operator">&lt;</span> test.txt
<span class="token comment"># 输出结果</span>
<span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用来统计当前目录下的文件数(不包含隐藏文件)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 要去除TOTAL行</span>
<span class="token function">expr</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span> - <span class="token number">1</span>
<span class="token comment"># 输出结果</span>
<span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统计当前目录下的所有文件行数及总计行数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@centos7 ~<span class="token punctuation">]</span><span class="token comment"># wc -l *</span>
      <span class="token number">21</span> LICENSE
     <span class="token number">270</span> README.md
wc: example: read: Is a directory
     <span class="token number">785</span> lerna-debug.log
      <span class="token number">25</span> lerna.json
wc: node_modules: read: Is a directory
   <span class="token number">23603</span> package-lock.json
      <span class="token number">79</span> package.json
       <span class="token number">3</span> renovate.json
   <span class="token number">24786</span> total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[l];function t(p,r){return a(),s("div",null,i)}const d=n(c,[["render",t],["__file","wc.html.vue"]]);export{d as default};
