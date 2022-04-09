<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item :label="$t('label.permission.name')">
                <a-input v-model="queryParam.name" />
              </a-form-item>
            </a-col>
            <a-col :span="4" style="text-align: right">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="refreshTable()">{{ $t('label.search') }}</a-button>
                <a-button style="margin-left: 8px" @click="resetSearch()">{{ $t('label.reset') }}</a-button>
              </span>
            </a-col>
            <a-col :span="12" style="text-align: right">
              <a-popconfirm
                placement="topRight"
                :title="$t('message.permission.async')"
                @confirm="synchronize()"
              >
                <a-button type="primary" v-auth:synchronize>{{ $t('label.synchronize') }}</a-button>
              </a-popconfirm>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <s-table row-key="id" ref="table" :columns="columns" :data="loadData">
        <span slot="actionData" slot-scope="text, record">
          <a-tag v-for="(action, index) in JSON.parse(record.actionData)" :key="index">{{ action.describe }}</a-tag>
        </span>
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
import { getPermissionList, synchronizePermissions } from '@/api/rbac'
import { asyncRouterMap} from '@/config/router.config'

export default {
  name: 'TableList',
  components: {
    STable,
  },
  data() {
    return {
      visible: false,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {
        name: null,
      },
      // 表头
      columns: [
        {
          title: this.$t('label.permission.code'),
          dataIndex: 'id',
        },
        {
          title: this.$t('label.permission.name'),
          dataIndex: 'name',
        },
        {
          title: this.$t('label.permission.action'),
          dataIndex: 'actionData',
          scopedSlots: { customRender: 'actionData' },
        },
      ],
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        return getPermissionList(requestParameters).then((res) => {
          return res.result
        })
      },
    }
  },
  methods: {
    refreshTable() {
      this.$refs.table.refresh(true)
    },
    resetSearch() {
      this.queryParam = {
        name: null,
      }
    },
    synchronize() {
      synchronizePermissions().then((res) => {
        this.$message.success('Synchronize Successful')
      })
    },
  },
}
</script>
