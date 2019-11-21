<template>
  <div class="cloudwiz-wrapper">
    <CloudHeader/>
    <div class="cloudwiz-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="cloudwiz-top">
        <p class="title">产品优势</p>
        <a-row
          type="flex"
          justify="center"
        >
          <a-col
            class="advantage-wrapper"
            :xs="22"
            :sm="20"
            :md="20"
            :lg="18"
            :xl="17"
            :xxl="17"
          >
            <div class="advantage">
              <a-collapse accordion>
                <a-collapse-panel
                  :showArrow="false"
                  v-for="(item, j) in advantage"
                  :key="j"
                >
                  <template slot="header">
                    <p style="padding-right: .8rem; padding-top: 1rem;" @click="change(j)">
                      <a-icon :type="item.type ? 'minus-circle-o' : 'plus-circle-o'" style="color: #026dcd;"/>
                      <span style="padding-left: .4rem;">{{item.title}}</span>
                    </p>
                  </template>
                  <div class="list">
                    <div class="detail">
                      <ul>
                        <li v-for="(point, j) in item.points" :key="j">{{point}}</li>
                      </ul>
                      <div class="icon">
                        <img :src="item.icon" :alt="item.title">
                      </div>
                    </div>
                  </div>
                </a-collapse-panel>
              </a-collapse>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="cloudwiz-middle">
        <p class="title" style="color: #fff;">全面专业的服务体系</p>
        <a-row
          type="flex"
          justify="center"
        >
          <a-col
            :xs="22"
            :sm="22"
            :md="22"
            :lg="22"
            :xl="22"
            :xxl="20"
          >
            <a-row
              type="flex"
              justify="center"
            >
              <a-col
                class="cloudwiz-service"
                v-for="(item, index) in services"
                :key="index"
                :xs="20"
                :sm="12"
                :md="10"
                :lg="7"
                :xl="6"
                :xxl="6"
              >
                <div class="left">
                  <img :src="item.icon" alt="item.title" />
                </div>
                <div class="right">
                  <p class="t">{{item.title}}</p>
                  <p class="c" v-html="item.content"></p>
                </div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
      <div class="cloudwiz-bottom">
        <p class="title">产品价格</p>
        <a-row
          type="flex"
          justify="center"
        >
          <a-col
            :xs="22"
            :sm="22"
            :md="20"
            :lg="20"
            :xl="20"
            :xxl="20"
          >
            <a-row
              type="flex"
              justify="center"
            >
              <a-col
                class="product-wrapper"
                v-for="(item, index) in product"
                :key="index"
                :xs="20"
                :sm="20"
                :md="12"
                :lg="7"
                :xl="7"
                :xxl="6"
              >
                <div class="procuct-list">
                  <div class="v">{{item.version}}</div>
                  <div class="ram">{{item.ram}}</div>
                  <div class="fs">
                    <p class="content" v-html="item.functions"></p>
                  </div>
                  <div class="use">
                    <a target="_blank" :href="item.link" v-if="item.link !== true">
                      <a-button class="use-btn" type="primary">{{item.use}}</a-button>
                    </a>
                    <a-button
                      v-if="item.link === true"
                      class="use-btn"
                      type="primary"
                      @click="contactUs">
                      <span>{{item.use}}</span>
                    </a-button>
                    <a-modal
                      title="联系我们"
                      v-model="showEmail"
                      :footer="null">
                      <p class="info">请致电：17070866703</p>
                      <p class="info">邮件：service@cloudwiz.cn</p>
                    </a-modal>
                  </div>
                </div>
              </a-col>
            </a-row>
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
  name: 'cloudwiz',
  data () {
    return {
      current: 0,
      showEmail: false,
      headerInfo: {
        Imgurl: require('common/images/products/cloudwiz-background.jpg'),
        title: 'Cloudwiz',
        description: '完善的工具化AIOps智能运维平台'
      },
      advantage: [
        {
          icon: require('common/images/products/advantage/1.png'),
          title: '全面的AIOps功能，助力企业运维进入智能化时代',
          type: false,
          points: [
            '高效、精准的报警，告别“alert fatigue”。',
            '智能异常检测，及时跟踪系统异常。',
            '智能分析诊断，发掘因果关系。',
            '专业故障溯源知识图谱，定制系统分析，提升运维效率。',
            '提供多平台实时报警，实时报警推送。'
          ]
        },
        {
          icon: require('common/images/products/advantage/2.png'),
          title: '消除运维数据孤岛，实现数据关联，真正实现整合和共享',
          type: false,
          points: [
            '简单易操作，将数据传输至数据处理和存储器；',
            '多种数据采集方式，灵活多变，快速适应；',
            '支持物理机、虚拟环境、容器环境和多云混合环境；',
            '全面收集不同类型的运维指标、日志、事件等；',
            '方便快捷的第三方系统对接。'
          ]
        },
        {
          icon: require('common/images/products/advantage/3.png'),
          title: '洞悉业务和IT体系，随心掌握IT系统对业务的影响',
          type: false,
          points: [
            '业务系统可视化，持续优化助力业务决策；',
            '故障溯源和定位，准确发现系统故障的根因；',
            '发现、衡量IT系统问题对业务系统的影响；',
            '根因问题溯源、事件关联、事件告警。'
          ]
        },
        {
          icon: require('common/images/products/advantage/4.png'),
          title: '本地和云知识库有效提高运维和运营效率',
          type: false,
          points: [
            '降低运维成本，提高运维效率；',
            '快速发现问题，准确定位故障；',
            '随着服务推进和数据积累，实现系统自迭代升级；',
            '形成系统运维知识库，提升系统运维工作效率。'
          ]
        },
        {
          icon: require('common/images/products/advantage/5.png'),
          title: '系统资源规划和运行预测，为业务的发展保驾护航',
          type: false,
          points: [
            '资源规划和容量管理、预测，消除业务发展瓶颈；',
            '主动支持IT运维，实现真正的智能运维；',
            '真正实现敏捷运维和资源的预先管理。'
          ]
        },
        {
          icon: require('common/images/products/advantage/6.png'),
          title: '针对现代多种IT架构的智能监控运维',
          type: false,
          points: [
            '打通IAAS和PAAS架构，适应多云、混合云等现代IT架构；',
            '基于KUBERINETE的容器运维、监控和资源优化；',
            '支持VMWARE和常用虚拟环境；',
            '支持传统环境的运维、监控和资源优化。'
          ]
        }
      ],
      services: [
        {
          icon: require('common/images/products/service-system/migration-service.png'),
          title: '迁移服务',
          content: `
            <p class="p-service">云迁移咨询服务</p>
            <p class="p-service">云迁移架构设计</p>
            <p class="p-service">云迁移安全实施</p>
          `
        },
        {
          icon: require('common/images/products/service-system/cloud-service.png'),
          title: '跨云运维',
          content: `
            <p class="p-service">无缝跨越公、私有云</p>
            <p class="p-service">传统+serverless服务</p>
            <p class="p-service">运维+监控+管理全栈服务</p>
          `
        },
        {
          icon: require('common/images/products/service-system/cost-optimization.png'),
          title: '成本优化',
          content: `
            <p class="p-service">迁移成本优化</p>
            <p class="p-service">平台计费优化</p>
            <p class="p-service">管理成本优化</p>
          `
        }
      ],
      product: [
        {
          version: '试用版',
          ram: '日志100M/天，数据储存7天',
          use: '免费试用',
          link: '//app.cloudwiz.cn/signup',
          functions: `
            <p>5 个节点</p>
            <p>硬件、系统、网络指标</p>
            <p>中间件指标</p>
            <p>用户自定义指标</p>
            <p class="not-support">报警、邮件通知，短信通知</p>
            <p class="not-support">日志分析和整合</p>
            <p class="not-support">智能故障分析</p>
            <p class="not-support">智能运维服务专家</p>
            <p class="not-support">7＊24 技术支持</p>
            <p class="not-support">数据存储无限制</p>
          `
        },
        {
          version: '企业版',
          ram: '日志200M/天，存储14天，指标存储30天',
          use: '开始注册',
          link: '//app.cloudwiz.cn/signup',
          functions: `
            <p>1000 个节点</p>
            <p>硬件、系统、网络指标</p>
            <p>中间件指标</p>
            <p>用户自定义指标</p>
            <p>报警、邮件通知，短信通知</p>
            <p>日志分析和整合</p>
            <p>智能故障分析</p>
            <p>数据存储无限制</p>
            <p>7＊24 技术支持</p>
            <p class="not-support">智能运维服务专家</p>
          `
        },
        {
          version: '定制版',
          ram: '企业依据自身需求定制，请联系我们了解更多信息',
          use: '联系我们',
          link: true,
          functions: `
            <p>无限制主机</p>
            <p>硬件、系统、网络指标</p>
            <p>中间件指标</p>
            <p>用户自定义指标</p>
            <p>报警、邮件通知，短信通知</p>
            <p>日志分析和整合</p>
            <p>智能故障分析</p>
            <p>数据存储无限制</p>
            <p>7＊24 技术支持</p>
            <p>智能运维服务专家</p>
          `
        }
      ]
    }
  },
  methods: {
    change (i) {
      if (i !== this.current) {
        this.current = i
        this.advantage.map((item, index) => {
          item.type = index === i
          return item
        })
      } else {
        this.current = i
        this.advantage[this.current].type = !this.advantage[this.current].type
      }
    },
    contactUs () {
      this.showEmail = true
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
  @media screen and (max-width: 600px) {
    .list {
      .detail {
        padding: 0 0 5rem 2rem;
        .icon {
          position: absolute;
          right: -3rem;
          bottom: -3rem;
          img {
            width: 8rem;
            height: 8rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 600px) {
    .list {
      .detail {
        padding: 0 0 0 2rem;
        .icon {
          position: absolute;
          right: -3rem;
          bottom: -3rem;
          img {
            width: 12rem;
            height: 12rem;
          }
        }
      }
    }
  }
  .ant-collapse {
    border: 1px solid rgba(219, 219, 219, .7);
  }
  .ant-collapse /deep/ .ant-collapse-item {
    border: none;
  }
  .cloudwiz-wrapper {
    background: #f6f8fb;
    .cloudwiz-container {
      height: 100%;
      overflow: hidden;
      .title {
        padding: 3rem;
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 0;
      }
      .cloudwiz-top {
        .advantage-wrapper {
          margin-bottom: 3rem;
          .advantage {
            background: #fff;
            .ant-collapse /deep/ .ant-collapse-header {
              font-size: 1.1rem;
            }
            .list {
              position: relative;
              .detail {
                ul {
                  list-style: disc!important;
                  padding-left: .4rem;
                  font-size: 1rem;
                  li {
                    line-height: 2.3rem;
                  }
                }
              }
            }
          }
        }
      }
      .cloudwiz-middle {
        background: #292d38;
        color: rgb(233, 229, 229);
        .cloudwiz-service {
          display: flex;
          margin-bottom: 3rem;
          height: 6rem;
          .left {
            text-align: center;
            width: 45%;
            img {
              height: 6rem;
            }
          }
          .right {
            flex: 1;
            padding-left: .5rem;
            .t {
              font-size: 1.1rem;
              padding-top: .2rem;
              height: 1rem;
              color: #fff;
            }
            .c {
              font-size: .8rem;
              line-height: .6rem;
              color: rgba(255, 255,255, .75)
            }
          }
        }
      }
      .cloudwiz-bottom {
        .product-wrapper {
          margin: 0 1rem 3rem 1rem;
          padding: 2rem .5rem;
          text-align: center;
          background: #fff;
          &:hover {
            box-shadow: 0 0 1.5rem #ccced3;
          }
          .procuct-list {
            .v {
              font-size: 2rem;
              color: #077fea;
            }
            .ram {
              height: 6rem;
              font-size: 1.1rem;
              line-height: 1.2rem;
              font-weight: normal;
              padding: 2rem;
              line-height: 1.5rem;
              color: #000000;
              opacity: 0.6;
            }
            .fs {
              padding-top: 1.5rem;
              .content {
                font-size: 1.1rem;
                font-weight: bold;
              }
            }
            .use {
              margin-top: 2.5rem;
              .use-btn {
                box-shadow: 0 0 1.5rem #e8ecf4;
                padding: 0 2rem;
                border-radius: 0;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>
