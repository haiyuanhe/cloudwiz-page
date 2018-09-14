<template>
  <div class="recruitment-wrapper">
    <CloudHeader/>
    <div class="recruitment-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="acquisition-wrapper">
        <p class="a-title">在这里您能</p>
        <div class="acquisition">
          <a-row
            type="flex"
            justify="center"
            :gutter="24"
          >
            <a-col
              v-for="(item) in acquisitions"
              :key="item.title"
              :xs="14"
              :sm="12"
              :md="10"
              :lg="4"
            >
              <div class="i">
                <img :src="item.icon" alt="item.title">
              </div>
              <p class="t">{{item.title}}</p>
              <p class="d">{{item.description}}</p>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="outside-work-wrapper">
        <p class="o-title">工作之外</p>
        <div class="w-carousel">
          <a-row
            type="flex"
            justify="center"
          >
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
            >
              <el-carousel :interval="3000" type="card" arrow="always">
                <el-carousel-item v-for="(item, index) in doings" :key="index">
                  <div class="doing">
                    <img :src="item.image" :alt="item.title">
                    <p style="margin-top: 1rem;">{{item.title}}</p>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="join-us-wrapper">
        <p class="j-title">加入我们</p>
        <div class="office-wrapper">
          <a-row
            type="flex"
            justify="center"
          >
            <a-col
              class="type-col"
              :xs="24"
              :sm="24"
              :md="8"
              :lg="8"
            >
              <a-row
                type="flex"
                justify="center"
              >
                <a-col
                  v-for="(office, i) in offices"
                  :key="office.type"
                  :class='{ "type-active": currentIndex === i }'
                  :xs="4"
                  :sm="4"
                  :md="12"
                  :lg="14">
                  <div
                    class="office-content"
                    @click="getCurrentIndex(i)"
                  >
                    <div class="office-type">
                      <div class="type">
                        {{office.type}}
                      </div>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </a-col>
            <a-col
              :xs="22"
              :sm="22"
              :md="22"
              :lg="14"
            >
              <div class="detail">
                <div class="office-description">
                  <a-collapse defaultActiveKey="0" accordion v-if="offices[currentIndex].position.length">
                    <a-collapse-panel
                      class="name"
                      v-for="(item, j) in offices[currentIndex].position"
                      :key="j"
                      :header="item.name"
                    >
                      <div class="time" v-html="item.time"></div>
                      <div class="description" v-html="item.description"></div>
                    </a-collapse-panel>
                  </a-collapse>
                  <div v-else>暂无该职位招聘信息</div>
                </div>
              </div>
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
  name: 'recruitment',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/recruitment/recruitment-background.png'),
        title: '在云兴工作',
        description: '和优秀的人一起，获得不一样的成长'
      },
      acquisitions: [
        {
          icon: require('common/images/recruitment/grown.png'),
          title: '获得不一样的成长',
          description: '公司提供足够大的平台让您自由发挥特长，给予足够大的责任帮助您快速成长。'
        },
        {
          icon: require('common/images/recruitment/challenge.png'),
          title: '挑战尖端技术难题',
          description: '面对大数据时代各种互联网运维挑战，解决尚无人能够解决的技术难题。'
        },
        {
          icon: require('common/images/recruitment/with-people.png'),
          title: '和优秀的人在一起',
          description: '获得和来自国际知名企业的（微软、Twitter、Amazon、阿里等等）顶级工程师一起工作的机会。'
        },
        {
          icon: require('common/images/recruitment/environment.png'),
          title: '获得不一样的工作环境',
          description: '享受弹性工作制，享受平等、互享、的宽松氛围，和一群同样痴迷于技术和产品的朋友共同工作，共同提高。'
        }
      ],
      doings: [
        {
          image: require('common/images/recruitment/group1.png'),
          title: '“新的征程”团建活动'
        },
        {
          image: require('common/images/recruitment/group2.png'),
          title: '“新的征程”团建活动'
        },
        {
          image: require('common/images/recruitment/exhibition1.png'),
          title: '中国国际金融展'
        },
        {
          image: require('common/images/recruitment/exhibition2.png'),
          title: '中国国际金融展'
        }
      ],
      offices: [
        {
          type: '技术',
          position: [
            {
              name: '前端开发工程师',
              time: '1-3年 / 本科 / 全职',
              description: `
                <p>职责：</p>
                <p>负责开发网站和客户端的前端页面程序。</p>
                <p>希望你：</p>
                <p>1. 能够独立设计和实现有一定复杂度的模块和功能；</p>
                <p>2. 善于将客户需求转化成产品设计；</p>
                <p>3. 了解前端模块化，能够编写出易于维护的前端代码；</p>
                <p>4. 能够持续优化前端体验和页面响应速度，实现异步加载，保证兼容性和执行效率；</p>
                <p>5. 配合后端工程师研讨技术实现方案，进行应用及系统整合；</p>
                <p>6. 熟练掌握常用前端开发技术(HTML、Javascript、Ajax、JSON ，CSS)，熟悉常用浏览器，熟悉或愿意学习AngularJS；</p>
                <p>7. 性格开朗，积极主动，乐于帮助他人，具备团队精神，具备优秀的自我学习和独立思考能力。</p>
              `
            },
            {
              name: 'Devops开发工程师',
              time: '3-5年 / 本科 / 全职',
              description: `
                <p>职责：</p>
                <p>负责公司产品整体运维体系的开发工作，满足工具化、自动化、平台化的目标。</p>
                <p>希望你：</p>
                <p>1. 深入理解 Linux 操作系统、体系结构，熟悉 python, bash；</p>
                <p>2. 熟悉常用的自动化运维工具, 如 Chef，Puppet 等；</p>
                <p>3. 熟悉常用的持续集成工具，如 Jenkins；</p>
                <p>4. 具有 Hadoop/HBase 或 ELK 的运维经验者优先；</p>
                <p>5. 接受短时间（1 天到几天）本地或外地出差；</p>
                <p>6. 性格开朗，积极主动，乐于帮助他人，具备团队精神，具备优秀的自我学习和独立思考能力。</p>
              `
            },
            {
              name: '数据科学家',
              time: '3-5年 / 硕士以上 / 全职',
              description: `
                <p>希望你：</p>
                <p>1. 利用数据挖掘、机器学习相关算法，解决产品业务需求；</p>
                <p>2. 调研新技术在数据分析领域的应用价值，以技术驱动产品。</p>
                <p>3. 具有丰富的机器学习和数据挖掘工作背景，对特征处理、分类、聚类、关联、文本挖掘等算法有深刻认识和实战经验；</p>
                <p>4. 熟悉 Linux 开发环境，熟悉 R，python 和 SQL 语言；</p>
                <p>5. 性格开朗，积极主动，乐于帮助他人，具备团队精神，具备优秀的自我学习和独立思考能力。</p>
              `
            },
            {
              name: '大数据开发工程师',
              time: '3-5年 / 本科 / 全职',
              description: `
                <p>希望你：</p>
                <p>1. 研发后端数据平台的多个功能模块和服务；</p>
                <p>2. 对模块化开发深入理解，能够编写可复用，易维护，可靠和高性能的代码；</p>
                <p>3. 具有分布式后台系统的研发经验者优先；</p>
                <p>4. 熟悉和了解 Hadoop/HBase 或 ELK 者优先;</p>
                <p>5. 精通 Java, python, golang, Linux 系统者优先。</p>
                <p>6. 性格开朗，积极主动，乐于帮助他人，具备团队精神，具备优秀的自我学习和独立思考能力。</p>
              `
            }
          ]
        },
        {
          type: '销售',
          position: []
        },
        {
          type: '财务',
          position: []
        },
        {
          type: '市场',
          position: []
        },
        {
          type: '人事',
          position: []
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    getCurrentIndex (i) {
      this.currentIndex = i
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
  @media (max-width: 1100px) {
    .type-active {
      padding-bottom: .5rem;
      border-bottom: 2px solid rgb(223, 53, 53);
    }
    .el-carousel /deep/ .el-carousel__container {
      height: 320px;
    }
    .w-carousel {
      width: 100%;
      margin: 0 auto;
      .is-active {
        .doing {
          p {
            display: block;
            padding: .2rem;
            font-size: 1rem;
            text-align: center;
          }
        }
      }
      .doing {
        img {
          width: 100%;
          height: 17rem;
        }
        p {
          display: none;
        }
      }
    }
  }
  @media (min-width: 1100px) {
    .office-content {
      height: 2rem;
      line-height: 2rem;
    }
    .type-active {
      border: 1px solid #ccc;
      background: #fff;
      box-shadow: 0 0 1.5rem #e8ecf4;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 1.5rem #ccc;
      }
    }
    .el-carousel /deep/ .el-carousel__container {
      height: 330px;
    }
    .w-carousel {
      width: 90%;
      margin: 0 auto;
      .doing {
        img {
          width: 100%;
          height: 17rem;
        }
        p {
          padding: .54rem;
          font-size: 1.3rem;
          text-align: center;
        }
      }
    }
  }
  .el-carousel__item /deep/ .el-carousel__mask {
    background-color: #e8ecf4;
  }
  .w-carousel /deep/ .el-carousel__arrow {
    position: absolute;
    top: 9rem;
    width: 3rem;
    height: 3rem;
    background-color: rgba(12, 116, 234, .5);
    i {
      font-size: 1.5rem;
    }
  }
  .w-carousel /deep/ .el-carousel__indicators--outside {
    .is-active button {
      background: rgba(12, 116, 234, 1);
    }
    button {
      border-radius: 50%;
      height: .8rem;
      width: .8rem;
    }
  }
  .recruitment-wrapper {
    .recruitment-container {
      .acquisition-wrapper {
        background: #ffffff;
          .a-title {
            height: 0;
            font-size: 1.3rem;
            text-align: center;
            padding: 3rem 0;
          }
        .acquisition {
          padding-bottom: 3rem;
          text-align: center;
          .i {
            img {
              height: 6rem;
              margin: 2rem;
            }
          }
          .t {
            font-size: 1rem;
            font-weight: bold;
          }
          .d {
            font-size: .8rem;
            line-height: 1.2rem;
          }
        }
      }
      .outside-work-wrapper {
        background: #e8ecf4;
        margin-bottom: 2rem;
        .o-title {
          height: 0;
          font-size: 1.3rem;
          text-align: center;
          padding: 3rem 0;
        }
        // .w-carousel {
        //   width: 90%;
        //   margin: 0 auto;
        //   .doing {
        //     img {
        //       width: 100%;
        //       height: 17rem;
        //     }
        //     p {
        //       padding: .54rem;
        //       font-size: 1.3rem;
        //       text-align: center;
        //     }
        //   }
        // }
      }
      .join-us-wrapper {
        .j-title {
          height: 0;
          font-size: 1.3rem;
          text-align: center;
          padding: 3rem 0;
        }
        .office-wrapper {
          margin-bottom: 2rem;
          .type-col {
            margin-bottom: 1rem;
            .office-content {
              .office-type {
                font-size: 1.1rem;
                text-align: center;
              }
            }
          }
          .detail {
            .office-description {
              .ant-collapse-header {
                font-size: 1.5rem;
              }
              .time {
                padding: 2rem;
                font-weight: bold;
              }
              .description {
                padding-left: 2rem;
              }
            }
          }
        }
      }
    }
  }
</style>
