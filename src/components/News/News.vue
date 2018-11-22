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
          url: '//mp.weixin.qq.com/s/20bYGUdFMRFUg-kQtYEDeQ',
          newsImg: require('common/images/news/news-6.png'),
          title: '云兴维智亮相AWS Transformation Day',
          description: '10月31日，AWS Transformation Day 全球巡展中国首站，在上海拉开帷幕。这是  AWS 针对企业级客户精心打造的数字化转型与创新技术峰会，旨在分享 AWS 创新文化与企业级技术，致力于帮助企业转型上云，加速市场响应，提升运营效率，强化安全与合规，以初创企业的速度进行创新。',
          occur_time: '2018/11/1'
        },
        {
          type: '新闻',
          url: '//mp.weixin.qq.com/s/tkGdrUMRVczxPlV0264qUA',
          newsImg: require('common/images/news/news-5.png'),
          title: 'Cloudwiz亮相2018云原生技术实践峰会',
          description: '9月20日，2018年云原生技术实践峰会（CloudNative Best Practices Summit）成功落幕。超过200名云原生相关行业的负责人、头部厂商和生态伙伴相聚一堂，共同见证了这一云原生行业前所未有的高端用户盛会。',
          occur_time: '2018/09/21'
        },
        {
          type: '新闻',
          url: '//mp.weixin.qq.com/s/TyOBFK86mVvWLipx3ShTdw',
          newsImg: require('common/images/news/news-4.png'),
          title: '云兴维智：引领云+金融时代的新一轮革新',
          description: '8月26日，作为我国金融业唯一的全国性展览平台和亚太地区影响力最大的金融盛会，2018中国国际金融展圆满落幕。本次展会以“金融新时代·科技新发展·创新新气象”为主题。云兴维智作为国际领先的AIOps技术高科技软件公司，为国内外多家知名金融机构提供智能运维服务。',
          occur_time: '2018/09/07'
        },
        {
          type: '新闻',
          url: '//mp.weixin.qq.com/s/OgYZxrDEiPNtyCdhSnZWEg',
          newsImg: require('common/images/news/news-3.png'),
          title: 'Cloudwiz亮相2018云原生技术实践峰会',
          description: '金融机构“上云”是近年来的主流发展方向，云计算成为助推金融行业进入科技化新时代的重要助力。根据预测，中国云计算市场规模2018年将增长到7823亿元，从2012年到2018年的年均复合增长率为56.8%。而在全球，金融云在全球云计算市场占比超过20%。',
          occur_time: '2018/08/24'
        },
        {
          type: '新闻',
          url: '//mp.weixin.qq.com/s/ZOx-4YdPoy-leNrlr0-9HQ',
          newsImg: require('common/images/news/news-2.png'),
          title: '如何运用Cloudwiz实现真正的故障溯源',
          description: '在PMS系统中，部分门店的房间状态在顾客退房后没有及时进行更新，导致新入住客户无法正常办理入住手续，相关房源状态更新经常在某个时间点出现严重延迟。通过传统的故障处理流程，业务部门难以判断导致系统异常的直接原因。',
          occur_time: '2018/06/26'
        },
        {
          type: '新闻',
          url: '//mp.weixin.qq.com/s/hcNKRYOtRh4dY3CGv6r-PA',
          newsImg: require('common/images/news/news-1.png'),
          title: 'AIOps技术新贵 云兴维智获数千万A轮融资',
          description: '近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。',
          occur_time: '2018/05/17'
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
  @mixin no-wrap-nums($nums) {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: $nums;
    -webkit-box-orient: vertical;
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
        .top {
          font-size: 1.2rem;
          line-height: 2rem;
        }
        .middle {
          font-size: .8rem;
          line-height: 1.5rem;
          padding: 0 2rem;
          @include no-wrap-nums(3)
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
