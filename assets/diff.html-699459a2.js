import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> diff</h1><p>比较给定的两个文件的不同</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>diff命令</strong> 在最简单的情况下，比较给定的两个文件的不同。如果使用“-”代替“文件”参数，则要比较的内容将来自标准输入。diff命令是以逐行的方式，比较文本文件的异同处。如果该命令指定进行目录的比较，则将会比较该目录中具有相同文件名的文件，而不会对其子目录文件进行任何比较操作。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>diff<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>：指定要显示多少行的文本。此参数必须与-c或-u参数一并使用；
-a或——text：diff预设只会逐行比较文本文件；
-b或--ignore-space-change：不检查空格字符的不同；
-B或--ignore-blank-lines：不检查空白行；
-c：显示全部内容，并标出不同之处；
-C<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>或--context<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>：与执行“-c-<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>”指令相同；
-d或——minimal：使用不同的演算法，以小的单位来做比较；
-D<span class="token operator">&lt;</span>巨集名称<span class="token operator">&gt;</span>或ifdef<span class="token operator">&lt;</span>巨集名称<span class="token operator">&gt;</span>：此参数的输出格式可用于前置处理器巨集；
-e或——ed：此参数的输出格式可用于ed的script文件；
-f或-forward-ed：输出的格式类似ed的script文件，但按照原来文件的顺序来显示不同处；
-H或--speed-large-files：比较大文件时，可加快速度；
-l<span class="token operator">&lt;</span>字符或字符串<span class="token operator">&gt;</span>或--ignore-matching-lines<span class="token operator">&lt;</span>字符或字符串<span class="token operator">&gt;</span>：若两个文件在某几行有所不同，而之际航同时都包含了选项中指定的字符或字符串，则不显示这两个文件的差异；
-i或--ignore-case：不检查大小写的不同；
-l或——paginate：将结果交由pr程序来分页；
-n或——rcs：将比较结果以RCS的格式来显示；
-N或--new-file：在比较目录时，若文件A仅出现在某个目录中，预设会显示：Only in目录，文件A 若使用-N参数，则diff会将文件A 与一个空白的文件比较；
-p：若比较的文件为C语言的程序码文件时，显示差异所在的函数名称；
-P或--unidirectional-new-file：与-N类似，但只有当第二个目录包含了第一个目录所没有的文件时，才会将这个文件与空白的文件做比较；
-q或--brief：仅显示有无差异，不显示详细的信息；
-r或——recursive：比较子目录中的文件；
-s或--report-identical-files：若没有发现任何差异，仍然显示信息；
-S<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>或--starting-file<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：在比较目录时，从指定的文件开始比较；
-t或--expand-tabs：在输出时，将tab字符展开；
-T或--initial-tab：在每行前面加上tab字符以便对齐；
-u，-U<span class="token operator">&lt;</span>列数<span class="token operator">&gt;</span>或--unified<span class="token operator">=</span><span class="token operator">&lt;</span>列数<span class="token operator">&gt;</span>：以合并的方式来显示文件内容的不同；
-v或——version：显示版本信息；
-w或--ignore-all-space：忽略全部的空格字符；
-W<span class="token operator">&lt;</span>宽度<span class="token operator">&gt;</span>或--width<span class="token operator">&lt;</span>宽度<span class="token operator">&gt;</span>：在使用-y参数时，指定栏宽；
-x<span class="token operator">&lt;</span>文件名或目录<span class="token operator">&gt;</span>或--exclude<span class="token operator">&lt;</span>文件名或目录<span class="token operator">&gt;</span>：不比较选项中所指定的文件或目录；
-X<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>或--exclude-from<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>；您可以将文件或目录类型存成文本文件，然后在<span class="token operator">=</span><span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>中指定此文本文件；
-y或--side-by-side：以并列的方式显示文件的异同之处；
--help：显示帮助；
--left-column：在使用-y参数时，若两个文件某一行内容相同，则仅在左侧的栏位显示该行内容；
--suppress-common-lines：在使用-y参数时，仅显示不同之处。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>文件1：指定要比较的第一个文件；</li><li>文件2：指定要比较的第二个文件。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将目录<code>/usr/li</code>下的文件&quot;test.txt&quot;与当前目录下的文件&quot;test.txt&quot;进行比较，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">diff</span> /usr/li test.txt     <span class="token comment">#使用diff指令对文件进行比较</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令执行后，会将比较后的不同之处以指定的形式列出，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>n1 a n3,n4  
n1,n2 d n3  
n1,n2 c n3,n4 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，字母&quot;a&quot;、&quot;d&quot;、&quot;c&quot;分别表示添加、删除及修改操作。而&quot;n1&quot;、&quot;n2&quot;表示在文件1中的行号，&quot;n3&quot;、&quot;n4&quot;表示在文件2中的行号。</p><p>注意：以上说明指定了两个文件中不同处的行号及其相应的操作。在输出形式中，每一行后面将跟随受到影响的若干行。其中，以&lt;开始的行属于文件1，以&gt;开始的行属于文件2。</p>`,17),l=[t];function r(o,d){return s(),a("div",null,l)}const c=n(i,[["render",r],["__file","diff.html.vue"]]);export{c as default};
