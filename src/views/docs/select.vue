<template>
  <page-header-wrapper>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <div class="demo">
            <template>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-select default-value="lucy" style="width: 100%" @change="handleChange">
                    <a-select-option value="jack">
                      Jack
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy
                    </a-select-option>
                    <a-select-option value="disabled" disabled>
                      Disabled
                    </a-select-option>
                    <a-select-option value="Yiminghe">
                      yiminghe
                    </a-select-option>
                  </a-select>
                </a-col>
                <a-col :span="12">
                  <a-select default-value="lucy" style="width: 100%" disabled>
                    <a-select-option value="lucy">
                      Lucy
                    </a-select-option>
                  </a-select>
                </a-col>
                <a-col :span="12" col-12>
                  <a-select default-value="lucy" style="width: 100%" loading>
                    <a-select-option value="lucy">
                      Lucy
                    </a-select-option>
                  </a-select>
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
              <a-radio-group v-model="size">
                <a-radio-button value="large">
                  Large
                </a-radio-button>
                <a-radio-button value="default">
                  Default
                </a-radio-button>
                <a-radio-button value="small">
                  Small
                </a-radio-button>
              </a-radio-group>
              <br /><br />
              <a-select :size="size" default-value="a1" style="width: 200px" @change="handleChange">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
              <br />
              <a-select
                mode="multiple"
                :size="size"
                placeholder="Please select"
                :default-value="['a1', 'b2']"
                style="width: 200px"
                @change="handleChange"
                @popupScroll="popupScroll"
              >
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
              <br />
              <a-select
                mode="tags"
                :size="size"
                placeholder="Please select"
                :default-value="['a1', 'b2']"
                style="width: 200px"
                @change="handleChange"
              >
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
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
      <a-select default-value="lucy" style="width: 120px" @change="handleChange">
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled
      </a-select-option>
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" disabled>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" loading>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>`,
        codeContent2: `
      <a-radio-group v-model="size">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="default">
        Default
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <br /><br />
    <a-select :size="size" default-value="a1" style="width: 200px" @change="handleChange">
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="multiple"
      :size="size"
      placeholder="Please select"
      :default-value="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
      @popupScroll="popupScroll"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="tags"
      :size="size"
      placeholder="Please select"
      :default-value="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>`

      }
    }
  }
</script>

<style lang="less">
.demo .ant-col {
  margin: 8px 0;
}
</style>
