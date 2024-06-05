import{_ as n,p as a,q as e,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="unzip" tabindex="-1"><a class="header-anchor" href="#unzip" aria-hidden="true">#</a> unzip</h1><p>用于解压缩由zip命令压缩的压缩包</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>unzip命令</strong> 用于解压缩由zip命令压缩的“.zip”压缩包。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>unzip<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-c：将解压缩的结果显示到屏幕上，并对字符做适当的转换；
-f：更新现有的文件；
-l：显示压缩文件内所包含的文件；
-p：与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换；
-t：检查压缩文件是否正确；
-u：与-f参数类似，但是除了更新现有的文件外，也会将压缩文件中的其他文件解压缩到目录中；
-v：执行时显示详细的信息；
-z：仅显示压缩文件的备注文字；
-a：对文本文件进行必要的字符转换；
-b：不要对文本文件进行字符转换；
-C：压缩文件中的文件名称区分大小写；
-j：不处理压缩文件中原有的目录路径；
-L：将压缩文件中的全部文件名改为小写；
-M：将输出结果送到more程序处理；
-n：解压缩时不要覆盖原有的文件；
-o：不必先询问用户，unzip执行后覆盖原有的文件；
-P<span class="token operator">&lt;</span>密码<span class="token operator">&gt;</span>：使用zip的密码选项；
-q：执行时不显示任何信息；
-s：将文件名中的空白字符转换为底线字符；
-V：保留VMS的文件版本信息；
-X：解压缩时同时回存文件原来的<span class="token environment constant">UID</span>/GID；
-d<span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>：指定文件解压缩后所要存储的目录；
-x<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：指定不要处理.zip压缩文件中的哪些文件；
-Z：unzip-Z等于执行zipinfo指令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>压缩包：指定要解压的“.zip”压缩包。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将压缩文件text.zip在当前目录下解压缩。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> test.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将压缩文件text.zip在指定目录<code>/tmp</code>下解压缩，如果已有相同的文件存在，要求unzip命令不覆盖原先的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> <span class="token parameter variable">-n</span> test.zip <span class="token parameter variable">-d</span> /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看压缩文件目录，但不解压。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> <span class="token parameter variable">-v</span> test.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将压缩文件test.zip在指定目录<code>/tmp</code>下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> <span class="token parameter variable">-o</span> test.zip <span class="token parameter variable">-d</span> tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压指定文件，* 用作通配符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> test.zip <span class="token string">&quot;*.jpg&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),l=[d];function r(t,c){return a(),e("div",null,l)}const u=n(i,[["render",r],["__file","unzip.html.vue"]]);export{u as default};
