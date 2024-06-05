import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},c=e(`<h1 id="dirs" tabindex="-1"><a class="header-anchor" href="#dirs" aria-hidden="true">#</a> dirs</h1><p>显示目录堆栈。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dirs</span> <span class="token punctuation">[</span>-clpv<span class="token punctuation">]</span> <span class="token punctuation">[</span>+N<span class="token punctuation">]</span> <span class="token punctuation">[</span>-N<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li><p>显示目录堆栈。</p></li><li><p>清空目录堆栈。</p></li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span>    清空目录堆栈。
<span class="token parameter variable">-l</span>    堆栈内以~开头的目录在显示时展开。
<span class="token parameter variable">-p</span>    将目录堆栈内的每一个目录按行显示。
<span class="token parameter variable">-v</span>    将目录堆栈内的每一个目录按行显示并在每行前加上堆栈内的位置编号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>+N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，左起的第N个目录将被显示。（从0开始计数）</p><p>-N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，右起的第N个目录将被显示。（从0开始计数）</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回成功除非提供了非法选项或执行出现错误。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加目录到堆栈。</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span>
~
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/Desktop
~ ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/Pictures
~ ~/Pictures ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/bin
~ ~/bin ~/Pictures ~/Desktop

<span class="token comment"># 选项和参数的示例：</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-l</span>
/home/user2 /home/user2/bin /home/user2/Pictures /home/user2/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-p</span>
~
~/bin
~/Pictures
~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-v</span>
 <span class="token number">0</span>  ~
 <span class="token number">1</span>  ~/bin
 <span class="token number">2</span>  ~/Pictures
 <span class="token number">3</span>  ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> +2
~/Pictures
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-2</span>
~/bin
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-c</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span>
~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li><code>bash</code>的目录堆栈命令包括<code>dirs popd pushd</code>。</li><li>当前目录始终是目录堆栈的顶部。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,17),p=[c];function t(l,r){return s(),a("div",null,p)}const u=n(i,[["render",t],["__file","dirs.html.vue"]]);export{u as default};
