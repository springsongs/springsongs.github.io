import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="objdump" tabindex="-1"><a class="header-anchor" href="#objdump" aria-hidden="true">#</a> objdump</h1><p>显示二进制文件信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>objdump命令</strong> 是用查看目标文件或者可执行的目标文件的构成的gcc工具。</p><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span> --archive-headers 
<span class="token comment"># 显示档案库的成员信息,类似ls -l将lib*.a的信息列出。 </span>

<span class="token parameter variable">-b</span> bfdname <span class="token parameter variable">--target</span><span class="token operator">=</span>bfdname 
<span class="token comment"># 指定目标码格式。这不是必须的，objdump能自动识别许多格式，比如： </span>

objdump <span class="token parameter variable">-b</span> oasys <span class="token parameter variable">-m</span> vax <span class="token parameter variable">-h</span> fu.o 
<span class="token comment"># 显示fu.o的头部摘要信息，明确指出该文件是Vax系统下用Oasys编译器生成的目标文件。objdump -i将给出这里可以指定的目标码格式列表。 </span>

<span class="token parameter variable">-C</span> <span class="token parameter variable">--demangle</span> 
<span class="token comment"># 将底层的符号名解码成用户级名字，除了去掉所开头的下划线之外，还使得C++函数名以可理解的方式显示出来。 </span>
<span class="token parameter variable">--debugging</span> 
<span class="token parameter variable">-g</span> 
<span class="token comment"># 显示调试信息。企图解析保存在文件中的调试信息并以C语言的语法显示出来。仅仅支持某些类型的调试信息。有些其他的格式被readelf -w支持。 </span>

<span class="token parameter variable">-e</span> --debugging-tags 
<span class="token comment"># 类似-g选项，但是生成的信息是和ctags工具相兼容的格式。 </span>
<span class="token parameter variable">--disassemble</span> 
<span class="token parameter variable">-d</span> 
<span class="token comment"># 从objfile中反汇编那些特定指令机器码的section。 </span>

<span class="token parameter variable">-D</span> --disassemble-all 
<span class="token comment"># 与 -d 类似，但反汇编所有section. </span>

--prefix-addresses 
<span class="token comment"># 反汇编的时候，显示每一行的完整地址。这是一种比较老的反汇编格式。 </span>

<span class="token parameter variable">-EB</span> 
<span class="token parameter variable">-EL</span> 
<span class="token parameter variable">--endian</span><span class="token operator">=</span><span class="token punctuation">{</span>big<span class="token operator">|</span>little<span class="token punctuation">}</span> 
<span class="token comment"># 指定目标文件的小端。这个项将影响反汇编出来的指令。在反汇编的文件没描述小端信息的时候用。例如S-records. </span>

<span class="token parameter variable">-f</span> 
--file-headers 
显示objfile中每个文件的整体头部摘要信息。 

<span class="token parameter variable">-h</span> 
--section-headers 
<span class="token parameter variable">--headers</span> 
显示目标文件各个section的头部摘要信息。 

<span class="token parameter variable">-H</span> 
<span class="token parameter variable">--help</span> 
简短的帮助信息。 

<span class="token parameter variable">-i</span> 
<span class="token parameter variable">--info</span> 
显示对于 <span class="token parameter variable">-b</span> 或者 <span class="token parameter variable">-m</span> 选项可用的架构和目标格式列表。 

<span class="token parameter variable">-j</span> name
<span class="token parameter variable">--section</span><span class="token operator">=</span>name 
仅仅显示指定名称为name的section的信息 

<span class="token parameter variable">-l</span>
--line-numbers 
用文件名和行号标注相应的目标代码，仅仅和-d、-D或者-r一起使用使用-ld和使用-d的区别不是很大，在源码级调试的时候有用，要求编译时使用了-g之类的调试编译选项。 

<span class="token parameter variable">-m</span> machine 
<span class="token parameter variable">--architecture</span><span class="token operator">=</span>machine 
指定反汇编目标文件时使用的架构，当待反汇编文件本身没描述架构信息的时候<span class="token punctuation">(</span>比如S-records<span class="token punctuation">)</span>，这个选项很有用。可以用-i选项列出这里能够指定的架构. 

