import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h1 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h1><p>用来探测给定文件的类型</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>file命令</strong> 用来探测给定文件的类型。file命令对文件的检查分为文件系统、魔法幻数检查和语言检查3个过程。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>file<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b：列出辨识结果时，不显示文件名称；
-c：详细显示指令执行过程，便于排错或分析程序执行的情形；
-f<span class="token operator">&lt;</span>名称文件<span class="token operator">&gt;</span>：指定名称文件，其内容有一个或多个文件名称时，让file依序辨识这些文件，格式为每列一个文件名称；
-L：直接显示符号连接所指向的文件类别；
-m<span class="token operator">&lt;</span>魔法数字文件<span class="token operator">&gt;</span>：指定魔法数字文件；
-v：显示版本信息；
-z：尝试去解读压缩文件的内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：要确定类型的文件列表，多个文件之间使用空格分开，可以使用shell通配符匹配多个文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>显示文件类型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file install.log</span>
install.log: UTF-8 Unicode text

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file -b install.log      &lt;== 不显示文件名称</span>
UTF-8 Unicode text

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file -i install.log      &lt;== 显示MIME类别。</span>
install.log: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file -b -i install.log</span>
text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示符号链接的文件类型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l /var/mail</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">10</span> 08-13 00:11 /var/mail -<span class="token operator">&gt;</span> spool/mail

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file /var/mail</span>
/var/mail: symbolic <span class="token function">link</span> to \`spool/mail&#39;

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file -L /var/mail</span>
/var/mail: directory

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file /var/spool/mail</span>
/var/spool/mail: directory

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file -L /var/spool/mail</span>
/var/spool/mail: directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[i];function o(c,p){return a(),s("div",null,t)}const d=n(l,[["render",o],["__file","file.html.vue"]]);export{d as default};
