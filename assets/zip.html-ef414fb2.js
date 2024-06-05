import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},l=n(`<h1 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> zip</h1><p>可以用来解压缩文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>zip命令</strong> 可以用来解压缩文件，或者对文件进行打包操作。zip是个使用广泛的压缩程序，文件经它压缩后会另外产生具有“.zip”扩展名的压缩文件。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zip<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-A：调整可执行的自动解压缩文件；
-b<span class="token operator">&lt;</span>工作目录<span class="token operator">&gt;</span>：指定暂时存放文件的目录；
-c：替每个被压缩的文件加上注释；
-d：从压缩文件内删除指定的文件；
-D：压缩文件内不建立目录名称；
-f：此参数的效果和指定“-u”参数类似，但不仅更新既有文件，如果某些文件原本不存在于压缩文件内，使用本参数会一并将其加入压缩文件中；
-F：尝试修复已损坏的压缩文件；
-g：将文件压缩后附加在已有的压缩文件之后，而非另行建立新的压缩文件；
-h：在线帮助；
-i<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：只压缩符合条件的文件；
-j：只保存文件名称及其内容，而不存放任何目录名称；
-J：删除压缩文件前面不必要的数据；
-k：使用MS-DOS兼容格式的文件名称；
-l：压缩文件时，把LF字符置换成LF+CR字符；
-ll：压缩文件时，把LF+cp字符置换成LF字符；
-L：显示版权信息；
-m：将文件压缩并加入压缩文件后，删除原始文件，即把文件移到压缩文件中；
-n<span class="token operator">&lt;</span>字尾字符串<span class="token operator">&gt;</span>：不压缩具有特定字尾字符串的文件；
-o：以压缩文件内拥有最新更改时间的文件为准，将压缩文件的更改时间设成和该文件相同；
-q：不显示指令执行过程；
-r：递归处理，将指定目录下的所有文件和子目录一并处理；
-S：包含系统和隐藏文件；
-t<span class="token operator">&lt;</span>日期时间<span class="token operator">&gt;</span>：把压缩文件的日期设成指定的日期；
-T：检查备份文件内的每个文件是否正确无误；
-u：更换较新的文件到压缩文件内；
-v：显示指令执行过程或显示版本信息；
-V：保存VMS操作系统的文件属性；
-w：在文件名称里假如版本编号，本参数仅在VMS操作系统下有效；
-x<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：压缩时排除符合条件的文件；
-X：不保存额外的文件属性；
-y：直接保存符号连接，而非该链接所指向的文件，本参数仅在UNIX之类的系统下有效；
-z：替压缩文件加上注释；
-$：保存第一个被压缩文件所在磁盘的卷册名称；
-<span class="token operator">&lt;</span>压缩效率<span class="token operator">&gt;</span>：压缩效率是一个介于1~9的数值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>zip压缩包：指定要创建的zip压缩包；</li><li>文件列表：指定要压缩的文件列表。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将<code>/home/Blinux/html/</code>这个目录下所有文件和文件夹打包为当前目录下的html.zip：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-r</span> html.zip /home/Blinux/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令操作是将绝对地址的文件及文件夹进行压缩，以下给出压缩相对路径目录，比如目前在Bliux这个目录下，执行以下操作可以达到以上同样的效果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-r</span> html.zip html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如现在我的html目录下，我操作的zip压缩命令是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-r</span> html.zip *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>压缩 <code>example/basic/</code> 目录内容到 <code>basic.zip</code> 压缩包中 <code>-x</code> 指定排除目录，注意没有双引号将不起作用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-r</span> basic.zip example/basic/ <span class="token parameter variable">-x</span> <span class="token string">&quot;example/basic/node_modules/*&quot;</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;example/basic/build/*&quot;</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;example/basic/coverage/*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面压缩解压出来，内容存放在 <code>example/basic/</code>， 如果想存放到根目录，进入目录进行压缩，目前没有找到一个合适的参数来解决此问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd example/basic/ &amp;&amp; zip -r basic.zip . -x &quot;node_modules/*&quot; -x &quot;build/*&quot; -x &quot;coverage/*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>压缩效率选择:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-9</span> <span class="token comment"># 1-9 faster-&gt;better</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 <code>public_html</code> 目录下忽略所有文件和文件夹，排除包括文本 <code>backup</code> 的所有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">zip</span> <span class="token parameter variable">-r</span> public_html.zip public_html <span class="token parameter variable">-x</span> *backup*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>httpdocs</code> 目录忽略 <code>.svn</code> 文件或 <code>git</code> 的文件和目录下创建所有文件的归档。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">zip</span> <span class="token parameter variable">-r</span> httpdocs.zip httpdocs <span class="token parameter variable">--exclude</span> *.svn* <span class="token parameter variable">--exclude</span> *.git*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>httpdocs</code> 目录忽略的所有文件，并与 <code>.log</code> 结尾的目录下创建所有文件的归档。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">zip</span> <span class="token parameter variable">-r</span> httpdocs.zip httpdocs <span class="token parameter variable">--exclude</span> <span class="token string">&quot;*.log&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h3><p>CentOS7中命令找不到</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-Bash: Unzip: Command Not Found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">unzip</span> <span class="token function">zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34),d=[l];function r(c,p){return e(),s("div",null,d)}const o=a(i,[["render",r],["__file","zip.html.vue"]]);export{o as default};
