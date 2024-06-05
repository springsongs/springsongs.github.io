import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h1 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h1><p>强大的文本搜索工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>grep</strong> （global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。用于过滤/搜索的特定字符。可使用正则表达式能配合多种命令使用，使用上十分灵活。</p><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span> <span class="token parameter variable">--text</span>  <span class="token comment"># 不要忽略二进制数据。</span>
<span class="token parameter variable">-A</span> <span class="token operator">&lt;</span>显示行数<span class="token operator">&gt;</span>   --after-context<span class="token operator">=</span><span class="token operator">&lt;</span>显示行数<span class="token operator">&gt;</span>   <span class="token comment"># 除了显示符合范本样式的那一行之外，并显示该行之后的内容。</span>
<span class="token parameter variable">-b</span> --byte-offset                           <span class="token comment"># 在显示符合范本样式的那一行之外，并显示该行之前的内容。</span>
-B<span class="token operator">&lt;</span>显示行数<span class="token operator">&gt;</span>   --before-context<span class="token operator">=</span><span class="token operator">&lt;</span>显示行数<span class="token operator">&gt;</span>   <span class="token comment"># 除了显示符合样式的那一行之外，并显示该行之前的内容。</span>
<span class="token parameter variable">-c</span> <span class="token parameter variable">--count</span>    <span class="token comment"># 计算符合范本样式的列数。</span>
-C<span class="token operator">&lt;</span>显示行数<span class="token operator">&gt;</span> <span class="token parameter variable">--context</span><span class="token operator">=</span><span class="token operator">&lt;</span>显示行数<span class="token operator">&gt;</span>或-<span class="token operator">&lt;</span>显示行数<span class="token operator">&gt;</span> <span class="token comment"># 除了显示符合范本样式的那一列之外，并显示该列之前后的内容。</span>
-d<span class="token operator">&lt;</span>进行动作<span class="token operator">&gt;</span> <span class="token parameter variable">--directories</span><span class="token operator">=</span><span class="token operator">&lt;</span>动作<span class="token operator">&gt;</span>  <span class="token comment"># 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。</span>
-e<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span> <span class="token parameter variable">--regexp</span><span class="token operator">=</span><span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>   <span class="token comment"># 指定字符串作为查找文件内容的范本样式。</span>
<span class="token parameter variable">-E</span> --extended-regexp             <span class="token comment"># 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。</span>
-f<span class="token operator">&lt;</span>范本文件<span class="token operator">&gt;</span> <span class="token parameter variable">--file</span><span class="token operator">=</span><span class="token operator">&lt;</span>规则文件<span class="token operator">&gt;</span>     <span class="token comment"># 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。</span>
<span class="token parameter variable">-F</span> --fixed-regexp   <span class="token comment"># 将范本样式视为固定字符串的列表。</span>
<span class="token parameter variable">-G</span> --basic-regexp   <span class="token comment"># 将范本样式视为普通的表示法来使用。</span>
<span class="token parameter variable">-h</span> --no-filename    <span class="token comment"># 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。</span>
<span class="token parameter variable">-H</span> --with-filename  <span class="token comment"># 在显示符合范本样式的那一列之前，标示该列的文件名称。</span>
<span class="token parameter variable">-i</span> --ignore-case    <span class="token comment"># 忽略字符大小写的差别。</span>
<span class="token parameter variable">-l</span> --file-with-matches   <span class="token comment"># 列出文件内容符合指定的范本样式的文件名称。</span>
<span class="token parameter variable">-L</span> --files-without-match <span class="token comment"># 列出文件内容不符合指定的范本样式的文件名称。</span>
<span class="token parameter variable">-n</span> --line-number         <span class="token comment"># 在显示符合范本样式的那一列之前，标示出该列的编号。</span>
<span class="token parameter variable">-P</span> --perl-regexp         <span class="token comment"># PATTERN 是一个 Perl 正则表达式</span>
<span class="token parameter variable">-q</span> --quiet或--silent     <span class="token comment"># 不显示任何信息。</span>
-R/-r  <span class="token parameter variable">--recursive</span>       <span class="token comment"># 此参数的效果和指定“-d recurse”参数相同。</span>
<span class="token parameter variable">-s</span> --no-messages  <span class="token comment"># 不显示错误信息。</span>
<span class="token parameter variable">-v</span> --revert-match <span class="token comment"># 反转查找。</span>
<span class="token parameter variable">-V</span> <span class="token parameter variable">--version</span>      <span class="token comment"># 显示版本信息。   </span>
<span class="token parameter variable">-w</span> --word-regexp  <span class="token comment"># 只显示全字符合的列。</span>
<span class="token parameter variable">-x</span> --line-regexp  <span class="token comment"># 只显示全列符合的列。</span>
<span class="token parameter variable">-y</span> <span class="token comment"># 此参数效果跟“-i”相同。</span>
<span class="token parameter variable">-o</span> <span class="token comment"># 只输出文件中匹配到的部分。</span>
<span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>num<span class="token operator">&gt;</span> --max-count<span class="token operator">=</span><span class="token operator">&lt;</span>num<span class="token operator">&gt;</span> <span class="token comment"># 找到num行结果后停止查找，用来限制匹配行数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规则表达式" tabindex="-1"><a class="header-anchor" href="#规则表达式" aria-hidden="true">#</a> 规则表达式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>^    <span class="token comment"># 锚定行的开始 如：&#39;^grep&#39;匹配所有以grep开头的行。    </span>
$    <span class="token comment"># 锚定行的结束 如：&#39;grep$&#39; 匹配所有以grep结尾的行。</span>
<span class="token builtin class-name">.</span>    <span class="token comment"># 匹配一个非换行符的字符 如：&#39;gr.p&#39;匹配gr后接一个任意字符，然后是p。    </span>
*    <span class="token comment"># 匹配零个或多个先前字符 如：&#39;*grep&#39;匹配所有一个或多个空格后紧跟grep的行。    </span>
.*   <span class="token comment"># 一起用代表任意字符。   </span>
<span class="token punctuation">[</span><span class="token punctuation">]</span>   <span class="token comment"># 匹配一个指定范围内的字符，如&#39;[Gg]rep&#39;匹配Grep和grep。    </span>
<span class="token punctuation">[</span>^<span class="token punctuation">]</span>  <span class="token comment"># 匹配一个不在指定范围内的字符，如：&#39;[^A-FH-Z]rep&#39;匹配不包含A-R和T-Z的一个字母开头，紧跟rep的行。    </span>
<span class="token punctuation">\\</span><span class="token punctuation">(</span><span class="token punctuation">..</span><span class="token punctuation">\\</span><span class="token punctuation">)</span>  <span class="token comment"># 标记匹配字符，如&#39;\\(love\\)&#39;，love被标记为1。    </span>
<span class="token punctuation">\\</span><span class="token operator">&lt;</span>      <span class="token comment"># 锚定单词的开始，如:&#39;\\&lt;grep&#39;匹配包含以grep开头的单词的行。    </span>
<span class="token punctuation">\\</span><span class="token operator">&gt;</span>      <span class="token comment"># 锚定单词的结束，如&#39;grep\\&gt;&#39;匹配包含以grep结尾的单词的行。    </span>
x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m<span class="token punctuation">\\</span><span class="token punctuation">}</span>  <span class="token comment"># 重复字符x，m次，如：&#39;0\\{5\\}&#39;匹配包含5个o的行。    </span>
x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m,<span class="token punctuation">\\</span><span class="token punctuation">}</span>   <span class="token comment"># 重复字符x,至少m次，如：&#39;o\\{5,\\}&#39;匹配至少有5个o的行。    </span>
x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m,n<span class="token punctuation">\\</span><span class="token punctuation">}</span>  <span class="token comment"># 重复字符x，至少m次，不多于n次，如：&#39;o\\{5,10\\}&#39;匹配5--10个o的行。   </span>
<span class="token punctuation">\\</span>w    <span class="token comment"># 匹配文字和数字字符，也就是[A-Za-z0-9]，如：&#39;G\\w*p&#39;匹配以G后跟零个或多个文字或数字字符，然后是p。   </span>
<span class="token punctuation">\\</span>W    <span class="token comment"># \\w的反置形式，匹配一个或多个非单词字符，如点号句号等。   </span>
<span class="token punctuation">\\</span>b    <span class="token comment"># 单词锁定符，如: &#39;\\bgrep\\b&#39;只匹配grep。  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grep命令常见用法" tabindex="-1"><a class="header-anchor" href="#grep命令常见用法" aria-hidden="true">#</a> grep命令常见用法</h2><p>在文件中搜索一个单词，命令会返回一个包含 <strong>“match_pattern”</strong> 的文本行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> match_pattern file_name
<span class="token function">grep</span> <span class="token string">&quot;match_pattern&quot;</span> file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在多个文件中查找：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&quot;match_pattern&quot;</span> file_1 file_2 file_3 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出除之外的所有行 <strong>-v</strong> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;match_pattern&quot;</span> file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>标记匹配颜色 <strong>--color=auto</strong> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&quot;match_pattern&quot;</span> file_name <span class="token parameter variable">--color</span><span class="token operator">=</span>auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用正则表达式 <strong>-E</strong> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;[1-9]+&quot;</span>
<span class="token comment"># 或</span>
<span class="token function">egrep</span> <span class="token string">&quot;[1-9]+&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用正则表达式 <strong>-P</strong> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-P</span> <span class="token string">&quot;(\\d{3}\\-){2}\\d{4}&quot;</span> file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只输出文件中匹配到的部分 <strong>-o</strong> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> this is a <span class="token builtin class-name">test</span> line. <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;[a-z]+\\.&quot;</span>
line.

