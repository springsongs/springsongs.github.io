import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="chattr" tabindex="-1"><a class="header-anchor" href="#chattr" aria-hidden="true">#</a> chattr</h1><p>用来改变文件属性</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>chattr命令</strong> 用来改变文件属性。这项指令可改变存放在ext2文件系统上的文件或目录属性，这些属性共有以下8种模式：</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a：让文件或目录仅供附加用途；
b：不更新文件或目录的最后存取时间；
c：将文件或目录压缩后存放；
d：将文件或目录排除在倾倒操作之外；
i：不得任意更动文件或目录；
s：保密性删除文件或目录；
S：即时更新文件或目录；
u：预防意外删除。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-R：递归处理，将指令目录下的所有文件及子目录一并处理；
-v<span class="token operator">&lt;</span>版本编号<span class="token operator">&gt;</span>：设置文件或目录版本；
-V：显示指令执行过程；
+<span class="token operator">&lt;</span>属性<span class="token operator">&gt;</span>：开启文件或目录的该项属性；
-<span class="token operator">&lt;</span>属性<span class="token operator">&gt;</span>：关闭文件或目录的该项属性；
<span class="token operator">=</span><span class="token operator">&lt;</span>属性<span class="token operator">&gt;</span>：指定文件或目录的该项属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>用chattr命令防止系统中某个关键文件被修改：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr +i /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后试一下rm、mv、rename等命令操作于该文件，都是得到Operation not permitted的结果。</p><p>让某个文件只能往里面追加内容，不能删除，一些日志文件适用于这种操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr +a /data1/user_act.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),r=[d];function t(l,c){return e(),s("div",null,r)}const h=a(i,[["render",t],["__file","chattr.html.vue"]]);export{h as default};
