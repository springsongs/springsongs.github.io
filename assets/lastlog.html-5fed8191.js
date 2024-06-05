import{_ as e,p as n,q as s,a1 as a}from"./framework-5866ffd3.js";const i={},l=a(`<h1 id="lastlog" tabindex="-1"><a class="header-anchor" href="#lastlog" aria-hidden="true">#</a> lastlog</h1><p>显示系统中所有用户最近一次登录信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lastlog命令</strong> 用于显示系统中所有用户最近一次登录信息。</p><p>lastlog文件在每次有用户登录时被查询。可以使用lastlog命令检查某特定用户上次登录的时间，并格式化输出上次登录日志<code>/var/log/lastlog</code>的内容。它根据UID排序显示登录名、端口号（tty）和上次登录时间。如果一个用户从未登录过，lastlog显示<code>**Never logged**</code>。注意需要以root身份运行该命令。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lastlog<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b<span class="token operator">&lt;</span>天数<span class="token operator">&gt;</span>：显示指定天数前的登录信息；
-h：显示召集令的帮助信息；
-t<span class="token operator">&lt;</span>天数<span class="token operator">&gt;</span>：显示指定天数以来的登录信息；
-u<span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span>：显示指定用户的最近登录信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lastlog
Username         Port     From             Latest
root             pts/0    <span class="token number">221.6</span>.45.34      Tue Dec <span class="token number">17</span> 09:40:48 +0800 <span class="token number">2013</span>
bin                                         **Never logged in** 
daemon                                      **Never logged in** 
adm                                         **Never logged in** 
lp                                          **Never logged in** 
<span class="token function">sync</span>                                        **Never logged in** 
<span class="token function">shutdown</span>                                    **Never logged in** 
<span class="token function">halt</span>                                        **Never logged in** 
mail                                        **Never logged in** 
news                                        **Never logged in** 
uucp                                        **Never logged in** 
operator                                    **Never logged in** 
games                                       **Never logged in** 
gopher                                      **Never logged in** 
<span class="token function">ftp</span>                                         **Never logged in** 
nobody                                      **Never logged in** 
vcsa                                        **Never logged in** 
ntp                                         **Never logged in** 
sshd                                        **Never logged in** 
nscd                                        **Never logged in** 
ldap                                        **Never logged in** 
postfix                                     **Never logged in** 
www                                         **Never logged in** 
mysql                                       **Never logged in** 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[l];function r(o,t){return n(),s("div",null,d)}const v=e(i,[["render",r],["__file","lastlog.html.vue"]]);export{v as default};
