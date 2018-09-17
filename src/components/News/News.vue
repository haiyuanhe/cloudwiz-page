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
                  <img :src="item.newsImg" alt="item.title" />
                </a-col>
                <a-col
                  :xs="{ span: 24}"
                  :sm="{ span: 24}"
                  :md="{ span: 12}"
                  :lg="{ span: 14}"
                  :xl="{ span: 16}"
                  class="cd"
                >
                  <div class="top">{{item.title}}</div>
                  <div class="middle">{{item.description}}</div>
                  <div class="bottom clearfix">
                    <div class="time">{{getNewsTime(item.occur_time, item.type)}}</div>
                    <a-button type="primary">
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
          url: '//mp.weixin.qq.com/s/OgYZxrDEiPNtyCdhSnZWEg',
          newsImg: require('common/images/news/news1.png'),
          title: '云上金融新时代 | 云兴维智亮相中国国际金融展',
          description: '2018年8月23日，第二十六届中国国际金融展在北京展览馆盛大开幕。云兴维智受邀参加，并在现场为参展嘉宾展示了公司在云计算与智&&2018年8月23日，第二十六届中国国际金融展在北京展览馆盛大开幕。云兴维智受邀参加，并在现场为参展嘉宾展示了公司在云计算与智2018年8月23日，第二十六届中国国际金融展在北京展览馆盛大开幕。云兴维智受邀参加，并在现场为参展嘉宾展示了公司在云计算与智能运维领域与国内外优秀金融机构合作的成功经验。',
          occur_time: '2018/08/24'
        },
        {
          type: '新闻',
          url: '//mp.weixin.qq.com/s/TyOBFK86mVvWLipx3ShTdw',
          newsImg: require('common/images/news/news2.png'),
          title: '云兴维智：引领云+金融时代的新一轮革新',
          description: '8月26日，作为我国金融业唯一的全国性展览平台和亚太地区影响力最大的金融盛会，2018中国国际金融展圆满落幕。本次展会以“金融新时代·科技新发展·创新新气象”为主题。云兴维智作为国际领先的AIOps技术高科技软件公司，为国内外多家知名金融机构提供智能运维服务。在展会现场，云兴维智向观众展示了AIOps智能云运维解决方案在金融行业的广泛应用场景，引领了云+金融在智能化时代的新一轮革新。',
          occur_time: '2018/09/07'
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
    // box-shadow: 0 0 1.5rem $bs;
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

  @media screen and (max-width: 1100px) {
    .news-images {
      // padding-top: 1rem;
      // text-align: center;
    }
  }
  @media screen and (min-width: 1100px) {
    .news-images {
      // text-align: left;
      img {
        // padding: .5rem;
      }
    }
  }
  .news-wrapper {
    background: #f7f8fb;
    .news-lists {
      margin: 3rem auto;
      .news-list {
        margin: .6rem 0;
        border: 1px solid #dfdfdf;
        background: #fff;
        @include b-shadow(#ccc, rgb(201, 201, 201));
        img {
          height: 15rem;
        }
        .top {
          font-size: 1.5rem;
          padding: 2rem 2rem;
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
          button {
            border-radius: 0;
          }
          .ant-btn-primary {
            float: right;
          }
        }
      }
    }
  }
</style>
