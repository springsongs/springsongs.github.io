import{_ as e,M as t,p as i,q as l,R as s,t as n,N as o,a1 as p}from"./framework-5866ffd3.js";const c={},u=s("h1",{id:"jq",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#jq","aria-hidden":"true"},"#"),n(" jq")],-1),r=s("p",null,"一个灵活的轻量级命令行JSON处理器",-1),d=s("h3",{id:"补充说明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#补充说明","aria-hidden":"true"},"#"),n(" 补充说明")],-1),v={href:"https://github.com/stedolan/jq",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>jq 用于处理JSON输入，将给定过滤器应用于其JSON文本输入并在标准输出上将过滤器的结果生成为JSON。</p><p>最简单的过滤器是<code>.</code>，它将jq的输入未经修改地复制到其输出中（格式设置除外）。</p><p>请注意，jq 当前仅支持64位双精度浮点数（IEEE754）。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Debian系，如 Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jq

<span class="token comment"># RedHat系, 如 CentOS</span>
yum <span class="token function">install</span> jq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jq <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token operator">&lt;</span>jq filter<span class="token operator">&gt;</span> <span class="token punctuation">[</span>file<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
jq <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token parameter variable">--args</span> <span class="token operator">&lt;</span>jq filter<span class="token operator">&gt;</span> <span class="token punctuation">[</span>strings<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
jq <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token parameter variable">--jsonargs</span> <span class="token operator">&lt;</span>jq filter<span class="token operator">&gt;</span> <span class="token punctuation">[</span>JSON_TEXTS<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span>               紧凑而不是漂亮的输出<span class="token punctuation">;</span>
<span class="token parameter variable">-n</span>               使用<span class="token variable"><span class="token variable">\`</span>null<span class="token variable">\`</span></span>作为单个输入值<span class="token punctuation">;</span>
<span class="token parameter variable">-e</span>               根据输出设置退出状态代码<span class="token punctuation">;</span>
<span class="token parameter variable">-s</span>               将所有输入读取（吸取）到数组中；应用过滤器<span class="token punctuation">;</span>
<span class="token parameter variable">-r</span>               输出原始字符串，而不是JSON文本<span class="token punctuation">;</span>
<span class="token parameter variable">-R</span>               读取原始字符串，而不是JSON文本<span class="token punctuation">;</span>
<span class="token parameter variable">-C</span>               为JSON着色<span class="token punctuation">;</span>
<span class="token parameter variable">-M</span>               单色（不要为JSON着色）<span class="token punctuation">;</span>
<span class="token parameter variable">-S</span>               在输出上排序对象的键<span class="token punctuation">;</span>
<span class="token parameter variable">--tab</span>            使用制表符进行缩进<span class="token punctuation">;</span>
<span class="token parameter variable">--arg</span> a <span class="token function">v</span>        将变量<span class="token variable">$a</span>设置为value<span class="token operator">&lt;</span>v<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token parameter variable">--argjson</span> a <span class="token function">v</span>    将变量<span class="token variable">$a</span>设置为JSON value<span class="token operator">&lt;</span>v<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token parameter variable">--slurpfile</span> a f  将变量<span class="token variable">$a</span>设置为从<span class="token operator">&lt;</span>f<span class="token operator">&gt;</span>读取的JSON文本数组<span class="token punctuation">;</span>
<span class="token parameter variable">--rawfile</span> a f    将变量<span class="token variable">$a</span>设置为包含<span class="token operator">&lt;</span>f<span class="token operator">&gt;</span>内容的字符串<span class="token punctuation">;</span>
<span class="token parameter variable">--args</span>           其余参数是字符串参数，而不是文件<span class="token punctuation">;</span>
<span class="token parameter variable">--jsonargs</span>       其余的参数是JSON参数，而不是文件<span class="token punctuation">;</span>
--               终止参数处理<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><p><code>.</code>: 以漂亮的方式输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;{ &quot;foo&quot;: { &quot;bar&quot;: { &quot;baz&quot;: 123 } } }&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;.&#39;</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bar&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;baz&quot;</span><span class="token builtin class-name">:</span> <span class="token number">123</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.foo, .foo.bar, .foo?</code>: 获取一个键的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;{&quot;foo&quot;: 42, &quot;bar&quot;: &quot;less interesting data&quot;}&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;.foo&#39;</span>
<span class="token number">42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.[], .[]?, .[2], .[10:15]</code>: 数组运算</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;[{&quot;name&quot;:&quot;JSON&quot;, &quot;good&quot;:true}, {&quot;name&quot;:&quot;XML&quot;, &quot;good&quot;:false}]&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;.[1]&#39;</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;XML&quot;</span>,
  <span class="token string">&quot;good&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[], {}</code>: 构造一个数组/对象</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;{&quot;user&quot;:&quot;stedolan&quot;,&quot;titles&quot;:[&quot;JQ Primer&quot;, &quot;More JQ&quot;]}&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;{user, title: .titles[]}&#39;</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;user&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stedolan&quot;</span>,
  <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;JQ Primer&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;user&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stedolan&quot;</span>,
  <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;More JQ&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>length</code>: 计算一个值的长度</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;[[1,2], &quot;string&quot;, {&quot;a&quot;:2}, null]&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;.[] | length&#39;</span>                                  
<span class="token number">2</span>
<span class="token number">6</span>
<span class="token number">1</span>
<span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>keys</code>: 取出数组中的键</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;{&quot;abc&quot;: 1, &quot;abcd&quot;: 2, &quot;Foo&quot;: 3}&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;keys&#39;</span>                                        
<span class="token punctuation">[</span>
  <span class="token string">&quot;Foo&quot;</span>,
  <span class="token string">&quot;abc&quot;</span>,
  <span class="token string">&quot;abcd&quot;</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>,</code>: 使用多个过滤器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;{ &quot;foo&quot;: 42, &quot;bar&quot;: &quot;something else&quot;, &quot;baz&quot;: true}&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;.foo, .bar&#39;</span> 
<span class="token number">42</span>
<span class="token string">&quot;something else&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>|</code>: 通过管道将一个过滤器的输出当做下一个过滤器的输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;[{&quot;name&quot;:&quot;JSON&quot;, &quot;good&quot;:true}, {&quot;name&quot;:&quot;XML&quot;, &quot;good&quot;:false}]&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;.[] | .name&#39;</span>                                                 
<span class="token string">&quot;JSON&quot;</span>
<span class="token string">&quot;XML&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>select(foo)</code>: 如果foo返回true，则输入保持不变</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;[1,5,3,0,7]&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;map(select(. &gt;= 2))&#39;</span>                                                    
<span class="token punctuation">[</span>
  <span class="token number">5</span>,
  <span class="token number">3</span>,
  <span class="token number">7</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>map(foo)</code>: 每个输入调用过滤器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;[1,2,3]&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;map(.+1)&#39;</span>
<span class="token punctuation">[</span>
  <span class="token number">2</span>,
  <span class="token number">3</span>,
  <span class="token number">4</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if-then-else-end</code>: 条件判断</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token builtin class-name">echo</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;if . == 0 then &quot;zero&quot; elif . == 1 then &quot;one&quot; else &quot;many&quot; end&#39;</span>

<span class="token string">&quot;many&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\\(foo)</code>: 在字符串中插入值并进行运算</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;42&#39;</span> <span class="token operator">|</span> jq <span class="token string">&#39;&quot;The input was \\(.), which is one less than \\(.+1)&quot;&#39;</span>          

<span class="token string">&quot;The input was 42, which is one less than 43&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function m(k,q){const a=t("ExternalLinkIcon");return i(),l("div",null,[u,r,d,s("p",null,[n("jq 是 stedolan 开发的一个轻量级的和灵活的命令行JSON处理器，源码请参考 "),s("a",v,[n("jq 项目主页"),o(a)])]),b])}const h=e(c,[["render",m],["__file","jq.html.vue"]]);export{h as default};
