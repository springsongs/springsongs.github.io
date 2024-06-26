import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h1 id="dircolors" tabindex="-1"><a class="header-anchor" href="#dircolors" aria-hidden="true">#</a> dircolors</h1><p>置ls命令在显示目录或文件时所用的色彩</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>dircolors命令</strong> 设置ls命令在显示目录或文件时所用的色彩。dircolors可根据[色彩配置文件]来设置LS_COLORS环境变量或是显示设置LS_COLORS环境变量的命令。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dircolors<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b或--sh或--bourne-shell：显示在Boume shell中，将<span class="token environment constant">LS_COLORS</span>设为目前预设置的shell指令；
-c或--csh或--c-shell：显示在C shell中，将<span class="token environment constant">LS_COLORS</span>设为目前预设置的shell指令；
-p或--print-database：显示预设置；
-help：显示帮助；
-version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>文件：指定用来设置颜色的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dircolors -p</span>
<span class="token comment"># Configuration file for dircolors, a utility to help you set the</span>
<span class="token comment"># LS_COLORS environment variable used by GNU ls with the --color option.</span>
<span class="token comment"># The keywords COLOR, OPTIONS, and EIGHTBIT (honored by the</span>
<span class="token comment"># slackware version of dircolors) are recognized but ignored.</span>
<span class="token comment"># Below, there should be one TERM entry for each termtype that is colorizable</span>
<span class="token environment constant">TERM</span> linux
<span class="token environment constant">TERM</span> linux-c
<span class="token environment constant">TERM</span> mach-color
<span class="token environment constant">TERM</span> console
<span class="token environment constant">TERM</span> con132x25
<span class="token environment constant">TERM</span> con132x30
<span class="token environment constant">TERM</span> con132x43
<span class="token environment constant">TERM</span> con132x60
<span class="token environment constant">TERM</span> con80x25
<span class="token environment constant">TERM</span> con80x28
<span class="token environment constant">TERM</span> con80x30
<span class="token environment constant">TERM</span> con80x43
<span class="token environment constant">TERM</span> con80x50
<span class="token environment constant">TERM</span> con80x60
<span class="token environment constant">TERM</span> cygwin
<span class="token environment constant">TERM</span> dtterm
<span class="token environment constant">TERM</span> putty
<span class="token environment constant">TERM</span> xterm
<span class="token environment constant">TERM</span> xterm-color
<span class="token environment constant">TERM</span> xterm-debian
<span class="token environment constant">TERM</span> rxvt
<span class="token environment constant">TERM</span> <span class="token function">screen</span>
<span class="token environment constant">TERM</span> screen-bce
<span class="token environment constant">TERM</span> screen-w
<span class="token environment constant">TERM</span> vt100
<span class="token environment constant">TERM</span> Eterm
<span class="token comment"># Below are the color init strings for the basic file types. A color init</span>
<span class="token comment"># string consists of one or more of the following numeric codes:</span>
<span class="token comment"># Attribute codes:</span>
<span class="token comment"># 00=none 01=bold 04=underscore 05=blink 07=reverse 08=concealed</span>
<span class="token comment"># Text color codes:</span>
<span class="token comment"># 30=black 31=red 32=green 33=yellow 34=blue 35=magenta 36=cyan 37=white</span>
<span class="token comment"># Background color codes:</span>
<span class="token comment"># 40=black 41=red 42=green 43=yellow 44=blue 45=magenta 46=cyan 47=white</span>
NORMAL 00 <span class="token comment"># global default, although everything should be something.</span>
FILE 00 <span class="token comment"># normal file</span>
DIR 01<span class="token punctuation">;</span><span class="token number">34</span> <span class="token comment"># directory</span>
LINK 01<span class="token punctuation">;</span><span class="token number">36</span> <span class="token comment"># symbolic link. (If you set this to &#39;target&#39; instead of a</span>
 <span class="token comment"># numerical value, the color is as for the file pointed to.)</span>
