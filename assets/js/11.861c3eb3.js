(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{213:function(a,t,e){"use strict";e.r(t);var s=e(2),n=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"标签（tags）与辅助函数（helpers）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签（tags）与辅助函数（helpers）","aria-hidden":"true"}},[a._v("#")]),a._v(" 标签（Tags）与辅助函数（Helpers）")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("在你的源文件(例如：markdown)中使用标签而在你的模板（例如：ejs）中使用辅助函数。")])]),a._v(" "),e("h2",{attrs:{id:"tag-leancounter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag-leancounter","aria-hidden":"true"}},[a._v("#")]),a._v(" Tag: leanCounter")]),a._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("{{ leanCounter }}\n{{ leanCounter url:[url] }}\n{{ leanCounter action:[action] }}\n{{ leanCounter element:[element] }}\n")])])]),e("p",[a._v("这个标签可用于当你想在某些文章中显示某个计数器时。")]),a._v(" "),e("h3",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("url")]),a._v(" 可选")]),a._v(" "),e("p",[a._v("如果未设置，此文件在 hexo 中的路径会被使用.")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("action")]),a._v(" 可选")]),a._v(" "),e("p",[a._v("如果设置成 "),e("code",[a._v("inc")]),a._v(", LeanCloud Counter 在网页载入的时候会自动增加这个计数器。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("element")]),a._v(" 可选")]),a._v(" "),e("p",[a._v("这个 Counter 使用的 HTML 元素。")])])]),a._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("{{ leanCounter url:/some/url/ action:inc }}\n")])])]),e("p",[a._v("将会渲染为")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("span")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("leancloud-counter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("data-leancloud-counter-url")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("/some/url/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("data-leancloud-counter-inc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("h2",{attrs:{id:"helper-leancloud-counter-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helper-leancloud-counter-script","aria-hidden":"true"}},[a._v("#")]),a._v(" Helper: leancloud_counter_script")]),a._v(" "),e("div",{staticClass:"language-ejs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ejs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token ejs language-ejs"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("<%-")]),e("span",{pre:!0,attrs:{class:"token language-javascript"}},[a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("leancloud_counter_script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ")]),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("%>")])]),a._v("\n")])])]),e("p",[a._v("输出 LeanCloud Counter 的脚本。")]),a._v(" "),e("h2",{attrs:{id:"helper-leancloud-counter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helper-leancloud-counter","aria-hidden":"true"}},[a._v("#")]),a._v(" Helper: leancloud_counter")]),a._v(" "),e("div",{staticClass:"language-ejs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ejs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token ejs language-ejs"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("<%-")]),e("span",{pre:!0,attrs:{class:"token language-javascript"}},[a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("leancloud_counter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'span'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ")]),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("-%>")])]),a._v("\n")])])]),e("p",[a._v("输出与 leanCounter 标签类似。")]),a._v(" "),e("h3",{attrs:{id:"参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("action")]),a._v(" 可选；类型："),e("code",[a._v("String")]),a._v("; 可选值: "),e("code",[a._v("'inc' | ''")]),a._v("; 默认："),e("code",[a._v("''")])]),a._v(" "),e("p",[a._v("如果设置成 "),e("code",[a._v("inc")]),a._v(", LeanCloud Counter 在网页载入的时候会自动增加这个计数器。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("url")]),a._v(" 可选；类型："),e("code",[a._v("String")]),a._v("; 默认: "),e("code",[a._v("this.path")])]),a._v(" "),e("p",[a._v("计数器的 url。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("element")]),a._v(" 可选；类型："),e("code",[a._v("String")]),a._v("; 默认: "),e("code",[a._v("'span'")])]),a._v(" "),e("p",[a._v("这个计数器使用的网页元素。")])])]),a._v(" "),e("h2",{attrs:{id:"helper-leancloud-counter-legacy-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helper-leancloud-counter-legacy-script","aria-hidden":"true"}},[a._v("#")]),a._v(" Helper: leancloud_counter_legacy_script")]),a._v(" "),e("div",{staticClass:"language-ejs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ejs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token ejs language-ejs"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("<%-")]),e("span",{pre:!0,attrs:{class:"token language-javascript"}},[a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("leancloud_counter_legacy_script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("page"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("layout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ")]),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("%>")])]),a._v("\n")])])]),e("p",[a._v("（兼容性）输出老的 LeanCloud Counter (hexo-leancloud-counter-security) 的脚本。")])])},[],!1,null,null,null);t.default=n.exports}}]);