<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form ref="seachForm" layout="inline">
          <a-row :gutter="24">
            <a-col :span="6">
              <a-form-item :label="$t('label.role.name')">
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
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record.id)">{{ $t('label.edit') }}</a>
          <a-divider type="vertical" />
          <a-popconfirm
            placement="left"
            :title="$t('message.role.delete')"
            @confirm="handleDelete(record.id)"
          >
            <a>{{ $t('label.delete') }}</a>
          </a-popconfirm>
        </span>
      </s-table>
    </a-card>
    <role-edit
      ref="editForm"
      :id="editForm.id"
      :visible.sync="editForm.visible"
      :title="editForm.title"
      v-on:refreshTable="refreshTable"
    />
  </page-header-wrapper>
</template>

<script>
import { getRoleList, deleteRole } from '@/api/rbac'
import { STable } from '@/components'
import RoleEdit from './RoleEdit'

export default {
  name: 'TableList',
  components: {
    STable,
    RoleEdit,
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
          title: this.$t('label.role.code'),
          dataIndex: 'id',
        },
        {
          title: this.$t('label.role.name'),
          dataIndex: 'name',
        },
        {
          title: this.$t('label.role.description'),
          dataIndex: 'description',
        },
        {
          title: this.$t('label.operation'),
          width: '180px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        return getRoleList(requestParameters).then((res) => {
          return res.data
        })
      },
    }
  },
  methods: {
    handleAdd() {
      this.editForm.visible = true
      this.editForm.id = null
      this.editForm.title = 'Add Role'
    },
    handleEdit(id) {
      this.editForm.visible = true
      this.editForm.id = id
      this.editForm.title = 'Edit Role'
    },
    handleDelete(id) {
      deleteRole(id).then((res) => {
        this.refreshTable()
        if (res) {
          this.$message.success('Delete Successful')
        }
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
