import{_ as e,p as t,q as a,a1 as i}from"./framework-5866ffd3.js";const d={},n=i(`<h2 id="语义标签" tabindex="-1"><a class="header-anchor" href="#语义标签" aria-hidden="true">#</a> 语义标签</h2><p>HTML 标签都有具体语义，非然技术上可以使用 div 标签表示大部分内容，但选择清晰的语义标签更容易让人看明白。比如 h1表示标题、p标签表示内容、强调内容使用em标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;article&gt;
	&lt;h1&gt;极光技术&lt;/h1&gt;
	&lt;p&gt;在线学习平台&lt;/p&gt;
&lt;/article&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套关系" tabindex="-1"><a class="header-anchor" href="#嵌套关系" aria-hidden="true">#</a> 嵌套关系</h2><p>元素可以互相嵌套包裹，即元素存在父子级关系。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;article&gt;
  &lt;h1&gt;极光技术&lt;/h1&gt;
  &lt;div&gt;
    &lt;p&gt;在线学习平台&lt;/p&gt;
    &lt;span&gt;springsongs.cn&lt;/span&gt;
  &lt;/div&gt;
&lt;/article&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2><p>下面是 HTML 文档的基本组成部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh-CN&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;keyword&quot; content=&quot;Mysql,Laravel,Javascript,HTML,CSS,ES6,TYPESCRIPT,极光技术,极光技术教程&quot; /&gt;
    &lt;meta name=&quot;description&quot; content=&quot;极光技术专注WEB开发，高密度更新视频教程&quot; /&gt;
    &lt;title&gt;极光技术&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">标签</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">DOCTYPE</td><td style="text-align:center;">声明为 HTML 文档</td></tr><tr><td style="text-align:center;">html</td><td style="text-align:center;">lang:网页的语言，如 en/zh 等，非必选项目</td></tr><tr><td style="text-align:center;">head</td><td style="text-align:center;">文档说明部分，对搜索引擎提供信息或加载 CSS、JS 等</td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;">网页标题</td></tr><tr><td style="text-align:center;">keyword</td><td style="text-align:center;">向搜索引擎说明你的网页的关键词</td></tr><tr><td style="text-align:center;">description</td><td style="text-align:center;">向搜索引擎描述网页内容的摘要信息</td></tr><tr><td style="text-align:center;">body</td><td style="text-align:center;">页面主体内容</td></tr></tbody></table><h2 id="内容标题" tabindex="-1"><a class="header-anchor" href="#内容标题" aria-hidden="true">#</a> 内容标题</h2><p>标题使用 h1 ~ h6 来定义，用于突出显示文档内容。</p><p>从 h1 到 h6 对搜索引擎来说权重会越来越小 页面中最好只有一个 h1 标签 标题最好不要嵌套如 h1 内部包含 h2 下面是使用默认样式的标题效果，掌握 CSS 后我们就可以随意美化了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;后盾人&lt;/h1&gt;
&lt;h2&gt;springsongs.cn&lt;/h2&gt;
&lt;h3&gt;springsongs.cn&lt;/h3&gt;
&lt;h4&gt;springsongs.cn&lt;/h4&gt;
&lt;h5&gt;linux.springsongs.cn&lt;/h5&gt;
&lt;h6&gt;www.springsongs.cn&lt;/h6&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页眉页脚" tabindex="-1"><a class="header-anchor" href="#页眉页脚" aria-hidden="true">#</a> 页眉页脚</h2><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h3><p>header 标签用于定义文档的页眉，下图中的红色区域都可以使用header标签构建。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;HTML&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;CSS&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><p>footer 标签定义文档或节的页脚，页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;footer&gt;
        &lt;p&gt;
            分享编程，分享技术，积累技术
        &lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航元素" tabindex="-1"><a class="header-anchor" href="#导航元素" aria-hidden="true">#</a> 导航元素</h2><p>在 HTML 中使用nav设置导航链接。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;header&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;HTML&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;CSS&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
&lt;/header&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要区域" tabindex="-1"><a class="header-anchor" href="#主要区域" aria-hidden="true">#</a> 主要区域</h2><p>HTML5 中使用 main 标签表示页面主要区域，一个页面中main元素最好只出现一次。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
		...
    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;网站动态&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;完成签到&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;完成签到&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/article&gt;
    &lt;/main&gt;
    ...
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内容区域" tabindex="-1"><a class="header-anchor" href="#内容区域" aria-hidden="true">#</a> 内容区域</h2><p>使用 article 标签规定独立的自包含内容区域。不要被单词的表面意义所局限，article 标签表示一个独立的内容容器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;main&gt;
	&lt;article&gt;
    &lt;h2&gt;极光技术网站动态&lt;/h2&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;&quot;&gt;完成签到&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;&quot;&gt;完成签到&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
	&lt;/article&gt;
&lt;/main&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区块定义" tabindex="-1"><a class="header-anchor" href="#区块定义" aria-hidden="true">#</a> 区块定义</h2><p>使用 section 定义一个区块，一般是一组相似内容的排列组合。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;main&gt;
   &lt;article&gt;
     &lt;section&gt;
       &lt;h2&gt;HTML&lt;/h2&gt;
     &lt;/section&gt;
     &lt;section&gt;
      &lt;h2&gt;CSS&lt;/h2&gt;
     &lt;/section&gt;
   &lt;/article&gt;
&lt;/main&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附加区域" tabindex="-1"><a class="header-anchor" href="#附加区域" aria-hidden="true">#</a> 附加区域</h2><p>使用 aside 用于设置与主要区域无关的内容，比如侧面栏的广告等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;main&gt;
    &lt;article&gt;
      ...
    &lt;/article&gt;
    &lt;/main&gt;
    &lt;aside&gt;
      &lt;h2&gt;技光技术&lt;/h2&gt;
      &lt;p&gt;分享编程，分享技术，积累技术&lt;/p&gt;
    &lt;/aside&gt;
  &lt;/main&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本相关" tabindex="-1"><a class="header-anchor" href="#文本相关" aria-hidden="true">#</a> 文本相关</h2><h3 id="基本标签" tabindex="-1"><a class="header-anchor" href="#基本标签" aria-hidden="true">#</a> 基本标签</h3><h4 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> p</h4><p>p标签标记了一个段落内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;
分享编程，分享技术，积累技术
&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pre" tabindex="-1"><a class="header-anchor" href="#pre" aria-hidden="true">#</a> pre</h4><p>原样显示文本内容包括空白、换行等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;pre&gt;
        这是pre标签的显示效果
            这是换行后的内容，空白和换行都会保留
&lt;/pre&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="br" tabindex="-1"><a class="header-anchor" href="#br" aria-hidden="true">#</a> br</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在html 中回车是忽略的，使用 br 标签可以实现换行效果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> span</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>span 标签与 div 标签都是没有语义的，span 常用于对某些文本特殊控制，但该文本又没有适合的语义标签。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="描述文本" tabindex="-1"><a class="header-anchor" href="#描述文本" aria-hidden="true">#</a> 描述文本</h2><h4 id="small" tabindex="-1"><a class="header-anchor" href="#small" aria-hidden="true">#</a> small</h4><p>用于设置描述、声明等文本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;small&gt; 半年付 &lt;/small&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h4><p>标签定义日期或时间，或者两者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;time&gt; 2019-07-26 &lt;/time&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="abbr" tabindex="-1"><a class="header-anchor" href="#abbr" aria-hidden="true">#</a> abbr</h4><p>abbr标签用于描述一个缩写内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在WWW上，每一信息资源都有统一的且在网上唯一的地址，该地址就叫 &lt;abbr title=&quot;Uniform Resource Locator&quot;&gt;URL&lt;/abbr&gt; 统一资源定位符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h4><p>用于数字的下标内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>水的化学式为H&lt;sub&gt;2&lt;/sub&gt;O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="sup" tabindex="-1"><a class="header-anchor" href="#sup" aria-hidden="true">#</a> SUP</h4><p>用于数字的上标内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请计算5&lt;sup&gt;2&lt;/sup&gt;平方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="del" tabindex="-1"><a class="header-anchor" href="#del" aria-hidden="true">#</a> del</h4><p>del 标签表示删除的内容，ins 一般与 del 标签配合使用描述更新与修正。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原价 &lt;del&gt;200元&lt;/del&gt; 现价 &lt;ins&gt;100元&lt;/ins&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="s" tabindex="-1"><a class="header-anchor" href="#s" aria-hidden="true">#</a> s</h4><p>s 标签显示效果与 del 相似，但语义用来定义那些不正确、不准确或没有用的文本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;s&gt;A 太阳是方的&lt;/s&gt; &lt;br&gt;
B 地球是圆的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h4><p>用于显示代码块内容，一般需要代码格式化插件完成。</p><h4 id="progress" tabindex="-1"><a class="header-anchor" href="#progress" aria-hidden="true">#</a> progress</h4><p>用于表示完成任务的进度，当游览器不支持时显示内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;progress value=&quot;60&quot; max=&quot;100&quot;&gt;完成60%&lt;/progress&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="强调文本" tabindex="-1"><a class="header-anchor" href="#强调文本" aria-hidden="true">#</a> 强调文本</h2><h4 id="strong" tabindex="-1"><a class="header-anchor" href="#strong" aria-hidden="true">#</a> strong</h4><p>strong 标签和 em 一样，用于强调文本，但是它们的强调程度不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;strong&gt;极光技术&lt;/strong&gt;专注WEB开发技术，不断更新&lt;em&gt;视频教程&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark</h4><p>用于突出显示文本内容，类似我们生活中使用的马克笔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请认真在极光技术学习以下语言 &lt;mark&gt;PHP&lt;/mark&gt;、&lt;mark&gt;JavaScript&lt;/mark&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引用标签" tabindex="-1"><a class="header-anchor" href="#引用标签" aria-hidden="true">#</a> 引用标签</h2><p>cite 标签通常表示它所包含的文本对某个参考文献的引用，或文章作者的名子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>最新版PHP视频教程已经在 &lt;cite&gt;技光技术&lt;/cite&gt; 录制完成。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="blockquote" tabindex="-1"><a class="header-anchor" href="#blockquote" aria-hidden="true">#</a> blockquote</h4><p>blockquote 用来定义摘自另一个源的块引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下而是来自某一个大叔，对失败的认知
&lt;blockquote cite=&quot;https://www.springsongs.cn&quot;&gt;
	在坚持的人面前，失败终将被踏过。
&lt;/blockquote&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="q" tabindex="-1"><a class="header-anchor" href="#q" aria-hidden="true">#</a> q</h4><p>q 用于表示行内引用文本，在大部分浏览器中会加上引号。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>最新课程 &lt;q&gt;HTML开启WEB征途&lt;/q&gt; 已经发布了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="联系信息" tabindex="-1"><a class="header-anchor" href="#联系信息" aria-hidden="true">#</a> 联系信息</h2><h4 id="address" tabindex="-1"><a class="header-anchor" href="#address" aria-hidden="true">#</a> address</h4><p>用于设置联系地址等信息，一般将address 放在footer 标签中。</p><address> 感谢您提交建议到 jackchen3795@outlook.com </address>`,95),l=[n];function s(r,c){return t(),a("div",null,l)}const u=e(d,[["render",s],["__file","index.html.vue"]]);export{u as default};
