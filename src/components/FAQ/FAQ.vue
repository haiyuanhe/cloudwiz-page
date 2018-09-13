<template>
  <div class="faq-wrapper">
    <CloudHeader/>
    <div class="faq-container">
      <PageHeader :headerInfo="headerInfo" />
      <div class="faq-content">
        <a-row
          type="flex"
          justify="center"
        >
          <a-col
            style="border: 1px solid red;"
            :xs="24"
            :sm="8"
            :md="24"
            :lg="10"
          >
            <a-row
            >
              <a-col
                :xs="12"
                :sm="16"
                :md="10"
                :lg="16"
                v-for="(faq, index) in faqs"
                :key="index"
              >
                <div
                  class="faq-type"
                  :class='{"faq-type-active": currentIndex === index}'
                  @click="getCurrentIndex(index)"
                >
                  {{faq.type}}
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col
            style="border: 1px solid blue;"
            class="faq-lists"
            :xs="24"
            :sm="16"
            :md="16"
            :lg="14"
          >
            <a-row>
              <a-col
              >
                <div
                  class="faq-qa"
                  v-if="faqs[currentIndex].lists.length > 0"
                >
                  <a-collapse accordion>
                    <a-collapse-panel
                      v-for="(item) in faqs[currentIndex].lists"
                      :header="item.q"
                      :key="item.q"
                    >
                      <p v-html="item.a"></p>
                    </a-collapse-panel>
                  </a-collapse>
                </div>
                <div class="no-qa" v-else>暂无问题列表</div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
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
      currentIndex: 0,
      headerInfo: {
        Imgurl: require('common/images/faq/faq-background.png'),
        title: '常见问题',
        description: '您想知道的，都能在这里找到'
      },
      faqs: [
        {
          type: '一般问题',
          lists: [
            {
              q: '如何采集数据? 如果内网的数据如何收集?',
              a: '通过安装我们定制的采集收集器(探针), 来采集需要的数据, 如果是内网用户,能够将数据发送到外网即可使用, 或者联系 service@cloudwiz.cn 定制更多不同的方案.'
            },
            {
              q: '如何安装/使用?如何获得服务?',
              a: '请先联系 service@cloudwiz.cn 给出具体的账号才能开始使用, 我们会配合用户给出一份满意和定制化的方案.'
            },
            {
              q: '你们的数据采集会影响servie 性能吗?',
              a: '我们的探针有比较严格的时间间隔管理, 不会对主服务造成性能上面的影响.'
            },
            {
              q: '你们的数据是实时采集吗？我能实时看到吗？',
              a: '数据是实时采集的，从传输到展现需要1分钟时间。可在智能面板中创建相应的面板来查看.'
            },
            {
              q: '你们的产品是免费的还是收费的?',
              a: '可以联系service@cloudwiz.cn 或致电 17070866703 询问详情'
            },
            {
              q: '如何保证数据的安全性?',
              a: `
                <p>加密传输：数据传输都是在 https 的 SSL 端口进行传输，防止嗅探。同时，在传输过程中会采取加密和混淆的方式，生成一系列无法被识别的代码和字符串，从而达到安全传输的目的。</p>
                <p>隔离保存：传输过来的数据会储存在云服务上，我们采用的是成熟稳定的云服务商如 阿里云/ Ucloud，并集成了他们的安全机制，在内部也拥有一套完整的安全机制和权限管理，并且生产和开发环境完全隔离。</p>
              `
            },
            {
              q: '能够支持什么浏览器?',
              a: '目前阶段我们只支持 火狐和chrome 浏览器. 或者有他们内核的浏览器. 并不支持 IE8 或以下的浏览器.'
            }
          ]
        },
        {
          type: '常规问题',
          lists: []
        }
      ]
    }
  },
  methods: {
    getCurrentIndex (i) {
      console.log(i)
      this.currentIndex = i
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
  .faq-wrapper {
    .faq-container {
      .faq-content {
        margin: 4rem;
        .faq-type {
          text-align: center;
          margin: 0 1rem 1rem 1rem;
          padding: 1rem;
        }
        .faq-type-active {
          border: 1px solid rgb(186, 186, 189);
          background: #fff;
        }
        .faq-lists {
          .list {
            background: #fff;
          }
          .no-qa {
            margin: 2rem;
          }
        }
      }
    }
  }
</style>
