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
          <router-link class="menu-item home" to="/">
            <span>首页</span>
          </router-link>
          <router-link class="menu-item product" to="/products">
            <span>产品中心</span>
          </router-link>
          <router-link class="menu-item user-case" to="/cases">
            <span>客户案例</span>
          </router-link>
          <router-link class="menu-item company-news" to="/news">
            <span>公司动态</span>
          </router-link>
          <router-link class="menu-item about-us" to="/about">
            <span>关于我们</span>
          </router-link>
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
