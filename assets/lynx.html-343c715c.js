import{_ as n,p as s,q as e,a1 as i}from"./framework-5866ffd3.js";const a={},l=i(`<h1 id="lynx" tabindex="-1"><a class="header-anchor" href="#lynx" aria-hidden="true">#</a> lynx</h1><p>纯文本模式的网页浏览器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lynx命令</strong> 是纯文本模式的网页浏览器，不支持图形、音视频等多媒体信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lynx<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-case：在搜索字符串时，区分大小写；
-ftp：关闭ftp功能；
-nobrowse：关闭目录浏览功能；
-noclor：关闭色彩显示模式；
-reload：更新代理服务器的缓存，只对首页有效；
--color：如果系统支持彩色模式，则激活彩色模式；
--help：显示指令的帮助信息；
--versiom：显示指令的版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>URL：指定要访问的网站的URL地址。</p><h2 id="内部命令" tabindex="-1"><a class="header-anchor" href="#内部命令" aria-hidden="true">#</a> 内部命令</h2><p><strong>移动命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>下方向键：页面上的下一个链接<span class="token punctuation">(</span>用高亮度显示<span class="token punctuation">)</span>。
上方向键：页面上的前一个链接<span class="token punctuation">(</span>用高亮度显示<span class="token punctuation">)</span>。
回车和右方向键：跳转到链接指向的地址。
左方向键：回到上一个页面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>滚动命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+、Page-Down、Space、Ctrl+f：向下翻页。
-、Page-Up、b、Ctrl+b：向上翻页。
Ctrl+a：移动到当前页的最前面。
Ctrl+e：移动到当前页的最后面。
Ctrl+n：向下翻两行。
Ctrl+p：往回翻两行。
<span class="token punctuation">)</span>：向下翻半页。
<span class="token punctuation">(</span>：往回翻半页。
<span class="token comment">#：回到当前页的 Toolbar 或 Banner。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文件操作命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>c：建立一个新文件。
d：下载选中的文件。
E：编辑选中的文件。
f：为当前文件显示一个选项菜单。
m：修改选中文件的名字或位置。
r：删除选中的文件。
t：Tag highlighted file。
u：上载一个文件到当前目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其他命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>?、h：帮助。
a：把当前链接加入到一个书签文件里。
c：向页面的拥有者发送意见或建议。
d：下载当前链接。
e：编辑当前文件。
g：跳转到一个用户 指定的URL或文件。
G：编辑当前页的URL，并跳转到这个URL。
i：显示文档索引。
j：执行预先定义的“短”命令。
k：显示键盘命令列表。
l：列出当前页上所有链接的地址。
m：回到首页 。
o：设置选项。
p：把当前页输出到文件，e-mail，打印机或其他地方。
q：退出。
/：在当前页内查找字符串。
s：在外部搜索输入的字符串。
n：搜索下一个。
v：查看一个书签文件。
V：跳转到访问过的地址。
x：不使用缓存。
z：停止当前传输。
<span class="token punctuation">[</span>backspace<span class="token punctuation">]</span>：跳转到历史页<span class="token punctuation">(</span>同 V 命令<span class="token punctuation">)</span>。
<span class="token operator">=</span>：显示当前页的信息。
：查看当前页的源代码。
<span class="token operator">!</span>：回到shell提示符下。
_：清除当前任务的所有授权信息。
*：图形链接模式的切换开关。
@：8位传输模式或CJK模式的切换开关。
<span class="token punctuation">[</span>：pseudo_inlines 模式的切换开关。
<span class="token punctuation">]</span>：为当前页或当前链接发送一个“head”请求。
Ctrl+r：重新装如当前页并且刷新屏幕。
Ctrl+w：刷新屏幕。
Ctrl+u：删除输入的行。
Ctrl+g：取消输入或者传送。
Ctrl+t：跟踪模式的切换开关。
<span class="token punctuation">;</span>：看Lynx对当前任务的跟踪记录。
Ctrl+k：调用 Cookie Jar 页。
数字键：到后面的第 n 个链接。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),d=[l];function r(c,v){return s(),e("div",null,d)}const t=n(a,[["render",r],["__file","lynx.html.vue"]]);export{t as default};
