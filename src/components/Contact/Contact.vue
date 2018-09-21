<template>
  <div class="contact-wrapper">
    <CloudHeader/>
    <div class="contact-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="address-info">
        <a-row
          type="flex"
          justify="center">
          <a-col
            :xs="22"
            :sm="22"
            :md="22"
            :lg="22">
            <a-row
              type="flex"
              justify="center">
              <a-col
                style="text-align: center;"
                :xs="{ span: 24}"
                :sm="{ span: 13}"
                :md="{ span: 13}"
                :lg="{ span: 10}"
                :xl="{ span: 7}">
                <div class="map-img">
                  <a href="https://www.amap.com/search?query=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E6%B8%85%E6%B2%B3%E6%B0%B8%E6%B3%B0%E5%9B%AD%E7%94%B21%E5%8F%B7%E5%BB%BA%E9%87%91%E4%B8%AD%E5%BF%83&city=110000&geoobj=116.221264%7C39.790989%7C116.699169%7C40.024058&zoom=12" target="blank">
                    <img src="../../common/images/contact/map.png" alt="map">
                  </a>
                </div>
              </a-col>
              <a-col
                :xs="{ span: 24}"
                :sm="{ span: 13}"
                :md="{ span: 13}"
                :lg="{ span: 24}"
                :xl="{ span: 10}">
                <div class="address-wrapper">
                  <div class="address-content">
                    <p>云兴维智（北京）科技有限公司</p>
                    <p>地址：北京市海淀区清河永泰园甲1号建金中心</p>
                    <p>商务合作：service@cloudwiz.cn</p>
                    <p>招聘：hr@cloudwiz.cn</p>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
    <CloudFooter/>
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
  @media screen and (max-width: 1100px) {
    .map-img {
      margin-bottom: 0;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 1100px) {
    .address-info {
      .map-img {
        margin-bottom: 3rem;
        img {
          width: 100%;
        }
      }
    }
  }
  .contact-wrapper {
    background: #f7f8fb;
    .address-info {
      margin-top: 3rem;
      .address-wrapper {
        display: flex;
        .address-content {
          margin: 2rem auto;
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
</style>
