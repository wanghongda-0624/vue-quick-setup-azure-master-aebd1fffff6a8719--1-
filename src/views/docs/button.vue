<template>
  <page-header-wrapper>
    <a-card>
      <div class="demo">
        <a-row>
          <a-col :span="24">
            <p>Default:</p>
            <a-button type="primary">
              Move
            </a-button>
            <a-button class="subbtn">Confirm</a-button>
          </a-col>
          <a-col :span="24">
            <p>Disalbed:</p>
            <a-button class="primaryBtnDisabled" type="primary" disabled>
              Move
            </a-button>
            <a-button type="dashed" class="subbtnDisabled" disabled>Confirm</a-button>
          </a-col>
          <a-col :span="24">
            <p>Checkbox-Main</p>
            <a-radio-group name="radioGroup" :default-value="1">
              <a-radio :value="1">
                A
              </a-radio>
              <a-radio :value="2">
                B
              </a-radio>
              <a-radio :value="3">
                C
              </a-radio>
            </a-radio-group>
            <a-radio-group name="radioGroup">
              <a-radio :value="1" :disabled="true">
                D
              </a-radio>
              <a-radio :value="2" :disabled="true">
                E
              </a-radio>
              <a-radio :value="3" :disabled="true">
                G
              </a-radio>
            </a-radio-group>
          </a-col>
          <a-col :span="24" style="margin-top: 12px;">
            <a-checkbox-group v-model="checkedList" :options="plainOptions" />
          </a-col>
        </a-row>
      </div>
<!--      <div class="code-box-wrap">-->
<!--        <div class="code-box-actions">-->
<!--          <a-tooltip>-->
<!--            <template slot="title">-->
<!--              {{ expand ? 'hide code' : 'show code' }}-->
<!--            </template>-->
<!--            <img-->
<!--              v-if="!expand"-->
<!--              width="16"-->
<!--              alt="expand code"-->
<!--              src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"-->
<!--              class="code-expand-icon-show"-->
<!--              @click="expand = !expand"-->
<!--            />-->
<!--            <img-->
<!--              v-if="expand"-->
<!--              width="16"-->
<!--              alt="expand code"-->
<!--              src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"-->
<!--              class="code-expand-icon-show"-->
<!--              @click="expand = !expand"-->
<!--            />-->
<!--          </a-tooltip>-->
<!--        </div>-->
<!--        <div class="code-box-content" v-show="expand">-->
<!--        <pre v-highlightjs>-->
<!--          <code class="javascript">-->
<!--            {{ codeContent }}-->
<!--          </code>-->
<!--        </pre>-->
<!--        </div>-->
<!--      </div>-->
    </a-card>
  </page-header-wrapper>
</template>

<script>
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];
export default {
  data () {
    return {
      expand: false,
      spinning: false,
      checkedList: defaultCheckedList,
      plainOptions,
      methods: {
        changeSpinning() {
          this.spinning = !this.spinning;
        },
      },
      codeContent: `
      <div class="demo">
        <a-button type="primary">
          Primary
        </a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">
          Dashed
        </a-button>
        <a-button type="danger">
          Danger
        </a-button>
        <a-config-provider :auto-insert-space-in-button="false">
          <a-button type="primary">
            按钮
          </a-button>
        </a-config-provider>
        <a-button type="primary">
          按钮
        </a-button>
        <a-button type="link">
          Link
        </a-button>
      </div>`

    }
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
