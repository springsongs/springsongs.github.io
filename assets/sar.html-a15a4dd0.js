import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},r=e(`<h1 id="sar" tabindex="-1"><a class="header-anchor" href="#sar" aria-hidden="true">#</a> sar</h1><p>系统运行状态统计工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>sar命令</strong> 是Linux下系统运行状态统计工具，它将指定的操作系统状态计数器显示到标准输出设备。sar工具将对系统当前的状态进行取样，然后通过计算数据和比例来表达系统的当前运行状态。它的特点是可以连续对系统取样，获得大量的取样数据。取样数据和分析的结果都可以存入文件，使用它时消耗的系统资源很小。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sar<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-A：显示所有的报告信息；
-b：显示I/O速率；
-B：显示换页状态；
-c：显示进程创建活动；
-d：显示每个块设备的状态；
-e：设置显示报告的结束时间；
-f：从指定文件提取报告；
-i：设状态信息刷新的间隔时间；
-P：报告每个CPU的状态；
-R：显示内存状态；
-u：显示CPU利用率；
-v：显示索引节点，文件和其他内核表的状态；
-w：显示交换分区状态；
-x：显示给定进程的状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li>间隔时间：每次报告的间隔时间（秒）；</li><li>次数：显示报告的次数。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p><strong>察看内存和交换空间的使用率：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sar <span class="token parameter variable">-r</span>
Linux <span class="token number">2.4</span>.20-8 <span class="token punctuation">(</span>www.jsdig.com<span class="token punctuation">)</span>    <span class="token number">20130503</span>  
<span class="token number">12</span>:00:01 AM kbmemfree kbmemused  %memused 
kbmemshrd kbbuffers  kbcached  
<span class="token number">12</span>:10:00 AM    <span class="token number">240468</span>   <span class="token number">1048252</span>     <span class="token number">81.34</span>    
<span class="token number">0</span>    <span class="token number">133724</span>    <span class="token number">485772</span>  
<span class="token number">12</span>:20:00 AM    <span class="token number">240508</span>   <span class="token number">1048212</span>     <span class="token number">81.34</span>   
<span class="token number">0</span>    <span class="token number">134172</span>    <span class="token number">485600</span>  
…  
08:40:00 PM    <span class="token number">934132</span>    <span class="token number">354588</span>     <span class="token number">27.51</span>    
<span class="token number">0</span>     <span class="token number">26080</span>    <span class="token number">185364</span>  
Average:       <span class="token number">324346</span>    <span class="token number">964374</span>     <span class="token number">74.83</span>  
<span class="token number">0</span>     <span class="token number">96072</span>    <span class="token number">467559</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kbmemfree与kbmemused字段分别显示内存的未使用与已使用空间，后面跟着的是已使用空间的百分比（%memused字段）。kbbuffers与kbcached字段分别显示缓冲区与系统全域的数据存取量，单位为KB。</p><p><strong>观察系统部件10分钟，并对数据进行排序：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sar <span class="token parameter variable">-o</span> temp <span class="token number">60</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),l=[r];function d(c,u){return s(),a("div",null,l)}const t=n(i,[["render",d],["__file","sar.html.vue"]]);export{t as default};
