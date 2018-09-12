<template>
  <div id="app">
    <a-back-top />
    <router-view/>
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
