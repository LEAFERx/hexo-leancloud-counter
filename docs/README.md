# Quick Start

## Prerequisites

- Hexo >= 3.0
- Node >= 6.9.0
- A [LeanCloud](https://leancloud.cn) account. Register one if not.
- A [LeanCloud](https://leancloud.cn) application. Create one if not.

## Installation

:::warning
You should install this plugin in your **blog** directory. Do not install it in the theme directory.
:::

```sh
npm install --save hexo-leancloud-counter
```

## Configuration

Put these options into `_config.yml`:

```yaml
leancloud-counter:
  enable: true
  app_id: # app id
  app_key: # app key
  master_key: # (Optional) master key
```

::: tip Why this plugin need master key?
The previous ways to integrate the LeanCloud Counter feature have security problems due to inproper ACL setting.
To solve this problem, we need a way to ensure only the blogger can add / delete records in Counter.
Plugin [hexo-leancloud-counter-security(DEPRECATED)](https://github.com/theme-next/hexo-leancloud-counter-security) fixed this problem by createing an admin user, but it is unnecessarily complicated. Using master key instead is much simpler for both plugin and plugin users.
:::

::: tip How to keep master key safe?
There's three ways to pass master key to the plugin (priority from high to low):
- Set in `_config.yml`
- Pass to `HEXO_LEANCLOUD_COUNTER_MASTER_KEY` environment variable.
- If none of above is set, the plugin will interactively ask it in CLI.

If you only deploy your blog in local environment, `_config.yml` way is recommended for its convenience.

If you deploy your blog via CI tools and `_config.yml` is exposed to publich, use environment variable for security.
:::

::: danger
Always keep your master key safe. Regenerate when it is leaked.
:::

Also, add this plugin to `deploy` list in `_config.yml`:

```yaml
deploy:
  - type: leancloud_counter_sync
# - type: other deployer
```

## Create Counter class

Skip this step if you already have one.

This step requires [Puppeteer](https://pptr.dev/). But don't worry, the plugin will automaticly install it for you if none is installed.

Simply run this command:

```sh
hexo lc-counter init
```

And the plugin will just finish everything for you.

See how to [Manually Setup ACL](./manuallysetup) if you cannot install Puppeteer or don't want to.

## All done!

LeanCloud Counter should work now.

Checkout [Troubleshooting](./troubleshooting) if you meet any problems.