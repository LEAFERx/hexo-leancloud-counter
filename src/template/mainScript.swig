<script>
{% include "../static/LeanCounter.js" with only %}
var leanCounter = new LeanCounter({
  appId: '{{ appId }}',
  appKey: '{{ appKey }}',
});
</script>