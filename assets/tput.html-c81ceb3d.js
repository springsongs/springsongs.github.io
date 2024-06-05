import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h1 id="tput" tabindex="-1"><a class="header-anchor" href="#tput" aria-hidden="true">#</a> tput</h1><p>通过terminfo数据库对终端会话进行初始化和操作</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>tput命令</strong> 将通过 terminfo 数据库对您的终端会话进行初始化和操作。通过使用 tput，您可以更改几项终端功能，如移动或更改光标、更改文本属性，以及清除终端屏幕的特定区域。</p><h3 id="什么是-terminfo-数据库" tabindex="-1"><a class="header-anchor" href="#什么是-terminfo-数据库" aria-hidden="true">#</a> 什么是 terminfo 数据库？</h3><p>UNIX 系统上的 terminfo 数据库用于定义终端和打印机的属性及功能，包括各设备（例如，终端和打印机）的行数和列数以及要发送至该设备的文本的属性。UNIX 中的几个常用程序都依赖 terminfo 数据库提供这些属性以及许多其他内容，其中包括 vi 和 emacs 编辑器以及 curses 和 man 程序。</p><p>与 UNIX 中的大多数命令一样，tput 命令既可以用在 shell 命令行中也可以用在 shell 脚本中。为让您更好地理解 tput，本文首先从命令行讲起，然后紧接着讲述 shell 脚本示例。</p><p><strong>光标属性</strong></p><p>在 UNIX shell 脚本中或在命令行中，移动光标或更改光标属性可能是非常有用的。有些情况下，您可能需要输入敏感信息（如密码），或在屏幕上两个不同的区域输入信息。在此类情况下，使用 tput 可能会对您有所帮助。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tput <span class="token function">clear</span> <span class="token comment"># 清屏</span>
tput sc <span class="token comment"># 保存当前光标位置</span>
tput cup <span class="token number">10</span> <span class="token number">13</span> <span class="token comment"># 将光标移动到 row col</span>
tput civis <span class="token comment"># 光标不可见</span>
tput cnorm <span class="token comment"># 光标可见</span>
tput rc <span class="token comment"># 显示输出</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>移动光标</strong></p><p>使用 tput 可以方便地实现在各设备上移动光标的位置。通过在 tput 中使用 cup 选项，或光标位置，您可以在设备的各行和各列中将光标移动到任意 X 或 Y 坐标。设备左上角的坐标为 (0,0)。</p><p>要在设备上将光标移动到第 5 列 (X) 的第 1 行 (Y)，只需执行 tput cup 5 1。另一个示例是 tput cup 23 45，此命令将使光标移动到第 23 列上的第 45 行。</p><p><strong>移动光标并显示信息</strong></p><p>另一种有用的光标定位技巧是移动光标，执行用于显示信息的命令，然后返回到前一光标位置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>tput sc <span class="token punctuation">;</span> tput cup <span class="token number">23</span> <span class="token number">45</span> <span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> “Input from tput/echo at <span class="token number">23</span>/45” <span class="token punctuation">;</span> tput rc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面我们分析一下 subshell 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tput sc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>必须首先保存当前的光标位置。要保存当前的光标位置，请包括 sc 选项或“save cursor position”。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tput cup <span class="token number">23</span> <span class="token number">45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在保存了光标位置后，光标坐标将移动到 (23,45)。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> “Input from tput/echo at <span class="token number">23</span>/45”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将信息显示到 stdout 中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tput rc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在显示了这些信息之后，光标必须返回到使用 tput sc 保存的原始位置。要使光标返回到其上次保存的位置，请包括 rc 选项或“restore cursor position”。</p><p>注意：由于本文首先详细介绍了通过命令行执行 tput，因此您可能会觉得在自己的 subshell 中执行命令要比单独执行每条命令然后在每条命令执行之前显示提示更简洁。</p><p><strong>更改光标的属性</strong></p><p>在向某一设备显示数据时，很多时候您并不希望看到光标。将光标转换为不可见可以使数据滚动时的屏幕看起来更整洁。要使光标不可见，请使用 civis 选项（例如，tput civis）。在数据完全显示之后，您可以使用 cnorm 选项将光标再次转变为可见。</p><p><strong>文本属性</strong></p><p>更改文本的显示方式可以让用户注意到菜单中的一组词或警惕用户注意某些重要的内容。您可以通过以下方式更改文本属性：使文本加粗、在文本下方添加下划线、更改背景颜色和前景颜色，以及逆转颜色方案等。</p><p>要更改文本的颜色，请使用 setb 选项（用于设置背景颜色）和 setf 选项（用于设置前景颜色）以及在 terminfo 数据库中分配的颜色数值。通常情况下，分配的数值与颜色的对应关系如下，但是可能会因 UNIX 系统的不同而异：</p><ul><li>0：黑色</li><li>1：蓝色</li><li>2：绿色</li><li>3：青色</li><li>4：红色</li><li>5：洋红色</li><li>6：黄色</li><li>7：白色</li></ul><p>执行以下示例命令可以将背景颜色更改为黄色，将前景颜色更改为红色：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tput setb <span class="token number">6</span> tput setf <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要反显当前的颜色方案，只需执行<code>tput rev</code>。</p><p>有时，仅为文本着色还不够，也就是说，您想要通过另一种方式引起用户的注意。可以通过两种方式达到这一目的：一是将文本设置为粗体，二是为文本添加下划线。</p><p>要将文本更改为粗体，请使用 bold 选项。要开始添加下划线，请使用 smul 选项。在完成显示带下划线的文本后，请使用 rmul 选项。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>使输出的字符串有颜色，底色，加粗：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">printf</span> <span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">2</span><span class="token punctuation">;</span> tput bold<span class="token variable">)</span></span><span class="token string">&#39;color show\\n\\n&#39;</span><span class="token variable"><span class="token variable">$(</span>tput sgr0<span class="token variable">)</span></span>

