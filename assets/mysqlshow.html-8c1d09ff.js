import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="mysqlshow" tabindex="-1"><a class="header-anchor" href="#mysqlshow" aria-hidden="true">#</a> mysqlshow</h1><p>显示MySQL中数据库相关信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>mysqlshow命令</strong> 用于显示mysql服务器中数据库、表和列表信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqlshow<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h：MySQL服务器的ip地址或主机名；
-u：连接MySQL服务器的用户名；
-p：连接MySQL服务器的密码；
--count：显示每个数据表中数据的行数；
-k：显示数据表的索引；
-t：显示数据表的类型；
-i：显示数据表的额外信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>数据库信息：指定要显示的数据库信息，可以是一个数据库名，或者是数据库名和表名，或者是数据库名、表名和列名。</p>`,10),r=[d];function l(c,t){return e(),s("div",null,r)}const o=a(i,[["render",l],["__file","mysqlshow.html.vue"]]);export{o as default};
