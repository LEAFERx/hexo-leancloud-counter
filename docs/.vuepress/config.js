module.exports = {
  base: '/hexo-leancloud-counter/',
  title: 'Hexo LeanCloud Counter',
  description: 'asd',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/theme-next/hexo-leancloud-counter' },
    ],
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
};
