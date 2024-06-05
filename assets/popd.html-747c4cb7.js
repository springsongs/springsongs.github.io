import{_ as s,M as e,p as i,q as p,R as n,t,N as c,a1 as d}from"./framework-5866ffd3.js";const l={},o=d(`<h1 id="popd" tabindex="-1"><a class="header-anchor" href="#popd" aria-hidden="true">#</a> popd</h1><p>从目录堆栈中删除目录。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">popd</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token punctuation">[</span>+N <span class="token operator">|</span> -N<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li><p>从目录堆栈中删除目录，如果是顶部目录被删除，那么当前工作目录会切换到新的顶部目录。</p></li><li><p>没有参数时，删除目录堆栈顶部。</p></li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-n</span>    抑制删除目录引起的当前工作目录变化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>+N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，左起的第N个目录将被删除。（从0开始计数）</p><p>-N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，右起的第N个目录将被删除。（从0开始计数）</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回成功除非提供了非法选项或执行出现错误。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加目录到堆栈，当前工作目录不变。</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span>
~
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/Desktop
~ ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/Pictures
~ ~/Pictures ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/bin
~ ~/bin ~/Pictures ~/Desktop

<span class="token comment"># 从目录堆栈中删除目录，删除顶部目录时会改变当前工作目录：</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">popd</span> <span class="token parameter variable">-2</span>
~ ~/Pictures ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">popd</span> +1
~ ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">popd</span>
~/Desktop
<span class="token punctuation">[</span>user2@pc Desktop<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从目录堆栈中删除目录，删除顶部目录时不会改变当前工作目录：</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span>
~
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/Desktop
~ ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">popd</span> <span class="token parameter variable">-n</span>
~
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li><code>bash</code>的目录堆栈命令包括<code>dirs popd pushd</code>。</li><li>当前目录始终是目录堆栈的顶部。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>`,19),r={href:"https://superuser.com/questions/784450/popd-and-pushd-behavior-with-n-option",target:"_blank",rel:"noopener noreferrer"};function u(h,v){const a=e("ExternalLinkIcon");return i(),p("div",null,[o,n("ul",null,[n("li",null,[n("a",r,[t("popd、pushd命令'-n'选项的行为"),c(a)])])])])}const k=s(l,[["render",u],["__file","popd.html.vue"]]);export{k as default};
