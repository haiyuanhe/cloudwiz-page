<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="../../common/images/cloudwiz.jpg" alt="Cloudwiz"/>
        </router-link>
      </div>
      <div class="navbar" v-show="this.screenWidth >= 1100">
        <ul>
          <router-link class="menu-item home" to="/">
            <span class="tab-link">首页</span>
          </router-link>
          <a-dropdown class="menu-item ant-dropdown-link tab-link">
            <span class="tab-link">产品中心<a-icon type="down" style="color: #979b9b"/></span>
            <a-menu
              slot="overlay"
              theme="dark"
              :style="{
                top: 1 + 'rem',
                left: -.8 + 'rem'
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
            <span class="tab-link">关于我们<a-icon type="down" style="color: #979b9b"/></span>
            <a-menu
              slot="overlay"
              theme="dark"
              :style="{
                top: 1 + 'rem',
                left: -.8 + 'rem'
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
        <div class="use signin">
          <a target="_blank" href="//app.cloudwiz.cn">登录</a>
        </div>
        <div class="use free-used">
          <a target="_blank" href="//app.cloudwiz.cn">免费试用</a>
        </div>
      </div>
      <div class="mobail" v-show="this.screenWidth <= 1100">
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
                  color: #a8adaf;
                  border:none;
                  borderRadius: none;
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
                  color: #a8adaf;
                  border:none;
                  borderRadius: none;
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
              <a target="_blank" href="//play.cloudwiz.cn/offline_analysis" class="menu-link">离线分析平台</a>
            </a-menu-item>
            <a-menu-item @click="handleMenuClick">
              <a target="_blank" href="//app.cloudwiz.cn" class="menu-link">登录</a>
            </a-menu-item>
            <a-menu-item @click="handleMenuClick">
              <a target="_blank" href="//app.cloudwiz.cn" class="menu-link">免费试用</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
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
  @media screen and (max-width: 700px) {
    .logo {
        position: absolute;
        left: 20%;
        margin-left: 2rem;
      }
  }
  @media screen and (max-width: 1100px) {
    .header-container {
      .logo {
        position: absolute;
        left: 0;
      }
    }
    .ant-dropdown-menu-item {
      padding-bottom: .6rem;
    }
    .menu-link {
      font-size: 1.1rem;
    }
    .ant-dropdown-menu-dark, .ant-dropdown-menu-dark .ant-dropdown-menu {
      text-align: center;
    }
    .undefined-item {
      padding: .3rem;
    }
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 0 0 1rem 0;
    }
  }
  .ant-collapse {
    border: none;
  }
  .ant-collapse /deep/ .ant-collapse-content {
    border: none;
    background: inherit;
    .ant-collapse-content-box {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .ant-collapse /deep/ .ant-collapse-header {
    color: #a8adaf!important;
    padding: 3px 12px;
    text-align: center;
    font-size: 1.1rem;
    .arrow {
      line-height: 30px;
      left: calc(50% + 40px);
    }
  }
  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #191d26;
    color: #999b9f;
    .header-container {
      height: 4rem;
      line-height: 4rem;
      width: 80%;
      margin: 0 auto;
      display: flex;
      .logo {
        width: 10%;
        line-height: 5rem;
        text-align: right;
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
            color: #0072ff;
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
          float: left;
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
        right: 4rem;
        line-height: 4rem;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
</style>
