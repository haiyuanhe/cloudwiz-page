<template>
  <div class="home-wrapper">
    <CloudHeader />
    <div class="home-container">
      <div class="home-top">
        <div class="top-content">
          <p class="ai">用数据让运维智能化</p>
          <p class="aiops">国内领先的全IT架构AIOps</p>
          <p class="aiops">智能运维平台</p>
          <a-button class="free-used" type="primary">免费使用</a-button>
          <a-button class="understand" ghost>了解产品</a-button>
        </div>
      </div>
      <div class="home-middle">
        <p class="middle-title">为什么选择运行？</p>
        <div class="features">
          <a-row
            type="flex"
            justify="center"
          >
            <a-col
                v-for="(item, index) in features"
                :key="index"
                :xs="32"
                :sm="16"
                :md="16"
                :lg="8"
              >
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
              :gutter="16"
              type="flex"
              justify="center"
            >
              <a-col
                v-for="(item, index) in users"
                :key="index"
                :xs="16"
                :sm="16"
                :md="4"
                :lg="6"
              >
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
                :gutter="16"
                type="flex"
                justify="center"
              >
                <a-col
                  :xs="32"
                  :sm="24"
                  :md="20"
                  :lg="16"
                >
                  <el-carousel
                    indicator-position="none"
                    :autoplay="false"
                    arrow="always">
                    <el-carousel-item v-for="(item, index) in evaluation" :key="index">
                      <div class="evaluation">
                        <p class="ct">{{item.content}}</p>
                        <div>
                          <div class="icon">
                            <img :src="item.icon" :alt="item.company">
                          </div>
                          <p class="cm">{{item.company}}</p>
                          <p class="m">{{item.major}}</p>
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
              <a-row :gutter="24">
                <a-col
                  :xs="32"
                  :sm="32"
                  :md="24"
                  :lg="12"
                >
                  <div class="f">
                    <div class="f-title">离线分析平台</div>
                    <p>无需安装探针，直接导入数据</p>
                    <p>多种算法选择，完整功能试用</p>
                    <p>轻松享受Cloudwiz极致便捷体验</p>
                    <a-button type="primary">立即试用</a-button>
                  </div>
                </a-col>
                <a-col
                  :xs="32"
                  :sm="32"
                  :md="24"
                  :lg="12"
                >
                  <div class="f">
                    <div class="f-title">在线试用</div>
                    <p>在线探针安装，实时响应</p>
                    <p>使用真实数据，直观查看</p>
                    <p>所见即所得的完整效果呈现</p>
                    <a-button class="f-used">立即试用</a-button>
                  </div>
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
          description: '进行环境、需求分析，提佛那个专业的咨询服务。'
        },
        {
          name: require('common/images/home/icon/technical_skills.png'),
          title: '技术支撑能力',
          description: '行业顶尖的云计算专家，提供强大的技术支撑。'
        }
      ],
      users: [
        {
          name: require('common/images/home/users/wenjuan.png'),
          title: '问卷网'
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
          name: require('common/images/home/users/WYNDHAMHotel.png'),
          title: '温德姆酒店'
        },
        {
          name: require('common/images/home/users/SPDBank.png'),
          title: '浦发银行'
        },
        {
          name: require('common/images/home/users/benz.png'),
          title: '奔驰'
        },
        {
          name: require('common/images/home/users/CCSG.png'),
          title: '国家电网'
        },
        {
          name: require('common/images/home/users/huizhou.png'),
          title: '惠州水务'
        }
      ],
      evaluation: [
        {
          company: '中国电力科学院',
          icon: require('common/images/cases/CEPRI.png'),
          major: '人工智能应用研究所平台技术室',
          content: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。'
        },
        {
          company: '中国电力科学院',
          icon: require('common/images/cases/WYNDHAM.png'),
          major: '人工智能应用研究所平台技术室2',
          content: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。'
        },
        {
          company: '中国电力科学院',
          icon: require('common/images/cases/benz_icon.png'),
          major: '人工智能应用研究所平台技术室3',
          content: '由于我院的集群已达到相当规模，人工运维成本及压力非常大，利用Cloudwiz大数据智能运维系统产品，可以帮助我们快速发现问题，并定位问题，并根据系统推荐的解决方案来及时修复问题。'
        }
      ]
    }
  },
  components: {
    CloudHeader,
    CloudFooter
  }
}
</script>

