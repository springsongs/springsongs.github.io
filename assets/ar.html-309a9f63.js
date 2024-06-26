import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="ar" tabindex="-1"><a class="header-anchor" href="#ar" aria-hidden="true">#</a> ar</h1><p>建立或修改备存文件，或是从备存文件中抽取文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>ar命令</strong> 是一个建立或修改备存文件，或是从备存文件中抽取文件的工具，ar可让您集合许多文件，成为单一的备存文件。在备存文件中，所有成员文件皆保有原来的属性与权限</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ar <span class="token punctuation">[</span>-<span class="token punctuation">]</span><span class="token punctuation">{</span>dmpqrtx<span class="token punctuation">}</span><span class="token punctuation">[</span>abcfilNoPsSuvV<span class="token punctuation">]</span> <span class="token punctuation">[</span>membername<span class="token punctuation">]</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span> archive files<span class="token punctuation">..</span>.
Usage: ar <span class="token punctuation">[</span>emulation options<span class="token punctuation">]</span> <span class="token punctuation">[</span>-<span class="token punctuation">]</span><span class="token punctuation">{</span>dmpqrstx<span class="token punctuation">}</span><span class="token punctuation">[</span>abcDfilMNoPsSTuvV<span class="token punctuation">]</span> <span class="token punctuation">[</span>--plugin <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>member-name<span class="token punctuation">]</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span> archive-file file<span class="token punctuation">..</span>.
       ar <span class="token parameter variable">-M</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>mri-脚本<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ar 允许你 在第一个 命令行 参数中 以任意 顺序 混合 指定 操作码p 和修饰符mod <span class="token builtin class-name">.</span>

只要你 愿意, 也可以 用破折号 作为 命令行 第一个 参数的 开始.

p 关键字 指明 要执行的 操作, 只能 指明为 如下 之一:

d      从档案中删除 模块. 通过files 指明 要删除的 模块的 名称<span class="token punctuation">;</span> 如果 没有 指出 要删除的  文件  名称,  档案不会  改变  任何
      内容.

      如果 给出了<span class="token string">&#39;v&#39;</span> 修饰符,ar 会例出 它删除的 每一个 模块.

