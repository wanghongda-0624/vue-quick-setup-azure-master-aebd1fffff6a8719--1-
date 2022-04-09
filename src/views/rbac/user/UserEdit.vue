<template>
  <a-drawer :title="title" :width="700" :visible="visible" @close="close">
    <a-spin :spinning="loading">
      <a-form :form="form" :labelCol="labelCol"  :wrapperCol="wrapperCol">
        <a-form-item type="hidden">
          <a-input v-decorator="['id']"  type="hidden"/>
        </a-form-item>
        <a-form-item prop="uid" label="Uid">
          <a-input v-decorator="['code',{rules:[{required: true, message: 'cannt be null'}]}]" :disabled="id != null" />
        </a-form-item>
        <a-form-item prop="username" :label="$t('label.username')" hasFeedback>
          <a-input v-decorator="['name', {rules:[{required: true, message: 'cannt be null'}]}]"/>
        </a-form-item>
        <a-form-item prop="email" :label="$t('label.email')" hasFeedback>
          <a-input v-decorator="['email',{  initialValue:'sample@bmw-brilliance.cn' }]"/>
        </a-form-item>
        <a-form-item prop="mobile" :label="$t('label.phone')" hasFeedback>
          <a-input v-decorator="['mobile']" />
        </a-form-item>
        <a-form-item prop="type" :label="$t('label.user.type')" :wrapperCol="{ span: 6 }">
          <a-select v-decorator="['type']">
            <a-select-option value="BBA">BBA</a-select-option>
            <a-select-option value="Supplier">Supplier</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item prop="roleIds" :label="$t('label.roles')">
          <a-checkbox-group v-decorator="[`roleIds`]">
            <span  v-for="(vo,key) in availableRoles" :key="key"><a-checkbox :title="vo.description" :value="''+vo.id">{{vo.name}}</a-checkbox></span>
          </a-checkbox-group>
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
import { getUserById, updateUser, addUser, listAvailableRoles } from '@/api/rbac'
import pick from 'lodash.pick'

const fields = [
  'id',
  'code',
  'name',
  'email',
  'mobile',
  'type',
  'roleIds'
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
      availableRoles: [],
      form: this.$form.createForm(this),
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 18
      }
    }
  },
  methods: {
    show() {
      this.$nextTick(() => {
        this.loading = true
        this.form.resetFields()
        this.checkdRoles = []
        listAvailableRoles().then((res) => {
          this.availableRoles = res.data
          if (this.id != null) {
            getUserById(this.id).then((res) => {
              res.data && this.form.setFieldsValue(pick(res.data, fields))
            })
          }
          this.loading = false
        })
      })
    },
    submit() {
      this.form.validateFields((errors, values) => {
        if (!errors) {
          const formData = this.form.getFieldsValue()
          if (this.id == null) {
            addUser(formData).then((res) => {
              this.close()
              this.$emit('refreshTable')
              this.$message.success('Add Successful')
            })
          } else {
            updateUser(this.id, formData).then((res) => {
              this.close()
              this.$emit('refreshTable')
              this.$message.success('Edit Successful')
            })
          }
        }
      })
    },
    close() {
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
