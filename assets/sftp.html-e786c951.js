import{_ as s,p as e,q as a,a1 as n}from"./framework-5866ffd3.js";const i={},d=n(`<h1 id="sftp" tabindex="-1"><a class="header-anchor" href="#sftp" aria-hidden="true">#</a> sftp</h1><p>交互式的文件传输程序</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>sftp命令</strong> 是一款交互式的文件传输程序，命令的运行和使用方式与ftp命令相似，但是，sftp命令对传输的所有信息使用ssh加密，它还支持公钥认证和压缩等功能。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sftp<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-B：指定传输文件时缓冲区的大小；
-l：使用ssh协议版本1；
-b：指定批处理文件；
-C：使用压缩；
-o：指定ssh选项；
-F：指定ssh配置文件；
-R：指定一次可以容忍多少请求数；
-v：升高日志等级。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>目标主机：指定sftp服务器ip地址或者主机名。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>建立联接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ sfpt username@1.1.1.1 <span class="token comment"># 回车输入密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取文件下载到指定路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sftp<span class="token operator">&gt;</span> get /export/sftp/test.csv /Users/my/Downloads
Fetching /export/sftp/test.csv to /Users/my/Downloads/test.csv
/export/sftp/test.csv            <span class="token number">100</span>%  <span class="token number">133</span>     <span class="token number">0</span>.3KB/s   00:00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传本地文件到服务器指定路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sftp<span class="token operator">&gt;</span> put /Users/my/Downloads/re-produce.gif /export/sftp
Uploading /Users/my/Downloads/re-produce.gif to /export/sftp/re-produce.gif
/Users/my/Downloads/re-produce.gif            <span class="token number">100</span>%  257KB  <span class="token number">86</span>.6KB/s   00:02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),r=[d];function t(l,c){return e(),a("div",null,r)}const o=s(i,[["render",t],["__file","sftp.html.vue"]]);export{o as default};
