import{_ as s,p as a,q as n,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h1><p>显示每个文件和目录的磁盘使用空间</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>du命令</strong> 也是查看使用空间的，但是与df命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span><span class="token punctuation">[</span>文件<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a, <span class="token parameter variable">--all</span>                              显示目录中个别文件的大小。
-B, --block-size<span class="token operator">=</span>大小                  使用指定字节数的块
-b, <span class="token parameter variable">--bytes</span>                            显示目录或文件大小时，以byte为单位。
-c, <span class="token parameter variable">--total</span>                            除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。
-D, --dereference-args                 显示指定符号链接的源文件大小。
-H, <span class="token parameter variable">--si</span>                               与-h参数相同，但是K，M，G是以1000为换算单位。
-h, --human-readable                   以K，M，G为单位，提高信息的可读性。
-k, <span class="token parameter variable">--kilobytes</span>                        以KB<span class="token punctuation">(</span>1024bytes<span class="token punctuation">)</span>为单位输出。
-l, --count-links                      重复计算硬件链接的文件。
-m, <span class="token parameter variable">--megabytes</span>                        以MB为单位输出。
-L<span class="token operator">&lt;</span>符号链接<span class="token operator">&gt;</span>, --dereference<span class="token operator">&lt;</span>符号链接<span class="token operator">&gt;</span>  显示选项中所指定符号链接的源文件大小。
-P, --no-dereference                   不跟随任何符号链接<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
-0, <span class="token parameter variable">--null</span>                             将每个空行视作0 字节而非换行符
-S, --separate-dirs                    显示个别目录的大小时，并不含其子目录的大小。
-s, <span class="token parameter variable">--summarize</span>                        仅显示总计，只列出最后加总的值。
-x, --one-file-xystem                  以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
-X<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>, --exclude-from<span class="token operator">=</span><span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>        在<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>指定目录或文件。
--apparent-size                        显示表面用量，而并非是磁盘用量；虽然表面用量通常会小一些，但有时它会因为稀疏文件间的<span class="token string">&quot;洞&quot;</span>、内部碎片、非直接引用的块等原因而变大。
--files0-from<span class="token operator">=</span>F                        计算文件F中以NUL结尾的文件名对应占用的磁盘空间如果F的值是<span class="token string">&quot;-&quot;</span>，则从标准输入读入文件名
<span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token operator">&lt;</span>目录或文件<span class="token operator">&gt;</span>                 略过指定的目录或文件。
--max-depth<span class="token operator">=</span>N                          显示目录总计<span class="token punctuation">(</span>与--all 一起使用计算文件<span class="token punctuation">)</span>当N为指定数值时计算深度为N，等于0时等同--summarize
<span class="token parameter variable">--si</span>                                   类似-h，但在计算时使用1000 为基底而非1024
<span class="token parameter variable">--time</span>                                 显示目录或该目录子目录下所有文件的最后修改时间
<span class="token parameter variable">--time</span><span class="token operator">=</span>WORD                            显示WORD时间，而非修改时间：atime，access，use，ctime 或status
--time-style<span class="token operator">=</span>样式                      按照指定样式显示时间<span class="token punctuation">(</span>样式解释规则同<span class="token string">&quot;date&quot;</span>命令<span class="token punctuation">)</span>：full-iso，long-iso，iso，+FORMAT
<span class="token parameter variable">--help</span>                                 显示此帮助信息并退出
<span class="token parameter variable">--version</span>                              显示版本信息并退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>文件从大到小排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@VM-0-14-ubuntu:~/git-work/linux-command$ du -sh * |sort -rh
2.9M    command
1.9M    assets
148K    template
72K     package-lock.json
52K     dist
28K     build
16K     README.md
4.0K    renovate.json
4.0K    package.json
4.0K    LICENSE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只显示当前目录下子目录的大小。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@VM-0-14-ubuntu:~/git-work/linux-command$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> ./*/
<span class="token number">1</span>.9M    ./assets/
28K     ./build/
<span class="token number">2</span>.9M    ./command/
52K     ./dist/
148K    ./template/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看指定目录下文件所占的空间：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@VM-0-14-ubuntu:~/git-work/linux-command/assets$ <span class="token function">du</span> ./*
<span class="token number">144</span>     ./alfred.png
<span class="token number">452</span>     ./chrome-extensions.gif
<span class="token number">4</span>       ./dash-icon.png
<span class="token number">1312</span>    ./Linux.gif
<span class="token number">16</span>      ./qr.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只显示总和的大小:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@VM-0-14-ubuntu:~/git-work/linux-command/assets$ <span class="token function">du</span> <span class="token parameter variable">-s</span> <span class="token builtin class-name">.</span>
<span class="token number">1932</span>    <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示总和的大小且易读:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@VM-0-14-ubuntu:~/git-work/linux-command/assets$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> <span class="token builtin class-name">.</span>
<span class="token number">1</span>.9M    <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[l];function r(d,p){return a(),n("div",null,t)}const u=s(i,[["render",r],["__file","du.html.vue"]]);export{u as default};
