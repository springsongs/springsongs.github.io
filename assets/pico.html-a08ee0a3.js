import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const i={},l=a(`<h1 id="pico" tabindex="-1"><a class="header-anchor" href="#pico" aria-hidden="true">#</a> pico</h1><p>功能强大全屏幕的文本编辑器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>pico命令</strong> 是功能强大全屏幕的文本编辑器。pico的操作简单，提供了丰富的快捷键。常用的快捷键如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Ctrl+G：获得pico的帮助信息；
Ctrl+O：保存文件内容，如果是新文件，需要输入文件名；
Ctrl+R：在当前光标位置插入一个指定的文本文件内容；
Ctrl+Y：向前翻页；
Ctrl+V：向后翻页；
Ctrl+w：对文件进行搜索；
Ctrl+K：剪切当前文件行到粘贴缓冲区；
Ctrl+U：粘贴缓冲区中的内容到当前光标所在位置；
Ctrl+C：显示当前光标位置；
Ctrl+T：调用拼写检查功能，对文档进行拼写检查；
Ctrl+J：段落重排；
Ctrl+X：退出，当文件内容发生改变时，提供是否保存修改。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pico<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b：开启置换的功能；
-d：开启删除的功能；
-e：使用完整的文件名称；
-f：支持键盘上F1、F2<span class="token punctuation">..</span>.功能键；
-g：显示光标；
-h：在线帮助；
-j：开启切换的功能；
-k：预设pico在使用剪下命令时，会把光标所在的列的内容全部删除；
-m：开启鼠标支持的功能，您可用鼠标点选命令列表；
-n<span class="token operator">&lt;</span>间隔秒数<span class="token operator">&gt;</span>：设置多久检查一次新邮件；
-o<span class="token operator">&lt;</span>工作目录<span class="token operator">&gt;</span>：设置工作目录；
-q：忽略预设值；
-r<span class="token operator">&lt;</span>编辑页宽<span class="token operator">&gt;</span>：设置编辑文件的页宽；
-s<span class="token operator">&lt;</span>拼字检查器<span class="token operator">&gt;</span>：另外指定拼字检查器；
-t：启动工具模式；
-v：启动阅读模式，用户只能观看，无法编辑文件的内容；
-w：关闭自动换行，通过这个参数可以编辑内容很长的列；
-x：关闭页面下方的命令列表；
-z：让pico可被Ctrl+z中断，暂存在后台作业里；
+<span class="token operator">&lt;</span>列表编号<span class="token operator">&gt;</span>：执行pico指令进入编辑模式时，从指定的列数开始编辑。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定要编辑的文件。</p>`,11),d=[l];function r(c,t){return s(),e("div",null,d)}const v=n(i,[["render",r],["__file","pico.html.vue"]]);export{v as default};
