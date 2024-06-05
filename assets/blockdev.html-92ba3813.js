import{_ as e,p as a,q as s,a1 as n}from"./framework-5866ffd3.js";const d={},i=n(`<h1 id="blockdev" tabindex="-1"><a class="header-anchor" href="#blockdev" aria-hidden="true">#</a> blockdev</h1><p>从命令行调用区块设备控制程序</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>blockdev命令</strong> 在命令调用“ioxtls”函数，以实现对设备的控制。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>blockdev<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-V：打印版本号并退出；
-q：安静模式；
-v：详细信息模式；
--setro：只读；
--setrw：只写；
--getro：打印只读状态，“1”表示只读，“0”表示非只读；
--getss：打印扇区大小。通常为521；
--flushbufs：刷新缓冲区；
--rereadpt：重新读取分区表。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>设备文件名：指定要操作的磁盘的设备文件名。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>设置设备为只读：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>blockdev <span class="token parameter variable">--setro</span> /dev/hda4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>读取设备是否为只读：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>blockdev <span class="token parameter variable">--getro</span> /dev/hda4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置设别为可读写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>blockdev <span class="token parameter variable">--setrw</span> /dev/hda4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),r=[i];function l(c,t){return a(),s("div",null,r)}const o=e(d,[["render",l],["__file","blockdev.html.vue"]]);export{o as default};
