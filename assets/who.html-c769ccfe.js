import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="who" tabindex="-1"><a class="header-anchor" href="#who" aria-hidden="true">#</a> who</h1><p>显示当前所有登陆用户的信息。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">who</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token punctuation">[</span>am i<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>当没有给出非选项参数时，按以下字段顺序为每个当前用户打印信息：登录用户名称，终端信息，登录时间，远程主机或X display。</li><li>当用户执行 <code>who am i</code> 时，只显示运行该命令的用户的信息。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a, <span class="token parameter variable">--all</span>                                等价于调用 <span class="token string">&#39;-b -d --login -p -r -t -T -u&#39;</span>。
-b, <span class="token parameter variable">--boot</span>                               上次系统启动的时间。
-d, <span class="token parameter variable">--dead</span>                               打印 dead 状态的进程。
-H, <span class="token parameter variable">--heading</span>                            打印列标题行。
-l, <span class="token parameter variable">--login</span>                              打印系统登录进程。
<span class="token parameter variable">--lookup</span>                                 尝试通过 DNS 规范主机名。
<span class="token parameter variable">-m</span>                                       仅显示和标准输入关联的主机名和用户。
-p, <span class="token parameter variable">--process</span>                            打印由 init 生成的活动进程。
-q, <span class="token parameter variable">--count</span>                              列出所有已登录的用户的名称和数量。
-r, <span class="token parameter variable">--runlevel</span>                           打印当前运行级别。
-s, <span class="token parameter variable">--short</span>                              仅打印名称、行和时间（默认）。
-t, <span class="token parameter variable">--time</span>                               打印上次系统时钟更改。
-T, -w, --mesg, --message, <span class="token parameter variable">--writable</span>    将 <span class="token string">&#39;+、-、?&#39;</span> 中的一个作为用户的消息状态添加到用户名称后面。
-u, <span class="token parameter variable">--users</span>                              列出登录的用户。
<span class="token parameter variable">--help</span>                                   显示帮助信息并退出。
<span class="token parameter variable">--version</span>                                显示版本信息并退出。

关于 <span class="token parameter variable">-T</span> 选项的 <span class="token string">&#39;+、-、?&#39;</span>：
<span class="token string">&#39;+&#39;</span>  允许写入信息
<span class="token string">&#39;-&#39;</span>  禁止写入信息
<span class="token string">&#39;?&#39;</span>  不能查找到终端设备
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>file（可选）：指定 <code>file</code> 代替默认的 <code>/var/run/utmp</code> 、<code>/etc/utmp</code> ；通常使用 <code>/var/log/wtmp</code> 作为参数用于查看过去登陆系统的用户。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># who</span>
root     pts/0        <span class="token number">2013</span>-08-19 <span class="token number">15</span>:04 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.134<span class="token punctuation">)</span>
root     pts/1        <span class="token number">2013</span>-12-20 <span class="token number">10</span>:37 <span class="token punctuation">(</span><span class="token number">180.111</span>.155.40<span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># who -q</span>
root root
<span class="token comment"># users=2</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># who -H</span>
NAME     LINE         <span class="token function">time</span>             COMMENT
root     pts/0        <span class="token number">2013</span>-08-19 <span class="token number">15</span>:04 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.134<span class="token punctuation">)</span>
root     pts/1        <span class="token number">2013</span>-12-20 <span class="token number">10</span>:37 <span class="token punctuation">(</span><span class="token number">180.111</span>.155.40<span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># who -w</span>
root     + pts/0        <span class="token number">2013</span>-08-19 <span class="token number">15</span>:04 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.134<span class="token punctuation">)</span>
root     + pts/1        <span class="token number">2013</span>-12-20 <span class="token number">10</span>:37 <span class="token punctuation">(</span><span class="token number">180.111</span>.155.40<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 who</code>，<code>info coreutils &#39;who invocation&#39;</code>。</li></ol>`,16),l=[t];function p(c,o){return a(),s("div",null,l)}const d=n(i,[["render",p],["__file","who.html.vue"]]);export{d as default};
