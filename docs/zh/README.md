# 快速开始

## 前置要求

- Node.js >= 6.9.0
- Hexo >= 3.0
- 一个 [LeanCloud](https://leancloud.cn) 账号

## 安装

:::warning
将该插件安装在**博客**目录下，而不是主题目录。
:::

```sh
npm install --save hexo-leancloud-counter
```

## 创建 LeanCloud 应用

前往 [LeanCloud 控制台](https://leancloud.cn/dashboard/) 创建一个应用。

在应用界面里，点击 `设置 -> 应用 key` 来获得你的 app id，app key 和 master key。

根据 [LeanCloud 数据与安全指南](https://leancloud.cn/docs/data_security.html#hash532104796) 设置你的应用 Web 安全域名。


## 配置

将以下配置写入 `_config.yml`:

```yaml
leancloud_counter:
  enable: true
  app_id: # app id
  app_key: # app key
  master_key: # (可选) master key
```

::: tip 为什么该插件需要 master key？
因为不正确的 ACL 设置，之前集成 LeanCloud Counter 的方法均有安全漏洞。
为了解决这个问题，我们必须保证只有博主可以增删 Counter 中的文章条目。
[hexo-leancloud-counter-security](https://github.com/theme-next/hexo-leancloud-counter-security) 插件通过创建一个 admin 用户来解决这个问题，但这种方法十分复杂。使用 master key 可以使插件和插件的使用方法更加简单便捷。
:::

::: tip 如何确保 master key 的安全？
该插件会通过以下三种途径获取 master key（优先级从高到低）：
- 通过 `_config.yml`
- 通过 `HEXO_LEANCLOUD_COUNTER_MASTER_KEY` 环境变量
- 如果以上均为设置，该插件会在命令行中询问

如果你只在本地环境部署你的博客，推荐的做法是直接将 master key 放在 `_config.yml` 中。

如果你使用 CI 工具等部署你的博客，并且 `_config.yml` 是公开的，请使用环境变量以保证 master key 的安全。
:::

::: danger
妥善保管你的 master key。如果不慎泄露，应立即重新生成。
:::

同时将该插件加入 `_config.yml` 的 `deploy` 列表:

```yaml
deploy:
  - type: leancloud_counter_sync
# - type: 其他的 deployer
```

## 创建 Counter 类

如果 Counter 类已经创建，请跳过该步骤。

::: tip
如果应用是新建的，你需要等待应用完成初始化（大约 5 分钟）后才能创建类。
:::

该步骤需要安装 [Puppeteer](https://pptr.dev/). 不过，如果没有安装，该插件会自动为你安装好。

运行以下命令：

```sh
hexo lc-counter init
```

该插件即会设置好一切。

::: tip
Puppeteer 只在这个步骤被用到，所以你现在完全可以卸载它。
:::

如果你不能或不想安装 Puppeteer，参见 [手动设置 ACL](./manuallysetup)。

## 将你的文章列表同步到 LeanCloud

```sh
hexo g && hexo d
```

## 为你的应用添加 hookguard

在你的应用中，点击 `云引擎 -> 设置`，在 `代码库` 中填入 `https://github.com/LEAFERx/hexo-leancloud-counter-hookguard.git` 然后点击 `保存`。

然后，点击 `云引擎 -> 部署 -> git 源码部署 -> 部署`。

当日志打印出 `hookguard deployed`，hookguard 已经成功部署了。

::: tip 为什么需要 hookguard？
Hookguard 可以防止来自恶意用户的非法更新请求（比如减少统计数目以及甚至篡改记录的url）。
:::

::: tip 请注意免费版 LeanEngine 的限制
Hookguard 依赖于 LeanEngine。但是，免费版 LeanEngine 有使用时间限制和休眠政策，详情可以查看 [LeanEngine Plan](https://leancloud.cn/docs/leanengine_plan.html#hash643734278)。所以，部署了 hookguard 的 Counter 在更新操作时可能会在某些时刻响应较慢。
:::

## 集成到你的主题

::: tip
如果你的主题已经集成了这个插件，请根据你主题的文档开启。
:::

把 `<%- leancloud_counter_script() %>` 加入你的全局模板中以渲染 LeanCloud Counter 脚本。

把 `<%- leancloud_counter({ action: 'inc' }) %>` 加入你希望计数的页面模板中。

博主也可以在某些源文件中使用 `leanCounter` 标签以手动渲染某些计数器。

参见 [标签（Tags）与辅助函数（Helpers）](./tagsandhelpers) 以获得更多细节。

## 更多

参见 [常见问题](./troubleshooting) 以解决常见的问题。