<span class="token parameter variable">--reloc</span> 
<span class="token parameter variable">-r</span> 
显示文件的重定位入口。如果和-d或者-D一起使用，重定位部分以反汇编后的格式显示出来。 

--dynamic-reloc 
<span class="token parameter variable">-R</span> 
显示文件的动态重定位入口，仅仅对于动态目标文件意义，比如某些共享库。 

<span class="token parameter variable">-s</span> 
--full-contents 
显示指定section的完整内容。默认所有的非空section都会被显示。 

<span class="token parameter variable">-S</span> 
<span class="token parameter variable">--source</span> 
尽可能反汇编出源代码，尤其当编译的时候指定了-g这种调试参数时，效果比较明显。隐含了-d参数。 

--show-raw-insn 
反汇编的时候，显示每条汇编指令对应的机器码，如不指定--prefix-addresses，这将是缺省选项。 

--no-show-raw-insn 
反汇编时，不显示汇编指令的机器码，如不指定--prefix-addresses，这将是缺省选项。 

--start-address<span class="token operator">=</span>address 
从指定地址开始显示数据，该选项影响-d、-r和-s选项的输出。 

--stop-address<span class="token operator">=</span>address 
显示数据直到指定地址为止，该项影响-d、-r和-s选项的输出。 

<span class="token parameter variable">-t</span> 
<span class="token parameter variable">--syms</span> 
显示文件的符号表入口。类似于nm -s提供的信息 

<span class="token parameter variable">-T</span> 
--dynamic-syms 
显示文件的动态符号表入口，仅仅对动态目标文件意义，比如某些共享库。它显示的信息类似于 nm -D<span class="token operator">|</span>--dynamic 显示的信息。 

<span class="token parameter variable">-V</span> 
<span class="token parameter variable">--version</span> 
版本信息 

--all-headers 
<span class="token parameter variable">-x</span> 
显示所可用的头信息，包括符号表、重定位入口。-x 等价于-a <span class="token parameter variable">-f</span> <span class="token parameter variable">-h</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-t</span> 同时指定。 

<span class="token parameter variable">-z</span> 
--disassemble-zeroes 
一般反汇编输出将省略大块的零，该选项使得这些零块也被反汇编。 

@file 可以将选项集中到一个文件中，然后使用这个@file选项载入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>首先，在给出后面大部分测试所基于的源代码以及编译指令。 源代码如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@localhost <span class="token punctuation">[</span>test<span class="token punctuation">]</span><span class="token comment"># nl mytest.cpp </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>void <span class="token function-name function">printTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    char a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

void <span class="token function-name function">printTest2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
int a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token assign-left variable">a</span><span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对以上源代码进行编译，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># g++ -c -g mytest.cpp </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里，生成的文件是mytest.o，为了方便测试包含了调试的信息，对可执行文件的测试，显示的结果类似。</p><p>**查看当前使用的objdump的版本号： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -V </span>
GNU objdump <span class="token number">2.17</span>.50.0.6-14.el5 <span class="token number">20061020</span> 
Copyright <span class="token number">2005</span> <span class="token function">free</span> Software Foundation, Inc. 
This program is <span class="token function">free</span> software<span class="token punctuation">;</span> you may redistribute it under the terms of 
the GNU General Public License.  This program has absolutely no warranty. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**查看档案库文件中的信息： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -a libmy2.a </span>
In archive libmy2.a: 
myfile.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 
rwxrwxrwx <span class="token number">0</span>/0   <span class="token number">2724</span> Nov <span class="token number">16</span> <span class="token number">16</span>:06 <span class="token number">2009</span> myfile.o 
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 
rw-r--r-- <span class="token number">0</span>/0    <span class="token number">727</span> Jul <span class="token number">13</span> <span class="token number">15</span>:32 <span class="token number">2011</span> mytest.o 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*<em>这里，libmy2.a是一个使用ar命令将多个</em>.o目标文件打包而生成的静态库。命令的输出类似<code>ar -tv</code>，相比较<code>ar -tv</code>输出如下： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ar -tv libmy2.a </span>
rwxrwxrwx <span class="token number">0</span>/0   <span class="token number">2724</span> Nov <span class="token number">16</span> <span class="token number">16</span>:06 <span class="token number">2009</span> myfile.o 
rw-r--r-- <span class="token number">0</span>/0    <span class="token number">727</span> Jul <span class="token number">13</span> <span class="token number">15</span>:32 <span class="token number">2011</span> mytest.o 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示可用的架构和目标结构列表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -i </span>
BFD header <span class="token function">file</span> version <span class="token number">2.17</span>.50.0.6-14.el5 <span class="token number">20061020</span> 
elf32-i386 
<span class="token punctuation">(</span>header little endian, data little endian<span class="token punctuation">)</span> 
  i386 
