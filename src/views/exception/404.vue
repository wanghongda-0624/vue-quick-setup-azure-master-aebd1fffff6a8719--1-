<template>
  <div class="" style="width:100%;text-align:center">
    <div class="">
    <img :src="imgUri"  style="width:528px; height:400px"/>
    </div>
    <div class="ant-result-title">
      404
    </div>
    <div class="ant-result-subtitle">
      Sorry, the page you visited does not exist.
    </div>
    <div class="ant-result-extra">
      <a-button type="primary" @click="toHome">
      Back Home
    </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exception404',
  data () {
    return {
      // 图片路径
      imgUri: require('@/assets/img/404.png')
    }
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
