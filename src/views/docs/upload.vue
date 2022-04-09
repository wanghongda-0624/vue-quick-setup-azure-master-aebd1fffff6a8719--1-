<template>
  <page-header-wrapper>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <div class="demo">
            <template>
              <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
              >
                <p class="ant-upload-drag-icon">
                  <img width="100" src="~@/assets/img/Upload.png" alt="">
                </p>
                <p class="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                  band files
                </p>
              </a-upload-dragger>
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
              <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                :file-list="fileList"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="fileList.length < 8">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">
                    Upload
                  </div>
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
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
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  export default {
    data() {
      return {
        expand: false,
        expand2: false,
        spinning: false,
        headers: {
          authorization: 'authorization-text',
        },
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'url(~@/assets/img/Picture2.png)',
          }
        ],
        methods: {
          changeSpinning() {
            this.spinning = !this.spinning;
          },
        },
        value: '',
        codeContent: `
    <a-upload
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                  >
                    <a-button> <a-icon type="upload" /> Click to Upload </a-button>
                  </a-upload>`,
        codeContent2: `
      <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>`

      }
    },
    methods: {
      handleChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          this.$message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          this.$message.error(`${info.file.name} file upload failed.`);
        }
      },
      handleCancel() {
        this.previewVisible = false;
      },
      async handlePreview(file) {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        this.previewImage = file.url || file.preview;
        this.previewVisible = true;
      },
      handleChange({ fileList }) {
        this.fileList = fileList;
      },
    }
  }
</script>

<style lang="less">
  .demo .ant-col {
    margin: 8px 0;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .ant-upload.ant-upload-drag{
    background: #fff;
  }
</style>
