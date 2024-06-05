import{_ as e,p as n,q as a,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="logrotate" tabindex="-1"><a class="header-anchor" href="#logrotate" aria-hidden="true">#</a> logrotate</h1><p>系统日志进行轮转、压缩和删除</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h2><p><strong>logrotate命令</strong> 用于对系统日志进行轮转、压缩和删除，也可以将日志发送到指定邮箱。使用logrotate指令，可让你轻松管理系统所产生的记录文件。每个记录文件都可被设置成每日，每周或每月处理，也能在文件太大时立即处理。您必须自行编辑，指定配置文件，预设的配置文件存放在<code>/etc/logrotate.conf</code>文件中。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>logrotate<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-?或--help：在线帮助；
-d或--debug：详细显示指令执行过程，便于排错或了解程序执行的情况；
-f或--force ：强行启动记录文件维护操作，纵使logrotate指令认为没有需要亦然；
-s<span class="token operator">&lt;</span>状态文件<span class="token operator">&gt;</span>或--state<span class="token operator">=</span><span class="token operator">&lt;</span>状态文件<span class="token operator">&gt;</span>：使用指定的状态文件；
-v或--version：显示指令执行过程；
-usage：显示指令基本用法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>配置文件：指定lograote指令的配置文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>crontab 会定时调用logrotate命令 在 <code>/etc/cron.daily/logrotate</code> 文件中配置使用</p><p>logrotate的配置文件<code>/etc/logrotate.conf</code> 定义引用<code>/etc/logrotate.d</code>目录下的一些自定义的log配置</p><p>在<code>/etc/logrotate.d</code>目录下创建任意后缀名的文件,即可使用对日志进行轮转</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/tmp/log/log.txt
<span class="token punctuation">{</span>
    copytruncate
    daily
    rotate <span class="token number">30</span>
    missingok
    ifempty
    compress
    noolddir
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置文件代表的意思是将<code>/tmp/log/log.txt</code>文件 进行轮转压缩</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>compress                 通过gzip 压缩转储以后的日志
nocompress               不做gzip压缩处理
copytruncate             用于还在打开中的日志文件，把当前日志备份并截断；是先拷贝再清空的方式，拷贝和清空之间有一个时间差，可能会丢失部分日志数据。
nocopytruncate 备份日志文件不过不截断
create mode owner group  轮转时指定创建新文件的属性，如create 0777 nobody nobody
nocreate                 不建立新的日志文件
delaycompress            和compress 一起使用时，转储的日志文件到下一次转储时才压缩
nodelaycompress          覆盖 delaycompress 选项，转储同时压缩
missingok                如果日志丢失，不报错继续滚动下一个日志
errors address           专储时的错误信息发送到指定的Email 地址
ifempty                  即使日志文件为空文件也做轮转，这个是logrotate的缺省选项。
notifempty               当日志文件为空时，不进行轮转
mail address             把转储的日志文件发送到指定的E-mail 地址
nomail                   转储时不发送日志文件
olddir directory         转储后的日志文件放入指定的目录，必须和当前日志文件在同一个文件系统
noolddir                 转储后的日志文件和当前日志文件放在同一个目录下
sharedscripts            运行postrotate脚本，作用是在所有日志都轮转后统一执行一次脚本。如果没有配置这个，那么每个日志轮转后都会执行一次脚本
prerotate                在logrotate转储之前需要执行的指令，例如修改文件的属性等动作；必须独立成行
postrotate               在logrotate转储之后需要执行的指令，例如重新启动 (kill -HUP) 某个服务！必须独立成行
daily                    指定转储周期为每天
weekly                   指定转储周期为每周
monthly                  指定转储周期为每月
rotate count             指定日志文件删除之前转储的次数，0 指没有备份，5 指保留5 个备份
dateext                  使用当期日期作为命名格式
dateformat .%s           配合dateext使用，紧跟在下一行出现，定义文件切割后的文件名，必须配合dateext使用，只支持 %Y %m %d %s 这四个参数
size(或minsize) log-size 当日志文件到达指定的大小时才转储
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><p>在<code>/etc/logrotate.d</code>目录下创建任意后缀名的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/tmp/log/log*
<span class="token punctuation">{</span>
    copytruncate
    daily
    rotate <span class="token number">30</span>
    missingok
    ifempty
    compress
    noolddir
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，会将轮转过的log再重新轮转,因为轮转过后的文件名也是已log开头的</p>`,21),l=[d];function r(t,o){return n(),a("div",null,l)}const v=e(i,[["render",r],["__file","logrotate.html.vue"]]);export{v as default};
