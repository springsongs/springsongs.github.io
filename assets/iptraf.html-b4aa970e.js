import{_ as e,p as a,q as i,a1 as n}from"./framework-5866ffd3.js";const s={},d=n(`<h1 id="iptraf" tabindex="-1"><a class="header-anchor" href="#iptraf" aria-hidden="true">#</a> iptraf</h1><p>实时地监视网卡流量</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>iptraf命令</strong> 可以实时地监视网卡流量，可以生成网络协议数据包信息、以太网信息、网络节点状态和ip校验和错误等信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptraf<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-i网络接口：立即在指定网络接口上开启IP流量监视；
-g：立即开始生成网络接口的概要状态信息；
-d网络接口：在指定网络接口上立即开始监视明细的网络流量信息；
-s网络接口：在指定网络接口上立即开始监视TCP和UDP网络流量信息；
-z网络接口：在指定网络接口上显示包计数；
-l网络接口：在指定网络接口上立即开始监视局域网工作站信息；
-t时间：指定iptraf指令监视的时间；
-B；将标注输出重新定向到“/dev/null”，关闭标注输入，将程序作为后台进程运行；
-f：清空所有计数器；
-h：显示帮助信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[d];function l(t,c){return a(),i("div",null,r)}const u=e(s,[["render",l],["__file","iptraf.html.vue"]]);export{u as default};