FIFO <span class="token number">40</span><span class="token punctuation">;</span><span class="token number">33</span> <span class="token comment"># pipe</span>
SOCK 01<span class="token punctuation">;</span><span class="token number">35</span> <span class="token comment"># socket</span>
DOOR 01<span class="token punctuation">;</span><span class="token number">35</span> <span class="token comment"># door</span>
BLK <span class="token number">40</span><span class="token punctuation">;</span><span class="token number">33</span><span class="token punctuation">;</span>01 <span class="token comment"># block device driver</span>
CHR <span class="token number">40</span><span class="token punctuation">;</span><span class="token number">33</span><span class="token punctuation">;</span>01 <span class="token comment"># character device driver</span>
ORPHAN <span class="token number">40</span><span class="token punctuation">;</span><span class="token number">31</span><span class="token punctuation">;</span>01 <span class="token comment"># symlink to nonexistent file</span>
SETUID <span class="token number">37</span><span class="token punctuation">;</span><span class="token number">41</span> <span class="token comment"># file that is setuid (u+s)</span>
SETGID <span class="token number">30</span><span class="token punctuation">;</span><span class="token number">43</span> <span class="token comment"># file that is setgid (g+s)</span>
STICKY_OTHER_WRITABLE <span class="token number">30</span><span class="token punctuation">;</span><span class="token number">42</span> <span class="token comment"># dir that is sticky and other-writable (+t,o+w)</span>
OTHER_WRITABLE <span class="token number">34</span><span class="token punctuation">;</span><span class="token number">42</span> <span class="token comment"># dir that is other-writable (o+w) and not sticky</span>
STICKY <span class="token number">37</span><span class="token punctuation">;</span><span class="token number">44</span> <span class="token comment"># dir with the sticky bit set (+t) and not other-writable</span>
<span class="token comment"># This is for files with execute permission:</span>
<span class="token builtin class-name">exec</span> 01<span class="token punctuation">;</span><span class="token number">32</span>
<span class="token comment"># List any file extensions like &#39;.gz&#39; or &#39;.tar&#39; that you would like ls</span>
<span class="token comment"># to colorize below. Put the extension, a space, and the color init string.</span>
<span class="token comment"># (and any comments you want to add after a &#39;#&#39;)</span>
<span class="token comment"># If you use DOS-style suffixes, you may want to uncomment the following:</span>
<span class="token comment">#.cmd 01;32 # executables (bright green)</span>
<span class="token comment">#.exe 01;32</span>
<span class="token comment">#.com 01;32</span>
<span class="token comment">#.btm 01;32</span>
<span class="token comment">#.bat 01;32</span>
.tar 01<span class="token punctuation">;</span><span class="token number">31</span> <span class="token comment"># archives or compressed (bright red)</span>
.tgz 01<span class="token punctuation">;</span><span class="token number">31</span>
.arj 01<span class="token punctuation">;</span><span class="token number">31</span>
.taz 01<span class="token punctuation">;</span><span class="token number">31</span>
.lzh 01<span class="token punctuation">;</span><span class="token number">31</span>
.zip 01<span class="token punctuation">;</span><span class="token number">31</span>
.z 01<span class="token punctuation">;</span><span class="token number">31</span>
.Z 01<span class="token punctuation">;</span><span class="token number">31</span>
.gz 01<span class="token punctuation">;</span><span class="token number">31</span>
.bz2 01<span class="token punctuation">;</span><span class="token number">31</span>
.deb 01<span class="token punctuation">;</span><span class="token number">31</span>
.rpm 01<span class="token punctuation">;</span><span class="token number">31</span>
.jar 01<span class="token punctuation">;</span><span class="token number">31</span>
<span class="token comment"># image formats</span>
.jpg 01<span class="token punctuation">;</span><span class="token number">35</span>
.jpeg 01<span class="token punctuation">;</span><span class="token number">35</span>
.gif 01<span class="token punctuation">;</span><span class="token number">35</span>
.bmp 01<span class="token punctuation">;</span><span class="token number">35</span>
.pbm 01<span class="token punctuation">;</span><span class="token number">35</span>
.pgm 01<span class="token punctuation">;</span><span class="token number">35</span>
.ppm 01<span class="token punctuation">;</span><span class="token number">35</span>
.tga 01<span class="token punctuation">;</span><span class="token number">35</span>
.xbm 01<span class="token punctuation">;</span><span class="token number">35</span>
.xpm 01<span class="token punctuation">;</span><span class="token number">35</span>
.tif 01<span class="token punctuation">;</span><span class="token number">35</span>
.tiff 01<span class="token punctuation">;</span><span class="token number">35</span>
.png 01<span class="token punctuation">;</span><span class="token number">35</span>
.mov 01<span class="token punctuation">;</span><span class="token number">35</span>
.mpg 01<span class="token punctuation">;</span><span class="token number">35</span>
.mpeg 01<span class="token punctuation">;</span><span class="token number">35</span>
.avi 01<span class="token punctuation">;</span><span class="token number">35</span>
.fli 01<span class="token punctuation">;</span><span class="token number">35</span>
.gl 01<span class="token punctuation">;</span><span class="token number">35</span>
.dl 01<span class="token punctuation">;</span><span class="token number">35</span>
.xcf 01<span class="token punctuation">;</span><span class="token number">35</span>
.xwd 01<span class="token punctuation">;</span><span class="token number">35</span>
<span class="token comment"># audio formats</span>
.flac 01<span class="token punctuation">;</span><span class="token number">35</span>
.mp3 01<span class="token punctuation">;</span><span class="token number">35</span>
.mpc 01<span class="token punctuation">;</span><span class="token number">35</span>
.ogg 01<span class="token punctuation">;</span><span class="token number">35</span>
.wav 01<span class="token punctuation">;</span><span class="token number">35</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[i];function l(o,p){return s(),a("div",null,c)}const u=n(t,[["render",l],["__file","dircolors.html.vue"]]);export{u as default};
