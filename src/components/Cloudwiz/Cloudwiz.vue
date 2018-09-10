<template>
  <div class="cloudwiz-wrapper">
    <CloudHeader/>
    <div class="cloudwiz-container">
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
  name: 'cloudwiz',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/products/cloudwiz-background.png'),
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
