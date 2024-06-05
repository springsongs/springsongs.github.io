import{_ as a,M as e,p,q as i,R as n,t,N as l,a1 as c}from"./framework-5866ffd3.js";const o={},r=c(`<h1 id="disown" tabindex="-1"><a class="header-anchor" href="#disown" aria-hidden="true">#</a> disown</h1><p>从当前的shell中移除作业。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>disown <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>-ar<span class="token punctuation">]</span> <span class="token punctuation">[</span>jobspec <span class="token punctuation">..</span>. <span class="token operator">|</span> pid <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li><p>从当前shell的作业列表中移除全部作业。</p></li><li><p>从当前shell的作业列表中移除指定的一到多个作业。</p></li><li><p>从当前shell的作业列表中移除正在运行的作业。</p></li><li><p>标记作业，使得它们在当前shell退出后也不会结束。</p></li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-h</span>    标记每个作业标识符，这些作业将不会在shell接收到sighup信号时接收到sighup信号。
<span class="token parameter variable">-a</span>    移除所有的作业。
<span class="token parameter variable">-r</span>    移除运行的作业。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>jobspec（可选）：要移除的作业标识符，可以是一到多个。</p><p>pid（可选）：要移除的作业对应的进程ID，可以是一到多个。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回成功除非未开启作业控制或执行出现错误。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 演示。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">ssh</span> <span class="token number">192.168</span>.1.4
user2@192.168.1.4<span class="token string">&#39;s password:
# 此时按下ctrl+z使得交互停止。
[1]+  Stopped                 ssh 192.168.1.4

[user2@pc] ssh 192.168.1.7
user2@192.168.1.7&#39;</span>s password:
<span class="token comment"># 此时按下ctrl+z使得交互停止。</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 <span class="token function">ssh</span> <span class="token number">192.168</span>.1.7

<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">sleep</span> <span class="token number">120</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">28986</span>

<span class="token comment"># 列出作业及pid信息。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>- <span class="token number">28756</span> Stopped                 <span class="token function">ssh</span> <span class="token number">192.168</span>.1.4
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ <span class="token number">28833</span> Stopped                 <span class="token function">ssh</span> <span class="token number">192.168</span>.1.7
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token number">28986</span> Running                 <span class="token function">sleep</span> <span class="token number">120</span> <span class="token operator">&amp;</span>

<span class="token comment"># 删除运行状态的作业。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> disown <span class="token parameter variable">-r</span>

<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>- <span class="token number">28756</span> Stopped                 <span class="token function">ssh</span> <span class="token number">192.168</span>.1.4
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ <span class="token number">28833</span> Stopped                 <span class="token function">ssh</span> <span class="token number">192.168</span>.1.7

<span class="token comment"># 注意disown只是移除作业，并没有停止。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> pgrep <span class="token parameter variable">-a</span> <span class="token parameter variable">-u</span> user2 <span class="token parameter variable">-f</span> <span class="token string">&#39;sleep 120&#39;</span>
<span class="token number">28986</span> <span class="token function">sleep</span> <span class="token number">120</span>

<span class="token comment"># 删除指定的作业。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> disown %2
bash: warning: deleting stopped job <span class="token number">2</span> with process group <span class="token number">28833</span>

<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>- <span class="token number">28756</span> Stopped                 <span class="token function">ssh</span> <span class="token number">192.168</span>.1.4

<span class="token comment"># 注意disown只是移除作业，并没有停止。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> pgrep <span class="token parameter variable">-a</span> <span class="token parameter variable">-u</span> user2 <span class="token parameter variable">-f</span> <span class="token string">&#39;ssh 192.168.1.7&#39;</span>
<span class="token number">28833</span> <span class="token function">ssh</span> <span class="token number">192.168</span>.1.7

<span class="token comment"># 删除全部作业。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> disown <span class="token parameter variable">-a</span>
bash: warning: deleting stopped job <span class="token number">1</span> with process group <span class="token number">28756</span>

<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">jobs</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 注意disown只是移除作业，并没有停止。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> pgrep <span class="token parameter variable">-a</span> <span class="token parameter variable">-u</span> user2 <span class="token parameter variable">-f</span> <span class="token string">&#39;ssh 192.168.1.4&#39;</span>
<span class="token number">28756</span> <span class="token function">ssh</span> <span class="token number">192.168</span>.1.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 演示-h选项的作用。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">sleep</span> <span class="token number">90</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">109080</span>

<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">109080</span> Running                 <span class="token function">sleep</span> <span class="token number">90</span> <span class="token operator">&amp;</span>

<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> disown <span class="token parameter variable">-h</span> %1

<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> <span class="token builtin class-name">exit</span>

<span class="token comment"># 此时前一个终端已经关闭，现在打开新终端查找该作业。</span>
<span class="token punctuation">[</span>user2@pc<span class="token punctuation">]</span> pgrep <span class="token parameter variable">-a</span> <span class="token parameter variable">-u</span> user2 <span class="token parameter variable">-f</span> <span class="token string">&#39;sleep 90&#39;</span>
<span class="token number">109080</span> <span class="token function">sleep</span> <span class="token number">90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li><code>bash</code>的作业控制命令包括<code>bg fg kill wait disown suspend</code>。</li><li>该命令需要<code>set</code>选项<code>monitor</code>处于开启状态时才能执行；查看作业控制状态：输入<code>set -o</code>查看<code>monitor</code>行；执行<code>set -o monitor</code>或<code>set -m</code>开启该选项。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>`,19),u={href:"https://www.cyberciti.biz/faq/unix-linux-disown-command-examples-usage-syntax/",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const s=e("ExternalLinkIcon");return p(),i("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[t("disown的用法"),l(s)])])])])}const k=a(o,[["render",d],["__file","disown.html.vue"]]);export{k as default};
