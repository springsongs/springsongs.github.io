import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="dpkg" tabindex="-1"><a class="header-anchor" href="#dpkg" aria-hidden="true">#</a> dpkg</h1><p>Debian Linux系统上安装、创建和管理软件包</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>dpkg命令</strong> 是Debian Linux系统用来安装、创建和管理软件包的实用工具。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dpkg<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-i：安装软件包；
-r：删除软件包；
-P：删除软件包的同时删除其配置文件；
-L：显示于软件包关联的文件；
-l：显示已安装软件包列表；
--unpack：解开软件包；
-c：显示软件包内文件列表；
--confiugre：配置软件包。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>Deb软件包：指定要操作的.deb软件包。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dpkg <span class="token parameter variable">-i</span> package.deb     <span class="token comment"># 安装包</span>
dpkg <span class="token parameter variable">-r</span> package         <span class="token comment"># 删除包</span>
dpkg <span class="token parameter variable">-P</span> package         <span class="token comment"># 删除包（包括配置文件）</span>
dpkg <span class="token parameter variable">-L</span> package         <span class="token comment"># 列出与该包关联的文件</span>
dpkg <span class="token parameter variable">-l</span> package         <span class="token comment"># 显示该包的版本</span>
dpkg <span class="token parameter variable">--unpack</span> package.deb  <span class="token comment"># 解开deb包的内容</span>
dpkg <span class="token parameter variable">-S</span> keyword            <span class="token comment"># 搜索所属的包内容</span>
dpkg <span class="token parameter variable">-l</span>                    <span class="token comment"># 列出当前已安装的包</span>
dpkg <span class="token parameter variable">-c</span> package.deb        <span class="token comment"># 列出deb包的内容</span>
dpkg <span class="token parameter variable">--configure</span> package   <span class="token comment"># 配置包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[d];function c(l,p){return e(),n("div",null,r)}const o=a(i,[["render",c],["__file","dpkg.html.vue"]]);export{o as default};
