import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h1 id="mysqladmin" tabindex="-1"><a class="header-anchor" href="#mysqladmin" aria-hidden="true">#</a> mysqladmin</h1><p>MySQL服务器管理客户端</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mysqladmin命令</strong> 是mysql服务器管理任务的客户端工具，它可以检查mytsql服务器的配置和当前工作状态，创建和删除数据库，创建用户和修改用户密码等操作。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqladmin<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h：MySQL服务器主机名或ip地址；
-u：连接MySQL服务器的用户名；
-p：连接MySQL服务器的密码；
--help：显示帮助信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>管理命令：需要在MySQL服务器上执行的管理命令。</p><p><strong>mysqladmin支持下列命令：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create databasename：创建一个新数据库；
drop databasename：删除一个数据库及其所有表；
extended-status：给出服务器的一个扩展状态消息；
flush-hosts：清空所有缓存的主机；
flush-logs：清空所有日志；
flush-tables：清空所有表；
flush-privileges：再次装载授权表<span class="token punctuation">(</span>同reload<span class="token punctuation">)</span>；
<span class="token function">kill</span> id,id,<span class="token punctuation">..</span>.：杀死mysql线程；
password 新口令：将老密码改为新密码；
ping：检查mysqld是否活着；
processlist：显示服务其中活跃线程列表；
reload：重载授权表；
refresh：清空所有表并关闭和打开日志文件；
shutdown：关掉服务器；
status：给出服务器的简短状态消息；
variables：打印出可用变量；
version：得到服务器的版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[d];function r(c,t){return s(),a("div",null,l)}const v=n(i,[["render",r],["__file","mysqladmin.html.vue"]]);export{v as default};
