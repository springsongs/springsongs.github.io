import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const l={},p=e(`<h1 id="lsmod" tabindex="-1"><a class="header-anchor" href="#lsmod" aria-hidden="true">#</a> lsmod</h1><p>显示已载入系统的模块</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>lsmod命令</strong> 用于显示已经加载到内核中的模块的状态信息。执行lsmod命令后会列出所有已载入系统的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放入核心。您可以将这些功能编译成一个个单独的模块，待需要时再分别载入。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsmod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@LinServ-1 ~<span class="token punctuation">]</span><span class="token comment"># lsmod</span>
Module                  Size  Used by
ipv6                  <span class="token number">272801</span>  <span class="token number">15</span>
xfrm_nalgo             <span class="token number">13381</span>  <span class="token number">1</span> ipv6
crypto_api             <span class="token number">12609</span>  <span class="token number">1</span> xfrm_nalgo
ip_conntrack_ftp       <span class="token number">11569</span>  <span class="token number">0</span>
xt_limit                <span class="token number">6721</span>  <span class="token number">2</span>
xt_state                <span class="token number">6209</span>  <span class="token number">2</span>
ip_conntrack           <span class="token number">53665</span>  <span class="token number">2</span> ip_conntrack_ftp,xt_state
nfnetlink              <span class="token number">10713</span>  <span class="token number">1</span> ip_conntrack
xt_tcpudp               <span class="token number">7105</span>  <span class="token number">6</span>
xt_multiport            <span class="token number">7233</span>  <span class="token number">1</span>
iptable_filter          <span class="token number">7105</span>  <span class="token number">1</span>
ip_tables              <span class="token number">17029</span>  <span class="token number">1</span> iptable_filter
x_tables               <span class="token number">17349</span>  <span class="token number">5</span> xt_limit,xt_state,xt_tcpudp,xt_multiport,ip_tables
dm_mirror              <span class="token number">24393</span>  <span class="token number">0</span>
dm_multipath           <span class="token number">27213</span>  <span class="token number">0</span>
scsi_dh                <span class="token number">12481</span>  <span class="token number">1</span> dm_multipath
video                  <span class="token number">21193</span>  <span class="token number">0</span>
backlight              <span class="token number">10049</span>  <span class="token number">1</span> video
sbs                    <span class="token number">18533</span>  <span class="token number">0</span>
power_meter            <span class="token number">16461</span>  <span class="token number">0</span>
hwmon                   <span class="token number">7365</span>  <span class="token number">1</span> power_meter
i2c_ec                  <span class="token number">9025</span>  <span class="token number">1</span> sbs
dell_wmi                <span class="token number">8401</span>  <span class="token number">0</span>
wmi                    <span class="token number">12137</span>  <span class="token number">1</span> dell_wmi
button                 <span class="token number">10705</span>  <span class="token number">0</span>
battery                <span class="token number">13637</span>  <span class="token number">0</span>
asus_acpi              <span class="token number">19289</span>  <span class="token number">0</span>
ac                      <span class="token number">9157</span>  <span class="token number">0</span>
lp                     <span class="token number">15849</span>  <span class="token number">0</span>
snd_hda_intel         <span class="token number">401453</span>  <span class="token number">0</span>
snd_seq_dummy           <span class="token number">7877</span>  <span class="token number">0</span>
snd_seq_oss            <span class="token number">32577</span>  <span class="token number">0</span>
snd_seq_midi_event     <span class="token number">11073</span>  <span class="token number">1</span> snd_seq_oss
snd_seq                <span class="token number">49585</span>  <span class="token number">5</span> snd_seq_dummy,snd_seq_oss,snd_seq_midi_event
snd_seq_device         <span class="token number">11725</span>  <span class="token number">3</span> snd_seq_dummy,snd_seq_oss,snd_seq
snd_pcm_oss            <span class="token number">42817</span>  <span class="token number">0</span>
snd_mixer_oss          <span class="token number">19009</span>  <span class="token number">1</span> snd_pcm_oss
snd_pcm                <span class="token number">72517</span>  <span class="token number">2</span> snd_hda_intel,snd_pcm_oss
ide_cd                 <span class="token number">40161</span>  <span class="token number">0</span>
snd_timer              <span class="token number">24517</span>  <span class="token number">2</span> snd_seq,snd_pcm
tpm_tis                <span class="token number">16713</span>  <span class="token number">0</span>
r8169                  <span class="token number">43077</span>  <span class="token number">0</span>
snd_page_alloc         <span class="token number">14281</span>  <span class="token number">2</span> snd_hda_intel,snd_pcm
tpm                    <span class="token number">19041</span>  <span class="token number">1</span> tpm_tis
i2c_i801               <span class="token number">12737</span>  <span class="token number">0</span>
mii                     <span class="token number">9409</span>  <span class="token number">1</span> r8169
serio_raw              <span class="token number">10693</span>  <span class="token number">0</span>
i2c_core               <span class="token number">24897</span>  <span class="token number">2</span> i2c_ec,i2c_i801
snd_hwdep              <span class="token number">12869</span>  <span class="token number">1</span> snd_hda_intel
tpm_bios               <span class="token number">11073</span>  <span class="token number">1</span> tpm
cdrom                  <span class="token number">36577</span>  <span class="token number">1</span> ide_cd
pcspkr                  <span class="token number">7105</span>  <span class="token number">0</span>
parport_pc             <span class="token number">29669</span>  <span class="token number">1</span>
sg                     <span class="token number">36973</span>  <span class="token number">0</span>
snd                    <span class="token number">57797</span>  <span class="token number">9</span> snd_hda_intel,snd_seq_oss,snd_seq,snd_seq_device,snd_pcm_oss,snd_mixer_oss,snd_pcm,snd_timer,snd_hwdep
parport                <span class="token number">37513</span>  <span class="token number">2</span> lp,parport_pc
soundcore              <span class="token number">11553</span>  <span class="token number">1</span> snd
dm_raid45              <span class="token number">67273</span>  <span class="token number">0</span>
dm_message              <span class="token number">6977</span>  <span class="token number">1</span> dm_raid45
dm_region_hash         <span class="token number">15681</span>  <span class="token number">1</span> dm_raid45
dm_log                 <span class="token number">14785</span>  <span class="token number">3</span> dm_mirror,dm_raid45,dm_region_hash
dm_mod                 <span class="token number">63993</span>  <span class="token number">4</span> dm_mirror,dm_multipath,dm_raid45,dm_log
dm_mem_cache            <span class="token number">9537</span>  <span class="token number">1</span> dm_raid45
ata_piix               <span class="token number">23749</span>  <span class="token number">4</span>
libata                <span class="token number">158085</span>  <span class="token number">1</span> ata_piix
sd_mod                 <span class="token number">25409</span>  <span class="token number">6</span>
scsi_mod              <span class="token number">144277</span>  <span class="token number">4</span> scsi_dh,sg,libata,sd_mod
ext3                  <span class="token number">126281</span>  <span class="token number">3</span>
jbd                    <span class="token number">57705</span>  <span class="token number">1</span> ext3
uhci_hcd               <span class="token number">25421</span>  <span class="token number">0</span>
ohci_hcd               <span class="token number">24937</span>  <span class="token number">0</span>
ehci_hcd               <span class="token number">34509</span>  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第1列：表示模块的名称。</li><li>第2列：表示模块的大小。</li><li>第3列：表示依赖模块的个数。</li><li>第4列：表示依赖模块的内容。</li></ul><p>通常在使用lsmod命令时，都会采用类似<code>lsmod | grep -i ext3</code>这样的命令来查询当前系统是否加载了某些模块。</p>`,10),i=[p];function r(m,d){return s(),a("div",null,i)}const t=n(l,[["render",r],["__file","lsmod.html.vue"]]);export{t as default};
