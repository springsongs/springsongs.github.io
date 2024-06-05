import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h1><p>用来压缩文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>gzip命令</strong> 用来压缩文件。gzip是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多处“.gz”扩展名。</p><p>gzip是在Linux系统中经常使用的一个对文件进行压缩和解压缩的命令，既方便又好用。gzip不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和tar命令一起构成Linux操作系统中比较流行的压缩文件格式。据统计，gzip命令对文本文件有60%～70%的压缩率。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gzip<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a或——ascii：使用ASCII文字模式；
-d或--decompress或----uncompress：解开压缩文件；
-f或——force：强行压缩文件。不理会文件名称或硬连接是否存在以及该文件是否为符号连接；
-h或——help：在线帮助；
-l或——list：列出压缩文件的相关信息；
-L或——license：显示版本与版权信息；
-n或--no-name：压缩文件时，不保存原来的文件名称及时间戳记；
-N或——name：压缩文件时，保存原来的文件名称及时间戳记；
-q或——quiet：不显示警告信息；
-r或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-S或<span class="token operator">&lt;</span>压缩字尾字符串<span class="token operator">&gt;</span>或----suffix<span class="token operator">&lt;</span>压缩字尾字符串<span class="token operator">&gt;</span>：更改压缩字尾字符串；
-t或——test：测试压缩文件是否正确无误；
-v或——verbose：显示指令执行过程；
-V或——version：显示版本信息；
-<span class="token operator">&lt;</span>压缩效率<span class="token operator">&gt;</span>：压缩效率是一个介于1~9的数值，预设值为“6”，指定愈大的数值，压缩效率就会愈高；
--best：此参数的效果和指定“-9”参数相同；
--fast：此参数的效果和指定“-1”参数相同。
<span class="token parameter variable">-num</span> 用指定的数字num调整压缩的速度，-1或--fast表示最快压缩方法（低压缩比），-9或--best表示最慢压缩方法（高压缩比）。系统缺省值为6。
-c或--stdout或--to-stdout：保留原始文件，生成标准输出流（结合重定向使用）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件列表：指定要压缩的文件列表。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>把test6目录下的每个文件压缩成.gz文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把上例中每个压缩的文件解压，并列出详细的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-dv</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>详细显示例1中每个压缩的文件的信息，并不解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-l</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>压缩一个tar备份文件，此时压缩文件的扩展名为.tar.gz</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-r</span> log.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>递归的压缩目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-rv</span> test6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，所有test下面的文件都变成了*.gz，目录依然存在只是目录里面的文件相应变成了*.gz.这就是压缩，和打包不同。因为是对目录操作，所以需要加上-r选项，这样也可以对子目录进行递归了。</p><p>递归地解压目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-dr</span> test6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保留原始文件，把压缩/解压流重定向到新文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-c</span> aa <span class="token operator">&gt;</span> aa.gz
<span class="token function">gzip</span> <span class="token parameter variable">-dc</span> bb.gz <span class="token operator">&gt;</span> bb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,27),r=[d];function l(t,c){return e(),s("div",null,r)}const o=a(i,[["render",l],["__file","gzip.html.vue"]]);export{o as default};
