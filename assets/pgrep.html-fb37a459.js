import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h1 id="pgrep" tabindex="-1"><a class="header-anchor" href="#pgrep" aria-hidden="true">#</a> pgrep</h1><p>根据用户给出的信息在当前运行进程中查找并列出符合条件的进程ID（PID）</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>pgrep命令</strong> 以名称为依据从运行进程队列中查找进程，并显示查找到的进程id。每一个进程ID以一个十进制数表示，通过一个分割字符串和下一个ID分开，默认的分割字符串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分割的可能值的集合。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pgrep<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-o：仅显示找到的最小（起始）进程号；
-n：仅显示找到的最大（结束）进程号；
-l：显示进程名称；
-P：指定父进程号；
-g：指定进程组；
-t：指定开启进程的终端；
-u：指定进程的有效用户ID。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>进程名称：指定要查找的进程名称，同时也支持类似grep指令中的匹配模式。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pgrep <span class="token parameter variable">-lo</span> httpd
<span class="token number">4557</span> httpd
 <span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pgrep -ln httpd</span>
<span class="token number">4566</span> httpd

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pgrep -l httpd</span>
<span class="token number">4557</span> httpd
<span class="token number">4560</span> httpd
<span class="token number">4561</span> httpd
<span class="token number">4562</span> httpd
<span class="token number">4563</span> httpd
<span class="token number">4564</span> httpd
<span class="token number">4565</span> httpd
<span class="token number">4566</span> httpd

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pgrep httpd 4557</span>
<span class="token number">4560</span>
<span class="token number">4561</span>
<span class="token number">4562</span>
<span class="token number">4563</span>
<span class="token number">4564</span>
<span class="token number">4565</span>
<span class="token number">4566</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[d];function t(r,p){return s(),a("div",null,l)}const u=n(i,[["render",t],["__file","pgrep.html.vue"]]);export{u as default};
