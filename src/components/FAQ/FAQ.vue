<template>
  <div class="faq-wrapper">
    <CloudHeader/>
    <div class="faq-container">
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
  name: 'faq',
  data () {
    return {
      headerInfo: {
        Imgurl: require('common/images/faq/faq-background.png'),
        title: '常见问题',
        description: '您想知道的，都能在这里找到'
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
