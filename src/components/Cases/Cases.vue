<template>
  <div class="cases-wrapper">
    <CloudHeader/>
    <div class="cases-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="cases-content">
        <div class="cases-carousel">
          <a-row
            type="flex"
            justify="center"
          >
            <a-col
              :xs="24"
              :sm="24"
              :md="16"
              :lg="16"
            >
              <a-carousel
                class="carousel"
                effect="fade"
                autoplay
              >
                <div
                  v-for="(item, index) in evaluation"
                  :key="index"
                >
                  <a-row
                    type="flex"
                    justify="center"
                  >
                    <a-col
                      :xs="24"
                      :sm="24"
                      :md="14"
                      :lg="12"
                    >
                      <div class="left">
                        <div class="icon">
                          <img :src="item.icon" :alt="item.company">
                        </div>
                        <p class="c">{{item.company}}</p>
                        <p class="m">{{item.major}}</p>
                      </div>
                    </a-col>
                    <a-col
                      :xs="24"
                      :sm="24"
                      :md="24"
                      :lg="12"
                    >
                      <div class="right">
                        <p class="d">{{item.content}}</p>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </a-carousel>
            </a-col>
          </a-row>
        </div>
        <div class="cases-lists">
          <a-row
            type="flex"
            justify="center"
          >
            <a-col
              style="border: 1px solid green;"
              :xs="32"
              :sm="32"
              :md="24"
              :lg="20"
            >
              <a-row
                type="flex"
                justify="center"
              >
                <a-col
                  style="border: 1px solid yellow;"
                  v-for="(item, index) in users"
                  :key="index"
                  :xs="24"
                  :sm="22"
                  :md="15"
                  :lg="8"
                >
                  <div class="list">
                    <div class="icon" @click="showModal">
                      <img :src="item.icon" :alt="item.company">
                    </div>
                    <p class="c">{{item.company}}</p>
                    <p class="d" v-html="item.effect"></p>
                  </div>
                  <a-modal
                    title="案例详情"
                    width="80%"
                    :footer="null"
                    v-model="show"
                  >
                    <div class="m-header">
                      <a-row
                        type="flex"
                        justify="center"
                      >
                        <a-col>
                          <div>
                            <img :src="item.icon" :alt="item.company">
                          </div>
                        </a-col>
                        <a-col>
                          <p class="t">{{item.company}}</p>
                        </a-col>
                      </a-row>
                    </div>
                    <div class="demand">
                      <p>需求</p>
                    </div>
                    <div class="solution">
                      <p>解决方案</p>
                    </div>
                    <div class="result">
                      <p>结果</p>
                    </div>
                    <div class="testimony">
                      <p>客户证言</p>
                    </div>
                  </a-modal>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
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
  name: 'cases',
  data () {
    return {
      show: false,
      headerInfo: {
        Imgurl: require('common/images/cases/cases-background.png'),
        title: '客户案例',
        description: '国内外头部企业的共同选择'
      },
      evaluation: [
        {
          company: '中国电力科学院',
          icon: require('common/images/cases/CEPRI.png'),
          major: '人工智能应用研究所平台技术室',
          content: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。'
        },
        {
          company: '中国电力科学院',
          icon: require('common/images/cases/CCBank.png'),
          major: '人工智能应用研究所平台技术室2',
          content: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。'
        },
        {
          company: '中国电力科学院',
          icon: require('common/images/cases/CPIC.png'),
          major: '人工智能应用研究所平台技术室3',
          content: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。'
        }
      ],
      users: [
        {
          company: '国家电网',
          icon: require('common/images/cases/CCSG.png'),
          effect: `
            <p>应用Cloudwiz</p>
            <p>优化运维流程，提高工作效率</p>
          `
        },
        {
          company: '温德姆酒店',
          icon: require('common/images/cases/WYNDHAMHotel.png'),
          effect: `
            <p>应用Cloudwiz</p>
            <p>优化运维流程，提高工作效率</p>
          `
        },
        {
          company: '奔驰汽车',
          icon: require('common/images/cases/benz.png'),
          effect: `
            <p>应用Cloudwiz</p>
            <p>轻松管理移动端应用后台系统</p>
          `
        },
        {
          company: '浦发银行',
          icon: require('common/images/cases/SPDBank.png'),
          effect: `
            <p>案例详情，敬请期待</p>
          `
        },
        {
          company: '中国建设银行',
          icon: require('common/images/cases/CCBank.png'),
          effect: `
            <p>案例详情，敬请期待</p>
          `
        },
        {
          company: '光大证券',
          icon: require('common/images/cases/guangda.png'),
          effect: `
            <p>案例详情，敬请期待</p>
          `
        },
        {
          company: '惠州水务',
          icon: require('common/images/cases/huizhou.png'),
          effect: `
            <p>案例详情，敬请期待</p>
          `
        },
        {
          company: '延峰汽车',
          icon: require('common/images/cases/yanfeng.png'),
          effect: `
            <p>案例详情，敬请期待</p>
          `
        },
        {
          company: '云南电网',
          icon: require('common/images/cases/yunnanPGC.png'),
          effect: `
            <p>案例详情，敬请期待</p>
          `
        }
      ]
    }
  },
  methods: {
    showModal () {
      this.show = true
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
  .cases-wrapper {
    background: #f7f8fb;
    .cases-container {
      .cases-content {
        .cases-carousel {
          margin: 3rem;
          .ant-carousel /deep/ .slick-dots {
            padding: .8rem 2rem;
            text-align: right;
            button {
              background: rgb(173, 166, 166);
              margin: .3rem;
              width: .5rem;
              height: .5rem;
              border-radius: 50%;
            }
            .slick-active {
              button {
                background: rgb(78, 118, 247);
              }
            }
          }
          .carousel {
            border: 1px solid #e9ebec;
            background: #fff;
            cursor: pointer;
            &:hover {
              box-shadow: 0 0 1.5rem rgba(2, 8, 22, .1);
            }
            .left {
              text-align: center;
              margin: 2rem;
              .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  height: 4rem;
                }
              }
              .c {
                height: 0;
                padding: .8rem;
                font-weight: bold;
                font-size: 1.3rem;
              }
              .m {
                font-size: .8rem;
                color: #666666;
              }
            }
            .right {
              margin: 2.5rem;
              .d {
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 2.2rem;
              }
            }
          }
        }
        .cases-lists {
          border: 1px solid red;
          .list {
            margin: 1rem;
            height: 18rem;
            text-align: center;
            .icon {
              border: 1px solid #e9ebec;
              background: #fff;
              height: 12rem;
              line-height: 12rem;
              margin: auto;
              text-align: center;
              cursor: pointer;
              &:hover {
                box-shadow: 0 0 1.5rem rgba(2, 8, 22, .1);
              }
              img {
                height: 4rem;
              }
            }
            .c {
              height: 0;
              padding: 1rem;
              font-size: 1.3rem;
              font-weight: 400;
            }
            .d {
              font-size: .8rem;
              color: #767778;
            }
          }
        }
      }
    }
  }
</style>
