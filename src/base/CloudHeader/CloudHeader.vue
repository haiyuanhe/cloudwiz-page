<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="../../common/images/cloudwiz.jpg" alt="Cloudwiz"/>
        </router-link>
      </div>
      <div class="navbar" v-show="this.screenWidth >= 970">
        <ul>
          <router-link class="menu-item home" to="/home">
            <span class="tab-link">首页</span>
          </router-link>
          <a-dropdown class="ant-dropdown-link tab-link">
            <span class="tab-link">产品中心<a-icon type="down" style="color: #979b9b"/></span>
            <a-menu slot="overlay" theme="dark">
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
            <a-menu slot="overlay" theme="dark">
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
            <span>离线分析平台</span>
          </li>
        </ul>
      </div>
      <div class="used" v-show="this.screenWidth >= 970">
        <div class="use signin">
          <a target="_blank" href="//app.cloudwiz.cn">登录</a>
        </div>
        <div class="use free-used">
          <a target="_blank" href="//app.cloudwiz.cn">免费使用</a>
        </div>
      </div>
      <div class="mobail" v-show="this.screenWidth <= 970">
        <a-dropdown :trigger="['click']" @visibleChange="change" class="mobail-menu">
          <div class="ant-dropdown-link">
            <a-icon :type="type" @click="open"/>
          </div>
          <a-menu
            slot="overlay"
            theme="dark"
            class="menu-lists"
            :style="{
              top: -5 + 'px',
              left: 0,
              width: screenWidth + 'px',
            }"
          >
            <a-menu-item>
              <router-link class="menu-item home" to="/home">
                <span class="tab-link">首页</span>
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
                <a-menu-item>
                  <router-link to="/cloudwiz">
                    <span>产品介绍</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/documents">
                    <span>产品使用说明</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/FAQ">
                    <span>常见问题</span>
                  </router-link>
                </a-menu-item>
              </a-collapse-panel>
            </a-collapse>
            <a-menu-item>
              <router-link class="menu-item user-case" to="/cases">
                <span class="tab-link">客户案例</span>
              </router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link class="menu-item company-news" to="/news">
                <span class="tab-link">公司动态</span>
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
              </a-collapse-panel>
            </a-collapse>
            <a-menu-item>离线分析平台</a-menu-item>
            <a-menu-item>
              <a target="_blank" href="//app.cloudwiz.cn">登录</a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank" href="//app.cloudwiz.cn">免费使用</a>
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
      type: 'appstore',
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
          console.log(that.screenWidth)
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
      this.type = e ? 'close' : 'appstore'
    },
    open () {
      this.type = this.type === 'close' ? 'appstore' : 'close'
    }
  }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 970px) {
    .header-container {
      .logo {
        position: absolute;
        left: 40%;
      }
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
  }
  .ant-collapse /deep/ .ant-collapse-header {
    color: #a8adaf!important;
    padding: 3px 12px;
    text-align: center;
    .arrow {
      line-height: 30px;
      left: calc(50% + 30px);
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
      width: 90%;
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
          &.router-link-active {
            .tab-link {
              color: #fff;
            }
          }
        }
        .offline-analysis {
          a {
            font-size: 1.25rem;
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
            padding: .3rem;
            border: 1px solid #003fff;
          }
        }
      }
      .mobail {
        position: absolute;
        left: 1rem;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
</style>
