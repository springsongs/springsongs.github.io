import{_ as a,p as s,q as n,a1 as e}from"./framework-5866ffd3.js";const i={},c=e(`<h1 id="umask" tabindex="-1"><a class="header-anchor" href="#umask" aria-hidden="true">#</a> umask</h1><p>显示或设置创建文件的权限掩码。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">umask</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S<span class="token punctuation">]</span> <span class="token punctuation">[</span>mode<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>显示当前的文件权限掩码。</li><li>通过八进制数的方式设置创建文件的权限掩码。</li><li>通过符号组合的方式设置创建文件的权限掩码。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>mode（可选）：八进制数或符号组合。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-p：当没有参数时指定该选项，执行产生的输出格式可复用为输入；
-S：以符号组合的方式输出创建文件的权限掩码，不使用该选项时以八进制数的形式输出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回状态为成功除非给出了非法选项或非法参数。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p><em>以下的例子均假设文件权限掩码为0022。</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以八进制数的形式输出创建文件的权限掩码。</span>
<span class="token builtin class-name">umask</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 执行结果：</span>
<span class="token builtin class-name">umask</span> 0022
<span class="token comment"># 以符号组合的方式输出创建文件的权限掩码。</span>
<span class="token builtin class-name">umask</span> <span class="token parameter variable">-S</span>
<span class="token comment"># 执行结果：</span>
<span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>rx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考<code>man chmod</code>文档的<code>DESCRIPTION</code>段落得知：</p><ul><li><code>u</code>符号代表当前用户。</li><li><code>g</code>符号代表和当前用户在同一个组的用户，以下简称组用户。</li><li><code>o</code>符号代表其他用户。</li><li><code>a</code>符号代表所有用户。</li><li><code>r</code>符号代表读权限以及八进制数<code>4</code>。</li><li><code>w</code>符号代表写权限以及八进制数<code>2</code>。</li><li><code>x</code>符号代表执行权限以及八进制数<code>1</code>。</li><li><code>+</code>符号代表添加目标用户相应的权限。</li><li><code>-</code>符号代表删除目标用户相应的权限。</li><li><code>=</code>符号代表添加目标用户相应的权限，删除未提到的权限。</li></ul></blockquote><p>那么刚才以符号形式输出的结果<code>u=rwx,g=rx,o=rx</code>转化为八进制数等于<code>0755</code>；</p><p>用八进制数来设置同样的权限，<code>umask</code>需要额外的执行减法<code>0777 - 0755</code>即<code>0022</code>，而<code>chmod</code>不需要。</p><p>符号组合模式的添加、删除、赋值权限。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加权限：</span>
<span class="token comment"># 为组用户添加写权限。</span>
<span class="token builtin class-name">umask</span> g+w
<span class="token comment"># 删除权限：</span>
<span class="token comment"># 删除其他用户的写、执行权限</span>
<span class="token builtin class-name">umask</span> o-wx
<span class="token comment"># 赋值权限：</span>
<span class="token comment"># 赋值全部用户所有权限，等价于umask u=rwx,g=rwx,o=rwx</span>
<span class="token builtin class-name">umask</span> <span class="token assign-left variable">a</span><span class="token operator">=</span>rwx
<span class="token comment"># 清除其他用户的读、写、执行权限。</span>
<span class="token builtin class-name">umask</span> <span class="token assign-left variable">o</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建文件夹、文件（假设当前目录不存在）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建文件</span>
<span class="token function">touch</span> test.sh
<span class="token comment"># 查看权限，发现执行权限的设置不起作用。</span>
<span class="token function">stat</span> test.sh
<span class="token comment"># 创建文件夹</span>
<span class="token function">touch</span> newdir
<span class="token comment"># 查看权限，发现执行权限的设置可以起作用。</span>
<span class="token function">stat</span> newdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li><p>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</p></li><li><p><code>chmod</code>用于更改已有对象的权限，<code>umask</code>影响之后新建对象的权限。</p></li><li><p><strong>请谨慎使用该命令</strong>，特别是不要取消当前用户的读取权限，那样会导致你在终端使用<code>TAB</code>键补全时报错。</p></li></ol>`,24),l=[c];function d(o,t){return s(),n("div",null,l)}const p=a(i,[["render",d],["__file","umask.html.vue"]]);export{p as default};
