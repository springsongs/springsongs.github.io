import{_ as e,p as n,q as s,a1 as a}from"./framework-5866ffd3.js";const i={},t=a(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep" aria-hidden="true">#</a> egrep</h1><p>在文件内查找指定的字符串</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>egrep命令</strong> 用于在文件内查找指定的字符串。egrep执行效果与<code>grep -E</code>相似，使用的语法及参数可参照grep指令，与grep的不同点在于解读字符串的方法。egrep是用extended regular expression语法来解读的，而grep则用basic regular expression 语法解读，extended regular expression比basic regular expression的表达更规范。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>egrep<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>查找模式<span class="token punctuation">)</span><span class="token punctuation">(</span>文件名1，文件名2，……<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>显示文件中符合条件的字符。例如，查找当前目录下所有文件中包含字符串&quot;Linux&quot;的文件，可以使用如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">egrep</span> Linux *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以下五行为 testfile 中包含Linux字符的行</span>
testfile:hello Linux<span class="token operator">!</span>
testfile:Linux is a <span class="token function">free</span> Unix-type operating system.
testfile:This is a Linux testfile<span class="token operator">!</span>
testfile:Linux
testfile:Linux

<span class="token comment"># 以下两行为testfile1中含Linux字符的行</span>
testfile1:helLinux<span class="token operator">!</span>
testfile1:This a Linux testfile<span class="token operator">!</span>

<span class="token comment"># 以下两行为 testfile_2 中包含Linux字符的行</span>
testfile_2:Linux is a <span class="token function">free</span> unix-type opterating system
testfile_2:Linux <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function r(d,c){return n(),s("div",null,l)}const o=e(i,[["render",r],["__file","egrep.html.vue"]]);export{o as default};
