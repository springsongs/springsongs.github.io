import{_ as e,p as a,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="arptables" tabindex="-1"><a class="header-anchor" href="#arptables" aria-hidden="true">#</a> arptables</h1><p>管理ARP包过滤规则表</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>arptables命令</strong> 用来设置、维护和检查Linux内核中的arp包过滤规则表。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arptables<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-A：向规则链中追加规则；
-D：从指定的链中删除规则；
-l：向规则链中插入一条新的规则；
-R：替换指定规则；
-P：设置规则链的默认策略；
-F：刷新指定规则链，将其中的所有规则链删除，但是不改变规则链的默认策略；
-Z：将规则链计数器清零；
-L：显示规则链中的规则列表；
-X：删除指定的空用户自定义规则链；
-h：显示指令帮助信息；
-j：指定满足规则的添加时的目标；
-s：指定要匹配ARP包的源ip地址；
-d：指定要匹配ARP包的目的IP地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[d];function l(c,t){return a(),n("div",null,r)}const u=e(i,[["render",l],["__file","arptables.html.vue"]]);export{u as default};
