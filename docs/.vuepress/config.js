module.exports = {
  base: '/hexo-leancloud-counter/',
  title: 'Hexo LeanCloud Counter',
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/theme-next/hexo-leancloud-counter' },
    ],
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          {
            title: 'Guide',
            collapsable: false,
            children: [
              ['/', 'Quick Start'],
              '/troubleshooting',
              '/manuallysetup',
            ],
          },
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用。",
            buttonText: "刷新"
          }
        },
        sidebar: [
          {
            title: '指南',
            collapsable: false,
            children: [
              ['/zh/', '快速开始'],
              '/zh/troubleshooting',
              '/zh/manuallysetup',
            ],
          },
        ],
      }
    },
  },
};