<style lang="scss">
.home-wrapper {
  width: 100%;
  background: #f7f8fb;
  .home-container {
    .home-top {
      height: 25rem;
      color: #fff;
      background-image: url('../../common/images/home/home_header.jpg');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      .top-content {
        position: absolute;
        top: 25%;
        left: 22%;
        .ai {
          color: #928f8f;
          font-size: 1rem;
          padding: .5rem 0;
        }
        .aiops {
          color: #fefefe;
          font-size: 1.6rem;
          padding: .8rem 0;
        }
        .free-used {
          margin-top: .8rem;
          margin-right: 1rem;
        }
        .understand {
          border-color: #077fea;
        }
      }
    }
    .home-middle {
      padding-bottom: 3rem;
      color: #000;
      background: #f7f8fb;
      .middle-title {
        font-size: 1.4rem;
        padding: 2rem 0;
        text-align: center;
      }
      .features {
        width: 90%;
        margin: 0 auto;
        .feature-wrapper {
          margin: .8rem .6rem;
          border: 1px solid #efefef;
          box-shadow: 0 0 1.5rem #ccc;
          cursor: pointer;
          &:hover {
            box-shadow: 0 0 1.5rem rgb(121, 114, 114);
          }
          .feature {
            width: 90%;
            margin: 2.5rem auto;
            display: flex;
            .left {
              width: 30%;
              text-align: center;
              padding: .8rem 0;
              img {
                width: 2.5rem;
                height: 2.5rem;
              }
            }
            .right {
              flex: 1;
              height: 5rem;
              .feature-title {
                font-size: 1.2rem;
                padding: .6rem 0;
              }
              .feature-description {
                line-height: 1.1rem;
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
      .users-wrapper {
        background: #292d38;
        .users {
          width: 90%;
          margin: 0 auto;
          padding: 3rem 2rem;
          color: #fff;
          .user {
            height: 4rem;
            img {
              height: 2.3rem;
            }
          }
        }
      }
      .user-feedback {
        background: #f7f8fb;
        .slogan {
          font-size: 1.3rem;
          text-align: center;
          padding-bottom: 12rem;
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
                .el-carousel__arrow {
                  background-color: rgba(7, 127, 234, .8)!important;
                }
                .evaluation {
                  background: #fff;
                  text-align: center;
                  padding: 2rem;
                  box-shadow: 0 0 0.2rem 1px #fff;
                  border: 1px solid rgb(224, 224, 224);
                  box-shadow: 0 0 1.5rem #fff;
                  cursor: pointer;
                  &:hover {
                    box-shadow: 0 0 1.5rem rgb(145, 139, 139);
                  }
                  .ct {
                    font-size: 1.1rem;
                    text-align: left;
                    width: 80%;
                    margin: 0 auto;
                    line-height: 1.6rem;
                    font-weight: bold;
                  }
                  img {
                    padding: 2rem 0 1rem 0;
                    height: 6rem;
                  }
                  .cm {
                    font-size: 1.3rem;
                    font-weight: bold;
                  }
                  .m {
                    color: #928f8f;
                  }
                }
              }
            }
          }
        }
      }
      .new-features-wrapper {
        margin-top: -6rem;
        .new-features {
          width: 90%;
          margin: 0 auto;
          .f-lists {
            width: 80%;
            margin: 0 auto;
          }
          .f {
            margin: .6rem;
            padding-bottom: .5rem;
            text-align: center;
            background: #fff;
            border: 1px solid #efefef;
            cursor: pointer;
            &:hover {
              box-shadow: 0 0 1.5rem rgb(209, 202, 202);
            }
            .f-title {
              font-size: 1.2rem;
              padding: 1rem;
            }
            .f-used {
              color: inherit;
            }
            & > p {
              line-height: .4rem;
              font-size: .7rem;
              padding-bottom: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
