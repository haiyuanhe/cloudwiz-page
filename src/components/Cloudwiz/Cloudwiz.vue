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
            style="border: 1px solid green;"
            class="advantage-wrapper"
            :xs="24"
            :sm="20"
            :md="20"
            :lg="18"
            :xl="16"
            :xxl="16"
          >
            <div class="advantage">
              <a-collapse
                v-model="activeKey"
                accordion>
                <a-collapse-panel
                  v-for="(item, j) in advantage"
                  :key="j"
                  :header="item.title"
                >
                  <div class="list">
                    <div class="detail">
                      <ul v-for="(point, j) in item.points" :key="j">
                        <li>{{point}}</li>
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
        <p class="title">全面专业的服务体系</p>
        <a-row
          type="flex"
          justify="center"
        >
          <a-col
            :xs="32"
            :sm="32"
            :md="24"
            :lg="24"
            :xl="24"
            :xxl="20"
          >
            <a-row
              type="flex"
              justify="center"
            >
              <a-col
                style="border: 1px solid blue;"
                class="cloudwiz-service"
                v-for="(item, index) in services"
                :key="index"
                :xs="18"
                :sm="12"
                :md="10"
                :lg="7"
                :xl="6"
                :xxl="5"
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
            :xs="32"
            :sm="32"
            :md="24"
            :lg="24"
            :xl="24"
            :xxl="20"
          >
            <a-row
              type="flex"
              justify="center"
            >
              <a-col
                class="procuct-wrapper"
                v-for="(item, index) in product"
                :key="index"
                :xs="18"
                :sm="12"
                :md="7"
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
                    <a-button class="use-btn" type="primary">{{item.use}}</a-button>
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
      activeKey: ['1'],
      headerInfo: {
        Imgurl: require('common/images/products/cloudwiz-background.png'),
        title: 'Cloudwiz',
        description: '完善的工具化AIOps智能运维平台'
      },
      advantage: [
        {
          icon: require('common/images/products/advantage/1.png'),
          title: '全面的AIOps功能，助力企业运维进入智能化时代',
          points: [
            '高效、精准的报警，告别“alert fatigue”。',
            '智能异常检测，及时跟踪系统异常。',
            '智能分析诊断，发掘因果关系。',
            '专业故障溯源知识图谱，定制系统扥洗，提升运维效率。',
            '提供多平台实时报警，实时报警推送。'
          ]
        },
        {
          icon: require('common/images/products/advantage/2.png'),
          title: '消除运维数据孤岛，实现数据关联，真正实现整合和共享',
          points: [
            '高效、精准的报警，告别“alert fatigue”。',
            '智能异常检测，及时跟踪系统异常。',
            '智能分析诊断，发掘因果关系。',
            '专业故障溯源知识图谱，定制系统扥洗，提升运维效率。',
            '提供多平台实时报警，实时报警推送。'
          ]
        },
        {
          icon: require('common/images/products/advantage/3.png'),
          title: '洞悉业务和IT体系，随心掌握IT系统对业务的影响',
          points: [
            '高效、精准的报警，告别“alert fatigue”。',
            '智能异常检测，及时跟踪系统异常。',
            '智能分析诊断，发掘因果关系。',
            '专业故障溯源知识图谱，定制系统扥洗，提升运维效率。',
            '提供多平台实时报警，实时报警推送。'
          ]
        },
        {
          icon: require('common/images/products/advantage/4.png'),
          title: '本地和云知识库有效提高运维和运营效率',
          points: [
            '高效、精准的报警，告别“alert fatigue”。',
            '智能异常检测，及时跟踪系统异常。',
            '智能分析诊断，发掘因果关系。',
            '专业故障溯源知识图谱，定制系统扥洗，提升运维效率。',
            '提供多平台实时报警，实时报警推送。'
          ]
        },
        {
          icon: require('common/images/products/advantage/5.png'),
          title: '系统资源规划和运行预测，为业务的发展保驾护航',
          points: [
            '高效、精准的报警，告别“alert fatigue”。',
            '智能异常检测，及时跟踪系统异常。',
            '智能分析诊断，发掘因果关系。',
            '专业故障溯源知识图谱，定制系统扥洗，提升运维效率。',
            '提供多平台实时报警，实时报警推送。'
          ]
        },
        {
          icon: require('common/images/products/advantage/6.png'),
          title: '针对现代多种IT架构的智能监控运维',
          points: [
            '高效、精准的报警，告别“alert fatigue”。',
            '智能异常检测，及时跟踪系统异常。',
            '智能分析诊断，发掘因果关系。',
            '专业故障溯源知识图谱，定制系统扥洗，提升运维效率。',
            '提供多平台实时报警，实时报警推送。'
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
  components: {
    CloudHeader,
    CloudFooter,
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
  .cloudwiz-wrapper {
    background: #f6f7fa;
    .cloudwiz-container {
      .title {
        padding: 3rem;
        text-align: center;
        font-size: 1.5rem;
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
                padding-bottom: 5rem;
                ul {
                  list-style: disc!important;
                }
                .icon {
                  position: absolute;
                  right: -4rem;
                  bottom: -3rem;
                  img {
                    width: 15rem;
                    height: 15rem;
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
            padding-right: .5rem;
            .t {
              font-size: 1.1rem;
              padding-top: .5rem;
              height: 1rem;
            }
            .c {
              font-size: .7rem;
              line-height: .6rem;
            }
          }
        }
      }
      .cloudwiz-bottom {
        .procuct-wrapper {
          margin: 1rem;
          padding: 2rem .5rem;
          text-align: center;
          background: #fff;
          box-shadow: 0 0 1.5rem #e8ecf4;
          cursor: pointer;
          &:hover {
            box-shadow: 0 0 1.5rem rgb(153, 148, 148);
          }
          .procuct-list {
            .v {
              font-size: 1.6rem;
              color: #077fea;
            }
            .ram {
              height: 6rem;
              font-size: .9rem;
              line-height: 1.2rem;
              font-weight: normal;
              padding: 2rem;
            }
            .fs {
              .content {
                font-size: 1.1rem;
                font-weight: bold;
              }
            }
            .use {
              margin-top: 2.5rem;
              .use-btn {
                box-shadow: 0 0 1.5rem #e8ecf4;
                cursor: pointer;
                &:hover {
                  box-shadow: 0 0 1.5rem rgb(153, 148, 148);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
