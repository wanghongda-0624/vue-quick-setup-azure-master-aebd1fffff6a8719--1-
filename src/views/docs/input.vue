<template>
  <page-header-wrapper>
    <a-row>
      <a-col :span="12">
        <a-card>
          <div class="demo">
            <template>
              <a-input placeholder="Basic usage" />
            </template>
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
      </a-col>
      <a-col :span="12">
        <a-card>
          <div class="demo">
            <template>
              <a-textarea placeholder="Autosize height based on content lines" auto-size />
              <div style="margin: 24px 0" />
              <a-textarea
                placeholder="Autosize height with minimum and maximum number of lines"
                :auto-size="{ minRows: 2, maxRows: 6 }"
              />
              <div style="margin: 24px 0" />
              <a-textarea
                v-model="value"
                placeholder="Controlled autosize"
                :auto-size="{ minRows: 3, maxRows: 5 }"
              />
            </template>
          </div>
          <div class="code-box-wrap">
            <div class="code-box-actions">
              <a-tooltip>
                <template slot="title">
                  {{ expand2 ? 'hide code' : 'show code' }}
                </template>
                <img
                  v-if="!expand2"
                  width="16"
                  alt="expand code"
                  src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                  class="code-expand-icon-show"
                  @click="expand2 = !expand2"
                />
                <img
                  v-if="expand2"
                  width="16"
                  alt="expand code"
                  src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                  class="code-expand-icon-show"
                  @click="expand2 = !expand2"
                />
              </a-tooltip>
            </div>
            <div class="code-box-content" v-show="expand2">
        <pre v-highlightjs>
          <code class="javascript">
            {{ codeContent2 }}
          </code>
        </pre>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>

  </page-header-wrapper>
</template>

<script>
export default {
  data () {
    return {
      expand: false,
      expand2: false,
      spinning: false,
      methods: {
        changeSpinning() {
          this.spinning = !this.spinning;
        },
      },
      value: '',
      codeContent: `
      <a-input placeholder="Basic usage" />`,
      codeContent2: `
       <a-textarea placeholder="Autosize height based on content lines" auto-size />
              <div style="margin: 24px 0" />
              <a-textarea
                placeholder="Autosize height with minimum and maximum number of lines"
                :auto-size="{ minRows: 2, maxRows: 6 }"
              />
              <div style="margin: 24px 0" />
              <a-textarea
                v-model="value"
                placeholder="Controlled autosize"
                :auto-size="{ minRows: 3, maxRows: 5 }"
              />`

    }
  }
}
</script>

<style lang="less">

</style>
