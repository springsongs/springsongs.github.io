import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const d={},l=n(`<h1 id="mysqldump" tabindex="-1"><a class="header-anchor" href="#mysqldump" aria-hidden="true">#</a> mysqldump</h1><p>MySQL数据库中备份工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mysqldump命令</strong> 是mysql数据库中备份工具，用于将MySQL服务器中的数据库以标准的sql语言的方式导出，并保存到文件中。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--add-drop-table：在每个创建数据库表语句前添加删除数据库表的语句；
--add-locks：备份数据库表时锁定数据库表；
--all-databases：备份MySQL服务器上的所有数据库；
--comments：添加注释信息；
--compact：压缩模式，产生更少的输出；
--complete-insert：输出完成的插入语句；
--databases：指定要备份的数据库；
--default-character-set：指定默认字符集；
--force：当出现错误时仍然继续备份操作；
--host：指定要备份数据库的服务器；
--lock-tables：备份前，锁定所有数据库表；
--no-create-db：禁止生成创建数据库语句；
--no-create-info：禁止生成创建数据库库表语句；
--password：连接MySQL服务器的密码；
--port：MySQL服务器的端口号；
--user：连接MySQL服务器的用户名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p><strong>导出整个数据库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-u</span> 用户名 <span class="token parameter variable">-p</span> 数据库名 <span class="token operator">&gt;</span> 导出的文件名
mysqldump <span class="token parameter variable">-u</span> linuxde <span class="token parameter variable">-p</span> smgp_apps_linuxde <span class="token operator">&gt;</span> linuxde.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导出一个表</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-u</span> 用户名 <span class="token parameter variable">-p</span> 数据库名 表名<span class="token operator">&gt;</span> 导出的文件名
mysqldump <span class="token parameter variable">-u</span> linuxde <span class="token parameter variable">-p</span> smgp_apps_linuxde <span class="token function">users</span> <span class="token operator">&gt;</span> linuxde_users.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导出一个数据库结构</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-u</span> linuxde <span class="token parameter variable">-p</span> <span class="token parameter variable">-d</span> --add-drop-table smgp_apps_linuxde <span class="token operator">&gt;</span> linuxde_db.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-d</code>没有数据，<code>--add-drop-tabl</code>e每个create语句之前增加一个<code>drop table</code></p>`,16),i=[l];function r(p,t){return e(),s("div",null,i)}const o=a(d,[["render",r],["__file","mysqldump.html.vue"]]);export{o as default};
