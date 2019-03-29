# Tags & Helpers

::: tip
Use tags in your source file (e.g. markdown) and use helpers in your templates (e.g. ejs).
:::

## Tag: leanCounter

```markdown
{{ leanCounter }}
{{ leanCounter url:[url] }}
{{ leanCounter action:[action] }}
{{ leanCounter element:[element] }}
```

This tag is useful when you want to show some specific counters in your post.

### Arguments

- `url` optional

  If not set, the url of the file in Hexo will be used

- `action` optional
  
  If set to `inc`, LeanCloud Counter will automaticly increase this counter when page is load.

- `element` optional

  The HTML element the counter uses.

### Example

```markdown
{{ leanCounter url:/some/url/ action:inc }}
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
<%- leancloud_counter({
  action: '',
  url: this.path,
  element: 'span'
}) -%>
```

This outputs the same as the leanCounter tag.

### Arguments

- `action` optional; type: `String`; value: `'inc' | ''`; default: `''`
  
  If set `inc`, LeanCloud Counter will automaticly increase this counter when page is load.

- `url` optional; type: `String`; default: `this.path`
  
  The url of counter.

- `element` optional; type: `String`; default: `'span'`

  The HTML element used for this counter.

## Helper: leancloud\_counter\_legacy\_script

```ejs
<%- leancloud_counter_legacy_script(page.layout) %>
```

This is the legacy script for compatibility of old LeanCloud Counter (hexo-leancloud-counter-security).
