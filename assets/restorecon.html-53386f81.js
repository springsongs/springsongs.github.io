import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h1 id="restorecon" tabindex="-1"><a class="header-anchor" href="#restorecon" aria-hidden="true">#</a> restorecon</h1><p>恢复文件的安全上下文</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>restorecon命令</strong> 用来恢复SELinux文件属性即恢复文件的安全上下文。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>restorecon <span class="token punctuation">[</span>-iFnrRv<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e excludedir <span class="token punctuation">]</span> <span class="token punctuation">[</span>-o filename <span class="token punctuation">]</span> <span class="token punctuation">[</span>-f filename <span class="token operator">|</span> pathname<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-i：忽略不存在的文件。
-f：infilename 文件 infilename 中记录要处理的文件。
-e：directory 排除目录。
-R/-r：递归处理目录。
-n：不改变文件标签。
-o/outfilename：保存文件列表到 outfilename，在文件不正确情况下。
-v：将过程显示到屏幕上。
-F：强制恢复文件安全语境。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>假设CentOS安装了apache，网页默认的主目录是<code>/var/www/html</code>，我们经常遇到这样的问题，在其他目录中创建了一个网页文件，然后用mv移动到网页默认目录<code>/var/www/html</code>中，但是在浏览器中却打不开这个文件，这很可能是因为这个文件的SELinux配置信息是继承原来那个目录的，与<code>/var/www/html</code>目录不同，使用mv移动的时候，这个SELinux配置信息也一起移动过来了，从而导致无法打开页面，具体请看下面的实例：</p><p>使用CentOS举例,如果默认没有安装apache，确保网络连接，使用下面的命令安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jsdig.com ~<span class="token punctuation">]</span><span class="token comment"># yum install httpd</span>
 <span class="token comment"># 我们在root的家目录新建一个html文件 </span>
<span class="token punctuation">[</span>root@jsdig.com ~<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root

<span class="token punctuation">[</span>root@jsdig.com ~<span class="token punctuation">]</span><span class="token comment"># vi index.html</span>

<span class="token comment"># 随便输入一段文字，保存退出 </span>
welcome to www.jsdig.com

<span class="token comment"># 将这个文件mv到网页默认目录下 </span>
<span class="token punctuation">[</span>root@jsdig.com ~<span class="token punctuation">]</span><span class="token comment"># mv index.html /var/www/html/</span>

<span class="token comment"># </span>
<span class="token comment"># 这个时候我们使用firefox浏览器输入127.0.0.1/index.html发现打不开，</span>
<span class="token comment"># 查看一下SELinux的日志文件，发现了下面这一段报错信息，从这个报错信息不难看出，</span>
<span class="token comment"># 进程httpd访问网页主目录中的index.html时被SELinux阻止，原因是因为，SELinux配置信息不正确,</span>
<span class="token comment"># 正确的SELinux配置信息应该是scontext=后面的部分，</span>
<span class="token comment"># 而index.html文件的SELinux配置信息却是tcontext=后面的部分，</span>
<span class="token comment"># 从tcontext=的第三段“admin_home_t”不难看出，这个文件的SELinux配置信息是root用户家目录的。</span>
<span class="token comment"># </span>
<span class="token assign-left variable">type</span><span class="token operator">=</span>AVC <span class="token assign-left variable">msg</span><span class="token operator">=</span>audit<span class="token punctuation">(</span><span class="token number">1378974214.610</span>:465<span class="token punctuation">)</span>: avc:  denied  <span class="token punctuation">{</span> <span class="token function">open</span> <span class="token punctuation">}</span> <span class="token keyword">for</span>  <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token number">2359</span> <span class="token assign-left variable">comm</span><span class="token operator">=</span><span class="token string">&quot;httpd&quot;</span> <span class="token assign-left variable">path</span><span class="token operator">=</span><span class="token string">&quot;/var/www/html/index.html&quot;</span> <span class="token assign-left variable">dev</span><span class="token operator">=</span><span class="token string">&quot;sda1&quot;</span> <span class="token assign-left variable">ino</span><span class="token operator">=</span><span class="token number">1317685</span> <span class="token assign-left variable">scontext</span><span class="token operator">=</span>system_u:system_r:httpd_t:s0 <span class="token assign-left variable">tcontext</span><span class="token operator">=</span>unconfined_u:object_r:admin_home_t:s0 <span class="token assign-left variable">tclass</span><span class="token operator">=</span>file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用ls -Z也可以看出,文件和目录的SELinux信息不匹配</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jsdig.com html<span class="token punctuation">]</span><span class="token comment"># ls -Z /var/www/html/</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span> unconfined_u:object_r:admin_home_t:s0 index.html

<span class="token punctuation">[</span>root@jsdig.com html<span class="token punctuation">]</span><span class="token comment"># ls -Zd /var/www/html/</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span> system_u:object_r:httpd_sys_content_t:s0 /var/www/html/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用restorecon来恢复网页主目录中所有文件的SELinux配置信息(如果目标为一个目录，可以添加-R参数递归)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jsdig.com html<span class="token punctuation">]</span><span class="token comment"># restorecon -R /var/www/html/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),o=[i];function c(l,p){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","restorecon.html.vue"]]);export{r as default};
