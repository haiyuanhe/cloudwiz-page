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
  #app {
    background: #f7f8fb;
    margin-top: 4rem;
    overflow-x: hidden;
    overflow-y: scroll;
    .ant-modal-mask {
      background: rgba(0, 0, 0, .1)!important;
    }
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
              color: #9d9fa3;
            }
          }
        }
      }
    }
  }
</style>
