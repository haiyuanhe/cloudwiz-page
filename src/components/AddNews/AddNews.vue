<template>
  <div class="add-news">
    <a-button type="primary" @click="showModal">Add</a-button>
    <NewsModal
      :visible="visible"
      :record="record"
      :op="op"
      @add="add"
      @cancel="cancel"
    />
    <el-table
      :data="data"
      :stripe="true"
      style="width: 100%">
      <el-table-column
        label="Type"
        prop="type">
      </el-table-column>
      <el-table-column
        label="Title"
        prop="title">
      </el-table-column>
      <el-table-column
        label="Description"
        prop="description"
        width="500px">
      </el-table-column>
      <el-table-column
        label="Occurs Time"
        prop="occur_time">
      </el-table-column>
      <el-table-column
        label="Url"
        prop="url">
      </el-table-column>
      <el-table-column
        label="Images Url"
        prop="newsImg">
      </el-table-column>
      <el-table-column
        label="Operation"
        align="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="onEdit(scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="onDelete(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import NewsModal from './NewsModal'
import { message } from 'ant-design-vue'

export const SCC_CODE = 200

export default {
  name: 'AddNews',
  created () {
    this._getAllNews()
  },
  data () {
    return {
      visible: false,
      op: 'add',
      record: {},
      data: []
    }
  },
  methods: {
    _getAllNews () {
      axios.get('/api/news/queryAll').then(res => {
        if (+res.data.code === SCC_CODE) {
          this.data = res.data.data.reverse()
        }
      })
    },
    _addNews (data) {
      axios.post('/api/news/add', data).then(() => {
        this._getAllNews()
        message.info('Add Success');
      })
    },
    _updateNews (data) {
      axios.post('/api/news/update', data).then(() => {
        this._getAllNews()
        message.info('Update Success');
      })
    },
    _deleteNews (id) {
      axios.delete(`/api/news/deleteNews`, {
        params: {id}
      }).then(() => {
        this._getAllNews()
        message.info('Delete Success');
      })
    },
    showModal () {
      this.visible = true
    },
    add (data) {
      let newsImg = data.values.upload ? (`/news-images/${data.values.upload[0].name}`) : this.record.newsImg
      delete data.values.upload
      let values = {
        ...data.values,
        newsImg
      }
      if (this.op === 'add') {
        this._addNews(values)
      } else {
        this._updateNews({
          id: data.record.id,
          ...values
        })
        this.record = {}
      }
      this.visible = false
    },
    cancel (data) {
      this.visible = false
      this.record = {}
    },
    onEdit (record) {
      this.visible = true
      this.op = 'edit'
      this.record = {
        ...record,
        occur_time: moment(new Date(record.occur_time))
      }
    },
    onDelete (id) {
      this._deleteNews(id)
    }
  },
  components: {
    NewsModal
  }
}
</script>

<style lang='scss' scoped>
  .add-news {
    width: 90%;
    min-height: 800px;
    margin: 64px auto;
  }
</style>
