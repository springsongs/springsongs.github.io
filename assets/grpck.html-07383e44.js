import{_ as e,p as a,q as n,a1 as s}from"./framework-5866ffd3.js";const c={},i=s(`<h1 id="grpck" tabindex="-1"><a class="header-anchor" href="#grpck" aria-hidden="true">#</a> grpck</h1><p>用于验证组文件的完整性</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>grpck命令</strong> 用于验证组文件的完整性，在验证之前，需要先锁定（lock）组文件<code>/etc/group</code>和<code>/etc/shadow</code>。</p><p>grpck命令检查数据是否正确存放，每条记录是否都包含足够的信息，是否有一个唯一的组名，是否包含正确的用户，是否正确设置了组的管理员等。grpck检查发现错误以后，在命令行提示用户是否删除错误的记录。如果用户没有明确回答删除记录，grpck终止运行。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>grpck<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-r：只读模式；
-s：排序组id。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>对组账号和影子文件进行验证：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>grpck   <span class="token comment"># 必须以管理员身份运行</span>
grpck /etc/group /etc/gshadow   <span class="token comment"># 后面两句一样，如果没有输出信息，则表示没有错误。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试错误的实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>**echo check_user:x: <span class="token operator">&gt;&gt;</span> /etc/group    <span class="token comment"># 添加一行错误的格式数据</span>
<span class="token function">cat</span> /etc/group <span class="token operator">|</span> <span class="token function">grep</span> check_user**
check_user:x:  <span class="token comment"># 这儿GID字段为空，是错误的。</span>

 **grpck /etc/group** 
invalid group <span class="token function">file</span> entry
delete line <span class="token string">&#39;check_user:x:&#39;</span>? y      <span class="token comment"># 提示是否删除</span>
grpck: the files have been updated  <span class="token comment"># 这时已经删除了错误的行，提示文件已经更新。</span>

 **cat /etc/group  <span class="token operator">|</span> <span class="token function">grep</span> check_user   <span class="token comment"># 没有查到，已经删除了。** </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[i];function d(t,l){return a(),n("div",null,r)}const o=e(c,[["render",d],["__file","grpck.html.vue"]]);export{o as default};
