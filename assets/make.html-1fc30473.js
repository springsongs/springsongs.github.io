import{_ as a,p as e,q as n,a1 as i}from"./framework-5866ffd3.js";const s={},d=i(`<h1 id="make" tabindex="-1"><a class="header-anchor" href="#make" aria-hidden="true">#</a> make</h1><p>GNU的工程化编译工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>make命令</strong> 是GNU的工程化编译工具，用于编译众多相互关联的源代码文件，以实现工程化的管理，提高开发效率。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>make<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-f：指定“makefile”文件；
-i：忽略命令执行返回的出错信息；
-s：沉默模式，在执行之前不输出相应的命令行信息；
-r：禁止使用build-in规则；
-n：非执行模式，输出所有执行命令，但并不执行；
-t：更新目标文件；
-q：make操作将根据目标文件是否已经更新返回<span class="token string">&quot;0&quot;</span>或非<span class="token string">&quot;0&quot;</span>的状态信息；
-p：输出所有宏定义和目标文件描述；
-d：Debug模式，输出有关文件和检测时间的详细信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux下常用选项与Unix系统中稍有不同，下面是不同的部分：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> dir：在读取 makefile 之前改变到指定的目录dir；
<span class="token parameter variable">-I</span> dir：当包含其他 makefile文件时，利用该选项指定搜索目录；
-h：help文挡，显示所有的make选项；
-w：在处理 makefile 之前和之后，都显示工作目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>目标：指定编译目标。</p><h3 id="知识扩展" tabindex="-1"><a class="header-anchor" href="#知识扩展" aria-hidden="true">#</a> 知识扩展</h3><p>无论是在linux 还是在Unix环境 中，make都是一个非常重要的编译命令。不管是自己进行项目开发还是安装应用软件，我们都经常要用到make或make install。利用make工具，我们可以将大型的开发项目分解成为多个更易于管理的模块，对于一个包括几百个源文件的应用程序，使用make和 makefile工具就可以简洁明快地理顺各个源文件之间纷繁复杂的相互关系。</p><p>而且如此多的源文件，如果每次都要键入gcc命令进行编译的话，那对程序员 来说简直就是一场灾难。而make工具则可自动完成编译工作，并且可以只对程序员在上次编译后修改过的部分进行编译。</p><p>因此，有效的利用make和 makefile工具可以大大提高项目开发的效率。同时掌握make和makefile之后，您也不会再面对着Linux下的应用软件手足无措了。</p>`,16),r=[d];function l(c,t){return e(),n("div",null,r)}const h=a(s,[["render",l],["__file","make.html.vue"]]);export{h as default};
