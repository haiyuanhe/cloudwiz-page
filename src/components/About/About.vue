<template>
  <div class="about-wrapper">
    <CloudHeader />
    <div class="about-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="about-top">
        <div class="middle-content">
          <div class="about-work">
            <a-row
              type="flex"
              justify="center">
              <a-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="18"
                style="margin: 3rem">
                <a-row
                  type="flex"
                  justify="center">
                  <a-col
                    :xs="22"
                    :sm="22"
                    :md="13"
                    :lg="10">
                    <a-row
                      type="flex"
                      justify="center">
                      <a-col
                        :xs="12"
                        :sm="12"
                        :md="12"
                        :lg="12">
                        <a-row
                          type="flex"
                          justify="center">
                          <a-col>
                            <div class="w12">
                              <img
                                class="work2"
                                src="../../common/images/about/2.jpg"
                                alt="work2">
                            </div>
                          </a-col>
                        </a-row>
                        <a-row
                          type="flex"
                          justify="center">
                          <a-col>
                            <div class="w3">
                              <img class="work3" src="../../common/images/about/3.jpg" alt="work3">
                            </div>
                          </a-col>
                        </a-row>
                      </a-col>
                      <a-col
                        class="right"
                        :xs="11"
                        :sm="11"
                        :md="11"
                        :lg="11"
                        >
                        <div class="w1">
                          <img class="work1" src="../../common/images/about/1.jpg" alt="work1">
                        </div>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col
                    :xs="22"
                    :sm="22"
                    :md="22"
                    :lg="14">
                      <a-row
                        type="flex"
                        justify="center">
                        <a-col
                          :xs="22"
                          :sm="22"
                          :md="24"
                          :lg="24">
                          <div class="company-description">
                            <div class="company">
                              <p class="name">云兴维智（北京）科技有限公司</p>
                              <p class="description">成立于2016年，是国际领先的AIOps技术高科技软件公司。</p>
                            </div>
                            <div class="our-description">
                              <p>我们采用机器学习和人工智能技术，为各类企业数据中心、在线系统和云平台提供高智能、高性能和高可靠性的大规模运维监控和数据分析服务平台。</p>
                            </div>
                          </div>
                        </a-col>
                      </a-row>
                      <div class="services">
                        <a-row
                          type="flex"
                          justify="center"
                        >
                          <a-col
                            class="gutter-row"
                            :xs="24"
                            :sm="24"
                            :md="16"
                            :lg="12"
                          >
                            <div class="left">
                              <p class="number">5W+</p>
                              <p>的服务器，覆盖多个数据中心。</p>
                            </div>
                          </a-col>
                          <a-col
                            :xs="24"
                            :sm="24"
                            :md="16"
                            :lg="12"
                          >
                            <div class="right">
                              <p class="number">10</p>
                              <p>年以上的设计、建造和运营大数据系统的经验。</p>
                            </div>
                          </a-col>
                        </a-row>
                      </div>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
      <div class="about-bottom">
        <div class="content">
          <div class="top">
            <p class="title">团队介绍</p>
            <p class="description">
              团队由数位长期在美国硅谷一线互联网高科技公司工作的海归专家，以及在中国跨国高科技企业从事市场营销的高管合作创立。<br />团队的核心成员来自微软总部、Twitter总部、亚马逊总部、阿里巴巴等一线互联网公司。
            </p>
          </div>
          <div class="lists">
            <a-row type="flex" justify="center">
              <a-col
                v-for="(item, index) in team_mates"
                :key="index"
                :xs="20"
                :sm="20"
                :md="12"
                :lg="10"
                :xl="8"
                :xxl="7"
              >
                <div class="list">
                  <div class="avatar">
                    <img :src="item.avatar" :alt="item.name">
                  </div>
                  <div class="mate">
                    <p class="mate-info">{{getMemberInfo(item.name, item.office)}}</p>
                    <p class="education">{{item.education}}</p>
                    <p class="specialization">{{item.specialization}}</p>
                  </div>
                  <a-row type="flex" justify="center">
                    <a-col
                      v-for="(cinfo, index) in item.worked"
                      :key="index"
                      :xs="8"
                      :sm="8"
                      :md="8"
                      :lg="8"
                    >
                      <div class="company">
                        <img
                          :src="cinfo.company"
                          :alt="cinfo.name">
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
       <div class="honors">
        <div class="content">
          <div class="top">
            <p class="title">公司荣誉</p>
          </div>
          <div class="lists">
            <a-row type="flex" justify="center">
              <a-col
                v-for="(item, index) in honors"
                :key="index"
                :xs="20"
                :sm="20"
                :md="12"
                :lg="10"
                :xl="8"
                :xxl="7"
              >
                <div class="list">
                  <div class="avatar">
                    <img :src="item.imgUrl" :alt="item.title">
                  </div>
                  <div class="mate">
                    <p class="title">{{item.title}}</p>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
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
  name: 'about',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/about/about-background.jpg'),
        title: '关于公司',
        description: '数据发声，让运维智能化'
      },
      team_mates: [
        {
          name: '王亚雷',
          office: 'CEO',
          avatar: require('common/images/about/creator/wangyalei.png'),
          education: '清华本科, 美国德州大学Austin分校硕士',
          specialization: '分布式系统, 大数据存储专家',
          worked: [
            {
              name: 'twitter',
              company: require('common/images/about/logo/twitter.png')
            },
            {
              name: 'microsoft',
              company: require('common/images/about/logo/microsoft.png')
            },
            {
              name: 'ebay',
              company: require('common/images/about/logo/ebay.png')
            }
          ]
        },
        {
          name: '林以',
          office: 'CTO',
          avatar: require('common/images/about/creator/linyi.png'),
          education: '清华本科, 加拿大麦基尔大学博士',
          specialization: '云计算, 大数据专家',
          worked: [
            {
              name: 'twitter',
              company: require('common/images/about/logo/twitter.png')
            },
            {
              name: 'microsoft',
              company: require('common/images/about/logo/microsoft.png')
            }
          ]
        },
        {
          name: '游永涛',
          office: '研发总监',
          avatar: require('common/images/about/creator/youyongtao.png'),
          education: '吉林大学本科, 美国纽约大学博士',
          specialization: '网络通讯和安全专家',
          worked: [
            {
              name: 'amason',
              company: require('common/images/about/logo/amason.png')
            },
            {
              name: 'microsoft',
              company: require('common/images/about/logo/microsoft.png')
            }
          ]
        },
        {
          name: '张鹏',
          office: '研发总监',
          avatar: require('common/images/about/creator/zhangpeng.png'),
          education: '山东大学本科，加拿大麦基尔大学硕士',
          specialization: '企业级IT管理及信息安全专家',
          worked: [
            {
              name: 'huawei',
              company: require('common/images/about/logo/huawei.png')
            },
            {
              name: 'microsoft',
              company: require('common/images/about/logo/microsoft.png')
            }
          ]
        },
        {
          name: '何海源',
          office: '研发总监',
          avatar: require('common/images/about/creator/hehaiyuan.png'),
          education: '重庆邮电大学本科',
          specialization: '全栈工程师',
          worked: [
            {
              name: 'didi',
              company: require('common/images/about/logo/didi.png')
            },
            {
              name: 'taobao',
              company: require('common/images/about/logo/taobao.png')
            }
          ]
        },
        {
          name: '孙寅',
          office: '数据科学家',
          avatar: require('common/images/about/creator/sunying.png'),
          education: '南京大学本科，日本一桥大学硕士',
          specialization: '数据科学家, 人工智能专家',
          worked: [
            {
              name: 'cloudwiz',
              company: require('common/images/about/logo/cloudwiz.png')
            }
          ]
        }
      ],
      honors: [
        {
          imgUrl: require('common/images/about/honor-1-1.jpg'),
          title: '中关村金种子企业'
        },
        {
          imgUrl: require('common/images/about/honor-1-2.jpg'),
          title: '中关村高新技术企业'
        },
        {
          imgUrl: require('common/images/about/honor-1-3.jpg'),
          title: 'AIOps标准工作组成员单位证书'
        },
        {
          imgUrl: require('common/images/about/honor-2-1.jpg'),
          title: '梦想中国2016智汇嘉善全球创新创业大赛一等奖'
        },
        {
          imgUrl: require('common/images/about/honor-2-2.jpg'),
          title: '北京市海淀区胚芽企业'
        },
        {
          imgUrl: require('common/images/about/honor-2-3.jpg'),
          title: '多个AIOps软件著作权登记证书'
        }
      ]
    }
  },
  methods: {
    getMemberInfo (name, office) {
      return `${name}  ${office}`
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
  .about-wrapper {
    background: #e8ecf4;
    .about-container {
      .about-top {
        background: #fff;
        .middle-content {
          .w12 {
            img {
              width: 100%;
              height: 12rem;
            }
          }
          .w3 {
            img {
              width: 100%;
              height: 12rem;
            }
          }
          .right {
            .w1 {
              img {
                padding-left: .3rem;
                width: 100%;
                height: 24.1rem;
              }
            }
          }
          .company-description {
            .company {
              .name {
                font-size: 1.5rem;
                padding: 1rem 0;
                margin-bottom: .6rem;
              }
              .description {
                font-size: .9rem;
                line-height: 1.4rem;
              }
            }
            .our-description {
              line-height: 2rem;
            }
          }
          .services {
            .number {
              color: #1a7bd2;
              font-size: 3rem;
              height: 0;
              padding-bottom: 1rem;
            }
          }
        }
      }
      .about-bottom, .honors {
        width: 100%;
        .content {
          margin: 3rem auto;
          .top {
            width: 85%;
            margin: 1rem auto;
            padding-bottom: 1rem;
            .title {
              text-align: center;
              padding: 2rem;
              font-size: 2rem;
              height: 0;
            }
            .description {
              text-align: center;
              font-size: 1rem;
              line-height: 1.5rem;
            }
          }
          .lists {
            width: 90%;
            margin: 0 auto;
            .list {
              height: 25rem;
              margin: .6rem;
              text-align: center;
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
      .about-bottom {
        background: #e8ecf4;
        .content {
          .lists {
            .list {
              background: #fff;
              border: solid 0rem #e7e7e7;
              cursor: pointer;
              &:hover {
                box-shadow: 0 0 2.5rem #b6c1d3;
              }
              .avatar {
                height: 40%;
                text-align: center;
                padding: 2rem;
                background-size: cover;
                img {
                  width: 8rem;
                  height: 8rem;
                }
              }
              .mate {
                height: 35%;
                .mate-info {
                  font-size: 1.5rem;
                  padding: 1.5rem;
                  height: 0;
                }
                .education, .specialization {
                  line-height: 1.5rem;
                  width: 85%;
                  margin: 0 auto;
                  text-align: center;
                }
              }
              .company {
                flex: 1;
                margin: 1.5rem auto;
                img {
                  background-size: cover;
                  height: 2rem;
                }
              }
            }
          }
        }
      }
      .honors {
        background: #ffffff;
        .content {
          margin-bottom: 0;
          .lists {
            .list {
              .avatar {
                text-align: center;
                padding: 0 0 2rem 0;
                background-size: cover;
                img {
                  height: 16rem;
                }
              }
              .mate {
                .title {
                  line-height: 1.5rem;
                  font-weight: bolder;
                  width: 85%;
                  margin: 0 auto;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .our-description {
      margin-bottom: 0;
    }
    .number {
      text-align: center;
    }
    .middle-content {
      padding-top: 0;
      .services {
        .left {
          padding-right: 0;
        }
      }
    }
    .company-description {
      margin: 1rem 0rem;
      padding: 0 .5rem;
      text-align: center;
      .name {
        text-align: center;
      }
    }
    .services {
      margin: 1rem 0rem;
      text-align: center;
    }
  }
  @media screen and (min-width: 1100px) {
    .our-description {
      margin-bottom: 3rem;
    }
    .middle-content {
      padding-top: 3rem;
      .services {
        .left {
          padding-right: 1.3rem;
        }
      }
    }
    .company-description {
      margin: 1rem 5rem;
    }
    .services {
      margin: 1rem 5rem;
    }
  }
</style>
