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
      default: 20
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
    .header-title {
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      .title {
        height: 1rem;
        color: #fefefe;
        font-size: 2rem;
      }
      .description {
        color: #bcb6b4;
        font-size: 1.2rem;
      }
    }
  }
</style>
