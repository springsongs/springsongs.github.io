import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},c=n(`<h1 id="hwclock" tabindex="-1"><a class="header-anchor" href="#hwclock" aria-hidden="true">#</a> hwclock</h1><p>显示与设定硬件时钟</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>hwclock命令</strong> 是一个硬件时钟访问工具，它可以显示当前时间、设置硬件时钟的时间和设置硬件时钟为系统时间，也可设置系统时间为硬件时钟的时间。</p><p>在Linux中有硬件时钟与系统时钟等两种时钟。硬件时钟是指主机板上的时钟设备，也就是通常可在BIOS画面设定的时钟。系统时钟则是指kernel中的时钟。当Linux启动时，系统时钟会去读取硬件时钟的设定，之后系统时钟即独立运作。所有Linux相关指令与函数都是读取系统时钟的设定。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hwclock<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--adjust：hwclock每次更改硬件时钟时，都会记录在/etc/adjtime文件中。使用--adjust参数，可使hwclock根据先前的记录来估算硬件时钟的偏差，并用来校正目前的硬件时钟；
--debug：显示hwclock执行时详细的信息；
--directisa：hwclock预设从/dev/rtc设备来存取硬件时钟。若无法存取时，可用此参数直接以I/O指令来存取硬件时钟；
--hctosys：将系统时钟调整为与目前的硬件时钟一致；
<span class="token parameter variable">--set</span> <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token operator">&lt;</span>日期与时间<span class="token operator">&gt;</span>：设定硬件时钟；
--show：显示硬件时钟的时间与日期；
--systohc：将硬件时钟调整为与目前的系统时钟一致；
--test：仅测试程序，而不会实际更改硬件时钟；
--utc：若要使用格林威治时间，请加入此参数，hwclock会执行转换的工作；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>设置硬件时间要依赖于操作系统时间，具体方法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hwclock –systohc
hwclock <span class="token parameter variable">--systohc</span> –-utc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不加任何参数使用hwclock，可以查看当前的硬件日期和时间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hwclock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看clock文件，确认是否设置了UTC：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/default/rcS 
<span class="token assign-left variable">UTC</span><span class="token operator">=</span>yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在其他一些版本的Linux（如RebHat）中可以这样查看：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/sysconfig/clock
<span class="token assign-left variable">ZONE</span><span class="token operator">=</span><span class="token string">&quot;America/Los_Angeles&quot;</span>
<span class="token assign-left variable">UTC</span><span class="token operator">=</span>false
<span class="token assign-left variable">ARC</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[c];function d(r,t){return e(),s("div",null,l)}const p=a(i,[["render",d],["__file","hwclock.html.vue"]]);export{p as default};
