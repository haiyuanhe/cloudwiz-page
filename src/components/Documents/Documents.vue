<template>
  <div class="document-wrapper">
    <CloudHeader/>
    <div class="document-container">
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
  name: 'document',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/contact/contact-background.png'),
        title: '文档下载',
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

</style>
