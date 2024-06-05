import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="chage" tabindex="-1"><a class="header-anchor" href="#chage" aria-hidden="true">#</a> chage</h1><p>修改帐号和密码的有效期限</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>chage命令</strong> 是用来修改帐号和密码的有效期限。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chage <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-m：密码可更改的最小天数。为零时代表任何时候都可以更改密码。
-M：密码保持有效的最大天数。
-w：用户密码到期前，提前收到警告信息的天数。
-E：帐号到期的日期。过了这天，此帐号将不可用。
-d：上一次更改的日期。
-i：停滞时期。如果一个密码已过期这些天，那么此帐号将不可用。
-l：例出当前的设置。由非特权用户来确定他们的密码或帐号何时过期。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>可以编辑<code>/etc/login.defs</code>来设定几个参数，以后设置口令默认就按照参数设定为准：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PASS_MAX_DAYS   <span class="token number">99999</span>
PASS_MIN_DAYS   <span class="token number">0</span>
PASS_MIN_LEN    <span class="token number">5</span>
PASS_WARN_AGE   <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然在<code>/etc/default/useradd</code>可以找到如下2个参数进行设置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># useradd defaults file</span>
<span class="token assign-left variable">GROUP</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/home
<span class="token assign-left variable">INACTIVE</span><span class="token operator">=</span>-1
<span class="token assign-left variable">EXPIRE</span><span class="token operator">=</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token assign-left variable">SKEL</span><span class="token operator">=</span>/etc/skel
<span class="token assign-left variable">CREATE_MAIL_SPOOL</span><span class="token operator">=</span>yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过修改配置文件，能对之后新建用户起作用，而目前系统已经存在的用户，则直接用chage来配置。</p><p>我的服务器root帐户密码策略信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chage <span class="token parameter variable">-l</span> root

最近一次密码修改时间                  ： <span class="token number">3</span>月 <span class="token number">12</span>, <span class="token number">2013</span>
密码过期时间                         ：从不
密码失效时间                         ：从不
帐户过期时间                         ：从不
两次改变密码之间相距的最小天数          ：0
两次改变密码之间相距的最大天数          ：99999
在密码过期之前警告的天数               ：7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我可以通过如下命令修改我的密码过期时间：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chage <span class="token parameter variable">-M</span> <span class="token number">60</span> root
chage <span class="token parameter variable">-l</span> root

最近一次密码修改时间                  ： <span class="token number">3</span>月 <span class="token number">12</span>, <span class="token number">2013</span>
密码过期时间                         ： <span class="token number">5</span>月 <span class="token number">11</span>, <span class="token number">2013</span>
密码失效时间                         ：从不
帐户过期时间                         ：从不
两次改变密码之间相距的最小天数          ：0
两次改变密码之间相距的最大天数          ：60
在密码过期之前警告的天数               ：9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过如下命令设置密码失效时间：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chage <span class="token parameter variable">-I</span> <span class="token number">5</span> root
chage <span class="token parameter variable">-l</span> root

最近一次密码修改时间                  ： <span class="token number">3</span>月 <span class="token number">12</span>, <span class="token number">2013</span>
密码过期时间                         ： <span class="token number">5</span>月 <span class="token number">11</span>, <span class="token number">2013</span>
密码失效时间                         ： <span class="token number">5</span>月 <span class="token number">16</span>, <span class="token number">2013</span>
帐户过期时间                         ：从不
两次改变密码之间相距的最小天数          ：0
两次改变密码之间相距的最大天数          ：60
在密码过期之前警告的天数               ：9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述命令可以看到，在密码过期后5天，密码自动失效，这个用户将无法登陆系统了。</p>`,21),d=[l];function r(c,p){return s(),a("div",null,d)}const v=n(i,[["render",r],["__file","chage.html.vue"]]);export{v as default};