<span class="token builtin class-name">echo</span> this is a <span class="token builtin class-name">test</span> line. <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;[a-z]+\\.&quot;</span>
line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统计文件或者文本中包含匹配字符串的行数 <strong>-c</strong> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;text&quot;</span> file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出包含匹配字符串的行数 <strong>-n</strong> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&quot;text&quot;</span> <span class="token parameter variable">-n</span> file_name
<span class="token comment"># 或</span>
<span class="token function">cat</span> file_name <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;text&quot;</span> <span class="token parameter variable">-n</span>

<span class="token comment">#多个文件</span>
<span class="token function">grep</span> <span class="token string">&quot;text&quot;</span> <span class="token parameter variable">-n</span> file_1 file_2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印样式匹配所位于的字符或字节偏移：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> gun is not unix <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-b</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;not&quot;</span>
<span class="token number">7</span>:not
<span class="token comment">#一行中字符串的字符便宜是从该行的第一个字符开始计算，起始值为0。选项  **-b -o**  一般总是配合使用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索多个文件并查找匹配文本在哪些文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-l</span> <span class="token string">&quot;text&quot;</span> file1 file2 file3<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="grep递归搜索文件" tabindex="-1"><a class="header-anchor" href="#grep递归搜索文件" aria-hidden="true">#</a> grep递归搜索文件</h3><p>在多级目录中对文本进行递归搜索：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&quot;text&quot;</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-n</span>
<span class="token comment"># .表示当前目录。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略匹配样式中的字符大小写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;HELLO&quot;</span>
<span class="token comment"># hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项 <strong>-e</strong> 制动多个匹配样式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> this is a text line <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;is&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;line&quot;</span> <span class="token parameter variable">-o</span>
is
line

