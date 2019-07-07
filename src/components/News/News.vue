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
            :xs="{ span: 22}"
            :sm="{ span: 22}"
            :md="{ span: 22}"
            :lg="{ span: 19}"
            :xl="{ span: 18}"
            v-for="(item, index) in news"
            :key="`${item.title}-${index}`"
          >
            <div class="news-list">
              <a-row
                type="flex"
                justify="center"
              >
                <a-col
                  class="news-images"
                  :xs="{ span: 24}"
                  :sm="{ span: 24}"
                  :md="{ span: 12}"
                  :lg="{ span: 10}"
                  :xl="{ span: 8}"
                >
                  <div class="left">
                    <img :src="item.newsImg" alt="item.title" />
                  </div>
                </a-col>
                <a-col
                  :xs="{ span: 24}"
                  :sm="{ span: 24}"
                  :md="{ span: 12}"
                  :lg="{ span: 14}"
                  :xl="{ span: 16}"
                  class="cd"
                >
                  <div class="new-news" v-show="index < 2">New</div>
                  <div class="top">{{item.title}}</div>
                  <div class="middle">{{item.description}}</div>
                  <div class="bottom clearfix">
                    <div class="time">{{getNewsTime(item.occur_time, item.type)}}</div>
                    <a-button class="read" type="primary" ghost>
                      <a target="_blank" :href="item.url">阅读全文</a>
                    </a-button>
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
import axios from 'axios'

const SCC_CODE = 200

export default {
  name: 'news',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/news/news-backgroud.png'),
        title: '公司动态',
        description: '引领云运维管理的智能化时代'
      },
      news: []
    }
  },
  created () {
    this._getAllNews()
  },
  methods: {
    _getAllNews () {
      axios.get('/api/news/queryAll').then(res => {
        if (+res.data.code === SCC_CODE) {
          this.news = res.data.data.reverse()
        }
      })
    },
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
  @mixin no-wrap-nums($nums) {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: $nums;
    -webkit-box-orient: block-axis;
    max-height: 4.5rem;
  }
  @media screen and (max-width: 767px) {
    .news-images {
      .left {
        img {
          width: 100%;
        }
      }
    }
    .news-wrapper {
      .news-lists {
        .news-list {
          .top {
            padding: 1.5rem 2rem .5rem 2rem;
          }
          .bottom {
            padding: 2rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1100px) and (min-width: 768px) {
    .news-images {
      .left {
        img {
          width: 100%;
        }
      }
    }
    .news-wrapper {
      .news-lists {
        .news-list {
          .top {
            padding: 1.5rem 2rem .5rem 2rem;
          }
          .bottom {
            padding: 2rem 2rem 0 2rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1100px) {
    .news-images {
      .left {
        img {
          width: 100%;
        }
      }
    }
    .news-wrapper {
      .news-lists {
        .news-list {
          .top {
            padding: 1rem 2rem;
          }
          .bottom {
            padding: 3rem 2rem 0 2rem;
          }
        }
      }
    }
  }
  .news-wrapper {
    background: #f7f8fb;
    .news-lists {
      margin: 3rem auto;
      .news-list {
        margin: .6rem 0;
        border: solid 1px #dfdfdf;
        background: #fff;
        &:hover {
          box-shadow: 1rem 1rem 3rem 0rem rgba(0, 0, 0, 0.1);
        }
        img {
          height: 15rem;
        }
        .new-news {
          background: #25bb1b;
          color: #fff;
          width: 50px;
          height: 25px;
          position: absolute;
          right: 0;
          padding: 5px 10px;
        }
        .top {
          font-size: 1.2rem;
          line-height: 2rem;
        }
        .middle {
          font-size: .8rem;
          line-height: 1.5rem;
          padding: 0 2rem;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: block-axis;
          max-height: 4.5rem;
        }
        .bottom {
          .time {
            float: left;
            line-height: 2rem;
          }
          .read {
            float: right;
            &:hover {
              cursor: pointer;
              background: #3f96ef!important;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