a.out-i386-linux 
<span class="token punctuation">(</span>header little endian, data little endian<span class="token punctuation">)</span> 
  i386 
efi-app-ia32 
<span class="token punctuation">(</span>header little endian, data little endian<span class="token punctuation">)</span> 
  i386 
elf64-x86-64 
<span class="token punctuation">(</span>header little endian, data little endian<span class="token punctuation">)</span> 
  i386 
elf64-little 
<span class="token punctuation">(</span>header little endian, data little endian<span class="token punctuation">)</span> 
  i386 
elf64-big 
<span class="token punctuation">(</span>header big endian, data big endian<span class="token punctuation">)</span> 
  i386 
elf32-little 
<span class="token punctuation">(</span>header little endian, data little endian<span class="token punctuation">)</span> 
  i386 
elf32-big 
<span class="token punctuation">(</span>header big endian, data big endian<span class="token punctuation">)</span> 
  i386 
srec 
<span class="token punctuation">(</span>header endianness unknown, data endianness unknown<span class="token punctuation">)</span> 
  i386 
symbolsrec 
<span class="token punctuation">(</span>header endianness unknown, data endianness unknown<span class="token punctuation">)</span> 
  i386 
tekhex 
<span class="token punctuation">(</span>header endianness unknown, data endianness unknown<span class="token punctuation">)</span> 
  i386 
binary 
<span class="token punctuation">(</span>header endianness unknown, data endianness unknown<span class="token punctuation">)</span> 
  i386 
ihex 
<span class="token punctuation">(</span>header endianness unknown, data endianness unknown<span class="token punctuation">)</span> 
  i386 
trad-core 
<span class="token punctuation">(</span>header endianness unknown, data endianness unknown<span class="token punctuation">)</span> 

              elf32-i386 a.out-i386-linux efi-app-ia32 elf64-x86-64 
          i386 elf32-i386 a.out-i386-linux efi-app-ia32 elf64-x86-64 

              elf64-little elf64-big elf32-little elf32-big srec symbolsrec 
          i386 elf64-little elf64-big elf32-little elf32-big srec symbolsrec 

              tekhex binary ihex trad-core 
          i386 tekhex binary ihex --------- 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，显示的信息是相对于 -b 或者 -m 选项可用的架构和目标格式列表。</p><p>**显示mytest.o文件中的text段的内容： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump --section=.text -s mytest.o </span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 
Contents of section .text: 
0000 5589e583 ec10c645 ff61c9c3 5589e583  U<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>E.a<span class="token punctuation">..</span>U<span class="token punctuation">..</span>. 
0010 ec10c745 fc020000 008345fc 02c9c3    <span class="token punctuation">..</span>.E<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>E<span class="token punctuation">..</span><span class="token punctuation">..</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里注意，不能单独使用-j或者--section，例如<code>objdump --section=.text mytest.o</code>是不会运行成功的。</p><p>**反汇编mytest.o中的text段内容，并尽可能用源代码形式表示： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -j .text -S mytest.o </span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 
Disassembly of section .text: 
00000000 <span class="token operator">&lt;</span>_Z9printTestv<span class="token operator">&gt;</span>: 
void printTest<span class="token punctuation">(</span><span class="token punctuation">)</span> 
   <span class="token number">0</span>:   <span class="token number">55</span>                      push   %ebp 
   <span class="token number">1</span>:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   <span class="token number">3</span>:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
