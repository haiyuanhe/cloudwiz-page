<template>
  <div class="header-wrapper">
    <a-row
      type="flex"
      justify="center">
      <a-col
        :xs="20"
        :sm="20"
        :md="20"
        :lg="18"
        :xl="18"
        :xxl="16">
      <div class="header-container">
        <div class="cloudwiz-logo">
          <router-link to="/">
            <img src="../../common/images/cloudwiz.jpg" alt="Cloudwiz"/>
          </router-link>
        </div>
        <div class="navbar" v-show="this.screenWidth >= 1100">
          <ul>
            <router-link class="menu-item home" to="/">
              <span class="tab-link">首页</span>
            </router-link>
            <a-dropdown class="menu-item ant-dropdown-link products tab-link">
              <span class="tab-link">产品中心<a-icon type="down" style="color: #979b9b;"/></span>
              <a-menu
                slot="overlay"
                theme="dark"
                :style="{
                  top: 1 + 'rem',
                  left: -1.6 + 'rem',
                  color: '#191d26'
                }">
                <a-menu-item>
                  <router-link to="/cloudwiz">
                    <span>产品介绍</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" href="//www.cloudwiz.cn/document">产品使用说明</a>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/FAQ">
                    <span>常见问题</span>
                  </router-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <router-link class="menu-item user-case" to="/cases">
              <span class="tab-link">客户案例</span>
            </router-link>
            <router-link class="menu-item company-news" to="/news">
              <span class="tab-link">公司动态</span>
            </router-link>
            <a-dropdown class="ant-dropdown-link menu-item about-us">
              <span class="tab-link">关于我们<a-icon type="down"/></span>
              <a-menu
                slot="overlay"
                theme="dark"
                :style="{
                  top: 1 + 'rem',
                  left: -1.6 + 'rem'
                }">
                <a-menu-item>
                  <router-link to="/about">
                    <span>关于公司</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/contact">
                    <span>联系我们</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/recruitment">
                    <span>招贤纳士</span>
                  </router-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <li class="menu-item offline-analysis">
              <a target="_blank" href="//play.cloudwiz.cn/offline_analysis">离线分析平台</a>
            </li>
          </ul>
        </div>
        <div class="used" v-show="this.screenWidth >= 1100">
          <div class="use free-used">
            <a target="_blank" href="//app.cloudwiz.cn/signup">免费试用</a>
          </div>
          <div class="use signin">
            <a target="_blank" href="//app.cloudwiz.cn/login">登录</a>
          </div>
        </div>
        <div class="mobail" v-show="this.screenWidth <= 1100">
          <a-row
            type="flex"
            justify="center">
            <a-col
              :xs="20"
              :sm="20"
              :md="19"
              :lg="19"
              :xl="18"
              :xxl="16">
                <a-dropdown :trigger="['click']" @visibleChange="change" class="mobail-menu">
                  <div class="ant-dropdown-link">
                    <a-icon :type="type" @click="open"/>
                  </div>
                  <a-menu
                    slot="overlay"
                    theme="dark"
                    class="menu-lists"
                    v-show="show"
                    :style="{
                      top: -5 + 'px',
                      left: 0,
                      width: screenWidth + 'px',
                    }"
                  >
                    <a-menu-item class="analysis" @click="handleMenuClick">
                      <a target="_blank" href="//play.cloudwiz.cn/offline_analysis" class="offline-analysis">离线分析平台</a>
                    </a-menu-item>
                    <a-menu-item @click="handleMenuClick">
                      <router-link class="menu-item home" to="/">
                        <span class="tab-link menu-link">首页</span>
                      </router-link>
                    </a-menu-item>
                    <a-collapse accordion class="menu-item">
                      <a-collapse-panel
                        header="产品中心"
                        style="
                          background: #001529;
                          border: none!important;
                          borderRadius: 0;
                        "
                      >
                        <a-menu-item @click="handleMenuClick">
                          <router-link to="/cloudwiz">
                            <span>产品介绍</span>
                          </router-link>
                        </a-menu-item>
                        <a-menu-item @click="handleMenuClick">
                          <a target="_blank" href="//www.cloudwiz.cn/document">产品使用说明</a>
                        </a-menu-item>
                        <a-menu-item @click="handleMenuClick">
                          <router-link to="/FAQ">
                            <span>常见问题</span>
                          </router-link>
                        </a-menu-item>
                      </a-collapse-panel>
                    </a-collapse>
                    <a-menu-item @click="handleMenuClick">
                      <router-link class="menu-item user-case" to="/cases">
                        <span class="tab-link menu-link">客户案例</span>
                      </router-link>
                    </a-menu-item>
                    <a-menu-item @click="handleMenuClick">
                      <router-link class="menu-item company-news" to="/news">
                        <span class="tab-link menu-link">公司动态</span>
                      </router-link>
                    </a-menu-item>
                    <a-collapse accordion class="menu-item">
                      <a-collapse-panel
                        header="关于我们"
                        style="
                          background: #001529;
                          border: none;
                          borderRadius: 0;
                        "
                      >
                        <a-menu-item @click="handleMenuClick">
                          <router-link to="/about">
                            <span>关于公司</span>
                          </router-link>
                        </a-menu-item>
                        <a-menu-item @click="handleMenuClick">
                          <router-link to="/contact">
                            <span>联系我们</span>
                          </router-link>
                        </a-menu-item>
                        <a-menu-item @click="handleMenuClick">
                          <router-link to="/recruitment">
                            <span>招贤纳士</span>
                          </router-link>
                        </a-menu-item>
                      </a-collapse-panel>
                    </a-collapse>
                    <a-menu-item @click="handleMenuClick">
                      <a target="_blank" href="//app.cloudwiz.cn/login" class="menu-link">登录</a>
                    </a-menu-item>
                    <a-menu-item @click="handleMenuClick">
                      <a target="_blank" href="//app.cloudwiz.cn/signup" class="menu-link">免费试用</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
            </a-col>
          </a-row>
        </div>
      </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'CloudHeader',
  data () {
    return {
      type: 'bars',
      show: false,
      screenWidth: document.body.clientWidth
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  methods: {
    change (e) {
    },
    open () {
      this.show = true
    },
    handleMenuClick () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .ant-collapse {
    border: none;
  }
  .ant-collapse /deep/ .ant-collapse-content {
    border: none;
    background: #0c111d;
    .ant-collapse-content-box {
      padding: 0 0 .6rem 1rem;
    }
    a {
      color: #fff;
    }
  }
  .header-wrapper {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #001529;
    color: #999b9f;
    .header-container {
      width: 100%;
      margin: 0 auto;
      height: 4rem;
      line-height: 4rem;
      display: flex;
      .cloudwiz-logo {
        width: 10%;
        line-height: 5rem;
        text-align: left;
        img {
          width: 4rem;
        }
      }
      .navbar {
        flex: 1;
        margin-left: 2rem;
        .menu-item {
          display: inline;
          margin: 1rem;
          line-height: 4rem;
          color: #999b9f;
          cursor: pointer;
          &.router-link-exact-active {
            .tab-link {
              color: #fff;
            }
          }
        }
        .offline-analysis {
          a {
            line-height: 4rem;
            font-size: 1rem;
            color: #026dcd;
            font-style: italic;
          }
        }
      }
      .used {
        width: 20%;
        color: #fff;
        a {
          color: #fff;
        }
        .use {
          float: right;
          padding: 0 .8rem;
        }
        .free-used {
          font-family: Avenir;
          a {
            padding: 0.3rem 1rem;
            border: 1px solid #436dec;
          }
        }
      }
      .mobail {
        position: absolute;
        line-height: 4rem;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .mobail {
      right: 1rem;
    }
    .cloudwiz-logo {
      position: absolute;
      left: 0%;
      margin-left: 1rem;
    }
    .analysis {
      background-color: #0c111d;
      .offline-analysis {
        color: #026dcd;
        font-size: 1.25rem;
        font-style: italic;
        letter-spacing: 0rem;
      }
    }
    .ant-dropdown-menu-item {
      padding: 1.1rem 2rem;
      font-size: 1.1rem;
    }
    .ant-dropdown-menu-dark, .ant-dropdown-menu-dark .ant-dropdown-menu {
      text-align: left;
    }
    .ant-dropdown-menu-dark .ant-dropdown-menu-item .menu-link {
      color: #fff;
    }
    .undefined-item {
      padding: .8rem 1rem;
    }
    .ant-collapse /deep/ .ant-collapse-header {
      color: #ffffff!important;
      padding: 1.1rem 2rem!important;
      text-align: left;
      font-size: 1.1rem;
      .arrow {
        line-height: 3.5rem;
        font-size: 1.2rem;
        left: calc(100% - 5rem)!important;
      }
    }
  }
  @media screen and (max-width: 1100px) and (min-width: 768px) {
    .mobail {
      right: 1rem;
    }
    .cloudwiz-logo {
      position: absolute;
      left: 0%;
      margin-left: 1rem;
    }
    .analysis {
      background-color: #0c111d;
      .offline-analysis {
        color: #026dcd;
        font-size: 1.25rem;
        font-style: italic;
        letter-spacing: 0rem;
      }
    }
    .ant-dropdown-menu-item {
      padding: 1.1rem 2rem;
      font-size: 1.1rem;
    }
    .ant-dropdown-menu-dark, .ant-dropdown-menu-dark .ant-dropdown-menu {
      text-align: left;
    }
    .ant-dropdown-menu-dark .ant-dropdown-menu-item .menu-link {
      color: #fff;
    }
    .undefined-item {
      padding: .6rem 1rem;
    }
    .ant-collapse /deep/ .ant-collapse-header {
      color: #ffffff!important;
      padding: 1.1rem 2rem!important;
      text-align: left;
      font-size: 1.1rem;
      .arrow {
        line-height: 3.5rem;
        font-size: 1.2rem;
        left: calc(100% - 5rem)!important;
      }
    }
  }
  @media screen and (min-width: 1100px) {
    .mobail {
      right: 2rem;
    }
    .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
      padding: 5px 1.4rem;
    }
    .ant-dropdown-menu-dark, .ant-dropdown-menu-dark .ant-dropdown-menu {
      text-align: left;
    }
    .ant-dropdown-menu-dark .ant-dropdown-menu-item .menu-link {
      color: #999b9f;
    }
    .undefined-item {
      padding: .6rem 0;
    }
  }
</style>
