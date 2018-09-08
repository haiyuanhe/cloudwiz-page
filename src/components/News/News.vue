<template>
  <div class="news-wrapper">
    <CloudHeader/>
    <div class="news-container">
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
  name: 'news',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/news/news-backgroud.png'),
        title: '公司动态',
        description: '引领云运维管理的智能化时代'
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