<span class="token punctuation">{</span> 
        char a<span class="token punctuation">;</span> 
        a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span> 
   <span class="token number">6</span>:   c6 <span class="token number">45</span> ff <span class="token number">61</span>             movb   <span class="token variable">$0x61</span>,0xffffffff<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
<span class="token punctuation">}</span> 
   a:   c9                      leave  
   b:   c3                      ret    

000000c <span class="token operator">&lt;</span>_Z10printTest2v<span class="token operator">&gt;</span>: 
void printTest2<span class="token punctuation">(</span><span class="token punctuation">)</span> 
   c:   <span class="token number">55</span>                      push   %ebp 
   d:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   f:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
<span class="token punctuation">{</span> 
        int a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
  <span class="token number">12</span>:   c7 <span class="token number">45</span> fc 02 00 00 00    movl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
        <span class="token assign-left variable">a</span><span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span> 
  <span class="token number">19</span>:   <span class="token number">83</span> <span class="token number">45</span> fc 02             addl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
<span class="token punctuation">}</span> 
  1d:   c9                      leave  
  1e:   c3                      ret    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里注意，不能单独使用-j或者--section，例如<code>objdump -j .text mytest.o是不会运行成功的</code>。另外-S命令对于包含调试信息的目标文件，显示的效果比较好，如果编译时没有指定g++的-g选项，那么目标文件就不包含调试信息，那么显示效果就差多了。</p><p>**反汇编出mytest.o的源代码: **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -S mytest.o </span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 

Disassembly of section .text: 

00000000 <span class="token operator">&lt;</span>_Z9printTestv<span class="token operator">&gt;</span>: 
void printTest<span class="token punctuation">(</span><span class="token punctuation">)</span> 
   <span class="token number">0</span>:   <span class="token number">55</span>                      push   %ebp 
   <span class="token number">1</span>:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   <span class="token number">3</span>:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
<span class="token punctuation">{</span> 
        char a<span class="token punctuation">;</span> 
        a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span> 
   <span class="token number">6</span>:   c6 <span class="token number">45</span> ff <span class="token number">61</span>             movb   <span class="token variable">$0x61</span>,0xffffffff<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
<span class="token punctuation">}</span> 
   a:   c9                      leave  
   b:   c3                      ret    

0000000c <span class="token operator">&lt;</span>_Z10printTest2v<span class="token operator">&gt;</span>: 
void printTest2<span class="token punctuation">(</span><span class="token punctuation">)</span> 
   c:   <span class="token number">55</span>                      push   %ebp 
   d:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   f:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
<span class="token punctuation">{</span> 
       int a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
  <span class="token number">12</span>:   c7 <span class="token number">45</span> fc 02 00 00 00    movl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
        <span class="token assign-left variable">a</span><span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span> 
  <span class="token number">19</span>:   <span class="token number">83</span> <span class="token number">45</span> fc 02             addl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
<span class="token punctuation">}</span> 
  1d:   c9                      leave  
  1e:   c3                      ret    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，尤其当编译的时候指定了-g这种调试参数时，反汇编的效果比较明显。隐含了-d参数。</p><p>**显示文件的符号表入口: **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -t mytest.o </span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 

