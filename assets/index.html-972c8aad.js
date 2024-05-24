import{_ as e,p as t,q as n,a1 as a}from"./framework-5866ffd3.js";const d={},i=a(`<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2><p>大部分 HTML 元素都有系统提供的样式，但有以下问题</p><p>不同浏览器显示样式不一致<br> 样式过于简单，显示效果不美观<br> 很难按照设计稿完全呈现显示效果<br></p><h2 id="样式声明" tabindex="-1"><a class="header-anchor" href="#样式声明" aria-hidden="true">#</a> 样式声明</h2><p>可以通过多种方式定义样式表。</p><h3 id="外部样式" tabindex="-1"><a class="header-anchor" href="#外部样式" aria-hidden="true">#</a> 外部样式</h3><p>使用 link 标签引入外部样式文件，需要注意以下几点。</p><p>link 标签放在 head 标签内部<br> 样式文件要以 .css 为扩展名<br> 一个页面往往需要引入多个样式文件<br></p><table><thead><tr><th style="text-align:center;">标签</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">rel</td><td style="text-align:center;">定义当前文档与被链接文档之间的关系</td></tr><tr><td style="text-align:center;">href</td><td style="text-align:center;">外部样式文件</td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">文档类型</td></tr></tbody></table><p>link 还有其他属性会在其他章节单独讲解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;springsongs.css&quot; type=&quot;text/css&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="嵌入样式" tabindex="-1"><a class="header-anchor" href="#嵌入样式" aria-hidden="true">#</a> 嵌入样式</h3><p>使用 style 标签可以在文档内部定义样式规则。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	body {
		background: red;
	}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h3><p>可以为某个标签单独设置样式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1 style=&quot;color:green;&quot;&gt;springsongs.cn&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="导入样式" tabindex="-1"><a class="header-anchor" href="#导入样式" aria-hidden="true">#</a> 导入样式</h3><p>使用 @import 可以在原样式规则中导入其他样式表，可以在外部样式、style标签中使用。</p><p>可以使用以下两种方式导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;springsongs.css&quot;
@import url(&quot;springsongs.css&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>导入样式要放在样式规则前面定义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	@import url(&quot;springsongs.css&quot;);
	body {
		background: red;
	}
&lt;/style1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他细节" tabindex="-1"><a class="header-anchor" href="#其他细节" aria-hidden="true">#</a> 其他细节</h2><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><p>注释是对定义样式规则的说明，便于后期维护理解。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
body {
	/* 这是注释的使用 */
	background: red;
}
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h3><p>样式规则如果存在错误，解析器会选择忽略，并不会影响其他样式规则。</p><p>以下代码的springsongs:red 是无效样式但不影响后面的 font-size:100px; 规则使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h1 {
    springsongs: red;
    font-size: 100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),s=[i];function r(l,c){return t(),n("div",null,s)}const o=e(d,[["render",r],["__file","index.html.vue"]]);export{o as default};
