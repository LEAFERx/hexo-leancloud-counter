# Quick Start

## Prerequisites

- Node.js >= 6.9.0
- Hexo >= 3.0
- A [LeanCloud](https://leancloud.cn) account

## Installation

:::warning
You should install this plugin in your **blog** directory. Do not install it in the theme directory.
:::

```sh
npm install --save hexo-leancloud-counter
```

## Create a LeanCloud application

Go to [LeanCloud Dashboard](https://leancloud.cn/dashboard/) and create an application.

Inside your application, click `setting -> application key` and acquire your app id, app key and master key.

Follow instruction [here](https://leancloud.cn/docs/data_security.html#hash532104796) to set up you domain whitelist.

## Configuration

Put these options into `_config.yml`:

```yaml
leancloud_counter:
  enable: true
  app_id: # app id
  app_key: # app key
  master_key: # (Optional) master key
```

::: tip Why this plugin need master key?
The previous ways to integrate the LeanCloud Counter feature have security problems due to inproper ACL setting.
To solve this problem, we need a way to ensure only the blogger can add / delete records in Counter.
Plugin [hexo-leancloud-counter-security](https://github.com/theme-next/hexo-leancloud-counter-security) fixed this problem by createing an admin user, but it is unnecessarily complicated. Using master key instead is much simpler for both plugin and plugin users.
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

::: tip
You need to wait for about 5 mins after you have created a new application to create classes.
:::

This step requires [Puppeteer](https://pptr.dev/). But don't worry, the plugin will automaticly install it for you if none is installed.

Simply run this command:

```sh
hexo lc-counter init
```

And the plugin will just finish everything for you.

::: tip
You can just uninstall Puppeteer now, it's only used in this step.
:::

See how to [Manually Setup ACL](./manuallysetup) if you cannot install Puppeteer or don't want to.

## Sync your post list to LeanCloud

```sh
hexo g && hexo d
```

## Add hookguard to application

Inside your application, click `cloud engine -> setting`, fill out `repository` option with `https://github.com/LEAFERx/hexo-leancloud-counter-hookguard.git` and click `save`.

Then click `cloud engin -> deploy -> git deploy -> deploy`.

The hookguard is successfully deployed when log print out `hookguard deployed`.

::: tip Why hookguard is needed?
The hookguard prevent invalid update (like decrease the count or even change record url) from malicious user.
:::

::: tip Note the limit of free LeanEngine
The hookguard rely on LeanEngine. But we should be aware that free LeanEngin has use time limit and hibernate policy. See [LeanEngine Plan](https://leancloud.cn/docs/leanengine_plan.html#hash643734278) for details. So the Counter with hookguard deployed may be slow to response in some time when updating counts.
:::

## Integrate to your theme

::: tip
If your theme has already integrated this plugin, follow instructions from your theme.
:::

Add `<%- leancloud_counter_script() %>` to your template to render LeanCloud Counter script.

Add `<%- leancloud_counter({ action:'inc' }) %>` to pages that you want to count.

Bloggers can also use `leanCounter` tag to show some counters in specific posts.

For details, checkout [Tags & Helpers](./tagsandhelpers).

## What's more?

Checkout [Troubleshooting](./troubleshooting) if you meet any problems.