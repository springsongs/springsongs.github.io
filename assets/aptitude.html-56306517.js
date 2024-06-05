import{_ as a,p as n,q as e,a1 as s}from"./framework-5866ffd3.js";const i={},t=s(`<h1 id="aptitude" tabindex="-1"><a class="header-anchor" href="#aptitude" aria-hidden="true">#</a> aptitude</h1><p>Debian Linux系统中软件包管理工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>aptitude命令</strong> 与apt-get命令一样，都是Debian Linux及其衍生系统中功能极其强大的包管理工具。与apt-get不同的是，aptitude在处理依赖问题上更佳一些。举例来说，aptitude在删除一个包时，会同时删除本身所依赖的包。这样，系统中不会残留无用的包，整个系统更为干净。它通过文本操作菜单和命令两种方式管理软件包。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>aptitude<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h：显示帮助信息；
-d：仅下载软件包，不执行安装操作；
-P：每一步操作都要求确认；
-y：所有问题都回答“yes”；
-v：显示附加信息；
-u：启动时下载新的软件包列表。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>操作命令：用户管理软件包的操作命令。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>以下是我总结的一些常用aptitude命令，仅供参考：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">aptitude</span> update            <span class="token comment"># 更新可用的包列表</span>
<span class="token function">aptitude</span> upgrade           <span class="token comment"># 升级可用的包</span>
<span class="token function">aptitude</span> dist-upgrade      <span class="token comment"># 将系统升级到新的发行版</span>
<span class="token function">aptitude</span> <span class="token function">install</span> pkgname   <span class="token comment"># 安装包</span>
<span class="token function">aptitude</span> remove pkgname    <span class="token comment"># 删除包</span>
<span class="token function">aptitude</span> purge pkgname     <span class="token comment"># 删除包及其配置文件</span>
<span class="token function">aptitude</span> search string     <span class="token comment"># 搜索包</span>
<span class="token function">aptitude</span> show pkgname      <span class="token comment"># 显示包的详细信息</span>
<span class="token function">aptitude</span> clean             <span class="token comment"># 删除下载的包文件</span>
<span class="token function">aptitude</span> autoclean         <span class="token comment"># 仅删除过期的包文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，你也可以在文本界面模式中使用 aptitude。</p>`,14),d=[t];function c(p,l){return n(),e("div",null,d)}const o=a(i,[["render",c],["__file","aptitude.html.vue"]]);export{o as default};