SYMBOL TABLE: 
00000000 l    <span class="token function">df</span> *ABS*  00000000 mytest.cpp 
00000000 l    d  .text  00000000 .text 
00000000 l    d  .data  00000000 .data 
00000000 l    d  .bss   00000000 .bss 
00000000 l    d  .debug_abbrev  00000000 .debug_abbrev 
00000000 l    d  .debug_info    00000000 .debug_info 
00000000 l    d  .debug_line    00000000 .debug_line 
00000000 l    d  .debug_frame   00000000 .debug_frame 
00000000 l    d  .debug_loc     00000000 .debug_loc 
00000000 l    d  .debug_pubnames        00000000 .debug_pubnames 
00000000 l    d  .debug_aranges 00000000 .debug_aranges 
00000000 l    d  .note.GNU-stack        00000000 .note.GNU-stack 
00000000 l    d  .comment       00000000 .comment 
00000000 g     F .text  0000000c _Z9printTestv 
00000000         *UND*  00000000 __gxx_personality_v0 
0000000c g     F .text  00000013 _Z10printTest2v 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，输出的信息类似<code>nm -s</code>命令的输出，相比较之下，nm命令的输出如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># nm -s mytest.o </span>
0000000c T _Z10printTest2v 
00000000 T _Z9printTestv 
         U __gxx_personality_v0 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**显示文件的符号表入口，将底层符号解码并表示成用户级别: **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -t -C mytest.o </span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 
SYMBOL TABLE: 
00000000 l    <span class="token function">df</span> *ABS*  00000000 mytest.cpp 
00000000 l    d  .text  00000000 .text 
00000000 l    d  .data  00000000 .data 
00000000 l    d  .bss   00000000 .bss 
00000000 l    d  .debug_abbrev  00000000 .debug_abbrev 
00000000 l    d  .debug_info    00000000 .debug_info 
00000000 l    d  .debug_line    00000000 .debug_line 
00000000 l    d  .debug_frame   00000000 .debug_frame 
00000000 l    d  .debug_loc     00000000 .debug_loc 
00000000 l    d  .debug_pubnames        00000000 .debug_pubnames 
00000000 l    d  .debug_aranges 00000000 .debug_aranges 
00000000 l    d  .note.GNU-stack        00000000 .note.GNU-stack 
00000000 l    d  .comment       00000000 .comment 
00000000 g     F .text  0000000c printTest<span class="token punctuation">(</span><span class="token punctuation">)</span> 
00000000         *UND*  00000000 __gxx_personality_v0 
0000000c g     F .text  00000013 printTest2<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，和没-C相比，printTest2函数可读性增加了。</p><p>**反汇编目标文件的特定机器码段： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -d mytest.o </span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 
Disassembly of section .text: 

00000000 <span class="token operator">&lt;</span>_Z9printTestv<span class="token operator">&gt;</span>: 
   <span class="token number">0</span>:   <span class="token number">55</span>                      push   %ebp 
   <span class="token number">1</span>:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   <span class="token number">3</span>:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
   <span class="token number">6</span>:   c6 <span class="token number">45</span> ff <span class="token number">61</span>             movb   <span class="token variable">$0x61</span>,0xffffffff<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
   a:   c9                      leave  
  b:   c3                      ret    

0000000c <span class="token operator">&lt;</span>_Z10printTest2v<span class="token operator">&gt;</span>: 
   c:   <span class="token number">55</span>                      push   %ebp 
   d:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   f:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
  <span class="token number">12</span>:   c7 <span class="token number">45</span> fc 02 00 00 00    movl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
  <span class="token number">19</span>:   <span class="token number">83</span> <span class="token number">45</span> fc 02             addl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
  1d:   c9                      leave  
  1e:   c3                      ret    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，对text段的内容进行了反汇编。</p><p>**反汇编特定段，并将汇编代码对应的文件名称和行号对应上： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -d -l mytest.o</span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 
Disassembly of section .text: 

00000000 <span class="token operator">&lt;</span>_Z9printTestv<span class="token operator">&gt;</span>: 
_Z9printTestv<span class="token punctuation">(</span><span class="token punctuation">)</span>: 
/root/test/04_libraryTest/mytest.cpp:1 
   <span class="token number">0</span>:   <span class="token number">55</span>                      push   %ebp 
   <span class="token number">1</span>:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   <span class="token number">3</span>:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
/root/test/04_libraryTest/mytest.cpp:4 
   <span class="token number">6</span>:   c6 <span class="token number">45</span> ff <span class="token number">61</span>             movb   <span class="token variable">$0x61</span>,0xffffffff<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
/root/test/04_libraryTest/mytest.cpp:5 
   a:   c9                      leave  
   b:   c3                      ret    

