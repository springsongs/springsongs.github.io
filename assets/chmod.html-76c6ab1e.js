import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},c=e(`<h1 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod" aria-hidden="true">#</a> chmod</h1><p>用来变更文件或目录的权限</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. MODE<span class="token punctuation">[</span>,MODE<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE<span class="token punctuation">..</span>.
<span class="token function">chmod</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. OCTAL-MODE FILE<span class="token punctuation">..</span>.
<span class="token function">chmod</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token parameter variable">--reference</span><span class="token operator">=</span>RFILE FILE<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途" aria-hidden="true">#</a> 主要用途</h2><ul><li>通过符号组合的方式更改目标文件或目录的权限。</li><li>通过八进制数的方式更改目标文件或目录的权限。</li><li>通过参考文件的权限来更改目标文件或目录的权限。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>mode：八进制数或符号组合。</p><p>file：指定要更改权限的一到多个文件。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-c, --changes：当文件的权限更改时输出操作信息。
--no-preserve-root：不将<span class="token string">&#39;/&#39;</span>特殊化处理，默认选项。
--preserve-root：不能在根目录下递归操作。
-f, --silent, --quiet：抑制多数错误消息的输出。
-v, --verbose：无论文件是否更改了权限，一律输出操作信息。
<span class="token parameter variable">--reference</span><span class="token operator">=</span>RFILE：使用参考文件或参考目录RFILE的权限来设置目标文件或目录的权限。
-R, --recursive：对目录以及目录下的文件递归执行更改权限操作。
--help：显示帮助信息并退出。
--version：显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>返回状态为成功除非给出了非法选项或非法参数。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><blockquote><p>参考<code>man chmod</code>文档的<code>DESCRIPTION</code>段落得知：</p><ul><li><code>u</code>符号代表当前用户。</li><li><code>g</code>符号代表和当前用户在同一个组的用户，以下简称组用户。</li><li><code>o</code>符号代表其他用户。</li><li><code>a</code>符号代表所有用户。</li><li><code>r</code>符号代表读权限以及八进制数<code>4</code>。</li><li><code>w</code>符号代表写权限以及八进制数<code>2</code>。</li><li><code>x</code>符号代表执行权限以及八进制数<code>1</code>。</li><li><code>X</code>符号代表如果目标文件是可执行文件或目录，可给其设置可执行权限。</li><li><code>s</code>符号代表设置权限suid和sgid，使用权限组合<code>u+s</code>设定文件的用户的ID位，<code>g+s</code>设置组用户ID位。</li><li><code>t</code>符号代表只有目录或文件的所有者才可以删除目录下的文件。</li><li><code>+</code>符号代表添加目标用户相应的权限。</li><li><code>-</code>符号代表删除目标用户相应的权限。</li><li><code>=</code>符号代表添加目标用户相应的权限，删除未提到的权限。</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>linux文件的用户权限说明：

<span class="token comment"># 查看当前目录（包含隐藏文件）的长格式。</span>
<span class="token function">ls</span> <span class="token parameter variable">-la</span>
  -rw-r--r--   <span class="token number">1</span> user  staff   <span class="token number">651</span> Oct <span class="token number">12</span> <span class="token number">12</span>:53 .gitmodules

<span class="token comment"># 第1位如果是d则代表目录，是-则代表普通文件。</span>
<span class="token comment"># 更多详情请参阅info coreutils &#39;ls invocation&#39;（ls命令的info文档）的&#39;-l&#39;选项部分。</span>
<span class="token comment"># 第2到4位代表当前用户的权限。</span>
<span class="token comment"># 第5到7位代表组用户的权限。</span>
<span class="token comment"># 第8到10位代表其他用户的权限。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加组用户的写权限。</span>
<span class="token function">chmod</span> g+w ./test.log
<span class="token comment"># 删除其他用户的所有权限。</span>
<span class="token function">chmod</span> <span class="token assign-left variable">o</span><span class="token operator">=</span> ./test.log
<span class="token comment"># 使得所有用户都没有写权限。</span>
<span class="token function">chmod</span> a-w ./test.log
<span class="token comment"># 当前用户具有所有权限，组用户有读写权限，其他用户只有读权限。</span>
<span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx, <span class="token assign-left variable">g</span><span class="token operator">=</span>rw, <span class="token assign-left variable">o</span><span class="token operator">=</span>r ./test.log
<span class="token comment"># 等价的八进制数表示：</span>
<span class="token function">chmod</span> <span class="token number">754</span> ./test.log
<span class="token comment"># 将目录以及目录下的文件都设置为所有用户拥有读写权限。</span>
<span class="token comment"># 注意，使用&#39;-R&#39;选项一定要保留当前用户的执行和读取权限，否则会报错！</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token assign-left variable">a</span><span class="token operator">=</span>rw ./testdir/
<span class="token comment"># 根据其他文件的权限设置文件权限。</span>
<span class="token function">chmod</span> <span class="token parameter variable">--reference</span><span class="token operator">=</span>./1.log  ./test.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li><p>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man chmod</code>或<code>info coreutils &#39;chmod invocation&#39;</code>。</p></li><li><p>符号连接的权限无法变更，如果用户对符号连接修改权限，其改变会作用在被连接的原始文件。</p></li><li><p>使用<code>-R</code>选项一定要保留当前用户的执行和读取权限，否则会报错！</p></li></ol>`,19),l=[c];function o(d,t){return s(),a("div",null,l)}const r=n(i,[["render",o],["__file","chmod.html.vue"]]);export{r as default};