<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span>tput setaf $i<span class="token variable">)</span></span><span class="token string">&quot;show me the money&quot;</span><span class="token variable"><span class="token variable">$(</span>tput sgr0<span class="token variable">)</span></span>
<span class="token keyword">done</span>

<span class="token builtin class-name">printf</span> <span class="token string">&#39;\\n&#39;</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">2</span><span class="token punctuation">;</span> tput setab <span class="token number">0</span><span class="token punctuation">;</span> tput bold<span class="token variable">)</span></span><span class="token string">&#39;background color show&#39;</span><span class="token variable"><span class="token variable">$(</span>tput sgr0<span class="token variable">)</span></span><span class="token string">&#39;\\n\\n&#39;</span>

<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>j<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span>j<span class="token operator">--</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span>tput setaf $i<span class="token punctuation">;</span> tput setab $j<span class="token punctuation">;</span> tput bold<span class="token variable">)</span></span><span class="token string">&quot;show me the money&quot;</span><span class="token variable"><span class="token variable">$(</span>tput sgr0<span class="token variable">)</span></span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出格式控制函数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># $1 str       print string</span>
<span class="token comment"># $2 color     0-7 设置颜色</span>
<span class="token comment"># $3 bgcolor   0-7 设置背景颜色</span>
<span class="token comment"># $4 bold      0-1 设置粗体</span>
<span class="token comment"># $5 underline 0-1 设置下划线</span>

<span class="token keyword">function</span> <span class="token function-name function">format_output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">str</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">color</span><span class="token operator">=</span><span class="token variable">$2</span>
    <span class="token assign-left variable">bgcolor</span><span class="token operator">=</span><span class="token variable">$3</span>
    <span class="token assign-left variable">bold</span><span class="token operator">=</span><span class="token variable">$4</span>
    <span class="token assign-left variable">underline</span><span class="token operator">=</span><span class="token variable">$5</span>
    <span class="token assign-left variable">normal</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput sgr0<span class="token variable">)</span></span>

    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$color</span>&quot;</span> <span class="token keyword">in</span>
        <span class="token number">0</span><span class="token operator">|</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token operator">|</span><span class="token number">4</span><span class="token operator">|</span><span class="token number">5</span><span class="token operator">|</span><span class="token number">6</span><span class="token operator">|</span><span class="token number">7</span><span class="token punctuation">)</span>
            <span class="token assign-left variable">setcolor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf $color<span class="token punctuation">;</span><span class="token variable">)</span></span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token assign-left variable">setcolor</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>

    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$bgcolor</span>&quot;</span> <span class="token keyword">in</span>
        <span class="token number">0</span><span class="token operator">|</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token operator">|</span><span class="token number">4</span><span class="token operator">|</span><span class="token number">5</span><span class="token operator">|</span><span class="token number">6</span><span class="token operator">|</span><span class="token number">7</span><span class="token punctuation">)</span>
            <span class="token assign-left variable">setbgcolor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setab $bgcolor<span class="token punctuation">;</span><span class="token variable">)</span></span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token assign-left variable">setbgcolor</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$bold</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">setbold</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput bold<span class="token punctuation">;</span><span class="token variable">)</span></span>
    <span class="token keyword">else</span>
        <span class="token assign-left variable">setbold</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$underline</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">setunderline</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput smul<span class="token punctuation">;</span><span class="token variable">)</span></span>
    <span class="token keyword">else</span>
        <span class="token assign-left variable">setunderline</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">$setcolor</span><span class="token variable">$setbgcolor</span><span class="token variable">$setbold</span><span class="token variable">$setunderline</span><span class="token variable">$str</span><span class="token variable">$normal</span><span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

format_output <span class="token string">&quot;Yesterday Once more&quot;</span> <span class="token number">2</span> <span class="token number">5</span> <span class="token number">1</span> <span class="token number">1</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>光标属性例子：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># clear the screen</span>
tput <span class="token function">clear</span>
<span class="token comment"># Move cursor to screen location X,Y (top left is 0,0)</span>
tput cup <span class="token number">3</span> <span class="token number">15</span>
<span class="token comment"># set a foreground colour using ANSI escape</span>
tput setaf <span class="token number">3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;XYX Corp LTD.&quot;</span>
tput sgr0
tput cup <span class="token number">5</span> <span class="token number">17</span>
<span class="token comment"># Set reverse video mode</span>
tput <span class="token function">rev</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;M A I N - M E N U&quot;</span>
tput sgr0
tput cup <span class="token number">7</span> <span class="token number">15</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1\\. User Management&quot;</span>
tput cup <span class="token number">8</span> <span class="token number">15</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;2\\. service Management&quot;</span>
tput cup <span class="token number">9</span> <span class="token number">15</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;3\\. Process Management&quot;</span>
tput cup <span class="token number">10</span> <span class="token number">15</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;4\\. Backup&quot;</span>
<span class="token comment"># Set bold mode</span>
tput bold
tput cup <span class="token number">12</span> <span class="token number">15</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter your choice [1-4] &quot;</span> choice
tput <span class="token function">clear</span>
tput sgr0
tput rc

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),l=[t];function i(o,c){return n(),a("div",null,l)}const u=s(p,[["render",i],["__file","tput.html.vue"]]);export{u as default};
