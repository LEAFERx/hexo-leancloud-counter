(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{212:function(t,e,a){"use strict";a.r(e);var s=a(2),o=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("ul",[a("li",[t._v("Node.js >= 6.9.0")]),t._v(" "),a("li",[t._v("Hexo >= 3.0")]),t._v(" "),a("li",[t._v("A "),a("a",{attrs:{href:"https://leancloud.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanCloud"),a("OutboundLink")],1),t._v(" account")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You should install this plugin in your "),a("strong",[t._v("blog")]),t._v(" directory. Do not install it in the theme directory.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save hexo-leancloud-counter\n")])])]),a("h2",{attrs:{id:"create-a-leancloud-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-leancloud-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Create a LeanCloud application")]),t._v(" "),a("p",[t._v("Go to "),a("a",{attrs:{href:"https://leancloud.cn/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanCloud Dashboard"),a("OutboundLink")],1),t._v(" and create an application.")]),t._v(" "),a("p",[t._v("Inside your application, click "),a("code",[t._v("setting -> application key")]),t._v(" and acquire your app id, app key and master key.")]),t._v(" "),a("p",[t._v("Follow instruction "),a("a",{attrs:{href:"https://leancloud.cn/docs/data_security.html#hash532104796",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" to set up you domain whitelist.")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Put these options into "),a("code",[t._v("_config.yml")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("leancloud_counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app_id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app id")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app key")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (Optional) master key")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Why this plugin need master key?")]),t._v(" "),a("p",[t._v("The previous ways to integrate the LeanCloud Counter feature have security problems due to inproper ACL setting.\nTo solve this problem, we need a way to ensure only the blogger can add / delete records in Counter.\nPlugin "),a("a",{attrs:{href:"https://github.com/theme-next/hexo-leancloud-counter-security",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-leancloud-counter-security"),a("OutboundLink")],1),t._v(" fixed this problem by createing an admin user, but it is unnecessarily complicated. Using master key instead is much simpler for both plugin and plugin users.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("How to keep master key safe?")]),t._v(" "),a("p",[t._v("There's three ways to pass master key to the plugin (priority from high to low):")]),t._v(" "),a("ul",[a("li",[t._v("Set in "),a("code",[t._v("_config.yml")])]),t._v(" "),a("li",[t._v("Pass to "),a("code",[t._v("HEXO_LEANCLOUD_COUNTER_MASTER_KEY")]),t._v(" environment variable.")]),t._v(" "),a("li",[t._v("If none of above is set, the plugin will interactively ask it in CLI.")])]),t._v(" "),a("p",[t._v("If you only deploy your blog in local environment, "),a("code",[t._v("_config.yml")]),t._v(" way is recommended for its convenience.")]),t._v(" "),a("p",[t._v("If you deploy your blog via CI tools and "),a("code",[t._v("_config.yml")]),t._v(" is exposed to publich, use environment variable for security.")])]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),a("p",[t._v("Always keep your master key safe. Regenerate when it is leaked.")])]),t._v(" "),a("p",[t._v("Also, add this plugin to "),a("code",[t._v("deploy")]),t._v(" list in "),a("code",[t._v("_config.yml")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" leancloud_counter_sync\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - type: other deployer")]),t._v("\n")])])]),a("h2",{attrs:{id:"create-counter-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-counter-class","aria-hidden":"true"}},[t._v("#")]),t._v(" Create Counter class")]),t._v(" "),a("p",[t._v("Skip this step if you already have one.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You need to wait for about 5 mins after you have created a new application to create classes.")])]),t._v(" "),a("p",[t._v("This step requires "),a("a",{attrs:{href:"https://pptr.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer"),a("OutboundLink")],1),t._v(". But don't worry, the plugin will automaticly install it for you if none is installed.")]),t._v(" "),a("p",[t._v("Simply run this command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("hexo lc-counter init\n")])])]),a("p",[t._v("And the plugin will just finish everything for you.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can just uninstall Puppeteer now, it's only used in this step.")])]),t._v(" "),a("p",[t._v("See how to "),a("a",{attrs:{href:"./manuallysetup"}},[t._v("Manually Setup ACL")]),t._v(" if you cannot install Puppeteer or don't want to.")]),t._v(" "),a("h2",{attrs:{id:"sync-your-post-list-to-leancloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sync-your-post-list-to-leancloud","aria-hidden":"true"}},[t._v("#")]),t._v(" Sync your post list to LeanCloud")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("hexo g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hexo d\n")])])]),a("h2",{attrs:{id:"add-hookguard-to-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-hookguard-to-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Add hookguard to application")]),t._v(" "),a("p",[t._v("Inside your application, click "),a("code",[t._v("cloud engine -> setting")]),t._v(", fill out "),a("code",[t._v("repository")]),t._v(" option with "),a("code",[t._v("https://github.com/LEAFERx/hexo-leancloud-counter-hookguard.git")]),t._v(" and click "),a("code",[t._v("save")]),t._v(".")]),t._v(" "),a("p",[t._v("Then click "),a("code",[t._v("cloud engin -> deploy -> git deploy -> deploy")]),t._v(".")]),t._v(" "),a("p",[t._v("The hookguard is successfully deployed when log print out "),a("code",[t._v("hookguard deployed")]),t._v(".")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Why hookguard is needed?")]),t._v(" "),a("p",[t._v("The hookguard prevent invalid update (like decrease the count or even change record url) from malicious user.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Note the limit of free LeanEngine")]),t._v(" "),a("p",[t._v("The hookguard rely on LeanEngine. But we should be aware that free LeanEngin has use time limit and hibernate policy. See "),a("a",{attrs:{href:"https://leancloud.cn/docs/leanengine_plan.html#hash643734278",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanEngine Plan"),a("OutboundLink")],1),t._v(" for details. So the Counter with hookguard deployed may be slow to response in some time when updating counts.")])]),t._v(" "),a("h2",{attrs:{id:"integrate-to-your-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrate-to-your-theme","aria-hidden":"true"}},[t._v("#")]),t._v(" Integrate to your theme")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If your theme has already integrated this plugin, follow instructions from your theme.")])]),t._v(" "),a("p",[t._v("Add "),a("code",[t._v("<%- leancloud_counter_script() %>")]),t._v(" to your template to render LeanCloud Counter script.")]),t._v(" "),a("p",[t._v("Add "),a("code",[t._v("<%- leancloud_counter({ action:'inc' }) %>")]),t._v(" to pages that you want to count.")]),t._v(" "),a("p",[t._v("Bloggers can also use "),a("code",[t._v("leanCounter")]),t._v(" tag to show some counters in specific posts.")]),t._v(" "),a("p",[t._v("For details, checkout "),a("a",{attrs:{href:"./tagsandhelpers"}},[t._v("Tags & Helpers")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"what-s-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-more","aria-hidden":"true"}},[t._v("#")]),t._v(" What's more?")]),t._v(" "),a("p",[t._v("Checkout "),a("a",{attrs:{href:"./troubleshooting"}},[t._v("Troubleshooting")]),t._v(" if you meet any problems.")])])},[],!1,null,null,null);e.default=o.exports}}]);