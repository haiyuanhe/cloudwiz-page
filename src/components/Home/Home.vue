<template>
  <div class="home-wrapper">
    <CloudHeader />
    <div class="home-container">
      <div class="home-top">
        <a-row
          type="flex"
          justify="center">
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="8"
            class="home-top-text">
            <div>
              <p class="ai">用数据让运维智能化</p>
              <p class="aiops">国内领先的全IT架构AIOps</p>
              <p class="aiops">智能运维平台</p>
              <a-button class="free-used" type="primary">
                <a target="_blank" href="//app.cloudwiz.cn/signup">免费试用</a>
              </a-button>
              <a-button class="understand" ghost>
                <router-link to="/cloudwiz">
                  <span>了解产品</span>
                </router-link>
              </a-button>
            </div>
          </a-col>
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="16"
            class="home-top-img"
          >
            <img src="../../common/images/bg.jpg" alt="背景图片">
          </a-col>
        </a-row>
      </div>
      <div class="home-middle">
        <p class="middle-title">为什么选择云兴？</p>
        <div class="features">
          <a-row
            type="flex"
            justify="center">
            <a-col
              v-for="(item, index) in features"
              :key="index"
              :xs="22"
              :sm="12"
              :md="12"
              :lg="8">
              <div class="feature-wrapper">
                <div class="feature">
                  <div class="left">
                    <img :src="item.name" :alt="item.title"/>
                  </div>
                  <div class="right">
                    <div class="feature-title">{{item.title}}</div>
                    <div class="feature-description">{{item.description}}</div>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="home-bottom">
        <div class="users-wrapper">
          <div class="users">
            <a-row
              type="flex"
              justify="center">
              <a-col
                v-for="(item, index) in users"
                :key="index"
                :xs="12"
                :sm="12"
                :md="8"
                :lg="6">
                <div class="user">
                  <img :src="item.name" :alt="item.title"/>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="user-feedback">
          <div class="slogan">
            <p>他们都信赖我们！</p>
          </div>
          <div class="users-faq-wrapper">
            <div class="faq">
              <a-row
                type="flex"
                justify="center">
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="20"
                  :lg="16">
                  <el-carousel
                    indicator-position="none"
                    :autoplay="false"
                    arrow="always">
                    <el-carousel-item v-for="(item, index) in evaluation" :key="index" :class="item.className">
                      <div class="e-wrapper">
                        <div class="evaluation">
                          <div class="e">
                            <p class="ct">{{item.content}}</p>
                            <div>
                              <div class="icon">
                                <img :src="item.icon" :alt="item.company">
                              </div>
                              <p class="cm">{{item.company}}</p>
                              <p class="m">{{item.evaluator}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </a-col>
              </a-row>
            </div>
          </div>
        </div>
        <div class="new-features-wrapper">
          <div class="new-features">
            <div class="f-lists">
              <a-row
                type="flex"
                justify="center">
                <a-col
                  :xs="22"
                  :sm="20"
                  :md="20"
                  :lg="19"
                  :xl="18">
                  <a-row
                    type="flex"
                    justify="center">
                    <a-col
                      :xs="22"
                      :sm="22"
                      :md="11"
                      :lg="11">
                      <div class="f">
                        <div class="f-title">离线分析平台</div>
                        <p>无需安装探针，直接导入数据</p>
                        <p>多种算法选择，完整功能试用</p>
                        <p>轻松享受Cloudwiz极致便捷体验</p>
                        <a-button type="primary">
                          <a target="_blank" href="http://211.159.171.12/offline_analysis">立即试用</a>
                        </a-button>
                      </div>
                    </a-col>
                    <a-col
                      :xs="22"
                      :sm="22"
                      :md="11"
                      :lg="11">
                      <div class="f">
                        <div class="f-title">在线试用</div>
                        <p>在线探针安装，实时响应</p>
                        <p>使用真实数据，直观查看</p>
                        <p>所见即所得的完整效果呈现</p>
                        <a-button class="f-used">
                          <a target="_blank" href="//app.cloudwiz.cn/signup">立即试用</a>
                        </a-button>
                      </div>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </div>
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

export default {
  name: 'Home',
  data () {
    return {
      screenHeight: document.body.clientHeight,
      features: [
        {
          name: require('common/images/home/icon/unified_monitoring.png'),
          title: '统一监控',
          description: '打通数据孤岛，全链路数据监控。'
        },
        {
          name: require('common/images/home/icon/precise_alarm.png'),
          title: '精准报警',
          description: '减少无效告警，提升告警精度。'
        },
        {
          name: require('common/images/home/icon/intelligent_analysis.png'),
          title: '智能分析',
          description: '智能检测，预先感知系统异常。'
        },
        {
          name: require('common/images/home/icon/rapid_positioning.png'),
          title: '快速故障定位',
          description: '有效定位溯源，减少故障几率和排查时间。'
        },
        {
          name: require('common/images/home/icon/reduce_cost.png'),
          title: '减少运维成本',
          description: '解放运维工程师，优化管理成本和平台计费。'
        },
        {
          name: require('common/images/home/icon/friendly_interface.png'),
          title: '界面友好易用',
          description: '界面交互友好易用，数据展示直观可见。'
        },
        {
          name: require('common/images/home/icon/professional_service.png'),
          title: '全面专业服务',
          description: '提供跨云运维、迁移服务和成本优化服务。'
        },
        {
          name: require('common/images/home/icon/strategic_consulting.png'),
          title: '上云战略咨询',
          description: '进行环境、需求分析，提供专业的咨询服务。'
        },
        {
          name: require('common/images/home/icon/technical_skills.png'),
          title: '技术支撑能力',
          description: '行业顶尖的云计算专家，提供强大的技术支撑。'
        }
      ],
      users: [
        {
          name: require('common/images/home/users/china_unionpay.png'),
          title: '中国银联'
        },
        {
          name: require('common/images/home/users/CCBank.png'),
          title: '中国建设银行'
        },
        {
          name: require('common/images/home/users/guangda.png'),
          title: '光大证券'
        },
        {
          name: require('common/images/home/users/SPDBank.png'),
          title: '浦发银行'
        },
        {
          name: require('common/images/home/users/yunnan_power.png'),
          title: '云南电网'
        },
        {
          name: require('common/images/home/users/CCSG.png'),
          title: '国家电网'
        },
        {
          name: require('common/images/home/users/huizhou.png'),
          title: '惠州水务'
        },
        {
          name: require('common/images/home/users/BMW.png'),
          title: '宝马'
        },
        {
          name: require('common/images/home/users/benz.png'),
          title: '奔驰'
        },
        {
          name: require('common/images/home/users/wenjuan.png'),
          title: '问卷网'
        },
        {
          name: require('common/images/home/users/feihe_gray.png'),
          title: '飞鹤乳业'
        },
        {
          name: require('common/images/home/users/aoleqi_gray.png'),
          title: '奥乐齐'
        }
      ],
      evaluation: [
        {
          company: '中国电力科学院',
          icon: require('common/images/cases/CEPRI.png'),
          evaluator: '人工智能应用研究所平台技术室',
          content: '由于我院的集群规模已经达到上百个节点，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可 以帮助我们快速的发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。',
          className: 'CEPRI'
        },
        {
          company: '问卷网',
          icon: require('common/images/cases/wenjuanwang.png'),
          evaluator: '问卷网CTO梁群',
          content: '部署Cloudwiz产品之后，统一了我们的运维管理工具，优化了管理流程，运维质量和效率都得到了极大的提升。每周提供的专家巡检报告，让我们对系统的关键服务、刷票情况有了直观了解，大量节省了人力和时间成本，是非常实用的运维解决方案。',
          className: 'wenjuanwang'
        },
        {
          company: '车友援',
          icon: require('common/images/cases/cheyouyuan.png'),
          evaluator: '车友援研发部门CTO',
          content: 'Cloudwiz作为一款优秀的AIOps产品，具有超前的理念。不仅能够帮助我们全面监控各服务器和应用的健康指标，还结合人工智能大幅减少我们分析问题、定位问题的时间。在对PostgreSQL数据库的监控上，Cloudwiz实时提供死锁和慢查询的详细信息，帮助我们解决了很多性能问题。',
          className: 'che-you-yuan'
        }
      ]
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    CloudHeader,
    CloudFooter
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .users-faq-wrapper {
    height: 16rem;
  }
  .e-wrapper {
    width: 100%;
    margin: 0 auto;
  }
  .CEPRI, .wenjuanwang, .che-you-yuan {
    .ct {
      font-size: .8rem!important;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1100px) {
  .users-faq-wrapper {
    height: 18rem;
  }
  .e-wrapper {
    width: 80%;
    margin: 0 auto;
  }
  .CEPRI, .wenjuanwang, .che-you-yuan {
    .ct {
      font-size: .8rem;
    }
  }
}
@media screen and (min-width: 1100px) {
  .users-faq-wrapper {
    height: 16rem;
  }
  .e-wrapper {
    width: 80%;
    margin: 0 auto;
  }
  .CEPRI, .wenjuanwang, .che-you-yuan {
    .ct {
      font-size: 1rem;
    }
  }
}
.users-wrapper {
  background: #292d38;
  .users {
    width: 95%;
    margin: 0 auto;
    padding: 3rem 0;
    color: #fff;
    text-align: left;
    .user {
      height: 5rem;
      padding-left: 4em;
      img {
        max-width: 13rem;
        height: 2.5rem;
      }
    }
  }
}
.home-top {
  height: 42rem;
  background: linear-gradient(180deg, #111415, #273b49);
  // row
  > div {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    // 2 col
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .home-top-text > div {
      padding-left: 2em;
    }
    .home-top-img {
      height: 100%;
      padding: 4em 0;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: .9rem;
    box-shadow: 1.4rem 1.4rem 4.8rem 0rem rgba(2, 8, 22, 0.64);
  }
}
.home-middle {
  width: 90%;
  margin: 0 auto;
}
.home-wrapper {
  width: 100%;
  background: #f7f8fb;
  .home-container {
    height: 100%;
    overflow: hidden;
    .home-top {
      color: #fff;
      position: relative;
      .ai {
        color: #fefefe;
        opacity: 0.75;
        padding: .5rem 0;
        letter-spacing: .2rem;
        font-size: 1rem;
      }
      .aiops {
        color: #fefefe;
        font-size: 1.8rem;
        padding: 0;
      }
      .free-used {
        margin-right: 1rem;
        padding: 0 1.5rem;
        border-radius: 2px;
      }
      .understand {
        border-color: #077fea;
        padding: 0 1.5rem;
      }
    }
    .home-middle {
      margin-top: 2rem;
      padding-bottom: 3rem;
      color: #000;
      background: #f7f8fb;
      .middle-title {
        font-size: 1.4rem;
        padding: 2rem 0;
        text-align: center;
      }
      .features {
        .feature-wrapper {
          background: #fff;
          margin: 1rem .4rem;
          border: 1px solid #fff;
          box-shadow: 1rem 1rem 6rem 0rem rgba(2, 8, 22, 0.1);
          .feature {
            margin: 2.5rem;
            display: flex;
            .left {
              width: 30%;
              text-align: center;
              padding: .6rem;
              img {
                height: 3rem;
              }
            }
            .right {
              flex: 1;
              height: 5rem;
              .feature-title {
                font-size: 1.2rem;
                padding-top: .6rem;
                padding-bottom: .5rem
              }
              .feature-description {
                line-height: 1.2rem;
                font-size: .8rem;
                color: #928f8f;
              }
            }
          }
        }
      }
    }
    .home-bottom {
      width: 100%;
      .user-feedback {
        background: #f7f8fb;
        .slogan {
          font-size: 1.3rem;
          text-align: center;
          padding-bottom: 10rem;
          background: #292d38;
          color: #fff;
        }
        .users-faq-wrapper {
          margin: 0 auto;
          position: relative;
          top: -1.5rem;
          .faq {
            position: relative;
            top: -8rem;
            .el-carousel {
              .el-carousel__container {
                height: 400px;
                .el-carousel__arrow {
                  top: 38%;
                  width: 3rem;
                  height: 3rem;
                  font-size: 2rem;
                  background-color: rgba(7, 127, 234, .8);
                }
                .evaluation {
                  background: #fff;
                  text-align: center;
                  padding: 2rem;
                  border-radius: 4px;
                  box-shadow: 1.2rem 1.2rem 1rem 0 rgba(0, 0, 0, 0.06);
                  .ct {
                    font-size: 1rem;
                    text-align: left;
                    width: 80%;
                    margin: 0 auto;
                    line-height: 2rem;
                    font-weight: bold;
                  }
                  img {
                    padding: 2rem 0 1rem 0;
                    height: 6rem;
                  }
                  .cm {
                    font-size: 1.3rem;
                    color: #000;
                    margin-bottom: 0.6rem;
                  }
                  .m {
                    color: #928f8f;
                    font-size: 0.8rem;
                  }
                }
              }
            }
          }
        }
      }
      .new-features-wrapper {
        .new-features {
          margin-bottom: 3rem;
          .f {
            margin: .6rem;
            padding: 2rem;
            text-align: center;
            background: #fff;
            cursor: pointer;
            &:hover {
              box-shadow: 2rem 2rem 6rem 0rem rgba(0, 0, 0, 0.06);
            }
            .f-title {
              font-size: 1.2rem;
              padding: .5rem 1rem 1.5rem 1rem;
            }
            .f-used {
              color: inherit;
            }
            & > p {
              font-size: .8rem;
            }
            & > button {
              margin-top: 1rem;
              padding: 0 2rem;
              border-radius: 2px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .users-wrapper {
    .users {
      .user {
        height: 4rem;
        padding-left: 1em;
        img {
          height: 1.9rem;
          min-height: 2rem;
        }
      }
    }
  }
  .home-top {
    height: 35rem;
    img {
      box-shadow: .1rem .1rem 2.4rem 0rem rgba(2, 8, 22, 0.64);
    }
    > div {
      text-align: center;
      .home-top-img {
        padding: 0;
        height: auto;
        width: 90%;
      }
      .home-top-text > div {
        padding-left: 0;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .users-wrapper {
    .users {
      .user {
        height: 4rem;
        img {
          height: 2.4rem;
        }
      }
    }
  }
  .home-top {
    img {
      box-shadow: .1rem .1rem 2.4rem 0rem rgba(2, 8, 22, 0.64);
    }
    > div {
      .home-top-img {
        padding: 2em;
        height: auto;
      }
    }
  }
}
@media screen and (min-width: 1600px) {
  .home-top {
    height: 35rem;
    background-image: linear-gradient(45deg, #111415 0%, #273b49 100%);
    > div {
      width: 70%;
    }
  }
  .home-middle {
    width: 70%;
  }
  .users-wrapper {
    .users {
      width: 70%;
    }
  }
}
</style>
