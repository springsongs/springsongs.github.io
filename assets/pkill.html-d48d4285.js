import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},l=s(`<h1 id="pkill" tabindex="-1"><a class="header-anchor" href="#pkill" aria-hidden="true">#</a> pkill</h1><p>可以按照进程名杀死进程</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>pkill命令</strong> 可以按照进程名杀死进程。pkill和killall应用方法差不多，也是直接杀死运行中的程序；如果您想杀掉单个进程，请用kill来杀掉。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkill<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-o：仅向找到的最小（起始）进程号发送信号；
-n：仅向找到的最大（结束）进程号发送信号；
-P：指定父进程号发送信号；
-g：指定进程组；
-t：指定开启进程的终端。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>进程名称：指定要查找的进程名称，同时也支持类似grep指令中的匹配模式。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pgrep <span class="token parameter variable">-l</span> gaim
<span class="token number">2979</span> gaim

<span class="token function">pkill</span> gaim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说：kill对应的是PID，pkill对应的是command。</p>`,13),d=[l];function r(c,t){return e(),n("div",null,d)}const p=a(i,[["render",r],["__file","pkill.html.vue"]]);export{p as default};
