<template>
  <div class="contact-wrapper">
    <CloudHeader/>
    <div class="contact-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="address-info">
        <a-row>
          <a-col
            :xs="24"
            :sm="24"
            :md="{span: 8, offset: 2}"
            :lg="{span:8, offset: 2}"
          >
            <div class="map-img">
              <a href="//f.amap.com/64cXQ_0942kf5" target="blank">
                <img src="../../common/images/contact/map.png" alt="map">
              </a>
            </div>
          </a-col>
          <a-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
          >
            <div class="address-content">
              <p>云兴维智（北京）科技有限公司</p>
              <p>地址：北京市海淀区清河永泰园甲1号建金中心</p>
              <p>商务合作：service@cloudwiz.cn</p>
              <p>招聘：hr@cloudwiz.cn</p>
            </div>
          </a-col>
        </a-row>
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
  name: 'contact',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/contact/contact-background.png'),
        title: '联系我们',
        description: '行业顶尖的专家团队为您服务'
      }
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
  .contact-wrapper {
    background: #f7f8fb;
    .address-info {
      margin-top: 3rem;
      border: 1px solid #1b8cb9;
      img {
        width: 100%;
      }
      .address-content {
        border: 1px solid #dd8f1a;
        width: 70%;
        margin: auto;
        p {
          font-size: 1.1rem;
        }
      }
    }
  }
</style>
