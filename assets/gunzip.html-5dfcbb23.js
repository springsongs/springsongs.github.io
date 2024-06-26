import{_ as n,p as e,q as a,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="gunzip" tabindex="-1"><a class="header-anchor" href="#gunzip" aria-hidden="true">#</a> gunzip</h1><p>用来解压缩文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>gunzip命令</strong> 用来解压缩文件。gunzip是个使用广泛的解压缩程序，它用于解开被gzip压缩过的文件，这些压缩文件预设最后的扩展名为.gz。事实上gunzip就是gzip的硬连接，因此不论是压缩或解压缩，都可通过gzip指令单独完成。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gunzip<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a或——ascii：使用ASCII文字模式；
-c或--stdout或--to-stdout：把解压后的文件输出到标准输出设备；
-f或-force：强行解开压缩文件，不理会文件名称或硬连接是否存在以及该文件是否为符号连接；
-h或——help：在线帮助；
-l或——list：列出压缩文件的相关信息；
-L或——license：显示版本与版权信息；
-n或--no-name：解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其忽略不予处理；
-N或——name：解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其回存到解开的文件上；
-q或——quiet：不显示警告信息；
-r或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-S或<span class="token operator">&lt;</span>压缩字尾字符串<span class="token operator">&gt;</span>或----suffix<span class="token operator">&lt;</span>压缩字尾字符串<span class="token operator">&gt;</span>：更改压缩字尾字符串；
-t或——test：测试压缩文件是否正确无误；
-v或——verbose：显示指令执行过程；
-V或——version：显示版本信息；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件列表：指定要解压缩的压缩包。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>首先将<code>/etc</code>目录下的所有文件以及子目录进行压缩，备份压缩包etc.zip到<code>/opt</code>目录，然后对etc.zip文件进行gzip压缩，设置gzip的压缩级别为9。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> –r /opt/etc.zip /etc
<span class="token function">gzip</span> <span class="token parameter variable">-9v</span> /opt/etc.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看上述etc.zip.gz文件的压缩信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-l</span> /opt/etc.zip.gz
compressed        uncompressed ratio uncompressed_name
<span class="token number">11938745</span>            <span class="token number">12767265</span>   <span class="token number">6.5</span>% /opt/etc.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压上述etc.zip.gz文件到当前目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mylinux ~<span class="token punctuation">]</span><span class="token comment">#gzip –d /opt/etc.zip.gz </span>
或者执行
<span class="token punctuation">[</span>root@mylinux ~<span class="token punctuation">]</span><span class="token comment">#gunzip /opt/etc.zip.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的示例可以知道<code>gzip –d</code>等价于<code>gunzip</code>命令。</p>`,18),c=[d];function t(l,p){return e(),a("div",null,c)}const o=n(i,[["render",t],["__file","gunzip.html.vue"]]);export{o as default};
