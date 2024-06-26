import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},r=e(`<h1 id="whereis" tabindex="-1"><a class="header-anchor" href="#whereis" aria-hidden="true">#</a> whereis</h1><p>查找二进制程序、代码等相关文件路径</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>whereis命令</strong> 用来定位指令的二进制程序、源代码文件和man手册页等相关文件的路径。</p><p>whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。</p><p>和find相比，whereis查找的速度非常快，这是因为linux系统会将 系统内的所有文件都记录在一个数据库文件中，当使用whereis和下面即将介绍的locate时，会从数据库中查找数据，而不是像find命令那样，通 过遍历硬盘来查找，效率自然会很高。 但是该数据库文件并不是实时更新，默认情况下时一星期更新一次，因此，我们在用whereis和locate 查找文件时，有时会找到已经被删除的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>whereis<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b：只查找二进制文件；
-B<span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>：只在设置的目录下查找二进制文件；
-f：不显示文件名前的路径名称；
-m：只查找说明文件；
-M<span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>：只在设置的目录下查找说明文件；
-s：只查找原始代码文件；
-S<span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>只在设置的目录下查找原始代码文件；
-u：查找不包含指定类型的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>指令名：要查找的二进制程序、源文件和man手册页的指令名。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将相关的文件都查找出来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis tomcat</span>
tomcat:

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis svn</span>
svn: /usr/bin/svn /usr/local/svn /usr/share/man/man1/svn.1.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：tomcat没安装，找不出来，svn安装找出了很多相关文件</p><p>只将二进制文件查找出来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis -b svn</span>
svn: /usr/bin/svn /usr/local/svn

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis -m svn</span>
svn: /usr/share/man/man1/svn.1.gz

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis -s svn</span>
svn:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：<code>whereis -m svn</code>查出说明文档路径，<code>whereis -s svn</code>找source源文件。</p>`,19),t=[r];function l(c,d){return n(),a("div",null,t)}const p=s(i,[["render",l],["__file","whereis.html.vue"]]);export{p as default};
