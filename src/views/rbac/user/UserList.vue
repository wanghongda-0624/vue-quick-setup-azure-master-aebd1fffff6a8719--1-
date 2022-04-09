<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="24">
            <a-col :span="6">
              <a-form-item :label="$t('label.username')">
                <a-input v-model="queryParam.name" />
              </a-form-item>
            </a-col>
            <a-col :span="4" style="text-align: right">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="refreshTable()">{{ $t('label.search') }}</a-button>
                <a-button style="margin-left: 8px" @click="resetSearch()">{{ $t('label.reset') }}</a-button>
              </span>
            </a-col>
            <a-col :span="10" style="text-align: right">
              <a-button type="primary" @click="handleAdd()">{{ $t('label.add') }}</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <s-table row-key="id" ref="table" :columns="columns" :data="loadData">
        <a-tag color="blue" slot="status" slot-scope="text">{{ text }}</a-tag>
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record.id)">{{ $t('label.edit') }}</a>
          <a-divider type="vertical" />
          <a-popconfirm
            placement="left"
            :title="$t('message.user.delete')"
            @confirm="handleDelete(record.id)"
          >
            <a>{{ $t('label.delete') }}</a>
          </a-popconfirm>
        </span>
      </s-table>
    </a-card>
    <user-edit
      ref="editForm"
      :id="editForm.id"
      :visible.sync="editForm.visible"
      :title="editForm.title"
      @refreshTable="refreshTable"
    />
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
import { getUserList, deleteUser } from '@/api/rbac'
import UserEdit from './UserEdit'

export default {
  components: {
    STable,
    UserEdit,
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
          dataIndex: 'code'
        },
        {
          title: this.$t('label.username'),
          dataIndex: 'name'
        },
        {
          title: this.$t('label.phone'),
          dataIndex: 'mobile'
        },
        {
          title: this.$t('label.email'),
          dataIndex: 'email'
        },
        {
          title: this.$t('label.user.type'),
          dataIndex: 'type'
        },
        {
          title: this.$t('label.operation'),
          width: '180px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        return getUserList(requestParameters).then((res) => {
          return res.data
        })
      }
    }
  },
  methods: {
    handleAdd() {
      this.editForm.visible = true
      this.editForm.id = null
      this.editForm.title = 'Add User'
      // this.$refs.editForm.form.resetFields()
    },
    handleEdit(id) {
      this.editForm.visible = true
      this.editForm.id = id
      this.editForm.title = 'Edit User'
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
