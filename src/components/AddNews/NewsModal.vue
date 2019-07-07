<template>
  <a-modal
    title="Edit News"
    :visible="visible"
    width="60%"
    :destroyOnClose="true"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-form
      id="components-form-demo-validate-other"
      @submit="handleSubmit"
      :form="form"
    >
      <a-form-item v-bind="formItemLayout" label="Title" hasFeedback>
        <a-input
          v-decorator="[
            'title',
            {
              initialValue: this.op === 'add' ? '' : this.record.title,
              rules: [
                {
                  required: true,
                  message: 'Please input the news title!'
                }
              ]
            }
          ]"
          placeholder="Please input the news title"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Type" hasFeedback>
        <a-select
          v-decorator="[
            'type',
            {
              initialValue: this.op === 'add' ? '新闻' : this.record.type,
              rules: [{ required: true, message: 'Please select your type!' }]
            }
          ]"
          placeholder="Please select type"
        >
          <a-select-option value="新闻">新闻</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Url" hasFeedback>
        <a-input
          v-decorator="[
            'url',
            {
              initialValue: this.op === 'add' ? '' : this.record.url,
              rules: [
                {
                  required: true,
                  message: 'Please input the news url!'
                }
              ]
            }
          ]"
          placeholder="Please input the url"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Description" hasFeedback>
        <a-textarea
          :autosize="true"
          v-decorator="[
            'description',
            {
              initialValue: this.op === 'add' ? '' : this.record.description,
              rules: [
                {
                  required: true,
                  message: 'Please input the news description!'
                }
              ]
            }
          ]"
          placeholder="Please input the news description"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Image Url">
        <!-- <a-input
          v-decorator="[
            'newsImg',
            {
              initialValue: this.op === 'add' ? '' : this.record.newsImg,
              rules: [
                {
                  required: true,
                  message: 'Please input the news image url!'
                }
              ]
            }
          ]"
          placeholder="Please input the image url"
        /> -->
        <a-upload
          v-decorator="['upload', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          }]"
          action="/api/news/upload"
          list-type="picture"
          :multiple="false"
        >
          <a-button>
            <a-icon type="upload" /> Click to upload
          </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="OccursTime">
        <a-date-picker
          style="width: 100%"
          v-decorator="[
            'occur_time',
            {
              initialValue: this.op === 'add' ? time : this.record.occur_time,
              rules: [
                {
                  type: 'object',
                  required: true,
                  message: 'Please select time!'
                }
              ]
            }
          ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    visible: {
      type: Boolean
    },
    op: {
      type: String,
      default: 'add'
    },
    record: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  data: () => ({
    time: moment(new Date()),
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }),
  methods: {
    handleCancel (e) {
      this.$emit('cancel')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return
        }
        const values = {
          ...fieldsValue,
          occur_time: fieldsValue['occur_time'].format('YYYY/MM/DD')
        }
        this.$emit('add', { values, record: this.record })
      })
    },
    normFile  (e) {
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
