import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="nfsstat" tabindex="-1"><a class="header-anchor" href="#nfsstat" aria-hidden="true">#</a> nfsstat</h1><p>列出NFS客户端和服务器的工作状态</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>nfsstat命令</strong> 用于列出NFS客户端和服务器的工作状态。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nfsstat<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-s：仅列出NFS服务器端状态；
-c：仅列出NFS客户端状态；
-n：仅列出NFS状态，默认显示nfs客户端和服务器的状态；
-2：仅列出NFS版本2的状态；
-3：仅列出NFS版本3的状态；
-4：仅列出NFS版本4的状态；
-m：打印以加载的nfs文件系统状态；
-r：仅打印rpc状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>要显示关于客户机发送和拒绝的RPC和NFS调用数目的信息，输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nfsstat <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要显示和打印与客户机NFS调用相关的信息，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nfsstat <span class="token parameter variable">-cn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要显示和打印客户机和服务器的与RPC调用相关的信息，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nfsstat <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要显示关于服务器接收和拒绝的RPC和NFS调用数目的信息，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nfsstat –s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),r=[d];function l(t,c){return e(),s("div",null,r)}const u=a(i,[["render",l],["__file","nfsstat.html.vue"]]);export{u as default};
