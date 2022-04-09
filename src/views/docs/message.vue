<template>
  <page-header-wrapper>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <div class="demo">
            <template>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-button type="primary" @click="info">
                    Display normal message
                  </a-button>
                </a-col>
              </a-row>
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
              <a-button @click="success">
                Success
              </a-button>
              <a-button @click="error">
                Error
              </a-button>
              <a-button @click="warning">
                Warning
              </a-button>
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
    data() {
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
  <a-button type="primary" @click="info">
    Display normal message
  </a-button>`,
        codeContent2: `
      <div>
    <a-button @click="success">
      Success
    </a-button>
    <a-button @click="error">
      Error
    </a-button>
    <a-button @click="warning">
      Warning
    </a-button>
  </div>`

      }
    },
    methods: {
      info() {
        this.$message.info('This is a normal message');
      },
      success() {
        this.$message.success('This is a success message');
      },
      error() {
        this.$message.error('This is an error message');
      },
      warning() {
        this.$message.warning('This is a warning message');
      }
    }
  }
</script>

<style lang="less">
  .demo .ant-col {
    margin: 8px 0;
  }
</style>
