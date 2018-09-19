<template>
  <div class="cases-wrapper">
    <CloudHeader/>
    <div class="cases-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="cases-content">
        <a-row
          type="flex"
          justify="center"
        >
          <a-col
            :xs="20"
            :sm="20"
            :md="20"
            :lg="20"
            :xl="18"
            :xxl="17"
          >
            <div class="cases-carousel">
              <a-carousel
                class="carousel"
                effect="scrollX"
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
                      :lg="6"
                    >
                      <div class="left">
                        <div class="icon">
                          <img :src="item.icon" :alt="item.company">
                        </div>
                        <p class="c">{{item.company}}</p>
                        <p class="m">{{item.evaluator}}</p>
                      </div>
                    </a-col>
                    <a-col
                      :xs="24"
                      :sm="24"
                      :md="24"
                      :lg="18"
                    >
                      <div class="right">
                        <p class="d">{{item.content}}</p>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </a-carousel>
            </div>
          </a-col>
        </a-row>
        <div class="cases-lists">
          <a-row
            type="flex"
            justify="center"
          >
            <a-col
              :xs="20"
              :sm="20"
              :md="20"
              :lg="20"
              :xl="18"
              :xxl="17"
            >
              <a-row
                type="flex"
                justify="center"
                :gutter="16"
              >
                <a-col
                  v-for="(item, index) in users"
                  :key="index"
                  :xs="24"
                  :sm="12"
                  :md="12"
                  :lg="8"
                >
                  <div class="list">
                    <div class="icon" @click="showModal(item.company)">
                      <img :src="item.icon" :alt="item.company">
                    </div>
                    <p class="c">{{item.company}}</p>
                    <p class="d" v-html="item.effect"></p>
                  </div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
        <a-modal
          title="案例详情"
          width="80%"
          :footer="null"
          v-model="show"
          class="case-detail"
        >
          <div class="case-info" v-if="!noCase">
            <div class="m-header">
              <a-row
                type="flex"
                justify="center"
              >
                <a-col
                  :lg="10"
                >
                  <div class="icon">
                    <img :src="showCase.icon" :alt="showCase.company">
                  </div>
                </a-col>
                <a-col
                  style="padding-left: 1rem;"
                  :lg="14"
                >
                  <p class="c">{{showCase.company}}</p>
                  <p class="s">{{showCase.short}}</p>
                </a-col>
              </a-row>
            </div>
            <div class="detail">
              <div class="demand">
                <p class="model-title">需求</p>
                <p class="d" v-html="showCase.demand"></p>
              </div>
              <div class="solution">
                <p class="model-title">解决方案</p>
                <p class="s" v-html="showCase.solution"></p>
              </div>
              <div class="result">
                <p class="model-title">结果</p>
                <p class="r" v-html="showCase.result"></p>
              </div>
              <div class="testimony" v-if="showCase.testimony">
                <p class="model-title">客户证言</p>
                <p class="t" v-html="showCase.testimony"></p>
              </div>
            </div>
          </div>
          <div v-else>{{showCase}}</div>
        </a-modal>
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
          evaluator: '人工智能应用研究所平台技术室',
          content: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。'
        },
        {
          company: '问卷网',
          icon: require('common/images/cases/wenjuanwang.png'),
          evaluator: '问卷网CTO梁群',
          content: '部署Cloudwiz产品之后，统一了我们的运维管理工具，优化了管理流程，运维质量和效率都得到了极大的提升，每周提供的专家巡检报告，让我们对系统的关键服务、刷票情况有了直观了解，大量节省了人力和时间成本，是非常实用的运维解决方案。'
        },
        {
          company: '车友援',
          icon: require('common/images/cases/cheyouyuan.png'),
          evaluator: '车友援研发部门CTO',
          content: 'Cloudwiz作为一款优秀的AIOps产品，具有超前的理念。不仅能够帮助我们全面监控各服务器和应用的健康指标，还结合人工智能大幅减少我们分析问题、定位问题的时间。在对PostgreSQL数据库的监控上，Cloudwiz实时提供死锁和慢查询的详细信息，帮助我们解决了很多性能问题。'
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
      ],
      casesDetail: {
        '国家电网': {
          icon: require('common/images/cases/CCSG.png'),
          short: '应用Cloudwiz优化运维流程，提高工作效率',
          demand: '解决方案结果需要建立统一的运维演暇和管理方法，保障系统全天24小时的稳定运行．为科研和业务需要提供数据服务。运用AIOps系统，减轻运维团队工作压力，及时查看系统状态，从而实现快速响应和定位根因，完善应对故障的解决方案。',
          solution: 'Cloudwiz 采用私有化部署的交付方式，实现多平台、跨系统统一监控。首先通过探针采集分布在各平台系统的运维效据，经过清洗转换后，统一存储管理，利用机器学习算法，对数据进行深度的挖掘分析，从而实现智能异常监测、根因分析等核心功能，提升排障效率。',
          result: `
            <ul style="list-style: disc; padding-left: 1rem;">
              <li>实现多个系统的统一监控和管理，优化了运维流程，工作效剩导到提升。</li>
              <li>通过根因分析，发现因时间跳变、定时脚本高消耗、 HBASE 配五问题等多因素引起的宕机事故，提升了系统的稳定性。</li>
            </ul>
          `,
          testimony: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。在PMS系统中，部分门店的房间状态在顾客退房后没有及时进行更新，导致新入住客户无法正常办理入住手续，相关房源状态更新经常在某个'
        },
        '温德姆酒店': {
          icon: require('common/images/cases/WYNDHAMHotel.png'),
          short: '应用Cloudwiz实现故障溯源',
          demand: '在PMS系统中，部分门店的房间状态在顾客退房后没有及时进行更新，导致断入住客户无法正常办理入住手续，相关房源状态更新经常在某个时间点出现严重延迟。通过传统的故障处理流程，业务部门难以判断导致系统异常的直接原因',
          solution: 'Cloudwiz 智能运维平台采用 SAAS 接入模式，对服务器资源，中间件服务，应用业务系统实现指标进行实时监控。在此基础上，运用机器学习技术，对一定范围内的倍息进行关联规则分析，结合配登信息的拓扑分析，挖掘其背后的因果关系。',
          result: `
            <ul style="list-style: disc; padding-left: 1rem;">
              <li>在Cloudwiz对系统指标的实时监测里，集中反映指标异常的周期性，运用 AI 智能算法，结合多指标关联性分析，得出业务在某时间的内存舰升，因而导致系统异常，引发系统晌应变恨。</li>
              <li>内存资派得到有效调整后，系统响应问题得到有效缓解。目正做到故障追溯到源点，资源调整有据可依。</li>
            </ul>
          `
        },
        '奔驰汽车': {
          icon: require('common/images/cases/benz-case-detail.png'),
          short: '使用Cloudwiz轻松管理移动端应用后台系统',
          demand: '为了提升服务水平，满足智能化需求，奔驰汽车为车主设计了一套移动端APP，用以对汽车的空调系统、导航系统等进行远程控制。作为公司的创新性项目，奔驰汽车需要保证这一IOT应用程序后台服务系统的稳定进行，并随时掌握系统环境的各项参数指标和运行情况',
          solution: `
            <ul style="list-style: disc; padding-left: 1rem;">
              <li>提供全方位的今数监控目员务，无需特意设王规则就可以对各领域参数进行全面覆盖：实现异常的智能检测。</li>
              <li>在针对实际业务分析的基础上，提供长期的 KPI 资源监控、分析及优化．并监控第三方服务 API 调用的健康状况。</li>
              <li>利用系统日志日志，提取业务的应用番数．并展示、监控、预繁公有云资源使用状态。</li>
            </ul>
          `,
          result: '确保了移动 App 端业务系统的不间断服务，帮助客户对自身的成本预估形成清晰的了解。通过关联性算法及 RAC 模型，能够快速确认问题的根源并及时予以解决。'
        }
      },
      noCase: false,
      showCase: {}
    }
  },
  methods: {
    showModal (company) {
      this.showCase = {}
      if (this.casesDetail[company] !== void 0) {
        this.showCase = this.casesDetail[company]
        this.showCase.company = company
        this.noCase = false
      } else {
        this.showCase = '案例正在搜集整理...'
        this.noCase = true
      }
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
  @media screen and (max-width: 768px) {
    .cases-lists {
      .list {
        .icon {
          img {
            height: 4rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 960px) and (min-width: 768px) {
    .case-info {
      .c {
        text-align: center;
      }
    }
    .cases-lists {
      .list {
        .icon {
          img {
            height: 3rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 960px) {
    .cases-lists {
      .list {
        .icon {
          img {
            height: 3rem;
          }
        }
      }
    }
  }
  .case-info {
    .m-header {
      font-size: 2rem;
      background: #f7f8fb;
      margin-bottom: 2rem;
      padding: 2rem 0;
      .icon {
        img {
          height: 5rem;
          display: block;
          float: right;
        }
      }
      .c {
        font-size: 2rem;
        height: 1rem;
      }
      .s {
        font-size: 1rem;
        color: #787878;
      }
    }
    .detail {
      margin: 0 2rem;
      .model-title {
        font-size: 1.3rem;
        font-weight: bold;
      }
      .demand, .solution, .result {
        margin-bottom: 2rem;
      }
      .testimony {
        .t {
          background: #f7f8fb;
          padding: 2rem 3rem;
          font-size: 1.1rem;
          font-weight: bold;
        }
      }
    }
  }
  .cases-wrapper {
    background: #f7f8fb;
    .cases-container {
      height: 100%;
      overflow: hidden;
      .cases-content {
        .cases-carousel {
          margin: 3rem 0;
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
            background: #fff;
            cursor: pointer;
            .left {
              text-align: center;
              margin: 2rem;
              .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  height: 3.6rem;
                }
              }
              .c {
                height: 0;
                padding: .8rem .2rem;
                font-size: 1.3rem;
                color: #000;
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
          .list {
            height: 18rem;
            text-align: center;
            .icon {
              border: 1px solid #e9ebec;
              background: #fff;
              height: 12rem;
              line-height: 15rem;
              margin: auto;
              text-align: center;
              cursor: pointer;
              &:hover {
                box-shadow: 1.1rem 1.1rem 1.4rem rgba(2, 8, 22, .1);
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
        .case-detail {
        }
      }
    }
  }
</style>
