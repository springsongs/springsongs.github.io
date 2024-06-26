import{_ as s,p as e,q as a,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="lsusb" tabindex="-1"><a class="header-anchor" href="#lsusb" aria-hidden="true">#</a> lsusb</h1><p>显示本机的USB设备列表信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lsusb命令</strong> 用于显示本机的USB设备列表，以及USB设备的详细信息。</p><p>lsusb命令是一个学习USB驱动开发，认识USB设备的助手，推荐大家使用，如果您的开发板中或者产品中没有lsusb命令可以自己移植一个，放到文件系统里面。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsusb<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-v：显示USB设备的详细信息；
-s<span class="token operator">&lt;</span>总线：设备号<span class="token operator">&gt;</span>仅显示指定的总线和（或）设备号的设备；
-d<span class="token operator">&lt;</span>厂商：产品<span class="token operator">&gt;</span>：仅显示指定厂商和产品编号的设备；
-t：以树状结构显示无理USB设备的层次；
-V：显示命令的版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>插入usb鼠标后执行lsusb的输出内容如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Bus 005 Device 001: <span class="token function">id</span> 0000:0000 
Bus 001 Device 001: ID 0000:0000 
Bus 004 Device 001: ID 0000:0000 
Bus 003 Device 001: ID 0000:0000 
Bus 002 Device 006: ID 15d9:0a37 
Bus 002 Device 001: ID 0000:0000 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><p><strong>Bus 005</strong></p><p>表示第五个usb主控制器(机器上总共有5个usb主控制器 -- 可以通过命令lspci | grep USB查看)</p><p><strong>Device 006</strong></p><p>表示系统给usb鼠标分配的设备号(devnum)，同时也可以看到该鼠标是插入到了第二个usb主控制器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>006        usb_device.devnum
/sys/devices/pci0000:00/0000:00:1d.1/usb2/2-2/devnum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ID 15d9:0a37</strong></p><p>表示usb设备的ID（这个ID由芯片制造商设置，可以唯一表示该设备）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>15d9    usb_device_descriptor.idVendor
0a37    usb_device_descriptor.idProduct
/sys/devices/pci0000:00/0000:00:1d.1/usb2/2-2/idVendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Bus 002 Device 006: ID 15d9:0a37<br> Bus 002 Device 001: ID 0000:0000</strong></p><p>表示002号usb主控制器上接入了两个设备:</p><ul><li>一个是usb根Hub -- 001</li><li>一个是usb鼠标  -- 006</li></ul>`,24),r=[d];function l(c,u){return e(),a("div",null,r)}const v=s(i,[["render",l],["__file","lsusb.html.vue"]]);export{v as default};
