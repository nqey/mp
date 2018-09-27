<template>
  <div v-if="visible">
    <div id="myModal" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         style="display: block;">
      <div class="modal-dialog" role="document" :style="{ width: width != null ? `${width}px` : 'auto' }">
        <div class="modal-content"
             :style="{ width: width != null ? `${width}px` : 'auto', height: height != null ? `${height}px` : 'auto'}">

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close"><span
              aria-hidden="true">×</span></button>
            <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
          </div>

          <div class="modal-body">
            <slot name='body'></slot>
          </div>

          <div v-if="okText || cancelText" class="modal-footer">
            <slot name='footer'>
              <button v-if="okText" type="button" class="btn btn-primary" @click="confirm" :disabled="disabled">
                {{ okText }}
              </button>
              <button v-if="cancelText" type="button" class="btn btn-default" @click="close">{{ cancelText }}</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade in"></div>
  </div>
</template>

<script>
import { validate } from '@/config/validator'

export default {
  name: 'modalBase',
  props: {
    title: {
      type: String,
      default: '模态框'
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    ok: {
      type: Function,
      default: null
    },
    cancel: {
      type: Function,
      default: null
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      visible: false,
      disabled: false
    }
  },
  computed: {},
  methods: {
    @validate()
    async confirm () {
      this.disabled = true

      if (this.ok) {
        const r = await this.ok()
        if (r !== false) {
          this.visible = false
        }
      } else {
        this.visible = false
      }

      this.disabled = false
    },
    close () {
      if (this.cancel) {
        const r = this.cancel()
        if (r !== false) {
          this.visible = false
        }
      } else {
        this.visible = false
      }
    },
    open () {
      this.visible = true
    },
    toggle () {
      this.visible = !this.visible
    }
  },
  watch: {},
  components: {
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
