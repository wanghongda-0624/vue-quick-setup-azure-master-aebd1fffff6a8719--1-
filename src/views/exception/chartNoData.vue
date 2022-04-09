<template>
  <div class="" style="width:100%;text-align:center">
    <div class="">
      <img :src="imgUri"  style="width:622px; height:400px"/>
    </div>
    <div class="ant-result-title">
      NO DATA
    </div>
    <div class="ant-result-subtitle">
      Sorry, there is no data.
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
  name: 'ExceptionChartNoData',
  data () {
    return {
      // 图片路径
      imgUri: require('@/assets/img/piechart-no-data.png')
    }
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
