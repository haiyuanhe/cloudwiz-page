<template>
  <div class="products-wrapper">
    <CloudHeader/>
    <div class="products-container">
      <PageHeader :headerInfo="headerInfo" />
    </div>
    <CloudFooter />
  </div>
</template>

<script>
import CloudHeader from 'base/CloudHeader/CloudHeader'
import CloudFooter from 'base/CloudFooter/CloudFooter'
import PageHeader from 'base/PageHeader/PageHeader'

export default {
  name: 'products',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/news/news-backgroud.png'),
        title: 'Cloudwiz',
        description: '完善的工具化AIOps智能运维平台'
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

</style>
