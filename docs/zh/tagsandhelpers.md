# 标签（Tags）与辅助函数（Helpers）

::: tip
在你的源文件(例如：markdown)中使用标签而在你的模板（例如：ejs）中使用辅助函数。
:::

## Tag: leanCounter

```markdown
{{ leanCounter }}
{{ leanCounter url:[url] }}
{{ leanCounter action:[action] }}
{{ leanCounter element:[element] }}
```

这个标签可用于当你想在某些文章中显示某个计数器时。

### 参数

- `url` 可选

  如果未设置，此文件在 hexo 中的路径会被使用.

- `action` 可选
  
  如果设置成 `inc`, LeanCloud Counter 在网页载入的时候会自动增加这个计数器。

- `element` 可选

  这个 Counter 使用的 HTML 元素。

### 示例

```markdown
{{ leanCounter url:/some/url/ action:inc }}
```

将会渲染为

```html
<span class="leancloud-counter" data-leancloud-counter-url="/some/url/" data-leancloud-counter-inc>
```

## Helper: leancloud\_counter\_script

```ejs
<%- leancloud_counter_script() %>
```

输出 LeanCloud Counter 的脚本。

## Helper: leancloud\_counter

```ejs
<%- leancloud_counter({
  action: '',
  url: this.path,
  element: 'span'
}) -%>
```

输出与 leanCounter 标签类似。

### 参数

- `action` 可选；类型：`String`; 可选值: `'inc' | ''`; 默认：`''`
  
  如果设置成 `inc`, LeanCloud Counter 在网页载入的时候会自动增加这个计数器。

- `url` 可选；类型：`String`; 默认: `this.path`

  计数器的 url。

- `element` 可选；类型：`String`; 默认: `'span'`

  这个计数器使用的网页元素。

## Helper: leancloud\_counter\_legacy\_script

```ejs
<%- leancloud_counter_legacy_script(page.layout) %>
```

（兼容性）输出老的 LeanCloud Counter (hexo-leancloud-counter-security) 的脚本。
