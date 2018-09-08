<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="logo">
        <img src="../../common/images/cloudwiz.jpg" alt="Cloudwiz"/>
      </div>
      <div class="link-group">
        <div class="link contact">
          <p class="link-header">联系方式</p>
          <p class="item">电话：010-6295 8816</p>
          <p class="item">邮箱：<a href="mailto:service@cloudwiz.cn">service@cloudwiz.cn</a></p>
          <p class="item">地址：<a href="//f.amap.com/64cXQ_0942kf5">北京市海淀区清河永泰园甲1号建金中心</a></p>
        </div>
        <div class="link quick-entry">
          <p class="link-header">快捷入口</p>
          <p class="item"><a href="#">免费试用</a></p>
          <p class="item"><a href="#">产品价格</a></p>
          <p class="item"><a href="#">招贤纳士</a></p>
        </div>
        <div class="link product-instructions">
          <p class="link-header">产品使用说明</p>
          <p class="item"><a href="#">快速开始</a></p>
          <p class="item"><a href="#">软硬件环境</a></p>
          <p class="item"><a href="#">应用场景</a></p>
        </div>
      </div>
    </div>
    <p class="copyright">
      copyright &copy; 2018 云兴维智（北京）科技有限公司 | 京ICP备17008193号
    </p>
  </div>
</template>

<script>
export default {
  name: 'CloudFooter',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer-wrapper {
    background: #191d26;
    color: #999b9f;
    .footer-container {
      padding: 3rem 0;
      width: 80%;
      margin: 3rem auto;
      display: flex;
      .logo {
        width: 30%;
      }
      .link-group {
        flex: 1;
        display: grid;
        grid-template-columns: 50% 25% 25%;
        .link-header {
          margin-bottom: 16px;
          font-size: 1.1rem;
          color: #cfc9c9;
        }
        .item {
          padding: .2rem 0;
          font-size: .9rem;
        }
      }
    }
    .copyright {
      width: 50%;
      margin: 0 auto;
      font-size: .8rem;
      text-align: center;
      padding-bottom: 2rem;
    }
  }
</style>
