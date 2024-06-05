import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="lscpu" tabindex="-1"><a class="header-anchor" href="#lscpu" aria-hidden="true">#</a> lscpu</h1><p>显示有关CPU架构的信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lscpu命令</strong> 是显示有关CPU架构的信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lscpu <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> -a, <span class="token parameter variable">--all</span>               <span class="token comment"># 打印在线和离线CPU（默认为-e）</span>
 -b, <span class="token parameter variable">--online</span>            <span class="token comment"># 仅打印在线CPU（-p的默认值）</span>
 -c, <span class="token parameter variable">--offline</span>           <span class="token comment"># 打印离线CPU</span>
 -e, --extended<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>list<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token comment"># 打印出一个扩展的可读格式</span>
 -p, --parse<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>list<span class="token operator">&gt;</span><span class="token punctuation">]</span>    <span class="token comment"># 打印出可解析的格式</span>
 -s, <span class="token parameter variable">--sysroot</span> <span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span>     <span class="token comment"># 将指定的目录用作系统根目录</span>
 -x, <span class="token parameter variable">--hex</span>               <span class="token comment"># 打印十六进制掩码，而不是CPU列表</span>

 -h, <span class="token parameter variable">--help</span>     <span class="token comment"># 显示此帮助并退出</span>
 -V, <span class="token parameter variable">--version</span>  <span class="token comment"># 输出版本信息并退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>可用列：
           CPU  逻辑CPU编号
          CORE  逻辑核心号码
        SOCKET  逻辑套接字号
          NODE  逻辑NUMA节点号
          BOOK  逻辑书号
         CACHE  显示了如何在CPU之间共享高速缓存
  POLARIZATION  虚拟硬件上的CPU调度模式
       ADDRESS  CPU的物理地址
    CONFIGURED  显示管理程序是否分配了CPU
        ONLINE  显示Linux是否正在使用CPU
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lscpu</span>
Architecture:          x86_64
CPU op-mode<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:        <span class="token number">32</span>-bit, <span class="token number">64</span>-bit
Byte Order:            Little Endian
CPU<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:                <span class="token number">4</span>
On-line CPU<span class="token punctuation">(</span>s<span class="token punctuation">)</span> list:   <span class="token number">0</span>-3
Thread<span class="token punctuation">(</span>s<span class="token punctuation">)</span> per core:    <span class="token number">1</span>
Core<span class="token punctuation">(</span>s<span class="token punctuation">)</span> per socket:    <span class="token number">4</span>
Socket<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:             <span class="token number">1</span>
NUMA node<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:          <span class="token number">1</span>
Vendor ID:             GenuineIntel
CPU family:            <span class="token number">6</span>
Model:                 <span class="token number">30</span>
Model name:            Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Xeon<span class="token punctuation">(</span>R<span class="token punctuation">)</span> CPU           X3430  @ <span class="token number">2</span>.40GHz
Stepping:              <span class="token number">5</span>
CPU MHz:               <span class="token number">2394.055</span>
BogoMIPS:              <span class="token number">4788.11</span>
Virtualization:        VT-x
L1d cache:             32K
L1i cache:             32K
L2 cache:              256K
L3 cache:              8192K
NUMA node0 CPU<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:     <span class="token number">0</span>-3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function t(p,o){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","lscpu.html.vue"]]);export{d as default};
