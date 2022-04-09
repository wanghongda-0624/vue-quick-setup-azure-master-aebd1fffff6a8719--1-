<template>
  <pre v-highlightjs="md">
    <code class="javascript">
    </code>
  </pre>
</template>

<script>
export default {
  name: 'DocComponent',
  props: {
    route: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      md: ''
    }
  }
}
</script>

<style lang="less" scoped>
  @import "index";
</style>
