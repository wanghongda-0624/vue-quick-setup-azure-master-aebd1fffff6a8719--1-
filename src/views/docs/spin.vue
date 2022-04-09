<template>
  <page-header-wrapper>
    <a-card>
      <div>
        <a-spin :spinning="spinning">
          <a-icon slot="indicator" class="el-icon-bba-loading" style="font-size: 40px" />
          <div class="spin-content">
            可以点击‘切换’按钮，控制本区域的spin展示。
          </div>
        </a-spin>
        Loading state：<a-switch v-model="spinning" />
      </div>
      <div>
        采用以下方式可以集成ICON：
        <a-icon type="sort-ascending" />
        <a-icon type="wechat" theme="filled" />
      </div>
      <div class="code-box-wrap">
        <div class="code-box-actions">
          <a-tooltip>
            <template slot="title">
              {{ expand ? 'hide code' : 'show code' }}
            </template>
            <img
              v-if="!expand"
              width="16"
              alt="expand code"
              src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
              class="code-expand-icon-show"
              @click="expand = !expand"
            />
            <img
              v-if="expand"
              width="16"
              alt="expand code"
              src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
              class="code-expand-icon-show"
              @click="expand = !expand"
            />
          </a-tooltip>
        </div>
        <div class="code-box-content" v-show="expand">
        <pre v-highlightjs>
          <code class="javascript">
            {{ codeContent }}
          </code>
        </pre>
        </div>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
  data () {
    return {
      expand: false,
      spinning: false,
      methods: {
        changeSpinning() {
          this.spinning = !this.spinning;
        },
      },
      codeContent: `
     <div>
        <a-spin :spinning="spinning">
          <a-icon slot="indicator" class="el-icon-bba-loading" style="font-size: 40px" />
          <div class="spin-content">
            可以点击‘切换’按钮，控制本区域的spin展示。
          </div>
        </a-spin>
        Loading state：<a-switch v-model="spinning" />
      </div>
      <div>
        采用以下方式可以集成ICON：
        <a-icon type="sort-ascending" />
        <a-icon type="wechat" theme="filled" />
      </div>`

    }
  }
}
</script>

<style lang="less">

</style>
