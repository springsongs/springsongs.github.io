import{_ as a,p as n,q as e,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="comm" tabindex="-1"><a class="header-anchor" href="#comm" aria-hidden="true">#</a> comm</h1><p>按行比较两个已排序的文件。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">comm</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE1 FILE2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>按行比较两个已排序的文件。</li><li>当<code>FILE1</code>或<code>FILE2</code>为<code>-</code>时，读取标准输入。</li><li>无选项时输出三列，第一列为<code>FILE1</code>独有的行，第二列为<code>FILE2</code>独有的行，第三列为<code>FILE1</code>，<code>FILE2</code>共有的行。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-1</span>                        不输出第一列。
<span class="token parameter variable">-2</span>                        不输出第二列。
<span class="token parameter variable">-3</span>                        不输出第三列。
--check-order             检查输入行是否正确的排序，即使它们确实是已排序过的。
--nocheck-order           不检查输入行是否正确的排序。
--output-delimiter<span class="token operator">=</span>STR    使用STR作为输出列之间的分隔符而不是默认的TAB。
<span class="token parameter variable">--total</span>                   额外地增加第四列输出概要。
-z, --zero-terminated     设置行终止符为NUL（空），而不是换行符。
<span class="token parameter variable">--help</span>                    显示帮助信息并退出。
<span class="token parameter variable">--version</span>                 显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p>文本 <code>aaa.txt</code> 内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cat aaa.txt </span>
aaa
bbb
ccc
ddd
eee
<span class="token number">111</span>
<span class="token number">222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文本 <code>bbb.txt</code> 内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># cat bbb.txt </span>
bbb
ccc
aaa
hhh
ttt
jjj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># comm --nocheck-order aaa.txt bbb.txt </span>
aaa
                bbb
                ccc
        aaa
ddd
eee
<span class="token number">111</span>
<span class="token number">222</span>
        hhh
        ttt
        jjj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的第一列只包含在aaa.txt中出现的行，第二列包含在bbb.txt中出现的行，第三列包含在aaa.txt和bbb.txt中相同的行。各列之间以制表符（\\t）作为分隔符。</p><h3 id="比较排序过的文档" tabindex="-1"><a class="header-anchor" href="#比较排序过的文档" aria-hidden="true">#</a> 比较排序过的文档</h3><p>先通过 sort 将文件内容排序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sort aaa.txt &gt; aaa1.txt</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sort bbb.txt &gt; bbb1.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比较结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># comm aaa1.txt bbb1.txt</span>
<span class="token number">111</span>
<span class="token number">222</span>
		aaa
		bbb
		ccc
ddd
eee
	hhh
	jjj
	ttt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交集" tabindex="-1"><a class="header-anchor" href="#交集" aria-hidden="true">#</a> 交集</h3><p>打印两个文件的交集，需要删除第一列和第二列：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># comm aaa.txt bbb.txt -1 -2</span>
bbb
ccc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="差集" tabindex="-1"><a class="header-anchor" href="#差集" aria-hidden="true">#</a> 差集</h3><p>通过删除不需要的列，可以得到aaa.txt和bbb.txt的差集：</p><p>aaa.txt的差集</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># comm aaa.txt bbb.txt -2 -3</span>
aaa
ddd
eee
<span class="token number">111</span>
<span class="token number">222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bbb.txt的差集</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># comm aaa.txt bbb.txt -1 -3</span>
aaa
hhh
ttt
jjj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 comm</code>，<code>info coreutils &#39;comm invocation&#39;</code>。</li></ol>`,34),l=[d];function c(t,r){return n(),e("div",null,l)}const u=a(i,[["render",c],["__file","comm.html.vue"]]);export{u as default};