<span class="token comment">#也可以使用 **-f** 选项来匹配多个样式，在样式文件中逐行写出需要匹配的字符。</span>
<span class="token function">cat</span> patfile
aaa
bbb

<span class="token builtin class-name">echo</span> aaa bbb ccc ddd eee <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-f</span> patfile <span class="token parameter variable">-o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在grep搜索结果中包括或者排除指定文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只在目录中所有的.php和.html文件中递归搜索字符&quot;main()&quot;</span>
<span class="token function">grep</span> <span class="token string">&quot;main()&quot;</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--include</span> *.<span class="token punctuation">{</span>php,html<span class="token punctuation">}</span>

<span class="token comment"># 在搜索结果中排除所有README文件</span>
<span class="token function">grep</span> <span class="token string">&quot;main()&quot;</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--exclude</span> <span class="token string">&quot;README&quot;</span>

<span class="token comment"># 在搜索结果中排除filelist文件列表里的文件</span>
<span class="token function">grep</span> <span class="token string">&quot;main()&quot;</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-r</span> --exclude-from filelist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用0值字节后缀的grep与xargs：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 测试文件：</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;aaa&quot;</span> <span class="token operator">&gt;</span> file1
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bbb&quot;</span> <span class="token operator">&gt;</span> file2
<span class="token builtin class-name">echo</span> <span class="token string">&quot;aaa&quot;</span> <span class="token operator">&gt;</span> file3

<span class="token function">grep</span> <span class="token string">&quot;aaa&quot;</span> file* <span class="token parameter variable">-lZ</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">rm</span>

<span class="token comment"># 执行后会删除file1和file3，grep输出用-Z选项来指定以0值字节作为终结符文件名（\\0），xargs -0 读取输入并用0值字节终结符分隔文件名，然后删除匹配文件，-Z通常和-l结合使用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grep静默输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">&quot;test&quot;</span> filename
<span class="token comment"># 不会输出任何信息，如果命令运行成功返回0，失败则返回非0值。一般用于条件测试。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打印出匹配文本之前或者之后的行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示匹配某个结果之后的3行，使用 -A 选项：</span>
<span class="token function">seq</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;5&quot;</span> <span class="token parameter variable">-A</span> <span class="token number">3</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>

<span class="token comment"># 显示匹配某个结果之前的3行，使用 -B 选项：</span>
<span class="token function">seq</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;5&quot;</span> <span class="token parameter variable">-B</span> <span class="token number">3</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>

<span class="token comment"># 显示匹配某个结果的前三行和后三行，使用 -C 选项：</span>
<span class="token function">seq</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;5&quot;</span> <span class="token parameter variable">-C</span> <span class="token number">3</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>

<span class="token comment"># 如果匹配结果有多个，会用“--”作为各匹配结果之间的分隔符：</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;a<span class="token entity" title="\\n">\\n</span>b<span class="token entity" title="\\n">\\n</span>c<span class="token entity" title="\\n">\\n</span>a<span class="token entity" title="\\n">\\n</span>b<span class="token entity" title="\\n">\\n</span>c&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> a <span class="token parameter variable">-A</span> <span class="token number">1</span>
a
b
--
a
b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),l=[t];function i(r,o){return n(),a("div",null,l)}const d=s(p,[["render",i],["__file","grep.html.vue"]]);export{d as default};
