<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="24">
            <a-col :span="6">
              <a-form-model-item label="User Name">
                <a-input v-model="queryParam.username" />
              </a-form-model-item>
            </a-col>
            <a-col :span="4" style="text-align: right">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="refreshTable()">Search</a-button>
                <a-button style="margin-left: 8px" @click="resetSearch()">Reset</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <s-table row-key="id" ref="table" :columns="columns" :data="loadData">
        <span slot="action" slot-scope="text, record">
          <a v-auth:approve @click="handleEdit(record.id)">Approve</a>
        </span>
      </s-table>
    </a-card>
    <user-approve ref="editForm" :id="editForm.id" :visible.sync="editForm.visible" @refreshTable="refreshTable" />
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
import { getUserApprovalList } from '@/api/rbac'
import UserApprove from './UserApprove'

export default {
  components: {
    STable,
    UserApprove,
  },
  data() {
    return {
      editForm: {
        visible: false,
        id: null,
        title: null,
      },
      // 查询参数
      queryParam: {
        status: null,
        name: null,
      },
      // 表头
      columns: [
        {
          title: 'UID',
          dataIndex: 'uid',
        },
        {
          title: '用户名',
          dataIndex: 'username',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
        },
        {
          title: 'User Type',
          dataIndex: 'userType',
        },
        {
          title: 'Approve Status',
          dataIndex: 'approveStatus',
        },
        {
          title: '操作',
          width: '180px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        return getUserApprovalList(requestParameters).then((res) => {
          return res
        })
      },
    }
  },
  methods: {
    handleEdit(id) {
      this.editForm.visible = true
      this.editForm.id = id
    },
    handleDelete(id) {
      deleteUser(id).then((res) => {
        this.refreshTable()
        this.$message.success('Delete Successful')
      })
      this.editForm.id = id
    },
    refreshTable() {
      this.$refs.table.refresh(true)
    },
    resetSearch() {
      this.queryParam = {
        status: null,
        name: null,
      }
    },
  },
}
</script>
