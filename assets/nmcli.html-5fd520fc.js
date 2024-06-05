import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},c=e(`<h1 id="nmcli" tabindex="-1"><a class="header-anchor" href="#nmcli" aria-hidden="true">#</a> nmcli</h1><p>地址配置工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>nmcli命令</strong> 是 NetworkManager client 网络管理客户端。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nmcli <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> OBJECT <span class="token punctuation">{</span> COMMAND <span class="token operator">|</span> <span class="token builtin class-name">help</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>OPTIONS
  -t<span class="token punctuation">[</span>erse<span class="token punctuation">]</span>                                  <span class="token comment"># terse output 简洁的输出</span>
  -p<span class="token punctuation">[</span>retty<span class="token punctuation">]</span>                                 <span class="token comment"># pretty output 漂亮的输出</span>
  -m<span class="token punctuation">[</span>ode<span class="token punctuation">]</span> tabular<span class="token operator">|</span>multiline                 <span class="token comment"># output mode  输出模式</span>
  -f<span class="token punctuation">[</span>ields<span class="token punctuation">]</span> <span class="token operator">&lt;</span>field1,field2,<span class="token punctuation">..</span>.<span class="token operator">&gt;|</span>all<span class="token operator">|</span>common  <span class="token comment"># specify fields to output 指定要输出的字段</span>
  -e<span class="token punctuation">[</span>scape<span class="token punctuation">]</span> <span class="token function">yes</span><span class="token operator">|</span>no                          <span class="token comment"># escape columns separators in values 在值中转义列分隔符</span>
  -n<span class="token punctuation">[</span>ocheck<span class="token punctuation">]</span>                                <span class="token comment"># 不要检查nmcli和NetworkManager版本</span>
  -a<span class="token punctuation">[</span>sk<span class="token punctuation">]</span>                                    <span class="token comment"># 要求缺少参数</span>
  -w<span class="token punctuation">[</span>ait<span class="token punctuation">]</span> <span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span>                         <span class="token comment"># 设置超时等待整理操作</span>
  -v<span class="token punctuation">[</span>ersion<span class="token punctuation">]</span>                                <span class="token comment"># 显示程序版本</span>
  -h<span class="token punctuation">[</span>elp<span class="token punctuation">]</span>                                   <span class="token comment"># 打印此帮助</span>

OBJECT
  g<span class="token punctuation">[</span>eneral<span class="token punctuation">]</span>       NetworkManager的一般状态和操作
  n<span class="token punctuation">[</span>etworking<span class="token punctuation">]</span>    整体组网控制
  r<span class="token punctuation">[</span>adio<span class="token punctuation">]</span>         NetworkManager切换开关
  c<span class="token punctuation">[</span>onnection<span class="token punctuation">]</span>    NetworkManager的连接
  d<span class="token punctuation">[</span>evice<span class="token punctuation">]</span>        由NetworkManager管理的设备
  a<span class="token punctuation">[</span>gent<span class="token punctuation">]</span>         NetworkManager秘密代理或polkit代理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nmcli connection show           <span class="token comment"># 查看当前连接状态</span>
nmcli connection reload         <span class="token comment"># 重启服务</span>
nmcli connection show <span class="token parameter variable">-active</span>   <span class="token comment"># 显示活动的连接</span>
nmcli connection show <span class="token string">&quot;lan eth0&quot;</span># 显示指定一个网络连接配置
nmcli device status             <span class="token comment"># 显示设备状态</span>
nmcli device show eno16777736   <span class="token comment"># 显示指定接口属性</span>
nmcli device show               <span class="token comment"># 显示全部接口属性</span>
nmcli con up static             <span class="token comment"># 启用static连接配置</span>
nmcli con up default            <span class="token comment"># 启用default连接配置 </span>
nmcli con <span class="token function">add</span> <span class="token builtin class-name">help</span>              <span class="token comment"># 查看帮助</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[c];function o(p,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","nmcli.html.vue"]]);export{d as default};
