<template>
  <div id="app">
    <a-back-top />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .ant-modal-mask {
    background: rgba(0, 0, 0, .3);
  }
  #app {
    background: #f7f8fb;
    margin-top: 64px;
    .cloudwiz-wrapper {
      .cloudwiz-middle {
        .c {
          .p-service {
            color: #9fa1a8;
          }
        }
      }
      .cloudwiz-bottom {
        .fs {
          .content {
            .not-support {
              color: #bcbcbc;
              font-weight: 100;
            }
          }
        }
      }
    }
  }
  .container {
    max-width: 1336px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
</style>
