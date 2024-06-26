import{_ as s,p as a,q as n,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h1 id="diffstat" tabindex="-1"><a class="header-anchor" href="#diffstat" aria-hidden="true">#</a> diffstat</h1><p>显示diff命令输出信息的柱状图</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>diffstat命令</strong> 用来显示diff命令输出信息的柱状图，用以显示diff命令比较两个文件的不同统计信息。用户也可以直接使用<code>|</code>将diff命令所输出的结果直接送给diffstat命令进行统计结果的显示。使用该命令时，若所比较的文件或者子目录不在当前目录下，则应该使用其完整路径。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>diffstat<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-n<span class="token operator">&lt;</span>文件名长度<span class="token operator">&gt;</span>：指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名；
-p<span class="token operator">&lt;</span>文件名长度<span class="token operator">&gt;</span>：与-n参数相同，但此处的<span class="token operator">&lt;</span>文件名长度<span class="token operator">&gt;</span>包括了文件的路径；
-w：指定要输出时栏位的宽度；
-v：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定保存有diff命令的输出信息文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将目录&quot;test1&quot;和&quot;test2&quot;下的同名文件&quot;testf.txt&quot;使用diff命令进行比较。然后使用diffstat命令对结果进行统计显示，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">diff</span> test1 test2 <span class="token operator">|</span> diffstat    <span class="token comment">#进行比较结果的统计显示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：使用这条命令可以非常方便地实现统计显示的功能。</p><p>对于查看文件中的内容，用户可以通过cat命令进行查看即可，具体操作如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> test1/testf.txt           <span class="token comment">#查看test1/testf的内容</span>
abc
def
ghi
jkl
mno
pqr
stu
vws

<span class="token function">cat</span> test2/testf.txt          <span class="token comment">#查看test2/testf的内容</span>
abc
def
ghi
jkl
mno
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的文件内容显示，可以看到两个文件内容的差别。现在来运行刚才的命令，对文件比较的结果进行统计显示，结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>testfile <span class="token operator">|</span> <span class="token number">2</span> +-             <span class="token comment">#统计信息输出显示</span>
<span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,18),d=[i];function l(c,r){return a(),n("div",null,d)}const p=s(t,[["render",l],["__file","diffstat.html.vue"]]);export{p as default};
