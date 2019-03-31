(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{211:function(t,a,e){"use strict";e.r(a);var s=e(2),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),e("h2",{attrs:{id:"前置要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前置要求","aria-hidden":"true"}},[t._v("#")]),t._v(" 前置要求")]),t._v(" "),e("ul",[e("li",[t._v("Node.js >= 6.9.0")]),t._v(" "),e("li",[t._v("Hexo >= 3.0")]),t._v(" "),e("li",[t._v("一个 "),e("a",{attrs:{href:"https://leancloud.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanCloud"),e("OutboundLink")],1),t._v(" 账号")])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("将该插件安装在"),e("strong",[t._v("博客")]),t._v("目录下，而不是主题目录。")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save hexo-leancloud-counter\n")])])]),e("h2",{attrs:{id:"创建-leancloud-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-leancloud-应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 LeanCloud 应用")]),t._v(" "),e("p",[t._v("前往 "),e("a",{attrs:{href:"https://leancloud.cn/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanCloud 控制台"),e("OutboundLink")],1),t._v(" 创建一个应用。")]),t._v(" "),e("p",[t._v("在应用界面里，点击 "),e("code",[t._v("设置 -> 应用 key")]),t._v(" 来获得你的 app id，app key 和 master key。")]),t._v(" "),e("p",[t._v("根据 "),e("a",{attrs:{href:"https://leancloud.cn/docs/data_security.html#hash532104796",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanCloud 数据与安全指南"),e("OutboundLink")],1),t._v(" 设置你的应用 Web 安全域名。")]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("将以下配置写入 "),e("code",[t._v("_config.yml")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("leancloud_counter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app_id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app id")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app_key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app key")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master_key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (可选) master key")]),t._v("\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("为什么该插件需要 master key？")]),t._v(" "),e("p",[t._v("因为不正确的 ACL 设置，之前集成 LeanCloud Counter 的方法均有安全漏洞。\n为了解决这个问题，我们必须保证只有博主可以增删 Counter 中的文章条目。\n"),e("a",{attrs:{href:"https://github.com/theme-next/hexo-leancloud-counter-security",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-leancloud-counter-security"),e("OutboundLink")],1),t._v(" 插件通过创建一个 admin 用户来解决这个问题，但这种方法十分复杂。使用 master key 可以使插件和插件的使用方法更加简单便捷。")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("如何确保 master key 的安全？")]),t._v(" "),e("p",[t._v("该插件会通过以下三种途径获取 master key（优先级从高到低）：")]),t._v(" "),e("ul",[e("li",[t._v("通过 "),e("code",[t._v("_config.yml")])]),t._v(" "),e("li",[t._v("通过 "),e("code",[t._v("HEXO_LEANCLOUD_COUNTER_MASTER_KEY")]),t._v(" 环境变量")]),t._v(" "),e("li",[t._v("如果以上均为设置，该插件会在命令行中询问")])]),t._v(" "),e("p",[t._v("如果你只在本地环境部署你的博客，推荐的做法是直接将 master key 放在 "),e("code",[t._v("_config.yml")]),t._v(" 中。")]),t._v(" "),e("p",[t._v("如果你使用 CI 工具等部署你的博客，并且 "),e("code",[t._v("_config.yml")]),t._v(" 是公开的，请使用环境变量以保证 master key 的安全。")])]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),e("p",[t._v("妥善保管你的 master key。如果不慎泄露，应立即重新生成。")])]),t._v(" "),e("p",[t._v("同时将该插件加入 "),e("code",[t._v("_config.yml")]),t._v(" 的 "),e("code",[t._v("deploy")]),t._v(" 列表:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" leancloud_counter_sync\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - type: 其他的 deployer")]),t._v("\n")])])]),e("h2",{attrs:{id:"创建-counter-类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-counter-类","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 Counter 类")]),t._v(" "),e("p",[t._v("如果 Counter 类已经创建，请跳过该步骤。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("如果应用是新建的，你需要等待应用完成初始化（大约 5 分钟）后才能创建类。")])]),t._v(" "),e("p",[t._v("该步骤需要安装 "),e("a",{attrs:{href:"https://pptr.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer"),e("OutboundLink")],1),t._v(". 不过，如果没有安装，该插件会自动为你安装好。")]),t._v(" "),e("p",[t._v("运行以下命令：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("hexo lc-counter init\n")])])]),e("p",[t._v("该插件即会设置好一切。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Puppeteer 只在这个步骤被用到，所以你现在完全可以卸载它。")])]),t._v(" "),e("p",[t._v("如果你不能或不想安装 Puppeteer，参见 "),e("a",{attrs:{href:"./manuallysetup"}},[t._v("手动设置 ACL")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"将你的文章列表同步到-leancloud"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将你的文章列表同步到-leancloud","aria-hidden":"true"}},[t._v("#")]),t._v(" 将你的文章列表同步到 LeanCloud")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("hexo g "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hexo d\n")])])]),e("h2",{attrs:{id:"为你的应用添加-hookguard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为你的应用添加-hookguard","aria-hidden":"true"}},[t._v("#")]),t._v(" 为你的应用添加 hookguard")]),t._v(" "),e("p",[t._v("在你的应用中，点击 "),e("code",[t._v("云引擎 -> 设置")]),t._v("，在 "),e("code",[t._v("代码库")]),t._v(" 中填入 "),e("code",[t._v("https://github.com/LEAFERx/hexo-leancloud-counter-hookguard.git")]),t._v(" 然后点击 "),e("code",[t._v("保存")]),t._v("。")]),t._v(" "),e("p",[t._v("然后，点击 "),e("code",[t._v("云引擎 -> 部署 -> git 源码部署 -> 部署")]),t._v("。")]),t._v(" "),e("p",[t._v("当日志打印出 "),e("code",[t._v("hookguard deployed")]),t._v("，hookguard 已经成功部署了。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("为什么需要 hookguard？")]),t._v(" "),e("p",[t._v("Hookguard 可以防止来自恶意用户的非法更新请求（比如减少统计数目以及甚至篡改记录的url）。")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("请注意免费版 LeanEngine 的限制")]),t._v(" "),e("p",[t._v("Hookguard 依赖于 LeanEngine。但是，免费版 LeanEngine 有使用时间限制和休眠政策，详情可以查看 "),e("a",{attrs:{href:"https://leancloud.cn/docs/leanengine_plan.html#hash643734278",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanEngine Plan"),e("OutboundLink")],1),t._v("。所以，部署了 hookguard 的 Counter 在更新操作时可能会在某些时刻响应较慢。")])]),t._v(" "),e("h2",{attrs:{id:"集成到你的主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成到你的主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 集成到你的主题")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("如果你的主题已经集成了这个插件，请根据你主题的文档开启。")])]),t._v(" "),e("p",[t._v("把 "),e("code",[t._v("<%- leancloud_counter_script() %>")]),t._v(" 加入你的全局模板中以渲染 LeanCloud Counter 脚本。")]),t._v(" "),e("p",[t._v("把 "),e("code",[t._v("<%- leancloud_counter({ action: 'inc' }) %>")]),t._v(" 加入你希望计数的页面模板中。")]),t._v(" "),e("p",[t._v("博主也可以在某些源文件中使用 "),e("code",[t._v("leanCounter")]),t._v(" 标签以手动渲染某些计数器。")]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"./tagsandhelpers"}},[t._v("标签（Tags）与辅助函数（Helpers）")]),t._v(" 以获得更多细节。")]),t._v(" "),e("h2",{attrs:{id:"更多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"./troubleshooting"}},[t._v("常见问题")]),t._v(" 以解决常见的问题。")])])},[],!1,null,null,null);a.default=r.exports}}]);