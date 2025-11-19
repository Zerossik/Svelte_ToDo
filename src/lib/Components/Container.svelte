<script>
  const { children, ...rest } = $props();
</script>

<div class="container" {...rest}>
  {@render children?.()}
</div>

<style lang="scss">
  .container {
    height: 100vh;
    max-width: 720px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
