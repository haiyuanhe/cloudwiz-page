<template>
  <div class="cases-wrapper">
    <CloudHeader/>
    <div class="cases-container">
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
  name: 'cases',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/cases/cases-background.png'),
        title: '客户案例',
        description: '国内外头部企业的共同选择'
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
