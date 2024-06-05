import{_ as a,p as e,q as n,a1 as i}from"./framework-5866ffd3.js";const s={},d=i(`<h1 id="lpadmin" tabindex="-1"><a class="header-anchor" href="#lpadmin" aria-hidden="true">#</a> lpadmin</h1><p>配置CUPS套件中的打印机和类</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lpadmin命令</strong> 用于配置CUPS套件中的打印机和类，也被用来设置打印服务器默认打印机。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lpadmin<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-c：将打印机加入类；
-i：为打印机设置“system V”风格的接口脚本；
-m：从mode目录设置一个标准的“system V”接口脚本或“PPD”文件；
-o：为“PPD”或服务器设置选项；
-r：从类中删除打印机；
-u：设置打印机用户级的访问控制；
-D：为打印机提供一个文字描述；
-E：允许打印机接受打印任务；
-L：为打印机位置提供一个文字描述；
-P：为打印机指定一个ppd描述文件；
-p：指定要配置的打印机名称；
-d：设置默认打印机。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>打印机：指定要配置的打印机的名称。</p>`,10),l=[d];function r(c,t){return e(),n("div",null,l)}const u=a(s,[["render",r],["__file","lpadmin.html.vue"]]);export{u as default};
