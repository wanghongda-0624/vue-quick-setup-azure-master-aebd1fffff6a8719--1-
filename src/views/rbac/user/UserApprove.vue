<template>
  <a-drawer title="User Approve" :width="600" :visible="visible" @close="close">
    <a-spin :spinning="loading">
      <a-form ref="form" :model="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-form-item label="Uid">
          <label>{{ form.uid }}</label>
        </a-form-item>
        <a-form-item label="Username">
          <label>{{ form.username }}</label>
        </a-form-item>
        <a-form-item label="Email">
          <label>{{ form.email }}</label>
        </a-form-item>
        <a-form-item label="Phone">
          <label>{{ form.phone }}</label>
        </a-form-item>
        <a-form-item label="User Type">
          <label>{{ form.userType }}</label>
        </a-form-item>
        <template v-if="form.userType == 'Supplier'">
          <a-form-item label="Vendor Code">
            <label>{{ form.vendorCode }}</label>
          </a-form-item>
          <a-form-item label="Vendor Name">
            <label>{{ form.vendorName }}</label>
          </a-form-item>
          <a-form-item label="Address">
            <label>{{ form.address }}</label>
          </a-form-item>
          <a-form-item label="TaxCode">
            <label>{{ form.taxCode }}</label>
          </a-form-item>
        </template>
        <a-form-item label="Approve Status">
          <label>{{ form.approveStatus }}</label>
        </a-form-item>
      </a-form>
    </a-spin>
    <div
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '12px 16px',
        textAlign: 'right',
        left: 0,
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button style="margin-right: 8px" @click="close">Cancel</a-button>
      <a-button style="margin-right: 8px" type="danger" @click="submit('Rejected')">Reject</a-button>
      <a-button type="primary" @click="submit('Approved')">Agree</a-button>
    </div>
  </a-drawer>
</template>

<script>
import { getUserById, approveUser } from '@/api/rbac'
export default {
  props: {
    visible: false,
    id: null,
    title: null,
  },
  data() {
    return {
      loading: false,
      form: {
        approveStatus: null,
      },
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
    }
  },
  methods: {
    show() {
      this.$nextTick(() => {
        this.loading = true
        getUserById(this.id).then((res) => {
          Object.assign(this.form, res)
          this.loading = false
        })
      })
    },
    submit(approveStatus) {
      approveUser(this.id, approveStatus).then((res) => {
        this.close()
        this.$emit('refreshTable')
        this.$message.success('Approve Successful')
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
