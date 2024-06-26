import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="get-module" tabindex="-1"><a class="header-anchor" href="#get-module" aria-hidden="true">#</a> get_module</h1><p>获取Linux内核模块的详细信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>get_module命令</strong> 用于获取Linux内核模块的详细信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>get_module 模块名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>使用lsmod命令查看内核模块：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsmod <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-5</span>
Module                  Size  Used by
ipv6                  <span class="token number">272801</span>  <span class="token number">15</span>
xfrm_nalgo             <span class="token number">13381</span>  <span class="token number">1</span> ipv6
crypto_api             <span class="token number">12609</span>  <span class="token number">1</span> xfrm_nalgo
ip_conntrack_ftp       <span class="token number">11569</span>  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用get_module命令查看模块详细信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>get_module ipv6
        refcnt               <span class="token builtin class-name">:</span> <span class="token number">15</span>
        srcversion           <span class="token builtin class-name">:</span> 8CC9C024755B4483E56C0EF

Parameters:
        autoconf             <span class="token builtin class-name">:</span> <span class="token number">1</span>
        disable              <span class="token builtin class-name">:</span> <span class="token number">0</span>
        disable_ipv6         <span class="token builtin class-name">:</span> <span class="token number">0</span>
Sections:
        .altinstr_replacement <span class="token builtin class-name">:</span> 0xf8f1a3cf
        .altinstructions     <span class="token builtin class-name">:</span> 0xf8f1d03c
        .bss                 <span class="token builtin class-name">:</span> 0xf8f36000
        .data.read_mostly    <span class="token builtin class-name">:</span> 0xf8f34d20
        .data                <span class="token builtin class-name">:</span> 0xf8f2f7a0
        .exit.text           <span class="token builtin class-name">:</span> 0xf8f1a234
        .gnu.linkonce.this_module <span class="token builtin class-name">:</span> 0xf8f34e00
        .init.data           <span class="token builtin class-name">:</span> 0xf8a16a60
        .init.text           <span class="token builtin class-name">:</span> 0xf8a16000
        .module_sig          <span class="token builtin class-name">:</span> 0xf8f37960
        .rodata.str1.1       <span class="token builtin class-name">:</span> 0xf8f1ae46
        .rodata              <span class="token builtin class-name">:</span> 0xf8f1a420
        .smp_locks           <span class="token builtin class-name">:</span> 0xf8f1d150
        .strtab              <span class="token builtin class-name">:</span> 0xf8f29840
        .symtab              <span class="token builtin class-name">:</span> 0xf8f24000
        .text                <span class="token builtin class-name">:</span> 0xf8ef5000
        __kcrctab            <span class="token builtin class-name">:</span> 0xf8f1de70
        __kcrctab_gpl        <span class="token builtin class-name">:</span> 0xf8f1d9cc
        __ksymtab            <span class="token builtin class-name">:</span> 0xf8f1dd78
        __ksymtab_gpl        <span class="token builtin class-name">:</span> 0xf8f1d954
        __ksymtab_strings    <span class="token builtin class-name">:</span> 0xf8f1da44
        __param              <span class="token builtin class-name">:</span> 0xf8f1da08
        __versions           <span class="token builtin class-name">:</span> 0xf8f1df00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[l];function c(t,r){return n(),a("div",null,d)}const p=s(i,[["render",c],["__file","get_module.html.vue"]]);export{p as default};
