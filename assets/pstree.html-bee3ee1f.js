import{_ as e,p as s,q as a,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="pstree" tabindex="-1"><a class="header-anchor" href="#pstree" aria-hidden="true">#</a> pstree</h1><p>以树状图的方式展现进程之间的派生关系</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>pstree命令</strong> 以树状图的方式展现进程之间的派生关系，显示效果比较直观。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：显示每个程序的完整指令，包含路径，参数或是常驻服务的标示；
-c：不使用精简标示法；
-G：使用VT100终端机的列绘图字符；
-h：列出树状图时，特别标明现在执行的程序；
-H<span class="token operator">&lt;</span>程序识别码<span class="token operator">&gt;</span>：此参数的效果和指定<span class="token string">&quot;-h&quot;</span>参数类似，但特别标明指定的程序；
-l：采用长列格式显示树状图；
-n：用程序识别码排序。预设是以程序名称来排序；
-p：显示程序识别码；
-u：显示用户名称；
-U：使用UTF-8列绘图字符；
-V：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>显示当前所有进程的进程号和进程id</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示所有进程的所有详细信息，遇到相同的进程名可以压缩显示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree  <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取 SSH 会话的 PID</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree <span class="token parameter variable">-p</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>

<span class="token comment">#  |-sshd(1221)-+-sshd(2768)---bash(2770)-+-grep(2810)</span>
<span class="token comment">#  |            \`-sshd(2807)---sshd(2808)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上方的输出中，你可以看到 sshd 进程与分支的树形图。sshd 的主进程是 sshd（1221），另两个分支分别为 sshd（2768） 和 sshd（2807）。</p>`,16),r=[d];function l(c,t){return s(),a("div",null,r)}const h=e(i,[["render",l],["__file","pstree.html.vue"]]);export{h as default};