0000000c <span class="token operator">&lt;</span>_Z10printTest2v<span class="token operator">&gt;</span>: 
_Z10printTest2v<span class="token punctuation">(</span><span class="token punctuation">)</span>: 
/root/test/04_libraryTest/mytest.cpp:6 
   c:   <span class="token number">55</span>                      push   %ebp 
   d:   <span class="token number">89</span> e5                   mov    %esp,%ebp 
   f:   <span class="token number">83</span> ec <span class="token number">10</span>                sub    <span class="token variable">$0x10</span>,%esp 
/root/test/04_libraryTest/mytest.cpp:8 
  <span class="token number">12</span>:   c7 <span class="token number">45</span> fc 02 00 00 00    movl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
/root/test/04_libraryTest/mytest.cpp:9 
  <span class="token number">19</span>:   <span class="token number">83</span> <span class="token number">45</span> fc 02             addl   <span class="token variable">$0x2</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span> 
/root/test/04_libraryTest/mytest.cpp:10 
  1d:   c9                      leave  
  1e:   c3                      ret    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，项&quot;-d&quot;从objfile中反汇编那些特定指令机器码的section，而使用&quot;-l&quot;指定用文件名和行号标注相应的目标代码，仅仅和-d、-D或者-r一起使用，使用-ld和使用-d的区别不是很大，在源码级调试的时候有用，要求编译时使用了-g之类的调试编译选项。</p><p>**显示目标文件各个段的头部摘要信息： **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># objdump -h mytest.o </span>
mytest.o:     <span class="token function">file</span> <span class="token function">format</span> elf32-i386 

Sections: 
Idx Name          Size      VMA       LMA       File off  Algn 
  <span class="token number">0</span> .text         0000001f  00000000  00000000  00000034  <span class="token number">2</span>**2 
                  CONTENTS, ALLOC, LOAD, readonly, CODE 
  <span class="token number">1</span> .data         00000000  00000000  00000000  00000054  <span class="token number">2</span>**2 
                  CONTENTS, ALLOC, LOAD, DATA 
  <span class="token number">2</span> .bss          00000000  00000000  00000000  00000054  <span class="token number">2</span>**2 
                  ALLOC 
  <span class="token number">3</span> .debug_abbrev 00000046  00000000  00000000  00000054  <span class="token number">2</span>**0 
                  CONTENTS, READONLY, DEBUGGING 
  <span class="token number">4</span> .debug_info   000000ed  00000000  00000000  0000009a  <span class="token number">2</span>**0 
                  CONTENTS, RELOC, READONLY, DEBUGGING 
  <span class="token number">5</span> .debug_line   0000003e  00000000  00000000  00000187  <span class="token number">2</span>**0 
                  CONTENTS, RELOC, READONLY, DEBUGGING 
  <span class="token number">6</span> .debug_frame  00000044  00000000  00000000  000001c8  <span class="token number">2</span>**2 
                  CONTENTS, RELOC, READONLY, DEBUGGING 
  <span class="token number">7</span> .debug_loc    00000058  00000000  00000000  0000020c  <span class="token number">2</span>**0 
                  CONTENTS, READONLY, DEBUGGING 
  <span class="token number">8</span> .debug_pubnames 0000002f  00000000  00000000  00000264  <span class="token number">2</span>**0 
                  CONTENTS, RELOC, READONLY, DEBUGGING 
  <span class="token number">9</span> .debug_aranges 00000020  00000000  00000000  00000293  <span class="token number">2</span>**0 
                  CONTENTS, RELOC, READONLY, DEBUGGING 
<span class="token number">10</span> .comment      0000002e  00000000  00000000  000002b3  <span class="token number">2</span>**0 
                  CONTENTS, READONLY 
<span class="token number">11</span> .note.GNU-stack 00000000  00000000  00000000  000002e1  <span class="token number">2</span>**0 
                  CONTENTS, READONLY 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，更多的内容参见<code>man objdump</code>中的这个选项。</p>`,47),t=[l];function p(c,d){return s(),a("div",null,t)}const o=n(i,[["render",p],["__file","objdump.html.vue"]]);export{o as default};
