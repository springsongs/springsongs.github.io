import{_ as p,M as t,p as i,q as l,R as n,t as s,N as c,a1 as a}from"./framework-5866ffd3.js";const o={},d=a(`<h1 id="gdb" tabindex="-1"><a class="header-anchor" href="#gdb" aria-hidden="true">#</a> gdb</h1><p>功能强大的程序调试器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>gdb命令</strong> 包含在GNU的gcc开发套件中，是功能强大的程序调试器。GDB中的命令固然很多，但我们只需掌握其中十个左右的命令，就大致可以完成日常的基本的程序调试工作。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gdb<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-cd：设置工作目录；
-q：安静模式，不打印介绍信息和版本信息；
-d：添加文件查找路径；
-x：从指定文件中执行GDB指令；
-s：设置读取的符号表文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>命令</th><th>解释</th><th>示例</th></tr></thead><tbody><tr><td>file &lt;文件名&gt;</td><td>加载被调试的可执行程序文件。<br> 因为一般都在被调试程序所在目录下执行GDB，因而文本名不需要带路径。</td><td>(gdb) file gdb-sample</td></tr><tr><td>r</td><td>Run的简写，运行被调试的程序。<br> 如果此前没有下过断点，则执行完整个程序；如果有断点，则程序暂停在第一个可用断点处。</td><td>(gdb) r</td></tr><tr><td>c</td><td>Continue的简写，继续执行被调试程序，直至下一个断点或程序结束。</td><td>(gdb) c</td></tr><tr><td>b &lt;行号&gt;<br>b &lt;函数名称&gt;<br>b *&lt;函数名称&gt;<br>b *&lt;代码地址&gt; d [编号]</td><td>b: Breakpoint的简写，设置断点。两可以使用“行号”“函数名称”“执行地址”等方式指定断点位置。 <br> 其中在函数名称前面加“*”符号表示将断点设置在“由编译器生成的prolog代码处”。如果不了解汇编，可以不予理会此用法。 d: Delete breakpoint的简写，删除指定编号的某个断点，或删除所有断点。断点编号从1开始递增。</td><td>(gdb) b 8(gdb) b main <br> (gdb) b *main <br> (gdb) b *0x804835c (gdb) d</td></tr><tr><td>s, n</td><td>s: 执行一行源程序代码，如果此行代码中有函数调用，则进入该函数；<br> n: 执行一行源程序代码，此行代码中的函数调用也一并执行。 s 相当于其它调试器中的“Step Into (单步跟踪进入)”；<br> n 相当于其它调试器中的“Step Over (单步跟踪)”。 这两个命令必须在有源代码调试信息的情况下才可以使用（GCC编译时使用“-g”参数）。</td><td>(gdb) s <br> (gdb) n</td></tr><tr><td>si, ni</td><td>si命令类似于s命令，ni命令类似于n命令。所不同的是，这两个命令（si/ni）所针对的是汇编指令，而s/n针对的是源代码。</td><td>(gdb) si <br>(gdb) ni</td></tr><tr><td>p &lt;变量名称&gt;</td><td>Print的简写，显示指定变量（临时变量或全局变量）的值。</td><td>(gdb) p i <br> (gdb) p nGlobalVar</td></tr><tr><td>display ... undisplay &lt;编号&gt;</td><td>display，设置程序中断后欲显示的数据及其格式。 <br> 例如，如果希望每次程序中断后可以看到即将被执行的下一条汇编指令，可以使用命令 <br> “display /i $pc” <br> 其中 $pc 代表当前汇编指令，/i 表示以十六进行显示。当需要关心汇编代码时，此命令相当有用。 undispaly，取消先前的display设置，编号从1开始递增。</td><td>(gdb) display /i $pc (gdb) undisplay 1</td></tr><tr><td>i</td><td>info的简写，用于显示各类信息，详情请查阅“help i”。</td><td>(gdb) i r</td></tr><tr><td>q</td><td>Quit的简写，退出GDB调试环境。</td><td>(gdb) q</td></tr><tr><td>help [命令名称]</td><td>GDB帮助命令，提供对GDB名种命令的解释说明。<br> 如果指定了“命令名称”参数，则显示该命令的详细说明；如果没有指定参数，则分类显示所有GDB命令，供用户进一步浏览和查询。</td><td>(gdb) help</td></tr></tbody></table><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：二进制可执行程序。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>以下是linux下dgb调试的一个实例，先给出一个示例用的小程序，C语言代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#include &lt;stdio.h&gt;</span>
int nGlobalVar <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

int tempFunction<span class="token punctuation">(</span>int a, int b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    printf<span class="token punctuation">(</span><span class="token string">&quot;tempFunction is called, a = %d, b = %d /n&quot;</span>, a, b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">(</span>a + b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

int <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    int n<span class="token punctuation">;</span>
        n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        n++<span class="token punctuation">;</span>
        n--<span class="token punctuation">;</span>

        nGlobalVar <span class="token operator">+=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        nGlobalVar -<span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>

    printf<span class="token punctuation">(</span><span class="token string">&quot;n = %d, nGlobalVar = %d /n&quot;</span>, n, nGlobalVar<span class="token punctuation">)</span><span class="token punctuation">;</span>

        n <span class="token operator">=</span> tempFunction<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    printf<span class="token punctuation">(</span><span class="token string">&quot;n = %d&quot;</span>, n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token builtin class-name">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请将此代码复制出来并保存到文件 gdb-sample.c 中，然后切换到此文件所在目录，用GCC编译之：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc gdb-sample.c <span class="token parameter variable">-o</span> gdb-sample <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的命令行中，使用 -o 参数指定了编译生成的可执行文件名为 gdb-sample，使用参数 -g 表示将源代码信息编译到可执行文件中。如果不使用参数 -g，会给后面的GDB调试造成不便。当然，如果我们没有程序的源代码，自然也无从使用 -g 参数，调试/跟踪时也只能是汇编代码级别的调试/跟踪。</p><p>下面“gdb”命令启动GDB，将首先显示GDB说明，不管它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GNU gdb Red Hat Linux <span class="token punctuation">(</span><span class="token number">5</span>.3post-0.20021129.18rh<span class="token punctuation">)</span>
Copyright <span class="token number">2003</span> <span class="token function">free</span> Software Foundation, Inc.
GDB is <span class="token function">free</span> software, covered by the GNU General Public License, and you are
welcome to change it and/or distribute copies of it under certain conditions.
<span class="token builtin class-name">type</span> <span class="token string">&quot;show copying&quot;</span> to see the conditions.
There is absolutely no warranty <span class="token keyword">for</span> GDB. Type <span class="token string">&quot;show warranty&quot;</span> <span class="token keyword">for</span> details.
This GDB was configured as <span class="token string">&quot;i386-redhat-linux-gnu&quot;</span><span class="token builtin class-name">.</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面最后一行“(gdb)”为GDB内部命令引导符，等待用户输入GDB命令。</p><p>下面使用“file”命令载入被调试程序 gdb-sample（这里的 gdb-sample 即前面 GCC 编译输出的可执行文件）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> <span class="token function">file</span> gdb-sample
Reading symbols from gdb-sample<span class="token punctuation">..</span>.done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面最后一行提示已经加载成功。</p><p>下面使用“r”命令执行（Run）被调试文件，因为尚未设置任何断点，将直接执行到程序结束：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> r
Starting program: /home/liigo/temp/test_jmp/test_jmp/gdb-sample
n <span class="token operator">=</span> <span class="token number">1</span>, nGlobalVar <span class="token operator">=</span> <span class="token number">88</span>
tempFunction is called, a <span class="token operator">=</span> <span class="token number">1</span>, b <span class="token operator">=</span> <span class="token number">2</span>
n <span class="token operator">=</span> <span class="token number">3</span>
Program exited normally.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面使用“b”命令在 main 函数开头设置一个断点（Breakpoint）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> b main
Breakpoint <span class="token number">1</span> at 0x804835c: <span class="token function">file</span> gdb-sample.c, line <span class="token number">19</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面最后一行提示已经成功设置断点，并给出了该断点信息：在源文件 gdb-sample.c 第19行处设置断点；这是本程序的第一个断点（序号为1）；断点处的代码地址为 0x804835c（此值可能仅在本次调试过程中有效）。回过头去看源代码，第19行中的代码为“n = 1”，恰好是 main 函数中的第一个可执行语句（前面的“int n;”为变量定义语句，并非可执行语句）。</p><p>再次使用“r”命令执行（Run）被调试程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> r
Starting program: /home/liigo/temp/gdb-sample

Breakpoint <span class="token number">1</span>, main <span class="token punctuation">(</span><span class="token punctuation">)</span> at gdb-sample.c:19
<span class="token number">19</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序中断在gdb-sample.c第19行处，即main函数是第一个可执行语句处。</p><p>上面最后一行信息为：下一条将要执行的源代码为“n = 1;”，它是源代码文件gdb-sample.c中的第19行。</p><p>下面使用“s”命令（Step）执行下一行代码（即第19行“n = 1;”）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> s
<span class="token number">20</span> n++<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的信息表示已经执行完“n = 1;”，并显示下一条要执行的代码为第20行的“n++;”。</p><p>既然已经执行了“n = 1;”，即给变量 n 赋值为 1，那我们用“p”命令（Print）看一下变量 n 的值是不是 1 ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> p n
<span class="token variable">$1</span> <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>果然是 1。（$1大致是表示这是第一次使用“p”命令——再次执行“p n”将显示“$2 = 1”——此信息应该没有什么用处。）</p><p>下面我们分别在第26行、tempFunction 函数开头各设置一个断点（分别使用命令“b 26”“b tempFunction”）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> b <span class="token number">26</span>
Breakpoint <span class="token number">2</span> at 0x804837b: <span class="token function">file</span> gdb-sample.c, line <span class="token number">26</span>.
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> b tempFunction
Breakpoint <span class="token number">3</span> at 0x804832e: <span class="token function">file</span> gdb-sample.c, line <span class="token number">12</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用“c”命令继续（Continue）执行被调试程序，程序将中断在第二 个断点（26行），此时全局变量 nGlobalVar 的值应该是 88；再一次执行“c”命令，程序将中断于第三个断点（12行，tempFunction 函数开头处），此时tempFunction 函数的两个参数 a、b 的值应分别是 1 和 2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> c
Continuing.

Breakpoint <span class="token number">2</span>, main <span class="token punctuation">(</span><span class="token punctuation">)</span> at gdb-sample.c:26
<span class="token number">26</span> printf<span class="token punctuation">(</span><span class="token string">&quot;n = %d, nGlobalVar = %d /n&quot;</span>, n, nGlobalVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> p nGlobalVar
<span class="token variable">$2</span> <span class="token operator">=</span> <span class="token number">88</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> c
Continuing.
n <span class="token operator">=</span> <span class="token number">1</span>, nGlobalVar <span class="token operator">=</span> <span class="token number">88</span>

Breakpoint <span class="token number">3</span>, tempFunction <span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span> at gdb-sample.c:12
<span class="token number">12</span> printf<span class="token punctuation">(</span><span class="token string">&quot;tempFunction is called, a = %d, b = %d /n&quot;</span>, a, b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> p a
<span class="token variable">$3</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> p b
<span class="token variable">$4</span> <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面反馈的信息一切都在我们预料之中~~</p><p>再一次执行“c”命令（Continue），因为后面再也没有其它断点，程序将一直执行到结束：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> c
Continuing.
tempFunction is called, a <span class="token operator">=</span> <span class="token number">1</span>, b <span class="token operator">=</span> <span class="token number">2</span>
n <span class="token operator">=</span> <span class="token number">3</span>
Program exited normally.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候需要看到编译器生成的汇编代码，以进行汇编级的调试或跟踪，又该如何操作呢？</p><p>这就要用到display命令“display /i $pc”了（此命令前面已有详细解释）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> display /i <span class="token variable">$pc</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此后程序再中断时，就可以显示出汇编代码了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> r
Starting program: /home/liigo/temp/test_jmp/test_jmp/gdb-sample

Breakpoint <span class="token number">1</span>, main <span class="token punctuation">(</span><span class="token punctuation">)</span> at gdb-sample.c:19
<span class="token number">19</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804835c <span class="token operator">&lt;</span>main+1<span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span>: movl <span class="token variable">$0x1</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到了汇编代码，“n = 1;”对应的汇编代码是“movl $0x1,0xfffffffc(%ebp)”。</p><p>并且以后程序每次中断都将显示下一条汇编指定（“si”命令用于执行一条汇编代码——区别于“s”执行一行C代码）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
<span class="token number">20</span> n++<span class="token punctuation">;</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x8048363 <span class="token operator">&lt;</span>main+2<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>: lea 0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span>,%eax
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
0x08048366 <span class="token number">20</span> n++<span class="token punctuation">;</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x8048366 <span class="token operator">&lt;</span>main+2<span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span>: incl <span class="token punctuation">(</span>%eax<span class="token punctuation">)</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
<span class="token number">21</span> n--<span class="token punctuation">;</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x8048368 <span class="token operator">&lt;</span>main+2<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span>: lea 0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span>,%eax
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
0x0804836b <span class="token number">21</span> n--<span class="token punctuation">;</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804836b <span class="token operator">&lt;</span>main+3<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>: decl <span class="token punctuation">(</span>%eax<span class="token punctuation">)</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
<span class="token number">23</span> nGlobalVar <span class="token operator">+=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804836d <span class="token operator">&lt;</span>main+3<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>: addl <span class="token variable">$0x64</span>,0x80494fc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们试一下命令“b *&lt;函数名称&gt;”。</p><p>为了更简明，有必要先删除目前所有断点（使用“d”命令——Delete breakpoint）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> d
Delete all breakpoints? <span class="token punctuation">(</span>y or n<span class="token punctuation">)</span> y
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当被询问是否删除所有断点时，输入“y”并按回车键即可。</p><p>下面使用命令“b *main”在 main 函数的 prolog 代码处设置断点（prolog、epilog，分别表示编译器在每个函数的开头和结尾自行插入的代码）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> b *main
Breakpoint <span class="token number">4</span> at 0x804834c: <span class="token function">file</span> gdb-sample.c, line <span class="token number">17</span>.
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> r
The program being debugged has been started already.
Start it from the beginning? <span class="token punctuation">(</span>y or n<span class="token punctuation">)</span> y
Starting program: /home/liigo/temp/test_jmp/test_jmp/gdb-sample

Breakpoint <span class="token number">4</span>, main <span class="token punctuation">(</span><span class="token punctuation">)</span> at gdb-sample.c:17
<span class="token number">17</span> <span class="token punctuation">{</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804834c <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span>: push %ebp
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
0x0804834d <span class="token number">17</span> <span class="token punctuation">{</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804834d <span class="token operator">&lt;</span>main+<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>: mov %esp,%ebp
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
0x0804834f <span class="token keyword">in</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> at gdb-sample.c:17
<span class="token number">17</span> <span class="token punctuation">{</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804834f <span class="token operator">&lt;</span>main+<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>: sub <span class="token variable">$0x8</span>,%esp
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
0x08048352 <span class="token number">17</span> <span class="token punctuation">{</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x8048352 <span class="token operator">&lt;</span>main+<span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span>: and <span class="token variable">$0xfffffff0</span>,%esp
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
0x08048355 <span class="token number">17</span> <span class="token punctuation">{</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x8048355 <span class="token operator">&lt;</span>main+<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>: mov <span class="token variable">$0x0</span>,%eax
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
0x0804835a <span class="token number">17</span> <span class="token punctuation">{</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804835a <span class="token operator">&lt;</span>main+1<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>: sub %eax,%esp
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> si
<span class="token number">19</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token number">1</span>: x/i <span class="token variable">$pc</span> 0x804835c <span class="token operator">&lt;</span>main+1<span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span>: movl <span class="token variable">$0x1</span>,0xfffffffc<span class="token punctuation">(</span>%ebp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时可以使用“i r”命令显示寄存器中的当前值———“i r”即“Infomation Register”：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> i r
eax 0xbffff6a4 <span class="token parameter variable">-1073744220</span>
ecx 0x42015554 <span class="token number">1107383636</span>
edx 0x40016bc8 <span class="token number">1073834952</span>
ebx 0x42130a14 <span class="token number">1108544020</span>
esp 0xbffff6a0 0xbffff6a0
ebp 0xbffff6a8 0xbffff6a8
esi 0x40015360 <span class="token number">1073828704</span>
edi 0x80483f0 <span class="token number">134513648</span>
eip 0x8048366 0x8048366
eflags 0x386 <span class="token number">902</span>
cs 0x23 <span class="token number">35</span>
ss 0x2b <span class="token number">43</span>
ds 0x2b <span class="token number">43</span>
es 0x2b <span class="token number">43</span>
fs 0x0 <span class="token number">0</span>
gs 0x33 <span class="token number">51</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以显示任意一个指定的寄存器值：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> i r eax
eax 0xbffff6a4 <span class="token parameter variable">-1073744220</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一个要介绍的命令是“q”，退出（Quit）GDB调试环境：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> q
The program is running. <span class="token builtin class-name">exit</span> anyway? <span class="token punctuation">(</span>y or n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充内容" tabindex="-1"><a class="header-anchor" href="#补充内容" aria-hidden="true">#</a> 补充内容</h2>`,66),u={href:"http://www.imooc.com/learn/394",target:"_blank",rel:"noopener noreferrer"},r=a(`<p>如果删除源代码, 就无法显示行号等辅助信息了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-g</span> gdb.c <span class="token parameter variable">-o</span> gdb.out <span class="token comment"># -g 支持gdb调试; -o 输出, 默认为 a.out</span>

gdb gdb.out <span class="token comment"># 进入 gdb 调试环境</span>
enter <span class="token comment"># 继续执行上条命令</span>
l <span class="token comment"># 列出源代码, 默认 10 行, 按 l 继续</span>

start <span class="token comment"># 开始单步调试, 默认 main() 第一行</span>
p a <span class="token comment"># 查看 a 变量的值</span>
n <span class="token comment"># 继续到下一行</span>
s <span class="token comment"># 进入子函数</span>
bt <span class="token comment"># 查看函数栈</span>
f <span class="token number">1</span> <span class="token comment"># 切换函数栈</span>

q 退出调试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试用代码</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> tmp<span class="token operator">=</span>a<span class="token punctuation">;</span>
    a<span class="token operator">=</span>b<span class="token punctuation">;</span> b<span class="token operator">=</span>tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">change2</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> tmp<span class="token operator">=</span><span class="token operator">*</span>a<span class="token punctuation">;</span>
    <span class="token operator">*</span>a<span class="token operator">=</span><span class="token operator">*</span>b<span class="token punctuation">;</span> <span class="token operator">*</span>b<span class="token operator">=</span>tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">change</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;change:\\na=%d\\nb=%d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">change2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;change2:\\na=%d\\nb=%d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(v,m){const e=t("ExternalLinkIcon");return i(),l("div",null,[d,n("blockquote",null,[n("p",null,[s("gdb 教程："),n("a",u,[s("慕课网-Linux C语言指针与内存-第三章"),c(e)])])]),r])}const g=p(o,[["render",b],["__file","gdb.html.vue"]]);export{g as default};
