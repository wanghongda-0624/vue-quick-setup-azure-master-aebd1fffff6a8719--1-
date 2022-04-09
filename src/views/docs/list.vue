<template>
  <page-header-wrapper>
    <a-card>
      <div class="demo">
        <a-list item-layout="horizontal" :data-source="data">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
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
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      }
    ]
    return {
      data,
      expand: false,
      spinning: false,
      methods: {
        changeSpinning() {
          this.spinning = !this.spinning;
        },
      },
      codeContent: `
     <a-list item-layout="horizontal" :data-source="data">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>`

    }
  }
}
</script>

<style lang="less">

</style>
