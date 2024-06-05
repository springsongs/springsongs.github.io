import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h1><p>控制系统服务的实用工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>service命令</strong> 是Redhat Linux兼容的发行版中用来控制系统服务的实用工具，它以启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>service<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h：显示帮助信息；
--status-all：显示所服务的状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>服务名：自动要控制的服务名，即<code>/etc/init.d</code>目录下的脚本文件名；</li><li>控制命令：系统服务脚本支持的控制命令。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>当修改了主机名、ip地址等信息时，经常需要把网络重启使之生效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> network status
配置设备：
lo eth0
当前的活跃设备：
lo eth0

<span class="token function">service</span> network restart
正在关闭接口 eth0：                                        <span class="token punctuation">[</span>  确定  <span class="token punctuation">]</span>
关闭环回接口：                                             <span class="token punctuation">[</span>  确定  <span class="token punctuation">]</span>
设置网络参数：                                             <span class="token punctuation">[</span>  确定  <span class="token punctuation">]</span>
弹出环回接口：                                             <span class="token punctuation">[</span>  确定  <span class="token punctuation">]</span>
弹出界面 eth0：                                            <span class="token punctuation">[</span>  确定  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> mysqld status
mysqld <span class="token punctuation">(</span>pid <span class="token number">1638</span><span class="token punctuation">)</span> 正在运行<span class="token punctuation">..</span>.

<span class="token function">service</span> mysqld restart
停止 MySQL：                                               <span class="token punctuation">[</span>  确定  <span class="token punctuation">]</span>
启动 MySQL：                                               <span class="token punctuation">[</span>  确定  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[t];function d(l,r){return s(),a("div",null,c)}const p=n(i,[["render",d],["__file","service.html.vue"]]);export{p as default};
