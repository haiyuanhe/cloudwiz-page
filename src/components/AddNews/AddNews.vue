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
    <a-table rowKey="id" :dataSource="data" :columns="columns">
      <template slot="operation" slot-scope="text, record">
        <a href="javascript:;" @click="onEdit(record)">Edit</a>
        <a-divider type="vertical" />
        <a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.id)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import NewsModal from './NewsModal'

const columns = [
  {
    title: 'Type',
    dataIndex: 'type'
  },
  {
    title: 'Title',
    dataIndex: 'title'
  },
  {
    title: 'Description',
    dataIndex: 'description'
  },
  {
    title: 'Occurs Time',
    dataIndex: 'occur_time'
  },
  {
    title: 'Url',
    dataIndex: 'url'
  },
  {
    title: 'Images',
    dataIndex: 'newsImg'
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

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
      data: [],
      columns
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
      })
    },
    _updateNews (data) {
      axios.post('/api/news/update', data).then(() => {
        this._getAllNews()
      })
    },
    _deleteNews (id) {
      axios.delete(`/api/news/deleteNews`, {
        params: {id}
      }).then(() => {
        this._getAllNews()
      })
    },
    showModal () {
      this.visible = true
    },
    add (data) {
      if (this.op === 'add') {
        this._addNews(data.values)
      } else {
        this._updateNews({
          id: data.record.id,
          ...data.values
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
    margin: 50px auto;
  }
</style>
