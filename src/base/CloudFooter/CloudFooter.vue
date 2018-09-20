<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <a-row
        type="flex"
        justify="center"
      >
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="20"
          :xl="20"
          :xxl="20"
        >
          <a-row
            type="flex"
            justify="center"
          >
            <a-col
              class="logo"
              :xs="24"
              :sm="24"
              :md="24"
              :lg="6"
              :xl="6"
              :xxl="6"
            >
              <router-link to="/">
                <img src="../../common/images/cloudwiz.jpg" alt="Cloudwiz"/>
              </router-link>
            </a-col>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="18"
              :xl="18"
              :xxl="18"
            >
              <a-row
                type="flex"
                justify="center"
              >
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="8"
                  :lg="12"
                  :xl="12"
                  :xxl="12"
                >
                  <div class="link contact">
                    <p class="link-header">联系方式</p>
                    <p class="item">电话：010-6295 8816</p>
                    <p class="item">邮箱：<a href="mailto:service@cloudwiz.cn">service@cloudwiz.cn</a></p>
                    <p class="item">地址：<a href="//f.amap.com/64cXQ_0942kf5" target="_blank">北京市海淀区清河永泰园甲1号建金中心</a></p>
                  </div>
                </a-col>
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="8"
                  :lg="6"
                  :xl="6"
                  :xxl="6"
                >
                  <div class="link contact">
                    <p class="link-header">快捷入口</p>
                    <p class="item">
                      <a target="_blank" href="//app.cloudwiz.cn">免费试用</a>
                    </p>
                    <p class="item">
                      <router-link to="/cloudwiz">
                        <span>产品价格</span>
                      </router-link>
                    </p>
                    <p class="item">
                      <router-link to="/recruitment">
                        <span>招贤纳士</span>
                      </router-link>
                    </p>
                  </div>
                </a-col>
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="8"
                  :lg="6"
                  :xl="6"
                  :xxl="6"
                >
                  <div class="link product-instructions">
                  <p class="link-header">产品使用说明</p>
                  <p class="item"><a target="_blank" href="//www.cloudwiz.cn/document">快速开始</a></p>
                  <p class="item"><a target="_blank" href="//www.cloudwiz.cn/document/part2/software_and_hardware_environment.html">软硬件环境</a></p>
                  <p class="item"><a target="_blank" href="//www.cloudwiz.cn/document/part4/collector.html">应用场景</a></p>
                </div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <a-row
        type="flex"
        justify="center"
      >
        <a-col
          :xs="20"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="20"
          :xxl="20"
        >
          <p class="copyright">
            Copyright &copy; {{(new Date()).getFullYear()}} 云兴维智（北京）科技有限公司 | 京ICP备17008193号
          </p>
        </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'CloudFooter'
}
</script>

<style lang="scss" scoped>
  .footer-wrapper {
    background: #191d26;
    color: #999b9f;
    .footer-container {
      padding: 5rem 5rem 2rem 5rem;
      .logo {
        margin-bottom: 2rem;
        padding-top: 1.2rem;
      }
      .link{
        padding-left: .8rem;
        padding-top: 1.2rem;
        line-height: 1.2rem;
        .link-header {
          font-size: 1.1rem;
          color: #fff;
        }
      }
      .item {
        padding: .2rem 0;
        font-size: .9rem;
      }
    }
    .copyright {
      text-align: center;
      padding: 2rem 0;
      line-height: 1rem;
      padding: 1rem 0;
    }
  }
</style>
