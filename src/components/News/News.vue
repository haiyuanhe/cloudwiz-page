<template>
  <div class="news-wrapper">
    <CloudHeader/>
    <div class="news-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="news-lists">
        <a-row
          type="flex"
          justify="center"
        >
          <a-col
            :xs="{ span: 32}"
            :sm="{ span: 32}"
            :md="{ span: 24}"
            :lg="{ span: 18}"
            :xl="{ span: 18}"
            v-for="(item, index) in news"
            :key="`${item.title}-${index}`"
          >
            <div class="news-list">
              <a-row>
                <a-col
                  class="news-images"
                  :xs="{ span: 32}"
                  :sm="{ span: 32}"
                  :md="{ span: 24}"
                  :lg="{ span: 8}"
                  :xl="{ span: 8}"
                >
                  <img :src="item.newsImg" alt="item.title" />
                </a-col>
                <a-col
                  :xs="{ span: 32}"
                  :sm="{ span: 32}"
                  :md="{ span: 24}"
                  :lg="{ span: 16}"
                  :xl="{ span: 16}"
                >
                  <div class="top">{{item.title}}</div>
                  <div class="middle">{{item.description}}</div>
                  <div class="bottom">
                    <div class="time">{{getNewsTime(item.occur_time, item.type)}}</div>
                    <a-button type="primary">阅读全文</a-button>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <CloudFooter />
  </div>
</template>

<script>
import CloudHeader from 'base/CloudHeader/CloudHeader'
import CloudFooter from 'base/CloudFooter/CloudFooter'
import PageHeader from 'base/PageHeader/PageHeader'

export default {
  name: 'news',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/news/news-backgroud.png'),
        title: '公司动态',
        description: '引领云运维管理的智能化时代'
      },
      news: [
        {
          type: '新闻',
          newsImg: require('common/images/news/news1.png'),
          title: '云上金融新时代 | 云兴维智亮相中国国际金融展',
          description: '2018年8月23日，第二十六届中国国际金融展在北京展览馆盛大开幕。云兴维智受邀参加，并在现场为参展嘉宾展示了公司在云计算与智&&2018年8月23日，第二十六届中国国际金融展在北京展览馆盛大开幕。云兴维智受邀参加，并在现场为参展嘉宾展示了公司在云计算与智2018年8月23日，第二十六届中国国际金融展在北京展览馆盛大开幕。云兴维智受邀参加，并在现场为参展嘉宾展示了公司在云计算与智',
          occur_time: '2017/08/08'
        },
        {
          type: '新闻',
          newsImg: require('common/images/news/news2.png'),
          title: '云上金融新时代 | 云兴维智亮相中国国际金融展',
          description: '2018年8月23日，第二十六届中国国际金融展在北京展览馆盛大开幕。云兴维智受邀参加，并在现场为参展嘉宾展示了公司在云计算与智',
          occur_time: '2017/08/08'
        }
      ]
    }
  },
  methods: {
    getNewsTime (time, type) {
      return `${time} | ${type}`
    }
  },
  components: {
    CloudHeader,
    CloudFooter,
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
  @mixin b-shadow($bs, $bhs) {
    box-shadow: 0 0 1.5rem $bs;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 1.5rem $bhs;
    }
  }
  @mixin no-wrap-nums($nums) {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: $nums;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 970px) {
    .news-images {
      text-align: center;
    }
  }
  @media (min-width: 970px) {
    .news-images {
      text-align: left;
    }
  }
  .news-wrapper {
    background: #f7f8fb;
    .news-lists {
      margin: 3rem auto;
      .news-list {
        margin: .6rem 0;
        border: 1px solid #ccc;
        @include b-shadow(#ccc, rgb(121, 114, 114));
        img {
          height: 15rem;
        }
        .top {
          font-size: 1.5rem;
          padding: 1.5rem 2rem;
        }
        .middle {
          font-size: .8rem;
          line-height: 1.5rem;
          padding: 0 2rem;
          @include no-wrap-nums(3)
        }
        .bottom {
          padding: 1rem 2rem;
          .time {
            float: left;
            line-height: 2.2rem;
          }
          .ant-btn-primary {
            float: right;
          }
        }
      }
    }
  }
</style>
