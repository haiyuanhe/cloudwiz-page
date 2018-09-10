<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="../../common/images/cloudwiz.jpg" alt="Cloudwiz"/>
        </router-link>
      </div>
      <div class="navbar">
        <ul>
          <router-link class="menu-item home" to="/home">
            <span class="tab-link">首页</span>
          </router-link>
          <a-dropdown class="ant-dropdown-link tab-link">
            <span class="tab-link">产品中心<a-icon type="down" style="color: #979b9b"/></span>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/cloudwiz">
                  <span>Cloudwiz</span>
                </router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/documents">
                  <span>文档下载</span>
                </router-link>
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
            <a-menu slot="overlay">
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
      <div class="used">
        <div class="use signin">
          <a href="#">登录</a>
        </div>
        <div class="use free-used">
          <a href="#">免费使用</a>
        </div>
        <div class="use change-lang">
          English
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloudHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper {
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
        line-height: 4rem;
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
          padding: 0 .2rem;
        }
        .free-used {
          font-family: Avenir;
          a {
            padding: .3rem;
            border: 1px solid #003fff;
          }
        }
      }
    }
  }
</style>
