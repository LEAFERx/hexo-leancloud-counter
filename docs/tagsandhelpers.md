# Tags & Helpers

::: tip
Use tags in your source file (e.g. markdown) and use helpers in your templates (e.g. ejs).
:::

## Tag: leanCounter

```markdown
{{ leanCounter [url, [action]] }}
```

This tag is useful when you want to show some specific counters in your post.

### Arguments

- `url` optional

  If not set, the url of the file will be used and `action` will set to `inc`.

  ```markdown
  {{ leanCounter }}
  ```

  will get

  ```html
  <span class="leancloud-counter" data-leancloud-counter-url="/path/of/your/file/" data-leancloud-counter-inc>
  ```

- `action` optional; require: `url`
  
  If set to `inc`, LeanCloud Counter will automaticly increase this counter when page is load.

  ```markdown
  {{ leanCounter /some/url/ inc }}
  ```

  will get

  ```html
  <span class="leancloud-counter" data-leancloud-counter-url="/some/url/" data-leancloud-counter-inc>
  ```

## Helper: leancloud\_counter\_script

```ejs
<%- leancloud_counter_script() %>
```

This outputs the LeanCloud Counter script.

## Helper: leancloud\_counter

```ejs
<%- leancloud_counter([url], [action], [element]) -%>
```

This outputs the same as the leanCounter tag.

### Arguments

- `url` optional; type: `String`
  
  If not set, `this.path` will be used and `action` will be set to `'inc'`.

  You can simply leave `url` and `action` blanked if it is the counter for the current page / post.

- `action` optional; type: `String`; value: `'inc' | undefined`; require: `url`
  
  If set `inc`, LeanCloud Counter will automaticly increase this counter when page is load.

- `element` optional; type: `String`; default: `'span'`

  The HTML element used for this counter.

## Helper: leancloud\_counter\_legacy\_script

```ejs
<%- leancloud_counter_legacy_script(page.layout) %>
```

This is the legacy script for compatibility of old LeanCloud Counter (hexo-leancloud-counter-security).
