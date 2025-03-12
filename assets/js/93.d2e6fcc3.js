(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{388:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh-密钥登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-密钥登录"}},[s._v("#")]),s._v(" SSH 密钥登录")]),s._v(" "),a("blockquote",[a("p",[s._v("作者："),a("a",{attrs:{href:"https://wangdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("来自网道项目"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("本站地址："),a("a",{attrs:{href:"http://springsongs.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://springsongs.cn"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("SSH 默认采用密码登录，这种方法有很多缺点，简单的密码不安全，复杂的密码不容易记忆，每次手动输入也很麻烦。密钥登录是比密码登录更好的解决方案。")]),s._v(" "),a("h2",{attrs:{id:"密钥是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密钥是什么"}},[s._v("#")]),s._v(" 密钥是什么")]),s._v(" "),a("p",[s._v("密钥（key）是一个非常大的数字，通过加密算法得到。对称加密只需要一个密钥，非对称加密需要两个密钥成对使用，分为公钥（public key）和私钥（private key）。")]),s._v(" "),a("p",[s._v("SSH 密钥登录采用的是非对称加密，每个用户通过自己的密钥登录。其中，私钥必须私密保存，不能泄漏；公钥则是公开的，可以对外发送。它们的关系是，公钥和私钥是一一对应的，每一个私钥都有且仅有一个对应的公钥，反之亦然。")]),s._v(" "),a("p",[s._v("如果数据使用公钥加密，那么只有使用对应的私钥才能解密，其他密钥都不行；反过来，如果使用私钥加密（这个过程一般称为“签名”），也只有使用对应的公钥解密。")]),s._v(" "),a("h2",{attrs:{id:"密钥登录的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密钥登录的过程"}},[s._v("#")]),s._v(" 密钥登录的过程")]),s._v(" "),a("p",[s._v("SSH 密钥登录分为以下的步骤。")]),s._v(" "),a("p",[s._v("预备步骤，客户端通过"),a("code",[s._v("ssh-keygen")]),s._v("生成自己的公钥和私钥。")]),s._v(" "),a("p",[s._v("第一步，手动将客户端的公钥放入远程服务器的指定位置。")]),s._v(" "),a("p",[s._v("第二步，客户端向服务器发起 SSH 登录的请求。")]),s._v(" "),a("p",[s._v("第三步，服务器收到用户 SSH 登录的请求，发送一些随机数据给用户，要求用户证明自己的身份。")]),s._v(" "),a("p",[s._v("第四步，客户端收到服务器发来的数据，使用私钥对数据进行签名，然后再发还给服务器。")]),s._v(" "),a("p",[s._v("第五步，服务器收到客户端发来的加密签名后，使用对应的公钥解密，然后跟原始数据比较。如果一致，就允许用户登录。")]),s._v(" "),a("h2",{attrs:{id:"ssh-keygen命令-生成密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-keygen命令-生成密钥"}},[s._v("#")]),s._v(" "),a("code",[s._v("ssh-keygen")]),s._v("命令：生成密钥")]),s._v(" "),a("h3",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),a("p",[s._v("密钥登录时，首先需要生成公钥和私钥。OpenSSH 提供了一个工具程序"),a("code",[s._v("ssh-keygen")]),s._v("命令，用来生成密钥。")]),s._v(" "),a("p",[s._v("直接输入"),a("code",[s._v("ssh-keygen")]),s._v("，程序会询问一系列问题，然后生成密钥。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通常做法是使用"),a("code",[s._v("-t")]),s._v("参数，指定密钥的加密算法。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" dsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面示例中，"),a("code",[s._v("-t")]),s._v("参数用来指定密钥的加密算法，一般会选择 DSA 算法或 RSA 算法。如果省略该参数，默认使用 RSA 算法。")]),s._v(" "),a("p",[s._v("输入上面的命令以后，"),a("code",[s._v("ssh-keygen")]),s._v("会要求用户回答一些问题。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" dsa\nGenerating public/private dsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/username/.ssh/id_dsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  press ENTER\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": ********\nEnter same passphrase again: ********\nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/username/.ssh/id_dsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/username/.ssh/id_dsa.pub.\nThe key fingerprint is:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":ba:06:98:a8:98:ad:27:b5:ce:55:85:ec:64:37:19 username@shell.isp.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("上面示例中，执行"),a("code",[s._v("ssh-keygen")]),s._v("命令以后，会出现第一个问题，询问密钥保存的文件名，默认是"),a("code",[s._v("~/.ssh/id_dsa")]),s._v("文件，这个是私钥的文件名，对应的公钥文件"),a("code",[s._v("~/.ssh/id_dsa.pub")]),s._v("是自动生成的。用户的密钥一般都放在主目录的"),a("code",[s._v(".ssh")]),s._v("目录里面。")]),s._v(" "),a("p",[s._v("如果选择"),a("code",[s._v("rsa")]),s._v("算法，生成的密钥文件默认就会是"),a("code",[s._v("~/.ssh/id_rsa")]),s._v("（私钥）和"),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v("（公钥）。")]),s._v(" "),a("p",[s._v("接着，就会是第二个问题，询问是否要为私钥文件设定密码保护（passphrase）。这样的话，即使入侵者拿到私钥，还是需要破解密码。如果为了方便，不想设定密码保护，可以直接按回车键，密码就会为空。后面还会让你再输入一次密码，两次输入必须一致。注意，这里“密码”的英文单词是 passphrase，这是为了避免与 Linux 账户的密码单词 password 混淆，表示这不是用户系统账户的密码。")]),s._v(" "),a("p",[s._v("最后，就会生成私钥和公钥，屏幕上还会给出公钥的指纹，以及当前的用户名和主机名作为注释，用来识别密钥的来源。")]),s._v(" "),a("p",[s._v("公钥文件和私钥文件都是文本文件，可以用文本编辑器看一下它们的内容。公钥文件的内容类似下面这样。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIEAvpB4lUbAaEbh9u6HLig7amsfywD4fqSZq2ikACIUBn3GyRPfeF93l/\nweQh702ofXbDydZAKMcDvBJqRhUotQUwqV6HJxqoqPDlPGUUyo8RDIkLUIPRyq\nypZxmK9aCXokFiHoGCXfQ9imUP/w/jfqb9ByDtG97tUJF6nFMP5WzhM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" username@shell.isp.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面示例中，末尾的"),a("code",[s._v("username@shell.isp.com")]),s._v("是公钥的注释，用来识别不同的公钥，表示这是哪台主机（"),a("code",[s._v("shell.isp.com")]),s._v("）的哪个用户（"),a("code",[s._v("username")]),s._v("）的公钥，不是必需项。")]),s._v(" "),a("p",[s._v("注意，公钥只有一行。因为它太长了，所以上面分成三行显示。")]),s._v(" "),a("p",[s._v("下面的命令可以列出用户所有的公钥。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" ~/.ssh/id_*.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("生成密钥以后，建议修改它们的权限，防止其他人读取。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/id_rsa\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("p",[a("code",[s._v("ssh-keygen")]),s._v("的命令行配置项，主要有下面这些。")]),s._v(" "),a("p",[a("strong",[s._v("（1）"),a("code",[s._v("-b")])])]),s._v(" "),a("p",[a("code",[s._v("-b")]),s._v("参数指定密钥的二进制位数。这个参数值越大，密钥就越不容易破解，但是加密解密的计算开销也会加大。")]),s._v(" "),a("p",[s._v("一般来说，"),a("code",[s._v("-b")]),s._v("至少应该是"),a("code",[s._v("1024")]),s._v("，更安全一些可以设为"),a("code",[s._v("2048")]),s._v("或者更高。")]),s._v(" "),a("p",[a("strong",[s._v("（2）"),a("code",[s._v("-C")])])]),s._v(" "),a("p",[a("code",[s._v("-C")]),s._v("参数可以为密钥文件指定新的注释，格式为"),a("code",[s._v("username@host")]),s._v("。")]),s._v(" "),a("p",[s._v("下面命令生成一个4096位 RSA 加密算法的密钥对，并且给出了用户名和主机名。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@domain.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("（3）"),a("code",[s._v("-f")])])]),s._v(" "),a("p",[a("code",[s._v("-f")]),s._v("参数指定生成的私钥文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" dsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" mykey\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令会在当前目录生成私钥文件"),a("code",[s._v("mykey")]),s._v("和公钥文件"),a("code",[s._v("mykey.pub")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("（4）"),a("code",[s._v("-F")])])]),s._v(" "),a("p",[a("code",[s._v("-F")]),s._v("参数检查某个主机名是否在"),a("code",[s._v("known_hosts")]),s._v("文件里面。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" example.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("（5）"),a("code",[s._v("-N")])])]),s._v(" "),a("p",[a("code",[s._v("-N")]),s._v("参数用于指定私钥的密码（passphrase）。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" dsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-N")]),s._v(" secretword\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("（6）"),a("code",[s._v("-p")])])]),s._v(" "),a("p",[a("code",[s._v("-p")]),s._v("参数用于重新指定私钥的密码（passphrase）。它与"),a("code",[s._v("-N")]),s._v("的不同之处在于，新密码不在命令中指定，而是执行后再输入。ssh 先要求输入旧密码，然后要求输入两遍新密码。")]),s._v(" "),a("p",[a("strong",[s._v("（7）"),a("code",[s._v("-R")])])]),s._v(" "),a("p",[a("code",[s._v("-R")]),s._v("参数将指定的主机公钥指纹移出"),a("code",[s._v("known_hosts")]),s._v("文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" example.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("（8）"),a("code",[s._v("-t")])])]),s._v(" "),a("p",[a("code",[s._v("-t")]),s._v("参数用于指定生成密钥的加密算法，一般为"),a("code",[s._v("dsa")]),s._v("或"),a("code",[s._v("rsa")])]),s._v(" "),a("h2",{attrs:{id:"手动上传公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动上传公钥"}},[s._v("#")]),s._v(" 手动上传公钥")]),s._v(" "),a("p",[s._v("生成密钥以后，公钥必须上传到服务器，才能使用公钥登录。")]),s._v(" "),a("p",[s._v("OpenSSH 规定，用户公钥保存在服务器的"),a("code",[s._v("~/.ssh/authorized_keys")]),s._v("文件。你要以哪个用户的身份登录到服务器，密钥就必须保存在该用户主目录的"),a("code",[s._v("~/.ssh/authorized_keys")]),s._v("文件。只要把公钥添加到这个文件之中，就相当于公钥上传到服务器了。每个公钥占据一行。如果该文件不存在，可以手动创建。")]),s._v(" "),a("p",[s._v("用户可以手动编辑该文件，把公钥粘贴进去，也可以在本机计算机上，执行下面的命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@host "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面示例中，"),a("code",[s._v("user@host")]),s._v("要替换成你所要登录的用户名和主机名。")]),s._v(" "),a("p",[s._v("注意，"),a("code",[s._v("authorized_keys")]),s._v("文件的权限要设为"),a("code",[s._v("644")]),s._v("，即只有文件所有者才能写。如果权限设置不对，SSH 服务器可能会拒绝读取该文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("644")]),s._v(" ~/.ssh/authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("只要公钥上传到服务器，下次登录时，OpenSSH 就会自动采用密钥登录，不再提示输入密码。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" username shell.isp.com\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/you/.ssh/id_dsa'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ************\nLast login: Mon Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" 02:17:27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2014")]),s._v(" from ex.ample.com\nshell.isp.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("上面例子中，SSH 客户端使用私钥之前，会要求用户输入密码（passphrase），用来解开私钥。")]),s._v(" "),a("h2",{attrs:{id:"ssh-copy-id-命令-自动上传公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-copy-id-命令-自动上传公钥"}},[s._v("#")]),s._v(" ssh-copy-id 命令：自动上传公钥")]),s._v(" "),a("p",[s._v("OpenSSH 自带一个"),a("code",[s._v("ssh-copy-id")]),s._v("命令，可以自动将公钥拷贝到远程服务器的"),a("code",[s._v("~/.ssh/authorized_keys")]),s._v("文件。如果"),a("code",[s._v("~/.ssh/authorized_keys")]),s._v("文件不存在，"),a("code",[s._v("ssh-copy-id")]),s._v("命令会自动创建该文件。")]),s._v(" "),a("p",[s._v("用户在本地计算机执行下面的命令，就可以把本地的公钥拷贝到服务器。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-copy-id "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" key_file user@host\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("-i")]),s._v("参数用来指定公钥文件，"),a("code",[s._v("user")]),s._v("是所要登录的账户名，"),a("code",[s._v("host")]),s._v("是服务器地址。如果省略用户名，默认为当前的本机用户名。执行完该命令，公钥就会拷贝到服务器。")]),s._v(" "),a("p",[s._v("注意，公钥文件可以不指定路径和"),a("code",[s._v(".pub")]),s._v("后缀名，"),a("code",[s._v("ssh-copy-id")]),s._v("会自动在"),a("code",[s._v("~/.ssh")]),s._v("目录里面寻找。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-copy-id "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" id_rsa user@host\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，公钥文件会自动匹配到"),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("ssh-copy-id")]),s._v("会采用密码登录，系统会提示输入远程服务器的密码。")]),s._v(" "),a("p",[s._v("注意，"),a("code",[s._v("ssh-copy-id")]),s._v("是直接将公钥添加到"),a("code",[s._v("authorized_keys")]),s._v("文件的末尾。如果"),a("code",[s._v("authorized_keys")]),s._v("文件的末尾不是一个换行符，会导致新的公钥添加到前一个公钥的末尾，两个公钥连在一起，使得它们都无法生效。所以，如果"),a("code",[s._v("authorized_keys")]),s._v("文件已经存在，使用"),a("code",[s._v("ssh-copy-id")]),s._v("命令之前，务必保证"),a("code",[s._v("authorized_keys")]),s._v("文件的末尾是换行符（假设该文件已经存在）。")]),s._v(" "),a("h2",{attrs:{id:"ssh-agent-命令-ssh-add-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-agent-命令-ssh-add-命令"}},[s._v("#")]),s._v(" ssh-agent 命令，ssh-add 命令")]),s._v(" "),a("h3",{attrs:{id:"基本用法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法-2"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),a("p",[s._v("私钥设置了密码以后，每次使用都必须输入密码，有时让人感觉非常麻烦。比如，连续使用"),a("code",[s._v("scp")]),s._v("命令远程拷贝文件时，每次都要求输入密码。")]),s._v(" "),a("p",[a("code",[s._v("ssh-agent")]),s._v("命令就是为了解决这个问题而设计的，它让用户在整个 Bash 对话（session）之中，只在第一次使用 SSH 命令时输入密码，然后将私钥保存在内存中，后面都不需要再输入私钥的密码了。")]),s._v(" "),a("p",[s._v("第一步，使用下面的命令新建一次命令行对话。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-agent "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，如果你使用的命令行环境不是 Bash，可以用其他的 Shell 命令代替。比如"),a("code",[s._v("zsh")]),s._v("和"),a("code",[s._v("fish")]),s._v("。")]),s._v(" "),a("p",[s._v("如果想在当前对话启用"),a("code",[s._v("ssh-agent")]),s._v("，可以使用下面的命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("ssh-agent"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("ssh-agent")]),s._v("会先自动在后台运行，并将需要设置的环境变量输出在屏幕上，类似下面这样。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-agent\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/ssh-barrett/ssh-22841-agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SSH_AGENT_PID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22842")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" SSH_AGENT_PID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Agent pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22842")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("eval")]),s._v("命令的作用，就是运行上面的"),a("code",[s._v("ssh-agent")]),s._v("命令的输出，设置环境变量。")]),s._v(" "),a("p",[s._v("第二步，在新建的 Shell 对话里面，使用"),a("code",[s._v("ssh-add")]),s._v("命令添加默认的私钥（比如"),a("code",[s._v("~/.ssh/id_rsa")]),s._v("，或"),a("code",[s._v("~/.ssh/id_dsa")]),s._v("，或"),a("code",[s._v("~/.ssh/id_ecdsa")]),s._v("，或"),a("code",[s._v("~/.ssh/id_ed25519")]),s._v("）。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-add\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /home/you/.ssh/id_dsa: ********\nIdentity added: /home/you/.ssh/id_dsa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/you/.ssh/id_dsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面例子中，添加私钥时，会要求输入密码。以后，在这个对话里面再使用密钥时，就不需要输入私钥的密码了，因为私钥已经加载到内存里面了。")]),s._v(" "),a("p",[s._v("如果添加的不是默认私钥，"),a("code",[s._v("ssh-add")]),s._v("命令需要显式指定私钥文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-add my-other-key-file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面的命令中，"),a("code",[s._v("my-other-key-file")]),s._v("就是用户指定的私钥文件。")]),s._v(" "),a("p",[s._v("第三步，使用 ssh 命令正常登录远程服务器。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" remoteHost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令中，"),a("code",[s._v("remoteHost")]),s._v("是远程服务器的地址，ssh 使用的是默认的私钥。这时如果私钥设有密码，ssh 将不再询问密码，而是直接取出内存里面的私钥。")]),s._v(" "),a("p",[s._v("如果要使用其他私钥登录服务器，需要使用 ssh 命令的"),a("code",[s._v("-i")]),s._v("参数指定私钥文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" –i OpenSSHPrivateKey remoteHost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("最后，如果要退出"),a("code",[s._v("ssh-agent")]),s._v("，可以直接退出子 Shell（按下 Ctrl + d），也可以使用下面的命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-agent "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"ssh-add命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-add命令"}},[s._v("#")]),s._v(" "),a("code",[s._v("ssh-add")]),s._v("命令")]),s._v(" "),a("p",[a("code",[s._v("ssh-add")]),s._v("命令用来将私钥加入"),a("code",[s._v("ssh-agent")]),s._v("，它有如下的参数。")]),s._v(" "),a("p",[a("strong",[s._v("（1）"),a("code",[s._v("-d")])])]),s._v(" "),a("p",[a("code",[s._v("-d")]),s._v("参数从内存中删除指定的私钥。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-add "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" name-of-key-file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("（2）"),a("code",[s._v("-D")])])]),s._v(" "),a("p",[a("code",[s._v("-D")]),s._v("参数从内存中删除所有已经添加的私钥。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-add "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("（3）"),a("code",[s._v("-l")])])]),s._v(" "),a("p",[a("code",[s._v("-l")]),s._v("参数列出所有已经添加的私钥。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-add "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"关闭密码登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭密码登录"}},[s._v("#")]),s._v(" 关闭密码登录")]),s._v(" "),a("p",[s._v("为了安全性，启用密钥登录之后，最好关闭服务器的密码登录。")]),s._v(" "),a("p",[s._v("对于 OpenSSH，具体方法就是打开服务器 sshd 的配置文件"),a("code",[s._v("/etc/ssh/sshd_config")]),s._v("，将"),a("code",[s._v("PasswordAuthentication")]),s._v("这一项设为"),a("code",[s._v("no")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PasswordAuthentication no\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改配置文件以后，不要忘了重新启动 sshd，否则不会生效。")])])}),[],!1,null,null,null);a.default=n.exports}}]);