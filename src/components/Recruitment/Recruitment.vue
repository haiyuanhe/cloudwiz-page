<template>
  <div class="recruitment-wrapper">
    <CloudHeader/>
    <div class="recruitment-container">
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
  name: 'recruitment',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/recruitment/recruitment-background.png'),
        title: '在云兴工作',
        description: '和优秀的人一起，获得不一样的成长'
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