m      用此 操作 在档案中移动 成员.
      如果 某个 符号名 在档案的 多个 成员中 有定义, 那么 程序 怎样 连接 档案 文件 得到的 结果 可能是 不同的.
      如果  没有为m 指定 修饰符, 由files 指出的 成员 将移动到 档案的末尾 <span class="token punctuation">;</span> 可以 通过 <span class="token variable"><span class="token variable">\`</span>a&#39;, <span class="token variable">\`</span></span>b<span class="token string">&#39; 或 \`i&#39;</span> 等修饰符, 指定 成员
      移动的 具体 位置.

p      在标准 输出上 打印 档案中 指定的 成员.  如果 给出了<span class="token variable"><span class="token variable">\`</span>v&#39; 修饰符, 在 打印 成员 内容 之前, 先打印 成员的 名字.
      如果没有 指明files 参数, 档案中 所有的 成员 都会被 打印 出来.

q      快速 追加<span class="token punctuation">;</span> 增加 files 到 archive 的末尾, 不进行 替换 检查.
      修饰符 <span class="token variable">\`</span></span>a<span class="token string">&#39; \`b&#39;</span> 和 <span class="token variable"><span class="token variable">\`</span>i&#39;不 影响此 操作, 新成员 始终 追加到 档案的 末尾处.
      修饰符 <span class="token variable">\`</span></span><span class="token function">v</span><span class="token string">&#39; 可以使 ar 列出 它追加的 所有文件.
      由于 本功能 是用于 快速操作, 即使 档案中 有 符号表 索引 也不 进行 更新; 可以 使用 \`ar s&#39;</span> 或 ranlib 明确 要求  更新
      这些索引.

      在为快速 追加 重建 索引时,由于 有 太多 不同的 系统, 所以 GNU ar 采用 <span class="token variable"><span class="token variable">\`</span>q&#39; 作为 <span class="token variable">\`</span></span>r<span class="token string">&#39;的一个 同义字.

r      把文件  files  插入 archive ( 替换 ). 本操作与 \`q&#39;</span> 是不同的, 如果 档案中 已有的 某个 成员与 插入 文件的 名称 相同,
      此成员 将被删除.
      如果 不存在 名称为 files 的文件, ar 显示 一个 错误 消息, 并且 保留 档案中 已有的 同名 成员.
      缺省情况下, 新成员 增加到 挡案的 末尾<span class="token punctuation">;</span> 可以 通过 使用 <span class="token variable"><span class="token variable">\`</span>a&#39; <span class="token variable">\`</span></span>b<span class="token string">&#39; 或 \`i&#39;</span> 等修饰符 指定 相对于 已有 成员的 位置.
      通过 使用 <span class="token variable"><span class="token variable">\`</span>v&#39; 修饰符 会为每个 插入的 文件 产生 一行 输出, 根据 输出中的 字符 <span class="token variable">\`</span></span>a<span class="token string">&#39; 或 \`r&#39;</span> 可以 表明 该文件  是追加的
      <span class="token punctuation">(</span>没有 删除 以前的成员<span class="token punctuation">)</span> 还是 替换的.

t      显示  一个 archive 档案 所包含 内容的 列表 , 或 档案中的 由 files 指出的 文件 列表.  通常 只显示 成员的 名称, 如果
      使用 <span class="token variable"><span class="token variable">\`</span>v&#39; 修饰符, 可以 得到 成员的 权限, 时间属性, 属主, 组和 大小.

      如果 没有 指出 files, 档案中的 所有 文件 都会 列出.

      如果 档案中 <span class="token punctuation">(</span>称为 <span class="token variable">\`</span></span>b.a<span class="token string">&#39;) 有多个 同名 成员 (称为 \`fie&#39;</span><span class="token punctuation">)</span>, <span class="token variable"><span class="token variable">\`</span>ar t b.a fie&#39; 仅仅 列出 第一个<span class="token punctuation">;</span> 要看到 它们的 全部,  必须
      要求 完整的 列表 —在本例中是 <span class="token variable">\`</span></span>ar t b.a<span class="token string">&#39;.

x      从档案中 抽取  成员 (名称为 files) .  如果 使用 \`v&#39;</span> 修饰符, ar 会列出 它抽取的 每一个 文件的 名字.
      如果没有给出 files, 抽取 档案中 所有的 文件.

可以在 操作符 p 后紧随 一定数量的 修饰符 mod 以指明 操作的 各种 行为.

a      增加 文件到 档案中 已有 成员 之后  , 如果 使用了 修饰符 a, 必须在 档案 名称 archive 之前 以 membername 参数的 形式
      给出 档案中 已有 成员的 名字.

b      增加 文件到 档案中 已有 成员 之前  , 如果 使用了 修饰符 b, 必须在 档案 名称 archive 之前 以 membername 参数的 形式
      给出 档案中 已有 成员的 名字.  <span class="token punctuation">(</span>和修饰符 <span class="token variable"><span class="token variable">\`</span>i&#39; 相同<span class="token punctuation">)</span>.

c      建立    档案.  指定的 档案 archive 始终 会被建立, 如果 你要求 执行的是 更新, 通过 此修饰符 建立 档案时 会给出 一个
      警告.
      
f      截短 档案成员的 名字.  ar 通常 允许 任意 长度的 文件名, 但这会 导致 与某些 系统上的 ar 出现 兼容性  问题,  使用  f
      修饰符 可以 在往档案中 追加 文件时 把名字 截短.

i      插入 文件到 档案中 已有 成员 之前  , 如果 使用了 修饰符 i, 必须在 档案 名称 archive 之前 以 membername 参数的 形式
      给出 档案中 已有 成员的 名字.  <span class="token punctuation">(</span>与修饰符 <span class="token variable">\`</span></span>b<span class="token string">&#39; 相同).

l      接受此修饰符, 但不起作用.

N      使用 count 参数. 本修饰符 用于 在档案中 有多个 同名 成员的 情况.  删除 或抽取 档案中 给定 名字的第 count 个实例.

o      抽取 成员时 保留 他们 原始的  时间属性. 如果 没有 此修饰符, 文件以抽取 的时间 作为 它的时间 属性.

P      匹配 档案中的 名字时 使用 完整的 路径名.  ar 不能 建立 使用 完整 路径名的 档案  (这不符合  POSIX  标准),  但其它的
      档案  工具  能够建立, 本选项 会使 ar 在抽取 由其它 工具 建立的 档案 文件时, 使用完整的 路径名 去匹配 档案中 成员的
      名字.

s      即使 没有对 档案 进行 改变, 用本 修饰符 也可以 往档案中 写一个 目标 文件的 索引 或更新 已经 存在的  索引.   可以与
      其它 操作 一起 使用 本修饰符, 也可以 单独使用.  对一个 档案 执行 \`ar s&#39;</span> 与执行 <span class="token variable"><span class="token variable">\`</span>ranlib&#39; 等价.

S      不生成  档案的 符号表. 这可以 加速 建立 大的档案 文件的 过程,但这样 建立的 档案 不能被 连接器 使用, 为建立 符号表,
      在最后 执行 <span class="token variable">\`</span></span>ar<span class="token string">&#39; 时应该 不用 \`S&#39;</span> 修饰符, 或者 对档案 执行 一次 <span class="token variable"><span class="token variable">\`</span>ranlib&#39; <span class="token builtin class-name">.</span>

u      通常ar r<span class="token punctuation">..</span>. 把所有 列出的 文件 插入到 档案中, 如果 希望 仅仅 插入比 档案中 已有 成员 更新的  文件时,  就应该  使用
      此修饰符.   <span class="token variable">\`</span></span>u<span class="token string">&#39;  修饰符  仅允许  与 \`r&#39;</span> <span class="token punctuation">(</span>替换<span class="token punctuation">)</span> 操作 一起 使用.  某些 情况下, 由于 用 <span class="token variable"><span class="token variable">\`</span>q&#39; 操作 比较 文件的 时间属性
      会失去 速度上的 优势, 所以 不允许 执行 <span class="token variable">\`</span></span>qu&#39; 组合操作.

<span class="token function">v</span>      使用本修饰符可以进行 冗余的 操作。附加了此修饰符时，很多操作会显示 更多的消息，如处理的文件名等。
V      显示 ar 的版本号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--plugin</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> - load the specified plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ar：支持的目标： elf64-x86-64 elf32-i386 elf32-x86-64 a.out-i386-linux pei-i386 pei-x86-64 elf64-l1om elf64-k1om elf64-little elf64-big elf32-little elf32-big plugin srec symbolsrec verilog tekhex binary ihex</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>打包文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls   # 显示当前目录文件   </span>
a.c	b.c d.c   install.log	  qte
anaconda-ks.cfg c.c Desktop 

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ar rv one.bak a.c b.c  # 打包 a.c b.c文件 </span>
ar: 正在创建 one.bak
a - a.c
a - b.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打包多个文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ar rv two.bak *.c  // 打包以.c结尾的文件  </span>
ar: 正在创建 two.bak
a - a.c
a - b.c
a - c.c
a - d.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示打包文件的内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ar t two.bak    </span>
a.c
b.c
c.c
d.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除打包文件的成员文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ar d two.bak a.c b.c c.c  </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ar t two.bak       </span>
d.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[l];function t(p,d){return a(),s("div",null,c)}const v=n(i,[["render",t],["__file","ar.html.vue"]]);export{v as default};
