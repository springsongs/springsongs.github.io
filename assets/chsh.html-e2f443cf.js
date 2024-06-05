import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h1 id="chsh" tabindex="-1"><a class="header-anchor" href="#chsh" aria-hidden="true">#</a> chsh</h1><p>用来更换登录系统时使用的shell</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>chsh命令</strong> 用来更换登录系统时使用的shell。若不指定任何参数与用户名称，则chsh会以应答的方式进行设置。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chsh<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-s<span class="token operator">&lt;</span>shell 名称<span class="token operator">&gt;</span>或--shell<span class="token operator">&lt;</span>shell 名称<span class="token operator">&gt;</span>：更改系统预设的shell环境。；
-l或--list-shells：列出目前系统可用的shell清单；
-u或--help：在线帮助；
-v或-version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>用户名：要改变默认shell的用户。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p><strong>查看系统安装了哪些shell的两种方法：</strong></p><p>第一种：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>rocrocket@localhost ~<span class="token punctuation">]</span>$ chsh <span class="token parameter variable">-l</span>
/bin/sh
/bin/bash
/sbin/nologin
/bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>rocrocket@localhost ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/shells
/bin/sh
/bin/bash
/sbin/nologin
/bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实<code>chsh -l</code>也是来查看这个文件。</p><p><strong>查看当前正在使用的shell：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>rocrocket@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意SHELL一定要是大写。可以看到，目前使用的shell是<code>/bin/bash</code></p><p><strong>把我的shell改成zsh：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>rocrocket@localhost ~<span class="token punctuation">]</span>$ chsh <span class="token parameter variable">-s</span> /bin/zsh
Changing shell <span class="token keyword">for</span> rocrocket.
Password:
Shell changed.
<span class="token punctuation">[</span>rocrocket@localhost ~<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用chsh加选项<code>-s</code>就可以修改登录的shell了！你会发现你现在执行<code>echo $SHELL</code>后仍然输出为<code>/bin/bash</code>，这是因为你需要重启你的shell才完全投入到zsh怀抱中去。<code>chsh -s</code>其实修改的就是<code>/etc/passwd</code>文件里和你的用户名相对应的那一行。现在来查看下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>rocrocket@localhost ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd<span class="token operator">|</span><span class="token function">grep</span> ^rocrocket
rocrocket:x:500:500:rocrocket,China:/rocrocket/PSB/home:/bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以发现输出内容的最后部分已经变成了<code>/bin/zsh</code>了，下次重启的时候，linux就会读取这一命令来启动shell了！</p><p><strong>把shell修改回/bin/bash：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>rocrocket@localhost ~<span class="token punctuation">]</span>$ chsh <span class="token parameter variable">-s</span> /bin/bash
Changing shell <span class="token keyword">for</span> rocrocket.
Password:
Shell changed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),c=[i];function d(o,r){return n(),a("div",null,c)}const h=s(l,[["render",d],["__file","chsh.html.vue"]]);export{h as default};
