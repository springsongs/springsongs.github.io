import{_ as e,p as n,q as s,a1 as a}from"./framework-5866ffd3.js";const i={},t=a(`<h1 id="yes" tabindex="-1"><a class="header-anchor" href="#yes" aria-hidden="true">#</a> yes</h1><p>重复打印指定字符串</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>yes命令</strong> 在命令行中输出指定的字符串，直到yes进程被杀死。不带任何参数输入yes命令默认的字符串就是y。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yes<span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>字符串：指定要重复打印的字符串。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># yes testline</span>

testline
testline
testline
testline
testline
testline
testline
testline
<span class="token punctuation">..</span>.一直重复打印 testline，按Ctrl+C结束。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=[t];function l(r,c){return n(),s("div",null,d)}const o=e(i,[["render",l],["__file","yes.html.vue"]]);export{o as default};
