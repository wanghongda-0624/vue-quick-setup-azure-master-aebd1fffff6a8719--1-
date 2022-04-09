<template>
  <a-drawer :title="title" :width="700" :visible="visible" @close="close">
    <a-spin :spinning="loading">
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-form-item prop="id" :label="$t('label.role.id')" >
        <a-input v-decorator="['id']"  :disabled="true"/>
        <a-input v-decorator="['createTime']"  type="hidden"/>
        <a-input v-decorator="['createUser']"  type="hidden"/>
        <a-input v-decorator="['status']"  type="hidden"/>
      </a-form-item>
      <a-form-item prop="code" :label="$t('label.role.code')" hasFeedback>
        <a-input v-decorator="['code',{rules:[{required: true, message: 'cannt be null'}]}]"/>
      </a-form-item>
      <a-form-item prop="name" :label="$t('label.role.name')" hasFeedback>
        <a-input v-decorator="['name',{rules:[{required: true, message: 'cannt be null'}]}]" />
      </a-form-item>
      <a-form-item  :label="$t('label.role.description')" hasFeedback>
        <a-textarea  v-decorator="['description']" :row="3" />
      </a-form-item>
      <a-form-item :label="$t('label.permissions')"  :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-tree
          v-model="checkedKeys"
          checkable
          :tree-data="permissions"
          :defaultExpandAll="true"
          :checkStrictly="true"
        />
      </a-form-item>
    </a-form>
    </a-spin>
    <div
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button style="margin-right: 8px" @click="close">Cancel</a-button>
      <a-button type="primary" @click="submit">Submit</a-button>
    </div>
  </a-drawer>
</template>

<script>
import { getRoleById, updateRole, addRole, listPermissions } from '@/api/rbac'

import pick from 'lodash.pick'
const fields = [
    'id',
    'code',
    'name',
    'description',
  'createTime',
  'createUser',
  'status'
]

export default {
  props: {
    visible: false,
    id: null,
    title: null
  },
  data() {
    return {
      loading: false,
      permissions: [],
      checkedKeys: [],
      form: this.$form.createForm(this),
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
    }
  },
  methods: {
    processPermission(tpermission) {
      const actionsOptions = JSON.parse(tpermission);
      return actionsOptions;
    },
    show() {
      this.$nextTick(() => {
        this.form.resetFields()
        this.checkedKeys = []
        this.permissions = listPermissions()
        if (this.id != null) {
          this.loading = true
          getRoleById(this.id).then((res) => {
            res.data && this.form.setFieldsValue(pick(res.data, fields))
            this.checkedKeys = res.data.permissions
            this.loading = false
          })
        }
      })
    },
    submit() {
      this.form.validateFields((errors, values) => {
        if (!errors) {
          const formData = this.form.getFieldsValue()
          formData.permissions = this.checkedKeys.checked
          if (this.id == null) {
            addRole(formData).then((res) => {
              this.close()
              this.$emit('refreshTable')
              this.$message.success('Add Successful')
            })
          } else {
            updateRole(this.id, formData).then((res) => {
              this.close()
              this.$emit('refreshTable')
              this.$message.success('Edit Successful')
            })
          }
        }
      })
    },
    close() {
      this.form.resetFields()
      this.checkedKeys = []
      this.$emit('update:visible', false)
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.show()
      }
    },
  },
}
</script>
