<template>
  <div
    class="page-header"
    :style="{
      background: `url(${headerInfo.Imgurl}) no-repeat center`,
      height: `${height}rem`
    }">
    <div class="header-title">
      <p class="title">{{headerInfo.title}}</p>
      <p class="description">{{headerInfo.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 22
    },
    headerInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-header {
    width: 100%;
    background-size: cover!important;
    display: table;
    font-family: Avenir-Roman;
    .header-title {
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      .title {
        height: 2rem;
        color: #fefefe;
        font-size: 2rem;
      }
      .description {
        font-size: 1.2rem;
        font-family: MicrosoftYaHeiUI;
        letter-spacing: 0rem;
        color: #fefefe;
        opacity: 0.6;
      }
    }
  }
</style>
