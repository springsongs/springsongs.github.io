import{_ as e,p as a,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="times" tabindex="-1"><a class="header-anchor" href="#times" aria-hidden="true">#</a> times</h1><p>显示进程累计时间。</p><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>打印出shell及其子进程累计使用的用户时间和系统时间。</li></ul><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>总是返回成功。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行命令</span>
<span class="token builtin class-name">times</span>
<span class="token comment"># 返回结果</span>
0m0.037s 0m0.009s
0m0.010s 0m0.024s
<span class="token comment"># 根据times(2)的man手册，对应关系如下：</span>
<span class="token comment"># 用户时间        | 系统时间</span>
<span class="token comment"># 子进程的用户时间 | 子进程的系统时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,10),l=[d];function c(t,r){return a(),s("div",null,l)}const m=e(i,[["render",c],["__file","times.html.vue"]]);export{m as default};
