import{_ as e,p as s,q as a,a1 as n}from"./framework-5866ffd3.js";const i={},l=n(`<h1 id="shopt" tabindex="-1"><a class="header-anchor" href="#shopt" aria-hidden="true">#</a> shopt</h1><p>显示和设置shell操作选项</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>shopt命令</strong> 用于显示和设置shell中的行为选项，通过这些选项以增强shell易用性。shopt命令若不带任何参数选项，则可以显示所有可以设置的shell操作选项。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shopt<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-s：激活指定的shell行为选项；
-u：关闭指定的shell行为选项。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>shell选项：指定要操作的shell选项。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>使用shopt命令显示当前所有可以设置的shell操作选项，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span>           <span class="token comment">#输出所有可以设置的shell操作选项</span>
cdable_vars     off
cdspell         off
checkhash       off
checkwinsize    on
cmdhist         on
dotglob         off
execfail        off
expand_aliases  on
extdebug        off
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图上所示，选项&quot;cdspell&quot;的状态为&quot;off&quot;，即关闭cd拼写检查选项。现在，可以使用shopt命令将其开启，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> cdspell          <span class="token comment">#开启cd拼写检查</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的命令后，该选项的状态将变为&quot;on&quot;，即开启状态。可以再次通过该命令显示一下shell操作选项即可，输出信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cdspell on                <span class="token comment">#开启cdspell选项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用户可以通过实际执行cd命令检查该选项是否被成功开启。</p>`,18),d=[l];function c(t,r){return s(),a("div",null,d)}const o=e(i,[["render",c],["__file","shopt.html.vue"]]);export{o as default};
