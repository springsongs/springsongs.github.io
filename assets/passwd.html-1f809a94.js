import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h1 id="passwd" tabindex="-1"><a class="header-anchor" href="#passwd" aria-hidden="true">#</a> passwd</h1><p>用于让用户可以更改自己的密码</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>passwd命令</strong> 用于设置用户的认证信息，包括用户密码、密码过期时间等。系统管理者则能用它管理系统用户的密码。只有管理者可以指定用户名称，一般用户只能变更自己的密码。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>passwd<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-d：删除密码，仅有系统管理者才能使用；
-f：强制执行；
-k：设置只有在密码过期失效后，方能更新；
-l：锁住密码；
-s：列出密码的相关信息，仅有系统管理者才能使用；
-u：解开已上锁的帐号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>用户名：需要设置密码的用户名。</p><h3 id="知识扩展" tabindex="-1"><a class="header-anchor" href="#知识扩展" aria-hidden="true">#</a> 知识扩展</h3><p>与用户、组账户信息相关的文件</p><p>存放用户信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/passwd
/etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>存放组信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/group
/etc/gshadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用户信息文件分析（每项用<code>:</code>隔开）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>例如：jack:X:503:504:::/home/jack/:/bin/bash
jack　　<span class="token comment"># 用户名</span>
X　　<span class="token comment"># 口令、密码</span>
<span class="token number">503</span>　　<span class="token comment"># 用户id（0代表root、普通新建用户从500开始）</span>
<span class="token number">504</span>　　<span class="token comment"># 所在组</span>
<span class="token builtin class-name">:</span>　　<span class="token comment"># 描述</span>
/home/jack/　　<span class="token comment"># 用户主目录</span>
/bin/bash　　<span class="token comment"># 用户缺省Shell</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组信息文件分析</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>例如：jack:<span class="token variable">$!</span>$:???:13801:0:99999:7:*:*:
jack　　<span class="token comment"># 组名</span>
<span class="token variable">$!</span>$　　<span class="token comment"># 被加密的口令</span>
<span class="token number">13801</span>　　<span class="token comment"># 创建日期与今天相隔的天数</span>
<span class="token number">0</span>　　<span class="token comment"># 口令最短位数</span>
<span class="token number">99999</span>　　<span class="token comment"># 用户口令</span>
<span class="token number">7</span>　　<span class="token comment"># 到7天时提醒</span>
*　　<span class="token comment"># 禁用天数</span>
*　　<span class="token comment"># 过期天数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>如果是普通用户执行passwd只能修改自己的密码。如果新建用户后，要为新用户创建密码，则用passwd用户名，注意要以root用户的权限来创建。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd linuxde     # 更改或创建linuxde用户的密码；</span>
Changing password <span class="token keyword">for</span> user linuxde.
New UNIX password:           <span class="token comment"># 请输入新密码；</span>
Retype new UNIX password:    <span class="token comment"># 再输入一次；</span>
passwd: all authentication tokens updated successfully.  <span class="token comment"># 成功；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>普通用户如果想更改自己的密码，直接运行passwd即可，比如当前操作的用户是linuxde。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ <span class="token function">passwd</span>
Changing password <span class="token keyword">for</span> user linuxde.  <span class="token comment"># 更改linuxde用户的密码；</span>
<span class="token punctuation">(</span>current<span class="token punctuation">)</span> UNIX password:    <span class="token comment"># 请输入当前密码；</span>
New UNIX password:          <span class="token comment"># 请输入新密码；</span>
Retype new UNIX password:   <span class="token comment"># 确认新密码；</span>
passwd: all authentication tokens updated successfully.  <span class="token comment"># 更改成功；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我们让某个用户不能修改密码，可以用<code>-l</code>选项来锁定：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -l linuxde     # 锁定用户linuxde不能更改密码；</span>
Locking password <span class="token keyword">for</span> user linuxde.
passwd: Success            <span class="token comment"># 锁定成功；</span>

<span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span><span class="token comment"># su linuxde    # 通过su切换到linuxde用户；</span>
<span class="token punctuation">[</span>linuxde@localhost ~<span class="token punctuation">]</span>$ <span class="token function">passwd</span>       <span class="token comment"># linuxde来更改密码；</span>
Changing password <span class="token keyword">for</span> user linuxde.
Changing password <span class="token keyword">for</span> linuxde
<span class="token punctuation">(</span>current<span class="token punctuation">)</span> UNIX password:           <span class="token comment"># 输入linuxde的当前密码；</span>
passwd: Authentication token manipulation error      <span class="token comment"># 失败，不能更改密码；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来一例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -d linuxde   # 清除linuxde用户密码；</span>
Removing password <span class="token keyword">for</span> user linuxde.
passwd: Success                          <span class="token comment"># 清除成功；</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -S linuxde     # 查询linuxde用户密码状态；</span>
Empty password.                          <span class="token comment"># 空密码，也就是没有密码；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当我们清除一个用户的密码时，登录时就无需密码，这一点要加以注意。</p>`,30),l=[d];function c(p,t){return n(),a("div",null,l)}const r=s(i,[["render",c],["__file","passwd.html.vue"]]);export{r as default};
