(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{341:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_7-指针"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-指针"}},[s._v("#")]),s._v(" 7.指针")]),s._v(" "),t("blockquote",[t("p",[s._v("作者："),t("a",{attrs:{href:"https://wangdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("来自网道项目"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("本站地址："),t("a",{attrs:{href:"http://springsongs.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://springsongs.cn"),t("OutboundLink")],1),s._v("\n指针是 C 语言最重要的概念之一，也是最难理解的概念之一。")])]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("指针是什么？首先，它是一个值，这个值代表一个内存地址，因此指针相当于指向某个内存地址的路标。")]),s._v(" "),t("p",[s._v("字符"),t("code",[s._v("*")]),s._v("表示指针，通常跟在类型关键字的后面，表示指针指向的是什么类型的值。比如，"),t("code",[s._v("char*")]),s._v("表示一个指向字符的指针，"),t("code",[s._v("float*")]),s._v("表示一个指向"),t("code",[s._v("float")]),s._v("类型的值的指针。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" intPtr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面示例声明了一个变量"),t("code",[s._v("intPtr")]),s._v("，它是一个指针，指向的内存地址存放的是一个整数。")]),s._v(" "),t("p",[s._v("星号"),t("code",[s._v("*")]),s._v("可以放在变量名与类型关键字之间的任何地方，下面的写法都是有效的。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("intPtr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" intPtr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  intPtr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("本书使用星号紧跟在类型关键字后面的写法（即"),t("code",[s._v("int* intPtr;")]),s._v("），因为这样可以体现，指针变量就是一个普通变量，只不过它的值是内存地址而已。")]),s._v(" "),t("p",[s._v("这种写法有一个地方需要注意，如果同一行声明两个指针变量，那么需要写成下面这样。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("上面示例中，第二行的执行结果是，"),t("code",[s._v("foo")]),s._v("是整数指针变量，而"),t("code",[s._v("bar")]),s._v("是整数变量，即"),t("code",[s._v("*")]),s._v("只对第一个变量生效。")]),s._v(" "),t("p",[s._v("一个指针指向的可能还是指针，这时就要用两个星号"),t("code",[s._v("**")]),s._v("表示。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面示例表示变量"),t("code",[s._v("foo")]),s._v("是一个指针，指向的还是一个指针，第二个指针指向的则是一个整数。")]),s._v(" "),t("h2",{attrs:{id:"运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[s._v("#")]),s._v(" * 运算符")]),s._v(" "),t("p",[t("code",[s._v("*")]),s._v("这个符号除了表示指针以外，还可以作为运算符，用来取出指针变量所指向的内存地址里面的值。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上面示例中，函数"),t("code",[s._v("increment()")]),s._v("的参数是一个整数指针"),t("code",[s._v("p")]),s._v("。函数体里面，"),t("code",[s._v("*p")]),s._v("就表示指针"),t("code",[s._v("p")]),s._v("所指向的那个值。对"),t("code",[s._v("*p")]),s._v("赋值，就表示改变指针所指向的那个地址里面的值。")]),s._v(" "),t("p",[s._v("上面函数的作用是将参数值加"),t("code",[s._v("1")]),s._v("。该函数没有返回值，因为传入的是地址，函数体内部对该地址包含的值的操作，会影响到函数外部，所以不需要返回值。事实上，函数内部通过指针，将值传到外部，是 C 语言的常用方法。")]),s._v(" "),t("p",[s._v("变量地址而不是变量值传入函数，还有一个好处。对于需要大量存储空间的大型变量，复制变量值传入函数，非常浪费时间和空间，不如传入指针来得高效。")]),s._v(" "),t("h2",{attrs:{id:"运算符-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算符-2"}},[s._v("#")]),s._v(" & 运算符")]),s._v(" "),t("p",[t("code",[s._v("&")]),s._v("运算符用来取出一个变量所在的内存地址。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x\'s address is %p\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("上面示例中，"),t("code",[s._v("x")]),s._v("是一个整数变量，"),t("code",[s._v("&x")]),s._v("就是"),t("code",[s._v("x")]),s._v("的值所在的内存地址。"),t("code",[s._v("printf()")]),s._v("的"),t("code",[s._v("%p")]),s._v("是内存地址的占位符，可以打印出内存地址。")]),s._v(" "),t("p",[s._v("上一小节中，参数变量加"),t("code",[s._v("1")]),s._v("的函数，可以像下面这样使用。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("上面示例中，调用"),t("code",[s._v("increment()")]),s._v("函数以后，变量"),t("code",[s._v("x")]),s._v("的值就增加了1，原因就在于传入函数的是变量"),t("code",[s._v("x")]),s._v("的地址"),t("code",[s._v("&x")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("&")]),s._v("运算符与"),t("code",[s._v("*")]),s._v("运算符互为逆运算，下面的表达式总是成立。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"指针变量的初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指针变量的初始化"}},[s._v("#")]),s._v(" 指针变量的初始化")]),s._v(" "),t("p",[s._v("声明指针变量之后，编译器会为指针变量本身分配一个内存空间，但是这个内存空间里面的值是随机的，也就是说，指针变量指向的值是随机的。这时一定不能去读写指针变量指向的地址，因为那个地址是随机地址，很可能会导致严重后果。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("上面的代码是错的，因为"),t("code",[s._v("p")]),s._v("指向的那个地址是随机的，向这个随机地址里面写入"),t("code",[s._v("1")]),s._v("，会导致意想不到的结果。")]),s._v(" "),t("p",[s._v("正确做法是指针变量声明后，必须先让它指向一个分配好的地址，然后再进行读写，这叫做指针变量的初始化。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\np "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("上面示例中，"),t("code",[s._v("p")]),s._v("是指针变量，声明这个变量后，"),t("code",[s._v("p")]),s._v("会指向一个随机的内存地址。这时要将它指向一个已经分配好的内存地址，上例就是再声明一个整数变量"),t("code",[s._v("i")]),s._v("，编译器会为"),t("code",[s._v("i")]),s._v("分配内存地址，然后让"),t("code",[s._v("p")]),s._v("指向"),t("code",[s._v("i")]),s._v("的内存地址（"),t("code",[s._v("p = &i;")]),s._v("）。完成初始化之后，就可以对"),t("code",[s._v("p")]),s._v("指向的内存地址进行赋值了（"),t("code",[s._v("*p = 13;")]),s._v("）。")]),s._v(" "),t("p",[s._v("为了防止读写未初始化的指针变量，可以养成习惯，将未初始化的指针变量设为"),t("code",[s._v("NULL")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("NULL")]),s._v("在 C 语言中是一个常量，表示地址为"),t("code",[s._v("0")]),s._v("的内存空间，这个地址是无法使用的，读写该地址会报错。")]),s._v(" "),t("h2",{attrs:{id:"指针的运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指针的运算"}},[s._v("#")]),s._v(" 指针的运算")]),s._v(" "),t("p",[s._v("指针本质上就是一个无符号整数，代表了内存地址。它可以进行运算，但是规则并不是整数运算的规则。")]),s._v(" "),t("p",[s._v("（1）指针与整数值的加减运算")]),s._v(" "),t("p",[s._v("指针与整数值的运算，表示指针的移动。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x1234")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0x1236")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上面示例中，"),t("code",[s._v("j")]),s._v("是一个指针，指向内存地址"),t("code",[s._v("0x1234")]),s._v("。由于"),t("code",[s._v("0x1234")]),s._v("本身是整数类型（"),t("code",[s._v("int")]),s._v("），跟"),t("code",[s._v("j")]),s._v("的类型（"),t("code",[s._v("short*")]),s._v("）并不兼容，所以强制使用类型投射，将"),t("code",[s._v("0x1234")]),s._v("转成"),t("code",[s._v("short*")]),s._v("。你可能以为"),t("code",[s._v("j + 1")]),s._v("等于"),t("code",[s._v("0x1235")]),s._v("，但正确答案是"),t("code",[s._v("0x1236")]),s._v("。原因是"),t("code",[s._v("j + 1")]),s._v("表示指针向内存地址的高位移动一个单位，而一个单位的"),t("code",[s._v("short")]),s._v("类型占据两个字节的宽度，所以相当于向高位移动两个字节。同样的，"),t("code",[s._v("j - 1")]),s._v("得到的结果是"),t("code",[s._v("0x1232")]),s._v("。")]),s._v(" "),t("p",[s._v("指针移动的单位，与指针指向的数据类型有关。数据类型占据多少个字节，每单位就移动多少个字节。")]),s._v(" "),t("p",[s._v("（2）指针与指针的加法运算")]),s._v(" "),t("p",[s._v("指针只能与整数值进行加减运算，两个指针进行加法是非法的。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 非法")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上面示例是两个指针相加，这是非法的。")]),s._v(" "),t("p",[s._v("（3）指针与指针的减法")]),s._v(" "),t("p",[s._v("相同类型的指针允许进行减法运算，返回它们之间的距离，即相隔多少个数据单位。")]),s._v(" "),t("p",[s._v("高位地址减去低位地址，返回的是正值；低位地址减去高位地址，返回的是负值。")]),s._v(" "),t("p",[s._v("这时，减法返回的值属于"),t("code",[s._v("ptrdiff_t")]),s._v("类型，这是一个带符号的整数类型别名，具体类型根据系统不同而不同。这个类型的原型定义在头文件"),t("code",[s._v("stddef.h")]),s._v("里面。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" j1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" j2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nj1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x1234")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nj2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x1236")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ptrdiff_t")]),s._v(" dist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" j2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" j1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%td\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("上面示例中，"),t("code",[s._v("j1")]),s._v("和"),t("code",[s._v("j2")]),s._v("是两个指向 short 类型的指针，变量"),t("code",[s._v("dist")]),s._v("是它们之间的距离，类型为"),t("code",[s._v("ptrdiff_t")]),s._v("，值为"),t("code",[s._v("1")]),s._v("，因为相差2个字节正好存放一个 short 类型的值。")]),s._v(" "),t("p",[s._v("（4）指针与指针的比较运算")]),s._v(" "),t("p",[s._v("指针之间的比较运算，比较的是各自的内存地址哪一个更大，返回值是整数"),t("code",[s._v("1")]),s._v("（true）或"),t("code",[s._v("0")]),s._v("（false）。")])])}),[],!1,null,null,null);t.default=e.exports}}]);