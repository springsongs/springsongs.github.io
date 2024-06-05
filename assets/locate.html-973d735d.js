import{_ as a,p as e,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},l=s(`<h1 id="locate" tabindex="-1"><a class="header-anchor" href="#locate" aria-hidden="true">#</a> locate</h1><p>比 find 好用的文件查找工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p>locate 让使用者可以很快速的搜寻档案系统内是否有指定的档案。其方法是先建立一个包括系统内所有档案名称及路径的数据库，之后当寻找时就只需查询这个数据库，而不必实际深入档案系统之中了。在一般的 distribution 之中，数据库的建立都被放在 crontab 中自动执行。</p><p>locate命令可以在搜寻数据库时快速找到档案，数据库由updatedb程序来更新，updatedb是由cron daemon周期性建立的，locate命令在搜寻数据库时比由整个由硬盘资料来搜寻资料来得快，但较差劲的是locate所找到的档案若是最近才建立或 刚更名的，可能会找不到，在内定值中，updatedb每天会跑一次，可以由修改crontab来更新设定值。(etc/crontab)</p><p>locate指定用在搜寻符合条件的档案，它会去储存档案与目录名称的数据库内，寻找合乎范本样式条件的档案或目录录，可以使用特殊字元（如”<em>” 或”?”等）来指定范本样式，如指定范本为kcpa</em>ner, locate 会找出所有起始字串为kcpa且结尾为ner的档案或目录，如名称为kcpartner若目录录名称为kcpa_ner则会列出该目录下包括 子目录在内的所有档案。</p><p>locate指令和find找寻档案的功能类似，但locate是透过update程序将硬盘中的所有档案和目录资料先建立一个索引数据库，在 执行loacte时直接找该索引，查询速度会较快，索引数据库一般是由操作系统管理，但也可以直接下达update强迫系统立即修改索引数据库。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">locate</span> <span class="token punctuation">[</span>选择参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>样式<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-b, <span class="token parameter variable">--basename</span>  <span class="token comment"># 仅匹配路径名的基本名称</span>
-c, <span class="token parameter variable">--count</span>     <span class="token comment"># 只输出找到的数量</span>
-d, <span class="token parameter variable">--database</span> DBPATH <span class="token comment"># 使用DBPATH指定的数据库，而不是默认数据库 /var/lib/mlocate/mlocate.db</span>
-e, <span class="token parameter variable">--existing</span>  <span class="token comment"># 仅打印当前现有文件的条目</span>
<span class="token parameter variable">-1</span> <span class="token comment"># 如果 是 1．则启动安全模式。在安全模式下，使用者不会看到权限无法看到 的档案。这会始速度减慢，因为 locate 必须至实际的档案系统中取得档案的  权限资料。</span>
-0, <span class="token parameter variable">--null</span>            <span class="token comment"># 在输出上带有NUL的单独条目</span>
-S, <span class="token parameter variable">--statistics</span>      <span class="token comment"># 不搜索条目，打印有关每个数据库的统计信息</span>
<span class="token parameter variable">-q</span>                    <span class="token comment"># 安静模式，不会显示任何错误讯息。</span>
-P, --nofollow, <span class="token parameter variable">-H</span>    <span class="token comment"># 检查文件存在时不要遵循尾随的符号链接</span>
-l, --limit, <span class="token parameter variable">-n</span> LIMIT <span class="token comment"># 将输出（或计数）限制为LIMIT个条目</span>
<span class="token parameter variable">-n</span>                    <span class="token comment"># 至多显示 n个输出。</span>
-m, <span class="token parameter variable">--mmap</span>            <span class="token comment"># 被忽略，为了向后兼容</span>
-r, <span class="token parameter variable">--regexp</span> REGEXP   <span class="token comment"># 使用基本正则表达式</span>
    <span class="token parameter variable">--regex</span>           <span class="token comment"># 使用扩展正则表达式</span>
-q, <span class="token parameter variable">--quiet</span>           <span class="token comment"># 安静模式，不会显示任何错误讯息</span>
-s, <span class="token parameter variable">--stdio</span>           <span class="token comment"># 被忽略，为了向后兼容</span>
<span class="token parameter variable">-o</span>                    <span class="token comment"># 指定资料库存的名称。</span>
-h, <span class="token parameter variable">--help</span>            <span class="token comment"># 显示帮助</span>
-i, --ignore-case     <span class="token comment"># 忽略大小写</span>
-V, <span class="token parameter variable">--version</span>         <span class="token comment"># 显示版本信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>实例1：查找和pwd相关的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root ~ <span class="token comment"># locate pwd</span>
/bin/pwd
/etc/.pwd.lock
/sbin/unix_chkpwd
/usr/bin/pwdx
/usr/include/pwd.h
/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.py
/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.pyc
/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.py
/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.pyc
/usr/lib/syslinux/pwd.c32
/usr/share/help/C/empathy/irc-join-pwd.page
/usr/share/help/ca/empathy/irc-join-pwd.page
/usr/share/help/cs/empathy/irc-join-pwd.page
/usr/share/help/de/empathy/irc-join-pwd.page
/usr/share/help/el/empathy/irc-join-pwd.page
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例2： 搜索etc目录下所有以sh开头的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root ~ <span class="token comment"># locate /etc/sh</span>
/etc/shadow
/etc/shadow-
/etc/shells
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例3：搜索etc目录下，所有以m开头的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root ~ <span class="token comment"># locate /etc/m</span>
/etc/magic
/etc/magic.mime
/etc/mailcap
/etc/mailcap.order
/etc/manpath.config
/etc/mate-settings-daemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[l];function t(d,r){return e(),n("div",null,c)}const o=a(i,[["render",t],["__file","locate.html.vue"]]);export{o as default};
