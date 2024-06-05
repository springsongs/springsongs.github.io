import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const t={},i=s(`<h1 id="tree" tabindex="-1"><a class="header-anchor" href="#tree" aria-hidden="true">#</a> tree</h1><p>树状图列出目录的内容</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>tree命令</strong> 以树状图列出目录的内容。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>------- 列表选项 -------
<span class="token parameter variable">-a</span>            <span class="token comment"># 显示所有文件和目录。</span>
<span class="token parameter variable">-d</span>            <span class="token comment"># 显示目录名称而非文件。</span>
<span class="token parameter variable">-l</span>            <span class="token comment"># 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。</span>
<span class="token parameter variable">-f</span>            <span class="token comment"># 在每个文件或目录之前，显示完整的相对路径名称。</span>
<span class="token parameter variable">-x</span>            <span class="token comment"># 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该目录予以排除在寻找范围外。</span>
<span class="token parameter variable">-L</span> level      <span class="token comment"># 限制目录显示层级。</span>
<span class="token parameter variable">-R</span>            <span class="token comment"># Rerun tree when max dir level reached.</span>
<span class="token parameter variable">-P</span> pattern    <span class="token comment"># &lt;范本样式&gt; 只显示符合范本样式的文件和目录名称。</span>
<span class="token parameter variable">-I</span> pattern    <span class="token comment"># Do not list files that match the given pattern.</span>
--ignore-case <span class="token comment"># Ignore case when pattern matching.</span>
<span class="token parameter variable">--matchdirs</span>   <span class="token comment"># Include directory names in -P pattern matching.</span>
<span class="token parameter variable">--noreport</span>    <span class="token comment"># Turn off file/directory count at end of tree listing.</span>
<span class="token parameter variable">--charset</span> X   <span class="token comment"># Use charset X for terminal/HTML and indentation line output.</span>
<span class="token parameter variable">--filelimit</span> <span class="token comment"># # Do not descend dirs with more than # files in them.</span>
<span class="token parameter variable">--timefmt</span> <span class="token operator">&lt;</span>f<span class="token operator">&gt;</span> <span class="token comment"># Print and format time according to the format &lt;f&gt;.</span>
<span class="token parameter variable">-o</span> filename   <span class="token comment"># Output to file instead of stdout.</span>
-------- 文件选项 ---------
<span class="token parameter variable">-q</span>            <span class="token comment"># 用“？”号取代控制字符，列出文件和目录名称。</span>
<span class="token parameter variable">-N</span>            <span class="token comment"># 直接列出文件和目录名称，包括控制字符。</span>
<span class="token parameter variable">-Q</span>            <span class="token comment"># Quote filenames with double quotes.</span>
<span class="token parameter variable">-p</span>            <span class="token comment"># 列出权限标示。</span>
<span class="token parameter variable">-u</span>            <span class="token comment"># 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。</span>
<span class="token parameter variable">-g</span>            <span class="token comment"># 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。</span>
<span class="token parameter variable">-s</span>            <span class="token comment"># 列出文件和目录大小。</span>
<span class="token parameter variable">-h</span>            <span class="token comment"># Print the size in a more human readable way.</span>
<span class="token parameter variable">--si</span>          <span class="token comment"># Like -h, but use in SI units (powers of 1000).</span>
<span class="token parameter variable">-D</span>            <span class="token comment"># 列出文件或目录的更改时间。</span>
<span class="token parameter variable">-F</span>            <span class="token comment"># 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上&quot;*&quot;，&quot;/&quot;，&quot;@&quot;，&quot;|&quot;号。</span>
<span class="token parameter variable">--inodes</span>      <span class="token comment"># Print inode number of each file.</span>
<span class="token parameter variable">--device</span>      <span class="token comment"># Print device ID number to which each file belongs.</span>
------- 排序选项 -------
<span class="token parameter variable">-v</span>            <span class="token comment"># Sort files alphanumerically by version.</span>
<span class="token parameter variable">-t</span>            <span class="token comment"># 用文件和目录的更改时间排序。</span>
<span class="token parameter variable">-c</span>            <span class="token comment"># Sort files by last status change time.</span>
<span class="token parameter variable">-U</span>            <span class="token comment"># Leave files unsorted.</span>
<span class="token parameter variable">-r</span>            <span class="token comment"># Reverse the order of the sort.</span>
<span class="token parameter variable">--dirsfirst</span>   <span class="token comment"># List directories before files (-U disables).</span>
<span class="token parameter variable">--sort</span> X      <span class="token comment"># Select sort: name,version,size,mtime,ctime.</span>
------- 图形选项 ------
<span class="token parameter variable">-i</span>            <span class="token comment"># 不以阶梯状列出文件和目录名称。</span>
<span class="token parameter variable">-A</span>            <span class="token comment"># 使用ASNI绘图字符显示树状图而非以ASCII字符组合。</span>
<span class="token parameter variable">-S</span>            <span class="token comment"># Print with CP437 (console) graphics indentation lines.</span>
<span class="token parameter variable">-n</span>            <span class="token comment"># Turn colorization off always (-C overrides).</span>
<span class="token parameter variable">-C</span>            <span class="token comment"># 在文件和目录清单加上色彩，便于区分各种类型。</span>
------- XML / HTML / JSON选项 -------
<span class="token parameter variable">-X</span>            <span class="token comment"># Prints out an XML representation of the tree.</span>
<span class="token parameter variable">-J</span>            <span class="token comment"># Prints out an JSON representation of the tree.</span>
<span class="token parameter variable">-H</span> baseHREF   <span class="token comment"># Prints out HTML format with baseHREF as top directory.</span>
<span class="token parameter variable">-T</span> string     <span class="token comment"># Replace the default HTML title and H1 header with string.</span>
<span class="token parameter variable">--nolinks</span>     <span class="token comment"># Turn off hyperlinks in HTML output.</span>
---- 杂项选项 ----
<span class="token parameter variable">--version</span>     <span class="token comment"># 输入版本信息。</span>
<span class="token parameter variable">--help</span>        <span class="token comment"># 打印使用帮助信息。</span>
--            <span class="token comment"># Options processing terminator.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>目录：执行tree指令，它会列出指定目录下的所有文件，包括子目录里的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>列出目录<code>/private/</code> 第一级文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree  /private/ <span class="token parameter variable">-L</span> <span class="token number">1</span>
/private/
├── etc
├── tftpboot
├── tmp
└── var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree <span class="token parameter variable">-I</span> node_modules <span class="token comment"># 忽略当前目录文件夹node_modules</span>
tree <span class="token parameter variable">-P</span> node_modules <span class="token comment"># 列出当前目录文件夹node_modules的目录结构</span>
tree <span class="token parameter variable">-P</span> node_modules <span class="token parameter variable">-L</span> <span class="token number">2</span> <span class="token comment"># 显示目录node_modules两层的目录树结构</span>
tree <span class="token parameter variable">-L</span> <span class="token number">2</span> <span class="token operator">&gt;</span> /home/www/tree.txt <span class="token comment"># 当前目录结果存到 tree.txt 文件中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略多个文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree <span class="token parameter variable">-I</span> <span class="token string">&#39;node_modules|icon|font&#39;</span> <span class="token parameter variable">-L</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>非树状结构列出目录<code>/private/</code>下的所有文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tree -if /private/
/private
/private/a1
/private/a2
/private/etc
/private/etc/b1
/private/etc/b2
/private/tftpboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),r=[i];function l(p,c){return e(),n("div",null,r)}const m=a(t,[["render",l],["__file","tree.html.vue"]]);export{m as default};
